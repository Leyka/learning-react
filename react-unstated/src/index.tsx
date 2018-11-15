import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "unstated";
import { Counter } from "./components/Counter";
ReactDOM.render(
  <Provider>
    <Counter />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
