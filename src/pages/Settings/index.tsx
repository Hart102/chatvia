import { useState } from "react";
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";

const profileOptions = ["everyone", "selected", "nobody"];

const Settings = () => {
  const [selectedValue, setSelectedValue] = useState<string>("available");
  const [profileOption, setProfileOption] = useState<string>("everyone");

  return (
    <div className="w-full min-h-screen md:h-auto py-8 flex flex-col gap-6 bg-deep-gray-100 texy-sm">
      <p className="text-lg md:text-xl font-medium px-4 md:px-6">My Profile</p>

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
            <Dropdown className="text-gray-500 text-sm bg-white shadow-lg w-[150px]">
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  size="sm"
                  endContent={<FaAngleDown />}
                  className="flex capitalize bg-transparent text-gray-500 text-sm"
                >
                  {selectedValue}
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Multiple selection example"
                variant="flat"
                closeOnSelect={true}
                disallowEmptySelection
                selectionMode="single"
              >
                <DropdownItem
                  key="available"
                  className="py-1.5 hover:bg-deep-gray-200"
                  onClick={() => setSelectedValue("available")}
                >
                  Available
                </DropdownItem>
                <DropdownItem
                  key="busy"
                  className="py-1.5 hover:bg-deep-gray-200"
                  onClick={() => setSelectedValue("busy")}
                >
                  Busy
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-5">
        {/* Personal Info */}
        <Accordion showDivider={false} className="w-full flex flex-col gap-2">
          <AccordionItem
            indicator={<FaAngleDown color="black" />}
            key="info"
            aria-label="info"
            title="Personal Info"
            classNames={{
              base: "outline-none text-gray-500 text-sm",
              trigger: "border p-3",
              title: "text-gray-700 font-medium",
              titleWrapper: "w-full text-start",
              indicator: "place-self-end1",
              content: "px-4 border border-t-0 bg-white",
            }}
          >
            <div
              className="flex flex-col gap-4 py-3 [&_p]:font-medium
            [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_input]:text-gray-700 [&_input]:font-medium [&_input]:text-sm"
            >
              <article className="w-full flex items-center justify-between">
                <div>
                  <span>Name</span>
                  <input
                    autoFocus
                    value={"Patricia Smith"}
                    className="capitalize outline-none"
                  />
                </div>
                <Button
                  size="sm"
                  startContent={
                    <BiEditAlt size={20} className="cursor-pointer" />
                  }
                  className="flex bg-deep-gray-200 text-gray-700 px-1 py-1.5 rounded"
                >
                  Edit
                </Button>
              </article>
              <div>
                <span>Email</span>
                <input
                  type="email"
                  value={"patriciasmith@example.com"}
                  className="capitalize outline-none"
                />
              </div>
              <div>
                <span>Location</span>
                <input
                  value={"California, USA"}
                  className="capitalize outline-none"
                />
              </div>
            </div>
          </AccordionItem>

          <AccordionItem
            indicator={<FaAngleDown color="black" />}
            key="privacy"
            aria-label="privacy"
            title="Privacy"
            classNames={{
              base: "outline-none text-gray-500 text-sm",
              trigger: "border p-3",
              title: "text-gray-700 font-medium",
              titleWrapper: "w-full text-start",
              indicator: "place-self-end1",
              content: "px-4 border border-t-0 bg-white md:py-5 ",
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-gray-700 font-medium">Profile Photo</p>
              <Dropdown className="text-sm bg-white shadow-lg w-[150px]">
                <DropdownTrigger>
                  <Button
                    variant="bordered"
                    size="sm"
                    endContent={<FaAngleDown />}
                    className="flex capitalize bg-deep-gray-200 text-gray-700 p-2 rounded text-sm"
                  >
                    {profileOption}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  variant="flat"
                  closeOnSelect={true}
                  disallowEmptySelection
                  selectionMode="single"
                >
                  <div>
                    {profileOptions.map((option) => (
                      <DropdownItem
                        key={option}
                        onClick={() => setProfileOption(option)}
                        className="hover:bg-deep-gray-200 capitalize"
                      >
                        {option}
                      </DropdownItem>
                    ))}
                    <DropdownItem>Last seen</DropdownItem>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Settings;
