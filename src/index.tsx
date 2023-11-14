import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import App from "./App";

import store from "./redux/store";
import { GlobalStyles } from "@mui/material";

const rootElement = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const Index = () => {
  return (
    <>
      <Provider store={store}>
        <App />
        <GlobalStyles
          styles={{
            body: { margin: 0 },
          }}
        />
        <ToastContainer position="bottom-right" autoClose={2500} />
      </Provider>
    </>
  );
};

rootElement.render(<Index />);
