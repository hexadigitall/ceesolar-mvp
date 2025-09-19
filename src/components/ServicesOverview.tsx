"use client";
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowRight, Home, Building2, Zap, Users } from 'lucide-react';

interface Service {
    icon?: string;
    title: string;
    description: string;
    priceRange?: string;
    features?: string[];
}

interface ServicesProps {
    title?: string;
    subheading?: string;
    services?: Service[];
}

const defaultServices = [
    {
        icon: '⚡',
        title: 'Mini-Grids',
        description: 'Transforming communities with reliable, sustainable mini-grid solutions. Our distributed renewable energy systems provide 24/7 power access to underserved areas.',
        priceRange: 'Custom Solutions',
        features: ['Community Empowerment', 'Renewable Energy', 'Economic Development', 'Grid Independence']
    },
    {
        icon: '🔧',
        title: 'Energy Services',
        description: 'Comprehensive energy consulting and technical services. From feasibility studies to project management, we deliver end-to-end energy solutions.',
        priceRange: 'Tailored Packages',
        features: ['Technical Consulting', 'Project Development', 'Operations & Maintenance', 'Training & Capacity Building']
    },
    {
        icon: '📊',
        title: 'Energy Management',
        description: 'Smart energy management systems and digital solutions. Optimize energy consumption, monitor performance, and maximize efficiency with our advanced platforms.',
        priceRange: 'Subscription Based',
        features: ['Real-time Monitoring', 'Performance Analytics', 'Predictive Maintenance', 'Energy Optimization']
    }
];

const ServicesOverview = ({ 
    title = "Our Business Areas",
    subheading = "Comprehensive energy solutions driving sustainable development across Africa. We deliver innovative, scalable energy systems that empower communities and businesses.", 
    services = defaultServices 
}: ServicesProps) => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const getIconComponent = (index: number) => {
        const icons = [Home, Building2, Zap, Users];
        const IconComponent = icons[index] || Home;
        return <IconComponent className="w-full h-full" />;
    };

    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-gray-50/50 relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 sm:mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold font-montserrat mb-4 text-gray-900"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg sm:text-xl text-black max-w-3xl mx-auto leading-relaxed"
                    >
                        {subheading}
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {(services || defaultServices).map((service, i) => (
                        <motion.div
                            key={service.title}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white rounded-xl">
                                <CardHeader className="p-6">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0">
                                            {service.icon ? (
                                                <span className="text-2xl">{service.icon}</span>
                                            ) : (
                                                <div className="w-8 h-8">
                                                    {getIconComponent(i)}
                                                </div>
                                            )}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <CardTitle className="text-xl font-semibold text-gray-900 leading-tight mb-1">
                                                {service.title}
                                            </CardTitle>
                                            {service.priceRange && (
                                                <p className="text-sm text-primary font-medium">
                                                    {service.priceRange}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                
                                <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                                    <div>
                                        <p className="text-black mb-6 leading-relaxed text-base">
                                            {service.description}
                                        </p>
                                        
                                        {service.features && (
                                            <ul className="space-y-3 mb-6">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-black">
                                                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-1.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    
                                    <Button 
                                        className="w-full group bg-primary hover:bg-primary/90 transition-all duration-300 h-12 text-base font-medium"
                                        size="lg"
                                    >
                                        Get Free Quote
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Services CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white max-w-4xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4">Ready to Power Your Future?</h3>
                        <p className="text-lg mb-6 opacity-95 leading-relaxed max-w-2xl mx-auto">
                            Partner with Africa&apos;s leading energy innovators. Let&apos;s develop sustainable energy solutions that drive your success.
                        </p>
                        <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-primary hover:bg-gray-50 h-12 px-8 text-base font-medium"
                        >
                            Start Your Project
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesOverview;