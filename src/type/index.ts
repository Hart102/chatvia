export type UserType = {
  firstname: string;
  lastname: string;
  bio: string;
  email: string;
  location?: string;
  img?: string;
};

export type messageObjectType = {
  _id: string;
  user: string;
  img: string;
  name: string;
  message: string;
  time: string;
};
