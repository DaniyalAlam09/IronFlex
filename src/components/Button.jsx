import React from "react";
import { cn } from "../utils/cn";

const Button = ({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}) => {
  const variants = {
    primary: "bg-primary text-white hover:bg-red-600 active:scale-95",
    secondary: "bg-secondary text-white hover:bg-gray-700 active:scale-95",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white active:scale-95",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base font-semibold",
    lg: "px-8 py-4 text-lg font-bold uppercase tracking-wider",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md transition-all duration-200 outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
