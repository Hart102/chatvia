import { BiSearch } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";

const Groups = () => {
  return (
    <div className="w-full min-h-screen md:h-auto py-8 px-4 md:px-5 flex flex-col gap-6 bg-deep-gray-100 text-sm">
      <div className="flex items-center justify-between gap-4">
        <p className="text-lg md:text-xl font-medium">Groups</p>
        <FaUsers className="text-gray-400" />
      </div>

      <form className="flex items-center gap-2 px-4 rounded bg-deep-gray-200">
        <BiSearch size={22} className="text-gray-500" />
        <input
          type="search"
          placeholder="Search messages or users"
          className="w-full outline-none bg-transparent py-3"
        />
      </form>
      {/* Group List */}
      <div className="flex flex-col">
        <div className="flex gap-4 items-center py-2 px-4 md:px-5 rounded cursor-pointer hover:bg-deep-gray-200">
          <div className="font-medium bg-deep-gray-200 text-blue-700 rounded-full h-[50px] w-[50px] flex items-center justify-center">
            G
          </div>
          <p className="font-medium">General</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
