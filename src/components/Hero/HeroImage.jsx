import { motion } from "framer-motion";
import {
  FiBarChart2,
  FiBriefcase,
  FiCheckCircle,
  FiMapPin,
  FiShield,
  FiTarget,
} from "react-icons/fi";
import { FaBug } from "react-icons/fa";

import profile from "../../assets/images/profile.jpg";

const profileDetails = [
  {
    icon: FiMapPin,
    label: "Islamabad, Pakistan",
    tone: "blue",
  },
  {
    icon: FiBriefcase,
    label: "QA Intern • Developers Hub",
    tone: "purple",
  },
  {
    icon: FiCheckCircle,
    label: "Open for Junior QA Roles",
    tone: "green",
  },
];

const floatingIcons = [
  {
    icon: FiShield,
    position: "top-left",
    tone: "blue",
  },
  {
    icon: FiBarChart2,
    position: "top-right",
    tone: "purple",
  },
  {
    icon: FaBug,
    position: "bottom-right",
    tone: "orange",
  },
  {
    icon: FiTarget,
    position: "bottom-left",
    tone: "green",
  },
];

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 38 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hero-profile-area"
    >
      <div className="hero-image-stage">
        {/* Keep this wrapper static so translateX(-50%) is never replaced */}
        <div className="hero-image-frame">
          {/* Apply the hover scale only to the inner image circle */}
          <motion.div
            className="hero-image-ring"
            whileHover={{ scale: 1.025 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <img
              src={profile}
              alt="Portrait of Ehtisham Sajid"
              width="640"
              height="640"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.span
              key={item.position}
              className={`hero-floating-icon hero-floating-icon--${item.position} hero-floating-icon--${item.tone}`}
              animate={{
                y: [0, index % 2 === 0 ? -7 : 7, 0],
              }}
              transition={{
                duration: 4.5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            >
              <Icon />
            </motion.span>
          );
        })}
      </div>

      <motion.article
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="hero-profile-card"
      >
        <header className="hero-profile-header">
          <h2>Ehtisham Sajid</h2>
          <p>Software Quality Assurance Engineer</p>
        </header>

        <div className="hero-profile-details">
          {profileDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className={`hero-profile-row hero-profile-row--${detail.tone}`}
              >
                <span
                  className="hero-profile-row-icon"
                  aria-hidden="true"
                >
                  <Icon />
                </span>

                <span>{detail.label}</span>
              </div>
            );
          })}
        </div>
      </motion.article>
    </motion.div>
  );
};

export default HeroImage;