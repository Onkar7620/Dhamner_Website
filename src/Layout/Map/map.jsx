import React from "react";

const Map = () => {
  return (
    <div className="w-full px-4 md:px-10 py-10 bg-gray-100">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        📍 Our Village Location
      </h2>

      {/* Map Container */}
      <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] 
                      rounded-2xl overflow-hidden shadow-2xl border border-gray-300 relative">

        {/* Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30421.85630339417!2d74.1427960025288!3d17.615454881886926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2325cc0cd2dfd%3A0x5c723787f0971317!2sDhamner%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1773921087159!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>

        {/* Overlay Info Card */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
          <p className="text-sm font-semibold text-gray-800">Dhamner, Maharashtra</p>
          <p className="text-xs text-gray-600">Click map to explore</p>
        </div>

      </div>

    </div>
  );
};

export default Map;