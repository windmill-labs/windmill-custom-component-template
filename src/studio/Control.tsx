import React from "react";
import { Setter } from "../global";

export function Control({ setter }: { setter: Setter<number> }) {
  const [checked, setChecked] = React.useState(true);
  const [input, setInput] = React.useState('{"hello": "world"}');

  const handleChange = () => {
    setChecked(!checked);
    setter.onRender(!checked);
  };

  return (
    <div>
      <span>
        Render: <Checkbox value={checked} onChange={handleChange} />
      </span>
      <div>
        Input:
        <textarea
          value={input}
          onChange={(e) => {
            try {
              setInput(e.target.value);
              setter.onInput(JSON.parse(e.target.value));
            } catch (e) {
              console.error(e);
            }
          }}
        />
      </div>
    </div>
  );
}

const Checkbox = ({ value, onChange }) => {
  return (
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
    </label>
  );
};
