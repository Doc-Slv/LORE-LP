import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = true, light = false }) => {
  return (
    <div className={`mb-12 md:mb-20 ${centered ? 'text-center' : 'text-left'} reveal`}>
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 leading-tight ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      <div className={`h-1 w-20 bg-lore-gold/60 mb-6 md:mb-8 ${centered ? 'mx-auto' : ''} rounded-full`}></div>
      <p className={`font-sans text-lore-muted text-sm md:text-base lg:text-lg font-light max-w-2xl leading-relaxed ${centered ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    </div>
  );
};