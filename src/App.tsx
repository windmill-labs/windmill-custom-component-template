import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { Setter } from "./global";

function App({
  passSetters,
  setOutput,
  renderInit,
}: {
  passSetters: (setter: Setter<number>) => void;
  setOutput: (output: any) => void;
  renderInit: boolean;
}) {
  const [render, setRender] = useState(renderInit);
  const [count, setState] = useState(0);

  useEffect(() => {
    passSetters({ onInput: setState, onRender: setRender });
  }, [setState, setRender, passSetters]);

  if (!render) {
    return <></>;
  }

  return (
    <>
      {}

      <h1>Windmill Custom Component</h1>
      <div className="card">
        <button className="mr-4" onClick={() => setState((count) => count + 1)}>
          input count is {count}
        </button>
        <button onClick={() => setOutput(count)}>
          Setting output to {count}
        </button>
      </div>
    </>
  );
}

export default App;
