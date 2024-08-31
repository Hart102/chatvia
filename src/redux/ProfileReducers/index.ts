import { HIDE_PROFILE, VIEW_PROFILE } from "@/redux/actionType";

const initialState = false;

type VIEW_PROFILE_ACTION = {
  type: typeof VIEW_PROFILE;
  payload: true;
};

type HIDE_PROFILE_ACTION = {
  type: typeof HIDE_PROFILE;
  payload: false;
};

export type PROFILE_ACTIONS = VIEW_PROFILE_ACTION | HIDE_PROFILE_ACTION;

const ProfileReducer = (state = initialState, action: PROFILE_ACTIONS) => {
  switch (action.type) {
    case VIEW_PROFILE:
      return action.payload;
    case HIDE_PROFILE:
      return action.payload;
    default:
      return state;
  }
};

export default ProfileReducer;
