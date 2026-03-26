export default function Member() {

  // 🔷 Ministers Section (NEW)
  const ministers = [
     {
      id: 1,
      name: "देवेंद्र फडणवीस",
      role: "माननीय मुख्यमंत्री",
      image: "/members/PM.jpeg",
    },
     {
      id:2,
      name: "एकनाथ शिंदे",
      role: "माननीय उपमुख्यमंत्री",
      image: "/members/PM1.jpeg",
    },
    {
      id: 3,
      name: "सुनेत्रा आजित पवार",
      role: "माननीय उपमुख्यमंत्री",
      image: "/members/PM2.jpeg",
    },
    {
      id: 4,
      name: "जयकुमार गोरे",
      role: "माननीय मंत्री, ग्रामविकास",
      image: "/members/jaykumar.jpeg",
    },
    {
      id: 5,
      name: "योगेश कदम",
      role: "माननीय राज्यमंत्री",
      image: "/members/yogesh kadam.jpeg",
    },
    {
      id: 6,
      name: "याशनी नगराजन ",
      role: "मुख्य कार्यकारी अधिकारी CEO",
      image: "/members/ceo.png",
    },
     {
      id: 7,
      name: "शहाजी क्षीरसागर ",
      role: "आदर्श सरपंच ",
      image: "/members/शहाजी क्षीरसागर.png",
    },
  ];

  // 🔷 Your Existing Data (UNCHANGED)
  const officials = [
    {
      id: 1,
      name: "श्री.चंद्रकांत शंकर व्होवाळे",
      role: "सरपंच",
      image: "/members/Sarpanch chandrakant howale.jpg.jpeg",
    },
    {
      id: 2,
      name: "श्री.प्रविण वामन क्षीरसागर",
      role: "उपसरपंच",
      image: "/members/upsarpanch pravin kshirsagar.jpg.jpeg",
    },
    {
      id: 3,
      name: "श्री.प्रशांत फडतरे",
      role: "ग्रामपंचायत अधिकारी",
      image: "/members/WhatsApp Image 2026-03-17 at 6.13.49 PM.jpeg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 lg:px-10">

      {/* ================= MINISTERS SECTION ================= */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-12">
        माननीय मंत्री व पदाधिकारी
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10 mb-20">

        {ministers.map((person) => (
          <div key={person.id} className="text-center">

            <div className="flex justify-center mb-4 ">
              <img
                src={person.image}
                alt={person.name}
                className="w-[170px] h-[170px] object-cover rounded-2xl shadow-md"
              />
            </div>

            <h3 className="text-green-700 font-semibold text-sm md:text-base">
              {person.name}
            </h3>

            <p className="text-gray-600 text-xs md:text-sm mt-1">
              {person.role}
            </p>

          </div>
        ))}

      </div>

      {/* ================= YOUR EXISTING SECTION ================= */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 mb-12">
        ग्रामपंचायत पदाधिकारी
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

        {officials.map((person) => (
          <div
            key={person.id}
            className="text-center bg-white p-6 rounded-3xl shadow-md hover:shadow-xl transition"
          >

            <div className="flex justify-center mb-5">
              <img
                src={person.image}
                alt={person.name}
                className="w-[200px] h-[200px] object-cover rounded-2xl"
              />
            </div>

            <h3 className="text-green-700 text-xl md:text-2xl font-semibold">
              {person.role}
            </h3>

            <p className="text-gray-600 mt-2 text-lg">
              {person.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}