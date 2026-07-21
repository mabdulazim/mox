// Real GOSI logo (downloaded SVG). variant="light" uses the white version for dark backgrounds.
export default function Logo({ variant = 'default', className = '' }) {
  const src = variant === 'light' ? '/gosi-logo-white.svg' : '/gosi-logo.svg'
  return <img className={`gosi-logo-img ${className}`} src={src} alt="gosi — التأمينات الاجتماعية" />
}
