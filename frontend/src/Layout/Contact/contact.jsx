import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
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
      await axios.post("http://localhost:5000/api/contact", formData);
      alert("संपर्क संदेश पाठवला गेला ✅");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const errorMsg =
        error.response?.data?.message || error.message || "अज्ञात त्रुटी";
      alert(errorMsg);
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* HEADING */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-10 md:py-14 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight">
            संपर्क साधा
          </h1>

          <img
            src="/assets/telephone.png"
            alt="telephone"
            className="w-20 sm:w-28 md:w-36 lg:w-40 object-contain"
          />
        </div>
      </section>

      {/* FORM + MAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 p-5 sm:p-6 md:p-8 rounded-xl shadow"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="पहिले नाव"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="आडनाव"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="p-3 border rounded-md w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="ईमेल"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-3 border rounded-md w-full mt-4"
          />

          <input
            type="text"
            name="subject"
            placeholder="विषय"
            value={formData.subject}
            onChange={handleChange}
            required
            className="p-3 border rounded-md w-full mt-4"
          />

          <textarea
            name="message"
            placeholder="विषयाचे वर्णन"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="p-3 border rounded-md w-full mt-4"
          />

          <button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 transition text-white px-6 py-3 mt-4 rounded-md">
            Submit Form
          </button>
        </form>

        {/* MAP */}
        <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow">
           <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30421.85630339417!2d74.1427960025288!3d17.615454881886926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2325cc0cd2dfd%3A0x5c723787f0971317!2sDhamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1773921087159!5m2!1sen!2sin"
            className="w-full h-full rounded-xl"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* INFO CARDS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 mb-20">
        
        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            ग्रामपंचायत कार्यालय
          </h3>
          <p className="text-green-600 font-medium">धामणेर</p>
          <p>तालुका - कोरेगाव , जिल्हा - सातारा</p>
        </div>

        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">ईमेल</h3>
          <p className="break-words">dhamner189585@gmail.com</p>
        </div>

        <div className="bg-gray-100 p-6 md:p-8 text-center rounded-xl shadow">
          <h3 className="text-lg md:text-xl font-semibold mb-2">दूरध्वनी</h3>
          <p>9975240321</p>
          <p className="text-green-600 mt-2 text-sm">
            (सोम–शुक्र सकाळी ९.१५ ते सायं. ६.१५)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;


