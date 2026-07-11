import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Button from "../Common/Button";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
        👋 Available for SQA Opportunities
      </span>

      <h1 className="mt-6 text-5xl font-black leading-tight text-slate-900 md:text-6xl lg:text-7xl">
        Hi, I'm
        <br />
        <span className="text-blue-600">
          Ehtisham Sajid
        </span>
      </h1>

      <div className="mt-6 h-10 text-2xl font-semibold text-slate-700">
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

      <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
        Detail-oriented Software Quality Assurance Engineer with hands-on
        experience in Manual Testing, API Testing, Test Case Design,
        Bug Reporting, Jira, and Postman. Passionate about improving
        software quality through structured testing and continuous learning.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <Button>
          <span className="flex items-center gap-2">
            View QA Projects
            <FiArrowRight />
          </span>
        </Button>

        <Button variant="secondary">
          <span className="flex items-center gap-2">
            Download Resume
            <FiDownload />
          </span>
        </Button>
      </div>

      <div className="mt-12 flex flex-wrap gap-3">
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
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;