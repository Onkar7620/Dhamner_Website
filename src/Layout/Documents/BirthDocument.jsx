import { useState } from "react";
import axios from "axios";

export default function BirthDocument() {
  const [formData, setFormData] = useState({
    aaiName: "",
    fullNameEng: "",
    fullNameMar: "",
    mobile: "",
    email: "",
    address: "",
    year: "",
    childName: "",
    dob: "",
    time: "",
    fatherName: "",
    utr: "",
  });

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    data.append("screenshot", file);

    try {
      await axios.post("http://localhost:5000/api/form", data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16">
        <h1 className="text-3xl md:text-5xl font-bold mb-6 md:mb-0">
          जन्म प्रमाणपत्र
        </h1>
        <img
          src="/assets/Baby-Logo.png"
          alt="baby"
           className="w-72 sm:w-96 md:w-[450px] lg:w-[550px] xl:w-[650px]"
        />
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Basic Info */}
        <input
          type="text"
          name="aaiName"
          placeholder="आईचे नाव"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullNameEng"
          placeholder="अर्जदाराचे पूर्ण नाव (English)"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullNameMar"
          placeholder="अर्जदाराचे पूर्ण नाव (Marathi)"
          className="input"
          onChange={handleChange}
          required
        />

        {/* Mobile + Email */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="mobile"
            placeholder="व्हाट्सअप मोबाईल क्रमांक "
            className="input"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="ईमेल"
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <textarea
          name="address"
          placeholder="पत्ता"
          className="input"
          onChange={handleChange}
          required
        />

        {/* Other fields */}
        <input
          type="text"
          name="year"
          placeholder="आर्थिक वर्ष"
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="childName"
          placeholder="बालकाचे नाव"
          className="input"
          onChange={handleChange}
        />

        <label htmlFor="dob" className="block font-semibold text-gray-700">
          जन्मतारीख * :
        
        <input
          type="date"
          name="dob"
          className="input"
          onChange={handleChange}
          required
        />
        </label>
        <label htmlFor="time" className="block font-semibold text-gray-700">
          जन्मवेळ * :
        
        <input
          type="time"
          name="time"
          className="input"
          onChange={handleChange}
        />
        </label>

        <input
          type="text"
          name="fatherName"
          placeholder="वडिलांचे नाव"
          className="input"
          onChange={handleChange}
        />

        {/* PAYMENT SECTION */}
        <div className="text-center space-y-4">
          <img
            src="/assets/GramnidhiQr.jpeg"
            alt="QR"
            className="mx-auto w-64 md:w-80"
          />

          <p className="font-semibold text-gray-700">
            ₹20 शुल्क भरून UTR नंबर टाका
          </p>

          <input
            type="text"
            name="utr"
            placeholder="UTR नंबर"
            className="input"
            onChange={handleChange}
            required
          />
        
            <label className="block font-semibold text-gray-700">
    आपण केलेल्या पेमेंटचा स्क्रीनशॉट अपलोड करा *
  </label>

  <input
    type="file"
    onChange={handleFileChange}
    className="block mx-auto border p-2 rounded"
    required
  />

        </div>

        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
          अर्ज पाठवा
        </button>
      </form>

      {/* Tailwind reusable class */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
}