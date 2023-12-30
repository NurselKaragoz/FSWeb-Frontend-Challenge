import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { ProjectContext } from "../Context/ProjectContext";
function Projects() {
  const { projects } = useContext(ProjectContext);
  console.log("projects=>> projects", projects);

  return (
    <div className="pt-10 dark:bg-colors-black200 m-auto max-w-max">
      <h1 className=" font-semibold text-4xl text-left border-t-2 border-colors-purple100 dark:text-colors-gray200 ">
        Projects
      </h1>

      <div>
        <div className=" flex flex-row justify-between">
          {projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Projects;
