import { FileText } from "lucide-react";

export default function SelfDeclarationPage() {
  const pdfs = [
    {
      name: "कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र",
      file: "/public/Pdfs/कोणत्याही-योजनेचा-लाभ-न-घेतल्याचे-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "परितव्या-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/public/Pdfs/परितक्या-असल्याबाबत-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "रहिवाशी-दाखला-स्व-घोषणापत्र",
      file: "/public/Pdfs/रहिवाशी-दाखला-स्व-घोषणापत्र.pdf",
    },
    {
      name: "विधवा-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/public/Pdfs/विधवा-असल्याबाबत-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र",
      file: "/public/Pdfs/विभक्त-कुटुंब-असल्यास-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "वीज-जोडणी-स्वयंघोषणापत्र",
      file: "/public/Pdfs/वीज-जोडणी-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "शौचालय-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/public/Pdfs/शौचालय-असल्याबाबत-स्वयंघोषणापत्र.pdf",
    },
    {
      name: "हयात-असल्याबाबत-स्वयंघोषणापत्र",
      file: "/public/Pdfs/हयात-असल्याबाबत-स्वयंघोषणापत्र.pdf",
    },
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

        {/* LEFT */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
            स्वयंघोषणापत्रे
          </h1>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/public/assets/Documents-Logo.png"
            alt="form"
            className="w-64 md:w-96 lg:w-[420px] object-contain"
          />
        </div>

      </div>

      {/* ================= PDF SECTION ================= */}
      <div className="bg-gray-100 py-10 px-4 md:px-10">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800 text-center md:text-left">
          आवश्यक कागदपत्रे डाउनलोड करा
        </h2>

        <div className="max-w-4xl mx-auto space-y-4">

          {pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.file}
              download
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow hover:shadow-md transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex items-center gap-3">
                <FileText className="text-green-600" />
                <span className="text-sm md:text-lg font-semibold text-yellow-800 hover:underline">
                  {pdf.name}
                </span>
              </div>

              <span className="text-green-600 font-medium text-sm md:text-base">
                Download
              </span>
            </a>
          ))}

        </div>
      </div>

    </div>
  );
}