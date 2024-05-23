import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Layout } from "@/components/layout";
import { Home } from "../pages/home";
import { MyEvents } from "../pages/my-events";
import { AccountSettings } from "../pages/account-settings";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { PasswordRecovery } from "../pages/password-recovery";
import { ForgotPassword } from "../pages/forgot-password";
import { NotFound } from "../pages/not-found"; // Create this component

const user = false;

const userRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-events",
    element: <MyEvents />,
  },
  {
    path: "/account-settings",
    element: <AccountSettings />,
  },
];

const noUserRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/password-recovery",
    element: <PasswordRecovery />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
];

const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: user ? userRoutes : noUserRoutes,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
