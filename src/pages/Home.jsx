import { useEffect } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import QAToolkit from "../components/QAToolkit/QAToolkit";
import Journey from "../components/Experience/Journey";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Certifications from "../components/Certifications/Certifications";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ScrollEnhancements from "../components/Common/ScrollEnhancements";

const Home = () => {
  useEffect(() => {
    document.title =
      "Ehtisham Sajid | Software Quality Assurance Engineer Portfolio";
  }, []);

  return (
    <>
      <ScrollEnhancements />
      <Navbar />

      <main>
        <Hero />
        <About />
        <QAToolkit />
        <Journey />
        <FeaturedProject />
        <Certifications />
        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Home;