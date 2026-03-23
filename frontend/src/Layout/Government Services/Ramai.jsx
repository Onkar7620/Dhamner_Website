import React from "react";

export default function Ramai() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          रमाई आवास योजना
        </h1>

        <img
          src="/assets/Ramai-removebg-preview.png"
          alt="house"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6">
          रमाई आवास योजना (Ramai Awas Yojana) – महाराष्ट्र शासन
        </h2>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          रमाई आवास योजना ही महाराष्ट्र शासनाच्या सामाजिक न्याय व विशेष सहाय्य विभागामार्फत
          राबवली जाते. या योजनेचा मुख्य उद्देश सामाजिकदृष्ट्या दुर्बल घटकांतील
          अनुसूचित जाती (SC) व नवबौद्ध कुटुंबांना स्वतःचे पक्के घर बांधण्यासाठी
          आर्थिक सहाय्य उपलब्ध करून देणे हा आहे.
        </p>
      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👨‍👩‍👧 लाभार्थी कोण?
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>अनुसूचित जाती (SC) व नवबौद्ध समाजातील गरीब कुटुंबे</li>
          <li>ज्यांच्याकडे स्वतःची जमीन आहे पण घर नाही किंवा अतिशय खराब स्थितीत घर आहे</li>
          <li>अर्जदार BPL (गरीबी रेषेखालील) यादीत असावा</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 BENEFITS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          💰 योजनेंतर्गत लाभ:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>घर बांधण्यासाठी ₹1.5 लाखांपर्यंत अनुदान (रक्कम बदलू शकते)</li>
          <li>अनुदान थेट लाभार्थ्याच्या बँक खात्यात जमा केले जाते</li>
          <li>काही जिल्ह्यांमध्ये PMAY (प्रधानमंत्री आवास योजना) सोबत एकत्रित लाभ दिला जातो</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 GUIDELINES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          🏗️ घर बांधकामासाठी मार्गदर्शन:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>स्थानिक ग्रामपंचायत / नगरपरिषद / जिल्हा परिषद तांत्रिक मार्गदर्शन देते</li>
          <li>कामाच्या प्रगतीनुसार टप्प्याटप्प्याने निधी दिला जातो</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✍️ अर्ज करण्याची प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>ग्रामसेवक / तलाठी / पंचायत समिती कार्यालयातून अर्जाचा नमुना घ्या</li>
          <li>आवश्यक कागदपत्रांसह अर्ज सामाजिक न्याय विभाग किंवा जिल्हा परिषद कार्यालयात जमा करा</li>
          <li>पडताळणीनंतर पात्र लाभार्थ्यांची यादी तयार करून मंजुरी दिली जाते</li>
        </ol>
      </section>

      <hr />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📄 आवश्यक कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>आधार कार्ड</li>
          <li>जात प्रमाणपत्र (SC / नवबौद्ध)</li>
          <li>उत्पन्नाचा दाखला</li>
          <li>जमीन धारक असल्याचे कागदपत्र</li>
          <li>रहिवासी दाखला</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 अधिक माहितीसाठी संपर्क:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>सामाजिक न्याय विभागाचे जिल्हा कार्यालय</li>
          <li>ग्रामपंचायत / पंचायत समिती कार्यालय</li>
          <li>
            वेबसाइट:{" "}
            <a
              href="https://sjsa.maharashtra.gov.in"
              className="text-blue-600 underline"
            >
              https://sjsa.maharashtra.gov.in
            </a>
          </li>
        </ul>
      </section>

    </div>
  );
}