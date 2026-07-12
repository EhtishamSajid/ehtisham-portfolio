import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";

const stats = [
  {
    number: "QA",
    label: "Manual + API Focus",
  },
  {
    number: "4",
    label: "QA Certifications",
  },
  {
    number: "2026",
    label: "BSSE Graduate",
  },
  {
    number: "Open",
    label: "Junior QA Roles",
  },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4"
      aria-label="Portfolio highlights"
    >
      {stats.map((item) => (
        <GlassCard key={item.label} className="border-blue-100/80 bg-white/88 p-5 text-center dark:border-sky-300/20 dark:bg-white/[0.095] sm:p-7">
          <p className="text-[40px] font-black leading-none text-blue-600 dark:text-sky-200 sm:text-[50px]">
            {item.number}
          </p>

          <p className="mt-3 text-base font-extrabold text-slate-600 dark:text-slate-100 sm:text-lg">
            {item.label}
          </p>
        </GlassCard>
      ))}
    </motion.div>
  );
};

export default HeroStats;
