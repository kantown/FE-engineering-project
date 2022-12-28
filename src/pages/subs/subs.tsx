import { useEffect } from "react";
import axios from "utils/axios";

export const SubsPage = () => {
  useEffect(() => {
    const fetchSubs = async () => {
      const res = await axios.get("/subscriptions/getSubs/");
      console.log(res);
    };
    fetchSubs();
  }, []);

  return <div>subs</div>;
};
