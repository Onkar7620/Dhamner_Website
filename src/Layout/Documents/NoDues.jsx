import { useState } from "react";
import axios from "axios";

export default function NoDues() {
  const [formData, setFormData] = useState({
    propertyNo: "",
    wardNo: "",
    address: "",
    fullNameEng: "",
    fullNameMar: "",
    mobile: "",
    email: "",
    year: "",
    ownerName: "",
    aadhar: "",
    village: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/no-dues", formData);
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
          थकबाकी नसल्याचे प्रमाणपत्र
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

        {/* PROPERTY DETAILS */}
        <input
          type="text"
          name="propertyNo"
          placeholder="मालमत्ता क्रमांक"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="wardNo"
          placeholder="वॉर्ड क्र."
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          placeholder="रस्त्याचे नाव / गल्लीचा क्रमांक"
          className="input"
          onChange={handleChange}
          required
        />

        {/* NAME */}
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
          placeholder="अर्जदाराचे पूर्ण नाव (देवनागरी)"
          className="input"
          onChange={handleChange}
          required
        />

        {/* CONTACT */}
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

        {/* EXTRA DETAILS */}
        <input
          type="text"
          name="year"
          placeholder="आर्थिक वर्ष"
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="ownerName"
          placeholder="मालमत्ता धारकाचे नाव"
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

        <input
          type="text"
          name="village"
          placeholder="गावाचे नाव"
          className="input"
          onChange={handleChange}
          required
        />

        {/* SUBMIT */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
          अर्ज पाठवा
        </button>
      </form>

      {/* STYLE */}
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