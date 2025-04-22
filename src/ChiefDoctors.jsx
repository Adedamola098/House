import { FaTwitter, FaFacebookF, FaGoogle, FaLinkedinIn, FaUserMd } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { doctors } from "./Data/Index";
import { physicians } from "./Data/Index";



const ChiefDoctors = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-16 bg-gray-100"
    style={{backgroundImage: "url('src/assets/blur-hospital_1203-7972.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8" data-aos="fade-up">
          Our Chief Doctors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4"
              data-aos="fade-up"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-24 h-24 rounded-full border-4 border-blue-500"
              />
              <div className="w-full text-center">
                <div className="flex items-center justify-center bg-gray-200 p-2 rounded-md space-x-2">
                  <div className="bg-blue-500 text-white p-2 rounded-md">
                    <FaTwitter />
                  </div>
                  <p className="font-bold">{doctor.name},</p>
                  <p className="text-gray-600">{doctor.degree}</p>
                </div>
                <p className="text-gray-600 mt-3">{doctor.description}</p>
                <p className="italic text-gray-500 mt-2">{doctor.specialization}</p>
                <p className="text-blue-500">Email: {doctor.email}</p>
                <div className="flex justify-center space-x-4 mt-4">
                  <FaTwitter className="text-gray-500 hover:text-blue-500 cursor-pointer" />
                  <FaFacebookF className="text-gray-500 hover:text-blue-700 cursor-pointer" />
                  <FaGoogle className="text-gray-500 hover:text-red-500 cursor-pointer" />
                  <FaLinkedinIn className="text-gray-500 hover:text-blue-600 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mt-16 mb-8" data-aos="fade-up">
          Physicians List
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-3 px-6 text-left">DOCTORS NAME</th>
                <th className="py-3 px-6 text-left">CODE</th>
                <th className="py-3 px-6 text-left">DEPARTMENT</th>
                <th className="py-3 px-6 text-left">EXTENSION NUMBER</th>
                <th className="py-3 px-6 text-left">APPOINTMENT</th>
              </tr>
            </thead>
            <tbody>
              {physicians.map((physician, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-6 flex items-center space-x-2 text-blue-500">
                    <FaUserMd />
                    <span>{physician.name}</span>
                  </td>
                  <td className="py-3 px-6">{physician.code}</td>
                  <td className="py-3 px-6">{physician.department}</td>
                  <td className="py-3 px-6">{physician.extension}</td>
                  <td className="py-3 px-6">
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition">
                      Book Appointment
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ChiefDoctors;
