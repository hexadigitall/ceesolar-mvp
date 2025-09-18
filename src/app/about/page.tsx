'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, Zap } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to develop sustainable energy solutions that meet the unique challenges of African communities.'
    },
    {
      icon: Users,
      title: 'Community Impact',
      description: 'Our solutions are designed to empower communities, create economic opportunities, and drive sustainable development across Africa.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in project delivery, technical expertise, and customer service in everything we do.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Environmental stewardship is at the core of our mission as we work to reduce carbon footprints and promote clean energy adoption.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '10,000+', label: 'People Impacted' },
    { number: '15MW', label: 'Capacity Deployed' },
    { number: '8', label: 'Years Experience' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 text-center text-white px-4 sm:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-montserrat mb-6"
          >
            About Ceesolar
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto leading-relaxed"
          >
            Accelerating energy access across Africa through innovative renewable energy solutions
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6">
          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold font-montserrat">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To accelerate energy access across Africa by developing innovative, scalable, and sustainable energy solutions that empower communities, drive economic growth, and create lasting social impact.
                </p>
                
                <div className="flex items-center mb-6">
                  <Target className="w-8 h-8 text-primary mr-4" />
                  <h2 className="text-3xl font-bold font-montserrat">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be Africa&apos;s leading energy company, transforming communities through reliable, clean, and affordable energy solutions while fostering sustainable development across the continent.
                </p>
              </motion.div>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <Zap className="w-32 h-32 text-primary/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold font-montserrat mb-4">Our Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide our work and define our commitment to excellence
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-montserrat text-white mb-4">Our Impact</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Measurable results in our mission to accelerate energy access across Africa
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold font-montserrat mb-8">Our Story</h2>
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Founded with a vision to transform Africa&apos;s energy landscape, Ceesolar Energy Limited emerged from the recognition that energy access is fundamental to economic development and social progress.
              </p>
              <p>
                Since our inception, we have been dedicated to developing innovative energy solutions that address the unique challenges faced by African communities. Our approach combines cutting-edge technology with deep local understanding to deliver sustainable, scalable energy systems.
              </p>
              <p>
                Today, we continue to expand our impact across the continent, working with communities, businesses, and governments to create a more energy-secure future for Africa.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}