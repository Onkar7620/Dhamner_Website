import React, { useState } from "react";

const Animal = () => {
  const [activeTab, setActiveTab] = useState("big");

  // 🐄 BIG ANIMALS (FULL DATA)
  const bigAnimals = [
    {
      id: 1,
      disease: "FMD लाळ खुरकत/तोंडखुरी रोग",
      primary: "जन्मानंतर चौथ्या महिन्यात",
      booster: "पहिला डोस घेतल्यानंतर 1 महिन्याने",
      annual: "वर्षातून दोन वेळा – मार्च आणि सप्टेंबर",
    },
    {
      id: 2,
      disease: "HS (घटसर्प)",
      primary: "वयाच्या सहाव्या महिन्यात",
      booster: "—",
      annual: "दरवर्षी मे महिन्यात",
    },
    {
      id: 3,
      disease: "ब्लॅक क्वार्टर (फुगवा)",
      primary: "वयाच्या सहाव्या महिन्यात",
      booster: "—",
      annual: "दरवर्षी मे महिन्यात",
    },
    {
      id: 4,
      disease: "लम्पी स्किन डिसीज",
      primary: "वयाच्या चौथ्या महिन्यात",
      booster: "—",
      annual: "दरवर्षी मे महिन्यात",
    },
    {
      id: 5,
      disease: "थेलिओसिस",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      booster: "—",
      annual: "फक्त बाधित गोठ्यांमध्ये, दर 3 वर्षांनी",
    },
    {
      id: 6,
      disease: "अँथ्रॅक्स",
      primary: "फक्त वारंवार बाधित भागात वयाच्या सहाव्या महिन्यात",
      booster: "—",
      annual: "दरवर्षी ऑगस्ट महिन्यात, पुढील 3 वर्ष",
    },
    {
      id: 7,
      disease: "ब्रुसेलोसिस",
      primary: "वयाच्या 4 ते 8 महिन्यांदरम्यान (वासरू होण्याच्या काळात)",
      booster: "—",
      annual: "—",
    },
    {
      id: 8,
      disease: "रेबीज",
      primary: "कुत्रे, मांजरे, कोल्हे, रानटी मांसाहारी प्राणी",
      booster: "जन्मानंतर दिवस 0, 3, 7, 14, 28 आणि 90",
      annual: "5 डोस, इतरांना किमान 3 डोस",
    },
  ];

  // 🐐 SMALL ANIMALS (UNCHANGED ✅)
  const smallAnimals = [
    {
      disease: "लाळ खुरकत (Foot and Mouth)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "वर्षातून दोन वेळा मार्च व सप्टेंबर महिन्यात",
    },
    {
      disease: "घटसर्प (Haemorrhagic Septicemia)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "एप्रिल महिन्यात",
    },
    {
      disease: "आंत्रविकार (Enterotoxaemia)",
      primary: "गर्भवती असताना लसीकरण",
      annual: "मे महिन्यात पहिली मात्रा व 15-21 दिवसांनी दुसरी",
    },
    {
      disease: "नील जिभा (Blue Tongue)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "जुलै महिन्यात",
    },
    {
      disease: "अँथ्रॅक्स (Anthrax)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "ऑगस्ट महिन्यात",
    },
    {
      disease: "धनुर्वात (Tetanus)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "ऑक्टोबर महिन्यात",
    },
    {
      disease: "मेंढ्यांची देवी (Sheep Pox)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "डिसेंबर महिन्यात",
    },
    {
      disease: "शेळ्यांची देवी (Goat Pox)",
      primary: "वयाच्या तिसऱ्या महिन्यात",
      annual: "डिसेंबर महिन्यात",
    },
  ];



return (
<>
   <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[40vh] py-10 md:py-14 gap-6">

  <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight">
    पशुसंवर्धन विभाग
  </h1>

  <img
    src="/assets/Cow.png"
    alt="animal"
    className="w-24 sm:w-32 md:w-36 lg:w-40 max-h-[160px] object-contain"
  />

</section>
  
  <div className="px-4 md:px-10 py-8">

    {/* TABS */}
    <div className="flex flex-col sm:flex-row mb-6 border">
      <button
        onClick={() => setActiveTab("big")}
        className={`w-1/2 py-3 font-semibold ${
          activeTab === "big"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        मोठ्या जनावरांचे लसीकरण वेळापत्रक
      </button>

      <button
        onClick={() => setActiveTab("small")}
        className={`w-1/2 py-3 font-semibold ${
          activeTab === "small"
            ? "bg-green-600 text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        शेळी व मेंढी लसीकरण वेळापत्रक
      </button>
    </div>

    {/* 🐄 BIG TABLE */}
    {activeTab === "big" && (
      <div className="overflow-x-auto w-full">
        <table className="w-full border text-green-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">Sr.No.</th>
              <th className="border p-3">Disease (रोग)</th>
              <th className="border p-3">Primary Vaccination</th>
              <th className="border p-3">Booster</th>
              <th className="border p-3">Annual</th>
            </tr>
          </thead>
          <tbody>
            {bigAnimals.map((item) => (
              <tr key={item.id}>
                <td className="border p-3 text-center">{item.id}</td>
                <td className="border p-3">{item.disease}</td>
                <td className="border p-3">{item.primary}</td>
                <td className="border p-3">{item.booster}</td>
                <td className="border p-3">{item.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* 🐐 SMALL TABLE */}
    {activeTab === "small" && (
      <div className="overflow-x-auto w-full">
        <table className="w-full border text-green-700">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-3">रोगाचे नाव</th>
              <th className="border p-3">प्राथमिक लसीकरण</th>
              <th className="border p-3">वार्षिक लसीकरण</th>
            </tr>
          </thead>
          <tbody>
            {smallAnimals.map((item, index) => (
              <tr key={index}>
                <td className="border p-3">{item.disease}</td>
                <td className="border p-3">{item.primary}</td>
                <td className="border p-3">{item.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}

    {/* ✅ COMMON INFO (VISIBLE FOR BOTH) */}
  <div className="mt-12 mx-auto max-w-6xl px-2 sm:px-4 md:px-6 text-green-700 leading-relaxed">

  {/* HEADING */}
  <h2 className="text-2xl font-bold mb-4">
    ई गव्हर्नन्स – पशुसंवर्धन विभाग
  </h2>

  <p className="mb-4">
    दवाखान्यांमध्ये नियमित ऑनलाईन स्वरूपात करण्यात येणारी कामे
  </p>

  <p className="mb-6 font-semibold">
    ॲप चे नाव - भारत पशुधन (NDLM)
  </p>

  {/* NUMBER LIST */}
  <ol className="list-decimal pl-6 space-y-3 mb-6">
    <li>पशुपालक नोंदणी - सर्वप्रथम पशुपालकाचे आधार क्रमांक व मोबाईल क्रमांक नोंदणी करण्यात येते</li>
    <li>पशुधन नोंदणी - जनावराच्या कानामध्ये 12 अंकी बिल्ला मारला जातो</li>
    <li>पशुमधील उपचार नोंदणी - NDLM प्रणाली वरती घेतली जाते</li>
    <li>पशुमधील जंत निर्मूलन नोंदणी - औषध नोंदणी NDLM मध्ये</li>
    <li>पशुमधील लसीकरण नोंदणी - प्रतिबंधात्मक लसीकरण नोंद</li>
    <li>पशुमधील कृत्रिम रेतन नोंदणी</li>
    <li>पशुमधील गर्भधारणा नोंदणी</li>
    <li>वासरे जन्म नोंदणी</li>
    <li>पशुमधील रोग निदान नोंदणी</li>
    <li>पशुमधील शवविच्छेदन अहवाल नोंदणी</li>
  </ol>

  {/* LETTER POINTS */}
  <div className="space-y-4 mb-8">
    <p><b>B]</b> टोल फ्री क्र. १९६२ / १८००२३३०४१८ चा उपयोग</p>
    <p><b>C]</b> डॉक्टर मार्फत घरपोच सेवा</p>
    <p><b>D]</b> 21st Livestock Census ॲप</p>
    <p><b>E]</b> ah.mahabms.com संकेतस्थळ</p>
    <p><b>F]</b> www.mahamesh.in</p>
    <p><b>G]</b> m.udymimitra.in</p>
    <p><b>H]</b> Smart-mh.org</p>
    <p><b>I]</b> dahd.nic.in</p>
    <p><b>J]</b> ah.mahabms.com</p>
  </div>

  {/* ENGLISH SECTION */}
  <h2 className="text-2xl font-bold mb-3">
    E-Governance – Department of Animal Husbandry
  </h2>

  <p className="mb-3">
    Regular Online Activities Conducted in Veterinary Hospitals
  </p>

  <p className="mb-5 font-semibold">
    App Name – Bharat Pashudhan (NDLM)
  </p>

  <ul className="list-disc pl-6 space-y-2 mb-6">
    <li>Livestock Owner Registration – Aadhaar & mobile</li>
    <li>Livestock Registration – 12-digit tag</li>
    <li>Animal Treatment Record</li>
    <li>Deworming Record</li>
    <li>Vaccination Record</li>
    <li>Artificial Insemination Record</li>
    <li>Pregnancy Diagnosis Record</li>
    <li>Calf Birth Record</li>
    <li>Disease Diagnosis Record</li>
    <li>Postmortem Report Record</li>
  </ul>

  <div className="space-y-3">
    <p><b>B]</b> Toll-free: 1962 / 18002330418</p>
    <p><b>C]</b> Doorstep veterinary services</p>
    <p><b>D]</b> Livestock Census app</p>
    <p><b>E]</b> ah.mahabms.com</p>
    <p><b>F]</b> www.mahamesh.in</p>
    <p><b>G]</b> m.udymimitra.in</p>
    <p><b>H]</b> Smart-mh.org</p>
    <p><b>I]</b> dahd.nic.in</p>
    <p><b>J]</b> ah.mahabms.com</p>
  </div>

</div>

  </div>

</>
);


};

export default Animal;