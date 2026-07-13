import { motion } from "framer-motion";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import SectionContainer from "../Common/SectionContainer";
import AboutCard from "./AboutCard";
import { aboutHighlights } from "./aboutData";
import "./About.css";

const aboutValues = [
  {
    icon: FiTarget,
    title: "Quality Focused",
    description: "Always testing with purpose",
    accent: "blue",
  },
  {
    icon: FiUsers,
    title: "Team Player",
    description: "Collaborate, share and support",
    accent: "purple",
  },
  {
    icon: FiTrendingUp,
    title: "Growth Mindset",
    description: "Keep learning, keep improving",
    accent: "green",
  },
];

const About = () => {
  return (
    <SectionContainer
      id="about"
      variant="white"
      className="about-section"
    >
      <div
        className="about-decoration about-decoration-left"
        aria-hidden="true"
      />

      <div
        className="about-decoration about-decoration-right"
        aria-hidden="true"
      />

      <div className="about-inner">
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="about-header"
        >
          <div className="about-eyebrow">
            <span
              className="about-eyebrow-line"
              aria-hidden="true"
            />

            <p>About Me</p>

            <span
              className="about-eyebrow-line"
              aria-hidden="true"
            />
          </div>

          <h2>
            Building Quality Through
            <br />
            <span className="about-heading-highlight">
              Structured Testing
            </span>
          </h2>

          <p className="about-header-description">
            A recruiter-friendly snapshot of the QA mindset, documentation
            habits, and practical testing skills I bring to product teams.
          </p>
        </motion.header>

        <div className="about-layout">
          <motion.article
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="about-summary-card"
          >
            <span
              className="about-summary-accent"
              aria-hidden="true"
            />

            <div className="about-summary-content">
              <p className="about-summary-badge">
                Manual QA | API Testing | Defect Reporting
              </p>

              <h3>
                Software Quality Assurance Engineer focused on{" "}
                <span>reliable releases.</span>
              </h3>

              <span
                className="about-summary-underline"
                aria-hidden="true"
              />

              <div className="about-summary-copy">
                <p>
                  I am a Software Engineering graduate with a strong interest
                  in Software Quality Assurance. I enjoy ensuring software
                  reliability through structured manual testing, API
                  validation, defect reporting, and continuous quality
                  improvement.
                </p>

                <p>
                  My goal is to contribute to teams that value quality,
                  collaboration, and delivering exceptional user experiences.
                </p>
              </div>

              <div
                className="about-values"
                aria-label="Professional values"
              >
                {aboutValues.map((value) => {
                  const Icon = value.icon;

                  return (
                    <div
                      key={value.title}
                      className={`about-value about-value--${value.accent}`}
                    >
                      <span
                        className="about-value-icon"
                        aria-hidden="true"
                      >
                        <Icon />
                      </span>

                      <div>
                        <h4>{value.title}</h4>
                        <p>{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>

          <div className="about-skills-grid">
            {aboutHighlights.map((item, index) => (
              <AboutCard
                key={item.title}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default About;