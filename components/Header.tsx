import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { GoldButton } from './GoldButton';

export const Header: React.FC = () => {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 20);
    });

    const navLinks = [
        { name: 'Le Concept', href: '/#concept', isAnchor: true },
        { name: 'Nos Univers', href: '/univers', isAnchor: false },
        { name: 'Pour Qui ?', href: '/#targets', isAnchor: true },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const linkVariants = {
        closed: { x: 50, opacity: 0 },
        open: { x: 0, opacity: 1 }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 w-full z-50 transition-colors duration-300 border-b ${scrolled || mobileMenuOpen
                ? 'bg-lore-main/90 backdrop-blur-md border-white/5 py-3 shadow-2xl'
                : 'bg-transparent border-transparent py-4 md:py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo Area */}
                <div className="flex items-center gap-4 group cursor-pointer relative z-50">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        <div className={`transition-all duration-300 ${scrolled ? 'w-12 md:w-14' : 'w-14 md:w-20'}`}>
                            <Logo className="w-full" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-12">
                    {navLinks.map((link) => (
                        link.isAnchor ? (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-[0.65rem] lg:text-xs font-bold uppercase tracking-[0.15em] text-lore-muted hover:text-lore-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-lore-gold after:transition-all duration-300 hover:after:w-full cursor-hover"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-[0.65rem] lg:text-xs font-bold uppercase tracking-[0.15em] text-lore-muted hover:text-lore-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-lore-gold after:transition-all duration-300 hover:after:w-full cursor-hover"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
                    <div className="cursor-hover">
                        <GoldButton href="/#contact" variant="outline" size="normal">Demander un devis</GoldButton>
                    </div>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-lore-gold p-2 relative z-50 focus:outline-none cursor-hover"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-lore-main z-40 flex flex-col items-center justify-center gap-8 p-6 md:hidden"
                    >
                        <motion.div variants={linkVariants} className="w-20 mb-6 opacity-80">
                            <Logo />
                        </motion.div>

                        {navLinks.map((link) => (
                            <motion.div key={link.name} variants={linkVariants}>
                                {link.isAnchor ? (
                                    <a
                                        href={link.href}
                                        className="text-lg font-serif text-white hover:text-lore-gold tracking-widest cursor-hover"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </a>
                                ) : (
                                    <Link
                                        to={link.href}
                                        className="text-lg font-serif text-white hover:text-lore-gold tracking-widest cursor-hover"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </motion.div>
                        ))}
                        <motion.div variants={linkVariants} className="w-12 h-[1px] bg-white/10 my-4"></motion.div>
                        <motion.div variants={linkVariants}>
                            <GoldButton href="/#contact" onClick={() => setMobileMenuOpen(false)} size="large" className="w-full max-w-xs cursor-hover">Demander un devis</GoldButton>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
