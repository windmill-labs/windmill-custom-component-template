import { useEffect, useState } from "react";
import "./component.css";
import React from "react";
import { Setter } from "../global";

type Input = any;

function Component({
  passSetters,
  setOutput,
  renderInit,
}: {
  passSetters: (setter: Setter<Input>) => void;
  setOutput: (output: any) => void;
  renderInit: boolean;
}) {
  const [render, setRender] = useState(renderInit);
  const [state, setState] = useState({ count: 0 });
  const [inputs, setInputs] = useState([] as any[]);

  useEffect(() => {
    const inputsVec: { i: number; value: any }[] = [];
    let i = 0;
    passSetters({
      onInput: (x) => {
        i++;
        inputsVec.push({ i, value: x });
        setInputs([...inputsVec]);
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

      <h1>Windmill Custom Component</h1>
      <div>
        State: <pre>{JSON.stringify(state)}</pre>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <div className="card" style={{ display: "flex", gap: "20px" }}>
          Inputs:
          <div
            style={{
              overflow: "auto",
              maxHeight: "300px",
              border: "1px solid",
              minWidth: "50px",
              backgroundColor: "gray",
            }}
          >
            {inputs.slice(-10).map(({ i, value }) => (
              <div style={{ textAlign: "left" }} key={i}>
                {i}: {JSON.stringify(value)}
              </div>
            ))}{" "}
          </div>
        </div>
        <div className="card" style={{ display: "flex", gap: "20px" }}>
          <div>
            <button
              style={{ fontSize: "12px" }}
              onClick={() => {
                setState((state) => ({ count: state.count + 1 }));
                setOutput(state);
              }}
            >
              Increment state and set output to state{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Component;
