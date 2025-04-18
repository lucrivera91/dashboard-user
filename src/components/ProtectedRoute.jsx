import { useAuth0 } from "@auth0/auth0-react";
import { Outlet, useNavigate } from "react-router-dom";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  if (!isAuthenticated) {
    navigate("/");
  }

  return <>{isAuthenticated && <Outlet />}</>;
};
