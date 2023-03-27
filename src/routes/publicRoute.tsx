import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useAuth } from "hooks/login/useAuth";

const PublicRoute = ({ children }: any) => {
  const auth = useAuth();
  const location = useLocation();
  if (auth) {
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }
  return children ;
};
export default PublicRoute;
