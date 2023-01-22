import "./index.css";
import { render } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigationProvider } from "./context/navigation";

ReactDOM.createRoot(document.getElementById("root"));
render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
