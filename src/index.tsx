import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root"),
);
