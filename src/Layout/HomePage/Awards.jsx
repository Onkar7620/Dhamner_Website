import { useState } from "react";
import { Trophy, Search } from "lucide-react";

export default function Awards() {
  const [search, setSearch] = useState("");

  const awards = [
    { year: "2002-03", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2003-04", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2004-05", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - जिल्हा स्तरीय प्रथम पुरस्कार" },
    { year: "2004-05", text: "राष्ट्रसंत तुकडोजी महाराज स्वच्छ ग्राम स्पर्धा - विभाग स्तरावर द्वितीय पुरस्कार" },
    { year: "2004-05", text: "संत गाडगेबाबा ग्राम स्वच्छता अभियान - राज्य स्तरीय प्रथम पुरस्कार" },
    { year: "2005", text: "राष्ट्रपती डॉ. ए.पी.जे. अब्दुल कलाम यांच्या हस्ते निर्मल ग्राम पुरस्कार" },
    { year: "2007-08", text: "पंचायत राज समिती गाव भेट विशेष प्रशस्तीपत्र" },
    { year: "2007", text: "जिल्हा स्तरीय अनुसूचित निर्मूलन अभियान प्रथम पुरस्कार" },
    { year: "2004-05", text: "यशवंत पंचायत राज अभियान - विभाग स्तर प्रथम पुरस्कार" },
    { year: "2003-04", text: "वसंत राव नाईक पाणी व्यवस्थापन योजना - प्रथम पुरस्कार" },
    { year: "2006-07", text: "शाहू, फुले, आंबेडकर वस्ती सुधार अभियान - जिल्हा स्तरीय द्वितीय पुरस्कार" },
    { year: "2006-07", text: "राज्य स्तरीय प्रथम क्रमांकाचा 'वनश्री' पुरस्कार" },
    { year: "2016-17", text: "तालुका स्तरीय स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2016-17", text: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2016-17", text: "डॉ. बाबासाहेब आंबेडकर वस्ती - जिल्हा प्रथम पुरस्कार" },
    { year: "2017-18", text: "संत गाडगेबाबा ग्रामस्वच्छता अभियान - जिल्हा स्तरीय तृतीय क्रमांक" },
    { year: "2018-19", text: "तालुका स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2018-19", text: "जिल्हा स्मार्ट ग्राम - प्रथम पुरस्कार" },
    { year: "2023", text: "'ग्रीन व्हिलेज' प्रथम पुरस्कार भारत फोर्ज लि. पुणे" },
  ];

  const filteredAwards = awards.filter((award) =>
    award.text.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="py-12 px-4 md:px-10 bg-gradient-to-br from-green-50 to-white">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 flex justify-center items-center gap-2">
        <Trophy className="text-yellow-500 w-8 h-8 animate-bounce" />
        प्राप्त पुरस्कार
      </h2>

      {/* TOTAL COUNT */}
      <p className="text-center text-gray-600 mb-6">
        एकूण पुरस्कार: <span className="font-bold text-green-600">{filteredAwards.length}</span>
      </p>

      {/* SEARCH */}
      <div className="max-w-md mx-auto mb-8 relative">
        <Search className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="पुरस्कार शोधा..."
          className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* AWARDS GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredAwards.map((award, index) => (
          <div
            key={index}
            className="group p-5 bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2 border border-transparent hover:border-green-400"
          >
            {/* ICON */}
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="text-yellow-500 group-hover:scale-110 transition" />
              <span className="text-green-600 font-bold">{award.year}</span>
            </div>

            {/* TEXT */}
            <p className="text-gray-700 leading-relaxed group-hover:text-green-700 transition">
              {award.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}