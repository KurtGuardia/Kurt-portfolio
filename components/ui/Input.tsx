import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function Input({ className, ...props }: InputProps) {
  return (
    <input className={`px-4 py-2 rounded-lg border ${className}`} {...props} />
  );
}
