import { motion } from "framer-motion";
import {
  FiAward,
  FiBriefcase,
  FiTarget,
} from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const stats = [
  {
    icon: FiBriefcase,
    number: "1",
    title: "QA Internship",
    description: "Hands-on experience in real projects",
    tone: "blue",
  },
  {
    icon: FiAward,
    number: "3",
    title: "QA Certifications",
    description: "Continuous learning in QA & Testing",
    tone: "purple",
  },
  {
    icon: FaGraduationCap,
    number: "2026",
    title: "BS Software Engineering",
    description: "Riphah International University",
    tone: "blue",
  },
  {
    icon: FiTarget,
    number: "Open",
    title: "Junior QA Opportunities",
    description: "Actively seeking roles to contribute & grow",
    tone: "green",
  },
];

const HeroStats = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.35,
        duration: 0.7,
        ease: "easeOut",
      }}
      className="hero-stats-card"
      aria-label="Portfolio highlights"
    >
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <article
            key={stat.title}
            className={`hero-stat hero-stat--${stat.tone}`}
          >
            <span className="hero-stat-icon" aria-hidden="true">
              <Icon />
            </span>

            <div className="hero-stat-content">
              <p className="hero-stat-number">{stat.number}</p>
              <h3>{stat.title}</h3>
              <p className="hero-stat-description">
                {stat.description}
              </p>
              <span className="hero-stat-accent" aria-hidden="true" />
            </div>
          </article>
        );
      })}
    </motion.section>
  );
};

export default HeroStats;