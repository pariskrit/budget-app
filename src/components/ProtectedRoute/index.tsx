import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { currentUserId } from "../../helpers";

function ProtectedRoute() {
  const auth = currentUserId();
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
