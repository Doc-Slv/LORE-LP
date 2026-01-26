import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TunnelLayout } from '../components/DeploymentTunnel/TunnelLayout';
import { StepInitiator } from '../components/DeploymentTunnel/StepInitiator';
import { StepReceptacle } from '../components/DeploymentTunnel/StepReceptacle';
import { StepModule } from '../components/DeploymentTunnel/StepModule';
import { StepActivation } from '../components/DeploymentTunnel/StepActivation';
import { Analytics } from '../services/Analytics';
import { ExitIntentModal } from '../components/ExitIntentModal';

export type DeploymentData = {
    step: number;
    initiator: {
        name: string;
        email: string;
        phone: string;
    };
    receptacle: {
        type: string;
        surface: string;
        rooms: string;
        link: string;
    };
    module: string;
};

const initialData: DeploymentData = {
    step: 1,
    initiator: { name: '', email: '', phone: '' },
    receptacle: { type: '', surface: '', rooms: '', link: '' },
    module: ''
};

export const DeploymentPage = () => {
    const [data, setData] = useState<DeploymentData>(initialData);
    const [showExitModal, setShowExitModal] = useState(false);
    const [hasTriggeredExit, setHasTriggeredExit] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const updateData = (section: keyof DeploymentData, payload: any) => {
        setData(prev => ({ ...prev, [section]: payload }));
    };

    const nextStep = () => {
        const next = data.step + 1;
        setData(prev => ({ ...prev, step: next }));
        Analytics.trackEvent('deployment_step_change', { step: next });
        window.scrollTo(0, 0);
    };

    const prevStep = () => {
        setData(prev => ({ ...prev, step: prev.step - 1 }));
    };

    useEffect(() => {
        Analytics.trackPage('/deploy');
    }, []);

    // Handle Exit Intent (Mouse Leave)
    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggeredExit && !isCompleted) {
                setShowExitModal(true);
                setHasTriggeredExit(true); // Only trigger once automatically
                Analytics.trackEvent('exit_intent_triggered');
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);
        return () => document.removeEventListener('mouseleave', handleMouseLeave);
    }, [hasTriggeredExit, isCompleted]);

    // Handle Manual Exit (Button Click)
    const handleAbort = () => {
        if (isCompleted) {
            window.location.href = '/';
        } else {
            setShowExitModal(true);
        }
    };

    return (
        <TunnelLayout
            currentStep={data.step}
            totalSteps={4}
            onAbort={handleAbort}
        >
            <AnimatePresence mode='wait'>
                {data.step === 1 && (
                    <StepInitiator
                        key="step1"
                        data={data.initiator}
                        onUpdate={(d) => updateData('initiator', d)}
                        onNext={nextStep}
                    />
                )}
                {data.step === 2 && (
                    <StepReceptacle
                        key="step2"
                        data={data.receptacle}
                        onUpdate={(d) => updateData('receptacle', d)}
                        onBack={prevStep}
                        onNext={nextStep}
                    />
                )}
                {data.step === 3 && (
                    <StepModule
                        key="step3"
                        selectedModule={data.module}
                        onSelect={(m) => updateData('module', m)}
                        onBack={prevStep}
                        onNext={nextStep}
                    />
                )}
                {data.step === 4 && (
                    <StepActivation
                        key="step4"
                        fullData={data}
                        onBack={prevStep}
                        onSuccess={() => setIsCompleted(true)}
                    />
                )}
            </AnimatePresence>
            <ExitIntentModal
                isOpen={showExitModal}
                onClose={() => setShowExitModal(false)}
            />
        </TunnelLayout>
    );
};
