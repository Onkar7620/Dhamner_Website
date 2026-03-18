import React from "react";

export default function Ayushman() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO SECTION */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        {/* Text */}
        <h1 className="text-4xl md:text-7xl leading-tight text-center md:text-left">
          आयुष्मान भारत योजना
        </h1>

        {/* Image */}
        <img
          src="/public/assets/Ayushman-Logo.png"
          alt="pmjay"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl md:text-4xl text-green-700 mb-6">
          आयुष्मान भारत योजना – जन आरोग्य अभियान (PM-JAY)
        </h2>

        <h3 className="text-xl mb-4">
          योजनेचा उद्देश:
        </h3>

        <p className="leading-relaxed text-lg">
          आयुष्मान भारत योजना ही केंद्र सरकारची महत्त्वाकांक्षी आरोग्य योजना आहे.
          या योजनेचा मुख्य उद्देश म्हणजे गरीब आणि गरजू कुटुंबांना मोफत आरोग्य सेवा प्रदान करणे,
          विशेषतः जे उपचार घेऊ शकत नाहीत अशा गंभीर आजारांसाठी रुग्णालयीन उपचाराचा खर्च सरकारकडून उचलला जातो.
        </p>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          🎯 योजनेची वैशिष्ट्ये:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>भारतामधील सर्व पात्र कुटुंबांना प्रति वर्ष ₹5 लाखांपर्यंत मोफत आरोग्य विमा कवच</li>
          <li>शस्त्रक्रिया, औषधे, निदान तपासण्या, हॉस्पिटलमध्ये दाखल होणे यांचा समावेश</li>
          <li>सरकारी तसेच खाजगी रुग्णालयांमध्ये मोफत उपचार सुविधा</li>
          <li>कॅशलेस व पेपरलेस प्रक्रिया</li>
          <li>देशभरातील 15000+ रुग्णालयांमध्ये सेवा उपलब्ध</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 BENEFITS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          📄 योजनेंतर्गत लाभ:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>₹5 लाख पर्यंतचा आरोग्य विमा दरवर्षी कुटुंबासाठी</li>
          <li>1300+ पेक्षा जास्त उपचार पॅकेजेस (शस्त्रक्रिया, कर्करोग उपचार, डायलिसिस, इ.)</li>
          <li>उपचारासाठी रुग्णालयात भरतीपूर्वी 3 दिवस आणि डिस्चार्जनंतर 15 दिवसांपर्यंतचा खर्च समाविष्ट</li>
          <li>औषधे, तपासण्या आणि निवास यांचाही समावेश</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 ELIGIBILITY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          👨‍👩‍👧 पात्रता (Eligibility):
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>ग्रामीण भागातील गरीब व वंचित कुटुंबे (SECC 2011 नुसार)</li>
          <li>शहरी भागातील कामगार वर्ग, असंघटित क्षेत्रातील नागरिक</li>
          <li>लाभ घेण्यासाठी कोणतीही नोंदणी फी किंवा प्रीमियम आवश्यक नाही</li>
          <li>महाराष्ट्रात ही योजना "महत्मा फुले जन आरोग्य योजना" सोबत एकत्रितपणे राबवली जाते</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 FACILITIES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          🏥 उपलब्ध सुविधा:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>कॅशलेस आणि पेपरलेस उपचार</li>
          <li>देशभरातील सूचीबद्ध सरकारी व खाजगी रुग्णालयांमध्ये सेवा</li>
          <li>24x7 हेल्पलाइन आणि सुविधा केंद्रे</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          📑 आवश्यक कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>आधार कार्ड</li>
          <li>राशन कार्ड किंवा SECC यादीतील नाव</li>
          <li>आयुष्मान भारत कार्ड (ABHA ID – Health ID)</li>
          <li>लाभार्थ्याच्या नावासहित मोबाईल क्रमांक</li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          ✍️ अर्ज व नोंदणी प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>नजीकच्या आयुष्मान भारत सुविधा केंद्रात (CSC / जनसेवा केंद्र) भेट द्या</li>
          <li>आपले नाव यादीत आहे का ते तपासा (https://pmjay.gov.in वरून)</li>
          <li>कागदपत्रांसह AB-PMJAY कार्ड तयार करून घ्या</li>
          <li>रुग्णालयात दाखल होताना हे कार्ड दाखवून कॅशलेस उपचार घ्या</li>
        </ol>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl md:text-3xl text-green-700 mb-6">
          📞 संपर्क व अधिक माहिती:
        </h2>

        <ul className="space-y-4 text-lg">
          <li>राष्ट्रीय हेल्पलाइन: 14555 / 1800-111-565</li>
          <li>
            वेबसाइट:{" "}
            <a href="https://pmjay.gov.in" className="text-blue-600 underline">
              https://pmjay.gov.in
            </a>
          </li>
          <li>
            महाराष्ट्रासाठी:{" "}
            <a href="https://www.jeevandaye.gov.in" className="text-blue-600 underline">
              https://www.jeevandaye.gov.in
            </a>
          </li>
        </ul>
      </section>

      <hr className="border-gray-300" />

      {/* 🔹 TIPS */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl md:text-3xl text-red-600 mb-6">
          ❗ महत्त्वाची टिप:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>महाराष्ट्र राज्यात आयुष्मान भारत योजना "महत्मा फुले जन आरोग्य योजना" (MPJAY) बरोबर एकत्र राबवली जाते.</li>
          <li>त्यामुळे लाभार्थी दोन्ही योजनांचे फायदे घेऊ शकतात.</li>
          <li>लाभ घेण्याआधी आपल्या नावाची यादीत खात्री करणे आवश्यक आहे.</li>
        </ul>
      </section>

    </div>
  );
}