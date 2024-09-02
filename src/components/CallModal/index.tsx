import { closeModal } from "@/redux/Actions/ModalActions";
import { Image, Card, CardBody } from "@nextui-org/react";
import { BiSolidVideo } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import { useDispatch } from "react-redux";

const CallModal = ({
  recieversImage,
  recieversName,
  callType,
  onclick,
}: {
  recieversImage: string;
  recieversName: string;
  callType: string;
  onclick: () => void;
}) => {
  const dispatch = useDispatch();

  const handleClose = () => dispatch(closeModal());

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
              <span className="text-gray-500 text-sm">
                Start {callType} call
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-4 [&_div]:cursor-pointer [&_div]:rounded-full [&_div]:p-3 [&_div]:text-white">
            <div onClick={handleClose} className="bg-red-400">
              <FaTimes size={20} />
            </div>
            <div onClick={onclick} className="bg-green-500">
              <BiSolidVideo size={20} />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CallModal;
