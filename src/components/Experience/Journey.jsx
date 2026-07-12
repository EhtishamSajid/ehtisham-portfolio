import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import TimelineItem from "./TimelineItem";
import { journey } from "./journeyData";

const Journey = () => {
  return (
    <SectionContainer id="experience" variant="white" className="section-gap-150">
      <SectionTitle
        subtitle="Quality Journey"
        title="My Professional Journey"
        description="A clear timeline of education, internship experience, and the next QA role I am preparing for."
      />

      <div className="relative mx-auto max-w-6xl">
        <div
          className="absolute bottom-8 left-4 top-4 w-px bg-gradient-to-b from-transparent via-blue-300/85 to-transparent dark:via-sky-300/42 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8 sm:space-y-10">
          {journey.map((item, index) => (
            <TimelineItem
              key={`${item.year}-${item.title}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Journey;
