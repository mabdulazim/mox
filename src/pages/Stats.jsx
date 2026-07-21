import { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function fmt(iso) {
  try {
    return new Date(iso).toLocaleString('en-GB', { timeZone: 'Asia/Riyadh', hour12: false })
  } catch {
    return iso
  }
}

function Panel({ label, data, error }) {
  return (
    <div className="stats-panel">
      <div className="stats-card">
        <span className="stats-card__label">{label}</span>
        <span className="stats-card__num">
          {error ? '—' : data.count === null ? '...' : data.count.toLocaleString('en-US')}
        </span>
      </div>
      {data.logs.length > 0 && (
        <div className="stats-logs">
          <h3>السجل ({data.logs.length})</h3>
          <div className="stats-logs__scroll">
            <table>
              <thead>
                <tr><th>#</th><th>الوقت (توقيت الرياض)</th><th>IP</th></tr>
              </thead>
              <tbody>
                {data.logs.map((l, i) => (
                  <tr key={i}><td>{i + 1}</td><td>{fmt(l.time)}</td><td>{l.ip}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Stats() {
  const [visits, setVisits] = useState({ count: null, logs: [] })
  const [downloads, setDownloads] = useState({ count: null, logs: [] })
  const [error, setError] = useState(false)

  const load = () => {
    setError(false)
    Promise.all([
      fetch('/api/visits?logs=1').then((r) => r.json()),
      fetch('/api/downloads?logs=1').then((r) => r.json()),
    ])
      .then(([v, d]) => {
        setVisits({ count: v.count, logs: v.logs || [] })
        setDownloads({ count: d.count, logs: d.logs || [] })
      })
      .catch(() => setError(true))
  }

  useEffect(load, [])

  return (
    <div className="page">
      <Header />
      <main className="stats-main">
        {error && <p className="stats-card__err">تعذّر تحميل البيانات. تأكد أن الخادم يعمل.</p>}
        <button className="btn btn--blue" onClick={load}>تحديث</button>
        <div className="stats-grid">
          <Panel label="عدد الزيارات لصفحة التحقق من الشهادة" data={visits} error={error} />
          <Panel label="عدد تحميلات الشهادة" data={downloads} error={error} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
