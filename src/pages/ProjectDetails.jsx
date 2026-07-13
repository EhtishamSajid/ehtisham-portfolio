import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiActivity,
  FiArrowLeft,
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCheck,
  FiCheckCircle,
  FiChevronRight,
  FiChrome,
  FiCircle,
  FiClock,
  FiCode,
  FiDownload,
  FiExternalLink,
  FiFileText,
  FiFlag,
  FiGithub,
  FiGrid,
  FiLayers,
  FiList,
  FiMonitor,
  FiPackage,
  FiSearch,
  FiShield,
  FiTarget,
  FiTool,
  FiUsers,
} from "react-icons/fi";
import { FaBug } from "react-icons/fa";

import Container from "../components/Common/Container";
import "./ProjectDetails.css";

const testingScope = [
  {
    title: "Login & Authentication",
    description: "Positive, negative and validation-focused login coverage.",
    icon: FiShield,
  },
  {
    title: "Dashboard",
    description: "Navigation, widgets and essential user-facing information.",
    icon: FiGrid,
  },
  {
    title: "Employee Management",
    description: "Employee records, search and profile-management workflows.",
    icon: FiUsers,
  },
  {
    title: "Leave Module",
    description: "Leave requests, status changes and important validations.",
    icon: FiClock,
  },
  {
    title: "Recruitment",
    description: "Candidate, vacancy and recruitment workflow coverage.",
    icon: FiBriefcase,
  },
  {
    title: "User Roles",
    description: "Role-based access and important authorization checks.",
    icon: FiShield,
  },
];

const deliverables = [
  {
    title: "Test Plan",
    description:
      "Defines the objectives, scope, approach, environment and testing responsibilities.",
    icon: FiBookOpen,
  },
  {
    title: "Test Scenarios",
    description:
      "High-level user workflows prepared to ensure meaningful functional coverage.",
    icon: FiList,
  },
  {
    title: "Test Cases",
    description:
      "Detailed positive and negative test cases with expected results.",
    icon: FiCheckCircle,
  },
  {
    title: "Bug Reports",
    description:
      "Clear defect reports with steps, severity, priority and supporting evidence.",
    icon: FaBug,
  },
  {
    title: "Defect Log",
    description:
      "A consolidated record for tracking defects and their current status.",
    icon: FiActivity,
  },
  {
    title: "Summary Report",
    description:
      "A concise testing summary covering execution, findings and recommendations.",
    icon: FiBarChart2,
  },
];

const processSteps = [
  {
    title: "Planning",
    description: "Define scope and testing objectives.",
    icon: FiTarget,
  },
  {
    title: "Scenario Design",
    description: "Identify important user workflows.",
    icon: FiLayers,
  },
  {
    title: "Test Case Writing",
    description: "Prepare detailed test coverage.",
    icon: FiFileText,
  },
  {
    title: "Execution",
    description: "Validate workflows and record results.",
    icon: FiCheckCircle,
  },
  {
    title: "Bug Reporting",
    description: "Document defects with clear evidence.",
    icon: FaBug,
  },
  {
    title: "Summary",
    description: "Communicate outcomes and findings.",
    icon: FiAward,
  },
];

const tools = [
  {
    title: "OrangeHRM",
    description: "Application under test",
    icon: FiMonitor,
    tone: "orange",
  },
  {
    title: "Jira",
    description: "Defect tracking",
    icon: FiPackage,
    tone: "blue",
  },
  {
    title: "Chrome DevTools",
    description: "Inspection and debugging",
    icon: FiChrome,
    tone: "cyan",
  },
  {
    title: "Spreadsheets",
    description: "QA documentation",
    icon: FiGrid,
    tone: "green",
  },
  {
    title: "Draw.io",
    description: "Process visualization",
    icon: FiLayers,
    tone: "purple",
  },
  {
    title: "Postman",
    description: "Planned API validation",
    icon: FiCode,
    tone: "red",
  },
];

const progressItems = [
  {
    label: "Planning",
    status: "Completed",
    tone: "complete",
  },
  {
    label: "Test Scenarios",
    status: "In Progress",
    tone: "progress",
  },
  {
    label: "Test Execution",
    status: "Upcoming",
    tone: "upcoming",
  },
  {
    label: "Bug Reports",
    status: "Upcoming",
    tone: "upcoming",
  },
  {
    label: "Summary Report",
    status: "Pending",
    tone: "pending",
  },
];

const milestones = [
  {
    number: "01",
    title: "Finalize testing scope",
    description:
      "Confirm the selected OrangeHRM modules and priority workflows.",
  },
  {
    number: "02",
    title: "Complete scenario design",
    description:
      "Prepare positive, negative and boundary-focused scenarios.",
  },
  {
    number: "03",
    title: "Write and review test cases",
    description:
      "Document actionable cases with clear expected outcomes.",
  },
  {
    number: "04",
    title: "Execute and report defects",
    description:
      "Run the cases and publish accurate defect documentation.",
  },
  {
    number: "05",
    title: "Publish the final QA summary",
    description:
      "Present scope, execution results, findings and recommendations.",
  },
];

const qaSkills = [
  "Manual Testing",
  "Test Design",
  "QA Documentation",
  "Defect Reporting",
  "Functional Testing",
  "Jira",
];

const metrics = [
  {
    value: "0+",
    label: "Test Scenarios",
    description: "Planned workflow coverage",
    icon: FiLayers,
    tone: "blue",
  },
  {
    value: "0+",
    label: "Test Cases",
    description: "Positive and negative cases",
    icon: FiCheckCircle,
    tone: "purple",
  },
  {
    value: "0+",
    label: "Bug Reports",
    description: "Defects discovered and logged",
    icon: FaBug,
    tone: "orange",
  },
  {
    value: "Core",
    label: "Module Coverage",
    description: "Selected business workflows",
    icon: FiTarget,
    tone: "green",
  },
];

const summaryItems = [
  {
    label: "Application",
    value: "OrangeHRM",
    icon: FiMonitor,
  },
  {
    label: "Testing Type",
    value: "Manual Functional Testing",
    icon: FiCheckCircle,
  },
  {
    label: "Status",
    value: "In Progress",
    icon: FiActivity,
  },
  {
    label: "Project Type",
    value: "Personal QA Practice",
    icon: FiBriefcase,
  },
];

const ProjectSectionHeading = ({ eyebrow, title, description }) => (
  <header className="case-section-heading">
    <p>{eyebrow}</p>
    <h2>{title}</h2>
    {description && <span>{description}</span>}
  </header>
);

const ProjectDetails = ({ project }) => {
  useEffect(() => {
    document.title = `${project.title} | Ehtisham Sajid`;
  }, [project.title]);

  const overview =
    project.sections.find((section) => section.title === "Overview")?.body ??
    project.description;

  return (
    <main className="case-study-page">
      <div
        className="case-study-decoration case-study-decoration--left"
        aria-hidden="true"
      />

      <div
        className="case-study-decoration case-study-decoration--right"
        aria-hidden="true"
      />

      <Container className="case-study-container">
        <nav className="case-study-back-nav" aria-label="Case-study navigation">
          <Link to="/" className="case-study-back-link">
            <FiArrowLeft aria-hidden="true" />
            <span>Back to Portfolio</span>
          </Link>
        </nav>

        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="case-study-hero"
        >
          <div className="case-study-badges">
            <span className="case-study-category-badge">
              <FiShield aria-hidden="true" />
              OrangeHRM Case Study
            </span>

            <span className="case-study-status-badge">
              <FiClock aria-hidden="true" />
              {project.status}
            </span>
          </div>

          <h1>OrangeHRM Manual QA Case Study</h1>

          <p>
            A structured manual testing project designed to demonstrate how I
            define testing scope, create practical QA artifacts, validate
            important OrangeHRM workflows and communicate software-quality
            findings clearly.
          </p>

          <div className="case-study-hero-actions">
            <a href="#case-overview" className="case-study-primary-action">
              Explore Case Study
              <FiArrowRight aria-hidden="true" />
            </a>

            <a href="#case-progress" className="case-study-secondary-action">
              View Current Progress
              <FiActivity aria-hidden="true" />
            </a>
          </div>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.65, ease: "easeOut" }}
          className="case-summary-panel"
          aria-label="Case-study summary"
        >
          {summaryItems.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.label} className="case-summary-item">
                <span className="case-summary-icon" aria-hidden="true">
                  <Icon />
                </span>

                <div>
                  <p>{item.label}</p>
                  <h2>{item.value}</h2>
                </div>
              </article>
            );
          })}
        </motion.section>

        <section className="case-metrics-grid" aria-label="Testing metrics">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.article
                key={metric.label}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  delay: index * 0.06,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className={`case-metric-card case-metric-card--${metric.tone}`}
              >
                <span className="case-metric-icon" aria-hidden="true">
                  <Icon />
                </span>

                <div>
                  <p className="case-metric-value">{metric.value}</p>
                  <h2>{metric.label}</h2>
                  <span>{metric.description}</span>
                </div>
              </motion.article>
            );
          })}
        </section>

        <div className="case-study-layout">
          <div className="case-study-content">
            <motion.section
              id="case-overview"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section case-overview-card"
            >
              <ProjectSectionHeading
                eyebrow="Overview"
                title="Project Overview"
                description="The objective and professional context behind this practice project."
              />

              <div className="case-overview-content">
                <span className="case-overview-icon" aria-hidden="true">
                  <FiBriefcase />
                </span>

                <div>
                  <p>{overview}</p>

                  <p>
                    The project follows a disciplined QA workflow rather than
                    random feature checking. Each selected workflow will be
                    analyzed, converted into structured scenarios and test
                    cases, executed carefully, and summarized through
                    recruiter-friendly QA documentation.
                  </p>
                </div>
              </div>

              <div className="case-objectives-grid">
                <article>
                  <FiTarget aria-hidden="true" />
                  <h3>Objective</h3>
                  <p>
                    Demonstrate structured manual testing and practical QA
                    thinking.
                  </p>
                </article>

                <article>
                  <FiSearch aria-hidden="true" />
                  <h3>Scope</h3>
                  <p>
                    Selected OrangeHRM workflows with positive and negative
                    coverage.
                  </p>
                </article>

                <article>
                  <FiShield aria-hidden="true" />
                  <h3>Methodology</h3>
                  <p>
                    Plan, design, execute, document defects and communicate
                    results.
                  </p>
                </article>
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Testing Scope"
                title="Workflows Selected for Validation"
                description="Core user journeys that will be covered during the manual testing cycle."
              />

              <div className="case-scope-grid">
                {testingScope.map((scope) => {
                  const Icon = scope.icon;

                  return (
                    <article key={scope.title} className="case-scope-card">
                      <span aria-hidden="true">
                        <Icon />
                      </span>

                      <div>
                        <h3>{scope.title}</h3>
                        <p>{scope.description}</p>
                      </div>

                      <FiCheck className="case-scope-check" aria-hidden="true" />
                    </article>
                  );
                })}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Deliverables"
                title="Professional QA Artifacts"
                description="Documents that demonstrate coverage, execution discipline and clear communication."
              />

              <div className="case-deliverables-grid">
                {deliverables.map((deliverable) => {
                  const Icon = deliverable.icon;

                  return (
                    <article
                      key={deliverable.title}
                      className="case-deliverable-card"
                    >
                      <span className="case-deliverable-icon" aria-hidden="true">
                        <Icon />
                      </span>

                      <h3>{deliverable.title}</h3>
                      <p>{deliverable.description}</p>

                      <span
                        className="case-deliverable-accent"
                        aria-hidden="true"
                      />
                    </article>
                  );
                })}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Process"
                title="Testing Workflow"
                description="A repeatable process for moving from scope definition to final reporting."
              />

              <ol className="case-process-timeline">
                {processSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <li key={step.title} className="case-process-step">
                      <div className="case-process-top">
                        <span className="case-process-icon" aria-hidden="true">
                          <Icon />
                        </span>

                        {index < processSteps.length - 1 && (
                          <span
                            className="case-process-connector"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <p>{String(index + 1).padStart(2, "0")}</p>
                      <h3>{step.title}</h3>
                      <span>{step.description}</span>
                    </li>
                  );
                })}
              </ol>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Tools"
                title="Testing Toolkit"
                description="Tools supporting execution, defect communication and documentation."
              />

              <div className="case-tools-grid">
                {tools.map((tool) => {
                  const Icon = tool.icon;

                  return (
                    <article
                      key={tool.title}
                      className={`case-tool-card case-tool-card--${tool.tone}`}
                    >
                      <span aria-hidden="true">
                        <Icon />
                      </span>

                      <h3>{tool.title}</h3>
                      <p>{tool.description}</p>
                    </article>
                  );
                })}
              </div>
            </motion.section>

            <motion.section
              id="case-progress"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Status"
                title="Current Progress"
                description="A transparent view of what is complete and what comes next."
              />

              <div className="case-progress-header">
                <div>
                  <strong>Overall progress</strong>
                  <span>Early documentation and scenario-design stage</span>
                </div>

                <p>25%</p>
              </div>

              <div
                className="case-progress-bar"
                role="progressbar"
                aria-label="OrangeHRM case-study progress"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="25"
              >
                <span />
              </div>

              <div className="case-progress-list">
                {progressItems.map((item) => (
                  <article
                    key={item.label}
                    className={`case-progress-item case-progress-item--${item.tone}`}
                  >
                    <span className="case-progress-indicator" aria-hidden="true">
                      {item.tone === "complete" ? (
                        <FiCheck />
                      ) : (
                        <FiCircle />
                      )}
                    </span>

                    <h3>{item.label}</h3>
                    <p>{item.status}</p>
                  </article>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="case-content-section"
            >
              <ProjectSectionHeading
                eyebrow="Roadmap"
                title="Next Milestones"
                description="The planned path toward a complete, review-ready QA case study."
              />

              <ol className="case-milestones-list">
                {milestones.map((milestone) => (
                  <li key={milestone.number} className="case-milestone-card">
                    <span>{milestone.number}</span>

                    <div>
                      <h3>{milestone.title}</h3>
                      <p>{milestone.description}</p>
                    </div>

                    <FiChevronRight aria-hidden="true" />
                  </li>
                ))}
              </ol>
            </motion.section>
          </div>

          <aside className="case-study-sidebar">
            <div className="case-sidebar-card case-sidebar-status">
              <div className="case-sidebar-heading">
                <span aria-hidden="true">
                  <FiActivity />
                </span>

                <div>
                  <p>Project Status</p>
                  <h2>In Progress</h2>
                </div>
              </div>

              <div className="case-sidebar-progress">
                <div>
                  <span>Current progress</span>
                  <strong>25%</strong>
                </div>

                <div
                  className="case-sidebar-progress-bar"
                  role="progressbar"
                  aria-label="Project completion"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow="25"
                >
                  <span />
                </div>
              </div>

              <dl className="case-sidebar-meta">
                <div>
                  <dt>Current phase</dt>
                  <dd>Scenario design</dd>
                </div>

                <div>
                  <dt>Estimated completion</dt>
                  <dd>To be confirmed</dd>
                </div>

                <div>
                  <dt>Testing approach</dt>
                  <dd>Manual functional</dd>
                </div>
              </dl>
            </div>

            <div className="case-sidebar-card">
              <div className="case-sidebar-section-title">
                <FiAward aria-hidden="true" />
                <h2>QA Skills Used</h2>
              </div>

              <div className="case-sidebar-skills">
                {qaSkills.map((skill) => (
                  <span key={skill}>
                    <FiCheck aria-hidden="true" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="case-sidebar-card">
              <div className="case-sidebar-section-title">
                <FiExternalLink aria-hidden="true" />
                <h2>Project Actions</h2>
              </div>

              <div className="case-sidebar-actions">
                <Link to="/" className="case-sidebar-action-primary">
                  <FiArrowLeft aria-hidden="true" />
                  Back to Portfolio
                </Link>

                <a
                  href="https://github.com/EhtishamSajid/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-sidebar-action-secondary"
                >
                  <FiGithub aria-hidden="true" />
                  View GitHub
                  <FiExternalLink aria-hidden="true" />
                </a>

                <button
                  type="button"
                  disabled
                  className="case-sidebar-action-disabled"
                  title="Documentation will be available after completion"
                >
                  <FiDownload aria-hidden="true" />
                  Documentation Soon
                </button>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </main>
  );
};

export default ProjectDetails;