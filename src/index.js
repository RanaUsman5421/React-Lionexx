import React from "react";
import ReactDOM from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./setupLegacyLibs";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SkeletonTheme baseColor="#e7ecef" highlightColor="#f7f9fa" duration={1.2}>
      <App />
    </SkeletonTheme>
  </React.StrictMode>
);
