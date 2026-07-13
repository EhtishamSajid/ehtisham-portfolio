import { Link } from "react-scroll";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import Container from "../Common/Container";
import portfolioData from "../../data/portfolioData";
import "./Footer.css";

const footerLinks = [
  { name: "About", id: "about" },
  { name: "Toolkit", id: "toolkit" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "projects" },
  { name: "Certifications", id: "certifications" },
  { name: "Contact", id: "contact" },
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
  {
    icon: FiMail,
    label: "Email",
    href: `mailto:${portfolioData.email}`,
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer">
      <div
        className="footer-decoration footer-decoration-left"
        aria-hidden="true"
      />

      <div
        className="footer-decoration footer-decoration-right"
        aria-hidden="true"
      />

      <Container className="footer-container">
        <div className="footer-main-card">
          <div className="footer-brand">
            <Link
              to="home"
              smooth
              duration={550}
              offset={-120}
              className="footer-brand-link"
              aria-label="Return to the top of the portfolio"
            >
              <span className="footer-brand-logo" aria-hidden="true">
                ES
              </span>

              <span className="footer-brand-copy">
                <span className="footer-brand-name">
                  {portfolioData.name}
                </span>

                <span className="footer-brand-role">
                  Software Quality Assurance Engineer
                </span>
              </span>
            </Link>

            <p className="footer-brand-description">
              Focused on structured manual testing, clear defect reporting,
              reliable QA documentation, and continuous learning.
            </p>

            <div className="footer-availability">
              <span aria-hidden="true" />
              Open for Junior QA Opportunities
            </div>
          </div>

          <div className="footer-navigation-area">
            <p className="footer-column-title">Quick Links</p>

            <nav
              aria-label="Footer navigation"
              className="footer-navigation"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth
                  spy
                  duration={550}
                  offset={-120}
                  className="footer-navigation-link"
                >
                  <span>{item.name}</span>
                  <FiArrowUpRight aria-hidden="true" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="footer-connect-area">
            <p className="footer-column-title">Connect With Me</p>

            <p className="footer-connect-description">
              Let&apos;s connect and discuss Software QA opportunities,
              testing projects, or professional collaboration.
            </p>

            <div className="footer-social-links">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                const external = link.href.startsWith("http");

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="footer-social-link"
                    aria-label={
                      external
                        ? `Visit Ehtisham Sajid on ${link.label}`
                        : `Email ${portfolioData.name}`
                    }
                    title={link.label}
                  >
                    <span className="footer-social-icon">
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="footer-social-name">
                      {link.label}
                    </span>

                    <FiArrowUpRight
                      className="footer-social-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} {portfolioData.name}. All rights reserved.
          </p>

          <p className="footer-built-with">
            Built with
            <span>React</span>
            <span aria-hidden="true">•</span>
            <span>Vite</span>
            <span aria-hidden="true">•</span>
            <span>Tailwind CSS</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;