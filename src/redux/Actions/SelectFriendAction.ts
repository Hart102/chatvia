import { SELECT_FRIEND } from "@/redux/actionType";
import { UserType } from "@/type/index";

export const selectFriend = (friend: UserType) => {
  return {
    type: SELECT_FRIEND,
    payload: friend,
  };
};
