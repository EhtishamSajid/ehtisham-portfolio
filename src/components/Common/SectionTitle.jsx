import { motion } from "framer-motion";

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-10 flex max-w-4xl flex-col sm:mb-14 lg:mb-16 ${alignment} ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
    >
      <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-sky-300 sm:text-[14px]">
        {subtitle}
      </p>

      <h2 className="max-w-4xl text-[2.15rem] font-black leading-[1.08] text-slate-950 dark:text-white sm:text-5xl lg:text-[54px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-[20px] sm:leading-9">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
