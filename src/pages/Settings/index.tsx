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
import ManageProfile from "@/components/ManageProfile";
import ManagePrivacy from "@/components/ManagePrivacy";
import { AccordionItemClass } from "@/utils/customStyles";


const Settings = () => {
  const [selectedAccordion, setSelectedAccordion] = useState<string>("1");
  const [selectedValue, setSelectedValue] = useState<string>("available");

  return (
    <div className="w-full min-h-screen md:h-auto py-8 flex flex-col gap-6 bg-deep-gray-100 [&_button]:border-0">
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
            <Dropdown className="text-gray-500 bg-white shadow-lg w-[150px]">
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
        {/*====== Personal Info ======*/}
        <Accordion
          showDivider={false}
          selectedKeys={selectedAccordion}
          className="w-full flex flex-col gap-2"
        >
          <AccordionItem
            key="1"
            aria-label="info 1"
            title="Personal Info"
            onPress={() => setSelectedAccordion("1")}
            indicator={<FaAngleDown color="black" />}
            classNames={AccordionItemClass}
          >
            <ManageProfile />
          </AccordionItem>
          {/*========= Privacy =========*/}
          <AccordionItem
            key="2"
            aria-label="privacy 2"
            title="Privacy"
            onPress={() => setSelectedAccordion("2")}
            indicator={<FaAngleDown color="black" />}
            classNames={AccordionItemClass}
          >
            <ManagePrivacy />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Settings;
