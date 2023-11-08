import ReactDOM from "react-dom/client";
import { Setter } from "./global";
import { customComponent } from "./lib";
import React from "react";
import { Control } from "./studio/Control";

let setter: Setter<any> | undefined = undefined;

const outputs: string[] = [];
customComponent({
  id: "root",
  render: true,
  passSetters: (lsetter: Setter<any>) => {
    console.log("passSetters");
    setter = lsetter;
  },
  setOutput: (out) => {
    outputs.push(JSON.stringify(out));
    document.getElementById("logs")!.innerHTML = outputs
      .slice(-10)
      .join("<br>");
    console.log("Outputs: " + JSON.stringify(out, null, 2));
  },
});

const waitForSetter = setInterval(() => {
  if (setter != undefined) {
    clearInterval(waitForSetter);
    ReactDOM.createRoot(document.getElementById("controls")!).render(
      <React.StrictMode>
        <Control setter={setter!} />
      </React.StrictMode>
    );
  }
}, 100);
