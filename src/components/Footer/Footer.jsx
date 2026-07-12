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
    <footer id="contact" className="bg-slate-950 py-16 text-white sm:py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-300">
              Contact
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Ready to help teams ship cleaner, more reliable software.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Open to junior Software QA Engineer roles, internships, and
              entry-level product quality opportunities in collaborative teams.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={`mailto:${portfolioData.email}`} className="w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Email Me
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>

              <Button
                variant="secondary"
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                ariaLabel="Visit Ehtisham Sajid on LinkedIn"
                className="w-full border-white bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  LinkedIn Profile
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>

              <Button
                variant="secondary"
                href={RESUME_PATH}
                download={RESUME_FILENAME}
                ariaLabel="Download Ehtisham Sajid CV"
                className="w-full border-white bg-white text-slate-950 hover:bg-slate-100 hover:text-slate-950 sm:w-auto"
              >
                <span className="flex items-center justify-center gap-2">
                  Download Resume
                  <FiDownload className="h-4 w-4" aria-hidden="true" />
                </span>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="group flex min-w-0 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-300/40 hover:bg-white/[0.08]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-slate-400">
                        {item.label}
                      </span>
                      <span className="block break-words text-sm font-semibold text-white transition group-hover:text-blue-100">
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
                    rel={item.external ? "noreferrer" : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>

            <div className="mt-4 flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    title={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-300/40 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-300"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p className="break-words">Copyright 2026 {portfolioData.name}. Software Quality Assurance Engineer.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
