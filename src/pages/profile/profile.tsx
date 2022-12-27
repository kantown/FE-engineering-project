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
          <span className="profile__data-label">Username: </span>
          <span className="profile__data-value">{user.username}</span>
          <span className="profile__data-label" >Email: </span>
          <span className="profile__data-value">{user.email}</span>
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
