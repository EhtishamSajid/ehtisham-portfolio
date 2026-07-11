import { motion } from "framer-motion";
import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import AboutCard from "./AboutCard";
import { aboutHighlights } from "./aboutData";

const About = () => {
  return (
    <SectionContainer id="about" variant="white">
      <SectionTitle
        subtitle="About Me"
        title="Building Quality Through Structured Testing"
        description="A recruiter-friendly snapshot of the QA mindset, documentation habits, and practical testing skills I bring to product teams."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-semibold text-slate-700">
            Manual QA | API Testing | Defect Reporting
          </span>

          <h3 className="mt-6 text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
            Software Quality Assurance Engineer focused on reliable releases.
          </h3>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            I am a Software Engineering graduate with a strong interest in
            Software Quality Assurance. I enjoy ensuring software reliability
            through structured manual testing, API validation, defect reporting,
            and continuous quality improvement.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            My goal is to contribute to teams that value quality, collaboration,
            and delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <AboutCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
