import { toast, ToastContainer } from "react-toastify";
import { ProfileSchema } from "@/Schema/profileSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@nextui-org/react";
import { BiEditAlt } from "react-icons/bi";
import React, { useEffect, useState } from "react";
import instance from "@/api/axios";
import { current_user } from "@/api/currentUser";

type setImageProp = {
  setProfileImage: React.Dispatch<React.SetStateAction<string>>;
};

const ManageProfile: React.FC<setImageProp> = ({ setProfileImage }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ProfileSchema>({
    resolver: yupResolver(ProfileSchema),
  });

  useEffect(() => {
    const FetchUser = async () => {
      if (current_user() !== null) {
        const { data } = await instance.get(
          `/fetch-user/${current_user()?._id}`
        );
        if (!data.isError) {
          setValue("phone", data?.payload?.phone);
          setValue("username", data?.payload?.username);
          setValue("location", data?.payload?.location);
          setValue("bio", data?.payload?.bio);

          setProfileImage(data?.payload?.photo_id);
        }
      }
    };

    FetchUser();
  }, [setValue, setProfileImage]);

  const onSubmit = async (data: ProfileSchema) => {
    setIsLoading(true);
    const response = await instance.post("/update-profile", data);
    setIsLoading(false);

    if (response?.data?.isError) {
      toast.error(response?.data?.message);
      return;
    }
    toast.success(response?.data?.message);
  };

  const btnCass =
    "w-fit self-end bg-deep-gray-200 bg-opacity-80 text-gray-700 px-1 py-1.5 rounded";

  return (
    <>
      <ToastContainer />
      <form
        className="flex flex-col gap-5 py-3 [&_p]:font-medium [&_div]:flex [&_div]:flex-col [&_div]:gap-1 [&_input]:text-gray-700
       [&_input]:font-medium [&_input]:text-sm [&_input]:capitalize [&_input]:outline-none [&_input]:py-1"
      >
        <div className="flex justify-end">
          {isDisabled ? (
            <Button
              size="sm"
              className={btnCass}
              onClick={() => setIsDisabled(false)}
              startContent={<BiEditAlt size={15} className="cursor-pointer" />}
            >
              Edit
            </Button>
          ) : (
            <Button
              size="sm"
              className={btnCass}
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          )}
        </div>
        <div>
          <span>Username</span>
          <input disabled={isDisabled} {...register("username")} />
        </div>
        <div>
          <span>Phone Number</span>
          <input type="tel" disabled={isDisabled} {...register("phone")} />
        </div>
        <div>
          <span>Location</span>
          <input disabled={isDisabled} {...register("location")} />
        </div>
        <div>
          <span className="font-medium">Bio</span>
          <textarea
            {...register("bio")}
            className="p-2 border outline-none resize-none h-20"
          />
          <p className="text-xs text-red-500">{errors?.bio?.message}</p>
        </div>
      </form>
    </>
  );
};

export default ManageProfile;
