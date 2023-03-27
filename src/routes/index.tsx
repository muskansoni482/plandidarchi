import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "routes/privateRoute";
import { routes } from "routes/routesRules";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "utils/constants";
import PublicRoute from "./publicRoute";

const RouteManager = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          {routes.map(({ path, component, auth }, key) => {
            if (auth) {
              return (
                <Route
                  path={path}
                  element={<PrivateRoute>{component}</PrivateRoute>}
                  key={key}
                />
              );
            } else {
              return (
                <Route
                  path={path}
                  element={<PublicRoute>{component}</PublicRoute>}
                  key={key}
                />
              );
            }
          })}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};
export default RouteManager;
