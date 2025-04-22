import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { services } from "./Data/Index";



const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-900 relative"
      style={{
        backgroundImage: "url(/assets/blur-hospital_1203-7972.jpg)",
        backgroundSize: "cover",
        backgroundPosition: " center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative bg-blue-500 h-full text-white text-center py-10">
        <h1 className="text-4xl font-bold">Our Services</h1>
      </div>

      <div className="relative container h-full mx-auto py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-70 p-8 h-full shadow-lg rounded-xl text-center transition-transform transform hover:scale-105"
              data-aos="fade-up"
            >
              <div className="text-6xl mb-4 text-blue-400">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-white">{service.name}</h2>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
