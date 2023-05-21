import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Routes";
import "./Resources/css/app.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
