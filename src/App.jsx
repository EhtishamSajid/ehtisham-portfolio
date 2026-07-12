import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import { projectDetails } from "./data/projectDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {projectDetails.map((project) => (
        <Route
          key={project.slug}
          path={project.path}
          element={<ProjectDetails project={project} />}
        />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
