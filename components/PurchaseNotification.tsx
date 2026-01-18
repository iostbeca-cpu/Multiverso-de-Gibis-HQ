import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

const PURCHASERS = [
  { name: 'Rafael S.', location: 'São Paulo, SP', time: 'Agora mesmo' },
  { name: 'Bruna M.', location: 'Rio de Janeiro, RJ', time: 'Há 2 minutos' },
  { name: 'Lucas O.', location: 'Belo Horizonte, MG', time: 'Há 5 minutos' },
  { name: 'Fernanda L.', location: 'Curitiba, PR', time: 'Há 1 minuto' },
  { name: 'Thiago K.', location: 'Porto Alegre, RS', time: 'Agora mesmo' },
  { name: 'Ana P.', location: 'Brasília, DF', time: 'Há 12 minutos' },
  { name: 'Gabriel J.', location: 'Salvador, BA', time: 'Há 4 minutos' },
  { name: 'Mariana C.', location: 'Recife, PE', time: 'Há 8 minutos' },
  { name: 'Pedro H.', location: 'Fortaleza, CE', time: 'Agora mesmo' },
  { name: 'Juliana R.', location: 'Campinas, SP', time: 'Há 3 minutos' },
];

const PurchaseNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPurchaser, setCurrentPurchaser] = useState(PURCHASERS[0]);
  const [isPermanentlyClosed, setIsPermanentlyClosed] = useState(false);

  useEffect(() => {
    // Initial delay before starting the loop
    const startTimeout = setTimeout(() => {
      triggerNotification();
    }, 4000);

    return () => clearTimeout(startTimeout);
  }, []);

  const triggerNotification = () => {
    if (isPermanentlyClosed) return;

    // Select random purchaser
    const randomPurchaser = PURCHASERS[Math.floor(Math.random() * PURCHASERS.length)];
    setCurrentPurchaser(randomPurchaser);
    setIsVisible(true);

    // Hide after 5 seconds
    setTimeout(() => {
      setIsVisible(false);
      
      // Schedule next notification (random between 8 and 20 seconds)
      const nextDelay = Math.floor(Math.random() * 12000) + 8000; 
      setTimeout(triggerNotification, nextDelay);
    }, 5000);
  };

  if (isPermanentlyClosed) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 z-50 transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-slate-700 p-4 rounded-lg shadow-2xl flex items-center gap-4 max-w-sm md:max-w-md relative overflow-hidden group">
        
        {/* Glow Effect */}
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-600"></div>

        {/* Close Button */}
        <button 
            onClick={() => {
                setIsVisible(false);
                setIsPermanentlyClosed(true);
            }}
            className="absolute top-2 right-2 text-slate-500 hover:text-white transition-colors"
        >
            <X size={14} />
        </button>

        {/* Image / Icon */}
        <div className="relative shrink-0">
             <img 
                src="https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=100&q=80" 
                alt="Product" 
                className="w-12 h-16 object-cover rounded shadow-lg border border-slate-600"
             />
             <div className="absolute -bottom-2 -right-2 bg-green-500 text-black rounded-full p-0.5 border border-slate-900">
                <CheckCircle2 size={12} fill="white" className="text-green-600" />
             </div>
        </div>

        {/* Text */}
        <div className="pr-4">
            <p className="text-xs text-slate-400 mb-0.5 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Novo acesso liberado
            </p>
            <p className="text-sm text-white font-medium leading-tight mb-1">
                <span className="font-bold text-yellow-500">{currentPurchaser.name}</span> de {currentPurchaser.location}
            </p>
            <p className="text-xs text-slate-500 font-medium">
                Comprou o <span className="text-slate-300">Plano Premium Vitalício</span> • {currentPurchaser.time}
            </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotification;