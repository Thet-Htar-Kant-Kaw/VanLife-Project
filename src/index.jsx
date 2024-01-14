import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Vans from './pages/Vans.jsx'
import VanDetail from './pages/VanDetail.jsx'
import Layout from './components/Layout.jsx'
import HostLayout from './components/HostLayout.jsx'
import Dashboard from './pages/host/Dashboard.jsx'
import Income from './pages/host/Income.jsx'
import Reviews from './pages/host/Reviews.jsx'
import HostVans from './pages/host/HostVans.jsx'
import HostVanDetail from './pages/host/HostVanDetail.jsx'
import HostVanInfo from './pages/host/HostVanInfo.jsx'
import HostVanPhotos from './pages/host/HostVanPhotos.jsx'
import HostVanPricing from './pages/host/HostVanPricing.jsx'
import NotFound from './pages/NotFound.jsx'

import './server.js'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />} >
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />            
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />         
            </Route>         
          </Route>
          <Route path='*' element={<NotFound />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);