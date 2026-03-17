export default function AboutUs() {
  return (
    <>
      <section className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Video Section */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-md aspect-video rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DSRRktI0REo"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <p className="text-green-700 text-base md:text-lg leading-relaxed">
              <span className="bg-blue-600 text-white px-2 py-1 rounded mr-2">
                पुणे
              </span>
              जिल्ह्यातील पुरंदर तालुक्याचे आडाचीवाडी गाव म्हणजे विकासाचे
              मूर्तिमंत उदाहरण! भूमिपुत्राचा पुढाकार, ग्रामस्थांचा एकोप्या आणि
              लोकसहभाग यांच्या त्रिवेणी संगमातून या गावाने आपले चित्र बदलले.
              सर्व पाणंद रस्ते खुले करणारे महाराष्ट्रातील पहिले गाव म्हणून ओळख
              मिळवण्यासोबतच, आडाचीवाडीने जलयुक्त शिवार योजना, उत्कृष्ट स्वच्छता,
              सिमेंटचे रस्ते, ओपन जिम आणि सामाजिक समता यावर भर देत एक आदर्श
              ग्रामसंस्कृती उभी केली आहे.
            </p>

            {/* Button */}
            <button className="bg-amber-700 text-white px-8 py-4 rounded-full text-lg hover:bg-amber-800 transition">
              अधिक जाणून घ्या
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
