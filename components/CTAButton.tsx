import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  fullWidth = false
}) => {
  const baseStyles = "font-bold text-center transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-yellow-500 to-yellow-400 text-black hover:shadow-yellow-500/50 border border-yellow-300",
    secondary: "bg-transparent border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${widthClass} py-4 px-8 rounded-lg uppercase tracking-wider ${className}`}
    >
      {children}
    </button>
  );
};

export default CTAButton;