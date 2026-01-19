import React from 'react';
import { Star, Ghost, Headphones, BookOpen, Flame, Lock } from 'lucide-react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      id: 1,
      title: "Bônus 1 - Pacote +18 Exclusivo",
      description: "O MAIS PEDIDO! Acesso exclusivo ao maior acervo de mangás +18 do Brasil. Conteúdo premium que você não encontra em lugar nenhum!",
      icon: <span className="font-bold text-xs border-2 border-red-500 rounded-full w-8 h-8 flex items-center justify-center text-red-500 bg-black">18</span>,
      image: "https://images.unsplash.com/photo-1595769816263-9b910be24d5f?q=80&w=500&auto=format&fit=crop", // Suggestive art style
      badge: "😍",
      gradient: "from-pink-900/50 to-purple-900/50",
      highlight: true
    },
    {
      id: 2,
      title: "Bônus 2 - Super Pacote de Mangás",
      description: "IMPERDÍVEL! Mais de 31 MIL mangás de todos os gêneros com a melhor qualidade. O paraíso dos fãs de mangá!",
      icon: <BookOpen className="w-8 h-8 text-blue-400" />,
      image: "https://images.unsplash.com/photo-1614583225154-5fcdda07019e?q=80&w=500&auto=format&fit=crop", // Manga stack
      covers: [
        "https://i0.wp.com/blogbbm.com/wp-content/uploads/2020/02/demon-slayer-01.jpg?fit=610%2C900&ssl=1",
        "https://ptanime.com/wp-content/uploads/2015/11/Nanatsu-no-Taizai-capa-17.jpg",
        "https://tse1.mm.bing.net/th/id/OIP.aDZ6ZwSrgcqqh3gUhkKeygHaLx?rs=1&pid=ImgDetMain&o=7&rm=3"
      ],
      gradient: "from-blue-900/50 to-cyan-900/50",
      highlight: false
    },
    {
      id: 3,
      title: "Bônus 3 - Pacote Terror Assombrado",
      description: "Coleção completa com as obras mais aterrorizantes. Junji Ito, clássicos do terror e muito mais para ler com a luz acesa.",
      icon: <Ghost className="w-8 h-8 text-slate-200" />,
      image: "https://4.bp.blogspot.com/-lyk7YsZ3CQ0/TyKeCLFL3DI/AAAAAAAAA3I/YTvw_METEXs/s1600/MESTRES+DO+TERROR+-+N%C2%BA+21+-+%C3%90%C3%98%C3%98M%E2%84%A2+SCANS_Page_01.jpg",
      // Specific covers requested by user
      covers: [
        "https://th.bing.com/th/id/R.9ff3ffa06c8b77afea26531fd754c9ce?rik=vR79ePJY1KA%2fvQ&pid=ImgRaw&r=0",
        "https://4.bp.blogspot.com/-lyk7YsZ3CQ0/TyKeCLFL3DI/AAAAAAAAA3I/YTvw_METEXs/s1600/MESTRES+DO+TERROR+-+N%C2%BA+21+-+%C3%90%C3%98%C3%98M%E2%84%A2+SCANS_Page_01.jpg",
        "https://tse4.mm.bing.net/th/id/OIP.t6cicNm3VPZAnTShmvRkMQHaKx?rs=1&pid=ImgDetMain&o=7&rm=3"
      ],
      badge: "Mais Pedido!",
      gradient: "from-gray-900 to-black",
      highlight: true
    },
    {
      id: 4,
      title: "Bônus 4 - Audiobooks Premium",
      description: "Narração profissional das melhores sagas. Harry Potter, Senhor dos Anéis e best-sellers para ouvir onde quiser.",
      icon: <Headphones className="w-8 h-8 text-green-400" />,
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?q=80&w=500&auto=format&fit=crop", // Audio
      // Specific covers requested by user
      covers: [
        "https://1.bp.blogspot.com/-C9RluzYXyGg/XBeMQJPux1I/AAAAAAABJO4/vDngsaERa5II5tjsIn1jsuxzR0_Sljf9gCLcBGAs/s1600/91fIg3SvB0L.jpg",
        "https://tse1.explicit.bing.net/th/id/OIP.Vz6Z3K2ghly2dXVxBRzF7QHaLe?rs=1&pid=ImgDetMain&o=7&rm=3",
        "https://1.bp.blogspot.com/-C9RluzYXyGg/XBeMQJPux1I/AAAAAAABJO4/vDngsaERa5II5tjsIn1jsuxzR0_Sljf9gCLcBGAs/s1600/91fIg3SvB0L.jpg"
      ],
      badge: "Mais Pedido!",
      gradient: "from-green-900/50 to-emerald-900/50",
      highlight: true
    }
  ];

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-[#050505] relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
                <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase mb-2 block animate-pulse">
                    Oferta por tempo limitado
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                    Leve esses <span className="text-yellow-500">Bônus Exclusivos</span> de Graça
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Ao garantir seu acesso Premium hoje, você desbloqueia imediatamente estes pacotes especiais.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {bonuses.map((bonus) => (
                    <div key={bonus.id} className="bg-[#0f1219] border border-slate-800 rounded-2xl overflow-hidden group hover:border-yellow-500/50 transition-all duration-300 shadow-2xl relative flex flex-col">
                        
                        {/* Header Image Area */}
                        <div className={`h-48 relative overflow-hidden bg-gradient-to-br ${bonus.gradient}`}>
                            {/* Overlay Pattern */}
                            <div className="absolute inset-0 bg-black/40 z-10"></div>
                            
                            {/* "HQFLIX" Style Text Background */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-10 font-black text-6xl text-white tracking-tighter select-none scale-150 transform -rotate-12 z-0">
                                HQFLIX
                            </div>

                            {/* Content Composition */}
                            <div className="absolute inset-0 flex items-center justify-center z-20 gap-4 mt-4">
                                {/* Left Cover */}
                                <div className="w-20 h-28 bg-slate-800 rounded shadow-lg transform -rotate-6 border border-white/10 overflow-hidden relative">
                                     <img 
                                        src={bonus.covers ? bonus.covers[0] : bonus.image} 
                                        className="w-full h-full object-cover opacity-80" 
                                        alt="" 
                                     />
                                </div>
                                {/* Center Main Cover */}
                                <div className="w-24 h-32 bg-slate-900 rounded-lg shadow-2xl z-10 transform scale-110 border border-white/20 overflow-hidden relative">
                                     <img 
                                        src={bonus.covers ? bonus.covers[1] : bonus.image} 
                                        className="w-full h-full object-cover" 
                                        alt="" 
                                     />
                                     {bonus.id === 1 && (
                                        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                                            <Lock className="w-8 h-8 text-red-500" />
                                        </div>
                                     )}
                                </div>
                                {/* Right Cover */}
                                <div className="w-20 h-28 bg-slate-800 rounded shadow-lg transform rotate-6 border border-white/10 overflow-hidden relative">
                                    <img 
                                        src={bonus.covers ? bonus.covers[2] : bonus.image} 
                                        className="w-full h-full object-cover opacity-80" 
                                        alt="" 
                                    />
                                </div>
                            </div>

                            {/* Corner Icon */}
                            <div className="absolute bottom-4 left-4 z-30 bg-black/80 p-2 rounded-lg backdrop-blur border border-white/10 shadow-lg">
                                {bonus.icon}
                            </div>

                            {/* Badge */}
                            {bonus.badge && (
                                <div className={`absolute top-4 right-4 z-30 bg-yellow-500 text-black font-bold text-xs px-3 py-1 rounded-full shadow-lg flex items-center gap-1 ${bonus.id === 1 ? 'text-lg p-2' : ''}`}>
                                    {bonus.badge.includes('Mais') && <Star className="w-3 h-3 fill-black" />}
                                    {bonus.badge}
                                </div>
                            )}
                        </div>

                        {/* Card Body */}
                        <div className="p-6 flex-1 flex flex-col justify-between relative bg-[#0f1219]">
                             {/* Decorative Top Border */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-slate-700 to-transparent opacity-50"></div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">{bonus.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    <Flame className="w-4 h-4 text-orange-500 inline mr-1 fill-orange-500" />
                                    {bonus.description}
                                </p>
                            </div>

                            <button 
                                onClick={scrollToPricing}
                                className="w-full bg-[#d97706] hover:bg-[#b45309] text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-lg shadow-orange-900/20 text-sm uppercase tracking-wide flex items-center justify-center gap-2 group-hover:scale-[1.02] transform duration-200"
                            >
                                Acesso Imediato em seu e-mail
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default BonusSection;