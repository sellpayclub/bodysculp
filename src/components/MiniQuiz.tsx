import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserData } from '../types';
import { ChevronRight } from 'lucide-react';

export default function MiniQuiz({ userData, onComplete }: { userData: UserData; onComplete: () => void }) {
  const [step, setStep] = useState(0);

  if (step === 0) {
    return (
      <div className="p-6 max-w-lg mx-auto w-full min-h-screen flex flex-col justify-center space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-gray-800 leading-tight mb-2">¿Qué resultado quieres lograr con la gelatina?</h2>
          <p className="text-gray-500 font-medium">Tu respuesta define los ingredientes exactos de tu protocolo</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'En forma', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-upH6v-bikini-rosa-2.webp' },
            { label: 'Natural', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-glZSH-bikini-rosa-1.webp' },
            { label: 'Con Curvas', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-WLuOs-bikini-vinho-3.webp' },
            { label: 'Definido', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-QYOPf-bikini-coral-4.webp' }
          ].map(opt => (
            <button
              key={opt.label}
              onClick={() => { setStep(1); window.scrollTo({top:0}); }}
              className="bg-white border-2 border-gray-200 hover:border-pink-500 hover:bg-pink-50 p-4 rounded-2xl font-bold text-gray-700 transition shadow-sm aspect-[4/5] flex flex-col items-center justify-between text-lg"
            >
              <div className="w-full h-full relative overflow-hidden rounded-xl mb-3 flex-1">
                <img src={opt.img} alt={opt.label} className="w-full h-full object-cover rounded-xl" />
              </div>
              <span className="shrink-0">{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 max-w-lg mx-auto w-full min-h-screen space-y-8 mt-8 animate-in fade-in zoom-in duration-500">
      <div className="text-center space-y-4">
        <span className="text-6xl">🎯</span>
        <h2 className="text-2xl font-black text-gray-800 leading-tight">
          {userData.name || 'Amiga'}, ¿te gustaría perder entre 14 y 20 kilos, o incluso más en 3 semanas?
        </h2>
      </div>

      <div className="bg-red-50 p-6 rounded-2xl space-y-3 border border-red-100">
        <p className="flex items-center gap-3 text-red-800 font-bold"><span className="text-red-500">❌</span> Sin dietas estrictas</p>
        <p className="flex items-center gap-3 text-red-800 font-bold"><span className="text-red-500">❌</span> Sin gimnasio</p>
        <p className="flex items-center gap-3 text-red-800 font-bold"><span className="text-red-500">❌</span> Sin pasar hambre</p>
      </div>

      <div className="space-y-6">
        <p className="text-center text-gray-600 font-medium">📸 Mira lo que ya está pasando con mujeres que activaron el protocolo:</p>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">
          <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/rresultado%20pv.webp" alt="Mariana" className="w-full rounded-lg object-contain h-auto" />
          <div className="space-y-2">
            <p className="font-bold text-gray-800 italic">"¡Increíble... Perdí 7kg en 3 semanas!"</p>
            <p className="text-xs text-gray-500">— Mariana, 41 — Ciudad de México</p>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border space-y-4">
          <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultadp%20pv%204.webp" alt="Lucia" className="w-full rounded-lg object-contain h-auto" />
          <div className="space-y-2">
            <p className="font-bold text-gray-800 italic">"En menos de un mes, mi ropa ya me quedaba grande."</p>
            <p className="text-xs text-gray-500">— Lucía, 36 — Bogotá</p>
          </div>
        </div>
      </div>

      <div className="bg-pink-50 p-6 rounded-3xl text-center space-y-4 border border-pink-200">
        <p className="text-pink-900 font-medium leading-relaxed">Según tus respuestas, tu perfil es ideal para activar el protocolo hormonal de la Gelatina.</p>
        <p className="text-pink-900 font-bold leading-relaxed">Y todo comienza con un simple paso de apenas 7 segundos cada mañana.</p>
      </div>

      <p className="text-center font-bold text-gray-800 text-lg">👇 Este resultado es totalmente posible para ti.</p>

      <button
        onClick={() => { window.scrollTo({top:0}); onComplete(); }}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-black text-xl py-6 rounded-xl shadow-xl transition-all flex items-center justify-center gap-2 transform hover:scale-105"
      >
        🔥 SÍ, quiero empezar ahora
      </button>
    </div>
  );
}
