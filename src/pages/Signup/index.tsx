import { useState } from "react";
import { Image, Button, Spinner } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiEnvelope, BiLock, BiUser } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import logo from "@/assets/chatvia-logo.png";
import { routes } from "@/routes";
import { SignUpSchema } from "@/Schema/authSchema";
import instance from "@/api/axios/index";

const Signup = () => {
  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({ resolver: yupResolver(SignUpSchema) });

  const onSubmit = async (data: SignUpSchema) => {
    setIsLoading(true);

    const response = await instance.post("/register", data);
    setIsLoading(false);

    if (!response?.data?.isError) {
      toast.success(response?.data?.message);
      navigation(routes.auth.root);
    } else {
      toast.error(response?.data?.message);
    }
  };

  return (
    <>
      <ToastContainer />
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
                <label htmlFor="phone">Phone</label>
                <div>
                  <BiEnvelope size={20} />
                  <input
                    type="phone"
                    placeholder="Enter phone"
                    className="w-full p-3 focus:outline-none text-sm"
                    {...register("phone")}
                  />
                </div>
                <p className="text-xs text-red-500">{errors?.phone?.message}</p>
              </article>
              <article>
                <label htmlFor="username">Username</label>
                <div>
                  <BiUser size={20} />
                  <input
                    type="text"
                    placeholder="Enter username"
                    className="w-full p-3 focus:outline-none text-sm"
                    {...register("username")}
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors?.username?.message}
                </p>
              </article>
              <article>
                <label htmlFor="username">Password</label>
                <div>
                  <BiLock size={20} />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="w-full p-3 focus:outline-none text-sm"
                    {...register("password")}
                  />
                </div>
                <p className="text-xs text-red-500">
                  {errors?.password?.message}
                </p>
              </article>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              onClick={handleSubmit(onSubmit)}
              className={`bg-deep-blue-100 text-white font-medium rounded ${
                isLoading && "opacity-55"
              }`}
            >
              {isLoading ? (
                <div className="flex gap-2 items-center">
                  <Spinner size="sm" color="white" /> Please wait
                </div>
              ) : (
                "Sign up"
              )}
            </Button>
            <span>
              Already have an account?{" "}
              <Link
                to={routes.auth.root}
                className="text-deep-blue-100 font-medium"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signup;
