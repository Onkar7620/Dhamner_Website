export default function Member(){
    const officials = [
    {
      id: 1,
      name: "सुवर्णा बजरंग पवार",
      role: "सरपंच",
      image: "/sarpanch.jpg",
    },
    {
      id: 2,
      name: "मोहन निवृत्ती पवार",
      role: "उपसरपंच",
      image: "/upsarpanch.jpg",
    },
    {
      id: 3,
      name: "अनिल श्रीकांत हिरासकर",
      role: "ग्रामपंचायत अधिकारी",
      image: "/officer.jpg",
    },
  ];
    return(
        <section className="bg-gray-100 py-16 px-6 lg:px-10">
      
      {/* Section Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-12">
        ग्रामपंचायत पदाधिकारी
      </h2>

      {/* Officials Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {officials.map((person) => (
          <div
            key={person.id}
            className="text-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition"
          >

            {/* Image */}
            <div className="flex justify-center mb-5">
              <img
                src={person.image}
                alt={person.name}
                className="w-40 h-40 object-cover rounded-2xl"
              />
            </div>

            {/* Role */}
            <h3 className="text-green-700 text-xl md:text-2xl font-semibold">
              {person.role}
            </h3>

            {/* Name */}
            <p className="text-gray-600 mt-2 text-lg">
              {person.name}
            </p>

          </div>
        ))}

      </div>
    </section>
    )
}