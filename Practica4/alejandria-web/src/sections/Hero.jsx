import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-orange-100 text-orange-700 text-xs font-bold tracking-wide mb-6">
          PRÁCTICA 4
        </span>
        
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-slate-900">
          Descubre libros según <br />
          <span className="bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent">
            tu estado de ánimo
          </span>
        </h1>
        
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-10">
          Una experiencia diseñada para conectar lectores, emociones y librerías locales. 
          Gestiona tu biblioteca y encuentra tu próxima historia.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.a
            href="https://www.figma.com/design/xHzQNbpoCi0e4Bx4CKGjU9/Flujo_Alejandria---Digital---Finalisimo?node-id=2002-2&p=f&t=mJrPRqiJj0FjHjaf-0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-orange-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-orange-500/30 flex items-center justify-center gap-2"
          >
            Ver Prototipo Interactivo <ArrowRight size={20} />
          </motion.a>
        </div>
      </motion.div>

      <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-16 relative mx-auto max-w-4xl"
      >
        <div className="aspect-video rounded-2xl bg-gradient-to-tr from-slate-200 to-slate-100 border border-slate-200 shadow-2xl flex items-center justify-center overflow-hidden relative group">
          <img src="/src/assets/fondo.png" alt="Frame fondo" className="w-full h-full object-contain" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;