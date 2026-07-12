import { FiCheckCircle } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const AboutCard = ({ item }) => {
  return (
    <GlassCard className="flex h-full min-h-[220px] flex-col p-6 sm:p-7">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 ring-1 ring-blue-100 dark:from-blue-500/15 dark:to-sky-300/10 dark:text-sky-300 dark:ring-sky-300/20">
        <FiCheckCircle className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-[1.35rem] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">
        {item.title}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {item.description}
      </p>
    </GlassCard>
  );
};

export default AboutCard;
