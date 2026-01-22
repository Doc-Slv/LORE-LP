import React from 'react';
import { ButtonVariant, ButtonSize } from '../types';

interface GoldButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const GoldButton: React.FC<GoldButtonProps> = ({ 
  children, 
  href, 
  onClick, 
  variant = 'solid', 
  size = 'normal',
  className = '',
  type = 'button'
}) => {
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center font-serif font-bold uppercase tracking-[0.15em] transition-all duration-500 rounded-none group";
  
  const variants = {
    solid: "bg-lore-gold text-lore-main border border-lore-gold hover:text-lore-gold shadow-[0_0_15px_rgba(229,193,93,0.1)] hover:shadow-[0_0_25px_rgba(229,193,93,0.3)]",
    outline: "border border-lore-gold/40 text-lore-gold hover:border-lore-gold hover:bg-lore-gold/5"
  };

  const sizes = {
    normal: "px-8 py-3 text-[0.7rem]",
    large: "px-10 py-4 text-xs"
  };

  // Hover fill effect
  const hoverLayer = (
    <span className={`absolute inset-0 w-full h-full bg-lore-main transform transition-transform duration-500 ease-out ${variant === 'solid' ? '-translate-x-full group-hover:translate-x-0' : 'translate-x-full group-hover:translate-x-0 bg-lore-gold/10'}`}></span>
  );

  // Subtle shimmer effect running across the button
  const shimmerLayer = variant === 'solid' && (
    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
  );

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {hoverLayer}
      {shimmerLayer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  );
};