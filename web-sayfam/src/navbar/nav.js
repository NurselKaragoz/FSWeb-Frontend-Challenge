function NavigatorBar() {
  return (
    <div>
      <div>
        <button class=" justify-self-start bg-colors-purple border-colors-purple text-colors-purpletext rotate-45 px-2 py-1 rounded-full">
          N
        </button>

        <button class="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex hover:py-2 px-3 border  hover:border-colors-bluex  rounded-xl">
          Skills
        </button>
        <button class="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex hover:py-2 px-3 border  hover:border-colors-bluex  rounded-xl">
          Projects
        </button>
        <button class="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex hover:py-2 px-3 border  hover:border-colors-bluex  rounded-xl">
          Hire Me
        </button>
      </div>
    </div>
  );
}
export default NavigatorBar;
