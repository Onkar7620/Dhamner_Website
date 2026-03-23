import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-green-600 text-white pt-16 pb-10 overflow-hidden">
      
      {/* Background Chakra Image */}
      <img
        src="/chakra.png"
        className="absolute left-20 bottom-10 opacity-20 w-[350px]"
        alt="chakra"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">
        
        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">महत्वाच्या लिंक</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li><Link to="/about" className="hover:underline hover:text-purple-200">आमच्याबद्दल</Link></li>
            <li><Link to="/officers" className="hover:underline hover:text-purple-200">अधिकारी/पदाधिकारी</Link></li>
            <li><Link to="/gallery" className="hover:underline hover:text-purple-200">फोटो गॅलरी</Link></li>
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-xl font-semibold mb-4">दाखले</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li><Link to="/birth" className="hover:underline hover:text-purple-200">जन्म प्रमाणपत्र</Link></li>
            <li><Link to="/death" className="hover:underline hover:text-purple-200">मृत्यु प्रमाणपत्र</Link></li>
            <li><Link to="/marriage" className="hover:underline hover:text-purple-200">विवाह प्रमाणपत्र</Link></li>
            <li><Link to="/business" className="hover:underline hover:text-purple-200">व्यवसाय परवाना</Link></li>
            <li><Link to="/property" className="hover:underline hover:text-purple-200">मालमत्ता प्रमाणपत्र</Link></li>
            <li><Link to="/construction" className="hover:underline hover:text-purple-200">बांधकाम परवानगी</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">सोई सुविधा</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li><Link to="/tax" className="hover:underline hover:text-purple-200">कर भरणा</Link></li>
            <li><Link to="/self" className="hover:underline hover:text-purple-200">स्वयंघोषणापत्रे</Link></li>
            <li><Link to="/links" className="hover:underline hover:text-purple-200">जनसुविधा महत्वाच्या लिंक</Link></li>
            <li><Link to="/complaint" className="hover:underline hover:text-purple-200">तक्रार विभाग</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">संपर्क</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <p className="font-semibold">दूरध्वनी (ग्रामपंचायत)</p>
          <p className="mb-4">+91 9850032987</p>

          <p className="font-semibold">ईमेल</p>
          <p className="mb-4">dhamner189585@gmail.com</p>

          <p className="font-semibold">पत्ता</p>
          <p>धामणेर ता. रहमदपूर , जि. सातारा</p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-green-400 mt-12 pt-6 text-center text-sm">
        
        <div className="flex justify-center gap-6 mb-6">
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/disclaimer" className="hover:underline">Disclaimer</Link>
        </div>

        {/* Bottom Logos */}
        <div className="flex justify-center items-center gap-4">
          <img
            src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png"
            className="h-[100px] w-50"
            alt="emblem"
          />
          <img
            src="/assets/Seal_of_Maharashtra.svg.png"
            className="h-[60px] ml-[-20px]"
            alt="seal"
          />
          <img
            src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png"
            className="h-[70px]"
            alt="logo"
          />

          <div className="text-left">
            <p className="font-bold text-lg">यशवंत ग्रामपंचायत</p>
            <p className="font-bold text-lg">धामणेर</p>
            <p className="text-xs">ता.  कोरेगाव , जि. सातारा</p>
          </div>
        </div>
      </div>
    </footer>
  );
}