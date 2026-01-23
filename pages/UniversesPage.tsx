import React, { useEffect } from 'react';
import { ArrowLeft, Brain, Hand, Search, Box, Eye, Zap, Wifi, Speaker, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GoldButton } from '../components/GoldButton';
import { GlassCard } from '../components/GlassCard';
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
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(value / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-lore-gold to-yellow-200"
        ></motion.div>
      </div>
    </div>
  </div>
);

export const UniversesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-lore-main pt-28 pb-20 overflow-hidden">

      {/* Header */}
      <div className="container mx-auto px-6 mb-12">
        <SectionTitle
          title="Le Catalogue Complet"
          subtitle="Explorez nos scénarios immersifs. Chaque univers est un kit technologique prêt à être intégré dans votre bien."
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="space-y-24">
          {UNIVERSES_DATA.map((u, index) => (
            <motion.div
              key={u.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >

              {/* Image Side */}
              <div className={`w-full lg:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-sm border-b md:border border-white/5 shadow-2xl group cursor-pointer ${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                <Link to={`/univers/${u.id}`} className="block h-full w-full">
                  <div className="absolute inset-0 bg-lore-main/20 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img
                    src={u.image}
                    alt={u.title}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 filter brightness-90 group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-lore-main via-transparent to-transparent opacity-60"></div>

                  {/* Badge Difficulty */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-4 left-4 bg-black/80 backdrop-blur-md border border-lore-gold/30 px-3 py-2 md:px-4 md:py-2 flex items-center gap-2"
                  >
                    <Brain size={14} className="text-lore-gold" />
                    <span className="text-[0.6rem] md:text-xs font-bold text-white uppercase tracking-widest">{u.difficulty}</span>
                  </motion.div>
                </Link>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2 p-4 md:p-8 relative">

                <div className="mb-6">
                  <span className="text-lore-gold text-xs font-bold uppercase tracking-[0.2em] mb-2 block">{u.tagline}</span>
                  <h3 className="font-serif text-3xl md:text-5xl text-white mb-4">{u.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {u.tags.map(tag => (
                      <span key={tag} className="text-[0.6rem] uppercase border border-white/10 px-2 py-1 text-lore-muted rounded-full hover:border-lore-gold/50 transition-colors">{tag}</span>
                    ))}
                  </div>
                </div>

                <p className="text-white/80 font-serif italic text-base md:text-lg leading-relaxed mb-6 border-l-2 border-lore-gold pl-4">
                  "{u.storyHook}"
                </p>

                <p className="text-lore-muted text-sm font-light mb-8">
                  {u.desc}
                </p>

                {/* Stats Grid */}
                <GlassCard hoverEffect delay={0.4} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Stats */}
                  <div>
                    <h4 className="text-xs uppercase text-lore-muted tracking-widest mb-4 font-bold border-b border-white/10 pb-2">Expérience Joueur</h4>
                    <StatBar label="Fouille" value={u.stats.search} icon={<Search size={14} />} />
                    <StatBar label="Manipulation" value={u.stats.manipulation} icon={<Hand size={14} />} />
                    <StatBar label="Réflexion" value={u.stats.reasoning} icon={<Brain size={14} />} />
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
                            <motion.span
                              key={t}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + (idx * 0.1) }}
                              className="bg-lore-main px-2 py-1 text-[0.6rem] text-lore-gold border border-lore-gold/20 flex items-center gap-1"
                            >
                              <Zap size={8} /> {t}
                            </motion.span>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </GlassCard>

                <div className="flex justify-start">
                  <Link to={`/univers/${u.id}`} className="w-full md:w-auto">
                    <GoldButton variant="outline" className="w-full">
                      En savoir plus
                    </GoldButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-20 text-center px-4 mb-20"
        >
          <p className="text-lore-muted mb-6 italic font-light text-sm">Tous nos univers incluent de base :</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-lore-gold opacity-70">
            <span className="flex items-center gap-2"><Wifi size={14} /> 100% Connecté (App)</span>
            <span className="hidden md:block h-4 w-[1px] bg-lore-gold"></span>
            <span className="flex items-center gap-2"><Speaker size={14} /> Sound Design Inclus</span>
            <span className="hidden md:block h-4 w-[1px] bg-lore-gold"></span>
            <span className="flex items-center gap-2"><Lightbulb size={14} /> Éclairage DMX</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
