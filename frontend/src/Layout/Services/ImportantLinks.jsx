export default function ImportantLinks() {
  const links = [
    {
      id: 1,
      name: "Train Booking",
      url: "https://www.irctc.co.in/nget/train-search",
    },
    {
      id: 2,
      name: "Passport application",
      url: "https://passportindia.gov.in",
    },
    {
      id: 3,
      name: "Driving License, Vehicle RC, etc.",
      url: "https://parivahan.gov.in",
    },
    {
      id: 4,
      name: "Voter ID registration/correction",
      url: "https://voterportal.eci.gov.in",
    },
    {
      id: 5,
      name: "Digital storage of government documents",
      url: "https://digilocker.gov.in",
    },
    {
      id: 6,
      name: "Common Service Center portal",
      url: "https://sewa.csc.gov.in",
    },
    {
      id: 7,
      name: "PM-KISAN beneficiary list and status",
      url: "https://pmkisan.gov.in",
    },
    {
      id: 8,
      name: "Track DBT payments",
      url: "https://pfms.nic.in",
    },
    {
      id: 9,
      name: "UPI, AePS, and financial infrastructure",
      url: "https://npci.org.in",
    },
    {
      id: 10,
      name: "Insurance schemes: PMJJBY, PMSBY, APY",
      url: "https://jansuraksha.gov.in",
    },
    {
      id: 11,
      name: "National Scholarship Portal (NSP)",
      url: "https://scholarships.gov.in",
    },
    {
      id: 12,
      name: "National Testing Agency exams (NEET, JEE, etc.)",
      url: "https://nta.ac.in",
    },
    {
      id: 13,
      name: "NCERT textbooks and curriculum",
      url: "https://ncert.nic.in",
    },
    {
      id: 14,
      name: "University Grants Commission updates",
      url: "https://ugc.ac.in",
    },
    {
      id: 15,
      name: "CBSE board exam info and results",
      url: "https://cbse.gov.in",
    },
    {
      id: 16,
      name: "Ayushman Bharat (PM-JAY) health card",
      url: "https://ayushmanbharat.gov.in",
    },
    {
      id: 17,
      name: "Ministry of Health updates",
      url: "https://mohfw.gov.in",
    },
    {
      id: 18,
      name: "Social welfare schemes & details",
      url: "https://socialjustice.gov.in",
    },
    {
      id: 19,
      name: "Lodge complaints to any govt dept",
      url: "https://pgportal.gov.in",
    },
    {
      id: 20,
      name: "File RTI applications online",
      url: "https://rtionline.gov.in",
    },
    {
      id: 21,
      name: "Case status in Indian courts",
      url: "https://ecourts.gov.in",
    },
    {
      id: 22,
      name: "Consumer complaints",
      url: "https://consumerhelpline.gov.in",
    },
    {
      id: 23,
      name: "National Portal of India",
      url: "https://india.gov.in",
    },
    {
      id: 24,
      name: "Citizen engagement platform",
      url: "https://mygov.in",
    },
    {
      id: 25,
      name: "Aadhaar card services",
      url: "https://uidai.gov.in",
    },
    {
      id: 26,
      name: "Prime Minister’s official site",
      url: "https://pmindia.gov.in",
    },
    {
      id: 27,
      name: "MGNREGA job card & scheme",
      url: "https://nrega.nic.in",
    },
    {
      id: 28,
      name: "Income tax filing & PAN services",
      url: "https://incometax.gov.in",
    },
    {
      id: 29,
      name: "Provident fund & UAN info",
      url: "https://epfindia.gov.in",
    },
    {
      id: 30,
      name: "e-SHRAM card",
      url: "https://eshram.gov.in",
    },
  ];

  return (
    <div className="w-full">

      {/* ================= HERO ================= */}
      <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 text-white py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow">
            जनसुविधेसाठी <br /> महत्वाच्या लिंक्स
          </h1>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/assets/Browser-Links-Logo.png"
            alt="links"
            className="w-64 md:w-96 lg:w-[420px]"
          />
        </div>

      </div>

      {/* ================= TABLE ================= */}
      <div className="overflow-x-auto px-4 md:px-10 py-10 bg-gray-100">

        <table className="min-w-full border border-gray-300 bg-white rounded-lg overflow-hidden">

          {/* Header */}
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="p-3 border">S.No.</th>
              <th className="p-3 border">Description</th>
              <th className="p-3 border">Link</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {links.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100 transition">
                
                <td className="p-3 border text-center">{item.id}</td>

                <td className="p-3 border">{item.name}</td>

                <td className="p-3 border">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline break-all"
                  >
                    {item.url}
                  </a>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}