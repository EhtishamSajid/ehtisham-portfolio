import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCircle } from "react-icons/fi";

import Container from "../components/Common/Container";
import GlassCard from "../components/Common/GlassCard";

const ProjectDetails = ({ project }) => {
  useEffect(() => {
    document.title = `${project.title} | Ehtisham Sajid`;
  }, [project.title]);

  return (
    <main className="min-h-screen bg-[var(--surface-muted)] py-8 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-10">
      <Container>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-slate-200/80 bg-white/78 px-5 py-3 text-sm font-extrabold text-slate-900 shadow-[0_9px_24px_rgba(15,23,42,0.055)] backdrop-blur-xl transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-[0_14px_30px_rgba(37,99,235,0.11)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-white/10 dark:bg-white/[0.07] dark:text-slate-100 dark:hover:border-sky-300/40 dark:hover:text-sky-200"
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-200/80 bg-blue-50/84 px-3 py-1.5 text-sm font-extrabold text-blue-700 dark:border-sky-300/25 dark:bg-sky-300/12 dark:text-sky-200">
              Status: {project.status}
            </span>

            <h1 className="mt-6 text-[2.35rem] font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
              {project.description}
            </p>
          </div>
        </section>

        <div className="grid gap-4 pb-12 sm:gap-5">
          {project.sections.map((section) => (
            <GlassCard key={section.title} hover={false} className="p-5 sm:p-6">
              <h2 className="text-xl font-black text-slate-950 dark:text-white">
                {section.title}
              </h2>

              {section.body && (
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {section.body}
                </p>
              )}

              {section.items && (
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                    className="flex items-start gap-3 text-sm font-bold leading-6 text-slate-700 dark:text-slate-200"
                    >
                      <FiCircle
                        className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </GlassCard>
          ))}
        </div>
      </Container>
    </main>
  );
};

export default ProjectDetails;
