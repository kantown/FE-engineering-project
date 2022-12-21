import { HomePage } from "pages/home";
import { Profile } from "pages/profile";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "utils/constants";

const routes = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.PROFILE,
    element: <Profile />,
  },
  {
    path: PATHS.SUBSCRIPTIONS,
    element: <HomePage />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  );
};
