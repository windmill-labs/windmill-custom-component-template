type WindmillProps<Input> = {
  id: string;
  render: boolean;
  passSetters: (setter: Setter<Input>) => void;
  setOutput: (output: any) => void;
};

declare let __COMPONENT_NAME__: string;

export interface global {}

interface Setter<Input> {
  onRender(bool: boolean): void;
  onInput(input: Input): void;
}
declare global {
  interface Window {
    windmill: Record<string, (props: WindmillProps<any>) => void>;
  }
}
