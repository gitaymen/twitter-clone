import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonProps = {
  small?: boolean;
  gray?: boolean;
  className?: string;
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ small, gray, className = "", ...props }: ButtonProps) {
  const sizeClasses = small ? "px-2 py-1" : "px-4 py-2 font-bold";
  const colorClass = gray
    ? "bg-gray-400 hover:bg-gray-300"
    : "bg-blue-500 hover:bg-blue-400";
  return (
    <button
      className={`disbaled:cursor-not-allowed rounded-full text-white transition-colors duration-200 disabled:opacity-50 ${sizeClasses} ${colorClass} ${className}`}
      {...props}
    ></button>
  );
}
