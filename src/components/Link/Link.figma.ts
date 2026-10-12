// url=https://www.figma.com/design/REPLACE_WITH_FILE_KEY/Demo-Library?node-id=2-1
// source=src/components/Link/Link.tsx
// component=Link
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label");
const variant = instance.getEnum("Variant", {
  Default: "default",
  Muted: "muted",
});
const newTab = instance.getBoolean("New tab");

export default {
  id: "demo-link",
  imports: ['import { Link } from "./components/Link/Link";'],
  // This destination is an example chosen here, not read from a Figma prototype.
  example: figma.code`<Link
  href="https://developers.figma.com/docs/code-connect/"
  variant={${JSON.stringify(variant)}}
  newTab={${newTab}}
>
  {${JSON.stringify(label)}}
</Link>`,
};
