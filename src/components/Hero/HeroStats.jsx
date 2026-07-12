import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";

const stats = [
  {
    number: "1",
    label: "QA Internship",
  },
  {
    number: "3",
    label: "QA Certifications",
  },
  {
    number: "BSSE",
    label: "2026 Graduate",
  },
  {
    number: "Open",
    label: "To QA Opportunities",
  },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
      aria-label="Portfolio highlights"
    >
      {stats.map((item) => (
        <GlassCard key={item.label} className="p-5 text-center sm:p-6">
          <p className="text-3xl font-black text-blue-600 dark:text-blue-400 sm:text-4xl">
            {item.number}
          </p>

          <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
            {item.label}
          </p>
        </GlassCard>
      ))}
    </motion.div>
  );
};

export default HeroStats;
