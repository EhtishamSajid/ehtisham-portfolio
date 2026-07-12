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
      className="hero-copy mx-auto min-w-0 overflow-hidden text-center lg:mx-0 lg:max-w-[50rem] lg:text-left"
    >
      <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/80 bg-white/76 px-3.5 py-2 text-[13px] font-extrabold text-blue-700 shadow-[0_10px_26px_rgba(37,99,235,0.1)] backdrop-blur-2xl dark:border-sky-300/25 dark:bg-white/[0.075] dark:text-sky-200 sm:px-4 sm:py-2.5 sm:text-[15px]">
        <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500 shadow-[0_0_0_5px_rgba(34,197,94,0.14)]" aria-hidden="true" />
        Available for SQA Opportunities
      </span>

      <h1 className="mt-6 break-words text-[36px] font-black leading-[0.98] text-slate-950 dark:text-white sm:mt-7 sm:text-[54px] lg:text-[68px] xl:text-[72px]">
        Hi, I'm
        <br />
        <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent dark:from-sky-200 dark:via-blue-300 dark:to-sky-400">
          Ehtisham Sajid
        </span>
      </h1>

      <div className="mx-auto mt-5 min-h-10 max-w-full overflow-hidden text-base font-extrabold leading-snug text-slate-700 dark:text-slate-200 sm:mt-6 sm:min-h-14 sm:text-2xl lg:mx-0 lg:text-[26px]">
        <TypeAnimation
          sequence={[
            "Software Quality Assurance Engineer",
            2000,
            "Manual QA Tester",
            2000,
            "API Testing Practitioner",
            2000,
            "Test Case Designer",
            2000,
            "Defect Reporting Specialist",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-slate-600 dark:text-slate-300 sm:mt-7 sm:text-[18px] sm:leading-8 lg:mx-0">
        Junior Software QA Engineer focused on manual testing, API validation,
        test case design, and defect reporting. I help teams verify product
        flows clearly, document issues precisely, and improve release
        confidence with Jira, Postman, and structured QA artifacts.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start">
        <Button onClick={() => scrollTo("projects")} className="w-full sm:w-auto">
          <span className="flex items-center justify-center gap-2">
            Review QA Case Study
            <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
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

      <div className="mt-8 flex flex-wrap justify-center gap-2 lg:mt-10 lg:justify-start">
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
            className="rounded-full border border-white/70 bg-white/72 px-3 py-1.5 text-[13px] font-extrabold text-slate-700 shadow-[0_8px_20px_rgba(15,23,42,0.045)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-200 dark:hover:border-sky-300/30 dark:hover:text-sky-200 sm:px-4 sm:py-2 sm:text-[15px]"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;
