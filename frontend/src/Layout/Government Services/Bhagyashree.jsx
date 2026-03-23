import React from "react";

export default function Bhagyashree() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          भाग्यश्री लेक माझी लाडकी योजना
        </h1>

        <img
          src="/assets/bhagyashree-removebg-preview.png"
          alt="ladki"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6">
          भाग्यश्री लेक माझी लाडकी योजना – महाराष्ट्र शासन
        </h2>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          “भाग्यश्री – लेक माझी लाडकी” ही योजना मुलींच्या जन्माला प्रोत्साहन देणे,
          स्त्रीभ्रूणहत्या रोखणे आणि मुलींच्या शिक्षणाला चालना देण्यासाठी सुरू केली आहे.
          या योजनेअंतर्गत मुलीच्या जन्मापासून ते शिक्षणापर्यंत आर्थिक सहाय्य दिले जाते.
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          🎯 योजनेची वैशिष्ट्ये:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>मुलगी जन्मल्यावर आर्थिक सहाय्य दिले जाते</li>
          <li>शिक्षणासाठी प्रत्येक टप्प्यावर प्रोत्साहन रक्कम</li>
          <li>मुलींचे संगोपन, शिक्षण आणि सक्षमीकरण</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👨‍👩‍👧 लाभार्थी कोण?
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>महाराष्ट्रातील BPL कुटुंबातील पालक</li>
          <li>पहिल्या दोन मुलींसाठी योजना लागू</li>
          <li>कुटुंबाचे वार्षिक उत्पन्न ₹1 लाखांपेक्षा कमी</li>
          <li>माता व पालक महाराष्ट्राचे रहिवासी असावेत</li>
          <li>कुटुंब नियोजन स्वीकारलेले असावे</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 BENEFITS TABLE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          💰 योजनेंतर्गत लाभ:
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border p-3">टप्पा</th>
                <th className="border p-3">प्रोत्साहन रक्कम (₹)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">मुलीचा जन्म</td>
                <td className="border p-3">₹5,000 – ₹25,000 (जिल्ह्यानुसार)</td>
              </tr>

              <tr>
                <td className="border p-3">पहिली ते सातवी</td>
                <td className="border p-3">₹2,000 – ₹3,000 दरवर्षी</td>
              </tr>

              <tr>
                <td className="border p-3">आठवी ते दहावी</td>
                <td className="border p-3">₹4,000 – ₹5,000 दरवर्षी</td>
              </tr>

              <tr>
                <td className="border p-3">अकरावी व बारावी</td>
                <td className="border p-3">₹6,000 – ₹7,000 दरवर्षी</td>
              </tr>

              <tr>
                <td className="border p-3">उच्च शिक्षण / व्यावसायिक शिक्षण</td>
                <td className="border p-3">विशेष मदत योजनांद्वारे</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-600">
          (टीप: रक्कम जिल्हानिहाय बदलू शकते)
        </p>
      </section>

      <hr />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📄 आवश्यक कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>पालकांचे आधार कार्ड</li>
          <li>मुलीचा जन्म दाखला</li>
          <li>उत्पन्नाचा दाखला</li>
          <li>जातीचा दाखला (लागू असल्यास)</li>
          <li>कुटुंब नियोजन प्रमाणपत्र</li>
          <li>बँक खाते तपशील</li>
          <li>निवासी दाखला</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✍️ अर्ज प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>स्थानिक अंगणवाडी / ग्रामपंचायत येथे अर्ज करा</li>
          <li>आवश्यक कागदपत्रांसह फॉर्म सादर करा</li>
          <li>पडताळणीनंतर रक्कम बँक खात्यात जमा होते</li>
        </ol>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 संपर्क व अधिक माहिती:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>महिला व बालविकास विभाग, महाराष्ट्र</li>
          <li>स्थानिक अंगणवाडी केंद्र / पंचायत समिती कार्यालय</li>
          <li>
            वेबसाइट:{" "}
            <a
              href="https://wcd.maharashtra.gov.in"
              className="text-blue-600 underline"
            >
              https://wcd.maharashtra.gov.in
            </a>
          </li>
        </ul>

        <h3 className="text-red-600 mt-6 mb-2">❗ टीप:</h3>

        <p className="text-lg">
          योजनेच्या अटी व रक्कम वेळोवेळी बदलू शकतात. अद्ययावत माहितीसाठी
          स्थानिक अधिकाऱ्यांशी संपर्क साधा.
        </p>
      </section>

    </div>
  );
}