import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalCSS = createGlobalStyle`
  * {padding:0; margin:0}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
