import React from "react";
import ButtonProps from "./ButtonProps";
import cn from "classnames";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg";

export const Button = ({
  children,
  appearance,
  arrow = "none",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, {
            [styles.down]: (arrow = "down"),
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
