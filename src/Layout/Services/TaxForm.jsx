import { useState } from "react";
import axios from "axios";

export default function TaxPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    receiptNo: "",
    gharpattiAmount: "",
    panipattiAmount: "",
    gharpattiUpi: "",
    panipattiUpi: "",
  });

  const [files, setFiles] = useState({
    gharpattiScreenshot: null,
    panipattiScreenshot: null,
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle file upload
  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  // submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      data.append(key, files[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/tax", data);
      alert("Form submitted successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Error submitting form ❌");
    }
  };

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-green-700 to-green-500 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            कर भरणा
          </h1>
          <p className="text-lg opacity-90">
            आपल्या गावातील कर ऑनलाइन भरण्यासाठी खालील माहिती भरा व QR कोड स्कॅन करून पेमेंट करा.
          </p>
        </div>

        <img
          src="/assets/Tax-logo.jpg"
          alt="tax"
          className="w-64 md:w-96 mt-10 md:mt-0"
        />
      </div>
            {/* ================= INSTRUCTIONS ================= */}
      <div className="bg-gray-100 py-12 px-6 md:px-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          सूचना
        </h2>

        <p className="mb-6 text-gray-600 font-bold">
          खाली दिलेल्या स्कॅनरवर ऑनलाइन भरणा करू शकता.
        </p>

        <div className="max-w-3xl mx-auto text-center font-bold space-y-4 text-gray-700">
          <p>
            1. घरपट्टी, सॅनिटरी, दिवाबत्ती ही{" "}
            <span className="text-green-600 font-semibold">
              ग्रामनिधी स्कॅनर
            </span>{" "}
            वर स्कॅन करून भरावी.
          </p>

          <p>
            2. पाणीपट्टी भरणा हा केवळ{" "}
            <span className="text-green-600 font-semibold">
              पाणीपट्टी स्कॅनर
            </span>{" "}
            वर स्कॅन करून भरावा.
          </p>

          <p>
            भरणा केल्याचा स्क्रीनशॉट काढावा व ऑनलाइन फॉर्म मध्ये अपलोड करावा.
          </p>
        </div>
      </div>

      {/* ================= QR SECTION ================= */}
      <div className="bg-white py-12 px-4 md:px-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          QR कोड स्कॅन करा
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          <div className="text-center">
            <img
              src="/assets/Screenshot 2026-03-18 184220.png"
              alt="gram nidhi"
              className="mx-auto w-64 md:w-72 rounded-lg shadow hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-green-600 mt-4">
              ग्रामनिधी
            </h3>
          </div>

          <div className="text-center">
            <img
              src="/assets/Screenshot 2026-03-18 184220.png"
              alt="pani patti"
              className="mx-auto w-64 md:w-72 rounded-lg shadow hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold text-green-600 mt-4">
              पाणीपट्टी
            </h3>
          </div>

        </div>
      </div>



      {/* ================= FORM ================= */}
      <div className="w-full bg-gray-100 py-10 px-4 md:px-10">
        <form
          onSubmit={handleSubmit}
          className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            माहिती भरा
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <input name="name" placeholder="खातेदाराचे नाव *" onChange={handleChange} className="border p-3 rounded" required />
            <input name="whatsapp" placeholder="व्हॉट्सअप नंबर *" onChange={handleChange} className="border p-3 rounded" required />
            <input name="email" placeholder="ईमेल" onChange={handleChange} className="border p-3 rounded" />
            <input name="receiptNo" placeholder="मिळकत क्रमांक *" onChange={handleChange} className="border p-3 rounded" required />

            <input name="gharpattiAmount" type="number" placeholder="घरपट्टी रक्कम *" onChange={handleChange} className="border p-3 rounded" required />
            <input name="panipattiAmount" type="number" placeholder="पाणीपट्टी रक्कम *" onChange={handleChange} className="border p-3 rounded" required />

            <input name="gharpattiUpi" placeholder="घरपट्टी UPI ID *" onChange={handleChange} className="border p-3 rounded" required />
            <input name="panipattiUpi" placeholder="पाणीपट्टी UPI ID *" onChange={handleChange} className="border p-3 rounded" required />

            <div>
              <label>घरपट्टी Screenshot *</label>
              <input type="file" name="gharpattiScreenshot" onChange={handleFileChange} required />
            </div>

            <div>
              <label>पाणीपट्टी Screenshot *</label>
              <input type="file" name="panipattiScreenshot" onChange={handleFileChange} required />
            </div>

          </div>

          <button className="mt-8 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 font-bold">
            अर्ज पाठवा
          </button>
        </form>
      </div>
    </div>
  );
}