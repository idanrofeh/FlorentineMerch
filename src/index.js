import React from "react";
import ReactDOM from "react-dom";
import { RootCmp } from "./RootCmp";
import { Provider } from 'react-redux';
import { store } from "./store/store.js";

import './assets/style/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RootCmp />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
