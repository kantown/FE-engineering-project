import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "utils/axios";
import { PATHS } from "utils/constants";

export const SubsPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchSubs = async () => {
      const res = await axios.get("/subscriptions/getSubs/");
      console.log(res);
    };
    fetchSubs();
  }, []);

  return (
    <div>
      <div>
        <input type="text" />
        <button onClick={() => navigate(PATHS.ADD_SUBSCRIPTION)}>+</button>
      </div>
    </div>
  );
};
