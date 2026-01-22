
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UniverseData } from '../types';

interface ModuleCardProps {
  universe: UniverseData;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ universe }) => {
  return (
    <Link to={`/univers/${universe.id}`} className="block group relative h-[450px] md:h-[500px] w-full cursor-pointer overflow-hidden border border-white/5 bg-lore-main reveal">
      {/* Background Image with Zoom Effect */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={universe.image} 
          alt={universe.title} 
          className="h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-70 md:opacity-60 md:group-hover:opacity-40"
        />
        {/* Gradient: Très fort en bas sur mobile pour que le texte soit lisible. Plus subtil sur desktop jusqu'au hover. */}
        <div className="absolute inset-0 bg-gradient-to-t from-lore-main via-lore-main/90 to-transparent opacity-100 transition-opacity duration-500 md:opacity-90 md:group-hover:opacity-80"></div>
      </div>
      
      {/* Difficulty Badge */}
      <div className="absolute top-6 left-6 z-20">
        <span className="px-3 py-1 text-[0.6rem] uppercase tracking-widest border border-white/20 text-white bg-black/50 backdrop-blur-sm">
            Niveau : {universe.difficulty}
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 transition-all duration-500">
        
        {/* Top Decoration (Desktop Only) */}
        <div className="absolute top-6 right-6 opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 hidden md:block">
            <div className="bg-lore-gold p-2 rounded-full animate-pulse">
                <Sparkles className="text-lore-main w-5 h-5" />
            </div>
        </div>

        <div className="transform translate-y-0 md:translate-y-4 md:transition-transform md:duration-500 md:group-hover:translate-y-0">
          <span className="text-lore-gold text-xs font-bold uppercase tracking-[0.15em] mb-2 block">{universe.tagline}</span>
          
          <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{universe.title}</h3>
          
          {/* Texte visible par défaut sur mobile, caché par défaut sur desktop */}
          <div className="h-auto opacity-100 md:h-0 md:opacity-0 md:overflow-hidden md:transition-all md:duration-500 md:group-hover:h-auto md:group-hover:opacity-100 md:group-hover:pb-2">
             <p className="text-lore-muted font-light text-sm mb-6 leading-relaxed border-l border-lore-gold/30 pl-4">
               {universe.desc}
             </p>
             <div className="flex flex-wrap gap-2 mb-4">
                {universe.tags.map((tag, i) => (
                    <span key={i} className="text-[0.6rem] uppercase tracking-wider bg-white/5 px-2 py-1 text-lore-light rounded-sm">
                        {tag}
                    </span>
                ))}
             </div>
             
             <div className="flex items-center gap-2 text-lore-gold text-xs uppercase tracking-widest font-bold">
                Voir la fiche <ArrowRight size={14} />
             </div>
          </div>
        </div>
      </div>

      {/* Hover Borders */}
      <div className="absolute inset-0 border border-lore-gold/0 transition-colors duration-500 group-hover:border-lore-gold/30 pointer-events-none"></div>
    </Link>
  );
};
