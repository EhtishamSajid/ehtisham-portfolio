import { Link } from "react-router-dom";
import { FiClock, FiLayers } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className="min-w-0 p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700">
            <FiClock className="h-4 w-4 shrink-0" aria-hidden="true" />
            {project.badge ?? project.status}
          </span>

          <h3 className="mt-5 break-words text-xl font-bold leading-tight text-slate-950 dark:text-white sm:text-2xl">
            {project.title}
          </h3>

          <p className="mt-2 font-semibold text-blue-600 dark:text-blue-400">
            {project.category}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
          <FiLayers className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:leading-8">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-200"
          >
            {technology}
          </span>
        ))}
      </div>

      {project.path && (
        <div className="mt-6">
          <Link
            to={project.path}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            View case study
          </Link>
        </div>
      )}
    </GlassCard>
  );
};

export default ProjectCard;
