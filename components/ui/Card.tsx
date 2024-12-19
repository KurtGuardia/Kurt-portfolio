import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={`bg-gray-800 border border-gray-700 rounded-lg overflow-hidden h-100 flex flex-col ${className} group max-w-sm`}>
      {children}
    </div>
  );
};

export function CardHeader({ children, className }: CardProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className }: CardProps) {
  return (
    <h3 className={`text-2xl font-semibold text-white ${className} transform transition-transform duration-300 group-hover:scale-105 mb-4 mt-4`}>
      {children}
    </h3>
  );
};

export function CardContent({ children, className }: CardProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardDescription({ children, className }: CardProps) {
  return (
    <p className={`text-sm ${className}`}>
      {children}
    </p>
  );
}

export function CardFooter({ children, className }: CardProps) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
}
