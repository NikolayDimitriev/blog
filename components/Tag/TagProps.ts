import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
  children: ReactNode;
}
