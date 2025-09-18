'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Lightbulb, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function MiniGridsPage() {
  const benefits = [
    {
      icon: Zap,
      title: 'Reliable Power Supply',
      description: '24/7 electricity access with 99%+ uptime reliability for community needs'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Local job creation and capacity building programs for sustainable operations'
    },
    {
      icon: TrendingUp,
      title: 'Economic Growth',
      description: 'Enabling businesses, schools, and healthcare facilities to operate effectively'
    },
    {
      icon: Lightbulb,
      title: 'Smart Technology',
      description: 'Advanced monitoring systems and smart meters for efficient energy management'
    }
  ];

  const features = [
    'Renewable energy sources (solar, wind, hybrid)',
    'Battery storage systems for 24/7 power',
    'Smart grid technology and monitoring',
    'Local technician training programs',
    'Flexible payment systems',
    'Remote monitoring and maintenance',
    'Scalable system design',
    'Community ownership models'
  ];

  const projects = [
    {
      name: 'Rural Community Electrification Project',
      location: 'Northern Nigeria',
      capacity: '500kW',
      beneficiaries: '2,500+',
      status: 'Operational',
      impact: 'Powered 600 homes, 3 schools, and 2 health centers'
    },
    {
      name: 'Agricultural Processing Hub',
      location: 'Middle Belt Region',
      capacity: '1.2MW',
      beneficiaries: '5,000+',
      status: 'Under Construction',
      impact: 'Supporting 50+ agribusiness enterprises'
    },
    {
      name: 'Island Community Grid',
      location: 'Lagos State',
      capacity: '300kW',
      beneficiaries: '1,200+',
      status: 'Planning',
      impact: 'Full electrification of island community'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center text-white px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8"
          >
            <Zap className="w-8 h-8 sm:w-10 sm:h-10" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat mb-6"
          >
            Mini-Grids
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8"
          >
            Transforming communities with reliable, sustainable mini-grid solutions that provide 24/7 power access to underserved areas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="bg-white text-primary hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              Start Your Project
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Are Mini-Grids Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-montserrat mb-6">What Are Mini-Grids?</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Mini-grids are localized electricity distribution networks that operate independently from the national grid. They provide reliable, clean energy to communities that are either unconnected or poorly served by centralized power systems.
                </p>
                <p>
                  Our mini-grid solutions combine renewable energy generation with smart distribution technology, battery storage, and local management systems to deliver consistent 24/7 power supply to homes, businesses, schools, and healthcare facilities.
                </p>
                <p>
                  Each system is designed with community needs at the center, incorporating local economic activities, growth projections, and sustainability requirements to ensure long-term success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-4 md:grid-cols-2"
            >
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-montserrat mb-4">Key Features & Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our mini-grid systems are designed with cutting-edge technology and community-centric approaches
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-montserrat mb-4">Our Mini-Grid Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real impact across communities - transforming lives through reliable energy access
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Operational' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === 'Under Construction'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-2xl font-bold text-primary">{project.capacity}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.location}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Beneficiaries:</span>
                    <span className="font-medium">{project.beneficiaries}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700 italic">{project.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-montserrat mb-6">
              Ready to Power Your Community?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Let&apos;s discuss how our mini-grid solutions can transform your community with reliable, sustainable energy access.
            </p>
            <div className="space-x-4">
              <Button className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg">
                Get Started Today
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}