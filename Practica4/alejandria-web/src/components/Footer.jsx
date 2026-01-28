import React from 'react';
import FadeIn from './FadeIn';
import { team } from '../data/projectData';

const Footer = () => {
  return (
    <footer id="team" className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8 text-slate-800">Grupo 1.3</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {team.map((member, i) => (
              <a
                key={i}
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm text-slate-600 font-medium hover:border-orange-200 transition-colors"
              >
                {member.name}
              </a>
            ))}
          </div>
          
          <div className="border-t border-slate-200 pt-8 text-slate-400 text-sm">
            <p>Máster en Ingeniería Informática • Universidad de Granada • Curso 2025/26</p>
            <p className="mt-2">Desarrollo y Evaluación de Sistemas Software Interactivos</p>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
};

export default Footer;