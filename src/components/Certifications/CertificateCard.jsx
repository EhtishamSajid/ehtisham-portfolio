import { FiAward } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const CertificateCard = ({ certificate }) => {
  return (
    <GlassCard className="flex h-full min-h-[244px] min-w-0 flex-col p-6 sm:p-7">
      <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 ring-1 ring-blue-100 dark:from-blue-500/15 dark:to-sky-300/10 dark:text-sky-300 dark:ring-sky-300/20 sm:h-14 sm:w-14">
        <FiAward className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="mt-5 break-words text-[1.3rem] font-black leading-tight text-slate-950 dark:text-white sm:mt-6 sm:text-[1.45rem]">
        {certificate.title}
      </h3>

      <p className="mt-4 text-base font-extrabold leading-7 text-slate-600 dark:text-slate-300">
        {certificate.issuer}
      </p>

      <p className="mt-auto pt-5 text-[14px] font-extrabold text-blue-600 dark:text-sky-300 sm:text-[15px]">
        {certificate.date}
      </p>
    </GlassCard>
  );
};

export default CertificateCard;
