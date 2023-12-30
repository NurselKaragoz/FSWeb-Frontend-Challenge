import photoWorkintech from "./images/workintech.png";
import { data } from "../data";

function ProjectCard() {
  console.log(data[0].title);
  return (
    <div className=" flex flex-row justify-between mt-5">
      <div className="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={data[0].img} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight  text-colors-blue100 dark:text-colors-purple200 text-left">
              {data[0].title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-colors-graytext dark:text-colors-white text-left">
            {data[0].about}
          </p>
          <div className=" flex justify-start gap- dark:text-colors-purple300 text-colors-bluex ">
            <button className=" bg-colors-transparent py-2 px-3 border border-colors-bluex  dark:border-colors-purple300 rounded-xl">
              react
            </button>
            <button className=" bg-colors-transparent py-2 px-3 border border-colors-bluex dark:border-colors-purple300  rounded-xl">
              redux
            </button>
            <button className=" bg-colors-transparent py-2 px-3 border border-colors-bluex dark:border-colors-purple300  rounded-xl">
              axios
            </button>
          </div>
          <div className=" flex justify-between dark:text-colors-purple300 ">
            <a
              href="https://github.com/NurselKaragoz/fsweb-s7-challenge-pizza"
              className=" text-colors-bluex dark:text-colors-purple400 underline"
            >
              Github
            </a>
            <a
              href="#"
              className=" text-colors-bluex dark:text-colors-purple400 underline"
            >
              View Site
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
