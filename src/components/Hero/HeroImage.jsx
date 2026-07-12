import { motion } from "framer-motion";
import { FiBriefcase, FiCheckCircle, FiMapPin } from "react-icons/fi";
import profile from "../../assets/images/profile.jpg";

const profileDetails = [
  {
    icon: FiMapPin,
    label: "Islamabad, Pakistan",
    tone: "text-blue-600",
  },
  {
    icon: FiBriefcase,
    label: "QA Intern - Developers Hub",
    tone: "text-blue-600",
  },
  {
    icon: FiCheckCircle,
    label: "Open for Full-Time Opportunities",
    tone: "text-green-600",
  },
];

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="flex min-w-0 justify-center overflow-hidden lg:justify-end lg:overflow-visible"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-[21rem] rounded-[1.75rem] border border-white/70 bg-white/78 p-3 shadow-[0_26px_76px_rgba(37,99,235,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.075] dark:shadow-[0_28px_76px_rgba(0,0,0,0.34)] sm:max-w-md sm:rounded-[2rem] sm:p-5"
      >
        <div className="absolute -inset-px -z-10 rounded-[inherit] bg-gradient-to-br from-blue-500/20 via-transparent to-sky-300/20 blur-xl" />

        <div className="overflow-hidden rounded-[1.15rem] bg-slate-100 ring-1 ring-slate-200/70 dark:bg-slate-800 dark:ring-white/10 sm:rounded-[1.35rem]">
          <img
            src={profile}
            alt="Portrait of Ehtisham Sajid"
            width="640"
            height="640"
            decoding="async"
            fetchPriority="high"
            className="h-72 w-full object-cover sm:h-[24rem] lg:h-[25rem]"
            style={{ objectPosition: "center 18%" }}
          />
        </div>

        <div className="mt-5 text-center sm:mt-6">
          <h2 className="text-[1.6rem] font-black leading-tight text-slate-950 dark:text-white">
            Ehtisham Sajid
          </h2>

          <p className="mt-2 text-[15px] font-extrabold text-blue-600 dark:text-sky-300 sm:text-base">
            Software Quality Assurance Engineer
          </p>
        </div>

        <div className="mt-5 space-y-2.5 sm:mt-6 sm:space-y-3">
          {profileDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/76 p-3 shadow-[0_8px_22px_rgba(15,23,42,0.04)] backdrop-blur dark:border-white/10 dark:bg-slate-950/34 sm:p-3.5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-50 dark:bg-white/[0.06]">
                  <Icon className={`h-4 w-4 ${detail.tone}`} aria-hidden="true" />
                </span>

                <span className="min-w-0 text-[14px] font-extrabold leading-6 text-slate-700 dark:text-slate-200 sm:text-[15px]">
                  {detail.label}
                </span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;
