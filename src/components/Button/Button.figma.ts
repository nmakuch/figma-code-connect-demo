// url=https://www.figma.com/design/REPLACE_WITH_FILE_KEY/Demo-Library?node-id=1-1
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
