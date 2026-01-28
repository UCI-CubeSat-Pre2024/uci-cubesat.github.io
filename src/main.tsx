import React, { Suspense, lazy, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import './index.css'

const Home = lazy(() => import('./pages/home/Home'))
const Contact = lazy(() => import('./pages/contact/Contact'))
const WhatWeDo = lazy(() => import('./pages/aboutus/what-we-do/WhatWeDo'))
const MeetTheTeam = lazy(() => import('./pages/aboutus/meet-the-team/MeetTheTeam'))
const NotFound = lazy(() => import('./pages/NotFound'))

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
          <Suspense>
            <Routes>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
              <Route path="/aboutus" element={<Navigate to="/aboutus/what-we-do" replace />} />
              <Route path="/aboutus/what-we-do" element={<WhatWeDo />} />
              <Route path="/aboutus/meet-the-team" element={<MeetTheTeam />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
)
