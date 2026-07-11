import GlassCard from "../Common/GlassCard";

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <GlassCard className="h-full p-5 sm:p-6">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon className="h-6 w-6" />
      </div>

      <h3 className="text-lg font-bold text-slate-950">{tool.name}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {tool.description}
      </p>
    </GlassCard>
  );
};

export default ToolCard;
