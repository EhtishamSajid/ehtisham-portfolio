import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectStats from "./ProjectStats";
import { projects } from "../../data/projects";

const FeaturedProject = () => {
  return (
    <SectionContainer id="projects" variant="white" className="section-gap-160">
      <SectionTitle
        subtitle="Featured Work"
        title="QA Projects With Clear Testing Artifacts"
        description="A focused project view for recruiters to quickly understand testing scope, documentation habits, and tool exposure."
      />

      <div className="grid items-start gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6">
        <div className="space-y-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <ProjectStats />
      </div>
    </SectionContainer>
  );
};

export default FeaturedProject;
