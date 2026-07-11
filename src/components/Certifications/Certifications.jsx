import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import CertificateCard from "./CertificateCard";
import { certificates } from "../../data/certificates";

const Certifications = () => {
  return (
    <SectionContainer id="certifications" variant="muted">
      <SectionTitle
        subtitle="Certifications"
        title="Learning Never Stops"
        description="Relevant coursework and certifications that support practical QA execution, documentation, and team collaboration."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <CertificateCard
            key={certificate.title}
            certificate={certificate}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Certifications;
