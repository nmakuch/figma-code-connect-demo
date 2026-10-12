import { useState } from "react";
import { Button, type ButtonProps } from "./components/Button/Button";
import { Link, type LinkProps } from "./components/Link/Link";

export function App() {
  const [variant, setVariant] = useState<NonNullable<ButtonProps["variant"]>>("primary");
  const [size, setSize] = useState<NonNullable<ButtonProps["size"]>>("medium");
  const [disabled, setDisabled] = useState(false);
  const [buttonLabel, setButtonLabel] = useState("Save changes");
  const [clicks, setClicks] = useState(0);
  const [linkVariant, setLinkVariant] = useState<NonNullable<LinkProps["variant"]>>("default");
  const [newTab, setNewTab] = useState(false);
  const [linkLabel, setLinkLabel] = useState("Read documentation");
  const href = "https://developers.figma.com/docs/code-connect/";

  const buttonSnippet = `import { Button } from "./components/Button/Button";\n\n<Button\n  variant={${JSON.stringify(variant)}}\n  size={${JSON.stringify(size)}}\n  disabled={${disabled}}\n>\n  {${JSON.stringify(buttonLabel)}}\n</Button>`;
  const linkSnippet = `import { Link } from "./components/Link/Link";\n\n<Link\n  href="${href}"\n  variant={${JSON.stringify(linkVariant)}}\n  newTab={${newTab}}\n>\n  {${JSON.stringify(linkLabel)}}\n</Link>`;

  return (
    <main>
      <header>
        <p className="eyebrow">Figma Code Connect experiment</p>
        <h1>Two components. One small experiment.</h1>
        <p className="intro">Explore the real Button and Link components, then connect their matching Figma library components using the included templates.</p>
        <p className="note">This is a local component playground. Code snippets below are local reference examples; view the published Code Connect snippets in Figma Dev Mode.</p>
      </header>

      <section className="experiment" aria-labelledby="button-heading">
        <div>
          <p className="eyebrow">01 / Action</p>
          <h2 id="button-heading">Button</h2>
          <p>Uses a native button. The disabled state prevents activation.</p>
          <div className="controls">
            <label>Button variant
              <select value={variant} onChange={event => setVariant(event.target.value as typeof variant)}>
                <option value="primary">Primary</option><option value="secondary">Secondary</option>
              </select>
            </label>
            <label>Button size
              <select value={size} onChange={event => setSize(event.target.value as typeof size)}>
                <option value="medium">Medium</option><option value="small">Small</option>
              </select>
            </label>
            <label className="full">Button label
              <input value={buttonLabel} onChange={event => setButtonLabel(event.target.value)} />
            </label>
            <label className="checkbox full"><input type="checkbox" checked={disabled} onChange={event => setDisabled(event.target.checked)} /> Disabled</label>
          </div>
        </div>
        <div className="result">
          <div className="preview">
            <Button variant={variant} size={size} disabled={disabled} onClick={() => setClicks(value => value + 1)}>{buttonLabel}</Button>
            <p role="status">Activations: {clicks}</p>
          </div>
          <pre aria-label="Button reference code"><code>{buttonSnippet}</code></pre>
        </div>
      </section>

      <section className="experiment" aria-labelledby="link-heading">
        <div>
          <p className="eyebrow">02 / Navigation</p>
          <h2 id="link-heading">Link</h2>
          <p>Uses a native anchor. New tab adds the arrow and an accessible announcement.</p>
          <div className="controls">
            <label>Link variant
              <select value={linkVariant} onChange={event => setLinkVariant(event.target.value as typeof linkVariant)}>
                <option value="default">Default</option><option value="muted">Muted</option>
              </select>
            </label>
            <label>Link label
              <input value={linkLabel} onChange={event => setLinkLabel(event.target.value)} />
            </label>
            <label className="checkbox full"><input type="checkbox" checked={newTab} onChange={event => setNewTab(event.target.checked)} /> New tab</label>
          </div>
        </div>
        <div className="result">
          <div className="preview"><Link href={href} variant={linkVariant} newTab={newTab}>{linkLabel}</Link></div>
          <pre aria-label="Link reference code"><code>{linkSnippet}</code></pre>
        </div>
      </section>

      <footer>Start with README.md for setup and docs/experiment-plan.md for the presentation script.</footer>
    </main>
  );
}
