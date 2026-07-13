import {
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiCode,
  FiExternalLink,
  FiLayers,
  FiMoreVertical,
  FiTool,
} from "react-icons/fi";

const certificateFallbacks = {
  "Test Case Management with TestWorthy": {
    category: "QA Certification",
    skills: [
      {
        name: "Test Case Design",
        icon: FiCheckCircle,
      },
      {
        name: "Test Management",
        icon: FiCheckCircle,
      },
      {
        name: "QA Documentation",
        icon: FiCheckCircle,
      },
    ],
    tone: "blue",
  },

  "QA Fundamentals": {
    category: "QA Certification",
    skills: [
      {
        name: "Manual Testing",
        icon: FiTool,
      },
      {
        name: "STLC",
        icon: FiLayers,
      },
      {
        name: "Defect Reporting",
        icon: FiCheckCircle,
      },
    ],
    tone: "royal",
  },

  "Introduction to Software Testing - Level 1": {
    category: "QA Certification",
    skills: [
      {
        name: "Testing Fundamentals",
        icon: FiBookOpen,
      },
      {
        name: "Test Techniques",
        icon: FiCheckCircle,
      },
      {
        name: "Quality Concepts",
        icon: FiAward,
      },
    ],
    tone: "purple",
  },

  "HTML, CSS & JavaScript": {
    category: "Technical Certification",
    skills: [
      {
        name: "HTML",
        icon: FiCode,
      },
      {
        name: "CSS",
        icon: FiCode,
      },
      {
        name: "JavaScript Basics",
        icon: FiCode,
      },
    ],
    tone: "green",
  },
};

const fallbackTones = ["blue", "royal", "purple", "green"];

const CertificateCard = ({ certificate, index = 0 }) => {
  const fallback = certificateFallbacks[certificate.title] ?? {
    category: "QA Certification",
    skills: [],
    tone: fallbackTones[index % fallbackTones.length],
  };

  const category = certificate.category ?? fallback.category;
  const tone = certificate.tone ?? fallback.tone;

  const skills =
    certificate.skills?.map((skill) =>
      typeof skill === "string"
        ? {
            name: skill,
            icon: FiCheckCircle,
          }
        : skill
    ) ?? fallback.skills;

  const previewHref =
    certificate.previewUrl ??
    certificate.url ??
    certificate.link ??
    null;

  return (
    <article
    style={{
        animationDelay: `${index * 120}ms`,
      }}
      className={`certificate-card certificate-card-${tone}`}
      aria-labelledby={`certificate-title-${index}`}
    >
      <span className="certificate-bottom-accent" aria-hidden="true" />

      <div className="certificate-top-row">
        <span className="certificate-award-icon" aria-hidden="true">
          <FiAward />
        </span>

        <span className="certificate-menu-icon" aria-hidden="true">
          <FiMoreVertical />
        </span>
      </div>

      <div className="certificate-content">
        <p className="certificate-category">{category}</p>

        <h3 id={`certificate-title-${index}`}>
          {certificate.title}
        </h3>

        <p className="certificate-issuer">{certificate.issuer}</p>

        {skills.length > 0 && (
          <div
            className="certificate-skills"
            aria-label={`Skills covered by ${certificate.title}`}
          >
            {skills.map((skill) => {
              const SkillIcon = skill.icon ?? FiCheckCircle;

              return (
                <div
                  key={skill.name}
                  className="certificate-skill-pill"
                >
                  <span
                    className="certificate-skill-icon"
                    aria-hidden="true"
                  >
                    <SkillIcon />
                  </span>

                  <span>{skill.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <footer className="certificate-footer">
        <div className="certificate-date">
          <FiCalendar aria-hidden="true" />
          <span>{certificate.date}</span>
        </div>

        {previewHref ? (
          <a
            href={previewHref}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-preview"
            aria-label={`Preview ${certificate.title} certificate`}
          >
            <span>Preview</span>
            <FiExternalLink aria-hidden="true" />
          </a>
        ) : (
          <span
            className="certificate-preview certificate-preview-disabled"
            aria-label={`Preview for ${certificate.title} is not available`}
          >
            <span>Preview</span>
            <FiExternalLink aria-hidden="true" />
          </span>
        )}
      </footer>
    </article>
  );
};

export default CertificateCard;