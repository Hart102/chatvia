import { Avatar } from "@nextui-org/react";

const UserAvatar = ({ src }: { src: string }) => {
  return (
    <div className="relative">
      <Avatar radius="full" size="md" src={src} />
      <div className="w-[10px] h-[10px] absolute bottom-0.5 right-0 shadow rounded-full flex items-center justify-center p-0.5 bg-white">
        <div className="w-full h-full bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
};

export default UserAvatar;
