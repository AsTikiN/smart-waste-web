import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { getNavigationLink } from "redux/reducers/appReducer";

const SideEffectsContainer = () => {
  const link = useSelector(getNavigationLink);
  const navigate = useNavigate();

  useEffect(() => {
    if (!link) return;

    navigate(link);
  }, [link]);
  return <></>;
};

export default SideEffectsContainer;
