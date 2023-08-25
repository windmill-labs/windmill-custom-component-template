import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { type WindmillProps } from "./global";

export function customComponent(props: WindmillProps<number>) {
  ReactDOM.createRoot(document.getElementById(props.id)!).render(
    <React.StrictMode>
      <App
        passSetters={props.passSetters}
        setOutput={props.setOutput}
        renderInit={props.render}
      />
    </React.StrictMode>
  );
}

if (window.windmill === undefined) {
  window.windmill = {};
}

window.windmill[__COMPONENT_NAME__] = customComponent;
