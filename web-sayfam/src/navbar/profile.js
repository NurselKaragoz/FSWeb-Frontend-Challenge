function Profile() {
  return (
    <div class="mt-10 mb-5 border-t border-colors-purple100 ">
      <h1 class="  flex font-semibold text-4xl text-left pt-4 pb-4">Profile</h1>
      <h5 class=" text-colors-bluex text-left flex flex-row">Profile</h5>
      <div class="flex ">
        <ul class=" text-left min-w-fit ">
          <li class=" text-colors-black font-semibold ">Doğum Tarihi</li>
          <li class=" text-colors-blackt font-semibold">İkamet Şehri</li>
          <li class=" text-colors-black  font-semibold">EğitimDurumu</li>
          <li class=" text-colors-black  font-semibold">Tercih Ettiği Rol</li>
        </ul>
        <ul class="  text-left  min-w-fit ml-10">
          <li class=" text-colors-black font-normal">07.08.1994</li>
          <li class=" text-colors-black font-normal ">Izmir</li>
          <li class=" text-colors-black font-normal ">
            Erciyes Ü. Mekatronik Müh. 2017
          </li>

          <li class=" text-colors-black font-normal">Frontend UI</li>
        </ul>
        <div class="text-left ml-16 ">
          <h5 class=" text-colors-bluex flex">About Me</h5>

          <p class="text-colors-graytext max-w-lg">
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
