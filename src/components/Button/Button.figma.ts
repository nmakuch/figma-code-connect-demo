// url=https://www.figma.com/design/uxUaAqZghMDgP99rt2aoec/Code-Connect-Demo-Library?node-id=1-8&t=Czn9nil8EWjJb4ua-4
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
  Disabled: true,
});

export default {
  id: "demo-button",
  imports: ['import { Button } from "./components/Button/Button";'],
  example: figma.code`<Button
  variant={${JSON.stringify(variant)}}
  size={${JSON.stringify(size)}}
  disabled={${disabled}}
>
  {${JSON.stringify(label)}}
</Button>`,
};
