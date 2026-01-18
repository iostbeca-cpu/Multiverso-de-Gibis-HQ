import React from 'react';
import { BookOpen, Layers, RefreshCw, Cloud, Ghost, Headphones, Lock, CheckCircle2, Crown } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Crown className="w-6 h-6 text-yellow-400" />,
      title: "Experiência Premium",
      description: "Sem anúncios, sem interrupções. Apenas você e suas histórias favoritas em qualidade máxima.",
      highlight: true
    },
    {
      icon: <Layers className="w-6 h-6 text-blue-400" />,
      title: "Acervo Gigante",
      description: "De Marvel a Mangás, de Disney a The Walking Dead. Mais de 95.000 títulos organizados.",
      highlight: false
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Nuvem + Offline",
      description: "Leia diretamente no navegador ou baixe para ler onde não tem internet.",
      highlight: false
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-green-400" />,
      title: "Updates Semanais",
      description: "Nossa equipe adiciona novos capítulos e volumes toda semana. O acervo nunca para de crescer.",
      highlight: false
    },
    {
      icon: <Ghost className="w-6 h-6 text-purple-400" />,
      title: "Bônus: Terror",
      description: "Uma coleção especial assustadora para ler com a luz acesa. Clássicos e raridades.",
      highlight: false
    },
    {
      icon: <Headphones className="w-6 h-6 text-pink-400" />,
      title: "Audiobooks VIP",
      description: "Cansou de ler? Ouça histórias incríveis narradas profissionalmente.",
      highlight: false
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
            <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-3 block">Por que escolher o Multiverso?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Tudo o que você precisa <br/>
                <span className="text-slate-500">em um só lugar</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                Esqueça sites lentos, cheios de propagandas e links quebrados. 
                Aqui a experiência é <span className="text-white font-semibold">profissional</span>.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                feature.highlight 
                ? 'bg-slate-900/80 border-yellow-500/30 hover:border-yellow-500/60 shadow-[0_0_30px_rgba(234,179,8,0.05)]' 
                : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:bg-slate-900/60'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              
              <div className={`mb-6 w-14 h-14 rounded-xl flex items-center justify-center border ${
                  feature.highlight 
                  ? 'bg-yellow-500/10 border-yellow-500/20' 
                  : 'bg-slate-800 border-slate-700 group-hover:bg-slate-700'
              } transition-colors`}>
                {feature.icon}
              </div>

              <h3 className={`text-xl font-bold mb-3 ${feature.highlight ? 'text-white' : 'text-slate-200'}`}>
                {feature.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>

              {feature.highlight && (
                  <div className="absolute top-4 right-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
                      </div>
                  </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;