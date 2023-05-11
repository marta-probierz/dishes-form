import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import configureStore from "./store/configureStore";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Router>
    <Provider store={store}>        
      <App />
    </Provider>
  </Router>
);
