function Profile() {
  return (
    <div className="pt-10 pb-5 border-t border-colors-purple100 dark:bg-colors-black200 ">
      <h1 className="  flex font-semibold text-4xl text-left pt-4 pb-4  dark:text-colors-gray200">
        Profile
      </h1>
      <h5 className=" text-colors-bluex text-left flex flex-row dark:text-colors-purple200">
        Profile
      </h5>
      <div className="flex ">
        <ul className=" text-left min-w-fit  ">
          <li className=" text-colors-black font-semibold dark:text-colors-white ">
            Doğum Tarihi
          </li>
          <li className=" text-colors-blackt font-semibold dark:text-colors-white">
            İkamet Şehri
          </li>
          <li className=" text-colors-black  font-semibold dark:text-colors-white">
            EğitimDurumu
          </li>
          <li className=" text-colors-black  font-semibold dark:text-colors-white">
            Tercih Ettiği Rol
          </li>
        </ul>
        <ul className="  text-left  min-w-fit ml-10 dark:text-colors-white">
          <li className=" text-colors-black font-normal dark:text-colors-white">
            07.08.1994
          </li>
          <li className=" text-colors-black font-normal dark:text-colors-white ">
            Izmir
          </li>
          <li className=" text-colors-black font-normal dark:text-colors-white ">
            Erciyes Ü. Mekatronik Müh. 2017
          </li>

          <li className=" text-colors-black font-normal dark:text-colors-white">
            Frontend UI
          </li>
        </ul>
        <div className="text-left ml-16 ">
          <h5 className=" text-colors-bluex flex dark:text-colors-purple200">
            About Me
          </h5>

          <p className="text-colors-graytext max-w-lg dark:text-colors-white">
            iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac
            tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing at in <br /> tellus integer feugiat scelerisque varius
            morbi enim nunc faucibus a pellentesque sit amet porttitor eget
            dolor morbi
          </p>
        </div>
      </div>
    </div>
  );
}
export default Profile;
