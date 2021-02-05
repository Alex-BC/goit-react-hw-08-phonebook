import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { isLoggedIn } from "../redux/auth/authSelectors";

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = "/",
  ...otherProps
}) {
  const userLoggedIn = useSelector(isLoggedIn);
  const shouldRedirect = userLoggedIn && restricted;

  return (
    <Route {...otherProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}
