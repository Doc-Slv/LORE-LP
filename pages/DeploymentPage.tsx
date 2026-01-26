import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TunnelLayout } from '../components/DeploymentTunnel/TunnelLayout';
import { StepInitiator } from '../components/DeploymentTunnel/StepInitiator';
import { StepReceptacle } from '../components/DeploymentTunnel/StepReceptacle';
import { StepModule } from '../components/DeploymentTunnel/StepModule';
import { StepActivation } from '../components/DeploymentTunnel/StepActivation';
import { Analytics } from '../services/Analytics';

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

    React.useEffect(() => {
        Analytics.trackPage('/deploy');
    }, []);

    return (
        <TunnelLayout currentStep={data.step} totalSteps={4}>
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
                    />
                )}
            </AnimatePresence>
        </TunnelLayout>
    );
};
