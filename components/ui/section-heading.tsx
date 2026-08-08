import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, tone = "light", className = "" }: SectionHeadingProps) {
  const headingClass = ["section-heading", tone === "dark" ? "section-heading-light" : "", className].filter(Boolean).join(" ");
  return (
    <header className={headingClass}>
      <span className={`kicker ${tone === "light" ? "kicker-dark" : ""}`}>{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </header>
  );
}
