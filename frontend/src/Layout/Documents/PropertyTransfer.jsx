import { useState } from "react";
import axios from "axios";

export default function PropertyTransfer() {
  const [formData, setFormData] = useState({
    sellerName: "",
    sellerAddress: "",
    buyerName: "",
    buyerAddress: "",
    propertyNo: "",
    area: "",
    mobile: "",
    email: "",
    propertyType: "",
  });

  const [files, setFiles] = useState({
    taxReceipt: null,
    utara: null,
    consent: null,
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
      if (files[key]) data.append(key, files[key]);
    });

    try {
      await axios.post("http://localhost:5000/api/property-transfer", data);
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
          मालमत्ता हस्तांतरण अर्ज
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

        {/* PROPERTY TYPE */}
        <div>
          <label className="font-semibold block mb-2">वर्णन</label>

          <div className="space-y-2">
            {["बखळ  जागा", "कच्चे घर", "अर्धे पक्के घर", "आर सी सी पक्के घर"].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="propertyType"
                  value={type}
                  onChange={handleChange}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* AREA */}
        <input
          type="text"
          name="area"
          placeholder="क्षेत्रफळ (लांबी x रुंदी) एकूण चौ. फुट "
          className="input"
          onChange={handleChange}
          required
        />

        {/* FILES */}
        <div className="space-y-6">

          {/* TAX RECEIPT */}
          <div>
            <label className="font-semibold">
              वारस दाखला / कर पावती (Max 10MB)
            </label>
            <input
              type="file"
              name="taxReceipt"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>

          {/* UTARA */}
          <div>
            <label className="font-semibold">
              जागेचा उतारा (नमुना ०८)
            </label>
            <input
              type="file"
              name="utara"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>

          {/* CONSENT */}
          <div>
            <label className="font-semibold">
              संमतीपत्र / सूची क्रमांक
            </label>
            <input
              type="file"
              name="consent"
              onChange={handleFileChange}
              className="block mt-2"
            />
          </div>
          {/* DEATH CERTIFICATE */}
<div>
  <label className="font-semibold">
    मालमता धारक मयत असल्यास मृत दाखला 
    <span className="text-sm text-gray-500 block">
      (आपण जास्तीत जास्त 1 फाईल अपलोड करू शकता. एकूण अपलोड लिमिट 10MB आहे)
    </span>
  </label>

  <input
    type="file"
    name="deathCertificate"
    onChange={handleFileChange}
    className="block mt-2"
  />

  <p className="text-sm text-gray-500 mt-1">
    Maximum file size: 10 MB
  </p>
</div>

        </div>

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

        {/* SELLER */}
        <input
          type="text"
          name="sellerName"
          placeholder="लिहून देणाऱ्याचे नाव"
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="sellerAddress"
          placeholder="पत्ता"
          className="input"
          onChange={handleChange}
          required
        />

        {/* BUYER */}
        <input
          type="text"
          name="buyerName"
          placeholder="लिहून घेणाऱ्याचे नाव"
          className="input"
          onChange={handleChange}
          required
        />

        <textarea
          name="buyerAddress"
          placeholder="पत्ता"
          className="input"
          onChange={handleChange}
          required
        />

        {/* PROPERTY NO */}
        <input
          type="text"
          name="propertyNo"
          placeholder="मिळकत क्रमांक"
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