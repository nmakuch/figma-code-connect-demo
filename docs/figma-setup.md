# Build the Figma components

This is a manual construction guide for the small library. Figma UI labels can move; the property names and bindings below are the contract used by the supplied templates.

## Button: create the base component

1. Create a text layer containing `Save changes`.
2. Use Arial Bold, size 16px, line height 20px.
3. Wrap it in a horizontal Auto Layout frame, center the contents, and set a 6px corner radius.
4. Use a 44px medium height, with about 18px horizontal padding. Use hug contents for width. If you include stroke in layout sizing, match the CSS's 2px border; otherwise use fixed heights to keep the appearance close.
5. Give the frame a `#174BCE` fill, white text, and a 2px stroke of the same blue. This is the Primary / Medium / Default appearance.
6. Convert the frame into a main component and name it Button.
7. Select its label text. Expose its text content as a **Text component property** named **Label**, with default `Save changes`. You can create it through the component-property control next to text content, or create it on the main component and bind the text layer to it.

## Button: add the variants

Use Add variant to create a component set. Rename the set Button. Configure three **Variant properties** named **Variant**, **Size**, and **State**.

Duplicate variants until you have these eight unique combinations:

| Variant | Size | State | Style |
| --- | --- | --- | --- |
| Primary | Medium | Default | Blue fill, white text, 44px height |
| Primary | Medium | Disabled | Same, whole variant at 45% opacity |
| Primary | Small | Default | Blue fill, white text, 36px height |
| Primary | Small | Disabled | Same, whole variant at 45% opacity |
| Secondary | Medium | Default | White fill, blue text and border, 44px height |
| Secondary | Medium | Disabled | Same, whole variant at 45% opacity |
| Secondary | Small | Default | White fill, blue text and border, 36px height |
| Secondary | Small | Disabled | Same, whole variant at 45% opacity |

Small uses 14px text, 20px line height, and about 14px horizontal padding. Medium uses 16px text and 20px line height. Keep the 2px border and 6px corner radius.

If editing variant names directly, use names such as:

```text
Variant=Primary, Size=Medium, State=Default
Variant=Secondary, Size=Small, State=Disabled
```

Keep the exposed **Label** text property bound to the label in every variant. Reuse the existing property instead of creating eight separate Label properties.

Create an instance on the Demo page. Verify that selecting it exposes exactly Variant, Size, State, and Label, and that changing Label still works when switching variants.

State is deliberately a variant, since the disabled appearance changes the whole component. The code template converts Default/Disabled to false/true for the native button's disabled prop.

## Link: create the base component

1. Create a text layer containing `Read documentation`.
2. Use Arial Regular, size 16px, line height 24px, underlined, with color `#174BCE`.
3. Create a separate text layer containing `↗`, using the same size and color. Name that layer Arrow.
4. Put both layers in a horizontal Auto Layout frame, with a 6px gap, centered vertically, hug contents for width/height, and no fill or border.
5. Convert the frame into a main component and name it Link.
6. Expose the label's text as a Text property named **Label**.
7. Expose the Arrow layer's visibility as a Boolean property named **New tab**, default false. Bind this Boolean property to the arrow layer's visibility.

Do not create a Boolean property without binding it to the Arrow layer: the component should visibly respond when you toggle New tab on an instance.

## Link: add the variants

Add a second variant and rename the set Link. Configure one Variant property named **Variant**, with:

| Variant | Label and arrow color |
| --- | --- |
| Default | `#174BCE` |
| Muted | `#4B5563` |

In both variants, bind the text to the same Label property and the Arrow visibility to the same New tab property. Keep the arrow as its own layer so the Boolean does not hide the whole link.

There are only two main variants. The Boolean creates the arrow's two visibility states without doubling the main variants.

Create an instance on the Demo page. Verify that selecting it exposes Variant, Label, and New tab. Change the label, switch the variant, and toggle the arrow.

## Publish and make the demo frame

Publish Button and Link from this file as library components. On the Demo page, create a small frame with:

- A heading such as `Update preferences`.
- A Button instance labeled `Save changes`.
- A Link instance labeled `Read documentation`.

The heading and surrounding layout can stay ordinary Figma layers. Code Connect is attached to the main Button and Link component sets, and inspected on their instances.

For a second-file demonstration, enable this published library in a consumer file and insert the components from Assets. Retain the component instances; detaching them loses their connection to the library components.

Copy the main component-set links back into the first lines of the two .figma.ts files, then continue with README step 6.
