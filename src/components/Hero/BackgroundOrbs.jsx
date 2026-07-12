import { motion } from "framer-motion";

const BackgroundOrbs = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.14),transparent_34rem)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.22),transparent_34rem)]"
      />

      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.045)_1px,transparent_1px)] [background-size:36px_36px] dark:opacity-40 dark:[background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)]" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950" />
    </div>
  );
};

export default BackgroundOrbs;
