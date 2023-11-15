import withPrivateRoute from "hocs/withPrivateRoute";
import { Outlet } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Container } from "@mui/material";

const Main = () => {
  return (
    <>
      <Container sx={{ maxWidth: "600px" }}>
        <Outlet />
      </Container>
      <NavBar />
    </>
  );
};

export default withPrivateRoute(Main);
