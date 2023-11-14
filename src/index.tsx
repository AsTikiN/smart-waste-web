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
        }}
      />
      <ToastContainer position="bottom-right" autoClose={2500} />
    </Provider>
  </>,
  document.getElementById("root"),
);
