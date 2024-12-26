import React from "react";
import "./sport.css";
import Hero from "./Hero/Hero.js";
import Programs from "./Programs/Programs.js";
import Reasons from "./Reasons/Reasons.js";
// import Plans from "./Plans/Plans.js";
import Testimonials from "./Testimonials/Testimonials.js";
import Join from "./Join/Join.js";
import Footer from "./Footer/Footer.js";
import Water from "./water/water.js";

const Sports = () => {
  return (
    <div className="">
      <Hero />
      <Programs />
      <Water/>
      <Reasons />
      {/* <Plans /> */}
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
};

export default Sports;
