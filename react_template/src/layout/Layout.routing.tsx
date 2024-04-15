import React from "react";
import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../pages/home/Home";
import DocumentRouters from "../pages/documents/Document.routing";

const LayoutRoutes: RouteObject = {
  path: "/",
  element: <Outlet />,
  children: [
    { index: true, element: <Home /> },
    {
      path: "home",
      index: true,
      element: <Home />,
    },
    DocumentRouters,
  ],
};

export default LayoutRoutes;
