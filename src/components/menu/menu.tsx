import { Link, useLocation } from "react-router-dom";
import { useUserStore } from "store/userStore";
import { PATHS } from "utils/constants";
import "./menu.scss";
export const Menu = () => {
  const navigationRoutes = [
    {
      label: "Home",
      path: PATHS.HOME,
    },
    {
      label: "Profile",
      path: PATHS.PROFILE,
    },
    {
      label: "Subscriptions",
      path: PATHS.SUBSCRIPTIONS,
    },
  ];
  const { user } = useUserStore();
  const location = useLocation();
  console.log(location);
  return (
    <div className="menu">
      {navigationRoutes.map(({ label, path }) => (
        <Link
          className={`menu__link ${location.pathname === path && "menu__link--active"}`}
          key={label}
          to={path}
        >
          {label}
        </Link>
      ))}
      {user.isAdmin && (
        <Link
          className={`menu__link ${
            location.pathname === PATHS.ADMIN && "menu__link--active"
          }`}
          to={PATHS.ADMIN}
        >
          Admin
        </Link>
      )}
    </div>
  );
};
