import React from "react";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
