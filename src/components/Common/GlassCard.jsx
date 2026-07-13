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
      whileHover={
        hover
          ? {
              y: -10,
              scale: 1.015,
            }
          : undefined
      }
      transition={
        transition ?? {
          duration: 0.35,
          ease: "easeOut",
        }
      }
      {...motionProps}
      className={`
        group
        relative
        overflow-hidden
        rounded-[28px]
        border
        border-slate-200/70
        bg-white/92
        shadow-[0_18px_45px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
        transition-all
        duration-300

        hover:border-blue-300
        hover:shadow-[0_28px_70px_rgba(37,99,235,0.16)]

        dark:border-white/10
        dark:bg-slate-900/75
        dark:hover:border-sky-300/30

        ${className}
      `}
    >
      {/* Top gradient line */}
      <span
        className="
          absolute
          left-0
          top-0
          h-1
          w-full
          origin-left
          scale-x-0
          bg-gradient-to-r
          from-blue-600
          via-sky-500
          to-cyan-400
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      {/* Soft blue glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-blue-500/5
          blur-3xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;