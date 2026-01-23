import React from 'react';
import { Zap, Eye, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from './SectionTitle';

export const Targets: React.FC = () => {
    return (
        <section id="targets" className="py-20 md:py-32 bg-lore-secondary relative border-y border-white/5 overflow-hidden">
            {/* Background noise/gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lore-gold/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Une Solution, Deux Leviers"
                    subtitle="Que vous cherchiez la scalabilité ou le rendement pur."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 max-w-6xl mx-auto">
                    {/* CARD 1: Conciergeries */}
                    <div className="group relative flex flex-col p-8 md:p-10 bg-lore-surface/40 backdrop-blur-sm border border-white/5 hover:border-lore-gold/40 transition-all duration-500 rounded-sm reveal hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        {/* Background Number */}
                        <div className="absolute top-0 right-4 text-[8rem] md:text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-lore-gold/[0.04] transition-colors duration-500 select-none leading-none z-0 pointer-events-none">
                            01
                        </div>

                        {/* Content Wrapper */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start gap-5 mb-8">
                                <div className="shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lore-gold group-hover:border-lore-gold transition-all duration-500 shadow-lg">
                                    <Zap className="w-6 h-6 text-lore-gold group-hover:text-lore-main transition-colors duration-500" />
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-lore-gold transition-colors duration-300">Conciergeries</h3>
                                    <div className="h-0.5 w-12 bg-white/10 group-hover:bg-lore-gold/50 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-lore-muted font-sans text-sm md:text-base font-light leading-7 mb-8 group-hover:text-white/80 transition-colors duration-300">
                                Différenciez votre parc immobilier. Offrez une gamme <span className="font-medium text-white/90">"Premium Experience"</span> facturée plus cher, sans gestion opérationnelle supplémentaire grâce à notre app.
                            </p>

                            {/* List */}
                            <ul className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Standardisation du <span className="text-white">"Wow Effect"</span></span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Maintenance prédictive centralisée</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CARD 2: Investisseurs */}
                    <div className="group relative flex flex-col p-8 md:p-10 bg-lore-surface/40 backdrop-blur-sm border border-white/5 hover:border-lore-gold/40 transition-all duration-500 rounded-sm reveal delay-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        {/* Background Number */}
                        <div className="absolute top-0 right-4 text-[8rem] md:text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-lore-gold/[0.04] transition-colors duration-500 select-none leading-none z-0 pointer-events-none">
                            02
                        </div>

                        {/* Content Wrapper */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start gap-5 mb-8">
                                <div className="shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lore-gold group-hover:border-lore-gold transition-all duration-500 shadow-lg">
                                    <Eye className="w-6 h-6 text-lore-gold group-hover:text-lore-main transition-colors duration-500" />
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-lore-gold transition-colors duration-300">Investisseurs</h3>
                                    <div className="h-0.5 w-12 bg-white/10 group-hover:bg-lore-gold/50 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-lore-muted font-sans text-sm md:text-base font-light leading-7 mb-8 group-hover:text-white/80 transition-colors duration-300">
                                Maximisez le rendement de votre actif. Sortez de la guerre des prix sur Airbnb en proposant une nuitée que les voyageurs s'arrachent.
                            </p>

                            {/* List */}
                            <ul className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span><span className="text-white font-medium">+20% à +30%</span> sur le prix nuitée</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Visibilité algorithmique (Clics & Wishlist)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
