import React from "react";
import ReactDOM from "react-dom/client";
import Component from "./component/Component.tsx";
// import Component from "./component/MinimalComponent.tsx";

import { type WindmillProps } from "./global";

export function customComponent(props: WindmillProps<any>) {
  ReactDOM.createRoot(document.getElementById(props.id)!).render(
    <React.StrictMode>
      <Component
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
