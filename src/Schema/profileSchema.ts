import * as yup from "yup";

export const ProfileSchema = yup.object().shape({
  phone: yup.string().required("Phone number is required"),
  username: yup.string().required("Username is required"),
  bio: yup.string().max(124),
  location: yup.string(),
});

export type ProfileSchema = yup.InferType<typeof ProfileSchema>;
