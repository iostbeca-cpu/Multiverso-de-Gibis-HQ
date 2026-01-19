import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Cookie } from 'lucide-react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fez uma escolha
    const consent = localStorage.getItem('multiverso_privacy_consent');
    if (!consent) {
      setShouldRender(true);
      // Pequeno delay para entrada suave após o carregamento do site
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleConsent = (accepted: boolean) => {
    // Salva a decisão no localStorage
    localStorage.setItem('multiverso_privacy_consent', accepted ? 'accepted' : 'declined');
    
    // Animação de saída
    setIsVisible(false);
    setTimeout(() => setShouldRender(false), 500);
  };

  if (!shouldRender) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 flex justify-center items-end transition-all duration-700 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] max-w-5xl w-full p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center justify-between relative overflow-hidden group">
        
        {/* Efeito decorativo no topo */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"></div>

        <div className="flex-1 relative z-10">
          <div className="flex items-center gap-3 mb-3">
             <div className="bg-yellow-500/10 p-2 rounded-lg border border-yellow-500/10">
                <ShieldCheck className="w-6 h-6 text-yellow-500" />
             </div>
             <h3 className="text-white font-bold text-lg">Sua privacidade é nossa prioridade</h3>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed max-w-3xl">
            Nós utilizamos cookies e tecnologias de rastreamento para oferecer uma experiência de navegação personalizada, 
            analisar o tráfego do site e entender de onde vêm nossos visitantes. Ao escolher 
            <span className="text-white font-semibold"> "Aceitar"</span>, você concorda com o uso dessas tecnologias conforme nossa{' '}
            <a href="#" className="text-yellow-500 hover:text-yellow-400 font-medium underline decoration-yellow-500/30 underline-offset-4 transition-colors">
              Política de Privacidade
            </a>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[320px] relative z-10">
          <button 
            onClick={() => handleConsent(false)}
            className="flex-1 px-6 py-3.5 rounded-xl border border-slate-700 text-slate-300 font-bold hover:bg-slate-800 hover:text-white hover:border-slate-500 transition-all duration-200 text-sm uppercase tracking-wide focus:ring-2 focus:ring-slate-500 focus:outline-none"
          >
            Recusar
          </button>
          <button 
            onClick={() => handleConsent(true)}
            className="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-black hover:from-yellow-400 hover:to-yellow-500 transition-all duration-200 shadow-lg shadow-yellow-500/20 text-sm uppercase tracking-wide transform active:scale-[0.98] focus:ring-2 focus:ring-yellow-500 focus:outline-none"
          >
            Aceitar
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CookieConsent;