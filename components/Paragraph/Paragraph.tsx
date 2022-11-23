import React from "react";
import ParagraphProps from "./ParagraphProps";
import cn from "classnames";
import styles from "./Paragraph.module.css";

export const Paragraph = ({
  size = "m",
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p
      className={cn(styles.paragraph, className, {
        [styles.s]: size === "s",
        [styles.m]: size === "m",
        [styles.l]: size === "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
