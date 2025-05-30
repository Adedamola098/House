import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const MyComponent = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">Hello, AOS!</h1>
      <p data-aos="fade-left">This is an animated paragraph.</p>
    </div>
  );
};

export default MyComponent;
