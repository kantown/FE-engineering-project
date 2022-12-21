import { Button } from "components/form/button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";

export const Profile = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  return (
    <>
      <div>
        <span>Username: {user.username}</span>
        <span>Email: {user.email}</span>
      </div>
      <Button text="Edit Profile" onClick={() => navigate("/edit-profile")} />
    </>
  );
};
