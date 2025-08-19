import { createBrowserRouter } from "react-router";
import NotFound from "../pages/NotFound";
import MainLayout from "../components/layouts/MainLayout";
import Login from "../pages/Login";

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
