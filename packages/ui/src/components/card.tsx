import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  hoverable = false,
  children,
  className = "",
  ...props
}) => {
  const classNames = [
    "r2-card",
    hoverable ? "r2-card--hoverable" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};
