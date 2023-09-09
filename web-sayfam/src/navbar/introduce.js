import deneme from "./img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Introduce() {
  return (
    <div>
      <div class=" flex-row">
        <p class="  flex ">
          Hi I am Nursel.I'am a front-end.If yo are looking for a Developer who
          craft solid and scalable frontend products with great user
          experiences.Let's shake hands with me.
          <img class=" flex " src={deneme} />
        </p>
      </div>
      <FontAwesomeIcon
        icon="fa-brands fa-linkedin-in"
        size="xl"
        style={{ color: "#3730a8" }}
      />
      <button class="bg-transparent border-colors-bluex py-2 px-3 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        Hire Me
      </button>
      <button class="bg-transparent border-colors-bluex py-2 px-3 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        Github
      </button>
      <button class="bg-transparent border-colors-bluex py-2 px-3 border text-colors-bluex hover:text-colors-white  hover:bg-colors-bluex  hover:border-colors-bluex  rounded-xl">
        Linkedin
      </button>
    </div>
  );
}
export default Introduce;
