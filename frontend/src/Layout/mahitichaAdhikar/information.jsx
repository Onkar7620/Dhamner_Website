import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";
import { useLang } from "../../context/LanguageContext";
import { FileText } from "lucide-react";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const content = {
  mr: {
    heroTitle: "माहितीचा अधिकार (RTI) आणि जमा-खर्च",
    heroDesc:
      "ग्रामपंचायतीचे अधिकार क्षेत्र, पारदर्शकता आणि वार्षिक वित्तीय अहवाल (RTI कलम ४(१)(b) नुसार)",
    titles: [
      "RTI4(1) ख 1 ते 17 मुद्दे माहिती",
      "माहिती अधिकार सुधारित अधिसूचना २०२६",
    ],
    financeTitle: "१५ वित्त आयोग जमा खर्च",
    page: "पृष्ठ",
    of: "पैकी",
  },

  en: {
    heroTitle: "Right to Information (RTI) & Finance",
    heroDesc:
      "Gram Panchayat authority, transparency, and annual financial statements (as per RTI Section 4(1)(b))",
    titles: [
      "RTI Act 4(1)(b) Points 1 to 17 Information",
      "RTI Revised Notification - 12 June 2026",
    ],
    financeTitle: "15th Finance Commission Income & Expenditure",
    page: "Page",
    of: "of",
  },
};

const pdfs = [
  "/Pdfs/Pg माहितीचा अधिकार1 ते 17.pdf",
  "/Pdfs/माहिती_अधिकार_सुधारीत_अधिसूचना_12_06_2026.pdf", // Add your new PDF here
];

function PdfViewer({ file, title, pageLabel, ofLabel }) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const pdfWidth =
    typeof window !== "undefined"
      ? window.innerWidth < 640
        ? window.innerWidth - 40
        : window.innerWidth < 1024
        ? 500
        : 700
      : 600;

  return (
    <>
      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-6 text-green-700 text-center mt-10">
        {title}
      </h1>

      <div className="w-full flex flex-col items-center">
        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4">
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          >
            <Page pageNumber={pageNumber} width={pdfWidth} />
          </Document>
        </div>

        <div className="flex items-center justify-center gap-6 mt-4">
          <button
            onClick={() =>
              setPageNumber((prev) => Math.max(prev - 1, 1))
            }
            disabled={pageNumber <= 1}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            ⬅ Prev
          </button>

          <div className="px-4 py-2 bg-white rounded-lg shadow font-semibold text-sm">
            {pageLabel} {pageNumber} {ofLabel} {numPages || "--"}
          </div>

          <button
            onClick={() =>
              setPageNumber((prev) => Math.min(prev + 1, numPages))
            }
            disabled={pageNumber >= numPages}
            className="px-4 py-2 bg-gray-700 text-white rounded-lg disabled:opacity-40"
          >
            Next ➡
          </button>
        </div>
      </div>
    </>
  );
}

const Information = () => {
  const { lang } = useLang();
  const c = content[lang];

  const [imgScale, setImgScale] = useState(1);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <div className="bg-white bg-opacity-20 p-4 rounded-full">
            <FileText size={48} />
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold mb-3">
          {c.heroTitle}
        </h1>

        <p className="text-green-100 max-w-2xl mx-auto text-sm md:text-base">
          {c.heroDesc}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center w-full">
        {pdfs.map((file, index) => (
          <PdfViewer
            key={index}
            file={file}
            title={c.titles[index]}
            pageLabel={c.page}
            ofLabel={c.of}
          />
        ))}

        {/* Finance Image Section */}
        <h2 className="text-lg sm:text-2xl font-bold mt-10 mb-4 text-green-700 text-center">
          {c.financeTitle}
        </h2>

        <div className="bg-white rounded-xl shadow-2xl p-2 sm:p-4 flex justify-center overflow-hidden">
          <img
            src="/Pdfs/१५ वा वित्त आयोग जमा खर्च.jpg.jpeg"
            alt="Finance"
            style={{ transform: `scale(${imgScale})` }}
            className="transition-transform duration-300 w-full max-w-[280px] sm:max-w-[450px] md:max-w-[650px]"
          />
        </div>

        <div className="flex items-center gap-4 mt-4 mb-10">
          <button
            onClick={() =>
              setImgScale((prev) => Math.max(prev - 0.2, 0.6))
            }
            className="px-3 py-1 bg-gray-600 text-white rounded"
          >
            -
          </button>

          <button
            onClick={() =>
              setImgScale((prev) => Math.min(prev + 0.2, 2))
            }
            className="px-3 py-1 bg-gray-600 text-white rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;