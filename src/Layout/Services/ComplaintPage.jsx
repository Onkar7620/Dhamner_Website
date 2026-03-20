import { useState } from "react";
import axios from "axios";

export default function ComplaintPage() {
  const [formData, setFormData] = useState({
    propertyId: "",
    department: "",
    complaint: "",
    name: "",
    address: "",
    mobile: "",
    aadhaar: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/complaints", formData);
      alert("तक्रार यशस्वीरित्या पाठवली ✅");
    } catch (error) {
      alert("काहीतरी चूक झाली ❌");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100">

      {/* 🔰 HERO SECTION */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Text */}
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">तक्रार</h1>
          <p className="text-lg text-gray-200">
            ऑनलाईन सेवा / तक्रार विभाग  
          </p>
          <p className="text-gray-200">
            आपणास झालेल्या गैर सोयीबद्दल आम्ही क्षमस्व आहोत. आपली तक्रार तत्काळ आणि सोप्या पद्धतीने नोंदवावी.
          </p>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/assets/Complaint.png"
            alt="complaint"
            className="w-64 md:w-80"
          />
        </div>
      </div>

      {/* 📝 FORM SECTION */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10 mt-10">

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Property ID */}
          <div>
            <label className="font-semibold">मालमत्ता क्रमांक *</label>
            <input
              type="text"
              name="propertyId"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder="मालमत्ता क्रमांक"
              required
            />
          </div>

          {/* Department */}
          <div>
            <label className="font-semibold">ग्रामपंचायत विभाग निवडा *</label>
            <select
              name="department"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              required
            >
              <option value="">- निवडा -</option>
              <option value="water">पाणी विभाग</option>
              <option value="electricity">वीज विभाग</option>
              <option value="road">रस्ता विभाग</option>
            </select>
          </div>

          {/* Complaint */}
          <div>
            <label className="font-semibold">तक्रारीचे वर्णन *</label>
            <textarea
              name="complaint"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              rows="4"
              placeholder="तुमची तक्रार वर्णन करा"
              required
            ></textarea>
          </div>

          {/* Name */}
          <div>
            <label className="font-semibold">अर्जदाराचे नाव *</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder="नाव"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="font-semibold">पत्ता *</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder="पत्ता"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="font-semibold">मोबाईल क्रमांक *</label>
            <input
              type="tel"
              name="mobile"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder="मोबाईल क्रमांक"
              required
            />
          </div>

          {/* Aadhaar */}
          <div>
            <label className="font-semibold">आधारकार्ड क्रमांक *</label>
            <input
              type="text"
              name="aadhaar"
              onChange={handleChange}
              className="w-full border p-3 rounded mt-1"
              placeholder="आधारकार्ड क्रमांक"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full md:w-auto"
          >
            अर्ज पाठवा
          </button>

        </form>
      </div>
    </div>
  );
}