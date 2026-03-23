export default function AadhaarSection() {
  const forms = [
    {
      name: "आधार नोंदणी आणि अपडेट - फॉर्म 1",
      file: "/Pdfs/Enrollment-Form-Form_1_Eng.pdf",
    },
    {
      name: "आधार नोंदणी आणि अपडेट - फॉर्म 3",
      file: "/Pdfs/Form_3_Eng.pdf",
    },
    {
      name: "आधार नोंदणी आणि अपडेट - फॉर्म 5",
      file: "/Pdfs/Form_5_Eng.pdf",
    },
  ];

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file;
    link.click();
  };

  return (
    <div className="w-full">

            {/* 🔰 HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

          {/* Left Content */}
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              आधार दुरुस्ती
            </h1>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0 flex justify-center md:justify-end w-full">
            <img
              src="/assets/Aadhaar.png"
              alt="aadhaar"
              className="w-80 sm:w-96 md:w-[500px] lg:w-[600px] xl:w-[700px] max-w-full"
            />
          </div>
        </div>
      </div>
      {/* 📄 PDF SECTION */}
      <div className="bg-gray-100 py-12 px-6 md:px-16">

        <h2 className="text-2xl md:text-3xl font-semibold text-green-700 mb-6">
          आधार मधील माहिती दुरुस्ती साठी आपण खालील फॉर्म वापरू शकता.
        </h2>

        <div className="space-y-4">
          {forms.map((form, index) => (
            <div
              key={index}
              onClick={() => handleDownload(form.file)}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-200 p-3 rounded transition"
            >
              {/* PDF Icon */}
              <span className="text-green-600 text-xl">📄</span>

              {/* Text */}
              <p className="text-lg md:text-xl font-medium text-yellow-800">
                {form.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}