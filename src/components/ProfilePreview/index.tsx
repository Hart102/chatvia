import { FaEllipsisV, FaTimes } from "react-icons/fa";
import {
  Avatar,
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from "@nextui-org/react";
import { BiUser } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { AccordionItemClass } from "@/utils/customStyles";
import { UserType } from "@/type/index";
import { userData } from "@/DummyData";
import { useEffect, useState } from "react";
import { HideProfile } from "@/redux/Actions/ProfileActions";

const ProfilePreview = ({
  isPersonalProfile,
  backgroundColor,
}: {
  isPersonalProfile: boolean;
  backgroundColor?: string;
}) => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserType>();

  useEffect(() => setUser(userData), []);

  const handleCloseProfile = () => {
    dispatch(HideProfile());
  };

  return (
    <div className={`w-screen md:w-fit min-h-screen py-8 ${backgroundColor}`}>
      <Card
        shadow="none"
        radius="none"
        className="bg-transparent flex flex-col gap-6"
      >
        <CardHeader className="p-0 [&_svg]:text-gray-400 [&_svg]:cursor-pointer">
          {isPersonalProfile ? (
            <div className="w-full flex items-center justify-between gap-4 px-4 md:px-5">
              <p className="text-lg md:text-xl font-medium">My Profile</p>
              <FaEllipsisV />
            </div>
          ) : (
            <div className="w-full flex justify-end px-4 md:px-5">
              <FaTimes size={18} onClick={handleCloseProfile} />
            </div>
          )}
        </CardHeader>
        <CardBody>
          <div className="flex flex-col gap-3 items-center py-2 px-4 md:px-5 border-b pb-8 [&_p]:text-gray-500">
            <div className="flex flex-col items-center justify-center gap-3">
              <Avatar
                radius="full"
                src={user?.img}
                className="w-20 h-20 text-large "
                classNames={{ img: "rounded-full" }}
              />
              <div className="flex flex-col gap-1 items-center">
                <b className="font-medium text-lg capitalize">
                  {user?.firstname} {user?.lastname}
                </b>
                <div className="flex items-center gap-1">
                  <div className="w-[9px] h-[9px] rounded-full flex items-center justify-center bg-green-500">
                    <div className="w-[3px] h-[3px] rounded-full bg-white"></div>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">active</p>
                </div>
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter>
          <div className="flex flex-col gap-5 items-center px-4 md:px-5 [&_p]:text-gray-500">
            <p className="leading-[23px] text-sm">{user?.bio}</p>
            <Accordion className="px-0">
              <AccordionItem
                key="about"
                title="About"
                aria-label="about"
                startContent={<BiUser color="black" />}
                classNames={AccordionItemClass}
              >
                <div
                  className="flex flex-col gap-4 py-3 [&_p]:font-medium
            [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_b]:text-gray-700 [&_b]:font-medium [&_b]:text-sm"
                >
                  <div>
                    <span>Name</span>
                    <b className="capitalize">
                      {user?.firstname} {user?.lastname}
                    </b>
                  </div>
                  <div>
                    <span>Email</span>
                    <b>{user?.email}</b>
                  </div>
                  <div>
                    <span>Location</span>
                    <b className="capitalize">{user?.location}</b>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePreview;
