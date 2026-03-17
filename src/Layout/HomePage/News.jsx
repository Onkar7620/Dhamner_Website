export default function News() {
       const videos = [
    "https://www.youtube.com/embed/EgxvpZ44H0g?si=5hnuqzzgUNAZ2DfA",
    "https://www.youtube.com/embed/DSRRktI0REo?si=y0uaHaN3fDcRgwpH" ,
    "https://www.youtube.com/embed/YewY9dZYCuY?si=yNLdzpf1itezDdD1",
    "https://www.youtube.com/embed/CDBfnjJ2jTo?si=BlyuC2X-A3hIugZe ",
    "https://www.youtube.com/embed/iljwt5SiXh8?si=9fFbWJ8oiCw0gAZW",
    "https://www.youtube.com/embed/DXZTiEAIdMk?si=p906KBL8YZtT16ZK",
  ];
    return (
        <section className="bg-gray-100 py-16 px-6 md:px-16">

      {/* Heading */}
      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold text-gray-800">
          बातम्या व माहिती
        </h2>

        <div className="flex justify-center items-center gap-4 my-4">
          <div className="w-16 h-[2px] bg-yellow-700"></div>
          <div className="w-4 h-4 bg-yellow-700 rotate-45"></div>
          <div className="w-16 h-[2px] bg-yellow-700"></div>
        </div>

        <p className="text-gray-600 max-w-3xl mx-auto">
          ताज्या घडामोडी आणि उपयुक्त माहिती यांचे प्रभावी सादरीकरण.
          वाचकांपर्यंत सत्य, अचूक आणि वेळेवर माहिती पोहोचवण्यासाठी समर्पित विभाग.
        </p>

      </div>

      {/* Video Grid */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

        {videos.map((video, index) => (
          
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video">

              <iframe
                className="w-full h-full"
                src={video}
                title="YouTube video"
                allowFullScreen
              ></iframe>

            </div>
          </div>

        ))}

      </div>
    </section>
    )
}