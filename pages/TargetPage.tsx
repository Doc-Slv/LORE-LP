import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GoldButton } from '../components/GoldButton';
import { Link } from 'react-router-dom';
import { Fingerprint, TrendingUp, Sparkles, Check, ArrowRight, Star, Zap, Trophy } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';
import { MetricsSection } from '../components/MetricsSection';

export const TargetPage: React.FC = () => {
    const [activeProfile, setActiveProfile] = useState<'unique' | 'yield' | 'turnkey'>('unique');

    const profiles = {
        unique: {
            title: "Sortir du Lot",
            subtitle: "Ne soyez plus une annonce parmi d'autres",
            description: "Sur Airbnb, la concurrence est rude. Les voyageurs défilent les annonces et cherchent le coup de cœur. LORE transforme votre bien en une destination unique qu'on ne peut pas comparer.",
            stats: [
                { label: "Visibilité", value: "x3", icon: <Fingerprint size={16} /> },
                { label: "Coup de Cœur", value: "Immédiat", icon: <Sparkles size={16} /> },
                { label: "Concurrence", value: "Nulle", icon: <Trophy size={16} /> },
            ],
            benefits: [
                "Création d'une identité forte pour votre bien",
                "Photos 'Instagrammables' qui attirent l'œil",
                "Transformation de défauts (petit espace) en atouts (cocon secret)"
            ]
        },
        yield: {
            title: "Maximiser le Revenu",
            subtitle: "Visez le tarif 'Nuit Insolite'",
            description: "Pourquoi louer au prix du marché quand on peut proposer une expérience premium ? En vendant une 'aventure' et non juste un lit, vous justifiez un prix nuitée nettement supérieur.",
            stats: [
                { label: "Prix Nuitée", value: "+30%", icon: <TrendingUp size={16} /> },
                { label: "Taux Occupation", value: "85%", icon: <Zap size={16} /> },
                { label: "ROI", value: "< 18 mois", icon: <Star size={16} /> },
            ],
            benefits: [
                "Positionnement Haut de Gamme instantané",
                "Attirer une clientèle CSP+ respectueuse",
                "Augmentation de la valeur patrimoniale du fonds"
            ]
        },
        turnkey: {
            title: "Expérience Clé en Main",
            subtitle: "L'effet 'Wow' sans la gestion",
            description: "Proposer de l'exceptionnel demande du temps... sauf si le logement s'en charge. LORE accueille, guide et amuse vos voyageurs grâce à son scénario automatisé, sans intervention de votre part.",
            stats: [
                { label: "Gestion Sup.", value: "0 min", icon: <ClockIcon size={16} /> },
                { label: "Satisfaction", value: "5/5", icon: <Star size={16} /> },
                { label: "Fidélisation", value: "Top", icon: <Trophy size={16} /> },
            ],
            benefits: [
                "Scénarios automatisés via l'application",
                "Maintenance à distance des jeux",
                "Reset facile par le personnel de ménage"
            ]
        }
    };

    return (
        <div className="bg-lore-main min-h-screen text-white pt-32 pb-24 selection:bg-lore-gold selection:text-lore-main relative overflow-hidden">
            {/* Radar Background Effect */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-lore-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="fixed inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block border border-white/10 px-4 py-1 rounded-full text-xs font-bold tracking-[0.2em] text-lore-muted uppercase mb-6"
                    >
                        Profilage & Objectifs
                    </motion.div>
                    <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl mb-6">Votre bien, <span className="text-lore-gold">Votre Vision</span></h1>
                    <p className="font-sans text-lore-muted text-lg font-light max-w-2xl mx-auto">
                        LORE s'adresse aux propriétaires qui refusent la banalité. Quel levier souhaitez-vous activer pour votre location ?
                    </p>
                </div>

                {/* PROFILE SELECTOR TABS */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    <button
                        onClick={() => setActiveProfile('unique')}
                        className={`px-6 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'unique' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <Fingerprint size={16} /> Se Différencier
                    </button>
                    <button
                        onClick={() => setActiveProfile('yield')}
                        className={`px-6 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'yield' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <TrendingUp size={16} /> Rentabiliser
                    </button>
                    <button
                        onClick={() => setActiveProfile('turnkey')}
                        className={`px-6 py-4 rounded-sm border transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-xs font-bold ${activeProfile === 'turnkey' ? 'bg-lore-gold text-lore-main border-lore-gold shadow-[0_0_20px_rgba(229,193,93,0.3)]' : 'bg-transparent text-white/50 border-white/10 hover:border-white/30'}`}
                    >
                        <Sparkles size={16} /> Automatiser
                    </button>
                </div>

                {/* DYNAMIC CONTENT AREA */}
                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeProfile}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
                        >
                            {/* Left: Text & Benefits */}
                            <div>
                                <h2 className="font-serif text-3xl md:text-5xl text-white mb-2">{profiles[activeProfile].title}</h2>
                                <h3 className="font-sans text-lore-gold uppercase tracking-widest text-sm font-bold mb-8">{profiles[activeProfile].subtitle}</h3>
                                <p className="text-lore-muted text-lg font-light leading-relaxed mb-10 border-l-2 border-lore-gold/30 pl-6">
                                    {profiles[activeProfile].description}
                                </p>

                                <div className="space-y-4">
                                    {profiles[activeProfile].benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-sm hover:border-lore-gold/30 transition-colors">
                                            <div className="w-8 h-8 rounded-full bg-lore-gold/10 flex items-center justify-center shrink-0">
                                                <Check className="w-4 h-4 text-lore-gold" />
                                            </div>
                                            <span className="text-white/90 font-light">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-12">
                                    <Link to="/deploy">
                                        <GoldButton variant="outline" className="w-full md:w-auto">
                                            Étudier mon projet <ArrowRight size={18} className="ml-2 inline" />
                                        </GoldButton>
                                    </Link>
                                </div>
                            </div>

                            {/* Right: Data Visualization Card */}
                            <TiltCard className="h-full">
                                <div className="bg-gradient-to-br from-white/10 to-transparent p-[1px] rounded-sm h-full">
                                    <div className="bg-lore-secondary h-full p-8 md:p-12 flex flex-col justify-between rounded-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 opacity-10">
                                            {activeProfile === 'unique' && <Fingerprint size={120} />}
                                            {activeProfile === 'yield' && <TrendingUp size={120} />}
                                            {activeProfile === 'turnkey' && <Sparkles size={120} />}
                                        </div>

                                        <div className="space-y-8 relative z-10">
                                            {profiles[activeProfile].stats.map((stat, i) => (
                                                <div key={i} className="group">
                                                    <div className="flex justify-between items-end mb-2 text-lore-muted text-sm uppercase tracking-wider">
                                                        <span className="flex items-center gap-2">{stat.icon} {stat.label}</span>
                                                    </div>
                                                    <div className="flex items-end gap-4 p-4 bg-lore-main/50 border border-white/5 rounded-sm group-hover:border-lore-gold/50 transition-colors">
                                                        <span className="text-3xl md:text-4xl font-serif text-white font-bold">{stat.value}</span>
                                                        <div className="h-1 flex-1 bg-white/10 rounded-full mb-3 overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ delay: 0.2 + (i * 0.1), duration: 1, ease: "circOut" }}
                                                                className="h-full bg-lore-gold"
                                                            ></motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5 text-center">
                                            <p className="text-xs text-lore-muted uppercase tracking-widest mb-2">Verdict LORE</p>
                                            <p className="text-lore-gold font-serif italic text-xl">"Votre bien mérite mieux qu'une simple annonce."</p>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <MetricsSection />
        </div>
    );
};

// Simple internal component for Clock Icon if needed, or import from lucide-react
// Added Clock to import list above to be safe, but defining check if missing
import { Clock as ClockIcon } from 'lucide-react';
