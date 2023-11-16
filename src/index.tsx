import "react-toastify/dist/ReactToastify.css";

import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";

import store from "./redux/store";
import { GlobalStyles } from "@mui/material";

ReactDOM.render(
  <>
    <Provider store={store}>
      <App />
      <GlobalStyles
        styles={{
          body: { margin: 0 },
          ".gmnoprint, .gm-fullscreen-control": { display: "none" },
          "*": {
            boxSizing: "border-box",
            "*[role='dialog']": {
              zIndex: 1000,
            },
          },
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - 56px)`,
            overflow: "visible",
          },
          ".PrivateSwipeArea-root": {
            height: "0 !important",
          },
        }}
      />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </Provider>
  </>,
  document.getElementById("root"),
);
