import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brand" | "success" | "warning" | "error";
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = "brand",
  children,
  className = "",
  ...props
}) => {
  const classNames = ["r2-badge", `r2-badge--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={classNames} {...props}>
      {children}
    </span>
  );
};
