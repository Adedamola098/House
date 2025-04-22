import { useState, useEffect } from "react";
import { FaHospital, FaUserMd, FaAmbulance, FaPlus, FaMinus } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesFAQ = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-20 px-6">
    <div data-aos="fade-up" className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <FaHospital className="text-blue-500 text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Advanced Technology</h3>
          <p className="text-gray-600 mt-2 text-center">We integrate the latest medical technology for better healthcare solutions.</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <FaUserMd className="text-blue-500 text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">Expert Medical Team</h3>
          <p className="text-gray-600 mt-2 text-center">Our professionals ensure top-notch medical care for every patient.</p>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-xl flex flex-col items-center">
          <FaAmbulance className="text-blue-500 text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">24/7 Emergency Services</h3>
          <p className="text-gray-600 mt-2 text-center">We are available around the clock for all your emergency needs.</p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Frequently Asked Questions</h2>
        <div className="bg-white shadow-lg rounded-lg divide-y">
          <div className="p-6">
            <button className="w-full flex justify-between items-center text-lg font-semibold" onClick={() => toggleFAQ(1)}>
              What is the difference between lease and license agreement?
              {openFAQ === 1 ? <FaMinus className="text-blue-500" /> : <FaPlus className="text-blue-500" />}
            </button>
            {openFAQ === 1 && <p className="mt-4 text-gray-600">A lease grants exclusive possession, whereas a license provides permission to use without exclusive rights.</p>}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Choose Us?</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg">
            <FaHospital className="text-blue-500 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">State-of-the-Art Infrastructure</h3>
              <p className="text-gray-600 mt-1">We offer cutting-edge medical facilities for world-class healthcare.</p>
            </div>
          </div>

          <div className="flex items-center gap-6 p-6 bg-white shadow-lg rounded-lg">
            <FaAmbulance className="text-blue-500 text-4xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">24/7 Ambulance Services</h3>
              <p className="text-gray-600 mt-1">Quick response and efficient emergency services available at all times.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default FeaturesFAQ;
