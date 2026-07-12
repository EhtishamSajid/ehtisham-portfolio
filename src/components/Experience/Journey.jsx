import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import TimelineItem from "./TimelineItem";
import { journey } from "./journeyData";

const Journey = () => {
  return (
    <SectionContainer id="experience" variant="white">
      <SectionTitle
        subtitle="Quality Journey"
        title="My Professional Journey"
        description="A clear timeline of education, internship experience, and the next QA role I am preparing for."
      />

      <div className="relative mx-auto max-w-5xl">
        <div
          className="absolute bottom-8 left-4 top-4 w-px bg-slate-200 dark:bg-slate-800 lg:left-1/2 lg:-translate-x-1/2"
          aria-hidden="true"
        />

        <div className="space-y-8">
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
