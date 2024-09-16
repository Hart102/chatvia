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
  username?: string;
  phone?: string;
  password?: string;
  location?: string;
  bio?: string;
  friends?: string[];
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  photo_id: string;
};

export type messageObjectType = {
  _id: string;
  user: string;
  img: string;
  name: string;
  message: string;
  time: string;
};

// createdAt: "2024-09-15T08:59:23.573Z";
// friend_id: "66e099851bec67575a9c79dc";
// message: "Hello";
// photo_id: "";
// sender_id: "66e099551bec67575a9c79d8";
// updatedAt: "2024-09-15T08:59:23.573Z";
// username: "jerry";
// _id: "66e6a1eb4fd70851ba036869";

export type MessageType = {
  _id: string;
  username?: string;
  photo_id: string;
  sender_id: string;
  friend_id: string;
  message: string;
  friend_photo_id: string;
  friend_username: string;
  createdAt?: string;
  updatedAt?: string;
};

// export type MessageType = {
//   _id: string;
//   username?: string;
//   profileImg?: string;
//   email: string;
//   message: string;
//   timeStamp: string;
//   unreadCount: number;
// };
