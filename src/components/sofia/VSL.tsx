import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UserAnswers } from './SofiaFunnel';
import { ChevronRight } from 'lucide-react';

interface Props {
  answers: UserAnswers;
}

export default function VSL({ answers }: Props) {
  const [showVideo, setShowVideo] = useState(false);
  const [showPitch, setShowPitch] = useState(false);

  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    s.async = true;
    document.head.appendChild(s);
  }, []);

  const convertAiCode = `
<div id="ifr_6a0447a0f6adc3acd7e11a6e_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;">
  <div style="position: relative; padding: 133.33333333333331% 0 0 0;" id="ifr_6a0447a0f6adc3acd7e11a6e_aspect">
    <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_6a0447a0f6adc3acd7e11a6e" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/6a0447a0f6adc3acd7e11a6e/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe>
  </div>
</div>`;

  if (!showPitch && !showVideo) {
    return (
      <div className="bg-zinc-950 min-h-screen p-5 flex flex-col items-center justify-center font-sans">
        <motion.div
           initial={{ y: 20, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
           className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] shadow-2xl text-center space-y-6"
        >
          <div className="bg-red-950/40 text-red-500 font-bold px-4 py-2 rounded-full border border-red-900/50 inline-block text-sm tracking-widest uppercase">
            Resultado Listo
          </div>

          <h1 className="text-3xl font-black text-white leading-tight uppercase">
            Tenemos tu <span className="text-red-500">resultado</span>
          </h1>

          <p className="text-lg text-zinc-300 font-medium leading-relaxed bg-zinc-800/50 p-6 rounded-2xl border border-zinc-700/50">
            Estás en el grupo de los que <br/><strong className="text-white text-xl">"saben lo básico"</strong><br/> 
            <span className="text-red-400">pero las mujeres no quieren lo básico...</span>
          </p>

          <p className="text-zinc-400 font-medium">
            Si quieres dejar de ser solo "uno más" y convertirte en ese hombre que queda en la memoria, tengo una invitación para hacerte.
          </p>

          <div className="pt-4">
            <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-4">Haz clic aquí abajo si quieres subir de nivel 👇</p>
            <button
              onClick={() => { setShowPitch(true); window.scrollTo(0,0); }}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              Quiero subir de nivel 🔥
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showPitch && !showVideo) {
    return (
      <div className="bg-zinc-950 min-h-screen pt-8 pb-20 px-5 font-sans">
        <div className="max-w-md mx-auto space-y-8">
          
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem] shadow-2xl space-y-6">
            <h2 className="text-2xl font-bold text-white text-center leading-tight">
              🎓 Esta es <span className="text-red-500">Sofia</span>. La mujer que te va a ayudar a subir de nivel y convertirte en inolvidable
            </h2>

            <img 
              src="https://media.inlead.cloud/uploads/37232/2026-02-26/lg-ydeVx-group-41.png" 
              alt="Sofia" 
              className="w-full rounded-[1.5rem] shadow-xl border border-zinc-800"
            />

            <ul className="space-y-4 text-center">
              <li className="bg-zinc-800 text-zinc-300 font-semibold py-3 px-4 rounded-xl border border-zinc-700 text-sm">
                Licenciada en Psicología
              </li>
              <li className="bg-zinc-800 text-zinc-300 font-semibold py-3 px-4 rounded-xl border border-zinc-700 text-sm">
                Posgrado en Sexología
              </li>
              <li className="bg-zinc-800 text-zinc-300 font-semibold py-3 px-4 rounded-xl border border-zinc-700 text-sm">
                Educadora Sexual
              </li>
            </ul>

            <p className="text-zinc-400 font-medium text-center leading-relaxed bg-zinc-950 p-5 rounded-2xl border border-zinc-800">
              <strong className="text-white text-lg">Más de 10 mil hombres</strong> ya pasaron por sus enseñanzas y hoy conocen todos los misterios del universo femenino y saben cómo hacer llegar al orgasmo a cualquier mujer.
            </p>

            <div className="text-center font-bold text-lg text-rose-100 italic">
              Ella no enseña teoría.<br/>
              <span className="text-red-500 not-italic uppercase tracking-widest text-xl block mt-2">Te muestra en la práctica lo que funciona.</span>
            </div>
            
            <img 
              src="https://media.inlead.cloud/uploads/37232/2026-02-26/lg-5DSnh-lg-wmwuj-capa-bonus-1-1-1.png" 
              alt="Book cover" 
              className="w-full rounded-[1.5rem] shadow-xl border border-zinc-800 mt-6"
            />

            <div className="py-6 space-y-4">
              <p className="text-center text-zinc-400 font-semibold">
                Puedes seguir creyendo que sabes suficiente...
              </p>
              <p className="text-center text-white font-bold text-lg leading-snug">
                O puedes aprender con quien realmente entiende el tema y ser <span className="text-red-500">recordado por el resto de su vida.</span>
              </p>
            </div>

            <div className="pt-2">
              <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 text-center">👉 Haz clic abajo y comienza tu camino con quien domina el placer femenino de verdad</p>
              <button
                onClick={() => { setShowVideo(true); window.scrollTo(0,0); }}
                className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                Continuar 🔥 <ChevronRight size={20} />
              </button>
            </div>

          </div>

        </div>
      </div>
    );
  }

  // Final Video Step
  return (
    <div className="bg-zinc-950 min-h-screen pt-8 pb-32 px-5 font-sans">
      <div className="max-w-md mx-auto space-y-8">
        
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight uppercase">
            ¡Mira ahora una lección exclusiva de mi curso,<br/><span className="text-red-500">completamente gratis!</span> y aprende 👇 👇
          </h1>
        </div>

        <div 
          className="rounded-[2rem] overflow-hidden border border-zinc-800 shadow-[0_0_30px_rgba(220,38,38,0.15)] bg-black" 
          dangerouslySetInnerHTML={{ __html: convertAiCode }} 
        />

        <div className="text-center text-zinc-500 font-medium text-sm mt-8">
          Asegúrate de tener el audio activado.
        </div>

      </div>
    </div>
  );
}
