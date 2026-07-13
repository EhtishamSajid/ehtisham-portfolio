import {
  FiActivity,
  FiFileText,
  FiTarget,
} from "react-icons/fi";

const stats = [
  {
    icon: FiActivity,
    label: "Current Status",
    title: "Case study in progress",
    description:
      "Actively documenting and validating test scenarios, test cases and defects.",
    tone: "orange",
  },
  {
    icon: FiFileText,
    label: "Planned Artifacts",
    title: "Test scenarios, test cases and defect reports",
    description:
      "Comprehensive test artifacts for end-to-end coverage.",
    tone: "blue",
  },
  {
    icon: FiTarget,
    label: "Primary Focus",
    title: "Manual functional testing",
    description:
      "Ensuring quality through detailed manual validation.",
    tone: "green",
  },
];

const ProjectStats = () => {
  return (
    <div
      className="project-summary-grid"
      aria-label="Project summary"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.label}
            className={`project-summary-card project-summary-${stat.tone}`}
          >
            <span
              className="project-summary-icon"
              aria-hidden="true"
            >
              <Icon />
            </span>

            <div className="project-summary-content">
              <p className="project-summary-label">
                {stat.label}
              </p>

              <h3>{stat.title}</h3>

              <p className="project-summary-description">
                {stat.description}
              </p>

              <span
                className="project-summary-underline"
                aria-hidden="true"
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default ProjectStats;