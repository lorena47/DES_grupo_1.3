import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-600 bg-clip-text text-transparent cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          Alejandría
        </span>
        
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-orange-500 transition">Funcionalidades</a>
          <a href="#process" className="hover:text-orange-500 transition">Desarrollo</a>
          <a href="#team" className="hover:text-orange-500 transition">Equipo</a>
        </div>

        <a
          href="https://www.figma.com/proto/xHzQNbpoCi0e4Bx4CKGjU9/Flujo_Alejandria---Digital---Finalisimo?node-id=2002-62&p=f&t=Dw9bEDOEjmjhoiro-1&scaling=min-zoom&content-scaling=fixed&page-id=2002%3A2&starting-point-node-id=2002%3A62"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition shadow-lg shadow-slate-900/20"
        >
          Ver Figma
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
