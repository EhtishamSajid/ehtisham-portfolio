import { FiCheckCircle } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const AboutCard = ({ item }) => {
  return (
    <GlassCard className="h-full p-5 sm:p-6">
      <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <FiCheckCircle className="h-5 w-5" />
      </div>

      <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {item.description}
      </p>
    </GlassCard>
  );
};

export default AboutCard;
