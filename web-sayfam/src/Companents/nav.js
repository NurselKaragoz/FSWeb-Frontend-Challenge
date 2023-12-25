function NavigatorBar() {
  return (
    <div>
      <div className="flex place-content-between dark:bg-colors-black200">
        <button className=" text-left bg-colors-purple border-colors-purple text-colors-purpletext rotate-45 px-2 py-1 rounded-full">
          N
        </button>

        <button className="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex  px-3 border  hover:border-colors-bluex  rounded-xl">
          Skills
        </button>
        <button className="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex px-3 border  hover:border-colors-bluex  rounded-xl">
          Projects
        </button>
        <button className="bg-transparent border-colors-transparent text-colors-graytext hover:text-colors-bluex px-3 border  hover:border-colors-bluex  rounded-xl">
          Hire Me
        </button>
      </div>
    </div>
  );
}
export default NavigatorBar;
