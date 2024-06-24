import React, { useContext } from "react";
import { AuthContext } from "./../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated, user } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!user || user?.role !== "admin") {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PrivateRoute;
