'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Settings, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function EnergyManagementPage() {
  const services = [
    {
      icon: BarChart3,
      title: 'Energy Audits & Analysis',
      description: 'Comprehensive evaluation of your energy consumption patterns and identification of optimization opportunities.',
      features: ['Energy Consumption Analysis', 'Efficiency Assessment', 'Cost-Benefit Analysis', 'Recommendations Report']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Advanced strategies to maximize energy efficiency and reduce operational costs across your facilities.',
      features: ['Load Management', 'Peak Demand Reduction', 'System Efficiency Tuning', 'Energy Monitoring']
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'End-to-end project management services for energy infrastructure development and implementation.',
      features: ['Project Planning', 'Stakeholder Coordination', 'Implementation Oversight', 'Quality Assurance']
    },
    {
      icon: Shield,
      title: 'Advisory Services',
      description: 'Strategic guidance on energy policy, regulatory compliance, and long-term energy planning.',
      features: ['Energy Strategy Development', 'Regulatory Compliance', 'Risk Assessment', 'Technology Selection']
    }
  ];

  const benefits = [
    'Reduce energy costs by 20-40% through optimized consumption',
    'Improve operational efficiency and system reliability',
    'Ensure regulatory compliance and risk mitigation',
    'Access to latest energy technologies and best practices',
    'Comprehensive reporting and performance tracking',
    'Expert guidance throughout your energy journey'
  ];

  const industries = [
    { name: 'Manufacturing', icon: '🏭', description: 'Energy optimization for production facilities' },
    { name: 'Healthcare', icon: '🏥', description: 'Reliable power for critical medical operations' },
    { name: 'Education', icon: '🏫', description: 'Cost-effective energy solutions for institutions' },
    { name: 'Hospitality', icon: '🏨', description: 'Energy management for hotels and resorts' },
    { name: 'Agriculture', icon: '🚜', description: 'Power solutions for agricultural processing' },
    { name: 'Retail', icon: '🏪', description: 'Energy efficiency for commercial spaces' }
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
            <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat mb-6"
          >
            Energy Management
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8"
          >
            Strategic energy management and advisory services to optimize performance and reduce costs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="h-12 bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 text-base sm:text-lg font-medium">
              Request Energy Audit
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
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Our Management Services</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Comprehensive energy management solutions to optimize your operations and reduce costs
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
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
                
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-800">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0 mt-1.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-6 text-gray-900">Why Choose Our Energy Management?</h2>
              <p className="text-lg text-gray-800 mb-8 leading-relaxed">
                Our comprehensive approach to energy management delivers measurable results and long-term value for your organization.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">20-40%</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">Cost Reduction</div>
                <div className="text-gray-800 mb-6">Average energy cost savings achieved through our optimization strategies</div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-secondary mb-1">95%</div>
                    <div className="text-sm text-gray-800">Client Satisfaction</div>
                  </div>
                  <div className="p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-gray-800">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4 text-gray-900">Industries We Serve</h2>
            <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Specialized energy management solutions across diverse industry sectors
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-sm text-gray-800">{industry.description}</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Start Optimizing Your Energy Today</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed max-w-2xl mx-auto">
              Get expert energy management guidance and start reducing your operational costs immediately
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button className="h-12 px-8 bg-white text-primary hover:bg-gray-50 rounded-lg font-medium text-base">
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="h-12 px-8 border-2 border-white text-white hover:bg-white hover:text-primary rounded-lg font-medium text-base">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}