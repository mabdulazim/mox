import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DATA_DIR = path.resolve(__dirname, 'data')

// which URL paths map to which event/log file
const EVENTS = {
  '/api/visits': 'visits',
  '/api/downloads': 'downloads',
}

const countFile = (name) => path.join(DATA_DIR, `${name}.json`)
const logFile = (name) => path.join(DATA_DIR, `${name}.log`)

function readCount(name) {
  try {
    return JSON.parse(fs.readFileSync(countFile(name), 'utf-8')).count || 0
  } catch {
    return 0
  }
}

// parse log lines: "ISO\tip\tcount=N" -> [{ time, ip }], newest first
function readLogs(name, limit = 1000) {
  try {
    const lines = fs.readFileSync(logFile(name), 'utf-8').trim().split('\n').filter(Boolean)
    return lines.slice(-limit).reverse().map((line) => {
      const [time, ip] = line.split('\t')
      return { time, ip }
    })
  } catch {
    return []
  }
}

function increment(name, req) {
  fs.mkdirSync(DATA_DIR, { recursive: true })
  const count = readCount(name) + 1
  fs.writeFileSync(countFile(name), JSON.stringify({ count }, null, 2))
  const ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '-'
  fs.appendFileSync(logFile(name), `${new Date().toISOString()}\t${ip}\tcount=${count}\n`)
  return count
}

function json(res, code, body) {
  res.statusCode = code
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(body))
}

// GET /api/<event>[?logs=1] -> { count, logs? }; POST /api/<event> -> increment
function handler(req, res, next) {
  const pathname = req.url.split('?')[0]
  const name = EVENTS[pathname]
  if (!name) return next()
  if (req.method === 'GET') {
    const body = { count: readCount(name) }
    if (/[?&]logs=1(&|$)/.test(req.url)) body.logs = readLogs(name)
    return json(res, 200, body)
  }
  if (req.method === 'POST') return json(res, 200, { count: increment(name, req) })
  return json(res, 405, { error: 'method not allowed' })
}

function visitsApiPlugin() {
  return {
    name: 'visits-api',
    configureServer(server) {
      server.middlewares.use(handler)
    },
    configurePreviewServer(server) {
      server.middlewares.use(handler)
    },
  }
}

export default defineConfig({
  plugins: [react(), visitsApiPlugin()],
})
