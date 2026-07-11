import SectionTitle from "../Common/SectionTitle";
import SectionContainer from "../Common/SectionContainer";
import ToolCard from "./ToolCard";
import { tools } from "./toolData";

const QAToolkit = () => {
  return (
    <SectionContainer id="toolkit" variant="muted">
      <SectionTitle
        subtitle="Toolkit"
        title="QA Tools & Technologies"
        description="A compact toolkit for planning, validating, documenting, and communicating software quality across product workflows."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default QAToolkit;
