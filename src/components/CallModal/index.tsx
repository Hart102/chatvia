import { useState } from "react";
import { closeModal } from "@/redux/Actions/ModalActions";
import { Image, Card, CardBody } from "@nextui-org/react";
import { BiPhoneCall, BiSolidVideo } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { io } from "socket.io-client";
import { current_user } from "@/api/currentUser";

const socket = io("http://localhost:5000");
const user = current_user();

const CallModal = ({
  recieverId,
  recieversImage,
  recieversName,
  callType,
}: {
  recieverId: string;
  recieversImage: string;
  recieversName: string;
  callType: string;
}) => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());
  const [callStatus, setCallStatus] = useState<string>("");

  const StartCall = () => {
    if (user) {
      setCallStatus("Connecting...");

      socket.emit("start-call", {
        from_user: user?._id,
        username: user.username,
        photo_id: user?.photo_id,
        to_user: recieverId,
      });
    }
  };

  return (
    <Card shadow="none" radius="none">
      <CardBody>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-col gap-3">
            <div className="flex justify-center">
              <Image
                radius="full"
                src={recieversImage}
                classNames={{ img: "w-[90px] h-[90px]" }}
              />
            </div>
            <div className="flex flex-col gap-0.5 text-center capitalize">
              <p className="font-medium text-lg">{recieversName}</p>
              <span className="text-gray-500 text-sm capitalize">
                {callStatus == "" ? `Start ${callType} call` : callStatus}
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-4 [&_div]:cursor-pointer [&_div]:rounded-full [&_div]:p-3 [&_div]:text-white">
            <div onClick={handleClose} className="bg-red-400">
              <FaTimes size={20} />
            </div>
            <div onClick={StartCall} className="bg-green-500">
              {callType == "video" ? (
                <BiSolidVideo size={20} />
              ) : (
                <BiPhoneCall size={20} />
              )}
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CallModal;
