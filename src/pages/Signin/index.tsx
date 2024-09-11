import { useState } from "react";
import { Image, Button, Spinner } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { BiLock, BiUser } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "@/assets/chatvia-logo.png";
import { routes } from "@/routes";
import { SignInSchema } from "@/Schema/authSchema";
import instance from "@/api/axios/index";
import { setCookie } from "@/api/cookie/index";

const Signin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({ resolver: yupResolver(SignInSchema) });

  const onSubmit = async (data: SignInSchema) => {
    setIsLoading(true);

    const response = await instance.post("/login", data);
    setIsLoading(false);
    
    if (!response?.data?.isError) {
      toast.success(response?.data?.message);
      setCookie({
        name: "chatvia",
        value: JSON.stringify(response?.data?.payoad),
      });
      window.location.href = routes.chat.root;
      return
    }
    toast.error(response?.data?.message);
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
            <p className="text-gray-500 text-center">
              Sign in to continue to Chatvia.
            </p>
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
                  <BiUser size={20} />
                  <input
                    type="tel"
                    placeholder="Phone email"
                    className="w-full p-3 focus:outline-none text-sm"
                    {...register("phone")}
                  />
                </div>
                <p className="text-xs text-red-500">{errors?.phone?.message}</p>
              </article>
              <article>
                <label htmlFor="password">Password</label>
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
                "Sign in"
              )}
            </Button>
            <span>
              Don't have an account ?{" "}
              <Link
                to={routes.auth.signup}
                className="text-deep-blue-100 font-medium"
              >
                Signup now
              </Link>
            </span>
          </div>
        </form>
      </main>
    </>
  );
};

export default Signin;
