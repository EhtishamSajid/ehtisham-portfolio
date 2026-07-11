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
      whileHover={hover ? { y: -4 } : undefined}
      transition={transition ?? { duration: 0.25, ease: "easeOut" }}
      {...motionProps}
      className={`rounded-lg border border-slate-200/80 bg-white/85 shadow-[var(--shadow-soft)] backdrop-blur-xl transition-colors duration-300 hover:border-blue-200 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
