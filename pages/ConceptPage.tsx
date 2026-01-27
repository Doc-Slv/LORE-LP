import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionTitle } from '../components/SectionTitle';
import { GoldButton } from '../components/GoldButton';
import { Link } from 'react-router-dom';
import { Cpu, Smartphone, Box, Heart, Eye, Sparkles } from 'lucide-react';
import { TiltCard } from '../components/TiltCard';

export const ConceptPage: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const yHero = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // New narrative structure based on user request
    const sections = [
        {
            id: "constat",
            title: "Notre Constat",
            icon: <Eye className="w-8 h-8 text-lore-main" />,
            content: (
                <>
                    <p className="mb-4">
                        Aujourd’hui, les logements Airbnb se ressemblent tous. Même déco, mêmes photos, mêmes promesses.
                        Les voyageurs n’attendent plus seulement un lieu pour dormir. <strong className="text-white">Ils veulent ressentir, vivre et partager.</strong>
                    </p>
                    <p>
                        Dans l’univers des love rooms, ce manque est encore plus criant : il y a beaucoup de décor, mais peu d’émotion réelle et d'histoire.
                        De l'intimité, oui, mais rarement une réelle <span className="italic text-lore-gold">aventure à deux</span>.
                    </p>
                </>
            )
        },
        {
            id: "idea",
            title: "Notre Idée",
            icon: <Sparkles className="w-8 h-8 text-lore-main" />,
            content: (
                <>
                    <p className="mb-4">
                        Une question simple : <strong className="text-white">Et si un logement devenait un jeu ?</strong> Et si une nuit à deux devenait une expérience scénarisée, progressive, pleine de surprises ?
                    </p>
                    <p>
                        Un moment où l’on explore, débloque, joue, rit, mais surtout se rapproche.
                        C’est ainsi qu’est née LORE : transformer les logements en expériences immersives, grâce à des escape games intégrés et personnalisables.
                    </p>
                </>
            )
        },
        {
            id: "creation",
            title: "Ce que nous créons",
            icon: <Box className="w-8 h-8 text-lore-main" />,
            content: (
                <>
                    <p className="mb-4">
                        Nous concevons des <strong className="text-white">caissons en bois design</strong>, intégrés dans le logement, qui ne sont pas de simples meubles. Ils cachent des mécanismes de jeu, des serrures magnétiques, et dévoilent des objets, des messages, des défis.
                    </p>
                    <p>
                        Associés à notre application mobile, ces modules permettent de vivre un escape game romantique ou une aventure scénarisée qui monte en intensité.
                        <span className="block mt-4 italic text-lore-gold">Chaque séjour devient une expérience, et non pas une simple nuit.</span>
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="bg-lore-main min-h-screen text-white overflow-hidden relative selection:bg-lore-gold selection:text-lore-main">
            {/* Background Blueprint Grid */}
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(229,193,93,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(229,193,93,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#080a0f_100%)]"></div>
            </div>

            {/* HERO */}
            <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center pt-20">
                <motion.div style={{ y: yHero, opacity: opacityHero }} className="text-center px-6 relative z-10 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8 inline-block border border-lore-gold/30 p-2 px-4 rounded-full bg-lore-main/50 backdrop-blur-sm"
                    >
                        <span className="text-lore-gold text-xs md:text-sm tracking-[0.3em] uppercase font-bold">Concept & Vision</span>
                    </motion.div>
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                        Au-delà de <br /><span className="italic text-lore-gold">la Nuitée</span>
                    </h1>
                    <p className="font-sans text-lore-muted text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Nous ne vendons pas des meubles. Nous ne vendons pas une application. <br />
                        <strong className="text-white">Nous vendons des souvenirs.</strong>
                    </p>
                </motion.div>

                {/* Animated Scroll Down */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <span className="text-[10px] uppercase tracking-widest writing-vertical-rl">Découvrir la vision</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-lore-gold to-transparent"></div>
                </motion.div>
            </section>

            {/* NARRATIVE STEPS */}
            <div className="container mx-auto px-6 relative z-10 pb-32">
                <div className="relative border-l border-lore-gold/20 ml-6 md:ml-1/2">
                    {sections.map((section, index) => (
                        <div key={index} className="mb-32 relative pl-12 md:pl-0">
                            {/* Connector Line Dot */}
                            <div className="absolute top-0 left-[-5px] md:left-1/2 md:-translate-x-[5px] w-[9px] h-[9px] bg-lore-gold rounded-full shadow-[0_0_20px_rgba(229,193,93,0.5)] z-20"></div>

                            <motion.div
                                initial={{ opacity: 0, x: 0, y: 50 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex - col md: flex - row gap - 12 items - center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} `}
                            >
                                {/* Text Content */}
                                <div className={`md: w - 1 / 2 ${index % 2 !== 0 ? 'md:pl-24 text-left' : 'md:pr-24 md:text-right'} `}>
                                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">{section.title}</h2>
                                    <div className="text-lore-muted leading-relaxed font-light text-base md:text-lg">
                                        {section.content}
                                    </div>
                                </div>

                                {/* Visual Content */}
                                <div className={`md: w - 1 / 2 ${index % 2 !== 0 ? 'md:pr-24' : 'md:pl-24'} `}>
                                    <TiltCard className="p-1 bg-gradient-to-br from-lore-gold/20 to-transparent rounded-sm h-full">
                                        <div className="bg-lore-surface border border-white/5 p-8 md:p-12 flex items-center justify-center min-h-[300px] h-full">
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-lore-gold/10 blur-3xl animate-pulse"></div>
                                                <div className="relative z-10 p-6 bg-lore-main rounded-full border border-lore-gold/50 shadow-2xl">
                                                    {section.icon}
                                                </div>
                                            </div>
                                        </div>
                                    </TiltCard>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* MISSION / SUMMARY */}
            <section className="py-24 bg-lore-secondary relative overflow-hidden text-center border-t border-white/5">
                <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid-pulse"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto mb-16">
                        <h2 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">Notre Mission</h2>
                        <p className="text-xl md:text-2xl font-light text-white/90 italic mb-12">
                            "Permettre aux hôtes de se différencier et aux couples de vivre une expérience intime, ludique et mémorable."
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto bg-white/5 p-8 rounded-sm border border-white/5">
                            <div>
                                <h4 className="text-lore-gold text-sm uppercase tracking-widest font-bold mb-2">Pour le Propriétaire</h4>
                                <p className="text-lore-muted text-sm">Transformer un logement standard en expérience immersive à haute valeur ajoutée.</p>
                            </div>
                            <div>
                                <h4 className="text-lore-gold text-sm uppercase tracking-widest font-bold mb-2">Pour le Voyageur</h4>
                                <p className="text-lore-muted text-sm">Transformer une nuit ordinaire à deux en une aventure inoubliable et émotionnelle.</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <Link to="/deploy">
                            <GoldButton size="large">Installer LORE</GoldButton>
                        </Link>
                        <Link to="/pour-qui">
                            <GoldButton variant="outline" size="large">Pour Qui est-ce ?</GoldButton>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};
