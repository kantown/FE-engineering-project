import { FormEvent, useState } from "react";
import { Button } from "components/form/button";
import { CustomFrom } from "components/form/custom-form";
import { Input } from "components/form/input";
import "./sign-up.scss";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== repeatedPassword) {
      console.assert("Passwords do not match");
    }
    const body: BodyInit = JSON.stringify({ username, password, email });
    const res = await fetch("http://localhost:8080/users/register/", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body,
    });
    if (res) {
      console.log("Account created");
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-page__container">
        <CustomFrom onSubmit={submitForm} submitButton={<Button text="Submit" />}>
          <h1 className="sign-up-page__form-header">Register</h1>
          <Input
            type="text"
            name="login"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="new-password"
          />
          <Input
            type="password"
            name="repeatedPassword"
            onChange={(e) => setRepeatedPassword(e.target.value)}
            placeholder="Repeat Password"
          />
          <Input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </CustomFrom>
      </div>
    </div>
  );
};
