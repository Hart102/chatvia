import { HIDE_PROFILE, VIEW_PROFILE } from "@/redux/actionType";

export const ViewProfile = () => {
  return {
    type: VIEW_PROFILE,
    payload: true,
  };
};

export const HideProfile = () => {
  return {
    type: HIDE_PROFILE,
    payload: false,
  };
};
