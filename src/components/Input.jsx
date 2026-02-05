import React from "react";
import { cn } from "../utils/cn";

const Input = ({
  label,
  type = "text",
  error,
  className,
  options = [], // For select, radio
  id,
  ...props
}) => {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

  const baseClasses = "w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 text-white transition-colors focus:border-primary focus:outline-none placeholder:text-slate-500 disabled:opacity-50";

  const renderInput = () => {
    switch (type) {
      case "textarea":
        return (
          <textarea
            id={inputId}
            className={cn(baseClasses, "min-h-[120px] resize-none", error && "border-red-500", className)}
            {...props}
          />
        );
      case "select":
        return (
          <select
            id={inputId}
            className={cn(baseClasses, "appearance-none", error && "border-red-500", className)}
            {...props}
          >
            <option value="" disabled>Select an option</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
      case "radio":
        return (
          <div className="flex flex-col gap-3">
            {options.map((opt) => (
              <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type={type}
                  name={props.name}
                  value={opt.value}
                  checked={props.value === opt.value || props.checkedRows?.includes(opt.value)}
                  onChange={props.onChange}
                  className={cn(
                    "w-5 h-5 border-2 border-slate-700 bg-slate-800 text-primary focus:ring-primary rounded",
                    type === "radio" ? "rounded-full" : "rounded"
                  )}
                  {...props}
                />
                <span className="text-slate-300 group-hover:text-white transition-colors">{opt.label}</span>
              </label>
            ))}
          </div>
        );
      case "range":
        return (
          <div className="space-y-2">
            <input
              type="range"
              id={inputId}
              className={cn("w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary", className)}
              {...props}
            />
            <div className="flex justify-between text-xs text-slate-400">
              <span>{props.min || 0}</span>
              <span>{props.value}</span>
              <span>{props.max || 100}</span>
            </div>
          </div>
        );
      default:
        return (
          <input
            id={inputId}
            type={type}
            className={cn(baseClasses, error && "border-red-500", className)}
            {...props}
          />
        );
    }
  };

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && type !== "radio" && type !== "checkbox" && (
        <label htmlFor={inputId} className="block text-sm font-medium text-slate-400 mb-1">
          {label}
        </label>
      )}
      {label && (type === "radio" || type === "checkbox") && (
        <span className="block text-sm font-medium text-slate-400 mb-2">{label}</span>
      )}
      {renderInput()}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
