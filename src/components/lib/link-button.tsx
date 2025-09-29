"use client"

import Link from "next/link";
import { cn } from "../utils/utils";
import React from "react";
import { div } from "framer-motion/client";

interface LinkButtonProps {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  type?:
    | "simple"
    | "simple-icon-hover";
  link?: string;
  onClick?: () => void;
}

const LinkButton = ({
  className,
  type,
  icon,
  link,
  ...props
}: LinkButtonProps) => {

  if (type === "simple") {
    return (
      <div className={cn(
          'px-3 py-1 w-fit rounded-md cursor-pointer border-2 hover:scale-105 transition-transform duration-300',
          className,
        )}>
        <Link
        href={link || "#"}
        target="_blank"
        {...props}
      />
      </div>
    );
  }

  if (type === "simple-icon-hover") {
  return (
    <Link
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-md border-2 transition-transform duration-200 hover:scale-105 cursor-pointer",
        className
      )}
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {icon}
      <span>{props.children}</span>
    </Link>
  );
}
};

export default LinkButton;
