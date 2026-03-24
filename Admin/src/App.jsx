import { useEffect } from "react";
import axios from "axios";

import Navbar from './Components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'

import ProtectedRoute from './Components/ProtectedRoute'

import BirthCertificates from './Components/Certificates/BirthCertificates'
import DeathCertificate from './Components/Certificates/DeathCertificate'
import MarriageCertificate from './Components/Certificates/MarriageCertificate'
import Contact from './Components/Certificates/Contact'
import Complaints from './Components/Certificates/Complaints'
import Reviews from './Components/Certificates/Reviews'
import ResidenceCertificate from './Components/Certificates/ResidenceCertificate'
import BusinessCertificate from './Components/Certificates/BussinessCertificate'
import BuildingPermissionCertificate from './Components/Certificates/BuildingPermissionCertificate'
import NoDues from './Components/Certificates/NoDues'
import PropertyCertificate from './Components/Certificates/PropertyCertificate'
import AgeCertificate from './Components/Certificates/AgeCertificate'
import PropertyCard from './Components/Certificates/PropertyCard'
import PropertyTransfer from './Components/Certificates/PropertyTransfer'
import Land8ACertificate from './Components/Certificates/Land8ACertificate'
import Land712Certificate from './Components/Certificates/Land712Certificate'
import Login from './Components/Certificates/login.jsx'

function App() {
  const location = useLocation();

  // 👉 check login page
  const isLoginPage = location.pathname === "/";

  // 🔥 Backend Wake-up Call
  useEffect(() => {
    axios.get("https://dhamner-website.onrender.com")
      .then(() => console.log("Backend awakened (admin)"))
      .catch(() => console.log("Wakeup failed"));
  }, []);

  return (
    <>
      {/* ❌ Hide Navbar on login */}
      {!isLoginPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/admin" element={
          <ProtectedRoute>
            <h1 className='text-3xl text-center mt-10'>Admin Dashboard</h1>
          </ProtectedRoute>
        } />

        <Route path="/admin/birth" element={<ProtectedRoute><BirthCertificates /></ProtectedRoute>} />
        <Route path="/admin/death" element={<ProtectedRoute><DeathCertificate /></ProtectedRoute>} />
        <Route path="/admin/marriage" element={<ProtectedRoute><MarriageCertificate /></ProtectedRoute>} />
        <Route path="/admin/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />
        <Route path="/admin/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
        <Route path="/admin/reviews" element={<ProtectedRoute><Reviews /></ProtectedRoute>} />
        <Route path="/admin/residence" element={<ProtectedRoute><ResidenceCertificate /></ProtectedRoute>} />
        <Route path="/admin/business" element={<ProtectedRoute><BusinessCertificate /></ProtectedRoute>} />
        <Route path="/admin/construction" element={<ProtectedRoute><BuildingPermissionCertificate /></ProtectedRoute>} />
        <Route path="/admin/no-dues" element={<ProtectedRoute><NoDues /></ProtectedRoute>} />
        <Route path="/admin/property" element={<ProtectedRoute><PropertyCertificate /></ProtectedRoute>} />
        <Route path="/admin/age-proof" element={<ProtectedRoute><AgeCertificate /></ProtectedRoute>} />
        <Route path="/admin/property-card" element={<ProtectedRoute><PropertyCard /></ProtectedRoute>} />
        <Route path="/admin/transfer" element={<ProtectedRoute><PropertyTransfer /></ProtectedRoute>} />
        <Route path="/admin/land-record" element={<ProtectedRoute><Land8ACertificate /></ProtectedRoute>} />
        <Route path="/admin/712" element={<ProtectedRoute><Land712Certificate /></ProtectedRoute>} />
      </Routes>
    </>
  )
}

export default App