import SectionContainer from "../Common/SectionContainer";
import SectionTitle from "../Common/SectionTitle";
import ProjectCard from "./ProjectCard";
import ProjectStats from "./ProjectStats";
import { projects } from "../../data/projects";
import "./FeaturedProject.css";

const FeaturedProject = () => {
  return (
    <SectionContainer
      id="projects"
      variant="white"
      className="featured-project-section"
    >
      <SectionTitle
        subtitle="Featured Work"
        title="QA Projects With Clear Testing Artifacts"
        description="A focused view of my practical testing work, QA documentation, and progress as a junior Software QA Engineer."
      />

      <div className="featured-project-wrapper">
        <div className="featured-project-list">
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