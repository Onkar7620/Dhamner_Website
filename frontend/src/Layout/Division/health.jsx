import React from "react";

const Health = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-gray-100">

      {/* ================= HEADING ================= */}
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-10">
        सरकारी आरोग्य योजनांची माहिती
      </h1>

      {/* ================= 1) REPORT ================= */}
      <h2 className="text-xl font-semibold mb-4">1) रीपोर्ट</h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-[900px] bg-white rounded-xl shadow">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">Sr.No</th>
              <th className="p-3">Software Name</th>
              <th className="p-3">Information</th>
              <th className="p-3">Website</th>
            </tr>
          </thead>

          <tbody className="text-sm">

            <tr className="border-b align-top">
              <td className="p-3">1</td>
              <td className="p-3">Aadhar Based Biomatric System</td>
              <td className="p-3 whitespace-pre-line max-h-[200px] overflow-y-auto">
आधार आधारित बायोमेट्रिक प्रणाली (Aadhar-based biometric system) म्हणजे आधार कार्डसोबत जोडलेल्या बायोमेट्रिक माहिती (fingerprint, iris) चा वापर करून व्यक्तीची ओळख प्रमाणीकरण (authentication) करण्याची प्रणाली. विशेषतः सरकारी कार्यालये, आणि इतर ठिकाणी कर्मचाऱ्यांची उपस्थिती नोंदवण्यासाठी (attendance), तसेच इतर ओळख प्रमाणीकरण प्रक्रियेसाठी याचा उपयोग केला जातो.
              </td>
              <td className="p-3 text-blue-600">
                <a href="http://mhphfwdbct.attendance.gov.in/" target="_blank">Open</a>
              </td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">2</td>
              <td className="p-3">DHIS-2</td>
              <td className="p-3 whitespace-pre-line max-h-[200px] overflow-y-auto">
DHIS2 चा वापर राष्ट्रीय आरोग्य अधिकारी आणि आंतरराष्ट्रीय आरोग्य कार्यक्रम आणि संघटना एचआयव्ही, टीबी आणि मलेरिया यासारख्या विशिष्ट रोगांशी संबंधित आरोग्य कार्यक्रमांच्या व्यवस्थापनासाठी तसेच रोग देखरेख, नियमित लसीकरण आणि मातृत्व यासारख्या सामान्य सार्वजनिक आरोग्य कार्यक्रमांसाठी देखील करतात.
              </td>
              <td className="p-3 text-blue-600">
                <a href="http://115.124.111.208/mh/dhis-web-commons/security/login.action" target="_blank">Open</a>
              </td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">3</td>
              <td className="p-3">E-Medicine (AUSHADHI)</td>
              <td className="p-3 whitespace-pre-line">
“ई-औषध” (E-Aushadhi) म्हणजे औषध माहिती व व्यवस्थापन प्रणाली.
              </td>
              <td className="p-3">220.156.189.73</td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">4</td>
              <td className="p-3">E-Office</td>
              <td className="p-3 whitespace-pre-line">
ई-ऑफिस प्रणाली:
• इलेक्ट्रॉनिक फाइल्स तयार करणे  
• नोट्स व टिप्पण्या  
• फायली ट्रॅकिंग  
• कागदपत्रे शोधणे  
• कार्यक्षमता वाढवणे  
              </td>
              <td className="p-3">eoffice.gov.in</td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">6</td>
              <td className="p-3">Health Facility Information</td>
              <td className="p-3 whitespace-pre-line">
रुग्णालये, दवाखाने, प्राथमिक आरोग्य केंद्र माहिती Ayushman Bharat Registry द्वारे मिळते.
              </td>
              <td className="p-3">arogya.maharashtra.gov.in</td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">7</td>
              <td className="p-3">HMIS</td>
              <td className="p-3 whitespace-pre-line max-h-[200px] overflow-y-auto">
आरोग्य व्यवस्थापन माहिती प्रणाली (HMIS) आरोग्य डेटा गोळा, विश्लेषण व निर्णय घेण्यासाठी वापरली जाते. ती जिल्हा, राज्य व राष्ट्रीय स्तरावर उपयोगी असते. लसीकरण, प्रसूती, आजार उपचार, संसाधन व्यवस्थापन इत्यादींसाठी महत्वाची आहे.
              </td>
              <td className="p-3">nrhm-mis.nic.in</td>
            </tr>

            <tr className="border-b align-top">
              <td className="p-3">9</td>
              <td className="p-3">HRMS</td>
              <td className="p-3 whitespace-pre-line max-h-[200px] overflow-y-auto">
HRMS ही मानव संसाधन व्यवस्थापन प्रणाली आहे जी कर्मचारी माहिती, वेतन, उपस्थिती व व्यवस्थापनासाठी वापरली जाते.
              </td>
              <td className="p-3">http://103.23.150.101/nrhmspma</td>
            </tr>

            <tr className="align-top">
              <td className="p-3">11</td>
              <td className="p-3">IDSP</td>
              <td className="p-3 whitespace-pre-line">
एकात्मिक रोग देखरेख कार्यक्रम — रोग ओळख व नियंत्रणासाठी.
              </td>
              <td className="p-3">idsp.nic.in</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* ================= 2) SCHEMES ================= */}
      <h2 className="text-xl font-semibold mb-4">2) विविध आरोग्य योजना</h2>

      <div className="overflow-x-auto mb-10">
        <table className="min-w-[1000px] bg-white rounded-xl shadow">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="p-3">No</th>
              <th className="p-3">योजना</th>
              <th className="p-3">लाभार्थी</th>
              <th className="p-3">लाभ</th>
              <th className="p-3">अटी</th>
              <th className="p-3">सेवा</th>
            </tr>
          </thead>

          <tbody className="text-sm">

            <tr className="border-b">
              <td className="p-3">1</td>
              <td className="p-3">जननी सुरक्षा योजना</td>
              <td className="p-3">SC/ST व BPL माता</td>
              <td className="p-3 whitespace-pre-line">
ग्रामीण ₹700  
शहरी ₹600  
घरी प्रसूती ₹500
              </td>
              <td className="p-3">शासकीय प्रसूती आवश्यक</td>
              <td className="p-3">ONLINE</td>
            </tr>

            <tr className="border-b">
              <td className="p-3">2</td>
              <td className="p-3">गरोदर महिला योजना</td>
              <td className="p-3">SC/ST व BPL</td>
              <td className="p-3">₹4000</td>
              <td className="p-3">अट नाही</td>
              <td className="p-3">OFFLINE</td>
            </tr>

            <tr>
              <td className="p-3">3</td>
              <td className="p-3">ABHA CARD</td>
              <td className="p-3">सर्व</td>
              <td className="p-3">युनिक हेल्थ आयडी</td>
              <td className="p-3">सर्वांसाठी</td>
              <td className="p-3">ONLINE</td>
            </tr>

            <tr>
              <td className="p-3">4</td>
              <td className="p-3">मातृत्व अनुदान योजना</td>
              <td className="p-3">अनुसूचित जमाती </td>
              <td className="p-3">गरोदर मातांना औषधी व आहारासाठी ४०० रुपया</td>
              <td className="p-3">फक्त अनुसूचित जमाती साठी आदिवासी मातेच्या तिसऱ्या खेप पर्यंत बिगरआदिवासी भागातील दुसऱ्या खेप पर्यंत </td>
              <td className="p-3">OFFLINE</td>
            </tr>

             <tr>
              <td className="p-3">5</td>
              <td className="p-3">जननी शिशु सुरक्षा योजना (JSSK)</td>
              <td className="p-3">सर्व प्रवर्ग  </td>
              <td className="p-3">	गरोदर मातेच्या संदर्भ सेवा व सोनोग्राफी तपासणीसाठी तसेच एक वर्षातील आजारी बालकांना संदर्भ सेवेसाठी मोफत सुविधा</td>
              <td className="p-3">सर्व प्रवर्गातील गरोदर मातांसाठी व एका वर्षातील आजारी बालकांसाठी  </td>
              <td className="p-3">OFFLINE</td>
            </tr>

          </tbody>
        </table>
      </div>

      {/* ================= 3) CONTACT ================= */}
      <h2 className="text-xl font-semibold mb-4">3) महत्वाचे दूरध्वनी क्रमांक</h2>

      <div className="overflow-x-auto">
        <table className="min-w-[600px] bg-white rounded-xl shadow">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="p-3">क्रमांक</th>
              <th className="p-3">सेवा</th>
            </tr>
          </thead>

          <tbody className="text-sm">
            <tr><td className="p-3">108</td><td className="p-3">आपत्कालीन सेवा</td></tr>
            <tr><td className="p-3">104</td><td className="p-3">आरोग्य सल्ला</td></tr>
            <tr><td className="p-3">102</td><td className="p-3">जननी सेवा</td></tr>
            <tr><td className="p-3">1075</td><td className="p-3">कोविड मार्गदर्शन</td></tr>
            <tr><td className="p-3">1800112356</td><td className="p-3">व्यसनमुक्ती</td></tr>
            <tr><td className="p-3">18002334475</td><td className="p-3">गर्भधारणा पूर्व व प्रसवपूर्व निदान तंत्र (PCPNDT)</td></tr>
            <tr><td className="p-3">1800116666</td><td className="p-3">क्षयरोग  विषयक मार्गदर्शन </td></tr>
            <tr><td className="p-3">022-24114000</td><td className="p-3">कुष्ठरोग विषयक मार्गदर्शन </td></tr>
            <tr><td className="p-3">8080809063</td><td className="p-3">महिला व बाल विकास विषयक सेवा </td></tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Health;