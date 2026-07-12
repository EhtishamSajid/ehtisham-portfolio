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
    <main className="min-h-screen bg-slate-50 py-8 text-slate-950 dark:bg-slate-950 dark:text-white sm:py-10">
      <Container>
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white/90 px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-700 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-300"
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to Home
        </Link>

        <section className="py-10 sm:py-14">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-400/40 dark:bg-blue-950/50 dark:text-blue-300">
              Status: {project.status}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight text-slate-950 dark:text-white sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>
        </section>

        <div className="grid gap-4 pb-12 sm:gap-5">
          {project.sections.map((section) => (
            <GlassCard key={section.title} hover={false} className="p-5 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950 dark:text-white">
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
                      className="flex items-start gap-3 text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
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
