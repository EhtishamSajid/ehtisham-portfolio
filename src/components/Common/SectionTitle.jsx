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
      className={`mb-10 flex max-w-3xl flex-col sm:mb-12 ${alignment} ${
        align === "center" ? "mx-auto" : ""
      } ${className}`}
    >
      <p className="mb-3 text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
