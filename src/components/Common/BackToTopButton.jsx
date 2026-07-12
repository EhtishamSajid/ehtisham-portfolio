import { FiArrowUp } from "react-icons/fi";

const BackToTopButton = ({ visible = false, onClick }) => {
  return (
    <button
      type="button"
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      onClick={onClick}
      className={`fixed bottom-5 right-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-lg border border-slate-200 bg-white/90 text-blue-600 shadow-[0_12px_30px_rgba(15,23,42,0.14)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:bg-slate-900/90 dark:text-blue-300 dark:shadow-[0_12px_30px_rgba(0,0,0,0.28)] dark:hover:border-blue-400 dark:hover:bg-slate-900 dark:hover:text-blue-200 sm:bottom-6 sm:right-6 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <FiArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
};

export default BackToTopButton;
