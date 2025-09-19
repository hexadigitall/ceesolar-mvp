'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Factory, Sun, Battery, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EnergyServicesPage() {
  const services = [
    {
      icon: Building2,
      title: 'Commercial Solar Solutions',
      description: 'Comprehensive solar installations for office buildings, retail centers, and commercial facilities.',
      features: ['Grid-tied Systems', 'Energy Storage Options', 'Monitoring & Analytics', 'Maintenance Support'],
      benefits: 'Reduce operational costs by up to 60% with reliable commercial solar systems'
    },
    {
      icon: Factory,
      title: 'Industrial Energy Systems',
      description: 'Large-scale energy solutions for manufacturing, processing, and industrial facilities.',
      features: ['High-capacity Systems', 'Load Management', 'Power Quality Solutions', 'Backup Power'],
      benefits: 'Ensure consistent power supply while reducing energy costs for industrial operations'
    },
    {
      icon: Battery,
      title: 'Energy Storage Solutions',
      description: 'Advanced battery storage systems for commercial and industrial applications.',
      features: ['Peak Shaving', 'Load Balancing', 'Backup Power', 'Grid Independence'],
      benefits: 'Optimize energy usage and ensure power continuity during grid outages'
    }
  ];

  const sectors = [
    'Manufacturing & Production',
    'Retail & Commercial Centers',
    'Healthcare Facilities',
    'Educational Institutions',
    'Hospitality & Tourism',
    'Agricultural Processing',
    'Telecommunications',
    'Financial Services'
  ];

  const process = [
    {
      step: '01',
      title: 'Energy Assessment',
      description: 'Comprehensive analysis of your current energy consumption and requirements'
    },
    {
      step: '02',
      title: 'System Design',
      description: 'Custom solution design optimized for your specific business needs'
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Professional installation with minimal disruption to your operations'
    },
    {
      step: '04',
      title: 'Support & Monitoring',
      description: 'Ongoing maintenance and performance monitoring for optimal efficiency'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
          >
            <Building2 className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat mb-6"
          >
            Energy Services
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8"
          >
            Comprehensive energy solutions for commercial and industrial clients across Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="h-12 bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 text-base sm:text-lg font-medium">
              Get Energy Assessment
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Our Services</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Tailored energy solutions designed to reduce costs and improve efficiency for your business
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0 mr-4">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 leading-tight">{service.title}</h3>
                </div>
                
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-800">
                        <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium">{service.benefits}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Sectors We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Delivering energy solutions across diverse industries and business sectors
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Sun className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-base font-medium text-gray-900">{sector}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Our Process</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              A streamlined approach to delivering your energy solution from consultation to ongoing support
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-800 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Ready to Reduce Your Energy Costs?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
              Get a free energy assessment and discover how much you can save with our commercial energy solutions
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="h-12 px-8 bg-white text-primary hover:bg-gray-50 rounded-lg font-medium text-base">
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="h-12 px-8 border-2 border-white text-white hover:bg-white hover:text-primary rounded-lg font-medium text-base">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}