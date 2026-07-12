import { motion } from "framer-motion";
import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import AboutCard from "./AboutCard";
import { aboutHighlights } from "./aboutData";

const About = () => {
  return (
    <SectionContainer id="about" variant="white" className="section-gap-150">
      <SectionTitle
        subtitle="About Me"
        title="Building Quality Through Structured Testing"
        description="A recruiter-friendly snapshot of the QA mindset, documentation habits, and practical testing skills I bring to product teams."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl lg:pt-2"
        >
          <span className="inline-block max-w-full rounded-full border border-blue-200/80 bg-white/74 px-3.5 py-2 text-[13px] font-extrabold leading-5 text-blue-700 shadow-[0_8px_20px_rgba(37,99,235,0.08)] backdrop-blur-xl dark:border-sky-300/25 dark:bg-white/[0.07] dark:text-sky-200 sm:px-4 sm:py-2.5 sm:text-[15px]">
            Manual QA | API Testing | Defect Reporting
          </span>

          <h3 className="mt-6 text-[2rem] font-black leading-tight text-slate-950 dark:text-white sm:mt-7 sm:text-4xl">
            Software Quality Assurance Engineer focused on reliable releases.
          </h3>

          <p className="mt-5 max-w-prose text-base leading-8 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-lg">
            I am a Software Engineering graduate with a strong interest in
            Software Quality Assurance. I enjoy ensuring software reliability
            through structured manual testing, API validation, defect reporting,
            and continuous quality improvement.
          </p>

          <p className="mt-4 max-w-prose text-base leading-8 text-slate-600 dark:text-slate-300 sm:mt-5 sm:text-lg">
            My goal is to contribute to teams that value quality, collaboration,
            and delivering exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
          {aboutHighlights.map((item) => (
            <AboutCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;
