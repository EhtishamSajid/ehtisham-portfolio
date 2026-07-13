const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        portfolio-container
        relative
        mx-auto
        w-full
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;