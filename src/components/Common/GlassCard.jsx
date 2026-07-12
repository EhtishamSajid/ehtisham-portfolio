import { motion } from "framer-motion";

const GlassCard = ({
  children,
  className = "",
  hover = true,
  transition,
  ...motionProps
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.006 } : undefined}
      transition={transition ?? { duration: 0.25, ease: "easeOut" }}
      {...motionProps}
      className={`rounded-[var(--radius-card)] border border-white/70 bg-white/82 shadow-[var(--shadow-soft)] backdrop-blur-2xl transition-all duration-300 hover:border-blue-200/80 hover:shadow-[var(--shadow-card-hover)] dark:border-white/10 dark:bg-white/[0.07] dark:hover:border-sky-300/35 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
