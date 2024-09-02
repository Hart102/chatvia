import { combineReducers } from "redux";
import modalReducer from "@/redux/ModalReducer";
import ProfileReducer from "../ProfileReducers";
import friendReducer from "../FriendReducer";

const rootReducer = combineReducers({
  modal: modalReducer,
  isProfileVisible: ProfileReducer,
  selectedFriend: friendReducer,
});

export default rootReducer;
