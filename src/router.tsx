import { Layout } from "components/layout";
import { LoginPage } from "pages/login";
import { SignUp } from "pages/sign-up";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useUserStore } from "store/userStore";

export const Router = () => {
  const { user } = useUserStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={user.username ? "/home" : "/login"} />} />
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
        <Route path="/*" element={<Layout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
