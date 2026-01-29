import React from 'react';
import { Box, Smartphone, Key } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { TiltCard } from './TiltCard';

export const Concept: React.FC = () => {
    const pillars = [
        {
            icon: <Box className="w-6 h-6 text-lore-main" />,
            title: "Modules Immersifs",
            subtitle: "L'Intégration",
            desc: "Ce ne sont pas des meubles. Ce sont des caissons en bois design, dissimulant serrures magnétiques et mécanismes de jeu, qui s'intègrent aveuglément à votre décoration."
        },
        {
            icon: <Smartphone className="w-6 h-6 text-lore-main" />,
            title: "Maître du Jeu Digital",
            subtitle: "L'Orchestration",
            desc: "Notre application pilote l'expérience. Elle guide les voyageurs, diffuse les indices sonores et gère l'ambiance, transformant la nuitée en un véritable film interactif."
        },
        {
            icon: <Key className="w-6 h-6 text-lore-main" />,
            title: "Aventures à la Carte",
            subtitle: "Le Renouveau",
            desc: "Escape game romantique, enquête policière ou chasse au trésor... Changez l'histoire de votre logement sans changer les murs. Un catalogue d'expériences en constante évolution."
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
                        <TiltCard key={i} className={`group h-full reveal ${i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : ''}`}>
                            <div className="relative flex flex-col h-full">
                                {/* Background Border Layer (Absolute) - Fixed height issue */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-sm opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

                                {/* Content Layer (Relative) - flex-1 to stretch height */}
                                <div className="relative flex-1 bg-lore-secondary m-[1px] p-8 flex flex-col items-center text-center group-hover:bg-lore-secondary/80 transition-colors rounded-sm h-full">
                                    <div className={`mb-8 p-4 rounded-full bg-lore-gold/80 text-lore-main group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        {p.icon}
                                    </div>
                                    <span className="text-[0.6rem] uppercase tracking-widest text-lore-muted mb-3">{p.subtitle}</span>
                                    <h3 className="font-serif text-xl lg:text-2xl text-white mb-4">{p.title}</h3>
                                    <p className="font-sans text-lore-muted text-sm leading-relaxed font-light">{p.desc}</p>
                                </div>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </section>
    );
};
