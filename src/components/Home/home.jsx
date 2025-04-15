// src/components/Home.js
import React, { useEffect } from "react";

import "aos/dist/aos.css";
import HeroSection from "./herosection";
import StorySection from "../Story/storysection";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import "../../styles/home.css";
import MenuSection from "../Menu/menu";

function Home() {


  return (
    <div className="home-page">
      <HeroSection />
      <StorySection />
      <MenuSection/>
      <TestimonialsSection />
    </div>
  );
}

export default Home;