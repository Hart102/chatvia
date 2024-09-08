import instance from "@/api/axios";
import { current_user } from "@/api/currentUser";
import ProfilePreview from "@/components/ProfilePreview";
import { useEffect, useState } from "react";
import { UserType } from "@/type/index";

const Profile = () => {
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const FetchUser = async () => {
      if (current_user() !== null) {
        const { data } = await instance.get(
          `/fetch-user/${current_user()?._id}`
        );
        if (!data.isError) setUser(data?.payload);
      }
    };

    FetchUser();
  }, []);

  return (
    <ProfilePreview
      user={user}
      isPersonalProfile={true}
      backgroundColor="bg-deep-gray-100"
    />
  );
};

export default Profile;
