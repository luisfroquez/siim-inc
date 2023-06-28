import React, { HTMLProps } from "react";

interface HeadingProps {
  props?: HTMLProps<HTMLHeadingElement>;
  children: string;
}

export const H1 = ({ props, children }: HeadingProps) => {
  return (
    <h1 className="text-2xl" {...props}>
      {children}
    </h1>
  );
};
