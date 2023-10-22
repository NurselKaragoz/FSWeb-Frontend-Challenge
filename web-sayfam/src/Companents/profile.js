function Profile() {
  return (
    <div className="mt-10 mb-5 border-t border-colors-purple100 ">
      <h1 className="  flex font-semibold text-4xl text-left pt-4 pb-4">
        Profile
      </h1>
      <h5 className=" text-colors-bluex text-left flex flex-row">Profile</h5>
      <div className="flex ">
        <ul className=" text-left min-w-fit ">
          <li className=" text-colors-black font-semibold ">Doğum Tarihi</li>
          <li className=" text-colors-blackt font-semibold">İkamet Şehri</li>
          <li className=" text-colors-black  font-semibold">EğitimDurumu</li>
          <li className=" text-colors-black  font-semibold">
            Tercih Ettiği Rol
          </li>
        </ul>
        <ul className="  text-left  min-w-fit ml-10">
          <li className=" text-colors-black font-normal">07.08.1994</li>
          <li className=" text-colors-black font-normal ">Izmir</li>
          <li className=" text-colors-black font-normal ">
            Erciyes Ü. Mekatronik Müh. 2017
          </li>

          <li className=" text-colors-black font-normal">Frontend UI</li>
        </ul>
        <div className="text-left ml-16 ">
          <h5 className=" text-colors-bluex flex">About Me</h5>

          <p className="text-colors-graytext max-w-lg">
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
