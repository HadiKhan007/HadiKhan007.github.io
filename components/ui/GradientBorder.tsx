"use client";

type GradientBorderProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GradientBorder({ children, className = "" }: GradientBorderProps) {
  return (
    <div
      className={`relative rounded-2xl p-[1px] bg-gradient-to-br from-[var(--primary)] via-[var(--accent-pink)] to-[var(--primary)] ${className}`}
    >
      <div className="relative rounded-[calc(1rem-1px)] bg-[var(--bg-card)] overflow-hidden">
        {children}
      </div>
    </div>
  );
}
