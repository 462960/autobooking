import React from "react";
import ReactDOM from "react-dom";
import "mobx-react/batchingForReactDom";
import "normalize.css";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./utils/store";

ReactDOM.render(
  <React.Fragment>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.Fragment>,
  document.getElementById("root")
);
