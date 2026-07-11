import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { scroller } from "react-scroll";
import { FiArrowRight, FiMail } from "react-icons/fi";
import Button from "../Common/Button";

const HeroContent = () => {
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 600,
      offset: -96,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-green-500" />
        Available for SQA Opportunities
      </span>

      <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
        Hi, I'm
        <br />
        <span className="text-blue-600">Ehtisham Sajid</span>
      </h1>

      <div className="mt-5 min-h-12 text-xl font-semibold leading-snug text-slate-700 sm:text-2xl">
        <TypeAnimation
          sequence={[
            "Software Quality Assurance Engineer",
            2000,
            "Manual Tester",
            2000,
            "API Tester",
            2000,
            "Bug Hunter",
            2000,
            "QA Enthusiast",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0">
        Detail-oriented Software Quality Assurance Engineer with hands-on
        experience in Manual Testing, API Testing, Test Case Design, Bug
        Reporting, Jira, and Postman. Passionate about improving software
        quality through structured testing and continuous learning.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
        <Button onClick={() => scrollTo("projects")}>
          <span className="flex items-center gap-2">
            View QA Projects
            <FiArrowRight className="h-4 w-4" />
          </span>
        </Button>

        <Button variant="secondary" onClick={() => scrollTo("contact")}>
          <span className="flex items-center gap-2">
            Contact Me
            <FiMail className="h-4 w-4" />
          </span>
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2.5 lg:justify-start">
        {[
          "Manual Testing",
          "API Testing",
          "Jira",
          "Postman",
          "GitHub",
          "Agile",
        ].map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
