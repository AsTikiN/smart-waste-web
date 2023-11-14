import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getHydrated } from "redux/reducers/appReducer";
import { getIsAuthorized } from "redux/reducers/authReducer";
import { Routes, pages } from "routes/types";

const withPrivateRoute = <Props extends object>(Component: any) => {
  const Auth = (props: Props) => {
    const navigate = useNavigate();

    const isHydrated = useSelector(getHydrated);
    const isAuthorized = useSelector(getIsAuthorized);

    useEffect(() => {
      if (isHydrated && !isAuthorized) {
        navigate(pages[Routes.login]());
      }
    }, [isAuthorized, isHydrated]);

    return <Component {...props} />;
  };

  return Auth;
};

export default withPrivateRoute;
