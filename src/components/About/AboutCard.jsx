import { FiCheckCircle } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const AboutCard = ({ item }) => {
  return (
    <GlassCard className="h-full p-5 sm:p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
        <FiCheckCircle className="h-5 w-5" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </GlassCard>
  );
};

export default AboutCard;
