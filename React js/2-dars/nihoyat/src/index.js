import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//import reportWebVitals from './reportWebVitals';

const isLoading = false;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App isLoading={isLoading} />
  </React.StrictMode>
  // document.getElementById("root")
);