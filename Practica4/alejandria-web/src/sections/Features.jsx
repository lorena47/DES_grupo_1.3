import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import { features } from '../data/projectData';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">Funcionalidades Principales</h2>
            <p className="text-slate-500 text-lg">Diseñadas basándonos en la arquitectura de información definida.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 h-full hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;