import React from "react";

const schemes = [
  {
    title: "1. प्रधानमंत्री किसान सम्मान निधी योजना (PM-KISAN)",
    points: [
      "उद्देश: लहान व मध्यम शेतकऱ्यांना थेट आर्थिक मदत देणे.",
      "लाभ: दरवर्षी ₹6,000 तीन समान हप्त्यांमध्ये बँक खात्यात जमा.",
      "नोंदणी: pmkisan.gov.in किंवा स्थानिक कृषी अधिकारी.",
    ],
  },
  {
    title: "2. महालाभ योजना – मुख्यमंत्री शेतकरी सन्मान योजना",
    points: [
      "उद्देश: शेतीसाठी आवश्यक संसाधनांसाठी आर्थिक सहाय्य.",
      "लाभ: सिंचन, बियाणे, खत यावर अनुदान.",
      "नोंदणी: mahaabhiynkrishi.maharashtra.gov.in",
    ],
  },
  {
    title: "3. प्रधानमंत्री कृषी सिंचाई योजना (PMKSY)",
    points: [
      "उद्देश: ‘जास्त पाणी – अधिक उत्पादन’",
      "लाभ: ठिबक व तुषार सिंचनासाठी अनुदान.",
      "नोंदणी: agricop.gov.in",
    ],
  },
  {
    title: "4. राष्ट्रीय अन्नसुरक्षा अभियान (NFSM)",
    points: [
      "उद्देश: अन्नधान्य उत्पादनात वाढ.",
      "लाभ: सुधारित बियाणे, यंत्रसामग्रीवर अनुदान.",
      "नोंदणी: तालुका कृषी अधिकारी.",
    ],
  },
  {
    title: "5. शेतकरी अपघात विमा योजना",
    points: [
      "उद्देश: शेतकऱ्यांच्या अपघाती मृत्यू/अपंगत्वासाठी विमा संरक्षण.",
      "लाभ: ₹2 लाखांपर्यंत विमा रक्कम.",
      "नोंदणी: ग्रामपंचायत कार्यालय.",
    ],
  },
  {
    title: "6. माती माती माझा अभिमान – मृद व जलसंधारण योजना",
    points: [
      "उद्देश: जमिनीची सुपीकता व जलसंधारण.",
      "लाभ: जमिनीची गुणवत्ता सुधारण्यासाठी मदत.",
      "नोंदणी: mrd.maharashtra.gov.in",
    ],
  },
];

export default function Krushi() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* 🔹 HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-lime-700 min-h-[300px] md:h-[400px] flex items-center">

        <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-10">

          {/* TEXT */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6 md:mb-0 text-center md:text-left">
            कृषी
          </h1>

          {/* IMAGE */}
          <img
            src="/assets/Farmer.png"
            alt="farmer"
            className="h-[180px] sm:h-[220px] md:h-[300px] object-contain md:-ml-16"
          />

        </div>
      </div>

      {/* 🔹 CURVE */}
      <div className="bg-white">
        <svg viewBox="0 0 1440 100" className="-mt-1">
          <path
            fill="#ffffff"
            d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* 🔹 CONTENT */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-10">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6">
          शेतकऱ्यांसाठी शासकीय योजना (भारत सरकार व महाराष्ट्र शासन)
        </h2>

        {/* SCHEMES */}
        {schemes.map((scheme, index) => (
          <div key={index} className="mb-6 border-b pb-4">
            <h3 className="font-semibold text-base sm:text-lg mb-2">
              {scheme.title}
            </h3>

            <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm sm:text-base">
              {scheme.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* 🔹 LINKS */}
        <div className="mt-8">
          <h3 className="font-bold text-base sm:text-lg mb-3">
            🌐 महत्त्वाचे संकेतस्थळे:
          </h3>

          <ul className="text-blue-600 space-y-2 text-sm sm:text-base break-words">
            <li>https://pmkisan.gov.in</li>
            <li>https://agricop.gov.in</li>
            <li>https://krishi.maharashtra.gov.in</li>
            <li>https://mahadbt.maharashtra.gov.in</li>
          </ul>
        </div>

        {/* 🔹 NOTE */}
        <p className="mt-6 text-xs sm:text-sm text-gray-600">
          टीप: अर्ज करताना आधार क्रमांक, 7/12 उतारा, बँक पासबुक, फोटो आवश्यक असतात.
        </p>

      </div>
    </div>
  );
}