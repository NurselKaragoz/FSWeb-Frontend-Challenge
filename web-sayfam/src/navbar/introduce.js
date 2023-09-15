import deneme from "./img.png";
import React from "react";
import linkedinLogo from "./LinkedIn.svg";
import githupLogo from "./github.svg";
import linkedindark from "./linkedindark.svg";
function Introduce() {
  return (
    <div>
      <div class=" flex-row flex items-center">
        <div class="flex-col text-left ">
          <p class="text-colors-bluex pl-16">Nursel</p>
          <h1 class=" flex max-w-screen-xl text-6xl ">
            Creative thinker <br /> Minimalisim lover
          </h1>
          <p class=" text-left  text-colors-graytext  max-w-md pt-6">
            Hi I am Nursel.I'am a front-end.If you are looking for a Developer
            who craft solid and scalable frontend products with great user
            experiences.Let's shake hands with me.
          </p>
          <div class=" flex place-content-between  pt-10">
            <button class="bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
              Hire Me
            </button>
            <a href="https://github.com/NurselKaragoz" target="_blank">
              <button class=" flex bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl ">
                <img src={githupLogo} class=" pr-2 hover: text-colors-white" />
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/nurselkarag%C3%B6z/"
              target="_blank"
            >
              <button class=" flex bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
                <img src={linkedinLogo} class=" pr-2" /> Linkedin
              </button>
            </a>
          </div>
        </div>
        <div class="flex text-right">
          <img class=" h-auto max-w-lg mr-4" src={deneme} />
        </div>
      </div>
    </div>
  );
}
export default Introduce;
