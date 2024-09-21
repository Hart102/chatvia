import { Avatar } from "@nextui-org/react";
import { BiSolidPhoneOff } from "react-icons/bi";

const VideoCall = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around gap-4 p-4 md:p-8">
      <p className="text-gray-500 text-center">0:00</p>

      {/* <div> */}
      <div className="h- flex flex-col md:flex-row gap-4 capitalize text-gray-600 text-xs">
        <div className="w-1/2 h-[250px] bg-white rounded shadow-md flex items-center justify-center relative">
          {/* <video src="" className="object-cover w-full h-full"></video> */}
          <Avatar src="" className="w-24 h-24" />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-end p-4">
            <p className="bg-white bg-opacity-40 px-2 py-1 rounded">justman</p>
          </div>
        </div>
        <div className="w-1/2 h-[250px] bg-white rounded shadow-md flex items-center justify-center relative">
          {/* <video src="" className="object-cover w-full h-full"></video> */}
          <Avatar src="" className="w-24 h-24" />
          <div className="absolute top-0 left-0 w-full h-full flex items-end justify-end p-4">
            <p className="bg-white bg-opacity-40 px-2 py-1 rounded">Hart</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <div className="flex flex-col items-center gap-2 text-xs text-gray-600">
          <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center cursor-pointer bg-red-500 text-white">
            <BiSolidPhoneOff size={18} />
          </div>
          <p>End Call</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default VideoCall;
