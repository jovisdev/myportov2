import React from "react";

export default function SectionWrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`mx-auto flex max-w-[1536px] flex-col gap-y-4 !overflow-hidden px-6 md:py-4 pb-10 lg:px-16 ${className}`}
    >
      {children}
    </div>
  );
}