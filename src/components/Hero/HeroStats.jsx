import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";

const stats = [
  {
    number: "1",
    label: "QA Internship",
  },
  {
    number: "6+",
    label: "Certificates",
  },
  {
    number: "5",
    label: "Testing Projects",
  },
  {
    number: "2026",
    label: "Graduate",
  },
];

const HeroStats = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4"
    >
      {stats.map((item) => (
        <GlassCard key={item.label} className="p-5 text-center sm:p-6">
          <h3 className="text-3xl font-black text-blue-600 sm:text-4xl">
            {item.number}
          </h3>

          <p className="mt-2 text-sm font-semibold text-slate-600">
            {item.label}
          </p>
        </GlassCard>
      ))}
    </motion.div>
  );
};

export default HeroStats;
