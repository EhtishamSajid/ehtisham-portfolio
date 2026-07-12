import GlassCard from "../Common/GlassCard";

const stats = [
  {
    label: "Status",
    value: "In-progress case study",
  },
  {
    label: "Artifacts",
    value: "Scenarios, test cases, defects",
  },
  {
    label: "Process",
    value: "Manual QA documentation",
  },
];

const ProjectStats = () => {
  return (
    <div className="grid gap-5 sm:grid-cols-3 lg:sticky lg:top-28 lg:grid-cols-1">
      {stats.map((stat) => (
        <GlassCard key={stat.label} hover={false} className="min-w-0 p-5 sm:p-6">
          <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-blue-600 dark:text-sky-300 sm:text-[13px]">
            {stat.label}
          </p>
          <p className="mt-3 break-words text-lg font-black leading-7 text-slate-950 dark:text-white sm:text-xl">
            {stat.value}
          </p>
        </GlassCard>
      ))}
    </div>
  );
};

export default ProjectStats;
