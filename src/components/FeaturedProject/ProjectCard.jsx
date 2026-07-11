import { FiCheckCircle, FiLayers } from "react-icons/fi";
import GlassCard from "../Common/GlassCard";

const ProjectCard = ({ project }) => {
  return (
    <GlassCard className="p-5 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3 py-1.5 text-sm font-semibold text-green-700">
            <FiCheckCircle className="h-4 w-4" />
            {project.status}
          </span>

          <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-950">
            {project.title}
          </h3>

          <p className="mt-2 font-semibold text-blue-600">
            {project.category}
          </p>
        </div>

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
          <FiLayers className="h-6 w-6" />
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-700"
          >
            {technology}
          </span>
        ))}
      </div>
    </GlassCard>
  );
};

export default ProjectCard;
