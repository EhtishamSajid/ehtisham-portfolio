const Container = ({ children, className = "" }) => {
  return (
    <div className={`portfolio-container ${className}`}>
      {children}
    </div>
  );
};

export default Container;
