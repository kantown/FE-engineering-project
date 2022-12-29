import axios from "utils/axios";
import { Subscription } from "utils/constants";

export const addSub = async (sub: Subscription) => {
  try {
    await axios.post("/subscriptions/addSub/", {
      sub,
    });
  } catch {
    throw Error("Caught error during adding new sub");
  }
};

export const getSubs = async () => {
  try {
    const res = await axios.get("/subscriptions/getSubs/");
    return res.data;
  } catch {
    throw Error("Couldn't fetch subscriptions");
  }
};
