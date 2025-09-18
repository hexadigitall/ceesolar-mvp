"use client";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Calculator, Phone, Zap, Leaf, Shield } from 'lucide-react';
import PartnerLogos from './PartnerLogos';

interface HeroProps {
    headline?: string;
    subheading?: string;
    subpoints?: string[];
}

const HeroSection = ({
    headline = "Accelerating Energy Access in Africa",
    subheading = "We develop innovative energy solutions that drive sustainable development, create economic opportunities, and empower communities across the continent.",
    subpoints = ["Energy Innovation", "Community Impact", "Sustainable Growth"]
}: HeroProps) => {
    return (
        <section className="relative min-h-[90vh] w-full flex items-center justify-center overflow-hidden pt-24 pb-8">
            {/* Base gradient using Ceesolar brand colors */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
            
            {/* Enhanced glassmorphism layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/25" />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/5 via-transparent to-primary/20" />
            
            {/* Advanced glassmorphism with multiple refractions */}
            <div className="absolute inset-0 backdrop-blur-[1px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/15 via-transparent to-secondary/10" />
                <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_40%_60%,transparent_0deg,rgba(255,255,255,0.08)_30deg,transparent_90deg,rgba(0,74,153,0.05)_180deg,transparent_270deg)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,255,255,0.06)_0%,transparent_40%)]" />
            </div>
            
            
            {/* Elegant floating elements */}
            <div className="absolute top-32 right-24 w-40 h-40 bg-gradient-to-br from-white/10 to-secondary/20 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDuration: '6s'}} />
            <div className="absolute bottom-40 left-20 w-28 h-28 bg-gradient-to-tl from-primary/15 to-white/8 rounded-full blur-xl opacity-50 animate-pulse" style={{animationDuration: '8s'}} />
            <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-r from-secondary/12 to-primary/10 rounded-2xl blur-lg opacity-30 animate-pulse" style={{animationDuration: '10s'}} />
            
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-20 text-center text-white py-16 sm:py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto"
                >
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat tracking-tight mb-6 px-4 sm:px-0"
                    >
                        {headline}
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
                    >
                        {subheading}
                    </motion.p>
                </motion.div>

                {/* Value Propositions */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto"
                >
                    {subpoints.map((point, index) => {
                        const icons = [Zap, Shield, Leaf];
                        const colors = ['text-primary', 'text-secondary', 'text-accent'];
                        const IconComponent = icons[index] || Zap;
                        return (
                            <div key={point} className="flex items-center justify-center space-x-2 text-base sm:text-lg py-2">
                                <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${colors[index] || 'text-primary'} flex-shrink-0`} />
                                <span className="text-center">{point}</span>
                            </div>
                        );
                    })}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 max-w-md mx-auto"
                >
                    <Button 
                        size="lg" 
                        className="w-full sm:w-auto h-12 bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group px-8 text-base font-medium border-0"
                    >
                        <Calculator className="w-5 h-5 mr-2" />
                        Explore Solutions
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="w-full sm:w-auto h-12 border-2 border-white/80 text-white hover:bg-white hover:text-primary backdrop-blur-sm bg-white/5 transition-all duration-300 group px-8 text-base font-medium hover:border-white hover:shadow-lg"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Contact Us
                    </Button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 sm:mt-16 text-center px-4 sm:px-0"
                >
                    <p className="text-xs sm:text-sm text-white/80 mb-4 sm:mb-6">Trusted by leading organizations across Nigeria</p>
                    <PartnerLogos />
                </motion.div>
            </div>

            {/* Sophisticated floating glass elements */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 2, 0],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-20 right-20 w-20 h-20 border border-emerald-300/20 rounded-full backdrop-blur-sm bg-gradient-to-br from-white/10 to-primary/5 hidden lg:block"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -3, 0],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3
                }}
                className="absolute bottom-40 left-20 w-14 h-14 bg-gradient-to-tr from-emerald-400/15 to-teal-300/10 rounded-lg backdrop-blur-sm hidden lg:block"
            />
            <motion.div
                animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-1/2 right-1/4 w-8 h-8 border border-primary/20 rounded-sm backdrop-blur-sm bg-emerald-200/5 hidden lg:block"
            />
        </section>
    );
};

export default HeroSection;