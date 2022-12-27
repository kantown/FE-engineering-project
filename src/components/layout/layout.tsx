import { PersonFilledIcon } from "assets/person-filled-icon";
import { AppRouter } from "components/app-router";
import { Menu } from "components/menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";
import "./layout.scss";

export const Layout = () => {
  const { user, resetStore } = useUserStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user.username) {
      resetStore();
      navigate("/login");
    }
  }, [resetStore, user, navigate]);

  const logout = () => {
    resetStore();
    navigate("/login");
  };

  return (
    <div className="layout">
      <div className="layout__menu">
        <PersonFilledIcon className="layout__icon" />
        <span className="layout__user">@{user.username}</span>
        <Menu />
      </div>
      <main className="layout__main">
        <div className="layout__header">
          <button
            type="button"
            className="layout__logout-button"
            onClick={() => logout()}
          >
            Logout
          </button>
        </div>
        <div className="layout__content">
          <AppRouter />
        </div>
      </main>
    </div>
  );
};
