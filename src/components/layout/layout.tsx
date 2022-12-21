import { AppRouter } from "components/app-router";
import { Menu } from "components/menu";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";

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
    <div className="home-page">
      <div className="home-page__menu">
        <Menu />
      </div>
      <main className="home-page__main">
        <div className="home-page__header"></div>
        <div className="home-page__content">
          <AppRouter />
        </div>
      </main>
    </div>
  );
};
