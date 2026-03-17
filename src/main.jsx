import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './Layout/Navbar.jsx'
import Footer from './Layout/Footer.jsx'
import HomePage from './Layout/HomePage/HomePage.jsx'

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    
    <BrowserRouter>
      <Navbar />
      <HomePage />
    </BrowserRouter>
     <Footer />
  </StrictMode>,
)
