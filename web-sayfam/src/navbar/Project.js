import photoWorkintech from "./workintech.png";
import randomimg from "./randomJokes.png";
import Journey from "./Journey.png";

function Project() {
  return (
    <div class="mt-10">
      <h1 class=" font-semibold text-4xl text-left border-t-2 border-colors-purple100 ">
        Projects
      </h1>

      <div class=" flex flex-row justify-between mt-5">
        <div class="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={photoWorkintech} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-colors-blue100 dark:text-white text-left">
                Workintech
              </h5>
            </a>
            <p class="mb-3 font-normal text-colors-graytext dark:text-gray-400 text-left">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div class=" flex justify-start gap-4">
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                react
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                redux
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                axios
              </button>
            </div>
            <div class=" flex justify-between">
              <a
                href="https://github.com/NurselKaragoz/fsweb-s7-challenge-pizza"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                Github
              </a>
              <a
                href="#"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={randomimg} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-colors-blue100 dark:text-white text-left">
                Random Jokes
              </h5>
            </a>
            <p class="mb-3 font-normal text-colors-graytext dark:text-gray-400 text-left">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div class=" flex justify-start gap-4">
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                react
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                redux
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                axios
              </button>
            </div>
            <div class=" flex justify-between">
              <a
                href="https://github.com/NurselKaragoz/fsweb-s7-challenge-pizza"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                Github
              </a>
              <a
                href="#"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-sm bg-white  rounded-lg dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src={Journey} alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight  text-colors-blue100 dark:text-white text-left">
                Journey
              </h5>
            </a>
            <p class="mb-3 font-normal text-colors-graytext dark:text-gray-400 text-left">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div class=" flex  justify-start gap-4">
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                react
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                redux
              </button>
              <button class="text-colors-bluex  bg-colors-transparent py-2 px-3 border border-colors-bluex  rounded-xl">
                axios
              </button>
            </div>
            <div class=" flex justify-between">
              <a
                href="https://github.com/NurselKaragoz/fsweb-s7-challenge-pizza"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                Github
              </a>
              <a
                href="#"
                class=" text-colors-bluex dark:text-blue-500 underline"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
