import { Avatar } from "@nextui-org/react";
import { BiSolidPhoneIncoming, BiSolidPhoneOff } from "react-icons/bi";

const VioceCall = () => {
  return (
    <div className="h-full flex flex-col items-center justify-around gap-4 p-4 md:p-8">
      <div className="text-xs text-gray-600">
        {/* <p>Calling ...</p> */}
        <span>0:00</span>
      </div>

      <div className="flex flex-col gap-4 text-center font-medium">
        <Avatar src="" className="w-24 h-24" />
        <p>Hart</p>
      </div>

      <div className="w-full md:w-1/3 flex items-center justify-around [&_div]:w-[50px] [&_div]:h-[50px] [&_div]:rounded-full [&_div]:flex [&_div]:items-center [&_div]:justify-center [&_div]:cursor-pointer text-white mb-8">
        <div className="bg-red-500">
          <BiSolidPhoneOff size={18} />
        </div>
        <div className="bg-green-500">
          <BiSolidPhoneIncoming size={18} />
        </div>
      </div>
    </div>
  );
};

export default VioceCall;
