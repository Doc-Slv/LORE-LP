
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Users, Maximize, Brain, Zap, Key, Shield, Info, Lightbulb, Sparkles, Target, Box } from 'lucide-react';
import { GoldButton } from '../components/GoldButton';
import { SectionTitle } from '../components/SectionTitle';
import { UniverseGallery } from '../components/UniverseGallery';
import { UNIVERSES_DATA } from '../data';
import { UniverseData } from '../types';

export const UniverseDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [universe, setUniverse] = useState<UniverseData | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const found = UNIVERSES_DATA.find(u => u.id === parseInt(id || '0'));
        if (found) {
            setUniverse(found);
        } else {
            navigate('/univers');
        }

        // Init Reveal
        setTimeout(() => {
            const reveals = document.querySelectorAll('.reveal');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });
            reveals.forEach((el) => observer.observe(el));
        }, 100);

    }, [id, navigate]);

    if (!universe) return null;

    return (
        <div className="min-h-screen bg-lore-main overflow-hidden pb-20">

            {/* HERO SECTION */}
            <div className="relative h-[80vh] w-full flex items-end">
                <div className="absolute inset-0">
                    <img src={universe.image} alt={universe.title} className="w-full h-full object-cover fixed top-0 left-0 -z-10 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-lore-main via-lore-main/60 to-lore-main/30"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="container mx-auto px-6 pb-20 relative z-10">

                    <div className="reveal active">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-lore-gold font-bold text-xs md:text-sm uppercase tracking-[0.2em]">{universe.tagline}</span>
                            <div className="h-[1px] w-12 bg-lore-gold"></div>
                        </div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight drop-shadow-lg">{universe.title}</h1>

                        {/* Key Stats Bar */}
                        <div className="flex flex-wrap gap-4 md:gap-8 backdrop-blur-xl bg-white/5 border border-white/10 p-6 max-w-4xl rounded-sm">
                            <div className="flex items-center gap-3 pr-8 border-r border-white/10">
                                <Maximize className="text-lore-gold w-5 h-5" />
                                <div>
                                    <span className="block text-[0.6rem] uppercase text-lore-muted tracking-wider">Surface Requise</span>
                                    <span className="text-white text-sm font-medium">{universe.specs.surface}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 pr-8 border-r border-white/10">
                                <Users className="text-lore-gold w-5 h-5" />
                                <div>
                                    <span className="block text-[0.6rem] uppercase text-lore-muted tracking-wider">Capacité</span>
                                    <span className="text-white text-sm font-medium">{universe.specs.players}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Brain className="text-lore-gold w-5 h-5" />
                                <div>
                                    <span className="block text-[0.6rem] uppercase text-lore-muted tracking-wider">Difficulté</span>
                                    <span className="text-white text-sm font-medium">{universe.difficulty}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16 md:pt-24 relative z-20 bg-lore-main">

                {/* DESCRIPTION & NARRATIVE */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
                    <div className="lg:col-span-7 reveal">
                        <h2 className="font-serif text-3xl text-white mb-8">L'Expérience Voyageur</h2>
                        <p className="text-lg md:text-xl text-lore-light/90 font-light leading-relaxed mb-8 drop-shadow-sm">
                            {universe.fullDescription || universe.desc}
                        </p>
                        <div className="border-l-2 border-lore-gold pl-6 py-2 my-8 bg-lore-gold/5 rounded-r-lg">
                            <p className="font-serif italic text-white/90 text-xl">"{universe.storyHook}"</p>
                        </div>

                        <h3 className="font-serif text-xl text-white mt-12 mb-6 flex items-center gap-3">
                            <Target className="text-lore-gold" /> Immersion & Gameplay
                        </h3>
                        <ul className="space-y-4">
                            {universe.gameplayFeatures?.map((feat, i) => (
                                <li key={i} className="flex items-start gap-3 text-lore-muted font-light group">
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lore-gold group-hover:shadow-[0_0_8px_#E5C15D] transition-shadow"></span>
                                    {feat}
                                </li>
                            )) || <li className="text-lore-muted">Détails sur demande.</li>}
                        </ul>
                    </div>

                    {/* SIDEBAR ATMOSPHERE */}
                    <div className="lg:col-span-5 reveal delay-200">
                        <div className="bg-lore-surface border border-white/5 p-8 sticky top-28 rounded-sm">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-lore-gold mb-6 border-b border-white/10 pb-4">Signature Atmosphérique</h3>

                            <div className="flex flex-wrap gap-3 mb-8">
                                {universe.atmosphere?.map(atmo => (
                                    <span key={atmo} className="bg-black/40 border border-white/10 px-3 py-1 text-xs text-white uppercase tracking-wider rounded-sm">
                                        {atmo}
                                    </span>
                                )) || <span className="text-lore-muted text-xs">Standard</span>}
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="flex items-center gap-2 text-white font-serif mb-2">
                                        <Lightbulb size={16} className="text-lore-gold" /> Éclairage
                                    </h4>
                                    <p className="text-sm text-lore-muted font-light">Scénarios DMX pré-programmés. Transition jour/nuit automatique et réactive aux énigmes.</p>
                                </div>
                                <div>
                                    <h4 className="flex items-center gap-2 text-white font-serif mb-2">
                                        <Box size={16} className="text-lore-gold" /> Mobilier
                                    </h4>
                                    <p className="text-sm text-lore-muted font-light">Agencement sur-mesure intégrant les mécanismes secrets (Maglocks, RFID).</p>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/5">
                                <GoldButton href="#contact-block" className="w-full justify-center">Obtenir ce kit</GoldButton>
                            </div>
                        </div>
                    </div>
                </div>

                {/* GALLERY SECTION */}
                {universe.gallery && <UniverseGallery images={universe.gallery} />}

                {/* TECHNICAL SECTION (KIT FOCUS) */}
                <div className="mb-24 reveal">
                    <SectionTitle
                        title={`Le Kit "${universe.title}"`}
                        subtitle="Un caisson en bois exclusif livré chez vous. Tout le nécessaire pour transformer la pièce, sans travaux."
                        align="left"
                    />

                    <div className="bg-lore-secondary border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden group mt-12">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-lore-gold/5 rounded-full blur-[80px] group-hover:bg-lore-gold/10 transition-colors duration-700"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                            <div>
                                <h3 className="font-serif text-2xl text-white mb-6 flex items-center gap-3">
                                    <Box className="text-lore-gold" /> Contenu du Caisson
                                </h3>
                                <p className="text-lore-muted leading-relaxed mb-8 text-lg font-light border-l-2 border-lore-gold/30 pl-4">
                                    {universe.hardwareDetails || "Ce module comprend l'ensemble des objets connectés nécessaires."}
                                </p>

                                <h4 className="text-xs uppercase tracking-widest text-white/50 mb-4 font-bold">Technologies Embarquées</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {universe.specs.tech.map((t, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-lore-main/80 p-2.5 rounded-sm border border-white/5">
                                            <Zap size={14} className="text-lore-gold shrink-0" />
                                            <span className="text-xs text-white/90 font-medium">{t}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="border-l border-white/5 pl-0 md:pl-12 flex flex-col justify-center space-y-8">
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <Zap className="text-lore-gold w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-1">Plug & Play</h4>
                                        <p className="text-sm text-lore-muted leading-relaxed">Aucun travaux lourds, pas de trous dans les murs. Posez les modules, branchez sur une prise standard, et connectez au WiFi. C'est tout.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                                        <Key className="text-lore-gold w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-serif text-lg mb-1">Reset Magnétique</h4>
                                        <p className="text-sm text-lore-muted leading-relaxed">Fini le casse-tête du rangement. Les objets interactifs se verrouillent automatiquement à leur place après chaque session.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA BOTTOM */}
                <div id="contact-block" className="flex flex-col items-center justify-center text-center py-16 border-t border-white/5 reveal">
                    <Sparkles className="text-lore-gold w-12 h-12 mb-6 animate-pulse" />
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-6">Prêt à transformer vos m² ?</h2>
                    <p className="text-lore-muted mb-8 max-w-xl mx-auto">
                        Demandez une étude de faisabilité pour intégrer <span className="text-white font-medium">{universe.title}</span> dans votre établissement.
                    </p>
                    <GoldButton size="large" onClick={() => {
                        const formElement = document.getElementById('contact');
                        if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                    }}>
                        Demander un devis personnalisé
                    </GoldButton>
                </div>

            </div>
        </div>
    );
};
