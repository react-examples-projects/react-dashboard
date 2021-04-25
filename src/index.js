import React from "react";
import ReactDOM from "react-dom";
import Routers from "./routers/Routers";
import "./styles/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Routers />
  </React.StrictMode>,
  document.getElementById("root")
);
