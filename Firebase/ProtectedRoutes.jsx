import { Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext"; // Import your AuthContext

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? <Element {...props} /> : <Navigate to="/login" />;
      }}
    />
  );
};

export default ProtectedRoute;
