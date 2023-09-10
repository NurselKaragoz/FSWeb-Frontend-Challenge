import deneme from "./img.png";
import React from "react";
import linkedinLogo from "./LinkedIn.svg";
function Introduce() {
  return (
    <div>
      <a class="  max-w-full flex flex-col items-center bg-white rounded-lg  md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Hi I am Nursel.I'am a front-end.If yo are looking for a Developer who
          craft solid and scalable frontend products with great user
          experiences.Let's shake hands with me.
        </p>
        <img
          class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={deneme}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal"></div>
      </a>

      <div class=" flex-row">
        <p class="  flex ">
          Hi I am Nursel.I'am a front-end.If you are looking for a Developer who
          craft solid and scalable frontend products with great user
          experiences.Let's shake hands with me.
          <img class=" flex " src={deneme} />
        </p>
      </div>

      <button class="bg-transparent border-colors-bluex py-2 px-3 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        Hire Me
      </button>
      <button class="bg-transparent border-colors-bluex py-2 px-3 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        Github
      </button>
      <button class=" bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        <img src={linkedinLogo} /> Linkedin
      </button>
    </div>
  );
}
export default Introduce;
