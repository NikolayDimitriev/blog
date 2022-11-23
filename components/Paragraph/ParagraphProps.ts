import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export default interface ParagraphProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: ReactNode;
}
