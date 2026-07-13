import { motion } from "framer-motion";

const fallbackAccents = ["blue", "purple", "green", "orange"];

const AboutCard = ({ item, index = 0 }) => {
  const Icon = item.icon;
  const accent =
    item.accent ?? fallbackAccents[index % fallbackAccents.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: "easeOut",
      }}
      className={`about-skill-card about-skill-card--${accent}`}
    >
      <span className="about-skill-bottom-accent" aria-hidden="true" />

      <div className="about-skill-icon-wrap">
        <span className="about-skill-icon-glow" aria-hidden="true" />

        <span className="about-skill-icon" aria-hidden="true">
          <Icon />
        </span>
      </div>

      <h3>{item.title}</h3>

      <span className="about-skill-underline" aria-hidden="true" />

      <p>{item.description}</p>
    </motion.article>
  );
};

export default AboutCard;