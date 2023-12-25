function Profile() {
  return (
    <div className="m-auto max-w-6xl border-t-2 border-colors-purple100 ">
      <h1 className="font-semibold text-4xl text-left  dark:text-colors-gray200">
        Profile
      </h1>
      <div className="pt-10 pb-5 flex flex-row  dark:bg-colors-black200 gap-4">
        <div className="text-left">
          <ul>
            <h5 className="text-colors-bluex dark:text-colors-purple200">
              Profile
            </h5>
            <li className="text-colors-black font-semibold dark:text-colors-white">
              Doğum Tarihi
            </li>
            <li className="text-colors-blackt font-semibold dark:text-colors-white">
              İkamet Şehri
            </li>
            <li className="text-colors-black font-semibold dark:text-colors-white">
              EğitimDurumu
            </li>
            <li className="text-colors-black font-semibold dark:text-colors-white">
              Tercih Ettiği Rol
            </li>
          </ul>
        </div>
        <div className="text-left">
          <ul className="dark:text-colors-white pt-6">
            <li className="text-colors-black font-normal dark:text-colors-white">
              07.08.1994
            </li>
            <li className="text-colors-black font-normal dark:text-colors-white">
              Izmir
            </li>
            <li className="text-colors-black font-normal dark:text-colors-white">
              Erciyes Ü. Mekatronik Müh. 2017
            </li>
            <li className="text-colors-black font-normal dark:text-colors-white">
              Frontend UI
            </li>
          </ul>
        </div>
        <div className="basis-1/2 text-left">
          <h5 className="text-colors-bluex flex dark:text-colors-purple200">
            About Me
          </h5>
          <p className="text-colors-graytext dark:text-colors-white">
            iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac
            tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing at in tellus integer feugiat scelerisque varius morbi
            enim nunc faucibus a pellentesque sit amet porttitor eget dolor
            morbi
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
