import { FiAward } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const CertificateCard = ({ certificate }) => {
  return (
    <GlassCard className="h-full min-w-0 p-5 sm:p-6">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
        <FiAward className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mt-5 break-words text-lg font-bold leading-tight text-slate-950 dark:text-white">
        {certificate.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {certificate.issuer}
      </p>

      <p className="mt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
        {certificate.date}
      </p>
    </GlassCard>
  );
};

export default CertificateCard;
