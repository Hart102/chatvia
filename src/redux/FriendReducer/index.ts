import { SELECT_FRIEND } from "../actionType";
import { UserType } from "@/type/index";

const initialState = {
  selectedFriend: null,
};

type SelectFriendAction = {
  type: typeof SELECT_FRIEND;
  payload: UserType;
};

const FriendReducer = (state = initialState, action: SelectFriendAction) => {
  switch (action.type) {
    case SELECT_FRIEND:
      return { ...state, selectedFriend: action.payload };
    default:
      return state;
  }
};

export default FriendReducer;
