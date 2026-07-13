import GlassCard from "../Common/GlassCard";

const ToolCard = ({ tool }) => {
  const Icon = tool.icon;

  return (
    <GlassCard
      className="
        group/tool
        flex
        h-full
        min-h-[220px]
        flex-col
        items-center
        justify-center
        p-7
        text-center
        sm:p-8
      "
    >
      <div
        className={`
          mb-6
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-[1.4rem]
          bg-gradient-to-br
          ${tool.gradient}
          text-blue-600
          ring-1
          ring-blue-100/80
          shadow-[0_12px_28px_rgba(37,99,235,0.08)]
          transition-all
          duration-300
          group-hover/tool:-translate-y-1
          group-hover/tool:scale-110
          group-hover/tool:shadow-[0_18px_34px_rgba(37,99,235,0.16)]
          dark:text-sky-300
          dark:ring-sky-300/20
        `}
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </div>

      <h3 className="text-[1.35rem] font-black leading-tight text-slate-950 dark:text-white sm:text-2xl">
        {tool.name}
      </h3>

      <p className="mt-4 max-w-[17rem] text-[15px] leading-8 text-slate-600 dark:text-slate-300">
        {tool.description}
      </p>

      {tool.level && (
        <span
          className="
            mt-5
            text-xs
            font-black
            uppercase
            tracking-[0.18em]
            text-blue-600
            dark:text-sky-300
          "
        >
          {tool.level}
        </span>
      )}
    </GlassCard>
  );
};

export default ToolCard;