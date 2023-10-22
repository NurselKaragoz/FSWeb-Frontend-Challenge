function Footer() {
  return (
    <div className=" bg-colors-gray100 ">
      <p className="text-colors-black100 font-semibold text-4xl text-left ">
        Let's work together on <br />
        your next project
      </p>
      <p className="text-colors-red100 text-left underline mt-10">
        👉 nurselkaragoz@outlook.com
      </p>
      <div>
        <ul className="flex justify-items-start justify-end gap-2 pr-72">
          <li>Personal Blog</li>

          <a
            className="text-colors-green100"
            href=" https://github.com/NurselKaragoz"
            target="_blank"
          >
            Githup
          </a>
          <a
            className="text-colors-blue200"
            href="https://www.linkedin.com/in/nurselkarag%C3%B6z/"
            target="_blank"
          >
            Linkedin
          </a>

          <li></li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
