import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { UniversesPage } from './pages/UniversesPage';
import { UniverseDetailPage } from './pages/UniverseDetailPage';
import { useScrollReveal } from './components/hooks/useScrollReveal';
import { PageTransition } from './components/PageTransition';
import { BackgroundEffect } from './components/BackgroundEffect';
import { ScrollToTop } from './components/ScrollToTop';
import { DeploymentPage } from './pages/DeploymentPage';
import { Analytics } from './services/Analytics';

// Separate component to use Router hooks
const ScrollAwareApp = () => {
    useScrollReveal();
    const location = useLocation();

    // Scroll to top on route change
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen font-sans selection:bg-lore-gold selection:text-lore-main bg-lore-main overflow-x-hidden">


            <BackgroundEffect />
            <ScrollToTop />
            <Header />
            <AnimatePresence mode="wait">
                {/* @ts-ignore - version mismatch with types, but standard framer motion pattern */}
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={
                        <PageTransition>
                            <HomePage />
                        </PageTransition>
                    } />
                    <Route path="/univers" element={
                        <PageTransition>
                            <UniversesPage />
                        </PageTransition>
                    } />
                    <Route path="/univers/:id" element={
                        <PageTransition>
                            <UniverseDetailPage />
                        </PageTransition>
                    } />
                    <Route path="/deploy" element={
                        <PageTransition>
                            <DeploymentPage />
                        </PageTransition>
                    } />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default function App() {
    React.useEffect(() => {
        Analytics.init();
    }, []);

    return (
        <Router>
            <ScrollAwareApp />
        </Router>
    );
}

