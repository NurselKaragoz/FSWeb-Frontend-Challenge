import { useState } from "react";
import Project from "./Project";

function Projects() {
  //   const initialProjects = {
  //     header: workintech,
  //   };
  const [projects, useProjects] = useState();
  return <Project />;
}
export default Projects;
