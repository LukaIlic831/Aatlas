import Profile from "../pages/Profile";
import CreatePost from "../pages/CreatePost";
import CategoryPage from "../pages/CategoryPage";
import Post from "../pages/PostPage";
import PasswordReset from "../pages/PasswordReset";
import UpdatePassword from "../pages/UpdatePassword";
import AddUsername from "../pages/AddUsername";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import PostPage from "../pages/PostPage";
import { ReactNode } from "react";

const routes = [
  {
    path: "*",
    component: <ErrorPage />,
  },
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/profile/:id",
    component: <Profile />,
  },
  {
    path: "/create-post",
    component: <CreatePost />,
  },
  {
    path: "/edit-post",
    component: <CreatePost />,
  },
  {
    path: "/category/:name",
    component: <CategoryPage />,
  },
  {
    path: "/post",
    component: <Post />,
  },
  {
    path: "/reset-password",
    component: <PasswordReset />,
  },
  {
    path: "/update-password",
    component: <UpdatePassword />,
  },
  {
    path: "/add-username",
    component: <AddUsername />,
  },
  {
    path: "/post/:id",
    component: <PostPage />,
  },
];

const appRoutes = {
  routes,
};

export default appRoutes;
