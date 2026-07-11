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
      className="flex justify-center lg:justify-end"
    >
      <div className="w-full max-w-sm rounded-lg border border-slate-200/80 bg-white/85 p-4 shadow-[var(--shadow-soft)] backdrop-blur-xl sm:p-5">
        <div className="overflow-hidden rounded-lg bg-slate-100">
          <img
            src={profile}
            alt="Ehtisham Sajid"
            className="h-72 w-full object-cover sm:h-80"
            style={{ objectPosition: "center 18%" }}
          />
        </div>

        <div className="mt-5 text-center">
          <h3 className="text-2xl font-bold text-slate-950">Ehtisham Sajid</h3>

          <p className="mt-2 font-semibold text-blue-600">
            Software Quality Assurance Engineer
          </p>
        </div>

        <div className="mt-5 space-y-3">
          {profileDetails.map((detail) => {
            const Icon = detail.icon;

            return (
              <div
                key={detail.label}
                className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white/70 p-3"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <Icon className={`h-4 w-4 ${detail.tone}`} />
                </span>

                <span className="text-sm font-medium leading-6 text-slate-700">
                  {detail.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default HeroImage;
