// Cloudflare Worker: serves the built SPA (Static Assets) + a Durable Object event counter.
// Tracks separate atomic counters + timestamped logs per event type (visits, downloads).
// Same /api/<event> contract as the local Vite dev plugin, so the React app is unchanged.

const MAX_LOGS = 1000
const EVENTS = { '/api/visits': 'visits', '/api/downloads': 'downloads' }

export class VisitCounter {
  constructor(state) {
    this.storage = state.storage
  }

  async fetch(request) {
    const url = new URL(request.url)
    const type = EVENTS[url.pathname] || 'visits'
    const countKey = `${type}:count`
    const logsKey = `${type}:logs`

    if (request.method === 'POST') {
      // input-gating makes this get/put sequence atomic per Durable Object
      const count = ((await this.storage.get(countKey)) || 0) + 1
      const logs = (await this.storage.get(logsKey)) || []
      logs.push({
        time: new Date().toISOString(),
        ip: request.headers.get('CF-Connecting-IP') || '-',
      })
      await this.storage.put(countKey, count)
      await this.storage.put(logsKey, logs.slice(-MAX_LOGS))
      return Response.json({ count })
    }

    const count = (await this.storage.get(countKey)) || 0
    if (url.searchParams.get('logs') === '1') {
      const logs = (await this.storage.get(logsKey)) || []
      return Response.json({ count, logs: logs.slice().reverse() }) // newest first
    }
    return Response.json({ count })
  }
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url)
    if (EVENTS[url.pathname]) {
      // one global instance holds all event counters
      const id = env.VISIT_COUNTER.idFromName('global')
      return env.VISIT_COUNTER.get(id).fetch(request)
    }
    // everything else -> static assets (index.html fallback handles SPA routes)
    return env.ASSETS.fetch(request)
  },
}
