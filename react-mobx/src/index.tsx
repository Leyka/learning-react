import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from "./components/Counter";
import { CounterStore } from "./store/counter";

const counterStore = new CounterStore();

ReactDOM.render(<Counter store={counterStore} />, document.getElementById(
  "root"
) as HTMLElement);
