import type { ComponentPropsWithoutRef } from "react";
import "./Button.css";

export type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  size?: "small" | "medium";
};

export function Button({
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={`demo-button demo-button--${variant} demo-button--${size} ${className}`.trim()}
    >
      {children}
    </button>
  );
}
