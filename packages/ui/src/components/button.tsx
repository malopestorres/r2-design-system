import React, { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const classNames = [
      "r2-button",
      `r2-button--${variant}`,
      `r2-button--${size}`,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading && (
          <span className="r2-spinner-icon" aria-hidden="true">
            ⏳
          </span>
        )}
        {!isLoading && leftIcon && <span className="r2-button__icon">{leftIcon}</span>}
        <span className="r2-button__label">{children}</span>
        {!isLoading && rightIcon && <span className="r2-button__icon">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
