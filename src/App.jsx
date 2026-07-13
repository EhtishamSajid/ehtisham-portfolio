import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import LoadingScreen from "./components/Common/LoadingScreen";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProjectDetails from "./pages/ProjectDetails";
import { projectDetails } from "./data/projectDetails";

const LOADER_DURATION = 900;
const FADE_DURATION = 300;

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fade = setTimeout(() => {
      setFadeOut(true);
    }, LOADER_DURATION);

    const remove = setTimeout(() => {
      setLoading(false);
    }, LOADER_DURATION + FADE_DURATION);

    return () => {
      clearTimeout(fade);
      clearTimeout(remove);
    };
  }, []);

  return (
    <>
      {loading && <LoadingScreen isLeaving={fadeOut} />}

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
    </>
  );
}

export default App;