import {
  FiArrowUpRight,
  FiExternalLink,
  FiFileText,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";

import Container from "../Common/Container";
import portfolioData from "../../data/portfolioData";
import "./Contact.css";

const RESUME_PATH = "/resume/Ehtisham-Sajid-CV.pdf";

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    tone: "email",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone.replace(/\s/g, "")}`,
    tone: "phone",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: portfolioData.location,
    href: "https://www.google.com/maps/search/?api=1&query=Islamabad%2C%20Pakistan",
    external: true,
    tone: "location",
  },
];

const socialLinks = [
  {
    icon: FiGithub,
    label: "GitHub",
    href: portfolioData.github,
    tone: "github",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    href: portfolioData.linkedin,
    tone: "linkedin",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div
        className="contact-background contact-background-left"
        aria-hidden="true"
      />

      <div
        className="contact-background contact-background-right"
        aria-hidden="true"
      />

      <Container className="contact-container">
        <header className="contact-heading">
          <div className="contact-eyebrow">
            <span
              className="contact-eyebrow-line"
              aria-hidden="true"
            />

            <span>Contact</span>

            <span
              className="contact-eyebrow-line"
              aria-hidden="true"
            />
          </div>

          <h2>Let&apos;s Build Better Software Together</h2>

          <span
            className="contact-heading-accent"
            aria-hidden="true"
          />

          <p>
            I&apos;m open to junior Software QA Engineer roles, internships,
            and entry-level opportunities where I can contribute through
            structured manual testing, clear documentation, and continuous
            learning.
          </p>
        </header>

        <div className="contact-card">
          <div className="contact-info-panel">
            <div
              className="contact-panel-decoration contact-panel-circle"
              aria-hidden="true"
            />

            <div
              className="contact-panel-decoration contact-panel-dots-top"
              aria-hidden="true"
            />

            <div
              className="contact-panel-decoration contact-panel-dots-bottom"
              aria-hidden="true"
            />

            <div className="contact-info-content">
              <div className="contact-availability">
                <span aria-hidden="true" />
                Available for Opportunities
              </div>

              <h3>
                Junior Software
                <br />
                QA Engineer
              </h3>

              <span
                className="contact-title-accent"
                aria-hidden="true"
              />

              <p className="contact-description">
                Ready to support reliable software releases through structured
                manual testing, clear defect reporting, and well-organized QA
                documentation.
              </p>

              <div className="contact-status">
                <FiSend aria-hidden="true" />
                Open for Junior QA Roles
              </div>

              <div className="contact-actions">
                <a
                  href={`mailto:${portfolioData.email}`}
                  className="contact-button contact-button-primary"
                  aria-label={`Send an email to ${portfolioData.email}`}
                >
                  <FiMail aria-hidden="true" />

                  <span>Email Me</span>

                  <FiArrowUpRight
                    className="contact-button-arrow"
                    aria-hidden="true"
                  />
                </a>

                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-button contact-button-secondary"
                  aria-label="Open Ehtisham Sajid resume in a new tab"
                >
                  <FiFileText aria-hidden="true" />

                  <span>View Resume</span>

                  <FiExternalLink
                    className="contact-button-arrow"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-links-panel">
            <div className="contact-items">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={
                      item.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="contact-item"
                    aria-label={`${item.label}: ${item.value}`}
                  >
                    <span
                      className={`contact-item-icon contact-item-icon-${item.tone}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="contact-item-content">
                      <span className="contact-item-label">
                        {item.label}
                      </span>

                      <span className="contact-item-value">
                        {item.value}
                      </span>
                    </span>

                    <FiArrowUpRight
                      className="contact-item-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>

            <div className="contact-social-heading">
              <span aria-hidden="true" />

              <p>Connect With Me</p>

              <span aria-hidden="true" />
            </div>

            <div className="contact-social-grid">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-card"
                    aria-label={`Visit Ehtisham Sajid on ${link.label}`}
                  >
                    <span
                      className={`contact-social-icon contact-social-icon-${link.tone}`}
                    >
                      <Icon aria-hidden="true" />
                    </span>

                    <span className="contact-social-name">
                      {link.label}
                    </span>

                    <FiArrowUpRight
                      className="contact-social-arrow"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;