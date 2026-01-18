import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import { Crown, Check, X, Zap, AlertCircle, ShieldCheck, Timer, Sparkles, Clock } from 'lucide-react';

const PriceSection: React.FC = () => {
  // Timer Logic
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCheckout = (plan: 'common' | 'premium') => {
    if (plan === 'premium') {
        window.location.href = "https://go.tribopay.com.br/cn0blw8qsi";
    } else {
        window.location.href = "https://go.tribopay.com.br/retfrwwyv0";
    }
  };

  return (
    <section id="pricing" className="py-24 bg-slate-950 relative overflow-hidden scroll-mt-10">
      
      {/* Background FX - Improved */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-yellow-500/5 blur-[120px] pointer-events-none"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
            <Sparkles className="w-3 h-3" /> Oferta Exclusiva
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Escolha seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">Passaporte</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Invista no seu entretenimento com inteligência. <br/>
            <span className="text-slate-200 font-medium">Pagamento único. Acesso vitalício. Sem mensalidades.</span>
          </p>
        </div>

        {/* URGENCY COUNTDOWN TIMER */}
        <div className="max-w-4xl mx-auto mb-16 relative">
             <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 opacity-30 blur-lg animate-pulse"></div>
             <div className="relative bg-gradient-to-r from-[#1a0505] to-[#0f0f10] border border-red-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
                
                <div className="flex items-center gap-4">
                    <div className="bg-red-500/10 p-4 rounded-full border border-red-500/20 relative">
                        <span className="absolute top-0 right-0 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                        <Clock className="w-8 h-8 text-red-500 animate-pulse" />
                    </div>
                    <div className="text-left">
                        <h3 className="text-white font-black text-xl md:text-2xl uppercase italic tracking-tighter">OFERTA RELÂMPAGO</h3>
                        <p className="text-red-400/80 text-sm font-medium">Os valores promocionais encerram em:</p>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <TimeBox value={0} label="Horas" />
                    <span className="text-2xl font-black text-slate-700 -mt-4">:</span>
                    <TimeBox value={timeLeft.minutes} label="Minutos" />
                    <span className="text-2xl font-black text-slate-700 -mt-4">:</span>
                    <TimeBox value={timeLeft.seconds} label="Segundos" isRed={true} />
                </div>
             </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-center">
          
          {/* PLANO COMUM (Basic) */}
          <div className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 lg:p-10 flex flex-col group hover:border-slate-700 transition-all duration-300">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>
            
            <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-200 mb-2">Acesso Básico</h3>
                <p className="text-slate-500 text-sm leading-relaxed">Ideal para leitores casuais que buscam apenas o essencial.</p>
            </div>
            
            <div className="mb-8 p-6 bg-slate-950/50 rounded-2xl border border-slate-800/50">
              <span className="text-slate-600 text-sm font-medium line-through block mb-1">De R$ 49,90</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">R$ 19,90</span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-wide">/único</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10 flex-1">
              <ListItem text="Várias obras disponíveis" />
              <ListItem text="Leitura Online (com anúncios)" />
              <ListItem text="Qualidade Padrão (HD)" />
              <ListItem text="Sem Download Offline" inactive />
              <ListItem text="Sem Conteúdo +18" inactive />
              <ListItem text="Sem Suporte Prioritário" inactive />
            </ul>

            <button 
                className="w-full py-4 rounded-xl font-bold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-200 text-sm uppercase tracking-wider"
                onClick={() => handleCheckout('common')}
            >
              Selecionar Básico
            </button>
          </div>

          {/* PLANO PREMIUM (Gold) - Enhanced */}
          <div className="relative z-10 transform md:-translate-y-4">
            {/* Glowing Border Effect */}
            <div className="absolute -inset-[2px] bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 rounded-[26px] blur-[2px] opacity-100"></div>
            <div className="absolute -inset-[2px] bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 rounded-[26px] opacity-20 blur-xl"></div>
            
            {/* Floating Badge */}
            <div className="absolute -top-5 left-0 right-0 flex justify-center z-20">
                <div className="bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-black font-black px-6 py-2 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-yellow-500/20 flex items-center gap-2 transform hover:scale-105 transition-transform cursor-default">
                    <Crown className="w-4 h-4 fill-black" /> Recomendado
                </div>
            </div>

            <div className="bg-[#0a0a0a] rounded-[24px] p-8 lg:p-10 h-full flex flex-col relative overflow-hidden">
                
                {/* Internal Shine */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>

                <div className="mb-2 relative z-10 flex justify-between items-start">
                    <div>
                        <h3 className="text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-200 flex items-center gap-2">
                            Premium VIP
                        </h3>
                        <p className="text-yellow-500/70 text-sm font-medium mt-1">A experiência definitiva.</p>
                    </div>
                    <Zap className="w-8 h-8 text-yellow-500 fill-yellow-500 animate-pulse hidden sm:block" />
                </div>

                {/* Pricing Box */}
                <div className="my-8 relative">
                   <div className="flex items-end gap-2 mb-2">
                       <span className="text-6xl lg:text-7xl font-black text-white tracking-tighter">35</span>
                       <div className="flex flex-col mb-2">
                            <span className="text-2xl font-bold text-yellow-500">,00</span>
                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider bg-slate-900 px-2 py-0.5 rounded text-center">Único</span>
                       </div>
                   </div>
                   <div className="flex items-center gap-3 text-sm">
                        <span className="text-slate-500 line-through decoration-red-500 decoration-2">De R$ 197,00</span>
                        <span className="bg-green-500/10 text-green-400 text-xs font-bold px-2 py-0.5 rounded border border-green-500/20 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            ECONOMIA DE 82%
                        </span>
                   </div>
                </div>

                {/* Urgency */}
                <div className="mb-8 flex items-center gap-3 p-3 bg-red-500/5 border border-red-500/10 rounded-lg">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <p className="text-red-400 text-xs font-bold uppercase tracking-wide flex-1">
                        Preço promocional por tempo limitado
                    </p>
                    <Timer className="w-4 h-4 text-red-500" />
                </div>

                {/* Features List */}
                <div className="space-y-4 mb-10 flex-1 relative z-10 border-t border-slate-900 pt-6">
                  <div className="grid grid-cols-1 gap-4">
                      <ListItem text="Muitas obras disponíveis" active icon={<CheckCircleFilled />} />
                      <ListItem text="Download Offline Ilimitado" active icon={<CheckCircleFilled />} />
                      <ListItem text="Conteúdo +18 Exclusivo" active highlight icon={<CheckCircleFilled />} />
                      <ListItem text="4K Ultra HD + Zero Anúncios" active icon={<CheckCircleFilled />} />
                      <ListItem text="Bônus: Terror + Audiobooks" active icon={<CheckCircleFilled />} />
                  </div>
                </div>

                <CTAButton 
                    fullWidth 
                    className="py-5 text-lg shadow-[0_0_30px_rgba(234,179,8,0.2)] hover:shadow-[0_0_50px_rgba(234,179,8,0.4)] border-none bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-black"
                    onClick={() => handleCheckout('premium')}
                >
                  GARANTIR VAGA VIP
                </CTAButton>
                
                <p className="text-center text-slate-500 text-[10px] uppercase tracking-wider mt-6 flex items-center justify-center gap-1.5 opacity-60 font-medium">
                  <ShieldCheck className="w-3 h-3" /> 
                  Garantia de 7 dias ou seu dinheiro de volta
                </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ value, label, isRed = false }: { value: number, label: string, isRed?: boolean }) => (
    <div className="flex flex-col items-center">
        <div className={`w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center text-3xl md:text-4xl font-black font-mono shadow-inner border border-white/5 ${
            isRed 
            ? 'bg-red-500 text-white shadow-[inset_0_2px_10px_rgba(0,0,0,0.4)]' 
            : 'bg-slate-900 text-white'
        }`}>
            {value.toString().padStart(2, '0')}
        </div>
        <span className="text-[10px] md:text-xs uppercase font-bold tracking-widest mt-2 text-slate-500">{label}</span>
    </div>
);

const CheckCircleFilled = () => (
    <div className="bg-yellow-500 rounded-full p-0.5 text-black shrink-0">
        <Check className="w-3 h-3" strokeWidth={4} />
    </div>
)

const ListItem = ({ text, active = false, inactive = false, highlight = false, icon }: { text: string, active?: boolean, inactive?: boolean, highlight?: boolean, icon?: React.ReactNode }) => {
    return (
        <li className={`flex items-start gap-3 ${inactive ? 'opacity-40 grayscale' : ''}`}>
            <div className="mt-0.5 shrink-0">
                {icon ? icon : (
                    inactive ? <div className="bg-slate-800 rounded-full p-0.5 text-slate-500"><X className="w-3 h-3" /></div> : 
                    <div className="bg-slate-800 rounded-full p-0.5 text-slate-300"><Check className="w-3 h-3" /></div>
                )}
            </div>
            <span className={`text-sm ${highlight ? 'text-yellow-200 font-bold' : (active ? 'text-white font-medium' : 'text-slate-400')}`}>
                {text}
            </span>
        </li>
    )
}

export default PriceSection;