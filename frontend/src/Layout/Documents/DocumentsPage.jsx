import {
  FileText,
  FileCheck,
  Home,
  Landmark,
  UserCheck,
  Building,
  Briefcase,
  BadgeCheck,
  Hammer,
  Baby,
  HeartPulse,
  Users,
  ArrowRight,

} from "lucide-react";

import { Link } from "react-router-dom";



export default function DocumentsSection() {
    const documents = [
  { title: "जन्म प्रमाणपत्र", desc: "जन्म प्रमाणपत्र ऑनलाइन मिळवा", icon: Baby, link: "/birth" },
  { title: "मृत्यू प्रमाणपत्र", desc: "मृत्यू प्रमाणपत्र ऑनलाइन मिळवा", icon: HeartPulse, link: "/death" },
  { title: "विवाह प्रमाणपत्र", desc: "विवाह प्रमाणपत्र ऑनलाइन मिळवा", icon: Users, link: "/marriage" },
  { title: "रहिवासी प्रमाणपत्र", desc: "रहिवासी प्रमाणपत्र ऑनलाइन मिळवा", icon: FileText, link: "/residence" },
  { title: "व्यवसाय परवाना प्रमाणपत्र", desc: "व्यवसाय प्रमाणपत्र ऑनलाइन मिळवा", icon: Briefcase, link: "/business" },
  { title: "मालमत्ता प्रमाणपत्र", desc: "मालमत्ता प्रमाणपत्र ऑनलाइन मिळवा", icon: Building, link: "/property" },
  { title: "बांधकाम परवानगी", desc: "बांधकाम परवानगी प्रमाणपत्र ऑनलाइन मिळवा", icon: Hammer, link: "/construction" },
  { title: "थकबाकी नसल्याचे प्रमाणपत्र", desc: "थकबाकी नसल्याचे प्रमाणपत्र ऑनलाइन मिळवा", icon: BadgeCheck, link: "/no-dues" },
  { title: "वयाचा दाखला", desc: "वयाचा दाखला ऑनलाइन मिळवा", icon: UserCheck, link: "/age-proof" },
  { title: "जमिनीचा उतारा", desc: "जमिनीचा उतारा ऑनलाइन मिळवा", icon: Landmark, link: "/land-record" },
  { title: "डिजिटल स्वाक्षरीत ७/१२", desc: "७/१२ उतारा ऑनलाइन मिळवा", icon: FileCheck, link: "/712" },
  { title: "प्रॉपर्टी कार्ड", desc: "प्रॉपर्टी कार्ड ऑनलाइन मिळवा", icon: FileText, link: "/property-card" },
  { title: "मालमत्ता हस्तांतरण", desc: "मालमत्ता हस्तांतरण प्रमाणपत्र ऑनलाइन मिळवा", icon: Home, link: "/transfer" },
];
  return (
    <div className="py-10 sm:py-12 px-4 sm:px-6 md:px-10 bg-gray-50">

      {/* HEADING */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-green-700">
        दस्तऐवज
      </h2>

      {/* GRID */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        gap-6 sm:gap-8
      ">

        {documents.map((doc, index) => {
          const Icon = doc.icon;

          return (
            <Link
              to={doc.link}
              key={index}
              className="group"
            >
              <div className="
                h-full
                bg-white 
                p-6 sm:p-8 
                rounded-xl 
                border 
                shadow-sm
                hover:shadow-xl 
                transition-all duration-300 
                text-center
                flex flex-col justify-between
              ">

                {/* ICON */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-green-600 group-hover:scale-110 transition" />
                </div>

                {/* TITLE */}
                <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-2 leading-snug">
                  {doc.title}
                </h3>

                {/* DESC */}
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  {doc.desc}
                </p>

                {/* BUTTON */}
                <div className="flex justify-center">
                  <span className="
                    inline-flex items-center gap-2 
                    px-4 sm:px-5 py-2 
                    text-sm sm:text-base
                    bg-gray-100 
                    group-hover:bg-green-600 
                    group-hover:text-white 
                    rounded-lg 
                    transition
                  ">
                    अर्ज करा
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </Link>
          );
        })}

      </div>
    </div>
  );
}