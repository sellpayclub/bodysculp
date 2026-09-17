import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAnswers } from './BodySculpFunnel';
import { CheckCircle2, ChevronRight, ShieldCheck, Check, X, Star } from 'lucide-react';

interface Props {
  answers: UserAnswers;
}

export default function VSL({ answers }: Props) {
  const [showPitch, setShowPitch] = useState(false);
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const buyLink = import.meta.env.VITE_LINK_COMPRA || "{{LINK_COMPRA}}";
  
  // Track scroll for floating CTA
  useEffect(() => {
    const handleScroll = () => {
      if (showPitch && window.scrollY > 800) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showPitch]);

      const clientPhotos = [
    "https://sculpiflex.com/wp-content/uploads/2025/03/008.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/002-1.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/009.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/004-1-441x441.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2023/09/9.BA-Cellulite-1024x1024.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/12/hf_20260227_152448_c747b04f-9f8e-4b7f-a142-1873a2e90603-e1772905899621-768x769.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/BEFORE-AFTER-03-1-768x786.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2023/09/9.BA-Cellulite-Sculpiflex.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/Before-and-after-loose-skin-5-768x768.jpg.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/09/review-2.jpg.webp"
  ];
      const productPhotos = [
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/creme%202.png",
    "https://sculpiflex.com/wp-content/uploads/2025/03/64646ju.webp",
    "https://sculpiflex.com/wp-content/uploads/2025/03/5967558927388363376-1yt.webp"
  ];
  const isFlaccid = answers.bellyType === 'Reduzir barriga flácida e solta';

  if (!showPitch) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen pt-8 pb-32 text-zinc-900 font-sans selection:bg-rose-200">
        <div className="max-w-md mx-auto px-5 space-y-10">
          <div className="flex justify-center mb-6">
            <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" alt="BodySculp Logo" className="h-10 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
          </div>
          
          {/* Approved Section */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 font-bold px-5 py-2.5 rounded-full text-sm uppercase tracking-widest border border-emerald-100">
              <CheckCircle2 size={18} />
              Análise Concluída
            </div>

            <h1 className="text-3xl font-semibold text-zinc-900 leading-[1.1] tracking-tight">
              Parabéns{answers.name ? `, ${answers.name.split(' ')[0]}` : ''},
              <span className="font-light block text-2xl mt-1 text-zinc-500">você é compatível com</span>
              <span className="font-bold text-rose-500 block text-[32px] mt-2">BodySculp™</span>
            </h1>

            <p className="text-zinc-500 font-medium px-4 text-base leading-relaxed">
              Desenvolvemos um protocolo 100% seguro e indolor para as características exatas do seu corpo.
            </p>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-rose-900/10">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src="https://sculpiflex.com/wp-content/uploads/2025/09/belly-fat-before.jpg" 
                alt="Mulher feliz" 
                className="w-full h-auto object-cover relative z-0" 
              />
            </div>
          </div>

          {/* Diagnostic Section */}
          <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-zinc-200/50 border border-zinc-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-500"></div>
            
            <h2 className="text-sm font-bold uppercase text-center mb-8 tracking-[0.2em] text-zinc-400">
              Diagnóstico Corporal
            </h2>

            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-rose-100 blur-2xl rounded-full opacity-50"></div>
                <img 
                  src="https://sculpiflex.com/wp-content/uploads/2025/09/belly-fat-before.jpg" 
                  className="w-48 h-auto object-contain relative z-10"
                  alt="Corpo Gráfico"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <p className="text-xs font-bold text-rose-500 uppercase tracking-widest mb-1">Foco Principal</p>
                <p className="text-xl font-semibold text-zinc-900 mb-4">{answers.bellyType && answers.bellyType !== '' ? answers.bellyType : 'Acúmulo de Gordura'}</p>
                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  Identificamos que na sua faixa de <strong>{answers.age && answers.age !== '' ? answers.age.toLowerCase() : 'idade atual'}</strong>, focar em <strong>{answers.concerns.length > 0 ? answers.concerns[0].toLowerCase() : 'reduzir medidas'}</strong> exige um estímulo mais profundo. Fatores como seu nível de estrogênio formam um acúmulo que dificulta a conquista de uma silhueta esbelta e definida apenas com métodos tradicionais.
                </p>
              </div>

              <div className="flex flex-col gap-6 pt-4 border-t border-zinc-100">
                <div>
                   <div className="flex justify-between items-baseline mb-2">
                     <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Metabolismo Adiposo</span>
                     <span className="text-sm font-bold text-zinc-800">Lento (25%)</span>
                   </div>
                   <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                     <div className="bg-gradient-to-r from-rose-400 to-rose-500 h-full w-1/4 rounded-full"></div>
                   </div>
                </div>

                <div>
                   <div className="flex justify-between items-baseline mb-2">
                     <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Retenção de Líquidos</span>
                     <span className="text-sm font-bold text-zinc-800">Alta (80%)</span>
                   </div>
                   <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                     <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-full w-4/5 rounded-full"></div>
                   </div>
                </div>

                <div>
                   <div className="flex justify-between items-baseline mb-2">
                     <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Elasticidade da Pele</span>
                     <span className="text-sm font-bold text-zinc-800">Comprometida (35%)</span>
                   </div>
                   <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                     <div className="bg-gradient-to-r from-orange-400 to-orange-500 h-full w-[35%] rounded-full"></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={() => { window.scrollTo(0, 0); setShowPitch(true); }} 
            className="flex items-center justify-center gap-2 w-full bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-lg py-5 rounded-2xl shadow-xl shadow-zinc-900/20 active:scale-[0.98] transition-all"
          >
            Ver a Solução
            <ChevronRight size={20} />
          </button>
          
          {/* The Problem / Solution Context */}
          <div className="space-y-8 pt-8">
            <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight text-center leading-tight">
              Por que a maioria das <br/><span className="text-zinc-500">soluções falha?</span>
            </h2>
            <p className="text-base text-zinc-500 text-center leading-relaxed">
              Muitos métodos não penetram na pele o suficiente para combater a gordura abdominal persistente onde ela realmente está armazenada.
            </p>

            <div className="bg-rose-50 p-8 rounded-[2rem] text-rose-900 border border-rose-100 text-center">
              <p className="text-lg font-medium leading-relaxed">
                O <span className="font-bold border-b-2 border-rose-300 pb-0.5">BodySculp utiliza uma tecnologia 3 em 1</span> para achatar e firmar visivelmente a região, tudo em apenas 15 minutos no conforto da sua casa.
              </p>
            </div>
            
            <button 
              onClick={() => { window.scrollTo(0, 0); setShowPitch(true); }} 
              className="flex items-center justify-center gap-2 w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-lg py-5 rounded-2xl shadow-xl shadow-rose-500/20 active:scale-[0.98] transition-all"
            >
              Acessar Plano <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FCFAFA] min-h-screen pt-8 pb-32 text-zinc-900 font-sans selection:bg-rose-200">
      
      {/* Floating CTA Mobile */}
      <AnimatePresence>
        {showFloatingCTA && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-4 left-4 right-4 z-50 drop-shadow-2xl"
          >
            <a 
              href={buyLink} 
              className="flex items-center justify-center gap-2 w-full bg-rose-500 text-white font-bold text-lg py-4 rounded-full shadow-lg shadow-rose-500/30 active:scale-[0.98] transition-all"
            >
              Eu Quero o BodySculp <ChevronRight size={20} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-md mx-auto px-5 space-y-12">
        
        <div className="flex justify-center pt-4">
          <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" alt="BodySculp Logo" className="h-10 object-contain drop-shadow-sm" />
        </div>

        {/* Sales Pitch Reveal */}
        <div className="space-y-8">
          <div className="text-center">
            {answers.name && <p className="text-rose-500 font-bold text-3xl mb-4">{answers.name.split(' ')[0]},</p>}
            <h2 className="text-[28px] font-semibold leading-[1.1] tracking-tight text-zinc-900">
              Com base no seu perfil,<br/>nós sabemos que você está a <i className="text-zinc-500">2 a 4 semanas</i> de uma transformação.
            </h2>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl shadow-zinc-200/50 border border-zinc-100 overflow-hidden">
            <div className="p-6 pb-0">
              <ul className="space-y-5 text-sm font-medium text-zinc-600">
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 bg-rose-100 text-rose-500 p-1 rounded-full"><Check size={16} strokeWidth={3} /></div>
                  <span className="leading-relaxed"><strong className="text-zinc-900">Semanas 1-2:</strong> Efeito lifting visível com a desinflamação celular.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 bg-rose-100 text-rose-500 p-1 rounded-full"><Check size={16} strokeWidth={3} /></div>
                  <span className="leading-relaxed"><strong className="text-zinc-900">Semanas 3-4:</strong> Região notavelmente mais fina, roupas mais largas.</span>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="shrink-0 bg-rose-100 text-rose-500 p-1 rounded-full"><Check size={16} strokeWidth={3} /></div>
                  <span className="leading-relaxed"><strong className="text-zinc-900">Semanas 6-8:</strong> Redução visível da gordura resistente, pele firme e renovada.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 mt-4">
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="relative group overflow-hidden rounded-[1.5rem]">
                  <div className="absolute top-2 left-2 bg-white/80 backdrop-blur-md text-zinc-900 text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-full z-10">Antes</div>
                  <img src="https://sculpiflex.com/wp-content/uploads/2025/09/belly-fat-before.jpg" className="w-full h-full object-cover aspect-[4/5]" />
                </div>
                <div className="relative group overflow-hidden rounded-[1.5rem]">
                  <div className="absolute top-2 right-2 bg-rose-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-full z-10">Depois</div>
                  <img src="https://sculpiflex.com/wp-content/uploads/2025/09/belly-after.jpg" className="w-full h-full object-cover aspect-[4/5]" />
                </div>
              </div>
            </div>
          </div>
          
          <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/mockup%20caixa%20bodysculp1.png" className="w-full h-auto object-cover rounded-[2rem] shadow-lg shadow-zinc-200 border border-zinc-100 mix-blend-multiply" />
          <img src="https://sculpiflex.com/wp-content/uploads/2023/09/sculpiflex-reviews-compilation.jpg.webp" className="w-full h-auto rounded-[2rem] shadow-lg shadow-zinc-200 border border-zinc-100 block" />

        </div>

        {/* Clear Recommendation */}
        <div className="bg-zinc-900 text-white p-8 rounded-[2rem] shadow-2xl overflow-hidden relative">
           <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[50px] rounded-full"></div>
           <h3 className="text-rose-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 relative z-10">Recomendação Clínica</h3>
           <p className="text-lg font-light leading-relaxed relative z-10">
             Utilize o BodySculp <strong className="font-semibold text-white">3 vezes por semana</strong>, 15 minutos por sessão, para revelar uma pele firme e esculpida em semanas.
           </p>
        </div>

        {/* Results by Region */}
        <div className="space-y-8">
           <h2 className="text-2xl font-semibold text-center tracking-tight text-zinc-900">
             Resultados esperados <br/><span className="text-zinc-500">para sua região</span>
           </h2>

           <div className="grid gap-6">
                          {[
               { title: 'Celulites', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/393cbe45-5966-48e3-b95c-3ece868ae338/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/af7b91fd-1143-4682-a9c2-ae7e6764b562/original.jpeg' },
               { title: 'Bumbum', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/a8259ff3-ff0a-4e20-a794-62991e1d2c36/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/8c45d0f4-57a6-4605-a146-c0649c688d3c/original.jpeg' },
               { title: 'Corpo Completo', imgAntes: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/d98c2cfc-f34d-4aff-a642-7e38908b0021/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/users/bZMWsWATM8a5TORnrvJX8kWlvUJ2/7b2dbac7-fca5-4046-b90b-491055ba612a/original.jpeg' },
               ...(isFlaccid ? [
                 { title: 'Barriga Flácida', imgAntes: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/87740ec6-00a6-489b-8af1-ff2eba98720c/mobile.avif', imgDepois: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/mobile.webp' },
                 { title: 'Pele Mais Firme', imgAntes: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/original.jpeg', imgDepois: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fe3049c6-4adf-4b85-a244-fe5ee8b59fbb/mobile.webp' }
               ] : [])
             ].map((r, i) => (
                <div key={i} className="bg-white rounded-[2rem] p-5 shadow-xl shadow-zinc-200/40 border border-zinc-100">
                  <h4 className="font-semibold text-center mb-5 text-zinc-800 tracking-tight">{r.title}</h4>
                  <div className="grid grid-cols-2 gap-3">
                     <div className="relative rounded-[1.5rem] overflow-hidden">
                       <span className="absolute top-2 left-2 bg-white/80 backdrop-blur text-zinc-900 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-full z-10">Antes</span>
                       <img src={r.imgAntes} className="w-full h-full object-cover aspect-square" />
                     </div>
                     <div className="relative rounded-[1.5rem] overflow-hidden">
                       <span className="absolute top-2 right-2 bg-rose-500/90 backdrop-blur text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider rounded-full z-10">Depois</span>
                       <img src={r.imgDepois} className="w-full h-full object-cover aspect-square" />
                     </div>
                  </div>
                </div>
             ))}
           </div>
        </div>

        {/* Why it works - Refined */}
        <div className="bg-zinc-50 rounded-[2rem] p-8 border border-zinc-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-rose-100 blur-3xl opacity-60 rounded-full" />
          
          <h2 className="text-2xl font-semibold text-zinc-900 leading-tight mb-6 relative z-10 tracking-tight">
            Por que o BodySculp realmente funciona em apenas 15 minutos?
          </h2>
          
          <p className="text-zinc-600 font-medium mb-8 relative z-10 leading-relaxed text-sm">
            Gordura abdominal persistente não se resume apenas a calorias. Muitas vezes, está associada à má microcirculação, retenção de líquidos e células que se tornam resistentes a sinais metabólicos.
          </p>
          
          
          
          <h3 className="font-bold text-lg text-zinc-900 mb-3 relative z-10">Tecnologia 3 em 1 Integrada</h3>
          <p className="text-zinc-600 text-sm font-medium relative z-10 leading-relaxed">
            Diferente de cremes superficiais, o BodySculp atua <strong className="text-zinc-900 font-semibold border-b border-rose-300">abaixo da pele</strong>, atingindo as camadas onde a gordura resistente e os líquidos se acumulam, utilizando terapias aplicadas em clínicas de estética premium.
          </p>
        </div>

        {/* How to use */}
        <div className="space-y-8">
           <h2 className="text-2xl font-semibold text-center tracking-tight text-zinc-900">
             Como incluir na <span className="text-zinc-500">sua rotina</span>
           </h2>
           
           <div className="space-y-6">
             {[
               { t: 'Ligue e Inicie', desc: 'Mantenha o dispositivo totalmente carregado antes do primeiro uso para melhor performance.', v: 'https://sculpiflex.com/wp-content/uploads/2025/03/how-to-use-00-4-1.mp4' },
               { t: 'Aplique seu creme', desc: 'Aplique uma camada de creme da sua preferência na região que irá aplicar.', v: 'https://sculpiflex.com/wp-content/uploads/2025/03/how-to-use-3.mp4' },
               { t: 'Ajuste a intensidade', desc: 'Ligue o BodySculp e ajuste os níveis de Ventosaterapia Dinâmica (DCP) e Estimulação Elétrica Muscular (EMS) de acordo com o seu conforto!', v: 'https://sculpiflex.com/wp-content/uploads/2025/03/how-to-use-2-1.mp4' },
               { t: 'Deslize suavemente', desc: 'Posicione o BodySculp sobre a pele e deixe-o criar sucção. Pressione "Liberar" para interromper a sucção. Repita intermitentemente durante 15 a 30 minutos.', v: 'https://sculpiflex.com/wp-content/uploads/2024/10/adv-loose-skin-UMS-video-1.mp4' }
             ].map((s, i) => (
                <div key={i} className="bg-white p-4 rounded-[2rem] shadow-xl shadow-zinc-200/40 border border-zinc-50 flex flex-col gap-4">
                  <div className="w-full rounded-[1.5rem] overflow-hidden bg-black aspect-[9/16] relative">
                    <video src={s.v} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-90" />
                  </div>
                  <div className="flex items-start gap-4 px-2 pt-2">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center font-bold shrink-0 text-sm mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-800 text-lg tracking-tight leading-tight">{s.t}</p>
                      <p className="text-zinc-500 text-sm mt-1.5 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
             ))}
           </div>
        </div>

        {/* Benefits List Matrix */}
        <div className="bg-zinc-900 rounded-[2rem] overflow-hidden shadow-2xl relative mt-8">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-rose-500/20 blur-[60px] rounded-full"></div>
          <div className="p-8 pb-4">
            <h3 className="font-semibold text-white text-xl tracking-tight leading-tight">Solução Completa<br/><span className="text-zinc-400 font-light">Para todo o corpo</span></h3>
          </div>
          <div className="px-8 pb-8">
            <ul className="space-y-4 font-light text-zinc-300 text-[15px]">
              {['Elimina a celulite', 'Quebra as células de gordura', 'Tonifica os quadris', 'Firma a pele flácida', 'Atenua estrias', 'Tonifica braços flácidos'].map((item, i) => (
                <li key={i} className="flex gap-4 items-center">
                  <div className="text-rose-500 shrink-0"><Check size={18} strokeWidth={3} /></div> 
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Competitor Comparison */}
        <div className="space-y-6 pt-8">
           <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-zinc-200/40 border border-zinc-100">
             <div className="p-6 pb-2 text-center">
               <h3 className="font-semibold text-xl tracking-tight text-zinc-900">BodySculp</h3>
             </div>
             <div className="p-6 pt-0 relative z-10">
               <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" className="w-40 mx-auto mix-blend-multiply mb-6 drop-shadow-xl" />
               <ul className="space-y-4 font-medium text-zinc-600 text-sm bg-zinc-50/50 p-5 rounded-2xl border border-zinc-100">
                 {['Não invasivo e indolor', 'Tecnologia clínica', 'Trata estrias e celulite', 'Firma a flacidez', 'Garantia de resultados'].map((item, i) => (
                   <li key={i} className="flex gap-3 items-center"><span className="text-emerald-500 bg-emerald-50 rounded-full p-0.5"><Check size={14} strokeWidth={3} /></span> {item}</li>
                 ))}
               </ul>
             </div>
           </div>

           <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-[1.5rem] shadow-md border border-zinc-100 p-5 text-center">
                <p className="font-semibold text-zinc-800 mb-4">Cirurgia</p>
                <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" className="w-16 mx-auto mb-4 opacity-80" />
                <ul className="space-y-3 font-medium text-zinc-500 text-xs text-left">
                  <li className="flex gap-2"><X size={14} className="text-red-400 shrink-0" /> Invasivo</li>
                  <li className="flex gap-2"><X size={14} className="text-red-400 shrink-0" /> Alto Risco</li>
                  <li className="flex gap-2"><X size={14} className="text-red-400 shrink-0" /> Cicatrizes</li>
                </ul>
              </div>

              
           </div>
        </div>

        {/* Dermatologists */}
        <div className="bg-blue-50/50 rounded-[2rem] p-6 shadow-xl shadow-blue-900/5 border border-blue-100 text-center relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 p-4 opacity-10"><ShieldCheck size={100} /></div>
          <h2 className="text-xl font-semibold text-zinc-900 mb-4 tracking-tight relative z-10">
            Recomendado por <span className="text-blue-600 block">Dermatologistas</span>
          </h2>
          <img src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" className="w-full rounded-2xl shadow-sm border border-black/5 mb-5 relative z-10" />
          <p className="text-sm font-medium text-zinc-600 leading-relaxed relative z-10 px-2">
            A tecnologia 3 em 1 do BodySculp é respaldada por estudos focados na eficácia clínica e segurança a longo prazo.
          </p>
        </div>

        {/* Guarantee */}
        <div className="bg-white rounded-[2rem] p-8 mt-12 border border-zinc-200 text-center relative shadow-sm">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white p-2 rounded-full border border-zinc-100 shadow-sm">
            <div className="bg-emerald-50 text-emerald-500 w-12 h-12 rounded-full flex items-center justify-center">
              <ShieldCheck size={28} />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-zinc-900 mt-6 mb-3 tracking-tight">Garantia Blindada 30 Dias</h3>
          <p className="font-medium text-zinc-500 leading-relaxed text-sm">
            Se você não notar a pele mais firme ou medidas reduzidas, reembolsamos 100% do seu pedido. Sem perguntas.
          </p>
        </div>

        {/* Testimonials */}
        <div className="overflow-hidden pt-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-zinc-900 tracking-tight mb-2">
              Resultados Reais
            </h2>
            <div className="flex justify-center gap-1 text-rose-500 mb-2">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
            </div>
          </div>
          
          <div className="relative w-full overflow-hidden mb-8" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
             <div className="flex gap-4 w-max animate-marquee-left" style={{ animationDuration: "50s" }}>
               {[...clientPhotos, ...clientPhotos].map((photo, i) => (
                 <div key={`client-${i}`} className="w-56 shrink-0">
                   <img src={photo} className="w-full h-[280px] object-cover rounded-[1.5rem] shadow-lg shadow-zinc-200/50" />
                 </div>
               ))}
             </div>
          </div>

          <p className="text-sm font-medium text-center text-zinc-500 mb-6 px-4">
             Mais clientes recebendo o pacote em casa:
          </p>

          <div className="relative w-full overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
             <div className="flex gap-4 w-max animate-marquee-left" style={{ animationDuration: "40s", animationDirection: "reverse" }}>
               {[...productPhotos, ...productPhotos].map((photo, i) => (
                 <div key={`product-${i}`} className="w-40 shrink-0">
                   <img src={photo} className="w-full h-[200px] object-cover rounded-2xl shadow-sm border border-zinc-100" />
                 </div>
               ))}
             </div>
          </div>
        </div>


        {/* Pricing / Offer */}
        <div id="offer" className="bg-white rounded-[2rem] p-8 shadow-2xl shadow-rose-900/10 border-2 border-rose-100 text-center relative overflow-hidden mt-8">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-rose-50 blur-[50px] rounded-full" />
          
          <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em] mb-6 relative z-10">Levando Hoje</h2>
          
          <ul className="text-left space-y-4 font-medium text-zinc-600 text-[15px] mb-8 bg-zinc-50 p-6 rounded-[1.5rem] border border-zinc-100 relative z-10 w-full shadow-sm">
            <li className="flex justify-between gap-6 items-center"><span className="text-zinc-500">Aparelho BodySculp:</span> <span className="text-zinc-400 line-through text-lg">R$ 1.199</span></li>
            
            <li className="flex justify-between gap-6 border-t border-zinc-200 pt-4 mt-2 font-bold text-zinc-900 items-center"><span className="text-lg">Preço Hoje:</span> <span className="text-emerald-600 font-black text-xl uppercase tracking-tight">Único Pagamento</span></li>
          </ul>

          <div className="text-center space-y-4 mb-8 relative z-10 w-full">
            <span className="inline-block bg-rose-500 text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-1 shadow-sm">
              Oferta Especial de Lançamento
            </span>
            
            <div className="bg-white border-2 border-rose-100 rounded-[1.5rem] p-5 shadow-sm overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-rose-50 blur-[20px] rounded-full" />
              
              <div className="relative z-10">
                <p className="text-zinc-500 font-medium text-sm">Valor Total:</p>
                <p className="text-zinc-400 font-semibold line-through decoration-rose-400/50 text-lg mb-2">R$ 1.646,00</p>
              </div>

              <div className="relative z-10 mt-3 pt-4 border-t border-rose-50">
                <p className="text-[11px] font-black text-rose-500 uppercase tracking-[0.2em] mb-1">Seu Preço Parcelado</p>
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl font-bold text-zinc-900 mt-1">12x R$</span>
                  <span className="text-6xl font-black text-zinc-900 tracking-tighter">49</span>
                  <span className="text-2xl font-bold text-zinc-900 mt-1">,90</span>
                </div>
              </div>

              <div className="relative z-10 mt-5 bg-emerald-50 -mx-5 -mb-5 p-4 border-t border-emerald-100/50">
                <p className="text-emerald-700 font-medium">
                  ou <strong className="font-black text-emerald-800 text-xl">R$ 497,00</strong> à vista
                </p>
                <div className="flex items-center justify-center gap-1.5 mt-1.5">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                    Frete Grátis Hoje
                  </p>
                </div>
              </div>
            </div>
          </div>

          <a href={buyLink} className="flex flex-col items-center justify-center gap-1 w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold text-xl py-4 rounded-2xl shadow-xl shadow-rose-500/20 active:scale-[0.98] transition-all relative z-10">
            <div className="flex items-center gap-2">Adquirir Agora <ChevronRight size={20} /></div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-rose-200">Aparelho + 3 Brindes Selecionados</span>
          </a>
          <p className="text-[10px] text-zinc-400 font-medium mt-4 flex items-center justify-center gap-1 relative z-10">
            <ShieldCheck size={12} /> Pagamento 100% Seguro
          </p>
        </div>

        {/* FAQ Section */}
        <div className="pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-center mb-8 text-zinc-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-3">
            {[
              { q: 'Tem eficácia comprovada?', a: 'Sim, a tecnologia 3 em 1 (LED, Ultrassom e Radiofrequência) é testada e aprovada clinicamente para uso domiciliar.' },
              { q: 'Por quanto tempo usar diariamente?', a: 'Sessões de 15 minutos, de 3 a 5 vezes por semana por região anatômica.' },
              { q: 'É seguro para todos tons de pele?', a: 'Sim, projetado para tratar 100% dos tipos de pele com segurança e sem dor.' },
              { q: 'Instruções de uso estão inclusas?', a: 'Sim, você recebe um manual detalhado e vídeos de uso passo a passo.' },
              { q: 'Mata células ou só reduz?', a: 'As ondas rompem depósitos resistentes permitindo a metabolização e eliminação natural.' },
              { q: 'Uso na gravidez?', a: 'Não aplicar no abdômen durante a gravidez. Braços e pernas requerem liberação médica prévia.' },
              { q: 'Funciona para flacidez de emagrecimento?', a: 'Ao reativar as fibras de colágeno, promove lifting tecidual progressivo.' },
              { q: 'Resultados duram?', a: 'A manutenção 2x ao mês após atingir o objetivo sustenta a firmeza por tempo indeterminado.' }
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-2xl border border-zinc-100 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="font-semibold text-zinc-800 text-sm p-5 cursor-pointer flex justify-between items-center group-open:bg-zinc-50 transition-colors select-none">
                  <span className="pr-4">{faq.q}</span>
                  <ChevronRight size={18} className="text-rose-400 shrink-0 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className="p-5 pt-0 text-zinc-500 text-sm leading-relaxed bg-zinc-50">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
