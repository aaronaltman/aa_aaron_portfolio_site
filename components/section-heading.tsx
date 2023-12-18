import React from "react";

type sectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: sectionHeadingProps) {
  return (
    <h2 className="text-medium text-center text-3xl capitalize mb-8">
      {children}
    </h2>
  );
}
