import BackgroundOrbs from "./BackgroundOrbs";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import Container from "../Common/Container";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <BackgroundOrbs />

      <div
        className="hero-decoration hero-decoration-left"
        aria-hidden="true"
      />

      <div
        className="hero-decoration hero-decoration-right"
        aria-hidden="true"
      />

      <Container className="hero-container">
        <div className="hero-main-grid">
          <HeroContent />
          <HeroImage />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
};

export default Hero;