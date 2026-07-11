import { motion } from "framer-motion";
import Container from "../Common/Container";
import SectionTitle from "../Common/SectionTitle";
import AboutCard from "./AboutCard";
import { aboutHighlights } from "./aboutData";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-28"
    >
      <Container>

        <SectionTitle
          subtitle="About Me"
          title="Building Quality Through Testing"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <h3 className="text-4xl font-bold text-slate-900">
              Software Quality Assurance Engineer
            </h3>

            <p className="mt-6 leading-8 text-slate-600">
              I am a Software Engineering graduate with a strong interest
              in Software Quality Assurance. I enjoy ensuring software
              reliability through structured manual testing, API validation,
              defect reporting, and continuous quality improvement.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              My goal is to contribute to teams that value quality,
              collaboration, and delivering exceptional user experiences.
            </p>

          </motion.div>

          <div className="grid gap-6">

            {aboutHighlights.map((item) => (
              <AboutCard
                key={item.title}
                item={item}
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
};

export default About;