import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "components/form/button";
import { CustomFrom } from "components/form/custom-form";
import { Input } from "components/form/input";
import { getUserData, login } from "services/user-service";
import { useUserStore } from "store/userStore";
import "./login.scss";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useUserStore();

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const successfullyLoggedIn = await login({ username, password });
    const fetchedData = await getUserData();
    if (fetchedData && successfullyLoggedIn) {
      setUser(fetchedData);
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-page__container">
        <CustomFrom onSubmit={submitForm} submitButton={<Button text="Submit" />}>
          <h1 className="login-page__form-header">Login</h1>
          <Input
            type="text"
            name="login"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            autoComplete="username"
          />
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
        </CustomFrom>
      </div>
    </div>
  );
};
