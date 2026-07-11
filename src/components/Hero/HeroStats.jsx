import { motion } from "framer-motion";

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
      className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((item) => (
        <div
          key={item.label}
          className="rounded-3xl border border-white/30 bg-white/70 p-8 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <h3 className="text-4xl font-black text-blue-600">
            {item.number}
          </h3>

          <p className="mt-3 text-slate-600 font-medium">
            {item.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;