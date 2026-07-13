import { motion } from "framer-motion";

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const isLeft = align === "left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.58,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        flex
        w-full
        flex-col
        ${isLeft ? "items-start text-left" : "items-center text-center"}
        ${isLeft ? "" : "mx-auto"}
        mb-10
        lg:mb-12
        ${className}
      `}
    >
      <div
        className={`
          flex
          items-center
          gap-4
          ${isLeft ? "" : "justify-center"}
        `}
      >
        {!isLeft && (
          <span
            aria-hidden="true"
            className="h-px w-10 bg-gradient-to-r from-transparent to-blue-500 sm:w-16"
          />
        )}

        <p className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 dark:text-sky-300 sm:text-[15px]">
          {subtitle}
        </p>

        {!isLeft && (
          <span
            aria-hidden="true"
            className="h-px w-10 bg-gradient-to-l from-transparent to-sky-500 sm:w-16"
          />
        )}
      </div>

      <h2
        className={`
          mt-4
          max-w-[920px]
          text-[2.35rem]
          font-black
          leading-[1.05]
          tracking-[-0.035em]
          text-slate-950
          dark:text-white
          sm:text-[3rem]
          lg:text-[3.55rem]
          ${isLeft ? "text-left" : "text-center"}
        `}
      >
        {title}
      </h2>

      <div
        aria-hidden="true"
        className="mt-5 h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400"
      />

      {description && (
        <p
          className={`
            mt-5
            max-w-[820px]
            text-[17px]
            leading-8
            text-slate-600
            dark:text-slate-300
            sm:text-lg
            lg:text-xl
            lg:leading-9
            ${isLeft ? "text-left" : "text-center"}
          `}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;