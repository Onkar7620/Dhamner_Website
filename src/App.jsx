

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import AboutVillage from "./Layout/Ourself/AboutVillage";
import Members from "./Layout/Ourself/Members";
import PhotoGallery from "./Layout/Ourself/photogallery";
import HomePage from './Layout/HomePage/HomePage.jsx';
import Ayushman from './Layout/Government Services/Ayushman.jsx';
import Pesa from './Layout/Government Services/Pesa.jsx';
import PMMVY from './Layout/Government Services/PMMVY.jsx';
import Bhagyashree from './Layout/Government Services/Bhagyashree.jsx';
import Ramai from './Layout/Government Services/Ramai.jsx';
import LadkiBahin from './Layout/Government Services/LadkiBahin.jsx';
import ShabariAwas from './Layout/Government Services/ShabariAwas.jsx';
import SwatchhBharat from './Layout/Government Services/SwatchhBharat.jsx';
import FinanceCommission15 from './Layout/Government Services/FinanceCommission15.jsx';
import TaxForm from './Layout/Services/TaxForm.jsx';
import SelfDeclarationPage from './Layout/Services/SelfDeclarationPage.jsx';
import ImportantLinks from './Layout/Services/ImportantLinks.jsx';

import { Routes, Route } from "react-router-dom";


 

function App() {
  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutVillage />} />
      <Route path="/officers" element={<Members />} />
      <Route path="/gallery" element={<PhotoGallery />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/ayushman" element={<Ayushman />} />
      <Route path="/pesa" element={<Pesa />} />
      <Route path='/pmmvy' element={<PMMVY/>}/>
      <Route path='/ladki' element={<Bhagyashree/>}/>
      <Route path='/ramai' element={<Ramai/>}/>
      <Route path='/ladki-bahin' element={<LadkiBahin/>}/>
      <Route path='/shabari' element={<ShabariAwas/>}/>
      <Route path='/swachh' element={<SwatchhBharat/>}/>
      <Route path='/finance15' element={<FinanceCommission15/>}/>
      <Route path='/tax' element={<TaxForm/>}/>
      <Route path='/self' element={<SelfDeclarationPage/>}/>
      <Route path='/links' element={<ImportantLinks/>}/>
      </Routes>

      <Footer />
    </>
  );
   
}

export default App;