import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing.jsx'
import ECertificate from './pages/ECertificate.jsx'
import Stats from './pages/Stats.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ar/QuickVerify/ECertificate" element={<ECertificate />} />
        {/* convenience alias */}
        <Route path="/QuickVerify/ECertificate" element={<ECertificate />} />
        <Route path="/kmnana" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
