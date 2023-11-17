import withPrivateRoute from "hocs/withPrivateRoute";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUserDataServer, getUserQuestsServer } from "redux/actions/userActions";
import { useEffect } from "react";
import { getHydrated, getLoaders } from "redux/reducers/appReducer";
import { getIsAuthorized } from "redux/reducers/authReducer";
import BrandLoader from "components/Loader/BrandLoader";
import Header from "components/Header";
import { getBinsCoordinatesServer } from "redux/actions/coordinatesActions";
import { getAllBucketItemsServer } from "redux/actions/bucketActions";

const Main = () => {
  const dispatch = useDispatch();

  const isHydrated = useSelector(getHydrated);
  const isAuthorized = useSelector(getIsAuthorized);
  const loaders = useSelector(getLoaders);

  const showBrandLoader = loaders.self || loaders.scanImage || loaders.items || loaders.quests;

  useEffect(() => {
    if (isHydrated && isAuthorized) {
      dispatch(getUserDataServer());
      dispatch(getBinsCoordinatesServer());
      dispatch(getAllBucketItemsServer());
      dispatch(getUserQuestsServer());
    }
  }, [isAuthorized, isHydrated]);

  return (
    <>
      <Header />
      <BrandLoader show={showBrandLoader} />
      <Outlet />
      <NavBar />
    </>
  );
};

export default withPrivateRoute(Main);
