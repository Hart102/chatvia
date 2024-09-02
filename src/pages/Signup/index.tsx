import { Image, Button } from "@nextui-org/react";

import logo from "@/assets/chatvia-logo.png";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";

const Signup = () => {
  return (
    <main className="w-screen h-screen bg-deep-gray-200 flex justify-center items-center p-2">
      <form className="w-full md:w-4/12 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center font-medium text-2xl gap-2">
            <Image src={logo} width={30} />
            <p>ChatVia</p>
          </div>
          <p className="text-gray-500">Get your Chatvia account now.</p>
        </div>

        <div
          className="w-full flex flex-col gap-4 bg-white text-sm rounded p-6 md:p-10 
        text-gray-500 [&_input]:bg-transparent [&_label]:font-medium"
        >
          <div
            className="flex flex-col gap-6 [&_article]:flex [&_article]:flex-col [&_article]:gap-2 
          [&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_div]:rounded [&_div]:px-3 [&_div]:bg-deep-gray-100"
          >
            <article>
              <label htmlFor="email">Email</label>
              <div>
                <BiEnvelope size={20} />
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full p-3 focus:outline-none text-sm"
                />
              </div>
            </article>
            <article>
              <label htmlFor="email">Username</label>
              <div>
                <BiUser size={20} />
                <input
                  type="text"
                  placeholder="Enter username"
                  className="w-full p-3 focus:outline-none text-sm"
                />
              </div>
            </article>
            <article>
              <label htmlFor="email">Password</label>
              <div>
                <BiLock size={20} />
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full p-3 focus:outline-none text-sm"
                />
              </div>
            </article>
          </div>
          <Button className="bg-deep-blue-100 text-white font-medium rounded">
            Sign up
          </Button>
        </div>
      </form>
    </main>
  );
};

export default Signup;
