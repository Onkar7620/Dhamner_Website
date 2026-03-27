import { BookOpen, Dumbbell, Trophy, Leaf, Building2, Library } from "lucide-react";
export default function Progress() {
    const facilities = [
  {
    icon: Trophy,
    title: "हिराजी अप्पाजी धामणेकर क्रीडांगण",
    desc: "सार्वजनिक कार्यक्रमांचे स्टेज व खेळांचे मैदान",
  },
  {
    icon: Library,
    title: "जागृती वाचनालय धामणेर",
    desc: "कादंबरी व मासिके, सर्व वर्तमानपत्रे",
  },
  {
    icon: BookOpen,
    title: "कै. इंदुमती पवार गुणवत्ता विकास वर्ग",
    desc: "एम. पी. एस. सी. व यू. पी. एस. सी. अभ्यासासाठी लागणारी सर्व पुस्तके",
  },
  {
    icon: Dumbbell,
    title: "व्यायाम शाळा धामणेर",
    desc: "व्यायामाचे सर्व साहित्य आहे",
  },
  {
    icon: Building2,
    title: "रमनलाल वाडीलाल शाह बालउद्यान",
    desc: "घसरगुंडी, झोपाळा",
  },
  {
    icon: Leaf,
    title: "मारुती नाना-नानी पार्क धामणेर",
    desc: "ज्येष्ठ नागरिक आणि चिमुकल्यांसाठी गावामध्ये विकसित केलेले हे नाना-नानी पार्क म्हणजे विरंगुळ्याचे एक सुंदर ठिकाण आहे.",
  },
];
  return (
    <>
        <div className="bg-gray-100 py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 Heading Section */}
        <div className="text-center mb-14">
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            लोकसहभागातून समृद्धीकडे
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="w-12 h-[2px] bg-yellow-700"></span>
            <span className="w-3 h-3 bg-yellow-700 rotate-45"></span>
            <span className="w-12 h-[2px] bg-yellow-700"></span>
          </div>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-5xl mx-auto leading-relaxed text-sm md:text-base">
            धामणेर - एक छोटंसं, तरीही स्वप्नांनी भारलेलं गाव. कधी काळी या गावाने पाण्यासाठी वनवण केली,
            अंधारात रात्र काढली, धुळकट रस्त्यांवर पायवाटा शोधल्या आणि मुलांना मोडकळलेल्या शाळांमध्ये शिक्षणाचं
            भविष्य शोधताना पाहिलं. पण हीच धामणेर आज "कात टाकतेय."
          </p>

        </div>

        {/* 🔥 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {facilities.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-lg shadow-sm p-8 text-center overflow-hidden group transition hover:shadow-md hover:scale-105"
              >
                {/* ✨ Dotted Hover Background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none
                  bg-[radial-gradient(#00000022_3px,transparent_3px)] 
                  bg-[size:30px_30px]"
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <Icon className="w-14 h-14 text-yellow-700" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                </div>
              </div>
            );
          })}

        </div>

      </div>
    </div>  
    </>
  );
}
          
