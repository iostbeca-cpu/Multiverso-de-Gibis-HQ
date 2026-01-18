import React from 'react';

// Acervo rico e variado para simular "Todas as imagens"
// Mistura de HQs, Mangás e Comics Ocidentais
const coversRow1 = [
  "https://1.bp.blogspot.com/-YoorI3pvWF0/X_vPfTiNudI/AAAAAAAAjK0/DCOfdzRj-MQKSUwHc2nO0yqXYSLC6c7UwCLcBGAsYHQ/s1600/Fantasma%2BAparo%2B2.jpg", // New Request
  "https://2.bp.blogspot.com/-OH6hWS978qI/TuBcopYUcMI/AAAAAAAAB14/wezarwxnXgc/s1600/4f+11.jpg", // New Request
  "https://tse1.explicit.bing.net/th/id/OIP.5JdsAZspaZwqfGJs1kN0RwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", // Requested
  "https://tse4.mm.bing.net/th/id/OIP.B5FPR_pg6ikNTy7umpz-RwHaKt?rs=1&pid=ImgDetMain&o=7&rm=3", // Requested
  "https://tse3.mm.bing.net/th/id/OIP.Hx-jqkhQnL6vEF4yvHDeuAHaLX?rs=1&pid=ImgDetMain&o=7&rm=3", // Requested
  "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&q=80", // Comics
  "https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?w=400&q=80", // Spiderman
  "https://images.unsplash.com/photo-1535970793482-07de93762dc4?w=400&q=80", // Hulk Color
  "https://images.unsplash.com/photo-1560517709-66840d500474?w=400&q=80", // Batman Vibe
  "https://images.unsplash.com/photo-1534684686641-05569203ecca?w=400&q=80", // Dark Knight
  "https://images.unsplash.com/photo-1561149877-94005953531b?w=400&q=80", // Comics Stack
  "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?w=400&q=80", // Marvel vs DC
  "https://images.unsplash.com/photo-1579309401385-875f5ff7e01f?w=400&q=80", // Iron Man
  "https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=400&q=80", // Deadpool
];

const coversRow2 = [
  "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&q=80", // Spiderman Movie
  "https://images.unsplash.com/photo-1569003339405-ea396a5a8a90?w=400&q=80", // Comic Art
  "https://images.unsplash.com/photo-1559941193-4a124c6e9112?w=400&q=80", // Vintage Comics
  "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=400&q=80", // Manga Shelf
  "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&q=80", // Dragon Ball
  "https://images.unsplash.com/photo-1580477667995-2b94f1b4050e?w=400&q=80", // Naruto
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&q=80", // Dark Anime
  "https://images.unsplash.com/photo-1588497859426-e2003c8c08dd?w=400&q=80", // Manga Art
  "https://images.unsplash.com/photo-1620336655052-b57972f3a260?w=400&q=80", // Adventure
  "https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&q=80", // One Piece Vibe
  "https://images.unsplash.com/photo-1560972550-aba3456b556c?w=400&q=80", // Action Figure
  "https://images.unsplash.com/photo-1605218457319-d05523b10c97?w=400&q=80", // Tokyo
];

// Combine lists to ensure enough items for scrolling
const row1Display = [...coversRow1, ...coversRow1, ...coversRow1];
const row2Display = [...coversRow2, ...coversRow2, ...coversRow2];

const LibraryPreview: React.FC = () => {
  return (
    <section className="py-20 bg-black overflow-hidden border-y border-slate-900 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none"></div>
      
      {/* Header Section */}
      <div className="container mx-auto px-4 text-center mb-14 relative z-20">
        <div className="inline-block mb-4">
             <span className="text-yellow-500 font-bold tracking-[0.2em] text-xs uppercase border-b border-yellow-500/30 pb-1">
                Acervo Premium
             </span>
        </div>
        
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight leading-none">
          O MAIS COMPLETO DO <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">BRASIL!</span>
        </h2>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Explore mais de <span className="text-yellow-500 font-bold">+95 mil histórias</span> em quadrinhos organizadas em diversas
          categorias para todos os gostos em nosso armazenamento próprio.
        </p>
      </div>

      {/* Row 1 - Left */}
      <div className="flex gap-4 mb-4 relative animate-marquee whitespace-nowrap">
        {row1Display.map((src, i) => (
          <div key={`r1-${i}`} className="w-32 md:w-48 h-48 md:h-72 flex-shrink-0 rounded-lg overflow-hidden border border-slate-800 relative group cursor-pointer hover:border-yellow-500 transition-colors bg-slate-900">
            <img 
              src={src} 
              alt={`Cover ${i}`} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>

      {/* Row 2 - Right */}
      <div className="flex gap-4 relative animate-marquee-reverse whitespace-nowrap">
        {row2Display.map((src, i) => (
          <div key={`r2-${i}`} className="w-32 md:w-48 h-48 md:h-72 flex-shrink-0 rounded-lg overflow-hidden border border-slate-800 relative group cursor-pointer hover:border-yellow-500 transition-colors bg-slate-900">
            <img 
              src={src} 
              alt={`Cover ${i}`} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
          </div>
        ))}
      </div>
      
      <style>{`
        .animate-marquee {
          animation: marquee 80s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee 80s linear infinite reverse;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default LibraryPreview;