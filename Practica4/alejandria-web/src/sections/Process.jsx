import React from 'react';
import { BookOpen, ArrowUpRight, Github, FileText, Folder } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { processSteps, downloads } from '../data/projectData';

const Process = () => {

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div>
            <FadeIn>
              <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">Metodología</span>
              <h2 className="text-4xl font-bold mt-2 mb-6">De la idea al producto final</h2>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Siguiendo las directrices de la asignatura, hemos evolucionado "Alejandría" mediante iteraciones constantes, desde la detección del problema editorial hasta la solución final.
              </p>
            </FadeIn>

            <div className="space-y-10">
              {processSteps.map((item, idx) => (
                <FadeIn key={idx} delay={idx * 0.2}>
                  <div className="flex gap-5 group">
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition-colors">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Columna Derecha: Descargas (ACTUALIZADO) */}
          <FadeIn delay={0.4}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-pink-600 rounded-3xl blur opacity-20"></div>
              
              <div className="relative bg-slate-800 rounded-2xl p-10 border border-slate-700 shadow-2xl">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <BookOpen className="text-orange-500"/> 
                  Documentación
                </h3>
                
                <p className="text-slate-400 mb-6 text-sm">
                  Acceso directo a los entregables del repositorio:
                </p>
                
                <div className="space-y-3">
                  {downloads.map((item, i) => (
                    <a 
                      key={i} 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-slate-700/30 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
                          {item.title}
                        </span>
                      </div>
                      <ArrowUpRight size={18} className="text-slate-500 group-hover:text-orange-400 transition-colors"/>
                    </a>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700/50 text-xs text-slate-500 flex justify-between items-center">
                  <span>Grupo 1.3 - DES 2025/26</span>
                  <span className="text-orange-500 font-medium">UGR</span>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Process;