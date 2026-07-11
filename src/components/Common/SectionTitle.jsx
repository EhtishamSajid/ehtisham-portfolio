import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <p className="text-blue-600 font-semibold uppercase tracking-[4px]">
        {subtitle}
      </p>

      <h2 className="mt-3 text-4xl md:text-5xl font-black text-slate-900">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;