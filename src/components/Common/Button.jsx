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
}) => {
  const base =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500";

  const styles = {
    primary:
      "border border-blue-600 bg-blue-600 text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] hover:-translate-y-0.5 hover:bg-blue-700",

    secondary:
      "border border-slate-300 bg-white/90 text-slate-900 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm",

    ghost:
      "border border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-950",
  };

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
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
