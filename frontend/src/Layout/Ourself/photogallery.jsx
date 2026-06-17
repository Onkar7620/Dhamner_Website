import React, { useState } from "react";
import { useLang } from "../../context/LanguageContext";

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
    जिल्हास्तरीय_तपासणी: [
   "/gallery/jilhastariy/WhatsApp Image 2026-0.jpeg ",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 .jpeg",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at .jpeg",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 1.jpeg",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00..jpeg",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00.1.jpeg",
    "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00.16 .jpeg",
   "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00.16 A.jpeg",
   "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00.16 AM.jpeg",
   "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.00.18 AM.jpeg",
   "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.0.jpeg",
   "/gallery/jilhastariy/WhatsApp Image 2026-06-17 at 11.jpeg"
   
  ],
   तालुकास्तरीय_तपासणी: [
   " /gallery/talukastariy/IMG_3576.JPG.jpeg",
    "/gallery/talukastariy/IMG_3605.JPG.jpeg",
    "/gallery/talukastariy/IMG_3612.JPG.jpeg",
    "/gallery/talukastariy/IMG_3620.JPG.jpeg",
    "/gallery/talukastariy/IMG_3630.JPG.jpeg",
    "/gallery/talukastariy/IMG_3639.JPG.jpeg",
    "/gallery/talukastariy/IMG_3645.JPG.jpeg",
   "/gallery/talukastariy/IMG_3663.JPG.jpeg",
   "/gallery/talukastariy/IMG_3669.JPG.jpeg",
   "/gallery/talukastariy/IMG_3682.JPG.jpeg",
   "/gallery/talukastariy/IMG_3684.JPG.jpeg",
   "/gallery/talukastariy/IMG_3685.JPG.jpeg"
   
  ],
  AI_Lab:[
    "/gallery/AiLab/61ea6974-d6ea-4196-9c32-e90397712c80.jpg",
    "/gallery/AiLab/91dc6a14-c6c8-4b8a-9535-43caedf9e6ce.jpg",
    "/gallery/AiLab/0830d196-9224-48ea-b3f0-53861510456b.jpg",
    "/gallery/AiLab/914a199e-e84c-438d-92b0-4716bd9b3528.jpg",
    "/gallery/AiLab/1052c72b-feb7-4830-916d-4cfc7106a0f4.jpg",
    "/gallery/AiLab/be1e893a-c767-493a-8d44-7324bd83f55e.jpg",
    "/gallery/AiLab/c43637f0-f409-46dd-ae52-0d4300a3f80a.jpg",
    "/gallery/AiLab/cb11436f-1e2b-44d6-b3ad-27a57b70d618.jpg",
    "/gallery/AiLab/d15a405a-614f-4c04-bd1a-0d58b72a8381.jpg",
    "/gallery/AiLab/d6301155-d92e-45a9-ace7-c78f9235effc.jpg",
    "/gallery/AiLab/ed13d09d-9367-4770-9cda-d619283c69b4.jpg",
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
     "/gallery/Road/WhatsApp Image 2026-05-10 at 10.31.55 PM (1).jpeg",
    "/gallery/Road/WhatsApp Image 2026-05-10 at 10.31.55 PM (2).jpeg",
    "/gallery/Road/WhatsApp Image 2026-05-10 at 10.31.55 PM.jpeg",
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
  "शाळा ":[
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
  "व्यायामशाळा ":[ 
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.52 PM (4).jpg.jpeg",
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.52 PM (5).jpg.jpeg",
    "/gallery/vyamshala/WhatsApp Image 2026-03-04 at 2.01.53 PM (2).jpg.jpeg",
  ],
  लिज्जत_पापड :[
   "/gallery/lijjat/IMG-20251118-WA0119.jpg.jpeg",
   "/gallery/lijjat/IMG-20251118-WA0121.jpg.jpeg",
   "/gallery/lijjat/IMG-20251118-WA0150.jpg.jpeg",
  ],
  गारमेन्ट:[
     "/gallery/garmnet/WhatsApp Image 2026-03-21 at 12.21.35 PM.jpeg",
    "/gallery/garmnet/IMG-20251118-WA0161.jpg.jpeg",
    "/gallery/garmnet/IMG-20251118-WA0162.jpg.jpeg",
    "/gallery/garmnet/IMG-20251118-WA0164.jpg.jpeg",
  ],
  स्मशानभूमी:[
  "/gallery/smashan/WhatsApp Image 2026-03-21 at 5.52.4.jpeg",
  "/gallery/smashan/WhatsApp Image 2026-03-21 at 5.52.43 .jpeg",
  "/gallery/smashan/WhatsApp Image 2026-03-21 at 5.52.43 PM.jpeg",
  ],
  क्रीडासंकुलन :[
  "/gallery/kridaSankulan/WhatsApp Image 2026-03-21 at 5.55.29 PM.jpeg",
  "/gallery/kridaSankulan/WhatsApp Image 2026-03-21 at 5.55.29.jpeg",
  ],
  CCTV:[
    "/gallery/CCTV/WhatsApp Image 2026-.jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at .jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 2.17.24 PM.jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.14 PM.jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.15 .jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.15 PM.jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.16 PM.jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.17 .jpeg",
    "/gallery/CCTV/WhatsApp Image 2026-03-21 at 5.48.17 PM.jpeg",
  ],
  ऑडिओ_सिस्टम :[
   "/gallery/audioSys/WhatsApp Image 2026-03-21 at 5.48.09 PM.jpeg",
   "/gallery/audioSys/WhatsApp Image 2026-03-21 at 5.48.10 PM.jpeg",
   "/gallery/audioSys/WhatsApp Image 2026-03-21 at 5.48.13 PM.jpeg",
  ],
  वनराई_बंधारे :[
  "/gallery/vanrai/d794094a-256c-4f26-aaa9-ea6dabbffce3.jpg",
  "/gallery/vanrai/f87cace9-fc65-43da-b895-799a3c19d9f0.jpg",
  ]
};

const categoryTranslations = {
  gramPanchayat: { mr: "ग्रामपंचायत", en: "Gram Panchayat" },
  gramSabha: { mr: "ग्रामसभा", en: "Gram Sabha" },
  jilhastariy: { mr: "जिल्हास्तरीय तपासणी", en: "District Level Inspection" },
  talukastariy: { mr: "तालुकास्तरीय तपासणी", en: "Taluka Level Inspection" },
  aiLab: { mr: "AI Lab", en: "AI Lab" },
  healthCamp: { mr: "आरोग्यशिबीर", en: "Health Camp" },
  cleanliness: { mr: "ग्रामस्वछता", en: "Cleanliness" },
  roads: { mr: "रस्त्याचीकामे", en: "Road Works" },
  gymOpen: { mr: "ओपेनजिम", en: "Open Gym" },
  park: { mr: "मारुती नानानाणी पार्क", en: "Maruti Nana Nani Park" },
  plasticBan: { mr: "प्लॅस्टिकबंदी", en: "Plastic Ban" },
  treePlantation: { mr: "वृक्षारोपण", en: "Tree Plantation" },
  school: { mr: "शाळा", en: "School & Anganwadi" },
  gymIndoor: { mr: "व्यायामशाळा", en: "Gymnasium" },
  lijjat: { mr: "लिज्जत पापड", en: "Lijjat Papad Industry" },
  garments: { mr: "गारमेन्ट", en: "Garment Industry" },
  cemetery: { mr: "स्मशानभूमी", en: "Cemetery" },
  sports: { mr: "क्रीडासंकुलन", en: "Sports Complex" },
  cctv: { mr: "CCTV", en: "CCTV Systems" },
  audio: { mr: "ऑडिओ सिस्टम", en: "Audio Systems" },
  bunds: { mr: "वनराई बंधारे", en: "Vanrai Bunds" }
};

// Map original keys to metadata-friendly short identifiers
const categoryKeyMap = {
  "ग्रामपंचायत": "gramPanchayat",
  "ग्रामसभा": "gramSabha",
  "जिल्हास्तरीय_तपासणी": "jilhastariy",
  "तालुकास्तरीय_तपासणी": "talukastariy",
  "AI_Lab": "aiLab",
  "आरोग्यशिबीर": "healthCamp",
  "ग्रामस्वछता": "cleanliness",
  "रस्त्याचीकामे": "roads",
  "ओपेनजिम": "gymOpen",
  "मारुती_नानानाणी_पार्क": "park",
  "प्लॅस्टिकबंदी": "plasticBan",
  "वृक्षारोपण": "treePlantation",
  "शाळा ": "school",
  "शाळा": "school",
  "व्यायामशाळा ": "gymIndoor",
  "व्यायामशाळा": "gymIndoor",
  "लिज्जत_पापड": "lijjat",
  "गारमेन्ट": "garments",
  "स्मशानभूमी": "cemetery",
  "क्रीडासंकुलन ": "sports",
  "क्रीडासंकुलन :": "sports",
  "क्रीडासंकुलन": "sports",
  "CCTV": "cctv",
  "ऑडिओ_सिस्टम": "audio",
  "वनराई_बंधारे": "bunds"
};

export default function PhotoGallery() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("ग्रामपंचायत");

  const titleText = lang === "en" ? "Photo Gallery" : "फोटो गॅलरी";

  return (
    <div className="w-full bg-gray-50 overflow-x-hidden min-h-screen pb-16">

      {/* HERO */}
      <div className="bg-gradient-to-r from-green-700 to-emerald-800 py-16 md:py-20 text-center px-4 shadow-sm">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
          {titleText}
        </h1>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-wrap justify-center gap-3">
        {Object.keys(galleryData).map((category, index) => {
          const transKey = categoryKeyMap[category.trim()] || "gramPanchayat";
          const label = categoryTranslations[transKey]
            ? categoryTranslations[transKey][lang]
            : category;

          return (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shadow-sm hover:scale-105
                ${
                  activeCategory === category
                    ? "bg-green-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* IMAGE GRID */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(galleryData[activeCategory] || []).map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow border border-gray-100 bg-white group hover:shadow-lg transition-all duration-300"
            >
              <img
                src={img}
                alt={activeCategory}
                loading="lazy"
                className="w-full h-[180px] sm:h-[220px] md:h-[260px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}