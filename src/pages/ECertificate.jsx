import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import { Check, Avatar } from '../components/icons.jsx'

export default function ECertificate() {
  const navigate = useNavigate()
  const counted = useRef(false)

  // log one visit per page open (ref guard = safe under React StrictMode)
  useEffect(() => {
    if (counted.current) return
    counted.current = true
    fetch('/api/visits', { method: 'POST' }).catch(() => {})
  }, [])

  return (
    <div className="page">
      <Header />

      {/* breadcrumb strip */}
      <div className="breadcrumb">
        <div className="breadcrumb__inner">
          <a href="https://www.gosi.gov.sa/ar" className="breadcrumb__home">الرئيسية</a>
        </div>
      </div>

      {/* verification result */}
      <div className="content">
        <main className="verify-main">
          <div className="verify-card">
            <div className="verify-card__check">
              <Check />
            </div>
            <div className="verify-card__content">
              <p className="verify-card__title">تم التحقق من الشهادة وهي صالحة وسارية المفعول</p>
              <hr className="verify-card__divider" />
              <a className="btn btn--green verify-card__download" href="/certificates/Certificate.pdf" download="Certificate.pdf"
                 onClick={() => { fetch('/api/downloads', { method: 'POST' }).catch(() => {}) }}>
                تنزيل نسخة من الشهادة
              </a>
            </div>
          </div>

          <button className="btn-return" onClick={() => navigate('https://www.gosi.gov.sa/ar')}>
            العودة للصفحة الرئيسية
          </button>
        </main>
      </div>

      <Footer />

      {/* floating chat widget */}
      {/* <button className="ask-widget" type="button">
        <span>اسأل أمين</span>
        <Avatar size={44} />
      </button> */}
    </div>
  )
}
