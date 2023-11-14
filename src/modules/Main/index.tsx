import withPrivateRoute from "hocs/withPrivateRoute";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";

const Main = () => {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
};

export default withPrivateRoute(Main);
