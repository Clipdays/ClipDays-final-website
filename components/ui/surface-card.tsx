import type { HTMLAttributes, ReactNode } from "react";

type SurfaceCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  tone?: "light" | "dark";
};

export function SurfaceCard({ children, tone = "light", className = "", ...props }: SurfaceCardProps) {
  return <div className={`ui-surface ui-surface-${tone} ${className}`.trim()} {...props}>{children}</div>;
}
