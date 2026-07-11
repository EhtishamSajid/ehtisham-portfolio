import Container from "./Container";

const variants = {
  white: "bg-white",
  muted: "bg-slate-50",
  soft: "bg-gradient-to-b from-white to-slate-50",
  dark: "bg-slate-950 text-white",
  transparent: "bg-transparent",
};

const SectionContainer = ({
  id,
  children,
  className = "",
  containerClassName = "",
  variant = "white",
}) => {
  return (
    <section
      id={id}
      className={`portfolio-section relative overflow-hidden ${variants[variant]} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};

export default SectionContainer;
