import React from 'react';
import { Box, Smartphone, Key } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Concept: React.FC = () => {
    const pillars = [
        {
            icon: <Box className="w-6 h-6 text-lore-main" />,
            title: "Mobilier Augmenté",
            subtitle: "L'Hardware",
            desc: "Des meubles design (bibliothèques, bureaux, chevets) fabriqués sur-mesure, intégrant des mécanismes secrets (tiroirs magnétiques, trappes) invisibles à l'œil nu."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-lore-main" />,
            title: "Application Compagnon",
            subtitle: "Le Software",
            desc: "L'interface voyageur pour recevoir les indices et progresser dans l'histoire. Pour vous : un dashboard de gestion de parc et de maintenance prédictive.",
            highlight: false
        },
        {
            icon: <Key className="w-6 h-6 text-lore-main" />,
            title: "Scénarios Évolutifs",
            subtitle: "Le Contenu",
            desc: "Un catalogue d'histoires (Escape Game, Enquête, Romance) mis à jour à distance. Vos murs ne changent pas, l'aventure change à volonté."
        }
    ];

    return (
        <section id="concept" className="py-16 md:py-32 bg-lore-main relative overflow-hidden">
            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="L'Écosystème LORE"
                    subtitle="Une technologie invisible qui transforme votre bien immobilier en machine à souvenirs."
                />

                {/* Aligned Grid items with proper layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-20 max-w-7xl mx-auto items-stretch">
                    {pillars.map((p, i) => (
                        <div key={i} className={`group relative flex flex-col h-full reveal ${i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : ''}`}>
                            {/* Background Border Layer (Absolute) - Fixed height issue */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-sm opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                            {/* Content Layer (Relative) - flex-1 to stretch height */}
                            <div className="relative flex-1 bg-lore-secondary m-[1px] p-8 flex flex-col items-center text-center group-hover:bg-lore-secondary/80 transition-colors rounded-sm">
                                <div className={`mb-8 p-4 rounded-full bg-lore-gold/80 text-lore-main group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                    {p.icon}
                                </div>
                                <span className="text-[0.6rem] uppercase tracking-widest text-lore-muted mb-3">{p.subtitle}</span>
                                <h3 className="font-serif text-xl lg:text-2xl text-white mb-4">{p.title}</h3>
                                <p className="font-sans text-lore-muted text-sm leading-relaxed font-light">{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
