import React from "react";

export default function PMMVY() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          प्रधानमंत्री मातृ वंदना योजना
        </h1>

        <img
          src="/assets/Pradhan_Mantri_Matritva_Vandana_Yojana-removebg-preview.png"
          alt="PMMVY"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6">
          प्रधानमंत्री मातृ वंदना योजना (PMMVY) – माता आणि बाळकांचे आरोग्य संरक्षण
        </h2>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          गर्भवती आणि स्तनपान करणाऱ्या महिलांना आर्थिक सहाय्य देऊन त्यांच्या पोषणाची गरज पूर्ण करणे 
          आणि माता व बालकांचे आरोग्य सुरक्षित करणे हा या योजनेचा प्रमुख उद्दिष्ट आहे. 
          ही योजना महिला व बालविकास मंत्रालयामार्फत राबवली जाते.
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          🎯 योजनेची वैशिष्ट्ये:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>गर्भवती महिलेला ₹5,000/- पर्यंत आर्थिक मदत तीन हप्त्यांत दिली जाते</li>
          <li>पहिल्या बाळाच्या जन्मासाठी ही योजना लागू</li>
          <li>नियमित आरोग्य तपासणी, लसीकरण आणि पोषणासाठी प्रोत्साहन</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 ELIGIBILITY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👩‍🍼 पात्रता:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>गर्भवती महिला व स्तनपान करणाऱ्या माता</li>
          <li>पहिल्या बाळाच्या जन्मासाठी योजना लागू</li>
          <li>महिला 19 वर्षे किंवा त्याहून अधिक वयाची असावी</li>
          <li>सरकारी सेवेत नसावी</li>
          <li>भारतीय नागरिक असावी</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 BENEFITS TABLE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          💰 आर्थिक लाभ (तीन हप्त्यांमध्ये):
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3">हप्ता</th>
                <th className="border p-3">अटी</th>
                <th className="border p-3">देय रक्कम</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">पहिला</td>
                <td className="border p-3">गर्भधारणा नोंदणी केल्यानंतर</td>
                <td className="border p-3">₹1,000/-</td>
              </tr>

              <tr>
                <td className="border p-3">दुसरा</td>
                <td className="border p-3">किमान एक ANC तपासणी केल्यानंतर</td>
                <td className="border p-3">₹2,000/-</td>
              </tr>

              <tr>
                <td className="border p-3">तिसरा</td>
                <td className="border p-3">
                  बाळाच्या जन्मानंतर लसीकरण पूर्ण केल्यावर (BCG, OPV, DPT, HepB)
                </td>
                <td className="border p-3">₹2,000/-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-lg">
          👉 एकूण: ₹5,000/- थेट बँक खात्यात जमा
        </p>
      </section>

      <hr />

      {/* 🔹 USAGE / PURPOSE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✅ योजना कशासाठी उपयुक्त?
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>माता व बालकांच्या पोषणासाठी आर्थिक मदत</li>
          <li>सुरक्षित मातृत्वासाठी प्रोत्साहन</li>
          <li>महिलांच्या आरोग्य तपासणीसाठी प्रोत्साहन</li>
          <li>लसीकरण आणि आरोग्य सेवा वापरण्यासाठी प्रेरणा</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📄 आवश्यक कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>आधार कार्ड</li>
          <li>बँक खाते तपशील (महिलेच्या नावावर)</li>
          <li>गर्भधारणा नोंदणी पुरावा</li>
          <li>जन्म प्रमाणपत्र</li>
          <li>लसीकरण प्रमाणपत्र</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✍️ अर्ज प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>जवळच्या अंगणवाडी केंद्र किंवा आरोग्य केंद्रात संपर्क साधा</li>
          <li>PMMVY फॉर्म भरून आवश्यक कागदपत्रांसह सादर करा</li>
          <li>पडताळणीनंतर निधी थेट बँक खात्यात जमा होतो</li>
        </ol>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 अधिक माहितीसाठी संपर्क:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>महिला व बालविकास विभाग, महाराष्ट्र</li>
          <li>अंगणवाडी सेविका / आशा कार्यकर्ती</li>
          <li>
            वेबसाइट:{" "}
            <a href="https://wcd.nic.in" className="text-blue-600 underline">
              https://wcd.nic.in
            </a>
          </li>
          <li>
            <a href="https://pmmvy-cas.nic.in" className="text-blue-600 underline">
              https://pmmvy-cas.nic.in
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}