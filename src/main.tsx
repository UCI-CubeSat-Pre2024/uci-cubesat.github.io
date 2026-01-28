import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import './index.css'

import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import WhatWeDo from './pages/aboutus/what-we-do/WhatWeDo'
import MeetTheTeam from './pages/aboutus/meet-the-team/MeetTheTeam'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'

// Reset scroll position to top on route change (SPAs preserve scroll by default)
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/aboutus" element={<Navigate to="/aboutus/what-we-do" replace />} />
            <Route path="/aboutus/what-we-do" element={<WhatWeDo />} />
            <Route path="/aboutus/meet-the-team" element={<MeetTheTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)
