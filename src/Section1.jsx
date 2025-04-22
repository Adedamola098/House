import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-screen mt-4 flex flex-col lg:flex-row items-center justify-center text-white"
      style={{
        backgroundImage: "url(/assets/operating-room-with-modern-equipment-spacious-bright-operating-room-operating-unit-ready-surgery_124865-10081.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Left Content */}
      <div
        data-aos="fade-up"
        className="relative z-10 max-w-2xl text-center lg:text-left px-6 sm:px-12 md:px-16 lg:w-1/2 space-y-6"
      >
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200">
          We have the best care and treatment here
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          We Treat You <span className="text-yellow-400">Well With Care</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-100 hover:text-yellow-300 transition duration-300">
          Always Active
        </h2>

        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
          Our mission is to deliver the{" "}
          <span className="font-bold text-white">highest quality</span> healthcare services.
          <br />
          <span className="text-yellow-400 font-semibold">Excellent medical care</span> without compromise.
        </p>
      </div>

      {/* Right Image Section */}
      <div
        data-aos="fade-left"
        className="relative flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 lg:w-1/2 mt-8 lg:mt-0 px-6"
      >
        <img
          src="/assets/PatientRoom.jpg"
          alt="Patient Room"
          className="w-40 sm:w-48 md:w-56 lg:w-64 object-cover rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
        />
        <img
          src="/assets/Surgery.jpg"
          alt="Surgery Room"
          className="w-40 sm:w-48 md:w-56 lg:w-64 object-cover rounded-full shadow-lg sm:-translate-y-6 lg:-translate-y-16 transition-transform duration-500 hover:scale-110"
        />
      </div>
    </section>
  );
};

export default Section1;
