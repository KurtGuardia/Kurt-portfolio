import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}

export function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea className={`px-4 py-2 rounded-lg border ${className}`} {...props} />
  );
}
