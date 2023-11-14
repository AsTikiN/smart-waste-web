import { BrowserRouter, Route, Routes } from "react-router-dom";

import SideEffectsContainer from "components/SideEffectsContainer/SideEffectsContainer";
import SignUp from "modules/Auth/SignUp";
import SignIn from "modules/Auth/SignIn";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={"/signup"} element={<SignUp />} />
      <Route path={"/signin"} element={<SignIn />} />
    </Routes>
    <SideEffectsContainer />
  </BrowserRouter>
);

export default Router;
