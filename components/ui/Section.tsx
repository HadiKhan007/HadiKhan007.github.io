"use client";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  spacing?: "default" | "tight" | "loose";
};

const spacingMap = {
  default: "py-20 md:py-24",
  tight: "py-16 md:py-20",
  loose: "py-20 md:py-24",
};

export default function Section({
  children,
  className = "",
  id,
  spacing = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${spacingMap[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
