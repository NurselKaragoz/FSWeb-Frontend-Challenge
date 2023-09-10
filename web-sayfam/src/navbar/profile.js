function Profile() {
  return (
    <div>
      <h1 class=" font-semibold text-4xl text-left">Profile</h1>
      <div class="flex">
        <ul class=" text-colors-bluex list-none flex justify-between flex-row">
          Profile
          <ul class=" flex-col">
            <li class=" text-colors-black font-normal text-left">
              Doğum Tarihi
            </li>
            <li class=" text-colors-black font-normal text-left">
              İkamet Şehri
            </li>
            <li class=" text-colors-black font-normal text-left">
              Eğitim Durumu
            </li>
            <li class=" text-colors-black font-normal text-left">
              Tercih Ettiği Rol
            </li>
          </ul>
          <ul>
            <li class=" text-colors-black font-normal ">07.08.1994</li>
            <li class=" text-colors-black font-normal ">Izmir</li>
            <li class=" text-colors-black font-normal ">
              Erciyes Üniversitesi Mekatronik Müh. 2017
            </li>

            <li class=" text-colors-black font-normal text-left">
              Frontend UI
            </li>
          </ul>
        </ul>
        <ul class=" text-colors-bluex list-none flex justify-between flex-col ">
          About Me
          <p class="text-colors-graytext">
            iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac
            tortor dignissim convallis aenean et tortor at risus viverra
            adipiscing at in tellus integer feugiat scelerisque varius morbi
            enim nunc faucibus a pellentesque sit amet porttitor eget dolor
            morbi
          </p>
        </ul>
      </div>
    </div>
  );
}
export default Profile;
