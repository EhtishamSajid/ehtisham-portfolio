import { FiAward } from "react-icons/fi";

import SectionContainer from "../Common/SectionContainer";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/certificates";
import "./Certifications.css";

const Certifications = () => {
  return (
    <SectionContainer
      id="certifications"
      variant="muted"
      className="certifications-section"
    >
      <div className="certifications-inner">
        <header className="certifications-header">
          <div className="certifications-eyebrow">
            <span className="certifications-eyebrow-line" aria-hidden="true" />

            <p>Certifications</p>

            <span className="certifications-eyebrow-line" aria-hidden="true" />
          </div>

          <h2>
            Learning Never <span>Stops</span>
          </h2>

          <p className="certifications-description">
            Relevant certifications that support my practical QA knowledge,
            documentation skills, and understanding of software quality.
          </p>
        </header>

        <div className="certifications-grid">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={`${certificate.title}-${certificate.date}`}
              certificate={certificate}
              index={index}
            />
          ))}
        </div>

        <div className="certifications-callout">
          <span className="certifications-callout-icon" aria-hidden="true">
            <FiAward />
          </span>

          <p>
            Continuously learning to stay ahead in{" "}
            <strong>QA excellence</strong>
          </p>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Certifications;