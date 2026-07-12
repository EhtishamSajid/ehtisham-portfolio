import GlassCard from "../Common/GlassCard";

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <GlassCard className="group/tool flex h-full min-h-[224px] flex-col p-6 sm:p-7">
      <div className="mb-5 flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50 text-blue-600 ring-1 ring-blue-100 transition-transform duration-300 group-hover/tool:scale-105 dark:from-blue-500/15 dark:to-sky-300/10 dark:text-sky-300 dark:ring-sky-300/20 sm:h-14 sm:w-14">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>

      <h3 className="text-[1.35rem] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">
        {tool.name}
      </h3>

      <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
        {tool.description}
      </p>
    </GlassCard>
  );
};

export default ToolCard;
