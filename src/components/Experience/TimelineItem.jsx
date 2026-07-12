import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-12 lg:grid lg:grid-cols-[1fr_4rem_1fr] lg:gap-0 lg:pl-0"
    >
      <span
        className="absolute left-[9px] top-6 z-10 h-4 w-4 rounded-full border-4 border-white bg-blue-600 shadow-[0_0_0_4px_rgba(37,99,235,0.12)] dark:border-slate-950 lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />

      <GlassCard
        hover={false}
        className={`p-5 sm:p-6 ${
          isLeft
            ? "lg:col-start-1 lg:text-right"
            : "lg:col-start-3 lg:text-left"
        }`}
      >
        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
          {item.year}
        </span>

        <h3 className="mt-2 text-xl font-bold leading-tight text-slate-950 dark:text-white sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-1 text-base font-semibold text-slate-500 dark:text-slate-400">
          {item.company}
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

export default TimelineItem;
