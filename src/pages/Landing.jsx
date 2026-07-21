import { useEffect } from 'react'

// Landing immediately redirects to Google (replace = no back-button return here).
export default function Landing() {
  useEffect(() => {
    window.location.replace('https://www.gosi.gov.sa/ar')
  }, [])
  return null
}
