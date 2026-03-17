export default function Review() {
    return (
        <section className="w-full bg-gray-100 py-16 px-6 md:px-16">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800">
          आपली मते व अभिप्राय
        </h2>

        <div className="flex items-center justify-center gap-4 my-4">
          <div className="w-16 h-[2px] bg-yellow-700"></div>
          <div className="w-4 h-4 bg-yellow-700 rotate-45"></div>
          <div className="w-16 h-[2px] bg-yellow-700"></div>
        </div>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          आपले विचार आम्हाला सांगा – कारण तुमचा अनुभव आमच्या प्रगतीचा मार्गदर्शक आहे.
        </p>
      </div>


      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-center">

        {/* Left Illustration */}
        <div className="flex justify-center">
          <img
            src="/src/assets/image.png"
            alt="mail illustration"
            className="max-w-md w-full"
          />
        </div>


        {/* Form */}
        <form className="space-y-6">

          {/* Name Row */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="font-semibold">
                पहिले नाव <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="पहिले नाव"
                className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            <div>
              <label className="font-semibold">
                आडनाव <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="आडनाव"
                className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>
          </div>


          {/* Email */}
          <div>
            <label className="font-semibold">
              ईमेल <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              placeholder="ईमेल"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>


          {/* Subject */}
          <div>
            <label className="font-semibold">
              विषय <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="विषय"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>


          {/* Message */}
          <div>
            <label className="font-semibold">
              विषयाचे वर्गीकरण <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="विषयाचे वर्गीकरण"
              className="w-full mt-2 border rounded-lg px-4 py-3 focus:ring-2 focus:ring-green-500 outline-none"
            ></textarea>
          </div>


          {/* Submit Button */}
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition"
          >
            Submit Form
          </button>

        </form>
      </div>
    </section>
    )
}