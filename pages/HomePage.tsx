import React from 'react';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { Concept } from '../components/Concept';
import { UniversesPreview } from '../components/UniversesPreview';
import { Targets } from '../components/Targets';
import { TechReliability } from '../components/TechReliability';
import { Impact } from '../components/Impact';
import { LeadGen } from '../components/LeadGen';

export const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <Partners />
            <Concept />
            <UniversesPreview />
            <Targets />
            <TechReliability />
            <Impact />
            <LeadGen />
        </>
    );
};
