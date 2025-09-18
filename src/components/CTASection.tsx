"use client";
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Calculator, Phone } from 'lucide-react';

interface CTAProps {
    title?: string;
    subheading?: string;
}

const CTASection = ({ 
    title = "Ready to Go Solar?",
    subheading = "Join thousands of Nigerians already saving money with clean, reliable solar energy. Get your free quote today and start your journey to energy independence."
}: CTAProps) => {
    return (
        <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/assets/images/solar-pattern.svg')] opacity-10" />
            
            <div className="container relative z-10 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-montserrat mb-6">
                        {title}
                    </h2>
                    <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                        {subheading}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button 
                        size="lg" 
                        variant="secondary"
                        className="bg-white text-primary hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Savings
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    <Button 
                        size="lg" 
                        variant="outline"
                        className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300 group"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Get Free Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
                >
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold mb-2">24/7</div>
                        <div className="text-primary-foreground/80">Customer Support</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold mb-2">5+ Years</div>
                        <div className="text-primary-foreground/80">Industry Experience</div>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold mb-2">1000+</div>
                        <div className="text-primary-foreground/80">Happy Customers</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTASection;