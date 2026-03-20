import { useState } from "react";
import axios from "axios";

export default function ResidenceDocument() {
  const [formData, setFormData] = useState({
    malmattaNo: "",
    wardNo: "",
    street: "",
    fullNameEng: "",
    fullNameMar: "",
    aadhar: "",
    mobile: "",
    email: "",
    year: "",
    address: "",
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
      await axios.post("http://localhost:5000/api/residence-form", data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          रहिवासी प्रमाणपत्र
        </h1>
        <img
          src="/assets/Certificate-Logo.png"
          alt="certificate"
          className="w-72 sm:w-96 md:w-[450px] lg:w-[550px]"
        />
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Property Info */}
        <input
          type="text"
          name="malmattaNo"
          placeholder="मालमत्ता क्रमांक"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="wardNo"
          placeholder="वॉर्ड क्र"
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="street"
          placeholder="रस्त्याचे नाव / गल्लीचा क्रमांक"
          className="input"
          onChange={handleChange}
        />

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="mobile"
            placeholder="व्हाट्सअप मोबाईल क्रमांक"
            className="input"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="ई मेल आय डी"
            className="input"
            onChange={handleChange}
          />
        </div>

        {/* Applicant */}
        <input
          type="text"
          name="fullNameEng"
          placeholder="अर्जदाराचे पूर्ण नाव (इंग्रजी)"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="fullNameMar"
          placeholder="अर्जदाराचे पूर्ण नाव (देवनागरी)"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="aadhar"
          placeholder="आधार कार्ड क्रमांक"
          className="input"
          onChange={handleChange}
          required
        />

        {/* Year */}
        <input
          type="text"
          name="year"
          placeholder="आर्थिक वर्ष"
          className="input"
          onChange={handleChange}
        />

        {/* Address */}
        <textarea
          name="address"
          placeholder="पूर्ण पत्ता"
          className="input"
          onChange={handleChange}
          required
        />

        {/* PAYMENT */}
        <div className="text-center space-y-4">
          <img
            src="/assets/GramnidhiQr.jpeg"
            alt="QR"
            className="mx-auto w-64 md:w-80"
          />

          <p className="font-semibold text-gray-700">
            ₹20/- रुपये शुल्क भरल्यानंतर UTR नंबर टाका
          </p>

          <input
            type="text"
            name="utr"
            placeholder="UTR नंबर"
            className="input"
            onChange={handleChange}
            required
          />

          {/* Upload */}
          <div className="space-y-2">
            <label className="block font-semibold text-gray-700">
              आपण केलेल्या पेमेंटचा स्क्रीनशॉट अपलोड करा *
            </label>

            <input
              type="file"
              onChange={handleFileChange}
              className="block mx-auto border p-2 rounded"
              required
            />

            <p className="text-sm text-gray-500">
              Maximum file size: 10 MB
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
          अर्ज पाठवा
        </button>
      </form>

      {/* COMMON STYLE */}
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