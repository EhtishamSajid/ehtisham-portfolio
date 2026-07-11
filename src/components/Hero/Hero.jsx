import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import BackgroundOrbs from "./BackgroundOrbs";
import Container from "../Common/Container";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-50 pt-32"
    >
      <BackgroundOrbs />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>

        <HeroStats />
      </Container>
    </section>
  );
};

export default Hero;