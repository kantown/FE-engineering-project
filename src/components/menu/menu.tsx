import { Link } from "react-router-dom";
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

  return (
    <div className="menu">
      {navigationRoutes.map(({ label, path }) => (
        <Link className="menu__link" to={path}>
          {label}
        </Link>
      ))}
    </div>
  );
};
