import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { departments } from "./Data/Index";


const Department = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="h-full  "
    style={{ backgroundImage: "url('/assets/operating-room-with-modern-equipment-spacious-bright-operating-room-operating-unit-ready-surgery_124865-10081.jpg')", backgroundSize: "cover",
     }}
    >
      <div className="bg-blue-500 text-white text-center py-10" data-aos="fade-down">
        <h1 className="text-4xl font-bold">Department Listing</h1>
      </div>

      <div className="container mx-auto  py-20 px-6 md:flex gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white p-8 shadow-xl rounded-2xl text-center transition-transform transform hover:scale-105" data-aos="zoom-in">
              <div className="text-6xl mb-4 text-blue-500" data-aos="flip-left">{dept.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800" data-aos="fade-up">{dept.name}</h2>
              <p className="text-gray-600 mt-2 text-sm" data-aos="fade-up">{dept.description}</p>
            </div>
          ))}
        </div>

        <aside className="bg-white p-8 shadow-xl rounded-2xl w-full md:w-1/4" data-aos="fade-left">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">All Departments</h3>
          <ul className="space-y-3">
            {departments.map((dept, index) => (
              <li key={index} className="text-gray-700 border-b pb-2 last:border-none" data-aos="fade-right">{dept.name}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Department;
