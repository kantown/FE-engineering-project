import { EditProfile } from "pages/edit-profile";
import { HomePage } from "pages/home";
import { Profile } from "pages/profile";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "utils/constants";

const ROUTES = [
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
  {
    path: PATHS.EDIT_PROFILE,
    element: <EditProfile />,
  },
];

export const AppRouter = () => {
  return (
    <Routes>
      {ROUTES.map(({ path, element }) => (
        <Route key={path} element={element} path={path} />
      ))}
    </Routes>
  );
};
