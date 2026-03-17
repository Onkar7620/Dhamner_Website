import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Layout/Navbar.jsx'
import Footer from './Layout/Footer.jsx'
import HomePage from './Layout/HomePage/HomePage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <HomePage />
    <Footer />
  </StrictMode>,
)
