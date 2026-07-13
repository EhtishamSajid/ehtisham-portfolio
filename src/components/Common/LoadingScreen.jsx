import "./LoadingScreen.css";

const LoadingScreen = ({ isLeaving }) => {
  return (
    <div
      className={`portfolio-loader ${
        isLeaving ? "portfolio-loader--hide" : ""
      }`}
    >
      <div className="loader-logo">ES</div>

      <h2>Ehtisham Sajid</h2>

      <p>Software QA Engineer</p>

      <div className="loader-bar">
        <span />
      </div>
    </div>
  );
};

export default LoadingScreen;