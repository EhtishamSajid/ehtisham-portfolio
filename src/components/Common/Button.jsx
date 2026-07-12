const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
  download,
}) => {
  const base =
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[15px] font-extrabold leading-none transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

  const styles = {
    primary:
      "border border-blue-500/80 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(37,99,235,0.34)] dark:border-sky-300/40 dark:from-blue-500 dark:via-blue-500 dark:to-sky-300 dark:text-white",

    secondary:
      "border border-slate-200/80 bg-white/76 text-slate-900 shadow-[0_9px_24px_rgba(15,23,42,0.055)] backdrop-blur-xl hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700 hover:shadow-[0_14px_30px_rgba(37,99,235,0.11)] dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-100 dark:hover:border-sky-300/40 dark:hover:bg-white/[0.11] dark:hover:text-sky-200",

    ghost:
      "border border-transparent text-slate-600 hover:bg-white/70 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/[0.07] dark:hover:text-white",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        aria-label={ariaLabel}
        className={`${base} ${styles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
