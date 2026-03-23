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
              ग्रामपंचायत धामणेर
            </h1>

            <h2 className="text-green-500 text-xl sm:text-2xl md:text-3xl mt-3 font-semibold">
              ध्यास विकासाचा, वेग प्रगतीचा
            </h2>

            <p className="mt-6 text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              धामणेर सातारा जिल्ह्यातील कोरेगाव तालुक्यातील एक गाव ,
              कृष्णामाईच्या काठावर वसलेलं. निसर्गाचा वरदहस्त लाभलेलं. काळ्याशार
              शेतसरीनं वेढलेलं. त्याचबरोबर एक संपन्न असा आध्यात्मिक वारसा
              असलेलं. कधीकाळी इथं वैदिकांचं पुण्यक्षेत्र होतं, ज्याला धर्मपुरी
              या नवानं ओळ्खलं जात असे. तसेच गावाच्या उत्तरेस जवळच असलेल्या निगडी
              गांवाचे रंगनाथ स्वामी यांनी ज्ञानपीठ चालवलेलं होतं.त्या ठिकाणी
              श्रावणात मोठी यात्रा भरत असे. धामणेरच्या जवळच कृष्णामाईच्या डोहात
              राष्ट्रसंत श्री समर्थ रामदास स्वामींनीं आंग्लाई देवी व प्रभू
              रामचंद्र यांच्या मूर्ती सापडल्या होत्या. याच मूर्तींची
              प्रतिष्ठापना स्वामींनी अनुक्रमे सज्जनगड व चाफळ या क्षेत्री विविधत
              केली , असा इतिहास आहे. म्हणजे साक्षात समर्थांचा पावन पदस्पर्श
              इथल्या मातीत झालेला होता.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex justify-center">
            <img
              src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png"
              alt="Gram Panchayat Logo"
              className="w-48 sm:w-64 md:w-72 lg:w-96"
            />
          </div>
        </div>
      </section>
    </>
  );
}
