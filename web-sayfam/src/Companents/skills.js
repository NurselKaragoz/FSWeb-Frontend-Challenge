function Skills() {
  return (
    <div className=" pt-10 dark:bg-colors-black200 m-auto max-w-max">
      <h1 className=" font-semibold text-4xl text-left dark:text-colors-gray200 pb-5">
        Skills
      </h1>
      <ul className=" text-colors-blue100 list-none flex justify-around dark:text-colors-purple200">
        <li className="text-left ">
          Java Script
          <p className="text-colors-graytext text-left  max-w-sm dark:text-colors-white">
            diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis
            nunc sed blandit libero volutpat sed cras ornare arcu
          </p>
        </li>

        <li className="text-left">
          React.Js
          <p className="text-colors-graytext text-left  max-w-sm  dark:text-colors-white">
            diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis
            nunc sed blandit libero volutpat sed cras ornare arcu
          </p>
        </li>
        <li className="text-left ">
          Node.Js
          <p className=" text-colors-graytext text-left max-w-sm  dark:text-colors-white">
            diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis
            nunc sed blandit libero volutpat sed cras ornare arcu
          </p>
        </li>
      </ul>
    </div>
  );
}
export default Skills;
