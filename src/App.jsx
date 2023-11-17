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
import Register from "./pages/register/Register";
import Login from "./pages/Login/Login";
import Appointment from "./pages/appointment/Appointment";
import VideoCall from "./pages/video_call/VideoCall";
import Profile from "./pages/profile/Profile";
import Dashboard from "./pages/dashboard/Dashboard";

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
        {
          path: "/video-call",
          element: <VideoCall />,
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
          element: <Appointment />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
