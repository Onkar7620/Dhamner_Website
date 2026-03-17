export default function Footer() {
  return (
    <footer className="relative bg-green-600 text-white pt-16 pb-10 overflow-hidden">

      {/* Background Chakra Image */}
      <img
        src="/chakra.png"
        className="absolute left-20 bottom-10 opacity-20 w-[350px]"
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 relative z-10">

        {/* Important Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">महत्वाच्या लिंक</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li>आमच्याबद्दल</li>
            <li>अधिकारी/पदाधिकारी</li>
            <li>कार्यकारी मंडळ व समित्या</li>
            <li>फोटो गॅलरी</li>
          </ul>
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-xl font-semibold mb-4">दाखले</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li>जन्म प्रमाणपत्र</li>
            <li>मृत्यु प्रमाणपत्र</li>
            <li>विवाह प्रमाणपत्र</li>
            <li>व्यवसाय परवाना</li>
            <li>मालमत्ता प्रमाणपत्र</li>
            <li>बांधकाम परवानगी</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">सोई सुविधा</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <ul className="space-y-3">
            <li>कर भरणा</li>
            <li>स्वयंघोषणापत्रे</li>
            <li>जनसुविधा महत्वाच्या लिंक</li>
            <li>तक्रार विभाग</li>
            <li>हेल्पलाईन</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">संपर्क</h3>
          <div className="w-10 h-1 bg-purple-600 mb-6"></div>

          <p className="font-semibold">दूरध्वनी (ग्रामपंचायत)</p>
          <p className="mb-4">+91 9607075206</p>

          <p className="font-semibold">ईमेल</p>
          <p className="mb-4">dhamneri123@gmail.com</p>

          <p className="font-semibold">पत्ता</p>
          <p> धामणेर ता. रहमदपूर , जि. सातारा</p>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-green-400 mt-12 pt-6 text-center text-sm">

        <div className="flex justify-center gap-6 mb-6">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
          <span>Disclaimer</span>
        </div>

        {/* Bottom Logos */}
        <div className="flex justify-center items-center gap-4">
            <img src="/assets/HD-wallpaper-satyamev-jayate-bharat-civil-service-history-ias-india-indian-ips-lion-emblem-motivation-removebg-preview.png" className="h-[100px] w-50"/>
            <img src="/assets/Seal_of_Maharashtra.svg.png" className="h-[60px] ml-[-20px]" />
            <img src="/assets/Gemini_Generated_Image_7qc6v97qc6v97qc6-removebg-preview.png" className="h-[70px] " />

          <div className="text-left">
            <p className="font-bold text-lg">ग्रामपंचायत</p>
            <p className="font-bold text-lg">धामणेर</p>
            <p className="text-xs">ता. रहमदपूर , जि. सातारा</p>
          </div>
        </div>

      </div>

    </footer>
  );
}