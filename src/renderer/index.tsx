import * as React from "react";
import * as ReactDOM from "react-dom";
import { initialize } from "typeless";
import { Main } from "./views/main/containers/Main";

const { TypelessProvider } = initialize();

ReactDOM.render(
  <TypelessProvider>
    <Main />
  </TypelessProvider>,
  document.getElementById("app")
);
