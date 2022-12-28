import { AdminPage } from "pages/admin";
import { EditProfile } from "pages/edit-profile";
import { HomePage } from "pages/home";
import { ProfilePage } from "pages/profile";
import { SubsPage } from "pages/subs";
import { Route, Routes } from "react-router-dom";
import { PATHS } from "utils/constants";

const ROUTES = [
  {
    path: PATHS.HOME,
    element: <HomePage />,
  },
  {
    path: PATHS.PROFILE,
    element: <ProfilePage />,
  },
  {
    path: PATHS.SUBSCRIPTIONS,
    element: <SubsPage />,
  },
  {
    path: PATHS.EDIT_PROFILE,
    element: <EditProfile />,
  },
  {
    path: PATHS.ADMIN,
    element: <AdminPage />,
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
