import React from 'react';
import { Link } from 'react-router-dom';
import { SectionTitle } from './SectionTitle';
import { ModuleCard } from './ModuleCard';
import { GoldButton } from './GoldButton';
import { UNIVERSES_DATA } from '../data';

export const UniversesPreview: React.FC = () => {
    const previewUniverses = UNIVERSES_DATA.slice(0, 2);

    return (
        <section id="universes" className="py-16 md:py-32 bg-lore-main relative">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <SectionTitle
                    title="Nos Univers Narratifs"
                    subtitle="Des scénarios clés en main adaptés à l'architecture de votre bien. Voici nos best-sellers."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 md:mt-16 max-w-6xl mx-auto">
                    {previewUniverses.map((u, i) => (
                        <div key={u.id} className={`reveal ${i % 2 !== 0 ? 'delay-200' : ''}`}>
                            <ModuleCard universe={u} />
                        </div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20 text-center reveal delay-300 px-4">
                    <p className="text-lore-muted mb-6 md:mb-8 italic font-light text-sm">Découvrez notre catalogue complet d'expériences.</p>
                    <Link to="/univers">
                        <GoldButton variant="outline">Voir tous les Univers</GoldButton>
                    </Link>
                </div>
            </div>
        </section>
    );
};
