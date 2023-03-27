import DashBoard from "pages/dashboard";
import Login from "pages/login";

export const routes = [
  {
    path: "/",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/dashboard",
    component: <DashBoard />,
    exact: true,
    auth: true,
  },
  {
    path: "/2",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/3",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/4",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/5",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/6",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/7",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/8",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/9",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/10",
    component: <Login />,
    exact: true,
    auth: false,
  },
  {
    path: "/11",
    component: <Login />,
    exact: true,
    auth: false,
  }
];
