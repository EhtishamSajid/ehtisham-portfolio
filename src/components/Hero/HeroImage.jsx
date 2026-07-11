import { motion } from "framer-motion";
import { FiMapPin, FiBriefcase, FiCheckCircle } from "react-icons/fi";
import profile from "../../assets/images/profile.jpg";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="flex justify-center"
    >
      <div className="relative">

        {/* Background Glow */}
        <div className="absolute inset-0 rounded-[32px] bg-blue-500/20 blur-3xl scale-110"></div>

        {/* Glass Card */}
        <div className="relative w-[360px] rounded-[32px] border border-white/30 bg-white/70 p-6 shadow-2xl backdrop-blur-xl">

          <img
            src={profile}
            alt="Ehtisham Sajid"
            className="mx-auto h-64 w-64 rounded-3xl object-cover shadow-xl"
          />

          <div className="mt-6 text-center">

            <h3 className="text-2xl font-bold text-slate-900">
              Ehtisham Sajid
            </h3>

            <p className="mt-2 text-blue-600 font-semibold">
              Software Quality Assurance Engineer
            </p>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">
              <FiMapPin className="text-blue-600" />
              <span className="text-slate-700">
                Islamabad, Pakistan
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiBriefcase className="text-blue-600" />
              <span className="text-slate-700">
                QA Intern – Developers Hub
              </span>
            </div>

            <div className="flex items-center gap-3">
              <FiCheckCircle className="text-green-600" />
              <span className="text-slate-700">
                Open for Full-Time Opportunities
              </span>
            </div>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default HeroImage;