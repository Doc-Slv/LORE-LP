import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-24" }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg 
        viewBox="0 0 100 120" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full drop-shadow-md group"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8AA6E" />
            <stop offset="50%" stopColor="#E5C15D" />
            <stop offset="100%" stopColor="#BFA040" />
          </linearGradient>
        </defs>

        {/* Forme du L - Animation Draw + Fade In Fill */}
        <path 
          d="M30 10 H58 V55 H85 V75 H30 V10 Z" 
          stroke="url(#goldGradient)" 
          strokeWidth="2" 
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-[draw_2s_ease-out_forwards] fill-[#0B1525]"
        />
        
        {/* Serrure - Animation décalée */}
        <g transform="translate(54, 42)" className="opacity-0 animate-[fadeIn_1s_ease-out_1.5s_forwards]">
           <circle cx="0" cy="0" r="9" fill="white" stroke="url(#goldGradient)" strokeWidth="1.5" />
           <path d="M-5.5 6 L-8 22 H8 L5.5 6 Z" fill="white" stroke="url(#goldGradient)" strokeWidth="1.5" />
           <rect x="-4" y="0" width="8" height="8" fill="white" />
        </g>

        {/* Texte LORE - Animation de montée lente */}
        <text 
          x="50" 
          y="105" 
          fontFamily="Cinzel, serif" 
          fontSize="22" 
          fill="#E2E8F0" 
          textAnchor="middle" 
          letterSpacing="0.2em"
          fontWeight="500"
          className="opacity-0 animate-[fadeUp_1s_ease-out_1s_forwards]"
        >
          LORE
        </text>
      </svg>
    </div>
  );
};