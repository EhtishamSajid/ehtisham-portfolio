import { motion } from "framer-motion";

const orbs = [
  {
    size: "w-72 h-72",
    color: "bg-blue-400/20",
    position: "-top-20 -left-16",
    duration: 10,
  },
  {
    size: "w-96 h-96",
    color: "bg-cyan-300/20",
    position: "top-40 -right-24",
    duration: 14,
  },
  {
    size: "w-80 h-80",
    color: "bg-sky-400/20",
    position: "bottom-0 left-1/3",
    duration: 12,
  },
];

const BackgroundOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          className={`absolute ${orb.size} ${orb.position} ${orb.color} rounded-full blur-3xl`}
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundOrbs;