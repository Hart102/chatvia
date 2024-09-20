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

export type ActiveFriends = {
  _id: string;
  photo_id: string;
  username: string;
};

export type MessageType = {
  _id: string;
  username?: string;
  photo_id: string;
  from_user: string;
  to_user: string;
  message: string;
  createdAt?: string;
};
