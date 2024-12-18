import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  variant?: string;
  size?: string;
}

export function Button({ children, className, asChild, ...props }: ButtonProps) {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${className} px-4 py-2 rounded-lg`,
      ...props,
    } as any);
  }
  return (
    <button className={`px-4 py-2 rounded-lg ${className}`} {...props}>
      {children}
    </button>
  );
}
