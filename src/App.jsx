import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import RootLayout from "./layouts/RootLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/appointment",
      element: <Appoitment />,
    },
  ]);
  return <RouterProvider router={router} />;
}
