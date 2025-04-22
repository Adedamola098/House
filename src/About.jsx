import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-gray-900 text-black"
      style={{
        backgroundImage: "url(/assets/blur-hospital_1203-7972.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header Section */}
      <div className="bg-blue-500 text-center py-10">
        <h1 className="text-4xl text-white font-bold">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto py-12 px-6 flex flex-col md:flex-row gap-10 items-center">
        <div className="md:w-1/2" data-aos="fade-right">
          <img
            src="\assets\two-african-american-pharmacist-working-drugstore-hospital-pharmacy-african-healthcare_627829-13783.jpg"
            alt="Hospital"
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="md:w-1/2" data-aos="fade-left">
          <h2 className="text-4xl font-semibold mb-4">Who We Are</h2>
          <p className="leading-relaxed">
            Our hospital is dedicated to providing top-quality healthcare services
            with a focus on patient-centered care. Our team of experienced doctors,
            nurses, and medical professionals are committed to excellence in
            medical treatment and compassionate service.
          </p>
          <h3 className="text-3xl font-semibold mt-6">Our Mission</h3>
          <p className="leading-relaxed">
            To deliver world-class healthcare by integrating advanced medical
            technology, research, and patient-focused care.
          </p>
          <h3 className="text-3xl font-semibold mt-6">Our Vision</h3>
          <p className="leading-relaxed">
            To be a globally recognized healthcare institution known for
            innovation, expertise, and superior patient outcomes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
