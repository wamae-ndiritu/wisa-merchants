import React from "react";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Slider from "../components/Slider";

const HomepPage = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <AboutSection />
      <Services />
      <Gallery />
      <Footer />
    </div>
  );
};

export default HomepPage;
