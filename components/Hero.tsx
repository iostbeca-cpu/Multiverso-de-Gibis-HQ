import React from 'react';
import CTAButton from './CTAButton';
import { Sparkles, Star, Zap, ChevronRight, Users } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-screen">
      
      {/* Cinematic Background with Marvel Art */}
      <div className="absolute inset-0 z-0">
        {/* The Image - Marvel War Art */}
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-pulse-slow"
            style={{
                backgroundImage: `url('https://wallpapers.com/images/hd/marvel-war-shwpybdqa5l1keuv.jpg')`,
                opacity: 0.35 
            }}
        ></div>

        {/* Overlays for Readability & Dark Premium Feel */}
        {/* Bottom fade to blend with next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/40"></div>
        {/* Side fades to center attention */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90"></div>
        {/* Top tint */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-950 to-transparent"></div>
        
        {/* Decorative Particles */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        
        {/* Social Proof Badge */}
        <div className="animate-fade-in-up flex items-center gap-2 bg-slate-900/80 border border-slate-700/50 rounded-full pl-1 pr-4 py-1 mb-8 hover:border-yellow-500/30 transition-colors backdrop-blur-md cursor-default shadow-lg shadow-black/50">
          <div className="flex -space-x-2">
             <img className="w-6 h-6 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60" alt="User" />
             <img className="w-6 h-6 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="User" />
             <img className="w-6 h-6 rounded-full border border-slate-900" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="User" />
          </div>
          <span className="text-slate-300 text-xs font-medium flex items-center gap-1">
            <span className="text-yellow-500 font-bold">+12.000</span> leitores ativos
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tight drop-shadow-2xl">
          A NETFLIX DOS <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 via-yellow-500 to-yellow-700 text-glow filter">
            QUADRINHOS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl leading-relaxed font-light mx-auto drop-shadow-lg">
          Tenha acesso vitalício a biblioteca proibida. <br className="hidden md:block"/>
          <span className="text-white font-medium border-b border-yellow-500/40">Mais de 95.000 HQs e alguns Mangás inclusos</span> em 4K.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center mb-16">
            <CTAButton onClick={scrollToPricing} className="text-lg py-4 px-10 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] bg-yellow-500 border-yellow-400">
                QUERO ACESSO VITALÍCIO <ChevronRight className="w-5 h-5" />
            </CTAButton>
            <p className="text-slate-400 text-sm md:hidden font-medium">Compra 100% segura e acesso imediato</p>
        </div>

        {/* Bottom Features Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-12 w-full max-w-5xl border-t border-white/10 pt-8 backdrop-blur-sm rounded-xl p-4 bg-black/20">
            <FeatureItem icon={<Users className="w-4 h-4 text-blue-400" />} title="Comunidade VIP" sub="Troque indicações" />
            <FeatureItem icon={<Sparkles className="w-4 h-4 text-yellow-400" />} title="Qualidade 4K" sub="Imagens Cristalinas" />
            <FeatureItem icon={<Zap className="w-4 h-4 text-purple-400" />} title="Download Ilimitado" sub="Leia Offline" />
            <FeatureItem icon={<Star className="w-4 h-4 text-green-400" />} title="Garantia Total" sub="7 Dias de Teste" />
        </div>

      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) => (
    <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 border border-white/5 hover:bg-slate-900/80 transition-colors shadow-lg">
        <div className="mb-2 p-2 bg-slate-950 rounded-lg border border-slate-800 shadow-sm">{icon}</div>
        <span className="text-white font-bold text-sm">{title}</span>
        <span className="text-slate-400 text-xs">{sub}</span>
    </div>
)

export default Hero;