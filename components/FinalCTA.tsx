import React from 'react';
import CTAButton from './CTAButton';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/10 via-slate-950 to-slate-950 z-0"></div>
      
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-500/5 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tight leading-tight">
          Comece agora sua jornada no <br/>
          <span className="text-yellow-500 text-glow">Multiverso de Gibis</span>
        </h2>
        
        <p className="text-slate-400 mb-10 text-lg max-w-xl mx-auto">
            Não perca mais tempo procurando. Tudo o que você quer ler está aqui, esperando por você.
        </p>
        
        <div className="max-w-xl mx-auto">
          <CTAButton fullWidth className="text-xl shadow-yellow-500/20 shadow-2xl py-5" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
            GARANTIR ACESSO IMEDIATO
          </CTAButton>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;