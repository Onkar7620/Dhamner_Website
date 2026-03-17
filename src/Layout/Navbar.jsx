import { Mail, Phone, Clock, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-sm">

      {/* Top Header */}
      <div className="flex justify-between items-center px-4 lg:px-10 py-4 bg-white">

        {/* Left Logos + Title */}
        <div className="flex items-center gap-3">
          <img src="/src/assets/adachiwadi-all-logo-e1759995738129.png" className="h-10 lg:h-15" />
          <img src="/src/assets/Seal_of_Maharashtra.svg.png" className="h-10 lg:h-15x`" />
          <img src="/src/assets/GP-Adachiwadi-Logo-Transperent-2.webp" className="h-10 lg:h-15" />

          <div className="hidden sm:block">
            <h1 className="text-lg lg:text-3xl font-bold">ग्रामपंचायत</h1>
            <h2 className="text-lg lg:text-3xl font-bold">धामणेर </h2>
            <p className="text-xs lg:text-sm text-orange-500">
              ता. रहमदपूर , जि. सातारा
            </p>
          </div>
        </div>

        {/* Right Contact Info (Hidden on mobile) */}
        <div className="hidden lg:flex gap-10 text-gray-700">

          <div className="flex items-center gap-2">
            <Mail size={22} />
            <div>
              <p className="font-semibold">ईमेल</p>
              <p className="text-sm">dhamner123@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={22} />
            <div>
              <p className="font-semibold">कार्यालयीन वेळ</p>
              <p className="text-sm">सकाळी १० ते सायंकाळी ६</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={22} />
            <div>
              <p className="font-semibold">दूरध्वनी क्रमांक</p>
              <p className="text-sm">+91 9607075206</p>
            </div>
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <hr />

      {/* Desktop Navigation */}
      <div className="hidden lg:block bg-gray-100 border-t">
        <ul className="flex justify-center gap-10 py-4 font-medium text-lg">
          <li className="text-orange-600 cursor-pointer">मुख्य पृष्ठ</li>
          <li className="cursor-pointer hover:text-orange-500">आमच्याविषयी</li>
          <li className="cursor-pointer hover:text-orange-500">शासकीय योजना</li>
          <li className="cursor-pointer hover:text-orange-500">लाभार्थी योजना</li>
          <li className="cursor-pointer hover:text-orange-500">सोई सुविधा</li>
          <li className="cursor-pointer hover:text-orange-500">विभाग</li>
          <li className="cursor-pointer hover:text-orange-500">दाखले</li>
          <li className="cursor-pointer hover:text-orange-500">नकाशा</li>
          <li className="cursor-pointer hover:text-orange-500">माहितीचा अधिकार</li>
          <li className="cursor-pointer hover:text-orange-500">हेल्पलाईन</li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-100 border-t">
          <ul className="flex flex-col gap-4 px-6 py-6 font-medium">
            <li>मुख्य पृष्ठ</li>
            <li>आमच्याविषयी</li>
            <li>शासकीय योजना</li>
            <li>लाभार्थी योजना</li>
            <li>सोई सुविधा</li>
            <li>विभाग</li>
            <li>दाखले</li>
            <li>नकाशा</li>
            <li>माहितीचा अधिकार</li>
            <li>हेल्पलाईन</li>
          </ul>
        </div>
      )}

    </div>
  );
}