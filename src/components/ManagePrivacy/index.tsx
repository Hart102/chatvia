import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Switch,
} from "@nextui-org/react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

const ManagePrivacy = () => {
  const Options = ["everyone", "selected", "nobody"];

  const [profileOption, setProfileOption] = useState<string>("everyone");
  const [statusOption, setStatusOption] = useState<string>("everyone");

  return (
    <div className="flex flex-col gap-4 [&_div]:pb-4 [&_p]:text-gray-700 [&_p]:font-medium">
      {/*========== Profile photo ==========*/}
      <div className="flex items-center justify-between pt-2 border-b">
        <p className="text-gray-700 font-medium">Profile photo</p>
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
            {Options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => setProfileOption(option)}
                className="hover:bg-deep-gray-200 capitalize"
              >
                <p>{option}</p>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      {/*============= Last seen =============*/}
      <Switch
        size="sm"
        classNames={{
          base: "inline-flex flex-row-reverse w-full max-w-md items-center justify-between cursor-pointer border-b pb-5",
          wrapper: "group-data-[selected=true]:bg-[#7269EF] bg-[#7269EF]",
        }}
      >
        <p>Last seen</p>
      </Switch>
      {/*=============== Status ===============*/}
      <div className="flex items-center justify-between pt-2 border-b">
        <p className="text-gray-700 font-medium">Status</p>
        <Dropdown className="text-sm bg-white shadow-lg w-[150px]">
          <DropdownTrigger>
            <Button
              variant="bordered"
              size="sm"
              endContent={<FaAngleDown />}
              className="flex capitalize bg-deep-gray-200 text-gray-700 p-2 rounded text-sm"
            >
              {statusOption}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            variant="flat"
            closeOnSelect={true}
            disallowEmptySelection
            selectionMode="single"
          >
            {Options.map((option) => (
              <DropdownItem
                key={option}
                onClick={() => setStatusOption(option)}
                className="hover:bg-deep-gray-200 capitalize"
              >
                <p>{option}</p>
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default ManagePrivacy;
