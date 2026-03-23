import React from "react";

export default function SwachhBharat() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[50vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          स्वच्छ भारत मिशन
        </h1>

        <img
          src="/assets/Swachh_Bharat_Mission_Logo.svg.png"
          alt="swachh bharat"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-4">
          स्वच्छ भारत मिशन – एक राष्ट्रीय स्वच्छता मोहिम
        </h2>

        <p className="text-gray-600 mb-6">(Swachh Bharat Mission – SBM)</p>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          स्वच्छ भारत मिशन ही भारत सरकारने सुरू केलेली महत्त्वाकांक्षी योजना आहे.
          या योजनेचा उद्देश संपूर्ण देशात स्वच्छता वाढवणे, स्वच्छ जीवनशैली निर्माण करणे,
          खुले शौचमुक्त भारत (ODF) घडवणे, कचरा व्यवस्थापन सुधारणे आणि
          पर्यावरणपूरक स्वच्छता प्रणाली विकसित करणे हा आहे.
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📌 महत्त्वाची वैशिष्ट्ये:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>शौचालयांची निर्मिती व वापरासाठी प्रोत्साहन</li>
          <li>ग्रामीण व शहरी भागात स्वच्छतेबाबत जनजागृती</li>
          <li>कचरा संकलन, वर्गीकरण आणि पुनर्वापर</li>
          <li>प्लास्टिकमुक्त परिसर तयार करणे</li>
          <li>लोकसहभागातून अभियानाची अंमलबजावणी</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PHASES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          🏁 योजनेचे दोन टप्पे (Phases):
        </h2>

        <div className="space-y-6 text-lg">

          <div>
            <h3 className="font-semibold text-xl mb-2">
              🔹 स्वच्छ भारत मिशन – ग्रामीण (SBM-G):
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>ग्रामीण भागात शौचालय बांधकाम</li>
              <li>गाव खुले शौचमुक्त (ODF) घोषित करणे</li>
              <li>ग्रामपंचायतीमार्फत निधी वितरण</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-2">
              🔹 स्वच्छ भारत मिशन – शहरी (SBM-U):
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>शहरी स्वच्छता सुधारणा</li>
              <li>सार्वजनिक शौचालये व कचरा व्यवस्थापन</li>
              <li>स्मार्ट शहरांमध्ये आधुनिक तंत्रज्ञानाचा वापर</li>
            </ul>
          </div>

        </div>
      </section>

      <hr />

      {/* 🔹 BENEFICIARIES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👨‍👩‍👧 लाभार्थी:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>संपूर्ण भारतातील नागरिक, ग्रामपंचायती, नगरपालिका, शाळा व सामाजिक संस्था</li>
          <li>गरीब व वंचित कुटुंबांना शौचालय बांधणीसाठी आर्थिक मदत</li>
          <li>शहरी भागातील लोकांसाठी सार्वजनिक स्वच्छता सुविधा</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 SUBSIDY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          🚽 शौचालयासाठी अनुदान:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>ग्रामीण भागात पात्र कुटुंबांना ₹12,000 पर्यंत अनुदान</li>
          <li>शहरी भागात नगरपालिका/नगरपंचायतीमार्फत सुविधा</li>
          <li>बांधकाम पूर्ण झाल्यावर रक्कम थेट खात्यात जमा</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 AWARENESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📢 जनजागृती व सहभाग:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>स्वच्छता अभियान, प्लास्टिक मुक्त उपक्रम</li>
          <li>विद्यार्थ्यांसाठी स्पर्धा, पोस्टर मोहिमा</li>
          <li>सामाजिक संस्था व नागरिकांचा सहभाग</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 संपर्क व अधिक माहिती:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>
            अधिकृत वेबसाइट:{" "}
            <a
              href="https://swachhbharatmission.gov.in"
              className="text-blue-600 underline"
            >
              https://swachhbharatmission.gov.in
            </a>
          </li>
          <li>राज्य स्वच्छता कक्ष, महाराष्ट्र शासन</li>
          <li>ग्रामपंचायत / नगरपालिका कार्यालय</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 NOTE */}
      <section className="px-6 md:px-20 py-12 pb-28">
        <h2 className="text-2xl text-red-600 mb-6">
          📝 टीप:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>
            शौचालयासाठी अर्ज करताना फोटो, आधार कार्ड, बँक तपशील आणि BPL माहिती आवश्यक असू शकते.
          </li>
          <li>
            योजना संपूर्ण भारतात लागू असून प्रत्येक राज्यात अंमलबजावणी वेगवेगळ्या पद्धतीने केली जाते.
          </li>
        </ul>
      </section>

    </div>
  );
}