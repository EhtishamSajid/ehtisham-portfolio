import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import Button from "../Common/Button";
import Container from "../Common/Container";
import portfolioData from "../../data/portfolioData";

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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${portfolioData.email}`}>
                <span className="flex items-center gap-2">
                  Email Me
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </Button>

              <Button
                variant="secondary"
                href={portfolioData.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-slate-950 hover:bg-slate-100"
              >
                LinkedIn Profile
              </Button>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.07]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </span>

                    <span>
                      <span className="block text-sm font-semibold text-slate-400">
                        {item.label}
                      </span>
                      <span className="block break-words text-sm font-semibold text-white">
                        {item.value}
                      </span>
                    </span>
                  </div>
                );

                return item.href ? (
                  <a key={item.label} href={item.href}>
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
                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-blue-300/40 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 {portfolioData.name}. Software Quality Assurance Engineer.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
