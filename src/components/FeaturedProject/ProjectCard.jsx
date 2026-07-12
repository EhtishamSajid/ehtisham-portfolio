import { Link } from "react-router-dom";
import { FiArrowRight, FiCheckCircle, FiClock, FiLayers } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className="group/project min-w-0 overflow-hidden p-0">
      <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative min-h-[240px] overflow-hidden bg-gradient-to-br from-blue-700 via-blue-500 to-sky-400 p-6 text-white sm:min-h-[310px] sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.34),transparent_13rem),radial-gradient(circle_at_82%_74%,rgba(255,255,255,0.18),transparent_14rem)]" />
          <div className="absolute inset-x-6 bottom-6 top-20 rounded-[1.5rem] border border-white/20 bg-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-sm transition-transform duration-500 group-hover/project:-translate-y-2" />
          <div className="absolute bottom-10 left-8 right-8 h-20 rounded-2xl border border-white/20 bg-white/14 backdrop-blur-md sm:bottom-12 sm:left-12 sm:right-12" />
          <div className="absolute bottom-[4.75rem] left-12 h-3 w-24 rounded-full bg-white/45 sm:bottom-20 sm:left-16 sm:w-28" />
          <div className="absolute bottom-[4.75rem] left-40 h-3 w-12 rounded-full bg-white/24 sm:bottom-20 sm:left-48 sm:w-16" />
          <div className="absolute bottom-14 left-12 h-2 w-36 rounded-full bg-white/22 sm:bottom-16 sm:left-16 sm:w-44" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/16 px-3 py-1.5 text-[14px] font-extrabold text-white backdrop-blur">
              <FiClock className="h-4 w-4 shrink-0" aria-hidden="true" />
              {project.badge ?? project.status}
            </span>

            <div className="mt-20 sm:mt-24">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/16 backdrop-blur">
                <FiLayers className="h-7 w-7" aria-hidden="true" />
              </div>
              <p className="mt-4 max-w-xs text-lg font-black leading-tight">
                {project.category}
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 p-6 sm:p-8">
          <h3 className="break-words text-[1.85rem] font-black leading-tight text-slate-950 dark:text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-3 text-base font-extrabold text-blue-600 dark:text-sky-300 sm:text-lg">
            {project.category}
          </p>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-lg">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 px-3.5 py-2 text-[14px] font-extrabold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200 sm:text-[15px]"
              >
                <FiCheckCircle className="h-4 w-4 text-blue-600 dark:text-sky-300" aria-hidden="true" />
                {technology}
              </span>
            ))}
          </div>

          {project.path && (
            <div className="mt-8">
              <Link
                to={project.path}
              className="group/link inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-blue-500/80 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 px-6 py-3 text-[15px] font-extrabold leading-none text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(37,99,235,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-sky-300/40"
              >
                View case study
                <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
