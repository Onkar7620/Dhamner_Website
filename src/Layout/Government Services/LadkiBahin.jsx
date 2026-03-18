import React from "react";

export default function LadkiBahin() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          लाडकी बहीण योजना
        </h1>

        <img
          src="/public/assets/ladki-bahin.png"
          alt="ladki bahin"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6">
          लाडकी बहीण योजना (Ladki Bahin Yojana) – महाराष्ट्र शासन
        </h2>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          लाडकी बहीण योजना ही महाराष्ट्र शासनाची एक महत्त्वाची सामाजिक कल्याण योजना असून
          राज्यातील महिलांना आर्थिकदृष्ट्या सक्षम बनवणे आणि त्यांना दरमहा आर्थिक मदत देणे हा योजनेचा उद्देश आहे.
          या योजनेद्वारे महिलांच्या जीवनमानात सुधारणा करून त्यांना स्वावलंबी बनवणे
          आणि कुटुंबातील आर्थिक भार कमी करणे हे मुख्य ध्येय आहे.
        </p>
      </section>

      <hr />

      {/* 🔹 FEATURES */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📌 महत्त्वाची वैशिष्ट्ये:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>दरमहा ₹1,500 थेट लाभार्थी महिलेच्या बँक खात्यात जमा</li>
          <li>DBT (Direct Benefit Transfer) प्रणालीद्वारे पैसे जमा</li>
          <li>महिलांच्या आर्थिक सक्षमीकरणासाठी महत्त्वपूर्ण पाऊल</li>
          <li>संपूर्ण महाराष्ट्रातील पात्र महिलांना लागू</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 ELIGIBILITY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👩 पात्रता (Eligibility):
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>लाभार्थी महिला महाराष्ट्र राज्याची रहिवासी असावी</li>
          <li>वय 21 वर्षे किंवा त्याहून अधिक असावे</li>
          <li>कुटुंबाचे वार्षिक उत्पन्न ₹2.5 लाखांपेक्षा कमी असावे</li>
          <li>महिला अविवाहित, विवाहित, विधवा, घटस्फोटीत असू शकते</li>
          <li>कामगार, गृहिणी, शेतकरी किंवा असंघटित क्षेत्रातील महिला पात्र</li>
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
          <li>रहिवासी दाखला (पत्त्याचा पुरावा)</li>
          <li>उत्पन्नाचा दाखला</li>
          <li>बँक खाते (DBT साठी)</li>
          <li>विवाह स्थिती प्रमाणपत्र (लागू असल्यास)</li>
          <li>पासपोर्ट साईज फोटो</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✍️ अर्ज प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>ऑनलाइन पोर्टल किंवा स्थानिक शासन कार्यालयातून अर्ज करा</li>
          <li>आवश्यक कागदपत्रे अपलोड / सादर करा</li>
          <li>पडताळणीनंतर निधी थेट खात्यात जमा केला जाईल</li>
        </ol>
      </section>

      <hr />

      {/* 🔹 START DATE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📅 योजना सुरू होण्याची तारीख:
        </h2>

        <ul className="list-disc pl-6 text-lg">
          <li>योजना 2024–25 आर्थिक वर्षात सुरू करण्यात आली</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 अधिक माहितीसाठी संपर्क:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>स्थानिक ग्रामपंचायत / नगरपालिका कार्यालय</li>
          <li>महिला व बालविकास विभाग, महाराष्ट्र शासन</li>
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
          योजनेच्या अटी व प्रक्रिया वेळोवेळी बदलू शकतात. अद्ययावत माहितीसाठी
          अधिकृत वेबसाइट किंवा स्थानिक कार्यालयाशी संपर्क साधावा.
        </p>
      </section>

    </div>
  );
}