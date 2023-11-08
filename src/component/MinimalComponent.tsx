import { useEffect, useState } from "react";
import "./component.css";
import React from "react";
import { Setter } from "../global";

type Input = any;
function MinimalComponent({
  passSetters,
  setOutput,
  renderInit,
}: {
  passSetters: (setter: Setter<Input>) => void;
  setOutput: (output: any) => void;
  renderInit: boolean;
}) {
  const [render, setRender] = useState(renderInit);
  const [state, setState] = useState(undefined);

  useEffect(() => {
    passSetters({
      onInput: (x) => {
        setState(x);
      },
      onRender: setRender,
    });
  }, [setRender, passSetters]);

  if (!render) {
    return <></>;
  }

  return (
    <>
      {}
      <h1>Minimal Component</h1>
      <pre>{JSON.stringify(state)}</pre>
      <button
        style={{ fontSize: "12px", marginBottom: "10px" }}
        onClick={() => {
          setOutput("hello world");
        }}
      >
        set output
      </button>
    </>
  );
}

export default MinimalComponent;
