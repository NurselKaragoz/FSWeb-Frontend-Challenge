import deneme from "./img.png";
import React from "react";
import linkedinLogo from "./LinkedIn.svg";
function Introduce() {
  return (
    <div>
      <div class=" flex-row flex items-center">
        <div class="flex-col text-left">
          <h1 class=" flex max-w-screen-xl text-4xl ">
            Creative thinker <br /> Minimalisim lover
          </h1>
          <p class=" txt-left max-w-full">
            Hi I am Nursel.I'am a front-end.If you are looking for a Developer
            who craft solid and scalable frontend products with great user
            experiences.Let's shake hands with me.
          </p>
          <div class=" flex place-content-between">
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
        </div>
        <div class="flex text-right">
          <img class=" h-auto max-w-lg mr-4" src={deneme} />
        </div>
      </div>
    </div>
  );
}
export default Introduce;
