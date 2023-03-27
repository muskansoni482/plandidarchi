import { Navigate } from "react-router-dom";
import { useLocation } from "react-router";
import { useAuth } from "hooks/login/useAuth";
import MainContainer from "components/container";

const PrivateRoute = ({ children }: any) => {
  const auth = useAuth();
  const location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }
  return (
    <MainContainer>
      {children}
    </MainContainer>
  );
};
export default PrivateRoute;
