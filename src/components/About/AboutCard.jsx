import { motion } from "framer-motion";

const AboutCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="rounded-3xl border border-white/30 bg-white/70 p-6 shadow-xl backdrop-blur-xl"
    >
      <h3 className="text-xl font-bold text-slate-900">
        {item.title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
};

export default AboutCard;