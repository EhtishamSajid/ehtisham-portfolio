import { FiAward } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const CertificateCard = ({ certificate }) => {
  return (
    <GlassCard className="h-full p-5 sm:p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <FiAward className="h-6 w-6" />
      </div>

      <h3 className="mt-5 text-lg font-bold leading-tight text-slate-950">
        {certificate.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {certificate.issuer}
      </p>
    </GlassCard>
  );
};

export default CertificateCard;
