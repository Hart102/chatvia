import { SELECT_FRIEND } from "../actionType";
import { FriendsType } from "@/type/index"; // To be change latar

const initialState = {
  selectedFriend: null,
};

type SelectFriendAction = {
  type: typeof SELECT_FRIEND;
  payload: FriendsType;
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
