import { motion } from "framer-motion";
import { FiBriefcase, FiTarget } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa";

const timelineStyles = [
  {
    accent: "blue",
    side: "left",
    icon: FaGraduationCap,
  },
  {
    accent: "purple",
    side: "right",
    icon: FiBriefcase,
  },
  {
    accent: "green",
    side: "left",
    icon: FiTarget,
  },
];

const TimelineItem = ({ item, index }) => {
  const style =
    timelineStyles[index] ??
    timelineStyles[index % timelineStyles.length];

  const Icon = style.icon;

  return (
    <motion.li
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`journey-item journey-item--${style.side} journey-item--${style.accent}`}
    >
      <div className="journey-node" aria-hidden="true">
        <span />
      </div>

      <div className="journey-connector" aria-hidden="true" />

      <article className="journey-card">
        <span className="journey-card-accent" aria-hidden="true" />

        <div className="journey-icon-box" aria-hidden="true">
          <Icon />
        </div>

        <div className="journey-card-content">
          <p className="journey-card-eyebrow">
            <span aria-hidden="true" />
            {item.year}
          </p>

          <h3>{item.title}</h3>

          <p className="journey-card-subtitle">
            {item.company}
          </p>

          <p className="journey-card-description">
            {item.description}
          </p>
        </div>
      </article>
    </motion.li>
  );
};

export default TimelineItem;