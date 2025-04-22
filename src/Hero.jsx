import React from 'react'
import Section1 from './Section1'
import DoctorTipSection from './DoctorTipSection;'
import BlogSection from './BlogSection'
import FeaturesFAQ from './FeaturesFAQ'


const Hero = () => {
  return (
    <>
    <div
     style={{
      backgroundImage: "url(/assets/operating-room-with-modern-equipment-spacious-bright-operating-room-operating-unit-ready-surgery_124865-10081.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "fixed",
    }}
    >
        <Section1 />
      
        <DoctorTipSection />
      
        <BlogSection />
        <FeaturesFAQ />
        </div>
    </>
  )
}

export default Hero
