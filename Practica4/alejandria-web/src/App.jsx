import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Process from './sections/Process';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 overflow-x-hidden selection:bg-orange-200 selection:text-orange-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
      </main>
      <Footer />
    </div>
  );
}

export default App;