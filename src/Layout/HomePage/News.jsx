export default function News() {
       const videos = [
    "https://www.youtube.com/embed/qK14LHYb6XA?si=xBDdjcj191kQtYWX",
    "https://www.youtube.com/embed/watch?v=NHk7scrb_9I",
    "https://www.youtube.com/embed/VIDEO_ID3",
    "https://www.youtube.com/embed/VIDEO_ID4",
    "https://www.youtube.com/embed/VIDEO_ID5",
    "https://www.youtube.com/embed/VIDEO_ID6",
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