import React, { useEffect, useRef, useState } from 'react';
import { Fingerprint, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const Counter: React.FC<{ value: number, suffix?: string }> = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

export const Targets: React.FC = () => {
    const targets = [
        {
            id: 'unique',
            number: '01',
            icon: <Fingerprint className="w-6 h-6 text-lore-gold" />,
            title: "Se Différencier",
            subtitle: "L'Approche Unique",
            desc: "Sortez de la masse. Transformez votre bien en une marque forte et incontournable sur Airbnb.",
            stat: "Visibilité",
            statValue: "x3"
        },
        {
            id: 'yield',
            number: '02',
            icon: <TrendingUp className="w-6 h-6 text-lore-gold" />,
            title: "Rentabiliser",
            subtitle: "L'Approche Yield",
            desc: "Vendez une expérience, pas une nuit. Justifiez un tarif nuitée supérieur grâce à la valeur ajoutée.",
            stat: "Prix Nuitée",
            statValue: "+30%"
        },
        {
            id: 'turnkey',
            number: '03',
            icon: <Sparkles className="w-6 h-6 text-lore-gold" />,
            title: "Automatiser",
            subtitle: "L'Approche Turnkey",
            desc: "L'effet 'Wow' sans l'effort. Gestion 100% autonome des jeux et scénarios pour une tranquillité totale.",
            stat: "Gestion",
            statValue: "0 min"
        }
    ];

    return (
        <section id="targets" className="py-20 md:py-32 bg-lore-secondary relative border-y border-white/5 overflow-hidden">
            {/* Background noise/gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lore-gold/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle
                    title="Une Vision, Trois Leviers"
                    subtitle="LORE s'adapte à votre stratégie d'investissement."
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 max-w-7xl mx-auto items-stretch">
                    {targets.map((t, i) => (
                        <div key={i} className={`group relative flex flex-col p-8 bg-lore-surface/40 backdrop-blur-sm border border-white/5 hover:border-lore-gold/40 transition-all duration-500 rounded-sm reveal delay-${i * 100} hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]`}>
                            {/* Background Number */}
                            <div className="absolute top-0 right-4 text-[6rem] md:text-[8rem] font-serif font-bold text-white/[0.02] group-hover:text-lore-gold/[0.04] transition-colors duration-500 select-none leading-none z-0 pointer-events-none">
                                {t.number}
                            </div>

                            {/* Content Wrapper */}
                            <div className="relative z-10 h-full flex flex-col">
                                {/* Header */}
                                <div className="flex flex-col gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lore-gold group-hover:border-lore-gold transition-all duration-500 shadow-lg">
                                        {React.cloneElement(t.icon as React.ReactElement, { className: "w-5 h-5 text-lore-gold group-hover:text-lore-main transition-colors duration-500" })}
                                    </div>
                                    <div>
                                        <h3 className="font-serif text-2xl text-white mb-1 group-hover:text-lore-gold transition-colors duration-300">{t.title}</h3>
                                        <span className="text-xs uppercase tracking-widest text-lore-muted/60">{t.subtitle}</span>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-lore-muted font-sans text-sm font-light leading-6 mb-6 group-hover:text-white/80 transition-colors duration-300 flex-grow">
                                    {t.desc}
                                </p>

                                {/* Stat/Footer */}
                                <div className="border-t border-white/5 pt-4 mt-auto flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-lore-muted uppercase tracking-wider mb-0.5">{t.stat}</p>
                                        <p className="text-xl font-serif text-white font-bold group-hover:text-lore-gold transition-colors">{t.statValue}</p>
                                    </div>
                                    <Link to="/pour-qui">
                                        <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-lore-gold/50 group-hover:bg-lore-gold/10 transition-all">
                                            <ArrowRight size={14} className="text-lore-muted group-hover:text-lore-gold -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
