import { Button } from "@nextui-org/react";
import { BiEditAlt } from "react-icons/bi";

const ManageProfile = () => {
  return (
    <form
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
          startContent={<BiEditAlt size={20} className="cursor-pointer" />}
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
        <input value={"California, USA"} className="capitalize outline-none" />
      </div>
    </form>
  );
};

export default ManageProfile;
