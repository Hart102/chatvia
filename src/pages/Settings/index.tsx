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
  Spinner,
} from "@nextui-org/react";
import { FaAngleDown } from "react-icons/fa6";
import ManageProfile from "@/components/ManageProfile";
import ManagePrivacy from "@/components/ManagePrivacy";
import { AccordionItemClass } from "@/utils/customStyles";
import { BiSolidPencil } from "react-icons/bi";
import instance from "@/api/axios";
import { toast, ToastContainer } from "react-toastify";
import { imageUrl } from "@/utils/appwriteImageurl";

const Settings = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedAccordion, setSelectedAccordion] = useState<string>("1");
  const [selectedValue, setSelectedValue] = useState<string>("available");
  const [oldProfileImage, setOldProfileImage] = useState<string>("");
  const [newProfileImage, setNewProfileImage] = useState<string>("");

  const handleSubmit = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      setNewProfileImage(previewURL);
    }

    setIsLoading(true);
    const { data } = await instance.put(
      "/update-profile-photo",
      { file: file, profile_photo_id: oldProfileImage },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    setIsLoading(false);

    if (data.isError) {
      toast.error(data?.message);
      return;
    }
    setOldProfileImage(data?.payload);
  };

  return (
    <>
      <ToastContainer />
      <div className="w-screen md:w-full h-screen md:h-fit py-8 flex flex-col gap-6 bg-deep-gray-100 [&_button]:border-0">
        <p className="text-lg md:text-xl font-medium px-4 md:px-6">Settings</p>
        <div className="flex flex-col gap-3 items-center py-2 px-4 md:px-5 border-b pb-8 [&_p]:text-gray-500">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="relative">
              {newProfileImage == "" ? (
                <Avatar
                  radius="full"
                  src={imageUrl(oldProfileImage)}
                  className="w-[100px] h-[100px]"
                  classNames={{ img: "rounded-full" }}
                />
              ) : (
                <Avatar
                  radius="full"
                  src={newProfileImage}
                  className="w-[100px] h-[100px]"
                  classNames={{ img: "rounded-full" }}
                />
              )}
              <div className="absolute w-full h-full top-0 rounded-full flex items-end justify-end">
                <label
                  htmlFor="profile-image"
                  className="w-[30px] h-[30px] bg-deep-gray-200 shadow flex items-center justify-center rounded-full cursor-pointer"
                >
                  {!isLoading ? (
                    <BiSolidPencil size={18} />
                  ) : (
                    <Spinner size="sm" />
                  )}
                </label>
                <input
                  type="file"
                  id="profile-image"
                  disabled={isLoading}
                  className="hidden"
                  onChange={(event) => handleSubmit(event)}
                />
              </div>
            </div>
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
              <ManageProfile setProfileImage={setOldProfileImage} />
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
    </>
  );
};

export default Settings;
