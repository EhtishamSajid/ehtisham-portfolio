import GlassCard from "../Common/GlassCard";

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <GlassCard className="flex h-full flex-col p-5 sm:p-6">
      <div className="mb-5 flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-300">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-lg font-bold text-slate-950 dark:text-white">
        {tool.name}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {tool.description}
      </p>
    </GlassCard>
  );
};

export default ToolCard;
