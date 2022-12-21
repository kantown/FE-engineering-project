import { PersonFilledIcon } from "assets/person-filled-icon";
import { Button } from "components/form/button";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";
import "./profile.scss";

export const Profile = () => {
  const { user } = useUserStore();
  const navigate = useNavigate();
  return (
    <div className="profile">
      <PersonFilledIcon className="profile__icon" />
      <div className="profile__data-section">
        <div className="profile__user-data">
          <span>Username: {user.username}</span>
          <span>Email: {user.email}</span>
        </div>
        <Button
          className="profile__edit-button"
          text="Edit Profile"
          onClick={() => navigate("/edit-profile")}
        />
      </div>
    </div>
  );
};
