import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Smartphone, Zap, Box, Key, Eye, Lock, Phone, Mail, MapPin, ChevronDown, CheckCircle2, ArrowRight, ShieldCheck, Cpu, RefreshCw, Hammer, Signal, Settings } from 'lucide-react';
import { GoldButton } from './components/GoldButton';
import { SectionTitle } from './components/SectionTitle';
import { ModuleCard } from './components/ModuleCard';
import { Logo } from './components/Logo';
import { sendLeadForm } from './services/leadService';
import { UNIVERSES_DATA } from './data';
import { UniversesPage } from './pages/UniversesPage';

// -- COMPONENT: Scroll Reveal Helper --
const useScrollReveal = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Reset classes
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => el.classList.remove('active'));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach((el) => observer.observe(el));

    return () => reveals.forEach((el) => observer.unobserve(el));
  }, [location]); // Re-run on route change
};

// -- COMPONENT: Header --
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Le Concept', href: '/#concept', isAnchor: true },
    { name: 'Nos Univers', href: '/univers', isAnchor: false },
    { name: 'Pour Qui ?', href: '/#targets', isAnchor: true },
    { name: 'Fiabilité', href: '/#reliability', isAnchor: true },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-700 border-b ${
        isScrolled 
          ? 'bg-lore-main/95 backdrop-blur-md border-white/5 py-3 shadow-2xl' 
          : 'bg-transparent border-transparent py-4 md:py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center gap-4 group cursor-pointer relative z-50">
           <Link to="/" onClick={() => window.scrollTo(0,0)}>
              <div className={`transition-all duration-300 ${isScrolled ? 'w-12 md:w-14' : 'w-14 md:w-20'}`}>
                <Logo className="w-full" />
              </div>
           </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-12 reveal active delay-500">
          {navLinks.map((link) => (
             link.isAnchor ? (
               <a 
                key={link.name}
                href={link.href}
                className="text-[0.65rem] lg:text-xs font-bold uppercase tracking-[0.15em] text-lore-muted hover:text-lore-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-lore-gold after:transition-all duration-300 hover:after:w-full"
               >
                 {link.name}
               </a>
             ) : (
               <Link 
                key={link.name}
                to={link.href}
                className="text-[0.65rem] lg:text-xs font-bold uppercase tracking-[0.15em] text-lore-muted hover:text-lore-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-lore-gold after:transition-all duration-300 hover:after:w-full"
               >
                 {link.name}
               </Link>
             )
          ))}
          <div className="h-6 w-[1px] bg-white/10 mx-2"></div>
          <GoldButton href="/#contact" variant="outline" size="normal">Demander un devis</GoldButton>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-lore-gold p-2 relative z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-lore-main z-40 flex flex-col items-center justify-center gap-8 p-6 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <div className="w-20 mb-6 opacity-80">
             <Logo />
          </div>
          
          {navLinks.map((link) => (
            link.isAnchor ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-serif text-white hover:text-lore-gold tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
            ) : (
                <Link
                  key={link.name} 
                  to={link.href}
                  className="text-lg font-serif text-white hover:text-lore-gold tracking-widest"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
            )
          ))}
          <div className="w-12 h-[1px] bg-white/10 my-4"></div>
          <GoldButton href="/#contact" onClick={() => setMobileMenuOpen(false)} size="large" className="w-full max-w-xs">Demander un devis</GoldButton>
      </div>
    </header>
  );
};

// -- SECTIONS (Sub-components of Home) --

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-lore-main">
      {/* Background Image & Heavy Overlay for contrast */}
      <div className="absolute inset-0 z-0 select-none">
        <div className="absolute inset-0 bg-lore-main/70 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-lore-main/90 via-transparent to-lore-main z-10"></div>
        
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop" 
          alt="Intérieur Appartement Luxe LORE" 
          className="w-full h-full object-cover object-center opacity-60 scale-105 animate-[glow_10s_ease-in-out_infinite_alternate]"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 z-20 flex flex-col items-center justify-center relative mt-0">
        
        {/* Subtle top decoration */}
        <div className="h-16 md:h-24 w-[1px] bg-gradient-to-b from-transparent via-lore-gold/60 to-transparent mb-8 md:mb-10 reveal delay-200"></div>

        {/* Main Text Content - Using 'reveal' instead of 'animate-fade-up' to ensure consistency */}
        <div className="text-center max-w-5xl mx-auto reveal delay-300">
            <h1 className="font-serif text-white mb-8 tracking-tight">
                <span className="block text-4xl sm:text-5xl md:text-7xl font-normal leading-tight">
                    TRANSFORMEZ<br /> VOS BIENS
                </span>
            </h1>
            
            {/* Elegant Separator with Text */}
            <div className="flex items-center justify-center gap-4 md:gap-6 mb-10 w-full">
                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-lore-gold/50"></div>
                <span className="font-sans text-[0.6rem] sm:text-xs md:text-sm text-lore-gold uppercase tracking-[0.3em] font-medium whitespace-nowrap px-2">
                    En Destinations Immersives
                </span>
                <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-lore-gold/50"></div>
            </div>

            <p className="font-sans text-lore-light/80 text-sm md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 px-4">
                Ne louez plus seulement des murs. <span className="text-white font-medium">Vendez une aventure.</span><br className="hidden sm:block"/>
                LORE équipe vos appartements avec des items interconnectés et des scénarios d'Escape Game invisibles.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/univers" className="w-full sm:w-auto">
                    <GoldButton size="large" className="w-full sm:min-w-[220px]">Voir les Univers</GoldButton>
                </Link>
                <GoldButton 
                    variant="outline" 
                    size="large" 
                    className="w-full sm:w-auto sm:min-w-[220px]"
                    onClick={() => document.getElementById('impact')?.scrollIntoView({behavior: 'smooth'})} 
                >
                    L'Impact Financier
                </GoldButton>
            </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 reveal delay-700 cursor-pointer group" onClick={() => document.getElementById('partners')?.scrollIntoView({behavior: 'smooth'})}>
        <span className="text-[0.5rem] uppercase tracking-[0.3em] text-lore-muted/50 group-hover:text-lore-gold transition-colors duration-300">Découvrir</span>
        <ChevronDown size={20} className="text-lore-muted/50 group-hover:text-lore-gold animate-bounce transition-colors duration-300" />
      </div>
    </section>
  );
};

const Partners: React.FC = () => {
    return (
        <section id="partners" className="bg-lore-surface border-y border-white/5 py-12 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-16 opacity-60 text-center reveal">
                    <p className="text-[0.6rem] uppercase tracking-[0.2em] text-lore-muted mb-4 xl:mb-0 shrink-0">Compatible & Intégré :</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center">
                        <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tighter hover:text-lore-gold transition-colors cursor-default reveal delay-100">airbnb</span>
                        <span className="font-serif font-bold text-xl md:text-2xl text-white tracking-wide hover:text-lore-gold transition-colors cursor-default reveal delay-200">Booking.com</span>
                        <span className="font-sans font-black text-lg md:text-xl text-white uppercase tracking-widest hover:text-lore-gold transition-colors cursor-default reveal delay-300">SONOS</span>
                        <span className="font-sans font-medium text-xl md:text-2xl text-white hover:text-lore-gold transition-colors cursor-default whitespace-nowrap reveal delay-400">PHILIPS <strong className="font-bold">HUE</strong></span>
                        <span className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight hover:text-lore-gold transition-colors cursor-default reveal delay-500">Nuki</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

const Concept: React.FC = () => {
  const pillars = [
    {
      icon: <Box className="w-6 h-6 text-lore-main" />,
      title: "Mobilier Augmenté",
      subtitle: "L'Hardware",
      desc: "Des meubles design (bibliothèques, bureaux, chevets) fabriqués sur-mesure, intégrant des mécanismes secrets (tiroirs magnétiques, trappes) invisibles à l'œil nu."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-lore-main" />,
      title: "Application Compagnon",
      subtitle: "Le Software",
      desc: "L'interface voyageur pour recevoir les indices et progresser dans l'histoire. Pour vous : un dashboard de gestion de parc et de maintenance prédictive.",
      highlight: false 
    },
    {
      icon: <Key className="w-6 h-6 text-lore-main" />,
      title: "Scénarios Évolutifs",
      subtitle: "Le Contenu",
      desc: "Un catalogue d'histoires (Escape Game, Enquête, Romance) mis à jour à distance. Vos murs ne changent pas, l'aventure change à volonté."
    }
  ];

  return (
    <section id="concept" className="py-16 md:py-32 bg-lore-main relative overflow-hidden">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        
      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle 
          title="L'Écosystème LORE" 
          subtitle="Une technologie invisible qui transforme votre bien immobilier en machine à souvenirs."
        />

        {/* Aligned Grid items with proper layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 md:mt-20 max-w-7xl mx-auto items-stretch">
          {pillars.map((p, i) => (
            <div key={i} className={`group relative flex flex-col h-full reveal ${i === 1 ? 'delay-200' : i === 2 ? 'delay-400' : ''}`}>
               {/* Background Border Layer (Absolute) - Fixed height issue */}
               <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-sm opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
               
               {/* Content Layer (Relative) - flex-1 to stretch height */}
               <div className="relative flex-1 bg-lore-secondary m-[1px] p-8 flex flex-col items-center text-center group-hover:bg-lore-secondary/80 transition-colors rounded-sm">
                  <div className={`mb-8 p-4 rounded-full bg-lore-gold/80 text-lore-main group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {p.icon}
                  </div>
                  <span className="text-[0.6rem] uppercase tracking-widest text-lore-muted mb-3">{p.subtitle}</span>
                  <h3 className="font-serif text-xl lg:text-2xl text-white mb-4">{p.title}</h3>
                  <p className="font-sans text-lore-muted text-sm leading-relaxed font-light">{p.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TechReliability: React.FC = () => {
    return (
        <section id="reliability" className="py-16 md:py-24 bg-lore-secondary relative border-y border-white/5">
            <div className="container mx-auto px-6">
                <SectionTitle 
                    title="Ingénierie Invisible & Robuste" 
                    subtitle="Conçu pour l'usage intensif hôtelier. Zéro maintenance quotidienne."
                />
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 max-w-6xl mx-auto">
                    {/* Block 1 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <Cpu className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Électronique Industrielle</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Pas de "bricolage". Nous utilisons des automates PLC industriels et des serrures magnétiques testées pour 100 000 cycles. Câblage normé et sécurisé.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal delay-200">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <RefreshCw className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Gestion 100% Automatisée</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Entre deux réservations, un simple clic sur l'app administrateur réinitialise tous les mécanismes (trappes, lumières, sons). Aucun personnel qualifié requis sur place.
                        </p>
                    </div>

                    {/* Block 3 */}
                    <div className="flex flex-col items-start p-6 border-l border-lore-gold/20 hover:border-lore-gold hover:bg-white/5 transition-all duration-300 reveal delay-400">
                        <div className="bg-lore-surface p-3 border border-white/10 mb-6">
                            <ShieldCheck className="text-lore-gold w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-white text-lg mb-3">Matériaux Nobles & Garantie</h4>
                        <p className="text-lore-muted text-sm font-light leading-relaxed">
                            Bois massif, métal, verre trempé. Nos modules sont conçus pour résister aux clients. Garantie hardware 2 ans avec échange standard J+1.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const UniversesPreview: React.FC = () => {
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

const Targets: React.FC = () => {
    return (
        <section id="targets" className="py-20 md:py-32 bg-lore-secondary relative border-y border-white/5 overflow-hidden">
             {/* Background noise/gradient */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-lore-gold/5 via-transparent to-transparent opacity-40 pointer-events-none"></div>

             <div className="container mx-auto px-6 relative z-10">
                <SectionTitle 
                    title="Une Solution, Deux Leviers" 
                    subtitle="Que vous cherchiez la scalabilité ou le rendement pur."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mt-16 max-w-6xl mx-auto">
                    {/* CARD 1: Conciergeries */}
                    <div className="group relative flex flex-col p-8 md:p-10 bg-lore-surface/40 backdrop-blur-sm border border-white/5 hover:border-lore-gold/40 transition-all duration-500 rounded-sm reveal hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        {/* Background Number */}
                        <div className="absolute top-0 right-4 text-[8rem] md:text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-lore-gold/[0.04] transition-colors duration-500 select-none leading-none z-0 pointer-events-none">
                            01
                        </div>
                        
                        {/* Content Wrapper */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start gap-5 mb-8">
                                <div className="shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lore-gold group-hover:border-lore-gold transition-all duration-500 shadow-lg">
                                    <Zap className="w-6 h-6 text-lore-gold group-hover:text-lore-main transition-colors duration-500" />
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-lore-gold transition-colors duration-300">Conciergeries</h3>
                                    <div className="h-0.5 w-12 bg-white/10 group-hover:bg-lore-gold/50 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-lore-muted font-sans text-sm md:text-base font-light leading-7 mb-8 group-hover:text-white/80 transition-colors duration-300">
                                Différenciez votre parc immobilier. Offrez une gamme <span className="font-medium text-white/90">"Premium Experience"</span> facturée plus cher, sans gestion opérationnelle supplémentaire grâce à notre app.
                            </p>

                            {/* List */}
                            <ul className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Standardisation du <span className="text-white">"Wow Effect"</span></span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Maintenance prédictive centralisée</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* CARD 2: Investisseurs */}
                    <div className="group relative flex flex-col p-8 md:p-10 bg-lore-surface/40 backdrop-blur-sm border border-white/5 hover:border-lore-gold/40 transition-all duration-500 rounded-sm reveal delay-200 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
                        {/* Background Number */}
                        <div className="absolute top-0 right-4 text-[8rem] md:text-[10rem] font-serif font-bold text-white/[0.02] group-hover:text-lore-gold/[0.04] transition-colors duration-500 select-none leading-none z-0 pointer-events-none">
                            02
                        </div>
                        
                        {/* Content Wrapper */}
                        <div className="relative z-10">
                            {/* Header */}
                            <div className="flex items-start gap-5 mb-8">
                                <div className="shrink-0 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-lore-gold group-hover:border-lore-gold transition-all duration-500 shadow-lg">
                                    <Eye className="w-6 h-6 text-lore-gold group-hover:text-lore-main transition-colors duration-500" />
                                </div>
                                <div className="pt-2">
                                    <h3 className="font-serif text-2xl md:text-3xl text-white mb-1 group-hover:text-lore-gold transition-colors duration-300">Investisseurs</h3>
                                    <div className="h-0.5 w-12 bg-white/10 group-hover:bg-lore-gold/50 transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text */}
                            <p className="text-lore-muted font-sans text-sm md:text-base font-light leading-7 mb-8 group-hover:text-white/80 transition-colors duration-300">
                                Maximisez le rendement de votre actif. Sortez de la guerre des prix sur Airbnb en proposant une nuitée que les voyageurs s'arrachent.
                            </p>

                            {/* List */}
                            <ul className="space-y-4 border-t border-white/5 pt-6 mt-auto">
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span><span className="text-white font-medium">+20% à +30%</span> sur le prix nuitée</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-lore-light/70 group-hover:text-lore-light transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-lore-gold shrink-0 mt-0.5" />
                                    <span>Visibilité algorithmique (Clics & Wishlist)</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
        </section>
    )
}

const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-32 bg-lore-main relative overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[800px] md:h-[800px] bg-lore-gold/5 rounded-full blur-[60px] md:blur-[100px] animate-pulse"></div>
        </div>
      <div className="container mx-auto px-6 relative z-10">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            <div className="lg:w-1/2 reveal">
                <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-6 md:mb-8 leading-tight text-center lg:text-left">
                    L'Économie de <br/> 
                    <span className="text-lore-gold italic">l'Expérience.</span>
                </h2>
                <p className="text-white text-base md:text-lg font-light leading-relaxed mb-8 text-center lg:text-left">
                    Dans un marché saturé d'appartements standardisés, l'émotion est la seule valeur refuge.
                </p>
                <div className="flex flex-col sm:flex-row items-center lg:items-start sm:justify-center lg:justify-start gap-4 text-xs font-bold uppercase tracking-widest text-lore-gold">
                    <span className="flex items-center gap-2"><ArrowRight size={14}/> Viralité Instagram</span>
                    <span className="flex items-center gap-2"><ArrowRight size={14}/> Avis 5 Étoiles</span>
                </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-lg mx-auto lg:mx-0 reveal delay-200">
                 <div className="glass-panel p-6 md:p-8 border-l-2 border-lore-gold transition-transform duration-500 hover:scale-[1.02]">
                    <p className="font-serif text-lg md:text-xl text-white italic mb-4 text-center lg:text-left">"J'ai réservé cet appartement uniquement pour l'énigme du secrétaire. C'était magique."</p>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0">
                        <span className="text-lore-muted text-xs uppercase tracking-wider">Julien M. - Airbnb Superguest</span>
                        <div className="flex text-lore-gold gap-1"><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /><Zap size={14} fill="currentColor" /></div>
                    </div>
                 </div>
            </div>
         </div>
      </div>
    </section>
  );
};

const LeadGen: React.FC = () => {
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
        setFormData({...formData, [e.target.name]: e.target.value});
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
}

const Footer: React.FC = () => {
    return (
        <footer id="footer" className="bg-black py-16 md:py-20 border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/5 pb-12 mb-12 reveal">
                    <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
                         <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                            <div className="w-16"><Logo /></div>
                        </div>
                        <p className="text-lore-muted text-sm font-light leading-7">
                            Créateur d'expériences immersives pour l'immobilier locatif.<br/>
                            Nous transformons vos m² en souvenirs inoubliables.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full md:w-auto text-center md:text-left">
                        <div>
                            <h4 className="text-white font-serif text-lg mb-6">Contact B2B</h4>
                            <ul className="space-y-4 text-sm text-lore-muted font-light flex flex-col items-center md:items-start">
                                <li className="flex items-center gap-3"><MapPin size={14} className="text-lore-gold"/> Paris, France</li>
                                <li className="flex items-center gap-3"><Mail size={14} className="text-lore-gold"/> pro@lore-experience.com</li>
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
}

// -- HOME PAGE LAYOUT --
const HomePage: React.FC = () => {
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

// -- MAIN APP & ROUTER --
export default function App() {
  return (
    <Router>
        <ScrollAwareApp />
    </Router>
  );
}

// Separate component to use Router hooks
const ScrollAwareApp = () => {
    useScrollReveal();
    return (
        <div className="min-h-screen font-sans selection:bg-lore-gold selection:text-lore-main bg-lore-main overflow-x-hidden">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/univers" element={<UniversesPage />} />
            </Routes>
            <Footer />
        </div>
    );
}