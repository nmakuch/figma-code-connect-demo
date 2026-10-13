// url=https://www.figma.com/design/uxUaAqZghMDgP99rt2aoec/Code-Connect-Demo-Library?node-id=1-50
// source=src/components/Link/Link.tsx
// component=Link
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label");
const variant = instance.getEnum("Variant", {
  Default: "default",
  Muted: "muted",
});
const external = instance.getBoolean("External");

export default {
  id: "demo-link",
  imports: ['import { Link } from "./components/Link/Link";'],
  example: figma.code`<Link href="https://developers.figma.com/docs/code-connect/"${figma.helpers.react.renderProp("variant", variant)}${figma.helpers.react.renderProp("external", external)}>
  {${typeof label === "string" ? JSON.stringify(label) : figma.helpers.react.renderPropValue(label)}}
</Link>`,
};
