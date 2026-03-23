import { Link } from "react-router-dom";

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
               सातारा जिल्ह्यातील कोरेगाव तालुक्यातील धामणेर गाव हे आदर्श गावाचे
              उत्तम उदाहरण आहे. कृष्णा नदीच्या काठावर वसलेले हे गाव नैसर्गिक
              सौंदर्य, समृद्ध शेती आणि सामाजिक एकोप्यामुळे विशेष ओळख निर्माण करत
              आहे. गावातील ग्रामस्थांचा सहभाग, लोकसहकार्य आणि विकासाची दृष्टी
              यामुळे धामणेरने प्रगतीचा आदर्श मार्ग स्वीकारला आहे.
            </p>

            {/* Button */}
            
            <Link to="/about">
            <button className="bg-green-700 text-white px-8 py-4 rounded-full text-lg hover:bg-green-800 transition">
              अधिक जाणून घ्या
            </button>
            </Link>
            
          </div>
        </div>
      </section>
    </>
  );
}
