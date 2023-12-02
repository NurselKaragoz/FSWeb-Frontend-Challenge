import intoImg from "./images/img.png";
import React from "react";
import linkedinLogo from "./images/LinkedIn.svg";
import githupLogo from "./images/github.svg";
import "./cizgi.css";
function Introduce() {
  return (
    <div>
      <div className=" flex-row flex  justify-center dark:bg-colors-black100">
        <div className="flex-col text-left ">
          <p className="text-colors-bluex  w-32 cizgilibaslik">Nursel</p>
          <h1 className=" flex max-w-screen-xl text-6xl ">
            Creative thinker <br /> Minimalisim lover
          </h1>
          <p className=" text-left  text-colors-graytext  max-w-md pt-6">
            Hi I am Nursel.I'am a front-end.If you are looking for a Developer
            who craft solid and scalable frontend products with great user
            experiences.Let's shake hands with me.
          </p>
          <div className=" flex place-content-between  pt-10">
            <button className="bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
              Hire Me
            </button>
            <a href="https://github.com/NurselKaragoz" target="_blank">
              <button className=" btn">
                <img
                  src={githupLogo}
                  className=" pr-2 hover: text-colors-white"
                />
                Github
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/nurselkarag%C3%B6z/"
              target="_blank"
            >
              <button className=" flex bg-transparent border-colors-bluex py-2 px-6 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
                <img src={linkedinLogo} className=" pr-2" /> Linkedin
              </button>
            </a>
          </div>
        </div>
        <div className="flex text-right">
          <img className=" h-auto  mr-4 place-content-end" src={intoImg} />
        </div>
      </div>
    </div>
  );
}
export default Introduce;
