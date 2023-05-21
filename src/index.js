import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Routes";
import "./Resources/css/app.css";
import { firebase } from "./firebase";

const App = (props) => {
  return <Root {...props} />;
};

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App user={user} />);
  console.log(user);
});
