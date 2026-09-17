import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function VSL() {
  const [showPitch] = useState(true);
  const buyLink = import.meta.env.VITE_LINK_COMPRA || "{{LINK_COMPRA}}";

  const clientPhotos = [
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/1-1.webp",
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/2-1.webp",
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/3-1.webp",
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/zeoob.com_1sc590jknq_photo.webp",
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/zeoob.com_1drwoio7vc_photo.webp",
    "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/zeoob.com_2rq9lp05ct_photo.webp"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-6 pb-24 text-gray-900 font-sans">
      <div className="max-w-lg mx-auto px-4 space-y-8">
        
        <div className="text-center space-y-2">
          <div className="inline-block bg-emerald-100 text-emerald-800 font-black px-4 py-2 rounded-xl text-lg tracking-widest uppercase mb-2">
            RESULTADO!
          </div>
          <h1 className="text-3xl font-black text-gray-900 leading-tight uppercase tracking-tight">
            SEU PERFIL: <span className="text-emerald-600 block text-4xl mt-1">PRÁTICA & SAUDÁVEL ✨</span>
          </h1>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-emerald-100">
          <p className="font-bold text-gray-800 text-lg mb-4">Você precisa de refeições:</p>
          <ul className="space-y-3 font-semibold text-gray-600">
            {['rápidas', 'leves', 'saborosas', 'fáceis de montar', 'que deixem sua semana mais organizada'].map((item, i) => (
              <li key={i} className="flex gap-3 items-center">
                <span className="text-emerald-500 text-xl font-black">✔</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/16.webp" alt="Mockup Produto" className="w-full rounded-3xl shadow-xl border-4 border-white object-cover" />

        <div className="text-center pt-4">
          <h2 className="text-2xl font-black text-gray-800 uppercase">As receitas perfeitas pra você são:</h2>
        </div>

        <div className="grid gap-6">
          {[
            { 
              name: 'Salada Caesar', sub: 'SALADA CAESAR + MOLHO ORIGINAL', cons: '7 dias', cal: '115 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/9.webp' 
            },
            { 
              name: 'Mediterrânea', sub: 'SALADA MEDITERRÂNEA + MOLHO AGRIDOCE', cons: '7 dias', cal: '120 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/10.webp' 
            },
            { 
              name: 'Toscana', sub: 'SALADA TOSCANA + MOLHO SICILIANO', cons: '7 dias', cal: '130 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/11.webp' 
            },
            { 
              name: 'Caprese', sub: 'SALADA CAPRESE', cons: '7 dias', cal: '120 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/7.webp' 
            },
            { 
              name: 'Refrescante', sub: 'SALADA REFRESCANTE + MOLHO CÍTRICO', cons: '7 dias', cal: '100 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/6.webp' 
            },
            { 
              name: 'Big Mac', sub: 'SALADA BIG MAC + MOLHO ESPECIAL', cons: '7 dias', cal: '180 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/11/14.webp' 
            },
            { 
              name: 'Rústica', sub: 'SALADA RÚSTICA + MOSTARDA E MEL', cons: '7 dias', cal: '160 kcal', 
              img: 'https://controle.nutriliacastro.com/wp-content/uploads/2025/10/Design-sem-nome-9-1.png' 
            }
          ].map(salada => (
            <div key={salada.name} className="bg-white rounded-3xl overflow-hidden shadow-md border border-gray-100 relative">
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg font-black text-emerald-700 shadow-sm text-sm z-10">
                🥗 {salada.name}
              </div>
              <div className="bg-gray-50 w-full flex items-center justify-center p-2">
                <img src={salada.img} alt={salada.name} className="w-full h-auto max-h-[280px] object-contain drop-shadow-sm rounded-t-2xl" />
              </div>
              <div className="p-5">
                <h3 className="font-black text-gray-900 text-lg uppercase tracking-tight">{salada.sub}</h3>
                <div className="flex gap-4 mt-3 text-sm font-semibold text-gray-500">
                  <span className="bg-gray-50 px-3 py-1 rounded-lg">🕒 Conservação: {salada.cons}</span>
                  <span className="bg-gray-50 px-3 py-1 rounded-lg">🔥 {salada.cal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8 text-center space-y-6">
          <h2 className="text-3xl font-black text-emerald-600 uppercase tracking-tight leading-tight">
            Frescor <span className="text-gray-900">NO PRATO</span> + molhos irresistíveis
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-2"><img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/3.webp" className="rounded-xl shadow-sm object-contain aspect-square w-full" /></div>
            <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-2"><img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/1.webp" className="rounded-xl shadow-sm object-contain aspect-square w-full" /></div>
            <div className="bg-gray-50 rounded-2xl flex items-center justify-center p-2 col-span-2"><img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/4.webp" className="rounded-xl shadow-sm object-contain aspect-[2/1] w-full" /></div>
          </div>
          <p className="font-bold text-gray-700 text-lg px-4">
            Molhos irresistíveis que deixam tudo <span className="text-emerald-500 font-black uppercase text-xl">MUITO mais gostoso.</span>
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-900 aspect-[9/16] relative max-w-[320px] mx-auto">
             <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/2-A2chrN41w?controls=1&rel=0&modestbranding=1" 
               title="Molhos" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
               allowFullScreen
             ></iframe>
          </div>
        </div>

        <div className="bg-emerald-600 text-white p-8 rounded-3xl shadow-xl mt-10">
          <h3 className="text-2xl font-black uppercase tracking-tight leading-tight mb-6 text-center text-emerald-50 drop-shadow-sm">
            Oferta personalizada com base no seu perfil,<br/>
            <span className="text-white drop-shadow-md">Essas receitas foram feitas pra você:</span>
          </h3>
          <ul className="space-y-4 font-semibold text-lg bg-emerald-700/50 p-6 rounded-2xl mb-6">
            <li className="flex gap-3 items-center"><span>✅</span> 60 Saladas no Pote</li>
            <li className="flex gap-3 items-center"><span>✅</span> Conservação de até 7 dias</li>
            <li className="flex gap-3 items-center"><span>✅</span> Molhos irresistíveis</li>
            <li className="flex gap-3 items-center"><span>✅</span> Preparo rápido</li>
            <li className="flex gap-3 items-center"><span>✅</span> Receitas leves e práticas</li>
            <li className="flex gap-3 items-center text-emerald-200 mt-4 border-t border-emerald-500/30 pt-4"><span>🎁</span> + Smoothies Detox</li>
            <li className="flex gap-3 items-center text-emerald-200"><span>🎁</span> + Shots Matinais</li>
            <li className="flex gap-3 items-center text-emerald-200"><span>🎁</span> + Águas Saborizadas</li>
          </ul>
        </div>

        <div className="pt-8">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 uppercase tracking-widest bg-emerald-100 py-3 rounded-2xl border border-emerald-200">
            RECEBA AINDA<br/><span className="text-emerald-700">+ 3 bônus exclusivos:</span>
          </h2>

          <div className="space-y-6">
            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
              <span className="bg-emerald-500 text-white font-black px-4 py-1.5 rounded-full text-sm uppercase tracking-widest -mt-10 mb-4 shadow-md">Bônus 1</span>
              <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/15.webp" className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white mb-4" />
              <h4 className="font-black text-xl text-gray-900 uppercase">SMOOTHIES DETOX</h4>
              <p className="text-emerald-600 font-bold mb-3">20 RECEITAS</p>
              <div className="bg-emerald-50 w-full py-2 rounded-xl border border-emerald-100">
                <p className="text-gray-400 line-through text-sm font-semibold">R$29,90</p>
                <p className="text-emerald-600 font-black uppercase text-lg">HOJE É GRÁTIS!</p>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
              <span className="bg-emerald-500 text-white font-black px-4 py-1.5 rounded-full text-sm uppercase tracking-widest -mt-10 mb-4 shadow-md">Bônus 2</span>
              <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/5.webp" className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white mb-4" />
              <h4 className="font-black text-xl text-gray-900 uppercase">SHOTS MATINAIS</h4>
              <p className="text-emerald-600 font-bold mb-3">5 RECEITAS</p>
              <div className="bg-emerald-50 w-full py-2 rounded-xl border border-emerald-100">
                <p className="text-gray-400 line-through text-sm font-semibold">R$29,90</p>
                <p className="text-emerald-600 font-black uppercase text-lg">HOJE É GRÁTIS!</p>
              </div>
            </div>

            <div className="bg-white border-2 border-emerald-100 rounded-3xl p-6 shadow-sm flex flex-col items-center text-center">
              <span className="bg-emerald-500 text-white font-black px-4 py-1.5 rounded-full text-sm uppercase tracking-widest -mt-10 mb-4 shadow-md">Bônus 3</span>
              <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/8.webp" className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white mb-4" />
              <h4 className="font-black text-xl text-gray-900 uppercase">ÁGUAS SABORIZADAS</h4>
              <p className="text-emerald-600 font-bold mb-3">15 RECEITAS</p>
              <div className="bg-emerald-50 w-full py-2 rounded-xl border border-emerald-100">
                <p className="text-gray-400 line-through text-sm font-semibold">R$29,90</p>
                <p className="text-emerald-600 font-black uppercase text-lg">HOJE É GRÁTIS!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border-4 border-emerald-100 mt-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-emerald-200 blur-3xl opacity-40 rounded-full" />
          
          <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/16.webp" className="w-full rounded-2xl shadow-md border border-gray-100 mb-6 relative z-10" />
          
          <ul className="text-left space-y-3 font-bold text-gray-700 text-[15px] mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-100 relative z-10">
            <li className="flex items-center gap-2 text-gray-900 text-lg uppercase"><span className="text-emerald-500">🥗</span> <span>+ 60 Receitas de Saladas</span></li>
            <li className="flex items-center gap-2"><span className="text-emerald-500 text-xl font-black">✔</span> <span>+ Receitas de Molhos</span></li>
            <li className="flex items-center gap-2"><span className="text-emerald-500 text-xl font-black">✔</span> <span>+ 20 Receitas de Smoothies</span></li>
            <li className="flex items-center gap-2"><span className="text-emerald-500 text-xl font-black">✔</span> <span>+ 5 Receitas de Shots Matinais</span></li>
            <li className="flex items-center gap-2"><span className="text-emerald-500 text-xl font-black">✔</span> <span>+ 15 Receitas de Águas Saborizadas</span></li>
          </ul>

          <div className="text-center space-y-1 mb-8 relative z-10">
            <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Por Apenas:</p>
            <p className="text-5xl font-black text-emerald-600 drop-shadow-sm">6x de R$5,66</p>
            <p className="text-gray-600 font-semibold pt-2 text-lg">ou R$29,90 à vista</p>
          </div>

          <a href={buyLink} className="block w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl py-6 rounded-2xl shadow-[0_6px_0_0_#059669] hover:shadow-[0_4px_0_0_#059669] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all text-center uppercase tracking-wide relative z-10">
            QUERO ACESSAR
          </a>
        </div>

        <div className="bg-gray-900 text-white p-8 rounded-3xl mt-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 blur-[80px] opacity-30 rounded-full" />
          <div className="flex flex-col items-center text-center relative z-10">
            <h3 className="font-black text-2xl uppercase tracking-widest mb-1 text-emerald-400">SALADAS DA NUTRI</h3>
            <h2 className="text-3xl font-black uppercase mb-6 tracking-tight">AURORA PRADO</h2>
            <img src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/12.webp" className="w-40 h-40 object-cover rounded-full shadow-2xl border-4 border-emerald-500 mb-6" />
            <p className="text-[15px] font-medium leading-relaxed opacity-90">
              Minhas receitas de Saladas no Pote e Molhos Irresistíveis sempre fizeram sucesso na internet. Resolvi reunir as 60 melhores receitas em um único lugar e compartilhar esse conhecimento com você também.
            </p>
          </div>
        </div>

        <div className="pt-12 overflow-hidden bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-black text-center text-gray-900 mb-8 uppercase tracking-widest">
            Aprovado por milhares de Mulheres <span className="text-red-500 animate-pulse inline-block">💖</span>
          </h2>
          
          {/* Simple CSS Carousel */}
          <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
             <motion.div 
               animate={{ x: ['0%', '-50%'] }}
               transition={{ ease: 'linear', duration: 20, repeat: Infinity }}
               className="flex gap-4 w-[200%] sm:w-[150%]"
             >
               {[...clientPhotos, ...clientPhotos].map((photo, i) => (
                 <div key={i} className="w-48 shrink-0">
                   <img src={photo} className="w-full h-80 object-cover rounded-2xl shadow-md border border-gray-100" />
                 </div>
               ))}
             </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
