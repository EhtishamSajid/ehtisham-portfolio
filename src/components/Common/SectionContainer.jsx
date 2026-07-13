import { motion } from "framer-motion";

import Container from "./Container";

const variants = {
  white: "bg-transparent",
  muted: "bg-transparent",
  soft: "bg-transparent",
  dark: "bg-slate-950 text-white",
  transparent: "bg-transparent",
};

const SectionContainer = ({
  id,
  children,
  className = "",
  containerClassName = "",
  variant = "white",
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.62,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`portfolio-section relative overflow-hidden ${variants[variant]} ${className}`}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </motion.section>
  );
};

export default SectionContainer;