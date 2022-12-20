import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import "./home.scss";

export function HomePage() {
  const { user, resetStore } = useUserStore();
  const navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (!user.username) {
      console.log("HomePage: ", user.username, user.email);
      resetStore();
      navigate("/login");
    }
  }, [resetStore, user, navigate]);

  return (
    <div className="home-page">
      <div className="home-page__menu"></div>
      <main className="home-page__main">
        <div className="home-page__header"></div>
        <div className="home-page__content"></div>
      </main>
    </div>
  );
}
