import React from "react";

export default function PesaScheme() {
  return (
    <div className="w-full bg-gray-50 font-bold text-gray-800">

      {/* 🔹 HERO */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white px-6 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[60vh] py-20 md:py-32 gap-10">

        <h1 className="text-4xl md:text-7xl text-center md:text-left">
          पेसा 5% अबंध  निधी योजना
        </h1>

        <img
          src="/assets/Pesa-Logo.png"
          alt="pesa"
          className="w-64 md:w-[420px] lg:w-[520px]"
        />
      </section>

      <hr />

      {/* 🔹 TITLE + OBJECTIVE */}
      <section className="px-6 md:px-20 py-12">

        <h2 className="text-3xl text-green-700 mb-6">
          पेसा 5% अबंध निधी योजना (PESA 5% Untied Fund Scheme) – महाराष्ट्र शासन
        </h2>

        <h3 className="text-xl mb-4">योजनेचा उद्देश:</h3>

        <p className="text-lg mb-6">
          पैसा 5% अबंध निधी योजना ही आदिवासी भागात (PESA क्षेत्रांमध्ये) स्थानिक स्वराज्य संस्थांना 
          (ग्रामपंचायतींना) अधिक सक्षम व स्वयंपूर्ण बनवण्यासाठी राबवली जाणारी योजना आहे. 
          या योजनेचा उद्देश स्थानिक गरजेनुसार विकासकामे हाती घेण्यासाठी निधी उपलब्ध करून देणे हा आहे.
        </p>

        <h3 className="text-xl mb-4">PESA काय आहे?</h3>

        <p className="text-lg mb-6">
          PESA म्हणजे "Panchayats (Extension to Scheduled Areas) Act, 1996", 
          ज्याच्या अंतर्गत अनुसूचित क्षेत्रातील ग्रामसभा आणि ग्रामपंचायतींना विशेष अधिकार दिले जातात.
        </p>

        <h3 className="text-xl mb-4">5% अबंध निधी म्हणजे काय?</h3>

        <p className="text-lg">
          राज्य शासनाकडून आदिवासी उपयोजनांअंतर्गत मिळणाऱ्या एकूण निधीपैकी 5% निधी हा 
          "अबंध" स्वरूपात ठेवण्यात येतो. म्हणजेच याचा वापर ठराविक योजनेसाठी न करता 
          स्थानिक गरजेनुसार ग्रामसभेच्या मंजुरीने विविध विकासकामांसाठी केला जाऊ शकतो.
        </p>

      </section>

      <hr />

      {/* 🔹 BENEFICIARY */}
      <section className="px-6 md:px-20 py-12">

        <h3 className="text-xl mb-4">लाभार्थी कोण?</h3>

        <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
          <li>PESA कायद्यांतर्गत येणाऱ्या अनुसूचित क्षेत्रातील ग्रामपंचायती</li>
          <li>या ग्रामपंचायतींमध्ये राहणारे सर्व नागरिक अप्रत्यक्ष लाभार्थी असतात</li>
        </ul>

        <h3 className="text-xl mb-4">योजनेची वैशिष्ट्ये:</h3>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>निधीचा वापर ग्रामसभा मंजूर करेल अशा कामांसाठीच करता येतो</li>
          <li>निधी वापरासाठी कोणतीही किचकट प्रक्रिया नाही</li>
          <li>निधीचा उपयोग तातडीच्या गरज भागवणाऱ्या कामांवर केला जातो</li>
          <li>स्थानिक पातळीवर पारदर्शकता व लोकसहभाग वाढतो</li>
        </ul>

      </section>

      <hr />

      {/* 🔹 FUND USAGE */}
      <section className="px-6 md:px-20 py-12">

        <h3 className="text-xl mb-4">
          निधीचा वापर कोणत्या कामांसाठी करता येतो?
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
          <li>गावातील रस्ते दुरुस्ती</li>
          <li>पाणीपुरवठा</li>
          <li>शाळा दुरुस्ती</li>
          <li>आरोग्य सुविधा</li>
          <li>सामुदायिक शौचालये</li>
          <li>सार्वजनिक ठिकाणांची स्वच्छता</li>
          <li>महिला व बालकल्याण उपक्रम</li>
          <li>स्थानिक सण, उत्सव व सांस्कृतिक कार्यक्रम</li>
        </ul>

        <h3 className="text-xl mb-4">
          नियंत्रण व अंमलबजावणी:
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg mb-6">
          <li>ग्रामपंचायत व ग्रामसभा</li>
          <li>जिल्हा परिषद अंतर्गत आदिवासी विकास प्रकल्प अधिकारी (ITDP)</li>
          <li>सामाजिक लेखापरीक्षण व वार्षिक अहवालाद्वारे कामांची पडताळणी</li>
        </ul>

        <h3 className="text-xl mb-4">
          अधिक माहितीसाठी संपर्क:
        </h3>

        <ul className="list-disc pl-6 space-y-3 text-lg">
          <li>स्थानिक ग्रामपंचायत कार्यालय</li>
          <li>जिल्हा परिषद / पंचायत समिती कार्यालय</li>
          <li>आदिवासी विकास प्रकल्प कार्यालय (ITDP)</li>
          <li>
            अधिकृत वेबसाइट:{" "}
            <a
              href="https://tribal.maharashtra.gov.in"
              className="text-blue-600 underline"
            >
              https://tribal.maharashtra.gov.in
            </a>
          </li>
        </ul>

        <h3 className="text-red-600 mt-6 mb-2">
          ❗ टीप:
        </h3>

        <p className="text-lg">
          ही योजना केवळ अनुसूचित क्षेत्रांतील (PESA अंतर्गत) ग्रामपंचायतींसाठी लागू आहे.
          निधीचा वापर करताना ग्रामसभेचा ठराव आवश्यक आहे.
        </p>

      </section>

    </div>
  );
}