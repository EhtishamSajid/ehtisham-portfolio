import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import BackgroundOrbs from "./BackgroundOrbs";
import Container from "../Common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="portfolio-hero relative overflow-hidden"
    >
      <BackgroundOrbs />

      <Container className="relative z-10">
        <div className="grid min-w-0 items-center gap-10 overflow-hidden lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 xl:gap-20 lg:overflow-visible">
          <HeroContent />
          <HeroImage />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
};

export default Hero;
