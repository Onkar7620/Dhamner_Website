import { useState } from "react";
import { Mail, Phone, Clock, Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // ⭐ NEW

  const menuItems = [
    { name: "मुख्य पृष्ठ", link: "/" },

    {
      name: "आमच्याविषयी",
      link: "/about",
      dropdown: [
        { name: "आमच्याबद्दल", link: "/about" },
        { name: "अधिकारी/पदाधिकारी", link: "/officers" },
        { name: "फोटो गॅलरी", link: "/gallery" },
      ],
    },

    {
      name: "शासकीय योजना",
      link: "/schemes",
      dropdown: [
        { name: "जलजीवन मिशन", link: "https://water.maharashtra.gov.in/" },
        { name: "आयुष्मान भारत योजना", link: "/ayushman" },
        { name: "पेसा निधी योजना", link: "/pesa" },
        { name: "प्रधानमंत्री मातृ वंदना योजना", link: "/pmmvy" },
        { name: "भाग्यश्री योजना", link: "/ladki" },
        { name: "रमाई आवास योजना", link: "/ramai" },
        { name: "लाडकी बहिण योजना", link: "/ladki-bahin" },
        {name : "शबरी आवास योजना", link : "/shabari"},
        { name: "स्वच्छ भारत मिशन", link: "/swachh" },
        { name: "१५वा वित्त आयोग", link: "/finance15" },
      ],
    },

    {
      name: "लाभार्थी योजना",
      link: "/beneficiary",
      dropdown: [
        { name: "शबरी आवास योजना", link: "/shabari" },
        { name: "रमाई आवास योजना", link: "/ramai" },
      ],
    },

    {
      name: "सोई सुविधा",
      link: "/services",
      dropdown: [
        { name: "कर भरणा", link: "/tax" },
        { name: "स्वयंघोषणापत्रे", link: "/self" },
        { name: "महत्वाच्या लिंक", link: "/links" },
        { name: "तक्रार विभाग", link: "/complaint" },
        { name: "मनरेगा", link: "/mnrega" },
        { name: "आधार दुरुस्ती", link: "/aadhaar" },
      ],
    },

    {
      name: "विभाग",
      link: "/department",
      dropdown: [
        { name: "कृषी", link: "/agriculture" },
        { name: "आरोग्य", link: "/health" },
        { name: "पशुसंवर्धन", link: "/animal" },
      ],
    },

    {
      name: "दाखले",
      link: "/documents",
      dropdown: [
        { name: "जन्म प्रमाणपत्र", link: "/birth" },
        { name: "मृत्यू प्रमाणपत्रासाठी अर्ज", link: "/death" },
        { name: "विवाह प्रमाणपत्र अर्ज", link: "/marriage" },
        { name: "रहिवासी प्रमाणपत्र", link: "/residence" },
        { name: "व्यवसाय परवाना प्रमाणपत्र", link: "/business" },
        { name: "मालमत्ता प्रमाणपत्र", link: "/property" },
        { name: "बांधकाम परवानगी अर्ज", link: "/construction" },
        { name: "थकबाकी नसल्याचे प्रमाणपत्र", link: "/no-dues" },
        { name: "वयाचा दाखला", link: "/age-proof" },
        { name: "दारिद्र्य प्रमाणपत्र", link: "/bpl" },
        { name: "जमिनीचा उतारा", link: "/land-record" },
        { name: "७/१२ उतारा", link: "/712" },
        { name: "प्रॉपर्टी कार्ड", link: "/property-card" },
        { name: "मालमत्ता हस्तांतरण", link: "/transfer" },
      ],
    },

    { name: "नकाशा", link: "/map" },
    { name: "धामणेरची यशोगाथा ", link: "/yashogatha" },
    { name: "संपर्क ", link: "/help" },
  ];

  return (
    <div className="w-full shadow-sm  top-0 z-50">

      {/* 🔝 TOP HEADER */}
      <div className="bg-white px-4 lg:px-10 py-4 flex flex-col lg:flex-row justify-between items-center gap-4">

       <div className="flex items-center">
            <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="h-[100px] w-50" />
            <img src="/assets/Seal_of_Maharashtra.svg.png" className="h-[60px] ml-[-20px]" />
            <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[70px] " />

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
              <p className="text-sm">सकाळी ९.१५ ते सायंकाळी ६.१५ </p>
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

      {/* 🔻 DESKTOP NAV (unchanged) */}
      <div className="hidden lg:flex justify-center gap-8 py-4 bg-gray-100 text-lg font-medium">
        {menuItems.map((item, index) => (
          <div key={index} className="relative group pb-2">
            <div className="flex items-center gap-1 cursor-pointer hover:text-orange-500">
              <Link to={item.link} className={index === 0 ? "text-orange-600" : ""}>
                {item.name}
              </Link>
              {item.dropdown && <ChevronDown size={16} />}
            </div>

            {item.dropdown && (
              <div className="absolute left-0 top-full w-64 max-h-80 overflow-y-auto bg-slate-800 text-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {item.dropdown.map((sub, i) => (
                  <Link key={i} to={sub.link} className="block px-4 py-3 border-b border-slate-700 hover:bg-orange-500 hover:pl-6 transition">
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 📱 MOBILE MENU WITH DROPDOWN */}
      {open && (
        <div className="lg:hidden bg-gray-100 px-6 py-6 space-y-4 max-h-[80vh] overflow-y-auto">

          {menuItems.map((item, index) => (
            <div key={index}>

              {/* MAIN */}
              <div
                className="flex justify-between items-center font-medium cursor-pointer"
                onClick={() =>
                  item.dropdown
                    ? setActiveMenu(activeMenu === index ? null : index)
                    : null
                }
              >
                <Link to={item.link}>{item.name}</Link>

                {item.dropdown && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      activeMenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* DROPDOWN */}
              {item.dropdown && activeMenu === index && (
                <div className="ml-4 mt-2 space-y-2 text-sm text-gray-700">
                  {item.dropdown.map((sub, i) => (
                    <Link
                      key={i}
                      to={sub.link}
                      className="block px-3 py-2 rounded hover:bg-orange-500 hover:text-white transition"
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>
      )}
    </div>
  );
}