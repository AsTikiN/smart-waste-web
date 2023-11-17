import { BrowserRouter, Route, Routes as ReactRoutes, Navigate } from "react-router-dom";

import SideEffectsContainer from "components/NavigationContainer";
import SignUp from "modules/Auth/SignUp";
import SignIn from "modules/Auth/SignIn";
import Main from "modules/Main";
import { Routes, pages } from "./types";
import Map from "modules/Map";
import Camera from "modules/Camera";
import Bucket from "modules/Bucket";
import Profile from "modules/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={pages[Routes.main]()} element={<Main />}>
          <Route path={pages[Routes.profile]()} element={<Profile />} />
          <Route path={pages[Routes.map]()} element={<Map />} />
          <Route path={pages[Routes.camera]()} element={<Camera />} />
          <Route path={pages[Routes.bucket]()} element={<Bucket />} />
        </Route>
        <Route path={pages[Routes.signup]()} element={<SignUp />} />
        <Route path={pages[Routes.login]()} element={<SignIn />} />
        <Route path="*" element={<Navigate to={pages[Routes.profile]()} />} />
      </ReactRoutes>
      <SideEffectsContainer />
    </BrowserRouter>
  );
};

export default Router;
