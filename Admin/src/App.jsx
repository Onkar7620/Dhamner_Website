import { useState } from 'react'

// import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import {Routes, Route} from 'react-router-dom'
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
  const [count, setCount] = useState(0)


  return (
    <>
      
      <Navbar/>
      <Routes>

        <Route path="/" element={<Login />}/>
        <Route path="admin/" element={<h1 className='text-3xl font-bold text-center mt-10'>Welcome to the Admin Dashboard</h1>} />
        <Route path="/admin/birth" element={<BirthCertificates />} />
        <Route path="/admin/death" element={<DeathCertificate />} />
        <Route path="/admin/marriage" element={<MarriageCertificate />} />
        <Route path="/admin/contact" element={<Contact />} />
        <Route path="/admin/complaints" element={<Complaints />} />
        <Route path="/admin/reviews" element={<Reviews />} />
        <Route path="/admin/residence" element={<ResidenceCertificate />} />
        <Route path='/admin/business' element={<BusinessCertificate />} />
        <Route path="/admin/construction" element={<BuildingPermissionCertificate />} />
        <Route path="/admin/no-dues" element={<NoDues />} />
        <Route path="/admin/property" element={<PropertyCertificate />} />
        <Route path='/admin/age-proof' element={<AgeCertificate />} />
        <Route path='/admin/property-card' element={<PropertyCard />} />
        <Route path='/admin/transfer' element={<PropertyTransfer />} />
        <Route path='/admin/land-record' element={<Land8ACertificate />} />
        <Route path='/admin/712' element={<Land712Certificate />} />
        
        
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
