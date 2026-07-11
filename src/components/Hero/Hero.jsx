import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import BackgroundOrbs from "./BackgroundOrbs";
import Container from "../Common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="portfolio-hero relative overflow-hidden bg-slate-50"
    >
      <BackgroundOrbs />

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <HeroContent />
          <HeroImage />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
};

export default Hero;
