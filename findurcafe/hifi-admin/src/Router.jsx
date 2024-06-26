import { createBrowserRouter } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Cafe from "./screens/Cafe";
import Ads from "./screens/Ads";
import AddCafe from "./screens/AddCafe";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword";
import UpdateProfile from "./screens/UpdateProfile";
import { authenticating, authorizing } from "./middleware/authenticating";
import UpdateCafe from "./screens/UpdateCafe";
import MainPage from "./screens/MainPage";
import Details from "./screens/Details";
import Register from "./screens/Register";
import AddReview from "./screens/AddReview";

const routes = createBrowserRouter([
  {
    path: "/",
    loader: authorizing,
    element: <MainPage />,
  },
  {
    path: "/article/:id",
    loader: authenticating,
    element: <Details />,
  },
  {
    path: "/article/:id/review",
    loader: authenticating,
    element: <AddReview />,
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
    path: "/dashboard",
    element: <Dashboard />,
    loader: authenticating,
  },
  {
    path: "/cafe",
    element: <Cafe />,
    loader: authenticating,
  },
  {
    path: "/ads",
    element: <Ads />,
    loader: authenticating,
  },
  {
    path: "/cafe/:id",
    element: <div>ok 3</div>,
    loader: authenticating,
  },
  {
    path: "/cafe/:id/edit",
    element: <UpdateCafe />,
    loader: authenticating,
  },
  {
    path: "/create",
    element: <AddCafe />,
    loader: authenticating,
  },
  {
    path: "/profile",
    element: <Profile />,
    loader: authenticating,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
    loader: authenticating,
  },
  {
    path: "/update-profile",
    element: <UpdateProfile />,
    loader: authenticating,
  },
]);

export default routes;
