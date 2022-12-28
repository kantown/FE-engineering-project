import { Button } from "components/form/button";
import { CustomFrom } from "components/form/custom-form";
import { Input } from "components/form/input";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateUser } from "services/user-service";
import { User, useUserStore } from "store/userStore";
import { PATHS } from "utils/constants";
import "./edit-profile.scss";

export const EditProfile = () => {
  const { user, setUser } = useUserStore();
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const navigate = useNavigate();
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    if (user.username !== username || user.email !== email) {
      const updatedUser = (await updateUser({ username, email })) as User;
      if (updatedUser) {
        setUser({ ...updatedUser });
        navigate(PATHS.PROFILE);
        return;
      }
      console.error("Update error");
    }
  };

  return (
    <div className="edit-profile">
      <CustomFrom onSubmit={submitForm} submitButton={<Button text="Save" />}>
        <h1 className="edit-profile__form-header">Edit profile</h1>
        <Input
          type="text"
          name="login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          autoComplete="username"
          inputClassName="edit-profile__input"
        />
        <Input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          autoComplete="current-password"
          inputClassName="edit-profile__input"
        />
      </CustomFrom>
    </div>
  );
};
