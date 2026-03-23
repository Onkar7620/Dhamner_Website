import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Photos() {  
      const images = [
    "/gallery/openGYM/WhatsApp Image 2026-03-17 at 6.23.53 PM.jpeg",
    "/gallery/tapasani/WhatsApp .jpeg",
    "/gallery/Road/गावातील सिमेंट रस्ते.jpg.jpeg",
    "/gallery/plasticBandi/WhatsApp Image 2026-03-18 at 12.13.47 AM.jpeg",
    "/gallery/nananani/WhatsApp Image 2026-03-17 at 6.23.50 PM.jpeg",
    "/gallery/gramPanchayat/IMG-20250421-WA0034.jpg.jpeg",
    "/gallery/gramSwachta/WhatsApp Image 2026-03-18 at 10.56.21 AM.jpeg",
    "/gallery/GramSabha/1758122657814.jpg.jpeg",
  ];
    return (
        <section className="bg-[#8b6400] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[30px] shadow-lg"
            >
              <img
                src={img}
                alt="gallery"
                className="w-full h-[250px] md:h-[300px] object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">

         <Link to="/gallery">
          <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
            अधिक पहा
            <span className="bg-white text-red-500 p-2 rounded-full">
              <ArrowRight size={20} />
            </span>
          </button>
          </Link>
          
        </div>

      </div>
    </section>
    )
}