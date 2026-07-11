import GlassCard from "../Common/GlassCard";

const stats = [
  {
    label: "Coverage",
    value: "Functional, UI, Regression",
  },
  {
    label: "Documentation",
    value: "Scenarios, Test Cases, Bugs",
  },
  {
    label: "Workflow",
    value: "Jira, Postman, GitHub",
  },
];

const ProjectStats = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
      {stats.map((stat) => (
        <GlassCard key={stat.label} hover={false} className="p-5">
          <p className="text-sm font-semibold text-blue-600">{stat.label}</p>
          <p className="mt-2 text-base font-bold leading-7 text-slate-950">
            {stat.value}
          </p>
        </GlassCard>
      ))}
    </div>
  );
};

export default ProjectStats;
