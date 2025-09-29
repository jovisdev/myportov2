import { cn } from "../utils/utils";
import React from "react";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  type?:
    | "simple"
    | "simple-icon-hover"

  onClick?: () => void;
}

const Buttons = ({
  className,
  type,
  icon,
  ...props
}: ButtonProps) => {

  if (type === "simple") {
    return (
      <button
        className={cn(
          'px-3 py-1 rounded-md transition cursor-pointer',
          className,
        )}
        {...props}
      />
    );
  }

  if (type === "simple-icon-hover") {
  return (
    <button
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-md border-2 transition-transform duration-200 hover:scale-105 cursor-pointer",
        className
      )}
      {...props}
    >
      {icon}
      <span>{props.children}</span>
    </button>
  );
}
};

export default Buttons;
