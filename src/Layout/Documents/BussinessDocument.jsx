import { useState } from "react";
import axios from "axios";

export default function BusinessLicense() {
  const [formData, setFormData] = useState({
    ownerName: "",
    ownerAddress: "",
    mobile: "",
    email: "",
    businessType: "",
    businessCategory: "",
    district: "",
    pincode: "",
    startDate: "",
    businessNature: "",
    male: "",
    female: "",
    other: "",
    total: "",
    businessAddress: "",
    buildingName: "",
    road: "",
    landmark: "",
    village: "",
    taluka: "",
    utr: "",
  });

  const [files, setFiles] = useState({
    aadhar: null,
    photo: null,
    payment: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e, field) => {
    setFiles({ ...files, [field]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    data.append("aadhar", files.aadhar);
    data.append("photo", files.photo);
    data.append("payment", files.payment);

    try {
      await axios.post("http://localhost:5000/api/business-form", data);
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
          व्यवसाय परवाना प्रमाणपत्र
        </h1>
        <img
          src="/assets/Certificate-Logo.png"
          alt="certificate"
          className="w-72 sm:w-96 md:w-[450px] lg:w-[550px]"
        />
      </div>

      {/* INSTRUCTION */}
      <div className="max-w-4xl mx-auto p-4 text-center text-gray-700">
        आपण व्यवसाय परवाना प्रमाणपत्रासाठी खाली दिलेल्या ऑनलाइन फॉर्म मध्ये अर्ज करू शकता.
        कृपया ₹59/- फी भरून UTR नंबर व स्क्रीनशॉट अपलोड करा.
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-4 md:p-8 space-y-6"
      >
        {/* Owner */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="ownerName" placeholder="मालकाचे संपूर्ण नाव" className="input" onChange={handleChange} required />
          <input name="ownerAddress" placeholder="मालकाचा निवास पत्ता" className="input" onChange={handleChange} required />
        </div>

        {/* Contact */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="mobile" placeholder="व्हाट्सअप मोबाईल क्रमांक" className="input" onChange={handleChange} required />
          <input name="email" placeholder="ई मेल आय डी" className="input" onChange={handleChange} />
        </div>

        {/* Business Info */}
        <div className="grid md:grid-cols-2 gap-4">
          <label htmlFor="businessType">आस्थापनेचे वर्गवारी (उदा. दुकाने / आस्थापना / निवासी हॉटेल/ उपाहारगृहे / थिएटर / सार्वजनिक मनोरंजनाच्या किंवा करमणुकीच्या इतर जागा व इतर आस्थापना) *

          <input name="businessType" placeholder="आस्थापनाचे वर्गवारी " className="input" onChange={handleChange} required />
          
          </label>
          <label htmlFor="businessCategory">आस्थापनेचा प्रकार (मालक, भागीदारी, एलएलपी, कंपनी, वि, सहकारी संस्था, मंडळ) *

          <input name="businessCategory" placeholder="आस्थापनाचा प्रकार" className="input" onChange={handleChange} required />
          </label>
        </div>

        {/* Location */}
        <div className="grid md:grid-cols-2 gap-4">
          <input name="district" placeholder="जिल्हा" className="input" onChange={handleChange} required />
          <input name="pincode" placeholder="पिन कोड" className="input" onChange={handleChange} required />
        </div>

        {/* Date */}
        <div className="grid md:grid-cols-2 gap-4">
          <input type="date" name="startDate" className="input" onChange={handleChange} required />
          <input name="businessNature" placeholder="व्यवसायाचे स्वरूप" className="input" onChange={handleChange} required />
        </div>
        <br />
        {/* Workers */}
        <label htmlFor="">मनुष्यबळ / कामगार तपशील -
        <div className="grid md:grid-cols-4 gap-4">
            
          <input name="male" placeholder="पुरुष" className="input" onChange={handleChange} />
          <input name="female" placeholder="महिला" className="input" onChange={handleChange} />
          <input name="other" placeholder="इतर" className="input" onChange={handleChange} />
          <input name="total" placeholder="एकूण" className="input" onChange={handleChange} />
          
        </div>
        </label>

        {/* Address */}
        <textarea name="businessAddress" placeholder="आस्थापनाचा पत्ता" className="input" onChange={handleChange} required />

        <div className="grid md:grid-cols-2 gap-4">
          <input name="buildingName" placeholder="बिल्डिंगचे नाव" className="input" onChange={handleChange} />
          <input name="road" placeholder="रस्ता" className="input" onChange={handleChange} />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input name="landmark" placeholder="ओळखीची खूण" className="input" onChange={handleChange} />
          <input name="village" placeholder="गावाचे नाव" className="input" onChange={handleChange} required />
        </div>

        <input name="taluka" placeholder="तालुका" className="input" onChange={handleChange} required />

        {/* DOCUMENT UPLOAD */}
        <div className="border-t pt-6 space-y-6">
          <h2 className="font-bold text-lg">
            सोबत आवश्यक कागदपत्रे अपलोड करावीत
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Aadhar */}
            <div>
              <p className="font-semibold">आधार कार्ड *</p>
              <input type="file" onChange={(e) => handleFileChange(e, "aadhar")} />
              <p className="text-sm text-gray-500">Max 10MB</p>
            </div>

            {/* Photo */}
            <div>
              <p className="font-semibold">आस्थापनाचा फोटो *</p>
              <input type="file" onChange={(e) => handleFileChange(e, "photo")} />
              <p className="text-sm text-gray-500">Max 10MB</p>
            </div>
          </div>
        </div>

        {/* PAYMENT */}
        <div className="border-t pt-6 space-y-4 text-center">
          <img src="/assets/GramnidhiQr.jpeg" className="mx-auto w-64" />
            <p className="font-semibold text-gray-700">
            ₹59/- रुपये शुल्क भरल्यानंतर UTR नंबर टाका
            </p>
          <input name="utr" placeholder="पेमेंट UTR नंबर" className="input" onChange={handleChange} required />

          <div>
            <label className="font-semibold">पेमेंट स्क्रीनशॉट *</label>
            <input type="file" onChange={(e) => handleFileChange(e, "payment")} />
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