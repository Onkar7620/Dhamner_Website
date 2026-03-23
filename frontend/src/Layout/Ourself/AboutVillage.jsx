export default function AboutVillage() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="bg-green-700 w-full py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center">
            ग्रामपंचायतीविषयी
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        {/* Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
          महाराष्ट्राच्या नकाशावर ठळकपणे उभे राहणारे आदर्श गाव
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-justify">
          धामणेर गावात स्वच्छता, सिमेंट रस्ते, पाणी व्यवस्थापन, शिक्षण आणि
          सामाजिक एकता यावर विशेष भर दिला जातो. ग्रामस्थांच्या एकजुटीमुळे विविध
          विकासकामे यशस्वीपणे राबवली जात आहेत. तसेच शेती हा मुख्य व्यवसाय असून
          कृष्णा नदीच्या पाण्यामुळे येथे शेतीला मोठा आधार मिळतो.
        </p>

        {/* Section 1 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
          विकासाची नांदी: लोकसहभागातून क्रांती
        </h3>

        <p className="text-gray-700 leading-7 sm:leading-8 mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-justify">
          धामणेर हे केवळ एक गाव नसून, एक प्रगत आणि आदर्श ग्रामसंस्कृतीचे प्रतीक
          बनत आहे. ग्रामस्थांचा एकोप्या, पर्यावरणपूरक उपक्रम आणि विकासाची सततची
          धडपड यामुळे हे गाव इतर गावांसाठी प्रेरणादायी ठरत आहे.
        </p>

        {/* Section 2 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
          पायाभूत सुविधा: विकासाचा भक्कम आधार
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong>पाणंद रस्ते:</strong> गावातील सर्व पाणंद रस्ते अतिक्रमणमुक्त
            करून खुले करण्यात आले.
          </li>

          <li>
            <strong>आधुनिक रस्ते:</strong> सिमेंट-काँक्रीट रस्ते आणि
            वृक्षारोपणामुळे गावाचा विकास वेगाने झाला.
          </li>

          <li>
            <strong>LED स्ट्रीट लाईट:</strong> गावातील सर्व रस्त्यांवर एलईडी
            दिवे बसवण्यात आले आहेत.
          </li>
          <li>
            <strong>पूर्ण गाव CCTV कॅमेरा:</strong> गावाची सुरक्षा वाढवण्यासाठी
            सर्वत्र CCTV कॅमेरे बसवण्यात आले आहेत, ज्यामुळे गुन्हेगारीवर
            नियंत्रण ठेवता येते.
          </li>
          <li>
            <strong>पूर्ण गाव ऑडिओ सिस्टम:</strong> सार्वजनिक सूचना व माहिती
            देण्यासाठी संपूर्ण गावात ऑडिओ सिस्टम बसवण्यात आली आहे.
          </li>
        </ul>

        {/* Section 3 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          पाणी व जलसंधारण
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong>वॉटर एटीएम::</strong> गावात स्वच्छ व शुद्ध पिण्याचे पाणी
            उपलब्ध करून देण्यासाठी वॉटर एटीएम बसवण्यात आले आहे, ज्यामुळे
            नागरिकांना सुरक्षित पाणी मिळते.
          </li>
          <li>
            <strong>पिण्याचे पाणी:</strong> शुद्ध आणि सुरक्षित पिण्याच्या
            पाण्याची सुविधा उपलब्ध आहे.
          </li>

          <li>
            <strong>तलाव / विहिरी पुनरुज्जीवन</strong> तलाव, नाले आणि विहिरींचे
            पुनरुज्जीवन करून पाणीसाठा वाढवण्यात आला आहे.
          </li>
          <li>
            <strong>जलसंधारण (वनराई, गॅबियन बंधारे):</strong> पाण्याचे संवर्धन
            करण्यासाठी वनराई व गॅबियन बंधारे बांधण्यात आले आहेत, ज्यामुळे भूजल
            पातळी वाढली आहे.
          </li>
        </ul>

        {/* Section 4 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          ऊर्जा व पर्यावरण
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong> सोलर नेट मीटरिंग (शासकीय इमारती):</strong>
            सर्व शासकीय व निमशासकीय इमारतींवर सोलर नेट मीटरिंग प्रणाली बसवण्यात
            आली आहे, ज्यामुळे वीज बचत होते.
          </li>

          <li>
            <strong>सोलर सुविधा (घरांवर):</strong>
            गावातील प्रत्येक घरावर सोलर नेट मीटरिंग सुविधा उपलब्ध करून देण्यात
            आली आहे.
          </li>
          <li>
            <strong> होम कंपोस्टिंग सिस्टम:</strong>
            कचरा व्यवस्थापनासाठी घरगुती कंपोस्टिंग प्रणाली राबवण्यात आली आहे,
            ज्यामुळे सेंद्रिय खत तयार होते.
          </li>
          <li>
            <strong> बायोगॅस सुविधा (मानवी विष्ठेवर):</strong>
            स्वच्छता व ऊर्जा निर्मितीसाठी मानवी विष्ठेवर आधारित बायोगॅस प्रकल्प
            राबवण्यात आला आहे.
          </li>
        </ul>

        {/* Section 5 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          आरोग्य व तंत्रज्ञान
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong>आरोग्य केंद्र:</strong> गावात आधुनिक आरोग्य सुविधा उपलब्ध
            आहेत.
          </li>
          <li>
            <strong>टेलीमेडिसीन सेंटर:</strong>आरोग्य सेवा अधिक सुलभ करण्यासाठी
            टेलीमेडिसीन सेंटर उपलब्ध आहे, ज्याद्वारे डॉक्टरांशी ऑनलाइन सल्ला
            घेता येतो.
          </li>
          <li>
            <strong>ग्रामपंचायत अँब्युलन्स:</strong>
            आपत्कालीन परिस्थितीत त्वरित सेवा देण्यासाठी ग्रामपंचायतीकडे
            अँब्युलन्स उपलब्ध आहे.
          </li>
          <li>
            <strong> AI लॅब:</strong>
            विद्यार्थ्यांसाठी आधुनिक तंत्रज्ञानाची ओळख करून देण्यासाठी AI लॅब
            सुरू करण्यात आली आहे.
          </li>
      
        </ul>

        {/* Section 6 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          डिजिटल व स्मार्ट सुविधा
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong>WiFi Village:</strong>
            गावात मोफत WiFi सुविधा उपलब्ध करून देण्यात आली आहे, ज्यामुळे डिजिटल
            सेवा व शिक्षणाला चालना मिळते.
          </li>
          <li>
            <strong>पूर्ण गाव ऑडिओ सिस्टम:</strong>
            सार्वजनिक सूचना व माहिती देण्यासाठी संपूर्ण गावात ऑडिओ सिस्टम
            बसवण्यात आली आहे.
          </li>
          <li>
            <strong>GIS प्रणाली:</strong>आमच्या गावात GIS आधारित डिजिटल मॅपिंग
            प्रणाली वापरून सर्व घरांची व सुविधांची माहिती व्यवस्थापित केली जाते.
          </li>
        </ul>

        {/* Section 7 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          शिक्षण व विद्यार्थी सुविधा
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong>डिजिटल शाळा:</strong> विद्यार्थ्यांसाठी आधुनिक डिजिटल वर्ग
            उपलब्ध आहेत.
          </li>

          <li>
            <strong>अभ्यासिका:</strong> स्पर्धा परीक्षांसाठी विद्यार्थ्यांना
            वातानुकूलित अभ्यासिका उपलब्ध आहे.
          </li>
          <li>
            <strong> विद्यार्थ्यांसाठी फ्री सायकल सेवा:</strong>
            विद्यार्थ्यांच्या सोयीसाठी मोफत सायकल सेवा उपलब्ध आहे, ज्यामुळे
            शिक्षणासाठी ये-जा सुलभ होते.
          </li>
          <li>
            <strong>AI लॅब:</strong>
            विद्यार्थ्यांसाठी आधुनिक तंत्रज्ञानाची ओळख करून देण्यासाठी AI लॅब
            सुरू करण्यात आली आहे.
          </li>
        </ul>

        {/* Section 8 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          शेती व कृषी विकास
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong> माती परीक्षण:</strong>
            शेतकऱ्यांसाठी माती परीक्षण सुविधा उपलब्ध करून देण्यात आली आहे.
            यामुळे जमिनीतील पोषक तत्त्वांची माहिती मिळते आणि योग्य पिक नियोजन व
            खत व्यवस्थापन करता येते.
          </li>

          <li>
            <strong>अशेतकरी उत्पादक संस्था (FPO)::</strong>
            शेतकऱ्यांना एकत्र करून त्यांच्या उत्पादनाचे चांगले दर मिळवण्यासाठी
            FPO स्थापन करण्यात आले आहे. म
          </li>
          <li>
            <strong>महिला व पुरुष FPO:</strong>
            हिला व पुरुषांसाठी स्वतंत्र उत्पादक गट तयार करून आर्थिक सक्षमीकरण
            साधले आहे.
          </li>
        </ul>

        {/* Section 9 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          रोजगार व उद्योग
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong> गारमेंट सेंटर:</strong>
            गावातील युवक-युवतींसाठी रोजगार निर्मितीच्या दृष्टीने गारमेंट सेंटर
            सुरू करण्यात आले आहे.
          </li>

          <li>
            <strong> लिज्जत पापड उद्योग:</strong>
            महिलांसाठी स्वावलंबन निर्माण करण्यासाठी लिज्जत पापड उद्योग सुरू
            करण्यात आला आहे, ज्यामुळे त्यांना रोजगाराच्या संधी उपलब्ध झाल्या
            आहेत.
          </li>
        </ul>

        {/* Section 9 */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-10 md:mt-12 mb-3 sm:mb-4">
          क्रीडा व आरोग्य
        </h3>

        <ul className="list-disc pl-5 sm:pl-6 space-y-3 sm:space-y-4 text-gray-700 leading-7 text-sm sm:text-base md:text-lg">
          <li>
            <strong> इंडोर जिम:</strong>
            नागरिकांच्या आरोग्यासाठी आधुनिक इंडोर जिम सुविधा उपलब्ध आहे. ओपन
            जिम: मोकळ्या जागेत व्यायामासाठी ओपन जिम बसवण्यात आली आहे, ज्याचा
            सर्व नागरिकांना फायदा होतो.
          </li>
          <li>
            <strong>ओपन जिम: </strong>
            मोकळ्या जागेत व्यायामासाठी ओपन जिम बसवण्यात आली आहे, ज्याचा सर्व
            नागरिकांना फायदा होतो.
          </li>

          <li>
            <strong> क्रीडासंकुल:</strong>
            गावात क्रीडा संकुल उभारण्यात आले आहे, ज्यामुळे युवकांना क्रीडा
            क्षेत्रात संधी मिळते.
          </li>
        </ul>
      </div>
    </div>
  );
}
