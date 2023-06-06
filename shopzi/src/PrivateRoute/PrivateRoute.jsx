import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { loginToken } = useContext(AuthContext);
  const location = useLocation();
  return loginToken ? (
    children
  ) : (
    <Navigate to="/sign-in" state={{ from: location }} />
  );
};
export default PrivateRoute;
