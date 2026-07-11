import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import QAToolkit from "../components/QAToolkit/QAToolkit";
import Journey from "../components/Experience/Journey";
import FeaturedProject from "../components/FeaturedProject/FeaturedProject";
import Certifications from "../components/Certifications/Certifications";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <QAToolkit />
      <Journey />
      <FeaturedProject />
      <Certifications />
      <Footer />
    </>
  );
};

export default Home;
