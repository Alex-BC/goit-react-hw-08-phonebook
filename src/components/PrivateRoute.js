import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "redux/auth/authSelectors";

export default function PrivateRoute({
  children,
  redirectTo = "/",
  ...otherProps
}) {
  const userLoggedIn = useSelector(isLoggedIn);

  return (
    <Route {...otherProps}>
      {userLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
