import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getNavigationLink } from "redux/reducers/appReducer";

const NavigationContainer = () => {
  const navigateTo = useSelector(getNavigationLink);
  const navigate = useNavigate();

  useEffect(() => {
    if (!navigateTo || !navigateTo.link) return;

    navigate(navigateTo.link);
  }, [navigateTo]);

  return <></>;
};

export default NavigationContainer;
