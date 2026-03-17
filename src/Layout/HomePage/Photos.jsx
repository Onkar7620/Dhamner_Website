import { ArrowRight } from "lucide-react";
export default function Photos() {  
      const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
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
          <button className="flex items-center gap-3 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition">
            अधिक पहा
            <span className="bg-white text-red-500 p-2 rounded-full">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>

      </div>
    </section>
    )
}