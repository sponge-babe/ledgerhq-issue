import { lazy } from "react";
import { useRoutes, Navigate, useNavigate } from "react-router-dom";

import CachedService from "Classes/cachedService";

const Home = lazy(() => import("Pages/Home"));

export default function Routes() {
  const navigate = useNavigate();

  CachedService.navigation = navigate;

  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "*", element: <Navigate to={"/"} replace={true} /> },
  ]);
}
