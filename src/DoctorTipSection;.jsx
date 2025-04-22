import { FaCheckCircle } from "react-icons/fa";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const DoctorTipSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
<section className="w-full bg-gray-50 py-16 px-6 md:px-12">
      {/* Top Banner */}
      <div
        data-aos="fade-down"
        className="bg-blue-600 text-white text-center py-10 px-6 rounded-lg shadow-lg"
      >
        <h2 data-aos="zoom-in" className="text-3xl md:text-4xl font-bold">
          Our Technological Services Have Vastly Improved
        </h2>
        <p data-aos="fade-up" className="text-lg md:text-xl mt-2">
          Experience real-life situations where technology saves lives.
        </p>
        <button
          data-aos="flip-right"
          className="mt-5 bg-white text-blue-600 font-semibold px-8 py-3 rounded-md hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Purchase Now
        </button>
      </div>

      {/* Main Content */}
      <div
        data-aos="fade-up"
        className="container mx-auto flex flex-col md:flex-row mt-16 px-4"
      >
        {/* Left - Doctor Tip */}
        <div data-aos="fade-right" className="md:w-2/3 bg-white p-6 rounded-lg shadow-lg">
          <h3 data-aos="zoom-in" className="text-2xl font-semibold text-gray-900">
            Today's Tip from Dr. Hanman
          </h3>

          <div data-aos="fade-up" className="flex mt-6 items-center">
            {/* Doctor Image */}
            <img
              data-aos="flip-left"
              src="/assets/Doc.jpeg"
              alt="Doctor"
              className="w-40 h-40 rounded-lg shadow-lg border-4 border-blue-500"
            />

            {/* Tip Content */}
            <div data-aos="fade-left" className="ml-6">
              <h4 data-aos="zoom-in" className="text-xl font-semibold text-blue-600">
                How to Live a Healthy Lifestyle?
              </h4>
              <p data-aos="fade-up" className="text-gray-700 mt-3 text-lg">
                Maintain balance in life by prioritizing physical, mental, and emotional health.
              </p>
              {/* Tips List */}
              <ul className="mt-4 space-y-3 text-lg">
                <li data-aos="fade-right" className="flex items-center text-gray-800">
                  <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                  Focus on what you can control; let go of unnecessary stress.
                </li>
                <li data-aos="fade-left" className="flex items-center text-gray-800">
                  <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                  Eat healthy, exercise, and spend time outdoors.
                </li>
                <li data-aos="fade-up" className="flex items-center text-gray-800">
                  <FaCheckCircle className="text-green-500 mr-3 text-xl" />
                  Surround yourself with positive, supportive people.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right - Appointment Form */}
        <div
          data-aos="zoom-in"
          className="md:w-1/3 bg-white p-8 shadow-lg rounded-lg ml-0 md:ml-12 mt-10 md:mt-0"
        >
          <h4 
            data-aos="flip-up"
            className="text-xl font-semibold bg-blue-600 text-white p-4 rounded-t-md"
          >
            Book an Appointment
          </h4>
          <form className="mt-6 space-y-4">
            <select data-aos="fade-up" className="w-full border rounded p-3 text-lg text-gray-700">
              <option>Select Department</option>
              <option>Cardiology</option>
              <option>Neurology</option>
            </select>
            <input
              data-aos="fade-right"
              type="text"
              required
              placeholder="Your First Name (Required)"
              className="w-full border rounded p-3 text-lg text-gray-700"
            />
            <input
              data-aos="fade-left"
              type="text"
              required
              placeholder="Your Last Name"
              className="w-full border rounded p-3 text-lg text-gray-700"
            />
            <input
              data-aos="zoom-in"
              type="text"
              required
              placeholder="Your Phone (Required)"
              className="w-full border rounded p-3 text-lg text-gray-700"
            />
            <button
              data-aos="flip-right"
              className="bg-blue-600 text-white text-lg w-full py-3 rounded hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DoctorTipSection;
