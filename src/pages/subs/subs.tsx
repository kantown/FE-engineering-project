import { useNavigate } from "react-router-dom";
import { PATHS } from "utils/constants";

export const SubsPage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <div>
        <input type="text" />
        <button onClick={() => navigate(PATHS.ADD_SUBSCRIPTION)}>+</button>
      </div>
    </div>
  );
};
