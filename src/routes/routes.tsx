import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom";

import SideEffectsContainer from "components/NavigationContainer";
import SignUp from "modules/Auth/SignUp";
import SignIn from "modules/Auth/SignIn";
import Main from "modules/Main";
import { Routes, pages } from "./types";
import Map from "modules/Map";

const Router = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path={pages[Routes.main]()} element={<Main />}>
          <Route
            path={pages[Routes.profile]()}
            element={
              <div>
                <input type="file" accept="image/*" capture="environment" />
              </div>
            }
          />
          <Route path={pages[Routes.map]()} element={<Map />} />
        </Route>
        <Route path={pages[Routes.signup]()} element={<SignUp />} />
        <Route path={pages[Routes.login]()} element={<SignIn />} />
      </ReactRoutes>
      <SideEffectsContainer />
    </BrowserRouter>
  );
};

export default Router;
