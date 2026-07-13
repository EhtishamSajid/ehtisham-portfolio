import { motion } from "framer-motion";
import { scroller } from "react-scroll";
import {
  FiArrowRight,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";

const SCROLL_OFFSET = -120;
const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";
const RESUME_FILENAME = "Ehtisham-Sajid-CV.pdf";

const heroHighlights = [
  "Structured test scenarios and test cases",
  "Clear, reproducible defect reports",
  "Functional, regression, smoke and sanity testing",
  "Currently learning REST API validation using Postman",
];

const heroSkills = [
  "Manual Testing",
  "API Testing",
  "Test Cases",
  "Bug Reporting",
  "Jira",
  "Postman",
];

const HeroContent = () => {
  const scrollToProjects = () => {
    scroller.scrollTo("projects", {
      smooth: true,
      duration: 600,
      offset: SCROLL_OFFSET,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -38 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className="hero-content"
    >
      <div className="hero-availability">
        <span aria-hidden="true" />
        <p>Available for Junior SQA Opportunities</p>
      </div>

      <h1 className="hero-heading">
        <span className="hero-greeting">Hi, I&apos;m</span>

        <span className="hero-name">
          Ehtisham Sajid
        </span>
      </h1>

      <div className="hero-role">
        <h2>Software QA Engineer</h2>
        <span aria-hidden="true" />
      </div>

      <p className="hero-description">
        Detail-oriented Software Engineering graduate with hands-on experience
        in manual testing, test-case design, defect reporting, and QA
        documentation. I focus on verifying user journeys, documenting issues
        clearly, and helping teams deliver reliable software.
      </p>

      <div
        className="hero-checklist"
        aria-label="Quality assurance strengths"
      >
        {heroHighlights.map((highlight) => (
          <div key={highlight} className="hero-check-item">
            <FiCheckCircle aria-hidden="true" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>

      <div className="hero-actions">
        <button
          type="button"
          onClick={scrollToProjects}
          className="hero-button hero-button-primary"
        >
          <span>Explore QA Projects</span>
          <FiArrowRight aria-hidden="true" />
        </button>

        <a
          href={RESUME_PATH}
          download={RESUME_FILENAME}
          className="hero-button hero-button-secondary"
          aria-label="Download Ehtisham Sajid resume"
        >
          <span>Download Resume</span>
          <FiDownload aria-hidden="true" />
        </a>
      </div>

      <div className="hero-skill-chips" aria-label="QA skills and tools">
        {heroSkills.map((skill) => (
          <span key={skill} className="hero-skill-chip">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default HeroContent;