import { combineReducers } from "redux";
import modalReducer from "@/redux/modalReducer";
import ProfileReducer from "../ProfileReducers";

const rootReducer = combineReducers({
  modal: modalReducer,
  isProfileVisible: ProfileReducer,
});

export default rootReducer;
