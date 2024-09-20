import moment from "moment";

export const getRelativeTime = (timestamp: string) => {
  const time = moment(timestamp);
  return time.fromNow().replace("minutes", "min");
};
