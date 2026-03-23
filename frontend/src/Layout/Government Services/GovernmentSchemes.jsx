import {
  Droplet,
  HeartPulse,
  Landmark,
  Baby,
  Home,
  Users,
  Leaf,
  FileText,
} from "lucide-react";

export default function GovernmentSchemes() {
  const schemes = [
    {
      title: "जलजीवन मिशन",
      icon: Droplet,
      link: "https://water.maharashtra.gov.in/",
    },
    {
      title: "आयुष्मान भारत योजना",
      icon: HeartPulse,
      link: "/ayushman",
    },
    {
      title: "पेसा निधी योजना",
      icon: Landmark,
      link: "/pesa",
    },
    {
      title: "प्रधानमंत्री मातृ वंदना योजना",
      icon: Baby,
      link: "/pmmvy",
    },
    {
      title: "भाग्यश्री / लाडकी योजना",
      icon: Users,
      link: "/ladki",
    },
    {
      title: "रमाई आवास योजना",
      icon: Home,
      link: "/ramai",
    },
    {
      title: "लाडकी बहिण योजना",
      icon: Users,
      link: "/ladki-bahin",
    },
    {
      title: "शबरी आवास योजना",
      icon: Home,
      link: "/shabari",
    },
    {
      title: "स्वच्छ भारत मिशन",
      icon: Leaf,
      link: "/swachh",
    },
    {
      title: "१५वा वित्त आयोग",
      icon: FileText,
      link: "/finance15",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-10 bg-gray-50">

      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 text-green-700">
        शासकीय योजना
      </h2>

      {/* Grid */}
      <div className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-6
      ">

        {schemes.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="group"
            >
              <div className="
                bg-white 
                p-6 
                rounded-xl 
                shadow-sm 
                hover:shadow-lg 
                hover:bg-green-600 
                transition duration-300 
                text-center
              ">

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <Icon className="w-8 h-8 text-green-600 group-hover:text-white transition" />
                </div>

                {/* Title */}
                <h3 className="text-md md:text-lg font-semibold text-gray-800 group-hover:text-white leading-snug">
                  {item.title}
                </h3>

              </div>
            </a>
          );
        })}

      </div>
    </section>
  );
}