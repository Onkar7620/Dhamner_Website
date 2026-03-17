export default function Hero() {
    return (
        // <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center">
        //     <h1 className="text-4xl font-bold">Welcome to Our Village</h1>
        // </div>
        <>

    <section className="relative w-full min-h-[90vh] flex items-center">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/village.jpg')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white text-center lg:text-left">

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            ग्रामपंचायत आडाचीवाडी
          </h1>

          <h2 className="text-green-500 text-xl sm:text-2xl md:text-3xl mt-3 font-semibold">
            ध्यास विकासाचा, वेग प्रगतीचा
          </h2>

          <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            आडाचीवाडी हे पुणे जिल्ह्यातील पुरंदर तालुक्यात नऊ डोंगरांच्या
            कुशीत वसलेले एक छोटे पण महत्वाकांक्षी गाव आहे. ज्याची
            लोकसंख्या सुमारे १५७४ आहे. गावकऱ्यांनी राजकारण बाजूला ठेवून
            लोकसहभागातून सामाजिक एकोपा, स्वच्छता आणि जलसंधारणाचे
            उत्तम उदाहरण महाराष्ट्रासमोर ठेवले आहे.
          </p>

        </div>

        {/* Right Logo */}
        <div className="flex justify-center lg:justify-end">

          <img
            src="/src/assets/GP-Adachiwadi-Logo-Transperent-2.webp"
            alt="Gram Panchayat Logo"
            className="w-48 sm:w-64 md:w-72 lg:w-96"
          />
        </div>

      </div>
    </section>

        </>

    )
}