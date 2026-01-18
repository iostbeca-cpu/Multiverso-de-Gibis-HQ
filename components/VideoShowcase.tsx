import React from 'react';
import { Play, Maximize, Smartphone, Monitor } from 'lucide-react';
import CTAButton from './CTAButton';

const VideoShowcase: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="video-showcase" className="py-24 bg-black relative overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
        
        {/* Spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">Por dentro da plataforma</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    Simples. Rápido. <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Gigante.</span>
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                    Nossa interface foi desenhada para você passar menos tempo procurando e mais tempo lendo.
                    Funciona no celular, tablet e computador.
                </p>
            </div>

            {/* Video Frame - Monitor Style */}
            <div className="max-w-5xl mx-auto relative perspective-1000 group">
                {/* Glow behind monitor */}
                <div className="absolute -inset-10 bg-gradient-to-t from-yellow-600/20 to-blue-600/20 blur-3xl opacity-50 group-hover:opacity-75 transition duration-1000"></div>
                
                {/* Monitor Frame */}
                <div className="relative bg-slate-900 rounded-xl md:rounded-2xl border border-slate-800 shadow-2xl p-1 md:p-2 ring-1 ring-white/10">
                    <div className="relative bg-black rounded-lg md:rounded-xl overflow-hidden aspect-video flex items-center justify-center group-hover:shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-shadow">
                        
                        {/* Fake Browser Header (Optional Detail) */}
                        <div className="absolute top-0 left-0 right-0 h-6 md:h-8 bg-slate-900/80 backdrop-blur flex items-center px-4 gap-2 z-20 border-b border-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="mx-auto text-[10px] text-slate-500 font-mono hidden md:block">multiversodegibis.com.br</div>
                        </div>

                        {/* Placeholder Image/Video */}
                        <div className="absolute inset-0 bg-slate-800 flex flex-col items-center justify-center text-slate-500 bg-[url('https://images.unsplash.com/photo-1614726365723-49cfae92782f?q=80&w=2669&auto=format&fit=crop')] bg-cover bg-center opacity-80 group-hover:opacity-60 transition-opacity duration-500 transform scale-105 group-hover:scale-100">
                             
                             {/* Dark overlay */}
                             <div className="absolute inset-0 bg-black/60"></div>
                             
                             {/* Play Button */}
                             <div className="relative z-30 cursor-pointer transform transition-transform duration-300 hover:scale-110" onClick={scrollToPricing}>
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:bg-yellow-500 group-hover:border-yellow-400 group-hover:text-black text-white transition-all">
                                    <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-1" />
                                </div>
                             </div>
                             
                             <p className="relative z-30 mt-6 font-medium text-white/80 uppercase tracking-widest text-xs md:text-sm">Assista ao Tour</p>
                        </div>
                    </div>
                </div>

                {/* Reflection on table effect */}
                <div className="hidden md:block absolute -bottom-16 left-10 right-10 h-16 bg-gradient-to-b from-white/5 to-transparent blur-2xl transform scale-y-[-1] opacity-30 mask-image-linear-gradient"></div>
            </div>
            
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-slate-900 pt-10">
                <Stat number="95k+" label="Obras Disponíveis" />
                <Stat number="4K" label="Qualidade Ultra" />
                <Stat number="24/7" label="Acesso Imediato" />
                <Stat number="∞" label="Downloads Ilimitados" />
            </div>

            <div className="mt-16 text-center">
                <CTAButton onClick={scrollToPricing} className="px-10 py-4 shadow-2xl shadow-yellow-500/10">
                    QUERO ACESSAR AGORA
                </CTAButton>
            </div>
        </div>
    </section>
  );
};

const Stat = ({ number, label }: { number: string; label: string }) => (
    <div className="text-center">
        <div className="text-3xl md:text-4xl font-black text-white mb-1">{number}</div>
        <div className="text-slate-500 text-xs uppercase tracking-wider font-medium">{label}</div>
    </div>
)

export default VideoShowcase;