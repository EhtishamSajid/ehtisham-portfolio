import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle, FiArrowLeft, FiHome } from "react-icons/fi";

import Container from "../components/Common/Container";
import GlassCard from "../components/Common/GlassCard";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Ehtisham Sajid";
  }, []);

  return (
    <main className="flex min-h-screen items-center overflow-hidden bg-[var(--surface-muted)] py-12 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-16">
      <Container>
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="text-center lg:text-left">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-blue-600 dark:text-sky-300">
              Route check failed
            </p>
            <h1 className="mt-4 text-8xl font-black leading-none text-slate-950 dark:text-white sm:text-9xl">
              404
            </h1>
            <p className="mt-5 text-xl font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-2xl">
              The page you are looking for does not exist.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300">
              Defect detected: invalid route.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-blue-500/80 bg-gradient-to-br from-blue-600 via-blue-500 to-sky-400 px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(37,99,235,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(37,99,235,0.34)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-sky-300/40"
            >
              <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
              Return Home
            </Link>
          </div>

          <GlassCard hover={false} className="p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-sky-300">
                <FiAlertTriangle className="h-6 w-6" aria-hidden="true" />
              </div>

              <div className="min-w-0">
                <h2 className="text-lg font-black text-slate-950 dark:text-white">
                  QA route report
                </h2>
                <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.055]">
                    <dt className="font-bold text-slate-500 dark:text-slate-400">
                      Status
                    </dt>
                    <dd className="mt-1 font-extrabold text-slate-900 dark:text-slate-100">
                      Not Found
                    </dd>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.055]">
                    <dt className="font-bold text-slate-500 dark:text-slate-400">
                      Severity
                    </dt>
                    <dd className="mt-1 font-extrabold text-slate-900 dark:text-slate-100">
                      Navigation Blocked
                    </dd>
                  </div>
                </dl>

                <div className="mt-5 flex items-center gap-3 rounded-2xl border border-blue-200 bg-blue-50/80 p-4 text-sm font-bold text-blue-800 dark:border-sky-300/25 dark:bg-sky-300/10 dark:text-sky-200">
                  <FiHome className="h-5 w-5 shrink-0" aria-hidden="true" />
                  Use the home route to return to the portfolio sections.
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
