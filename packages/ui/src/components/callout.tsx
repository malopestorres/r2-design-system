import React from "react";

export interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "brand" | "success" | "warning" | "error";
  title?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Callout: React.FC<CalloutProps> = ({
  variant = "brand",
  title,
  children,
  icon,
  className = "",
  ...props
}) => {
  const classNames = ["r2-callout", `r2-callout--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} role="region" {...props}>
      {icon && <div className="r2-callout__icon">{icon}</div>}
      <div className="r2-callout__content">
        {title && <h4 className="r2-callout__title">{title}</h4>}
        <div className="r2-callout__body">{children}</div>
      </div>
    </div>
  );
};
