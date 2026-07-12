import GlassCard from "../Common/GlassCard";

const stats = [
  {
    label: "Status",
    value: "Planned case study",
  },
  {
    label: "Planned Artifacts",
    value: "Scenarios, cases, reports, summary",
  },
  {
    label: "Current Focus",
    value: "Manual QA documentation",
  },
];

const ProjectStats = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {stats.map((stat) => (
        <GlassCard key={stat.label} hover={false} className="min-w-0 p-5">
          <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {stat.label}
          </p>
          <p className="mt-2 break-words text-base font-bold leading-7 text-slate-950 dark:text-white">
            {stat.value}
          </p>
        </GlassCard>
      ))}
    </div>
  );
};

export default ProjectStats;
