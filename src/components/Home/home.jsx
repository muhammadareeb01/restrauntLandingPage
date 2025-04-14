// src/components/Home.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroSection from "./herosection";
import StorySection from "../Story/storysection";
import TestimonialsSection from "../Testimonials/TestimonialsSection";
import "../../styles/home.css";

function Home() {


  return (
    <div className="home-page">
      <HeroSection />
      <StorySection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;