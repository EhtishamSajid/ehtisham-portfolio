import SectionTitle from "../Common/SectionTitle";
import Container from "../Common/Container";
import ToolCard from "./ToolCard";
import { tools } from "./toolData";

const QAToolkit = () => {
  return (
    <section
      id="toolkit"
      className="py-28 bg-slate-50"
    >
      <Container>

        <SectionTitle
          subtitle="Toolkit"
          title="QA Tools & Technologies"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {tools.map((tool) => (
            <ToolCard
              key={tool.name}
              tool={tool}
            />
          ))}

        </div>

      </Container>
    </section>
  );
};

export default QAToolkit;