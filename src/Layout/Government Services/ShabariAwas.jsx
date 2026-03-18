import React from "react";

export default function ShabariAwas() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left leading-tight">
          शबरी आवास योजना
        </h1>

        <img
          src="/public/assets/Ramai-removebg-preview.png"
          alt="shabari awas"
          className="w-64 md:w-[420px] lg:w-[520px] object-contain"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-3xl text-green-700 mb-6">
          शबरी आवास योजना (Shabari Awas Yojana) – महाराष्ट्र शासन
        </h2>

        <h3 className="text-xl mb-4">उद्देश:</h3>

        <p className="text-lg leading-relaxed">
          शबरी आवास योजना ही महाराष्ट्र शासनाच्या आदिवासी विकास विभागाद्वारे राबविण्यात येणारी
          महत्त्वाची योजना आहे. या योजनेचा उद्देश अनुसूचित जमातीतील (आदिवासी)
          गरजू कुटुंबांना सुरक्षित आणि टिकाऊ घरे उपलब्ध करून देणे हा आहे.
        </p>
      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          👨‍👩‍👧 लाभार्थी कोण?
        </h2>

        <p className="text-lg leading-relaxed">
          ही योजना केवळ अनुसूचित जमातीतील (ST) कुटुंबांसाठी आहे.
          लाभार्थी BPL (गरीबी रेषेखालील) श्रेणीत असावा आणि त्यांच्याकडे स्वतःची जमीन असावी,
          परंतु राहण्यासाठी पक्के घर नसावे किंवा अत्यंत खराब स्थितीत घर असावे.
        </p>
      </section>

      <hr />

      {/* 🔹 BENEFITS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          💰 योजनेंतर्गत मिळणारे लाभ:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>घर बांधण्यासाठी सुमारे ₹1.5 लाखांपर्यंत आर्थिक मदत</li>
          <li>रक्कम थेट लाभार्थ्याच्या बँक खात्यात जमा</li>
          <li>घर बांधकामासाठी मार्गदर्शन व देखरेख उपलब्ध</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 PROCESS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          ✍️ अर्ज करण्याची प्रक्रिया:
        </h2>

        <ol className="list-decimal pl-6 space-y-4 text-lg">
          <li>ग्रामसेवक किंवा ITDP (Integrated Tribal Development Project) अधिकाऱ्यांशी संपर्क साधा</li>
          <li>आवश्यक कागदपत्रांसह अर्ज सादर करा</li>
          <li>पडताळणीनंतर लाभार्थ्यांची यादी तयार होते</li>
          <li>मंजुरीनंतर टप्प्याटप्प्याने निधी दिला जातो</li>
        </ol>
      </section>

      <hr />

      {/* 🔹 DOCUMENTS */}
      <section className="px-6 md:px-20 py-12">
        <h2 className="text-2xl text-green-700 mb-6">
          📄 महत्त्वाची कागदपत्रे:
        </h2>

        <ul className="list-disc pl-6 space-y-4 text-lg">
          <li>आधार कार्ड</li>
          <li>जात प्रमाणपत्र (SC/ST)</li>
          <li>उत्पन्नाचा दाखला</li>
          <li>जमीन मालकीचे कागदपत्र</li>
          <li>रहिवासी दाखला</li>
        </ul>
      </section>

      <hr />

      {/* 🔹 CONTACT */}
      <section className="px-6 md:px-20 py-12 pb-24">
        <h2 className="text-2xl text-green-700 mb-6">
          📞 अधिक माहितीसाठी संपर्क:
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          आपल्या जिल्ह्यातील आदिवासी प्रकल्प कार्यालय (ITDP Office) किंवा ग्रामपंचायत कार्यालयाशी संपर्क साधा.
        </p>

        <p className="text-lg">
          अधिक माहिती:{" "}
          <a
            href="https://tribal.maharashtra.gov.in"
            className="text-blue-600 underline"
          >
            https://tribal.maharashtra.gov.in
          </a>
        </p>
      </section>

    </div>
  );
}