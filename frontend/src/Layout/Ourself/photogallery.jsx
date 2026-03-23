import React, { useState } from "react";

const galleryData = {
  ग्रामपंचायत: [
    "/gallery/gramPanchayat/IMG-20250421-WA0034.jpg.jpeg",
    "/gallery/gramPanchayat/2 .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 .jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.21.08 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.24.55 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.26.26 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.26.27 PM.jpeg",
    "/gallery/gramPanchayat/WhatsApp Image 2026-03-17 at 6.40.12 PM.jpeg",
  ],
  ग्रामसभा: [
    "/gallery/GramSabha/1758120051379.jpg.jpeg",
    "/gallery/GramSabha/1758120051400 - Copy.jpg.jpeg",
    "/gallery/GramSabha/1758122657814.jpg.jpeg",
    "/gallery/GramSabha/1758122903426.jpg.jpeg",
    "/gallery/GramSabha/1758122903438.jpg.jpeg",
    " /gallery/GramSabha/1758123139438.jpg.jpeg",
    "/gallery/GramSabha/1758123139446.jpg.jpeg",
    " /gallery/GramSabha/1758123139453.jpg.jpeg",
  ],
  आरोग्यशिबीर: [
    "/gallery/tapasani/1.jpeg",
    "/gallery/tapasani/WhatsApp .jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.51 AM.jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.52 AM.jpeg",
    "/gallery/tapasani/WhatsApp Image 2026-03-18 at 10.37.53 AM.jpeg",
  ],
  ग्रामस्वछता: [
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.2.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.21 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.22 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.22 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.23 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.23 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.56 .jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.56 AM.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 11.06.57 AM.jpeg",
  ],
  रस्त्याचीकामे: [
    "/gallery/Road/गावातील सिमेंट रस्ते.jpg.jpeg",
    "/gallery/Road/गावातील्र रस्ते 1.jpg.jpeg",
    "/gallery/Road/रस्ते.jpg.jpeg",
  ],
  ओपेनजिम: [
    "/gallery/openGYM/WhatsApp Image 2026-03-17 at 6.23.48 PM.jpeg",
    "/gallery/openGYM/WhatsApp Image 2026-03-17 at 6.23.53 PM.jpeg",
  ],
  मारुती_नानानाणी_पार्क: [
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.50 PM.jpeg",
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.51 PM.jpeg",
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.59 PM.jpeg",
  ],
  प्लॅस्टिकबंदी: [
    "/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.47 .jpeg",
    "/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.47 AM.jpeg",
    "/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.48 .jpeg",
    "/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.48 AM.jpeg",
    "/gallery/plasticBandi/IMG-20251115-WA0013.jpg.jpeg",
    "/gallery/plasticBandi/IMG-20251115-WA0015.jpg.jpeg",
    "/gallery/plasticBandi/IMG-20251115-WA0019.jpg.jpeg",
    "/gallery/plasticBandi/IMG-20251115-WA0020.jpg.jpeg",
    "/gallery/plasticBandi/IMG-20251115-WA0024.jpg.jpeg",
  ],
  वृक्षारोपण:[
     "/gallery/vriksha_ropan/IMG-20250928-WA0021.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20250928-WA0028.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0052.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0055.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0059.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0070.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0080.jpg.jpeg",
     "/gallery/vriksha_ropan/IMG-20251015-WA0072.jpg.jpeg",
  ],
  शाळा :[
    "/gallery/Aganwadi/IMG-20251118-WA0071.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी १०७ वर्ग खोली.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी ३५४.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र १०८.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र.१०८ वर्ग खोली.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र.२६१.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र.३५३ वर्ग खोली.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र.३५३.jpg.jpeg",
    "/gallery/Aganwadi/अंगणवाडी क्र२६१ वर्ग खोली.jpg.jpeg",
    "/gallery/Aganwadi/जि.प.शाळा वर्ग खोली.jpg.jpeg",
    "/gallery/Aganwadi/जिल्हा परिषद शाळा.jpg.jpeg",
  ],
  व्यायामशाळा :[ 
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.52 PM (4).jpg.jpeg",
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.52 PM (5).jpg.jpeg",
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.53 PM (2).jpg.jpeg",
  
  ]
};

export default function PhotoGallery() {
  const [activeCategory, setActiveCategory] = useState("ग्रामपंचायत");

  return (
    <div className="w-full bg-gray-100 overflow-x-hidden">

      {/* HERO */}
      <div className="bg-green-700 py-12 sm:py-16 md:py-20 text-center px-4">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          फोटो गॅलरी
        </h1>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex flex-wrap justify-center gap-2 sm:gap-4">

        {Object.keys(galleryData).map((category, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-3 sm:px-5 py-2 rounded text-xs sm:text-sm font-medium transition whitespace-nowrap
              ${
                activeCategory === category
                  ? "bg-green-600 text-white"
                  : "bg-white text-gray-700 shadow"
              }`}
          >
            {category}
          </button>
        ))}

      </div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

          {galleryData[activeCategory].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">

              <img
                src={img}
                alt="gallery"
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover hover:scale-105 transition duration-300"
              />

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}