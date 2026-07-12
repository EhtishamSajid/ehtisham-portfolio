import { motion } from "framer-motion";
import GlassCard from "../Common/GlassCard";

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.06 }}
      className="relative pl-12 lg:grid lg:grid-cols-[1fr_5rem_1fr] lg:gap-0 lg:pl-0"
    >
      <span
        className="absolute left-[7px] top-7 z-10 h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-sky-400 shadow-[0_0_0_7px_rgba(37,99,235,0.12)] dark:border-[#0b1120] dark:shadow-[0_0_0_7px_rgba(56,189,248,0.12)] lg:left-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />

      <GlassCard
        hover={false}
        className={`p-6 sm:p-7 ${
          isLeft
            ? "lg:col-start-1 lg:text-right"
            : "lg:col-start-3 lg:text-left"
        }`}
      >
        <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/84 px-3 py-1.5 text-[14px] font-extrabold text-blue-700 dark:border-sky-300/25 dark:bg-sky-300/12 dark:text-sky-200">
          {item.year}
        </span>

        <h3 className="mt-4 text-[1.35rem] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-2 text-base font-extrabold text-slate-500 dark:text-slate-400 sm:text-lg">
          {item.company}
        </p>

        <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300 sm:mt-5">
          {item.description}
        </p>
      </GlassCard>
    </motion.div>
  );
};

export default TimelineItem;
