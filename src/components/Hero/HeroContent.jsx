import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { scroller } from "react-scroll";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Button from "../Common/Button";

const SCROLL_OFFSET = -120;
const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";
const RESUME_FILENAME = "Ehtisham-Sajid-CV.pdf";

const HeroContent = () => {
  const scrollTo = (target) => {
    scroller.scrollTo(target, {
      smooth: true,
      duration: 600,
      offset: SCROLL_OFFSET,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
    >
      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-300 sm:px-4 sm:text-sm">
        <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden="true" />
        Available for SQA Opportunities
      </span>

      <h1 className="mt-6 text-3xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
        Hi, I'm
        <br />
        <span className="text-blue-600 dark:text-blue-400">Ehtisham Sajid</span>
      </h1>

      <div className="mt-5 min-h-12 text-lg font-semibold leading-snug text-slate-700 dark:text-slate-200 sm:text-2xl">
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

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
        Detail-oriented Software Quality Assurance Engineer with hands-on
        experience in Manual Testing, API Testing, Test Case Design, Bug
        Reporting, Jira, and Postman. Passionate about improving software
        quality through structured testing and continuous learning.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
        <Button onClick={() => scrollTo("projects")} className="w-full sm:w-auto">
          <span className="flex items-center justify-center gap-2">
            View QA Projects
            <FiArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </Button>

        <Button
          variant="secondary"
          href={RESUME_PATH}
          download={RESUME_FILENAME}
          ariaLabel="Download Ehtisham Sajid CV"
          className="w-full sm:w-auto"
        >
          <span className="flex items-center justify-center gap-2">
            Download Resume
            <FiDownload className="h-4 w-4" aria-hidden="true" />
          </span>
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start sm:gap-2.5">
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
            className="rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 sm:px-3.5 sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
