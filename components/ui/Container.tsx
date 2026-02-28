"use client";

export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto w-full max-w-6xl px-6 sm:px-8 min-w-0 overflow-x-hidden ${className}`}
    >
      {children}
    </div>
  );
}
