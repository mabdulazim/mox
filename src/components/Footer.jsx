import Logo from './Logo.jsx'
import { Chevron, YouTube, LinkedIn, XLogo, Facebook, ArrowUp } from './icons.jsx'

const COLS = [
  {
    title: 'عن المؤسسة',
    links: [
      'عن المؤسسة', 'الأخبار و الفعاليات', 'اتفاقية الاستخدام', 'الخصوصية وسرية البيانات',
      'سياسة حرية المعلومات', 'سياسة أمن المنصة', 'اتفاقية مستوى الخدمة', 'الشروط والأحكام',
      'النشرة البريدية', 'سياسة التعامل مع الشكاوى ورضا العملاء',
    ],
  },
  {
    title: 'الدعم والمساندة',
    links: ['اتصل بنا', 'الأسئلة الشائعة', 'المشاركة الإلكترونية', 'بلاغ عن فساد', 'خريطة الموقع', 'التوظيف'],
  },
  {
    title: 'روابط مهمة',
    links: [
      'وزارة المالية', 'وزارة الموارد البشرية والتنمية الاجتماعية', 'المنصة الوطنية',
      'الجمعية الدولية للضمان الاجتماعي (ISSA)', 'منصة المشاركة الإلكترونية',
      'الإستراتيجية الوطنية للبيانات و الذكاء الاصطناعي', 'منصة البيانات المفتوحة',
    ],
    extra: { label: 'تاريخ آخر تحديث للبيانات', value: '07-15-2026' },
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        {/* brand block */}
        <div className="footer-brand">
          <Logo className="footer-brand__logo" />

          <div className="footer-brand__phone">
            <span>الرقم المجاني</span>
            <b>199044</b>
          </div>

          <div className="footer-brand__social">
            <span>قنوات التواصل الاجتماعي</span>
            <div className="social-row">
              <a href="https://www.facebook.com/SaudiGOSI" aria-label="Facebook"><Facebook /></a>
              <a href="https://x.com/SaudiGOSI" aria-label="X"><XLogo /></a>
              <a href="https://www.linkedin.com/company/general-organization-for-social-insurance" aria-label="LinkedIn"><LinkedIn /></a>
              <a href="https://www.youtube.com/user/SaudiGOSI" aria-label="YouTube"><YouTube /></a>
            </div>
          </div>

          <div className="footer-brand__apps">
            <span>تطبيقات الجوال</span>
            <div className="apps-row">
              <a href="https://www.gosi.gov.sa/ar/MobileApp" aria-label="App Store"><img className="store-img" src="/app-store.svg" alt="App Store" /></a>
              <a href="https://www.gosi.gov.sa/ar/MobileApp" aria-label="Google Play"><img className="store-img" src="/google-play.svg" alt="Google Play" /></a>
            </div>
          </div>

          <a href='https://raqmi.dga.gov.sa/platforms/DigitalStamp/ShowCertificate/261'>
            <img className="reg-img" src="/gosi-logo-new.png" alt="مسجلة لدى هيئة الحكومة الرقمية" />
          </a>
        </div>
        
        {/* link columns */}
        <div className="footer-cols">
          {COLS.map((col) => (
            <div className="footer-col" key={col.title}>
              <h4 className="footer-col__title">
                <Chevron className="footer-col__caret" />
                <span>{col.title}</span>
              </h4>
              <ul>
                {col.links.map((l) => (
                  <li key={l}><a href="https://www.gosi.gov.sa/ar">{l}</a></li>
                ))}
              </ul>
              {col.extra && (
                <div className="footer-col__extra">
                  <div>{col.extra.label}</div>
                  <b>{col.extra.value}</b>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* bottom bar */}
      <div className="site-footer__bottom">
        <div className="bottom__content">
          <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="أعلى الصفحة">
            <ArrowUp />
          </button>
          <span>جميع الحقوق محفوظة للمؤسسة العامة للتأمينات الإجتماعية © 2026</span>
        </div>
      </div>
    </footer>
  )
}
