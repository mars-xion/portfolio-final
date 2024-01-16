import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import ToolsSection from "../sections/ToolsSection";
import TestimonialsSection from "../sections/TestimonialsSection";
import ContactSection from "../sections/ContactSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ToolsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
