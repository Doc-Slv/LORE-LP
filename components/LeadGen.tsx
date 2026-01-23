import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { GoldButton } from './GoldButton';
import { SectionTitle } from './SectionTitle';
import { sendLeadForm } from '../services/leadService';

export const LeadGen: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        projectType: 'hotel',
        email: '',
        phone: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await sendLeadForm(formData);
            alert("Votre demande de devis a été transmise.");
            setFormData({ name: '', company: '', projectType: 'hotel', email: '', phone: '', message: '' });
        } catch (error) {
            alert("Erreur lors de l'envoi.");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = "w-full bg-lore-main/50 border border-white/10 p-4 text-white placeholder-lore-muted/30 focus:border-lore-gold focus:outline-none transition-all duration-300 backdrop-blur-sm text-sm md:text-base font-light rounded-sm focus:shadow-[0_0_15px_rgba(229,193,93,0.1)]";

    return (
        <section id="contact" className="py-16 md:py-32 bg-black relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
                <SectionTitle
                    title="Obtenir un Devis"
                    subtitle="Discutons de la transformation de vos biens. Étude de faisabilité offerte."
                />

                <div className="mt-12 md:mt-16 border border-white/5 p-1 bg-gradient-to-b from-white/10 to-transparent reveal">
                    <form onSubmit={handleSubmit} className="bg-lore-surface p-6 md:p-16 shadow-2xl relative overflow-hidden group">
                        {/* Gradient border effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lore-gold to-transparent opacity-50 group-hover:animate-shimmer"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest text-lore-gold/70 ml-1">Identité</label>
                                <input type="text" name="name" required placeholder="Nom & Prénom" value={formData.name} onChange={handleChange} className={inputClasses} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest text-lore-gold/70 ml-1">Organisation</label>
                                <input type="text" name="company" placeholder="Nom de la Conciergerie / Investisseur" value={formData.company} onChange={handleChange} className={inputClasses} />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest text-lore-gold/70 ml-1">Profil</label>
                                <div className="relative">
                                    <select name="projectType" value={formData.projectType} onChange={handleChange} className={`${inputClasses} appearance-none cursor-pointer`}>
                                        <option value="conciergerie">Conciergerie (Gestion de parc)</option>
                                        <option value="investor">Investisseur (Hôte individuel)</option>
                                        <option value="hotel">Hôtellerie</option>
                                        <option value="other">Autre</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-lore-muted pointer-events-none w-4 h-4" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[0.6rem] uppercase tracking-widest text-lore-gold/70 ml-1">Contact</label>
                                <input type="email" name="email" required placeholder="Email Professionnel" value={formData.email} onChange={handleChange} className={inputClasses} />
                            </div>
                        </div>
                        <div className="mb-8 md:mb-12 space-y-2">
                            <label className="text-[0.6rem] uppercase tracking-widest text-lore-gold/70 ml-1">Votre Projet</label>
                            <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Type de bien (Studio, T2...), Ville, Nombre d'appartements à équiper..." className={inputClasses}></textarea>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6">
                            <GoldButton type="submit" size="large" className="w-full md:w-auto">Demander un Devis Gratuit</GoldButton>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
