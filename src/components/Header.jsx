import { useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'
import { Search, Headset, Globe, Accessibility, Chevron, Avatar } from './icons.jsx'

// Each nav item may carry `columns`: an array of columns, each an array of link labels.
// Content for الخدمات / المركز الإعلامي / إحصاءات وبيانات / تقدير is taken from the real site.
// عن المؤسسة / الأنظمة واللوائح use best-guess content (send screenshots to make exact).
const NAV = [
  { label: 'الرئيسية' },
  {
    label: 'عن المؤسسة',
    align: 'end',
    columns: [
      ['نبذة عامة', 'تاريخ المؤسسة', 'مجلس الإدارة', 'الهيكل التنظيمي'],
      ['الإدارة التنفيذية', 'المشاركة الإلكترونية', 'التوظيف', 'اتصل بنا'],
      ['البرامج والمبادرات', 'الأخبار والفعاليات', 'السياسات والاستراتيجيات', 'الميزانية والمصروفات'],
      ['المنافسات والمشتريات', 'شركاء المؤسسة', 'التنمية المستدامة', 'رحلة العميل'],
    ],
  },
  {
    label: 'الأنظمة واللوائح',
    columns: [
      ['نظام التأمينات الاجتماعية 1421هـ', 'نظام التأمينات الاجتماعية 1445هـ', 'نظام التقاعد المدني', 'نظام التقاعد العسكري', 'نظام تبادل المنافع', 'نظام التأمين ضد التعطل عن العمل "ساند"'],
      ['النظام الموحد لمد الحماية التأمينية', 'المستندات المطلوبة', 'المصطلحات', 'كتيبات الأنظمة', 'الحقوق والواجبات'],
    ],
  },
  {
    label: 'الخدمات',
    columns: [['خدمات الأفراد', 'خدمات الأعمال', 'التحقق السريع']],
  },
  {
    label: 'المركز الإعلامي',
    columns: [
      ['الأخبار', 'المبادرات والشراكات', 'حملاتنا الإعلامية', 'المؤتمرات والمعارض'],
      ['الفعاليات والأنشطة', 'نشرات إعلامية', 'الهوية البصرية'],
    ],
  },
  {
    label: 'إحصاءات وبيانات',
    columns: [['البيانات المفتوحة', 'التقرير الإحصائي السنوي', 'النشرات الإحصائية']],
  },
  {
    label: 'تقدير',
    columns: [['نبذة عامة', 'المسارات']],
  },
]

function NavItem({ item }) {
  const hasMenu = !!item.columns
  return (
    <div className={`nav-item ${hasMenu ? 'has-menu' : ''} ${item.align === 'end' ? 'nav-item--end' : ''}`}>
      <a href="#" className="navbar__link">
        <span>{item.label}</span>
        {hasMenu && <Chevron className="navbar__caret" />}
      </a>
      {hasMenu && (
        <div className="nav-panel">
          <div className="nav-panel__inner">
            {item.columns.map((col, i) => (
              <ul className="nav-col" key={i}>
                {col.map((link) => (
                  <li key={link}><a href="https://www.gosi.gov.sa/">{link}</a></li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const navigate = useNavigate()
  
  return (
    <header className="gosi-header">
      {/* top utility bar */}
      <div className="topbar">
        <div className="topbar__inner">
          <button className="ask-pill" type="button" onClick={() => navigate('https://gosi-labeeb.masdr.sa/ar/Welcome')}>
            <span>تحتاج مساعدة؟ اسأل أمين</span>
            <Avatar size={28} />
          </button>
          <button className="topbar__item" type="button" onClick={() => navigate('https://www.gosi.gov.sa/')}><Headset /><span>اتصل بنا</span></button>
          <button className="topbar__item" type="button" onClick={() => navigate('https://www.gosi.gov.sa/')}><Globe /><span>Language</span></button>
          <button className="topbar__item" type="button" onClick={() => navigate('https://www.gosi.gov.sa/')}><Accessibility /><span>إمكانية الوصول</span></button>
          <button className="topbar__item" type="button" onClick={() => navigate('https://www.gosi.gov.sa/')}><Search /><span>بحث</span></button>
        </div>
      </div>

      {/* main nav bar */}
      <div className="navbar">
        <div className="navbar__inner">
          <a href="https://www.gosi.gov.sa/" className="navbar__logo">
            <Logo className="logo-desktop" />
            <Logo variant="light" className="logo-mobile" />
          </a>
          <nav className="navbar__menu">
            {NAV.map((n) => <NavItem key={n.label} item={n} />)}
          </nav>
          <div className="navbar__actions">
            <div className="navbar__desktop-actions">
              <button className="btn btn--green" onClick={() => navigate('https://www.gosi.gov.sa/')}>دخول الأفراد</button>
              <button className="btn btn--blue" onClick={() => navigate('https://www.gosi.gov.sa/')}>دخول الأعمال</button>
            </div>
            <button className="btn btn--green navbar__login-mobile" onClick={() => navigate('https://www.gosi.gov.sa/')}>
              تسجيل الدخول
            </button>
            <button className="navbar__burger" type="button" aria-label="القائمة">
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
