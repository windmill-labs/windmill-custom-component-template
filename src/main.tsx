import ReactDOM from "react-dom/client";
import { Setter } from "./global";
import { customComponent } from "./lib";
import React from "react";
import { Control } from "./Control";

let setter: Setter<number> | undefined = undefined;
customComponent({
  id: "root",
  render: true,
  passSetters: (lsetter: Setter<number>) => {
    console.log("passSetters");
    setter = lsetter;
  },
  setOutput: (out) => {
    console.log("Output set: " + JSON.stringify(out, null, 2));
  },
});

const waitForSetter = setInterval(() => {
  if (setter != undefined) {
    clearInterval(waitForSetter);
    ReactDOM.createRoot(document.getElementById("controls")!).render(
      <React.StrictMode>
        <Control setter={setter!} />
        <div>Look at console logs to see the output</div>
      </React.StrictMode>
    );
  }
}, 100);
