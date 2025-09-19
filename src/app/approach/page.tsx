'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Users, Lightbulb, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ApproachPage() {
  const approaches = [
    {
      icon: Target,
      title: 'Strategic Assessment',
      description: 'Comprehensive analysis of energy needs, infrastructure requirements, and community dynamics to design optimal solutions.',
      steps: ['Site Assessment', 'Energy Audit', 'Stakeholder Mapping', 'Feasibility Study']
    },
    {
      icon: Lightbulb,
      title: 'Innovative Design',
      description: 'Custom energy solutions using cutting-edge technology and sustainable practices tailored to local conditions.',
      steps: ['System Design', 'Technology Selection', 'Integration Planning', 'Performance Modeling']
    },
    {
      icon: Users,
      title: 'Community Engagement',
      description: 'Collaborative approach involving local communities, ensuring sustainable adoption and long-term success.',
      steps: ['Community Consultation', 'Training Programs', 'Local Partnerships', 'Capacity Building']
    },
    {
      icon: Zap,
      title: 'Implementation & Support',
      description: 'Professional installation, comprehensive testing, and ongoing maintenance to ensure optimal performance.',
      steps: ['Project Installation', 'System Testing', 'Performance Monitoring', 'Maintenance Support']
    }
  ];

  const principles = [
    'Sustainability-first approach in all our solutions',
    'Community-centered design and implementation',
    'Technology innovation with proven reliability',
    'Local capacity building and knowledge transfer',
    'Long-term partnerships over short-term profits',
    'Environmental stewardship and carbon reduction'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat mb-6"
          >
            Our Approach
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            A methodology rooted in innovation, sustainability, and community partnership to deliver transformative energy solutions across Africa
          </motion.p>
        </div>
      </section>

      {/* Approach Methodology */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Our Methodology</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              A proven four-phase approach that ensures successful project delivery and sustainable impact
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white border rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary flex-shrink-0 mr-4">
                    <approach.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{approach.title}</h3>
                </div>
                
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {approach.description}
                </p>
                
                <ul className="space-y-3">
                  {approach.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-800">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-1.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Guiding Principles</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              The values and commitments that shape every aspect of our work
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 leading-relaxed">{principle}</span>
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
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Ready to Work Together?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s discuss how our proven approach can deliver the energy solutions your community needs
            </p>
            <Button 
              className="h-12 px-8 bg-white text-primary hover:bg-gray-50 rounded-lg font-medium text-base"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}