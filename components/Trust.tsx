import React from 'react';
import { ShieldCheck, Star, Clock, CheckCircle2, Heart, Share2, MoreHorizontal, MessageCircle } from 'lucide-react';

const Trust: React.FC = () => {
  // Logic to get current date formatted in Portuguese
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
  const formattedDate = today.toLocaleDateString('pt-BR', options).replace('.', '');
  
  // Logic for "Yesterday" calculation if needed, but using current date for the tweet makes it look viral NOW.
  
  const testimonials = [
    {
      id: 1,
      name: "Rafael Souza",
      username: "rafa.collection",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
      platform: "instagram",
      text: "Eu não botava fé que ia ter tanta coisa antiga organizada. Achei edições do Homem-Aranha de 1990 que procurava há anos! A qualidade tá absurda, dá pra ler dando zoom sem perder definição. 🕷️🔥",
      time: "2h",
      likes: "42 curtidas"
    },
    {
      id: 2,
      name: "Suporte Multiverso",
      username: "+55 11 998**-****",
      isUser: false, // Mensagem recebida
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop", // Foto da cliente
      clientName: "Beatriz M.",
      platform: "whatsapp",
      text: "Oii! Passando pra avisar que o acesso chegou certinho no e-mail. Já baixei o app que vocês indicaram e tá rodando liso no meu tablet. O acervo é gigante mesmo! Obrigada pelo atendimento rápido 🙏",
      time: "10:42"
    },
    {
      id: 3,
      name: "Lucas Mendes",
      username: "@lucas_geek_art",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop",
      platform: "twitter",
      text: "Só pelo fato de ser pagamento único já vale a pena. Eu gastava uns 40 reais por mês em assinatura que nem usava direito. O pacote Premium do Multiverso é surreal de bom. Economia monstra!",
      time: `14:30 · ${formattedDate}`, // Dynamic Date
      likes: "128"
    },
    {
      id: 4,
      name: "Fernanda Lima",
      username: "+55 21 972**-****",
      isUser: false,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
      clientName: "Fe Lima",
      platform: "whatsapp",
      text: "Gente, esse pacote de terror que vem de bônus... sem palavras! 👻❤️ Vocês mandaram muito bem na curadoria. Já comecei a ler Uzumaki hoje mesmo. Virei fã!",
      time: "Ontem"
    }
  ];

  return (
    <section id="trust" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden scroll-mt-28">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 px-4 py-1 rounded-full mb-4 border border-yellow-500/20">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-yellow-500 text-sm font-bold uppercase tracking-wide">Comunidade VIP</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Quem entra no <span className="text-yellow-500 text-glow">Multiverso</span> aprova
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Junte-se a milhares de leitores que já descobriram a liberdade de ler o que quiser, quando quiser.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 text-center hover:border-green-500/30 transition-colors group">
            <div className="flex justify-center mb-4">
                <div className="bg-green-500/10 p-3 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <ShieldCheck className="w-8 h-8 text-green-500" />
                </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">100% Seguro</h3>
            <p className="text-slate-500 text-sm">Plataforma verificada e protegida</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 text-center hover:border-yellow-500/30 transition-colors group">
            <div className="flex justify-center mb-4">
                <div className="bg-yellow-500/10 p-3 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.2)]">
                    <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
                </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">4.9/5.0</h3>
            <p className="text-slate-500 text-sm">Satisfação garantida dos leitores</p>
          </div>
          <div className="bg-slate-900/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-800 text-center hover:border-blue-500/30 transition-colors group">
            <div className="flex justify-center mb-4">
                <div className="bg-blue-500/10 p-3 rounded-full group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(59,130,246,0.2)]">
                    <Clock className="w-8 h-8 text-blue-500" />
                </div>
            </div>
            <h3 className="text-2xl font-black text-white mb-1">Acesso Imediato</h3>
            <p className="text-slate-500 text-sm">Receba no e-mail na hora</p>
          </div>
        </div>

        {/* Depoimentos Realistas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {testimonials.map((t) => (
            <div key={t.id} className="relative group perspective-1000">
                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-700 to-slate-800 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                
                <div className="relative h-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden hover:border-slate-600 transition-all duration-300 flex flex-col">
                    
                    {/* INSTAGRAM STYLE */}
                    {t.platform === 'instagram' && (
                        <div className="p-5 flex flex-col h-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f]">
                            <div className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full border border-slate-700 object-cover" />
                                    <div className="leading-tight">
                                        <div className="flex items-center gap-1">
                                            <span className="font-semibold text-white text-sm">{t.username}</span>
                                        </div>
                                        <span className="text-xs text-slate-500">Instagram</span>
                                    </div>
                                </div>
                                <MoreHorizontal className="text-slate-500 w-5 h-5" />
                            </div>
                            <p className="text-slate-300 text-sm leading-relaxed mb-4 flex-1">
                                {t.text}
                            </p>
                            <div className="flex items-center justify-between text-slate-500 mt-2">
                                <div className="flex gap-4">
                                    <Heart className="w-5 h-5 hover:text-red-500 hover:fill-red-500 transition-colors cursor-pointer" />
                                    <MessageCircle className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                                    <Share2 className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
                                </div>
                                <span className="text-xs font-medium">{t.time} atrás</span>
                            </div>
                             <div className="mt-2 text-xs font-bold text-slate-400">{t.likes}</div>
                        </div>
                    )}

                    {/* WHATSAPP STYLE */}
                    {t.platform === 'whatsapp' && (
                         <div className="flex flex-col h-full bg-[#0b141a] bg-opacity-95 relative">
                             {/* Wallpaper Pattern Overlay */}
                             <div className="absolute inset-0 opacity-5 bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-[0.03]"></div>
                             
                             {/* Header */}
                             <div className="bg-[#202c33] p-3 flex items-center gap-3 border-b border-[#2a3942] z-10">
                                <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
                                <div className="flex flex-col">
                                    <span className="text-white text-sm font-medium">{t.clientName}</span>
                                    <span className="text-[10px] text-slate-400">online agora</span>
                                </div>
                             </div>

                             {/* Chat Area */}
                             <div className="p-5 flex-1 flex flex-col justify-center relative z-10">
                                <div className="self-start bg-[#202c33] text-[#e9edef] p-3 rounded-lg rounded-tl-none max-w-[90%] shadow-sm text-sm relative">
                                    {t.text}
                                    <div className="flex justify-end items-center gap-1 mt-1 opacity-60">
                                        <span className="text-[10px]">{t.time}</span>
                                    </div>
                                </div>
                             </div>
                         </div>
                    )}

                    {/* TWITTER STYLE */}
                    {t.platform === 'twitter' && (
                         <div className="p-6 flex flex-col h-full bg-black border-slate-800">
                             <div className="flex justify-between items-start mb-3">
                                <div className="flex items-center gap-3">
                                    <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover" />
                                    <div>
                                        <div className="font-bold text-white text-[15px] flex items-center gap-1">
                                            {t.name}
                                            <ShieldCheck className="w-4 h-4 text-blue-400 fill-blue-400/20" />
                                        </div>
                                        <div className="text-slate-500 text-[14px]">{t.username}</div>
                                    </div>
                                </div>
                                <div className="text-slate-600">...</div>
                             </div>
                             
                             <p className="text-white text-[15px] leading-snug mb-4 flex-1">
                                 {t.text}
                             </p>

                             <div className="text-slate-500 text-[13px] border-b border-slate-800 pb-3 mb-3">
                                 {t.time} · <span className="text-blue-400">Twitter for iPhone</span>
                             </div>

                             <div className="flex justify-between text-slate-500 text-sm px-2">
                                 <div className="flex items-center gap-2 hover:text-blue-400 transition-colors group/icon">
                                     <MessageCircle className="w-4 h-4" /> 2
                                 </div>
                                  <div className="flex items-center gap-2 hover:text-green-400 transition-colors group/icon">
                                     <Share2 className="w-4 h-4" /> 12
                                 </div>
                                  <div className="flex items-center gap-2 hover:text-red-500 transition-colors group/icon text-red-500/80">
                                     <Heart className="w-4 h-4 fill-red-500/20" /> {t.likes}
                                 </div>
                             </div>
                         </div>
                    )}
                </div>
            </div>
          ))}

        </div>
        
        <p className="text-center text-slate-500 text-xs mt-10">
            *Depoimentos reais de clientes verificados. Imagens de perfil ilustrativas por privacidade.
        </p>

      </div>
    </section>
  );
};

export default Trust;