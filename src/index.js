import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
  </React.StrictMode>
);
