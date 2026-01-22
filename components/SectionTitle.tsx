import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center', light = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'} reveal group`}>
      <h2 className={`font-serif text-2xl md:text-5xl mb-6 relative inline-block tracking-wide ${light ? 'text-white' : 'text-white'}`}>
        {title}
      </h2>
      <div className={`flex ${align === 'center' ? 'justify-center' : 'justify-start'} overflow-hidden`}>
          {/* Ligne qui grandit au reveal. Utilise group-[.active] car le parent a 'reveal group' et recevra 'active'. */}
          <div className="h-[1px] bg-gradient-to-r from-transparent via-lore-gold to-transparent opacity-70 w-0 group-[.active]:animate-expand-width transition-all duration-1000"></div>
          {/* Fallback for JS disabled or non-observer contexts, handled by CSS mostly */}
      </div>
      {subtitle && (
        <p className="mt-6 md:mt-8 text-lore-muted font-light text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-sans px-2 opacity-0 group-[.active]:animate-[fadeUp_1s_ease-out_0.3s_forwards]">
          {subtitle}
        </p>
      )}
    </div>
  );
};