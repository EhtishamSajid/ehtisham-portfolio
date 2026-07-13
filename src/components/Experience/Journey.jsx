import SectionContainer from "../Common/SectionContainer";
import TimelineItem from "./TimelineItem";
import { journey } from "./journeyData";
import "./Journey.css";

const Journey = () => {
  return (
    <SectionContainer
      id="experience"
      variant="white"
      className="journey-section"
    >
      <div className="journey-inner">
        <header className="journey-header">
          <div className="journey-eyebrow">
            <span className="journey-eyebrow-line" aria-hidden="true" />

            <p>Journey</p>

            <span className="journey-eyebrow-line" aria-hidden="true" />
          </div>

          <h2>
            My Professional <span>Journey</span>
          </h2>

          <p className="journey-description">
            A clear timeline of my education, internship experience, and
            preparation for my first full-time Software Quality Assurance role.
          </p>
        </header>

        <div className="journey-timeline-wrapper">
          <div className="journey-timeline-line" aria-hidden="true" />

          <ol className="journey-timeline-list">
            {journey.map((item, index) => (
              <TimelineItem
                key={`${item.year}-${item.title}`}
                item={item}
                index={index}
              />
            ))}
          </ol>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Journey;