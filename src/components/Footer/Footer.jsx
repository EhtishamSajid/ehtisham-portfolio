import {
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Button from "../Common/Button";
import Container from "../Common/Container";
import portfolioData from "../../data/portfolioData";

const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";
const RESUME_FILENAME = "Ehtisham-Sajid-CV.pdf";

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone.replace(/\s/g, "")}`,
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: portfolioData.location,
    href: "https://www.google.com/maps/search/?api=1&query=Islamabad%2C%20Pakistan",
    external: true,
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: portfolioData.github,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: portfolioData.linkedin,
  },
];

const Footer = () => {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0b1120] py-16 text-white sm:py-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.32),transparent_28rem),radial-gradient(circle_at_82%_20%,rgba(56,189,248,0.16),transparent_24rem),linear-gradient(180deg,rgba(15,23,42,0),#0b1120_72%)]"
      />
      <Container>
        <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div className="max-w-3xl">
            <p className="text-[13px] font-extrabold uppercase tracking-[0.2em] text-sky-300 sm:text-[14px]">
              Contact
            </p>

            <h2 className="mt-5 max-w-3xl text-[2.15rem] font-black leading-[1.08] sm:text-5xl lg:text-[54px]">
              Ready to help teams ship cleaner, more reliable software.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:mt-6 sm:text-[20px] sm:leading-9">
              Open to junior Software QA Engineer roles, internships, and
              entry-level product quality opportunities in collaborative teams.
            </p>

            <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2.5 text-[14px] font-extrabold text-emerald-200 sm:mt-8 sm:text-[15px]">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_0_5px_rgba(52,211,153,0.12)]" />
              Available for SQA Opportunities
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`mailto:${portfolioData.email}`} className="w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Email Me
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Button>

              <Button
                variant="secondary"
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Visit Ehtisham Sajid on LinkedIn"
                className="w-full border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  LinkedIn Profile
                  <FiArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </Button>

              <Button
                variant="secondary"
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                ariaLabel="Download Ehtisham Sajid CV"
                className="w-full border-white/20 bg-white/10 text-white hover:bg-white hover:text-slate-950 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Download Resume
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.07] p-3 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-5">
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="group flex min-w-0 items-center gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/[0.1]">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sky-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[14px] font-extrabold text-slate-400">
                        {item.label}
                      </span>
                      <span className="mt-1 block break-words text-base font-extrabold text-white transition group-hover:text-sky-100">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="block rounded-[1.35rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-300 transition hover:-translate-y-0.5 hover:border-sky-300/40 hover:bg-white/[0.1] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[14px] font-semibold leading-6 text-slate-400 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:text-[15px]">
          <p className="break-words">Copyright 2026 {portfolioData.name}. Software Quality Assurance Engineer.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
