import React, { useEffect } from 'react';
import { ArrowLeft, Brain, Hand, Search, Box, Eye, Zap, Wifi, Speaker, Lightbulb } from 'lucide-react';
import { SectionTitle } from '../components/SectionTitle';
import { GoldButton } from '../components/GoldButton';
import { UNIVERSES_DATA } from '../data';
import { Link } from 'react-router-dom';

// Helper pour les stats avec animation de remplissage
const StatBar: React.FC<{ label: string; value: number; icon: React.ReactNode }> = ({ label, value, icon }) => (
  <div className="flex items-center gap-4 mb-3">
    <div className="text-lore-gold w-5">{icon}</div>
    <div className="flex-1">
      <div className="flex justify-between mb-1">
        <span className="text-[0.6rem] uppercase tracking-wider text-lore-muted font-bold">{label}</span>
      </div>
      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-lore-gold to-yellow-200 origin-left transform scale-x-0 group-[.active]:scale-x-100 transition-transform duration-1000 ease-out" 
          style={{ width: `${(value / 5) * 100}%` }}
        ></div>
      </div>
    </div>
  </div>
);

export const UniversesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initial reveal trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="min-h-screen bg-lore-main pt-28 pb-20 overflow-hidden">
      
      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <Link to="/" className="inline-flex items-center gap-2 text-lore-muted hover:text-lore-gold transition-colors text-xs uppercase tracking-widest mb-8 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <ArrowLeft size={14} /> Retour à l'accueil
        </Link>
        <SectionTitle 
          title="Le Catalogue Complet" 
          subtitle="Explorez nos scénarios immersifs. Chaque univers est un kit technologique prêt à être intégré dans votre bien."
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="space-y-24">
          {UNIVERSES_DATA.map((u, index) => (
            <div key={u.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
              
              {/* Image Side - Animated Reveal */}
              <div className={`w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-sm border-b md:border border-white/5 shadow-2xl reveal group cursor-pointer ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <div className="absolute inset-0 bg-lore-main/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={u.image} 
                  alt={u.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lore-main via-transparent to-transparent opacity-60"></div>
                
                {/* Badge Difficulty - Slide In */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-lore-gold/30 px-3 py-2 md:px-4 md:py-2 flex items-center gap-2 transform -translate-y-10 opacity-0 group-[.active]:translate-y-0 group-[.active]:opacity-100 transition-all duration-700 delay-500">
                    <Brain size={14} className="text-lore-gold"/>
                    <span className="text-[0.6rem] md:text-xs font-bold text-white uppercase tracking-widest">{u.difficulty}</span>
                </div>
              </div>

              {/* Content Side - Staggered Reveals */}
              <div className="w-full lg:w-1/2 p-4 md:p-8 relative">
                
                <div className="mb-6 reveal delay-200">
                    <span className="text-lore-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{u.tagline}</span>
                    <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">{u.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {u.tags.map(tag => (
                            <span key={tag} className="text-[0.6rem] uppercase border border-white/10 px-2 py-1 text-lore-muted rounded-full hover:border-lore-gold/50 transition-colors">{tag}</span>
                        ))}
                    </div>
                </div>

                <p className="text-white/80 font-serif italic text-base md:text-lg leading-relaxed mb-6 border-l-2 border-lore-gold pl-4 reveal delay-300">
                    "{u.storyHook}"
                </p>
                
                <p className="text-lore-muted text-sm font-light mb-8 reveal delay-400">
                    {u.desc}
                </p>

                {/* Stats Grid - Group for StatBar animation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 bg-black/20 p-6 rounded-sm border border-white/5 reveal delay-500 group">
                    {/* Stats */}
                    <div>
                        <h4 className="text-xs uppercase text-lore-muted tracking-widest mb-4 font-bold border-b border-white/10 pb-2">Expérience Joueur</h4>
                        <StatBar label="Fouille" value={u.stats.search} icon={<Search size={14}/>} />
                        <StatBar label="Manipulation" value={u.stats.manipulation} icon={<Hand size={14}/>} />
                        <StatBar label="Réflexion" value={u.stats.reasoning} icon={<Brain size={14}/>} />
                    </div>

                    {/* Tech Specs */}
                    <div>
                        <h4 className="text-xs uppercase text-lore-muted tracking-widest mb-4 font-bold border-b border-white/10 pb-2">Fiche Technique</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-sm text-lore-light font-light">
                                <Box size={14} className="text-lore-gold/70" /> {u.specs.surface}
                            </li>
                            <li className="flex items-center gap-3 text-sm text-lore-light font-light">
                                <Eye size={14} className="text-lore-gold/70" /> {u.specs.players}
                            </li>
                            <li className="mt-4">
                                <span className="text-[0.6rem] uppercase text-lore-muted block mb-2">Modules Intégrés</span>
                                <div className="flex flex-wrap gap-2">
                                    {u.specs.tech.map((t, idx) => (
                                        <span key={t} className={`bg-lore-main px-2 py-1 text-[0.6rem] text-lore-gold border border-lore-gold/20 flex items-center gap-1 opacity-0 group-[.active]:animate-[fadeIn_0.5s_ease-out_forwards]`} style={{ animationDelay: `${0.8 + (idx * 0.1)}s` }}>
                                            <Zap size={8} /> {t}
                                        </span>
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-start reveal delay-700">
                    <GoldButton href="#contact" variant="outline" className="w-full md:w-auto">
                        Demander un devis pour {u.title}
                    </GoldButton>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center px-4 mb-20">
            <p className="text-lore-muted mb-6 italic font-light text-sm reveal">Tous nos univers incluent de base :</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-lore-gold opacity-70 reveal delay-200">
                <span className="flex items-center gap-2"><Wifi size={14}/> 100% Connecté (App)</span>
                <span className="hidden md:block h-4 w-[1px] bg-lore-gold"></span>
                <span className="flex items-center gap-2"><Speaker size={14}/> Sound Design Inclus</span>
                <span className="hidden md:block h-4 w-[1px] bg-lore-gold"></span>
                <span className="flex items-center gap-2"><Lightbulb size={14}/> Éclairage DMX</span>
            </div>
        </div>
      </div>
    </div>
  );
};