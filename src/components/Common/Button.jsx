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
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

  const styles = {
    primary:
      "border border-blue-600 bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 hover:bg-blue-700 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400",

    secondary:
      "border border-slate-300 bg-white/90 text-slate-900 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-300",

    ghost:
      "border border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
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
