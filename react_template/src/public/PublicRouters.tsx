import React from "react";
import { lazy } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Login } from "./Login";

// Auth

// Quản lý đảng bộ trự thuộc

//
//
const PublicRouters: RouteObject = {
  path: "/",
  element: <Outlet />,
  children: [
    {
      path: "/login",
      index: true,
      element: <Login />,
    },
  ],
};

export default PublicRouters;
