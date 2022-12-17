import React from "react";
import ReactDOM from "react-dom/client";
import { HomePage } from "./pages/home";
import { LoginPage } from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/sign-up";
import { ConfigProvider } from "./components/config-provider/config-provider";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);
