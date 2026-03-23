import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import worker from "pdfjs-dist/build/pdf.worker?url";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = worker;

const Yashogatha = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center py-6 px-4">

      {/* 🔷 Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
        📘 यशोगाथा (PDF Viewer)
      </h1>

      {/* 🔷 PDF Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-2 sm:p-4 w-full max-w-5xl flex justify-center">

        <Document
          file="/Pdfs/yashogatha.pdf"
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          <Page
            pageNumber={pageNumber}
            width={window.innerWidth < 640 ? 300 : window.innerWidth < 1024 ? 500 : 700}
          />
        </Document>

      </div>

      {/* 🔷 Controls */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-6">

        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          disabled={pageNumber <= 1}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow disabled:bg-gray-400 transition"
        >
          ⬅ Prev
        </button>

        <div className="px-4 py-2 bg-white rounded-lg shadow text-sm font-semibold">
          Page {pageNumber} of {numPages}
        </div>

        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          disabled={pageNumber >= numPages}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow disabled:bg-gray-400 transition"
        >
          Next ➡
        </button>

      </div>

    </div>
  );
};

export default Yashogatha;