// url=https://www.figma.com/design/uxUaAqZghMDgP99rt2aoec/Code-Connect-Demo-Library?node-id=1-8
// source=src/components/Button/Button.tsx
// component=Button
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label");
const variant = instance.getEnum("Variant", {
  Primary: "primary",
  Secondary: "secondary",
});
const size = instance.getEnum("Size", {
  Small: "small",
  Medium: "medium",
});
const disabled = instance.getEnum("State", {
  Default: false,
  Hover: false,
  Disabled: true,
});

export default {
  id: "demo-button",
  imports: ['import { Button } from "./components/Button/Button";'],
  // Figma errors are structured sections; these helpers preserve them.
  example: figma.code`<Button${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("size", size)}${figma.helpers.react.renderProp("disabled", disabled)}>
  {${typeof label === "string" ? JSON.stringify(label) : figma.helpers.react.renderPropValue(label)}}
</Button>`,
};
