import type { ComponentPropsWithoutRef } from "react";
import "./Link.css";

export type LinkProps = Omit<ComponentPropsWithoutRef<"a">, "href" | "target" | "rel"> & {
  href: string;
  variant?: "default" | "muted";
  external?: boolean;
};

export function Link({
  href,
  variant = "default",
  external = false,
  className = "",
  children,
  ...props
}: LinkProps) {
  return (
    <a
      {...props}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`demo-link demo-link--${variant} ${className}`.trim()}
    >
      {children}
      {external && (
        <>
          <span className="demo-link__arrow" aria-hidden="true">
            <svg
              className="demo-link__arrow"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M4 12L12 4M5 4H12V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="demo-link__sr-only"> (opens in a new tab)</span>
        </>
      )}
    </a>
  );
}
