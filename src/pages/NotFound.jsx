import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Container from "../components/Common/Container";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Ehtisham Sajid";
  }, []);

  return (
    <main className="flex min-h-screen items-center bg-slate-50 py-12 text-slate-950 dark:bg-slate-950 dark:text-white">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
            404
          </p>
          <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
            The page you are looking for is not available in this portfolio.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-blue-600 bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
