import { motion } from "framer-motion";

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl"
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="text-3xl text-blue-600" />
      </div>

      <h3 className="text-xl font-bold text-slate-900">
        {tool.name}
      </h3>

      <p className="mt-3 text-slate-600">
        {tool.description}
      </p>
    </motion.div>
  );
};

export default ToolCard;