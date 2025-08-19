import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import MainLayout from "../components/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
