import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-black py-16 md:py-20 border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/5 pb-12 mb-12 reveal">
                    <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                            <div className="w-16"><Logo /></div>
                        </div>
                        <p className="text-lore-muted text-sm font-light leading-7">
                            Créateur d'expériences immersives pour l'immobilier locatif.<br />
                            Nous transformons vos m² en souvenirs inoubliables.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:w-auto text-center md:text-left">
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Contact B2B</h4>
                            <ul className="space-y-4 text-sm text-lore-muted font-light flex flex-col items-center md:items-start">
                                <li className="flex items-center gap-3"><MapPin size={14} className="text-lore-gold" /> Paris, France</li>
                                <li className="flex items-center gap-3"><Mail size={14} className="text-lore-gold" /> pro@lore-experience.com</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Liens</h4>
                            <ul className="space-y-4 text-sm text-lore-muted font-light">
                                <li><Link to="/univers" className="hover:text-lore-gold transition-colors">Nos Univers</Link></li>
                                <li><a href="/#targets" className="hover:text-lore-gold transition-colors">Conciergeries</a></li>
                                <li><a href="/#contact" className="hover:text-lore-gold transition-colors">Devenir Partenaire</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-widest text-lore-muted/30 gap-4 md:gap-0 text-center">
                    <p>&copy; {new Date().getFullYear()} LORE Experience.</p>
                </div>
            </div>
        </footer>
    );
};
