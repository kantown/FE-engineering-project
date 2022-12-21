import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider } from "components/config-provider/config-provider";
import "./index.scss";
import { Router } from "router";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <Router />
    </ConfigProvider>
  </React.StrictMode>
);
