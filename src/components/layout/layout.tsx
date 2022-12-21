import { AppRouter } from "components/app-router";
import { Menu } from "components/menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";
import "./layout.scss";

export const Layout = () => {
  const { user, resetStore } = useUserStore();
  const navigate = useNavigate();
  console.log("Layout", user);
  useEffect(() => {
    if (!user.username) {
      resetStore();
      navigate("/login");
    }
  }, [resetStore, user, navigate]);

  return (
    <div className="layout">
      <div className="layout__menu">
        <Menu />
      </div>
      <main className="layout__main">
        <div className="layout__header"></div>
        <div className="layout__content">
          <AppRouter />
        </div>
      </main>
    </div>
  );
};
