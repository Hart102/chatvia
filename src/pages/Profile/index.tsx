import { FaEllipsisV } from "react-icons/fa";
import { Avatar, Accordion, AccordionItem } from "@nextui-org/react";
import { BiUser } from "react-icons/bi";

const Profile = () => {
  return (
    <div className="w-full h-screen md:h-auto py-8 flex flex-col gap-6 bg-deep-gray-100">
      <div className="flex items-center justify-between gap-4 px-4 md:px-5">
        <p className="text-lg md:text-xl font-medium">My Profile</p>
        <FaEllipsisV className="text-gray-400" />
      </div>

      <div className="flex flex-col gap-3 items-center py-2 px-4 md:px-5 border-b pb-8 [&_p]:text-gray-500">
        <div className="flex flex-col items-center justify-center gap-3">
          <Avatar
            radius="full"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            className="w-20 h-20 text-large "
            classNames={{ img: "rounded-full" }}
          />
          <div className="flex flex-col gap-1 items-center">
            <b className="font-medium">Patricia Smith</b>
            <div className="flex items-center gap-1">
              <div className="w-[10px] h-[10px] rounded-full flex items-center justify-center p-1 bg-green-400">
                <div className="w-full h-full bg-white"></div>
              </div>
              <p className="text-sm text-gray-500">Active</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-center py-2 px-4 md:px-5 [&_p]:text-gray-500 place-s">
        <p className="leading-[23px] text-sm">
          If several languages coalesce, the grammar of the resulting language
          is more simple and regular than that of the individual.
        </p>

        <Accordion className="px-0">
          <AccordionItem
            startContent={<BiUser color="black" />}
            key="about"
            aria-label="about"
            title="About"
            classNames={{
              base: "outline-none text-gray-500",
              trigger: "border p-3",
              title: "text-gray-700 font-medium",
              titleWrapper: "w-full text-start",
              indicator: "place-self-end",
              content: "px-4 border border-t-0 bg-white",
            }}
          >
            <div
              className="flex flex-col gap-4 py-3 [&_p]:font-medium
            [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_b]:text-gray-700 [&_b]:font-medium [&_b]:text-sm"
            >
              <div>
                <span>Name</span>
                <b className="capitalize">Patricia Smith</b>
              </div>
              <div>
                <span>Email</span>
                <b>patriciasmith@example.com</b>
              </div>
              <div>
                <span>Location</span>
                <b className="capitalize">California, USA</b>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Profile;
