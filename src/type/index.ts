// export type UserType = {
//   firstname: string;
//   lastname: string;
//   bio: string;
//   email: string;
//   location?: string;
//   img?: string;
// };

export type UserType = {
  _id: string;
  username: string;
  phone: string;
  password: string;
  location: string;
  bio: string;
  friends: string[]; // Assuming friends is an array of user IDs (strings)
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  profile_photo_id: string;
};

export type messageObjectType = {
  _id: string;
  user: string;
  img: string;
  name: string;
  message: string;
  time: string;
};

export type FriendsType = {
  _id: string;
  username?: string;
  profileImg?: string;
  email: string;
  message: string;
  timeStamp: string;
  unreadCount: number;
};
