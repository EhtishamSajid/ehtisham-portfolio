const BackgroundOrbs = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_24%_18%,rgba(96,165,250,0.22),transparent_28rem),radial-gradient(circle_at_78%_8%,rgba(56,189,248,0.18),transparent_27rem),linear-gradient(120deg,rgba(255,255,255,0.72),transparent_42%,rgba(37,99,235,0.08))] dark:bg-[radial-gradient(circle_at_24%_18%,rgba(37,99,235,0.34),transparent_30rem),radial-gradient(circle_at_78%_8%,rgba(56,189,248,0.18),transparent_28rem),linear-gradient(120deg,rgba(15,23,42,0.32),transparent_42%,rgba(96,165,250,0.08))]"
      />

      <div className="absolute inset-0 opacity-[0.28] [background-image:radial-gradient(rgba(37,99,235,0.18)_0.7px,transparent_0.7px)] [background-size:18px_18px] dark:opacity-[0.18] dark:[background-image:radial-gradient(rgba(148,163,184,0.22)_0.7px,transparent_0.7px)]" />

      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-[#f7faff] dark:to-[#0b1120]" />
    </div>
  );
};

export default BackgroundOrbs;
