import { useState } from "react";
import { Mail, Phone, Clock, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // ✅ ALL DAKHLE AS DIRECT TABS
  const menuItems = [
    { name: "जन्म प्रमाणपत्र", link: "/admin/birth" },
    { name: "मृत्यू प्रमाणपत्र", link: "/admin/death" },
    { name: "विवाह प्रमाणपत्र", link: "/admin/marriage" },
    { name: "रहिवासी प्रमाणपत्र", link: "/admin/residence" },
    { name: "व्यवसाय परवाना", link: "/admin/business" },
    { name: "मालमत्ता प्रमाणपत्र", link: "/admin/property" },
    { name: "बांधकाम परवानगी", link: "/admin/construction" },
    { name: "थकबाकी नसल्याचे", link: "/admin/no-dues" },
    { name: "वयाचा दाखला", link: "/admin/age-proof" },
    { name: "जमिनीचा उतारा", link: "/admin/land-record" },
    { name: "७/१२ उतारा", link: "/admin/712" },
    { name: "प्रॉपर्टी कार्ड", link: "/admin/property-card" },
    { name: "मालमत्ता हस्तांतरण", link: "/admin/transfer" },
    { name: "संपर्क", link: "/admin/contact" },
    { name: "तक्रार विभाग", link: "/admin/complaints" },
    { name: "समीक्षा विभाग", link: "/admin/reviews" },
  ];

  return (
    <div className="w-full shadow-sm top-0 z-50">

      {/* 🔝 HEADER */}
      <div className="bg-white px-4 lg:px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

        <div className="flex items-center">
          <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="h-[100px]" />
          <img src="/assets/Seal_of_Maharashtra.svg.png" className="h-[60px] ml-[-20px]" />
          <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[70px]" />

          <div>
            <h1 className="text-lg lg:text-3xl font-bold">यशवंत ग्रामपंचायत धामणेर</h1>
            <p className="text-sm text-orange-500">ता - कोरेगाव, जि - सातारा</p>
          </div>
        </div>

        <div className="hidden lg:flex gap-10 text-gray-700">
          <div className="flex items-center gap-2">
            <Mail size={20} />
            <div>
              <p className="font-semibold">ईमेल</p>
              <p className="text-sm">dhamner189585@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Clock size={20} />
            <div>
              <p className="font-semibold">कार्यालयीन वेळ</p>
              <p className="text-sm">९.१५ ते ६.१५</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Phone size={20} />
            <div>
              <p className="font-semibold">दूरध्वनी</p>
              <p className="text-sm">+91 9850032987</p>
            </div>
          </div>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔻 DESKTOP NAV */}
      <div className="hidden lg:flex flex-wrap justify-center gap-6 py-4 bg-gray-100 text-sm font-medium">

        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="hover:text-orange-500 whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}

      </div>

      {/* 📱 MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-gray-100 px-6 py-6 space-y-3 max-h-[80vh] overflow-y-auto">

          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block py-2 border-b hover:text-orange-500"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

        </div>
      )}

    </div>
  );
}