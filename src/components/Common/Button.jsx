const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
}) => {
  const base =
    "rounded-2xl px-7 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:-translate-y-1",

    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",

    ghost:
      "text-slate-700 hover:text-blue-600",
  };

  if (href) {
    return (
      <a
        href={href}
        className={`${base} ${styles[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
};

export default Button;