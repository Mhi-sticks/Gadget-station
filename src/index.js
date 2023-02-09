import React from "react";
import ReactDOM from "react-dom/client";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import Store from "./redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={Store}>
      <App />
    </Provider>
  </>
);


