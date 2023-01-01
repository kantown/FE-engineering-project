import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "store/userStore";
import "./home.scss";

export function HomePage() {
  const { user, resetStore } = useUserStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.username) {
      resetStore();
      navigate("/login");
    }
  }, [resetStore, user, navigate]);

  return <div className="home-page">XDD</div>;
}
