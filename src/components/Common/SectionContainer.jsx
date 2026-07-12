import Container from "./Container";

const variants = {
  white: "bg-transparent",
  muted: "bg-transparent",
  soft: "bg-transparent",
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
