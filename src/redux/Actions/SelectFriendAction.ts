import { SELECT_FRIEND } from "@/redux/actionType";
import { FriendsType } from "@/type/index"; // To be change latar

export const selectFriend = (friend: FriendsType) => {
  return {
    type: SELECT_FRIEND,
    payload: friend,
  };
};
