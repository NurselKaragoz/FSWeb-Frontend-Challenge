import ProjectCard from "./ProjectCard";
function Projects() {
  const array = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div className="pt-10 dark:bg-colors-black200 m-auto max-w-max">
      <h1 className=" font-semibold text-4xl text-left border-t-2 border-colors-purple100 dark:text-colors-gray200 ">
        Projects
      </h1>
      <div className="flex flex-row justify-between mt-5">
        {array.map((item) => (
          <ProjectCard key={item.id} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
