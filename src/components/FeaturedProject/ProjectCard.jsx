import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCheck,
  FiCheckCircle,
  FiClipboard,
  FiClock,
  FiFileText,
  FiSearch,
} from "react-icons/fi";

const capabilities = [
  {
    icon: FiCheckCircle,
    title: "Manual Testing",
    subtitle: "Functional & workflow testing",
  },
  {
    icon: FiCheckCircle,
    title: "Test Scenario Design",
    subtitle: "Scenario creation & coverage",
  },
  {
    icon: FiFileText,
    title: "Test Case Documentation",
    subtitle: "Well-structured test cases",
  },
  {
    icon: FiCheckCircle,
    title: "Defect Reporting",
    subtitle: "Defects logging & tracking",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <article className="project-showcase-card">
      <div className="project-card-accent" aria-hidden="true" />

      <header className="project-showcase-header">
        <div className="project-header-brand">
          <span className="project-header-icon" aria-hidden="true">
            <FiFileText />
          </span>

          <div>
            <p className="project-header-label">Featured QA Case Study</p>
            <h3 className="project-header-title">
              {project.category || "Manual Testing Case Study"}
            </h3>
          </div>
        </div>

        <div
          className="project-status-badge"
          aria-label={`Project status: ${project.status}`}
        >
          <FiClock aria-hidden="true" />
          <span>{project.status || "In progress"}</span>
        </div>
      </header>

      <div className="project-showcase-body">
        <div
          className="project-dot-pattern"
          aria-hidden="true"
        />

        <div className="project-intro">
          <p className="project-eyebrow">OrangeHRM</p>

          <h2>{project.title}</h2>

          <p className="project-description">
            An in-progress manual testing case study focused on selected
            OrangeHRM workflows. It will include structured test scenarios,
            test cases, defect reports, and a concise testing summary.
          </p>
        </div>

        <div className="project-feature-layout">
          <div className="project-capabilities-grid">
            {capabilities.map((capability) => {
              const Icon = capability.icon;

              return (
                <div
                  key={capability.title}
                  className="project-capability-card"
                >
                  <span
                    className="project-capability-icon"
                    aria-hidden="true"
                  >
                    <Icon />
                  </span>

                  <div>
                    <h4>{capability.title}</h4>
                    <p>{capability.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className="project-illustration"
            aria-hidden="true"
          >
            <div className="project-illustration-blob blob-one" />
            <div className="project-illustration-blob blob-two" />

            <div className="clipboard">
              <span className="clipboard-top" />

              <div className="clipboard-paper">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="clipboard-row">
                    <FiCheck />
                    <span />
                  </div>
                ))}
              </div>
            </div>

            <div className="project-magnifier">
              <FiSearch />
            </div>

            <div className="project-floating-clipboard">
              <FiClipboard />
            </div>
          </div>
        </div>

        {project.path && (
          <div className="project-cta-wrapper">
            <Link
              to={project.path}
              className="project-cta"
              aria-label={`View ${project.title}`}
            >
              <span>View Case Study</span>
              <FiArrowRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;