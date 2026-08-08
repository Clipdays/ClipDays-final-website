import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  href?: never;
  variant?: "primary" | "glass" | "outline";
};

type LinkButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "glass" | "outline";
  className?: string;
};

export function Button({ children, variant = "primary", className = "", ...props }: ButtonProps) {
  return <button className={`button button-${variant} ${className}`.trim()} {...props}>{children}</button>;
}

export function ButtonLink({ children, href, variant = "primary", className = "" }: LinkButtonProps) {
  return <a className={`button button-${variant} ${className}`.trim()} href={href}>{children}</a>;
}
