const clampProgress = (progress) => Math.min(Math.max(progress, 0), 1);

const ScrollProgressBar = ({ progress = 0 }) => {
  const safeProgress = clampProgress(progress);
  const progressValue = Math.round(safeProgress * 100);

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={progressValue}
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent"
    >
      <div
        className="h-full origin-left bg-gradient-to-r from-blue-600 to-sky-400 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${safeProgress})` }}
      />
    </div>
  );
};

export default ScrollProgressBar;
