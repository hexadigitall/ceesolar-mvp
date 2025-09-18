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
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.6,
                ease: "easeOut"
            },
        }),
    };

    const getIconComponent = (index: number) => {
        const icons = [Home, Building2, Zap, Users];
        const IconComponent = icons[index] || Home;
        return <IconComponent className="w-12 h-12" />;
    };

    return (
        <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-gray-50/50 relative overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
            <div className="absolute bottom-0 right-0 w-1/3 h-64 bg-gradient-to-tl from-secondary/5 to-transparent rounded-full blur-3xl" />
            <div className="container">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold font-montserrat mb-4"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-xl text-gray-700 max-w-3xl mx-auto"
                    >
                        {subheading}
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {(services || defaultServices).map((service, i) => (
                        <motion.div
                            key={service.title}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={cardVariants}
                            className="h-full"
                        >
                            <Card className="h-full flex flex-col border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                            {service.icon ? (
                                                <span className="text-2xl">{service.icon}</span>
                                            ) : (
                                                getIconComponent(i)
                                            )}
                                        </div>
                                        <div>
                                            <CardTitle className="text-xl font-semibold text-gray-900">
                                                {service.title}
                                            </CardTitle>
                                            {service.priceRange && (
                                                <p className="text-sm text-primary font-medium mt-1">
                                                    {service.priceRange}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </CardHeader>
                                
                                <CardContent className="flex-grow flex flex-col justify-between pt-0">
                                    <div>
                                        <p className="text-gray-600 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        
                                        {service.features && (
                                            <ul className="space-y-2 mb-6">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-sm text-gray-700">
                                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    
                                    <Button 
                                        className="w-full group bg-primary hover:bg-primary/90 transition-all duration-300"
                                        size="lg"
                                    >
                                        Get Free Quote
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
                    <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Ready to Power Your Future?</h3>
                        <p className="text-lg mb-6 opacity-90">
                            Partner with Africa's leading energy innovators. Let's develop sustainable energy solutions that drive your success.
                        </p>
                        <Button 
                            variant="secondary" 
                            size="lg" 
                            className="bg-white text-primary hover:bg-gray-50"
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