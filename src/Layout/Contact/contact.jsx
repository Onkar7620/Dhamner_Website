const Contact = () => {
  return (
    <div>
      {/* HEADING */}
      <section className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-10 md:py-14 mb-10">
        <div className="max-w-6xl mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight">
            संपर्क साधा
          </h1>

          <img
            src="/assets/telephone.png"
            alt="telephone"
            className="w-24 sm:w-32 md:w-36 lg:w-40 max-h-[160px] object-contain"
          />
        </div>
      </section>

      {/* FORM + MAP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-start p-4 md:p-10">
        {/* LEFT - FORM */}
        <div className="bg-gray-100 p-8 md:p-8 rounded-xl shadow">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="पहिले नाव"
              className="p-3 border rounded-md w-full"
            />
            <input
              type="text"
              placeholder="आडनाव"
              className="p-3 border rounded-md w-full"
            />
          </div>

          <input
            type="email"
            placeholder="ईमेल"
            className="p-3 border rounded-md w-full mt-4"
          />

          <input
            type="text"
            placeholder="विषय"
            className="p-3 border rounded-md w-full mt-4"
          />

          <textarea
            placeholder="विषयाचे वर्णन"
            rows="4"
            className="p-3 border rounded-md w-full mt-4"
          ></textarea>

          <button className="bg-green-600 text-white px-6 py-3 mt-4 rounded-md">
            Submit Form
          </button>
        </div>

        {/* RIGHT - MAP */}
        <div className="w-[700px] h-[350px] md:h-[500px] rounded-xl overflow-hidden shadow">
          {/* 🔴 JUST CHANGE LOCATION HERE */}
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
      <div className="grid md:grid-cols-3 gap-8 mt-16 mb-20">
        {/* ADDRESS */}
        <div className="bg-gray-100 p-8 text-center rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">ग्रामपंचायत कार्यालय</h3>
          <p className="text-green-600 font-medium">धामणेर </p>
          <p>तालुका - कोरेगाव , जिल्हा - सातारा </p>
        </div>

        {/* EMAIL */}
        <div className="bg-gray-100 p-8 text-center rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">ईमेल</h3>
          <p>dhamner189585@gmail.com</p>
        </div>

        {/* PHONE */}
        <div className="bg-gray-100 p-8 text-center rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">दूरध्वनी</h3>
          <p>9975240321</p>
          <p className="text-green-600 mt-2">(सोम–शुक्र सकाळी ९.१५  ते सायं. ६.१५ )</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
