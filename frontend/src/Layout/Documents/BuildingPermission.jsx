import { useState } from "react";
import axios from "axios";

export default function BuildingPermission() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    mobile: "",
    email: "",
    business: "",
    propertyNo: "",
    plotAreaSqFt: "",
    plotAreaSqM: "",
    constructionAreaSqFt: "",
    constructionAreaSqM: "",
    floors: "",
  });

  const [files, setFiles] = useState({
    ownershipDocs: null,
    layoutPlan: null,
    buildingPlan: null,
    taxReceipt: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles({ ...files, [e.target.name]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    Object.keys(files).forEach((key) => {
      if (files[key]) {
        data.append(key, files[key]);
      }
    });

    try {
      await axios.post("http://localhost:5000/api/building-permission", data);
      alert("Form submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white flex flex-col md:flex-row items-center justify-between p-8 md:p-16 gap-8">
        <h1 className="text-3xl md:text-5xl font-bold">
          बांधकाम परवाना अर्ज
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

        {/* PERSONAL INFO */}
        <input
          type="text"
          name="fullName"
          placeholder="संपूर्ण नाव (नाव | वडिलांचे/पतीचे नाव | आडनाव)"
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="संपूर्ण पत्ता"
          className="input"
          onChange={handleChange}
          required
        />

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

        <input
          type="text"
          name="business"
          placeholder="व्यवसाय"
          className="input"
          onChange={handleChange}
        />

        <input
          type="text"
          name="propertyNo"
          placeholder="मिळकत क्रमांक"
          className="input"
          onChange={handleChange}
          required
        />

        {/* AREA DETAILS */}
        <input
          type="text"
          name="plotAreaSqFt"
          placeholder="मिळकतीचा आकार स्के. फूट"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="plotAreaSqM"
          placeholder="मिळकतीचा आकार स्के. मीटर"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="constructionAreaSqFt"
          placeholder="बांधकाम तपशील स्के. फूट"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="constructionAreaSqM"
          placeholder="बांधकाम तपशील स्के. मीटर"
          className="input"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="floors"
          placeholder="मजले (उदा: एक मजला)"
          className="input"
          onChange={handleChange}
          required
        />

        {/* FILE UPLOADS */}
        <div className="space-y-6">

          {/* Ownership */}
          <div>
            <label className="font-semibold block mb-2">
              जागेच्या मालकीचे कागदपत्रे *
            </label>
            <input
              type="file"
              name="ownershipDocs"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">Maximum file size: 10 MB</p>
          </div>

          {/* Layout */}
          <div>
            <label className="font-semibold block mb-2">
              मंजूर लेआउट (Plan layout) *
            </label>
            <input
              type="file"
              name="layoutPlan"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">Maximum file size: 10 MB</p>
          </div>

          {/* Building Plan */}
          <div>
            <label className="font-semibold block mb-2">
              बिल्डिंग प्लान (p-line सहित) *
            </label>
            <input
              type="file"
              name="buildingPlan"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">Maximum file size: 10 MB</p>
          </div>

          {/* Tax */}
          <div>
            <label className="font-semibold block mb-2">
              विकास शुल्क व कामगार उपकर संबंधीत प्राधिकरणाकडे भरल्याची पोच पावती *
            </label>
            <input
              type="file"
              name="taxReceipt"
              onChange={handleFileChange}
              className="file"
              required
            />
            <p className="text-sm text-gray-500">Maximum file size: 10 MB</p>
          </div>

        </div>

        {/* SUBMIT */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded w-full">
          अर्ज पाठवा
        </button>
      </form>

      {/* STYLES */}
      <style>
        {`
          .input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }

          .file {
            display: block;
            width: 100%;
            padding: 8px;
            border: 1px solid #ccc;
            border-radius: 6px;
          }
        `}
      </style>
    </div>
  );
}