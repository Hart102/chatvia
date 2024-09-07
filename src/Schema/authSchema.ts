import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  phone: yup.string().required("Phone number is required"),
  password: yup.string().required("Password is required"),
});
export type SignInSchema = yup.InferType<typeof SignInSchema>;

export const SignUpSchema = yup.object().shape({
  phone: yup.string().required("Phone number is required"),
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export type SignUpSchema = yup.InferType<typeof SignUpSchema>;
