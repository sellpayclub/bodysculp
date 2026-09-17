import { UserData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Check, AlertTriangle, Lock } from 'lucide-react';
import { cn } from '../lib/utils';

interface DiagnosticProps {
  userData: UserData;
  onContinue: () => void;
}

export default function Diagnostic({ userData, onContinue }: DiagnosticProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCommitment, setShowCommitment] = useState(false);
  const [loadingImgIdx, setLoadingImgIdx] = useState(0);

  const loadingImages = [
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado%20analio.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultad1.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultadoo.png"
  ];

  useEffect(() => {
    const startTime = Date.now();
    const duration = 8000;
    let animationFrameId: number;
    let isRunning = true;
    
    const updateProgress = () => {
      if (!isRunning) return;
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setLoadingProgress(newProgress);
      if (newProgress < 100) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateProgress);
    
    const carouselTimer = setInterval(() => {
      setLoadingImgIdx(i => (i + 1) % loadingImages.length);
    }, 2500);
    
    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      clearInterval(carouselTimer);
    };
  }, []);

  // Calculate IMC
  let heightM = userData.height / 100; // cm to m
  let weightKg = userData.weight;
  
  // if user chose lb, naive convert
  if (userData.weightUnit === 'lb') {
    weightKg = userData.weight * 0.453592;
  }
  
  const imc = weightKg / (heightM * heightM);
  const imcValue = imc.toFixed(1);
  
  let label = 'Normal';
  let percentage = 25;
  if (imc < 18.5) { label = 'Debajo de peso'; percentage = 10; }
  else if (imc < 25) { label = 'Normal'; percentage = 30; }
  else if (imc < 30) { label = 'Sobrepeso'; percentage = 65; }
  else { label = 'Obesidad'; percentage = 90; }

  if (loadingProgress < 100) {
    return (
      <div className="p-6 max-w-lg mx-auto w-full min-h-screen flex items-center justify-center">
        <div className="text-center w-full space-y-6">
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-16 h-16 border-4 border-pink-200 border-t-pink-600 rounded-full mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">Espera mientras preparamos tu Protocolo de La Gelatina...</h2>
          <p className="text-gray-500 animate-pulse font-medium">Analizando tus respuestas...</p>
          
          <div className="w-full bg-gray-200 h-6 rounded-full overflow-hidden shadow-inner relative">
            <div 
              className="bg-pink-500 h-full transition-all duration-100 flex items-center justify-end pr-2 text-white font-bold text-xs"
              style={{ width: `${loadingProgress}%` }}
            >
              {loadingProgress}%
            </div>
          </div>
          
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-md border-4 border-white bg-gray-50 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={loadingImgIdx}
                src={loadingImages[loadingImgIdx]}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 w-full h-full object-contain"
                alt="Transformaciones reales"
              />
            </AnimatePresence>
          </div>
          <p className="text-sm text-gray-500 italic mt-2">Transformaciones reales con el truco de la gelatina. Tú también puedes lograrlo.</p>
        </div>
      </div>
    );
  }

  if (showCommitment) {
    return (
      <div className="p-6 pb-24 max-w-lg mx-auto w-full min-h-screen space-y-8 animate-in fade-in zoom-in duration-500">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-yellow-600" />
          </div>
          <h2 className="text-2xl font-black text-gray-800 uppercase leading-tight">
            <span className="text-pink-600">{userData.name || 'Amiga'}</span>, ANTES DE LIBERAR TU PROTOCOLO NECESITO SABER UNA COSA:
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            En la próxima pantalla vas a ver el video que las farmacéuticas intentaron borrar 3 veces.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Ahí vas a descubrir exactamente cuáles son los 3 ingredientes que apagan el hambre, derriten la grasa del abdomen y reactivan tu GLP-1 y GIP..
            Los mismos que el Mounjaro activa con una inyección de $1.500.
          </p>
          
          <div className="bg-pink-50 border-2 border-pink-200 p-6 rounded-2xl mt-8">
            <h3 className="font-bold text-xl text-pink-800 mb-6">¿Te comprometes a aplicar el protocolo de la Gelatina Bariátrica Prohibida por al menos 7 días?</h3>
            <div className="space-y-4">
              <button 
                onClick={onContinue} 
                className="w-full bg-pink-600 text-white font-black p-4 rounded-xl flex items-center gap-3 hover:bg-pink-700 transition transform hover:scale-[1.02] shadow-[0_4px_0_0_rgba(190,24,93,1)] active:shadow-none active:translate-y-1"
              >
                <span className="text-2xl">😍</span> 
                <span className="text-left leading-tight text-lg">¡Sí, me comprometo!<br/><span className="text-sm font-semibold opacity-90">Quiero ver los 3 ingredientes</span></span>
              </button>
              
              <button 
                onClick={onContinue} 
                className="w-full bg-orange-500 text-white font-black p-4 rounded-xl flex items-center gap-3 hover:bg-orange-600 transition transform hover:scale-[1.02] shadow-[0_4px_0_0_rgba(194,65,12,1)] active:shadow-none active:translate-y-1"
              >
                <span className="text-2xl">😎</span> 
                <span className="text-left leading-tight text-lg">¡Empiezo hoy mismo!<br/><span className="text-sm font-semibold opacity-90">Ya no aguanto más así</span></span>
              </button>

              <button 
                onClick={onContinue} 
                className="w-full bg-blue-500 text-white font-black p-4 rounded-xl flex items-center gap-3 hover:bg-blue-600 transition transform hover:scale-[1.02] shadow-[0_4px_0_0_rgba(29,78,216,1)] active:shadow-none active:translate-y-1"
              >
                <span className="text-2xl">🤔</span> 
                <span className="text-left leading-tight text-lg">Necesito ver primero<br/><span className="text-sm font-semibold opacity-90">si funciona para mí</span></span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado%20pv.png" className="w-full max-w-sm rounded-xl shadow-md border" alt="Resultados" />
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-8">
          <div className="flex gap-4 items-center mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-xl">C</div>
            <div>
              <h3 className="font-bold">Carolina R.</h3>
              <p className="text-xs text-gray-500">47 años Ciudad de México</p>
            </div>
          </div>
          <p className="text-gray-700 italic">"Tenía los mismos 3 bloqueadores que tú, {userData.name || 'amiga'}. En 5 semanas perdí 12 kilos sin dejar de comer lo que quería."</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 pb-24 max-w-lg mx-auto w-full min-h-screen space-y-6 animate-in slide-in-from-bottom-8 duration-500">
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
        <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
        <h2 className="text-2xl font-black text-red-700 uppercase leading-tight mb-2">
          {userData.name || 'Amiga'}, tus respuestas revelan algo urgente:
        </h2>
        <p className="text-red-900 font-medium text-lg">
          Tu cuerpo está acumulando grasa hormonal y si no actúas hoy, va a empeorar.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-6 shadow-sm">
        <h3 className="font-bold text-gray-500 text-center mb-2 uppercase text-sm tracking-wider">Tu IMC: {label}</h3>
        <p className="text-center text-4xl font-black text-gray-800 mb-6">Tu IMC es {imcValue}</p>
        
        <div className="relative pt-8 pb-4">
          <div className="h-4 bg-gradient-to-r from-blue-400 via-green-400 to-red-500 rounded-full w-full" />
          <div 
            className="absolute top-2 -translate-x-1/2 flex flex-col items-center"
            style={{ left: `${Math.min(percentage, 100)}%` }}
          >
            <div className="bg-gray-800 text-white text-xs font-bold px-2 py-1 rounded shadow">¡Estás Aqui!</div>
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-gray-800"></div>
          </div>
          <div className="flex justify-between text-[10px] sm:text-xs text-gray-500 font-medium mt-2">
            <span>Bajo peso</span>
            <span>Normal</span>
            <span className="font-bold text-gray-800 underline">Sobrepeso</span>
            <span>Obesidad</span>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center mt-6">
        <img src="https://media.inlead.cloud/uploads/46846/2026-03-12/lg-wske3-untitled-4.png" alt="Con la Gelatina Bariátrica Prohibida para tu caso" className="w-full max-w-xs mb-4 drop-shadow-sm mix-blend-multiply" />
      </div>
      
      <div className="flex justify-center mt-2">
        <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado%20analio.png" alt="Análisis" className="w-full rounded-2xl shadow-sm border" />
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="font-black text-xl text-gray-800 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-yellow-500" /> Hay 3 cosas frenando tu cuerpo ahora mismo:
        </h3>
        <div className="bg-white rounded-2xl shadow-sm border p-5 space-y-4">
          <p className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span> Tu GLP-1 y GIP están apagados, comes poco y subes de peso igual.</p>
          <p className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span> Tu metabolismo está operando al 30% de su capacidad</p>
          <p className="flex items-start gap-3"><span className="text-red-500 font-bold">❌</span> Tu cerebro no sabe cuándo parar, tienes hambre aunque acabes de comer.</p>
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center space-y-4 mt-8">
        <span className="text-4xl">🌿</span>
        <h3 className="text-xl font-black text-green-800">No es tu culpa, es biológico</h3>
        <p className="text-green-900 font-medium">Y se resuelve en 7 segundos cada mañana.</p>
        <p className="text-green-800 text-sm">Sin cirugía. Sin inyección. Comiendo lo que quieras.</p>
        <p className="font-bold text-lg text-gray-800 pt-2 border-t border-green-200 mt-4">Con la Gelatina Bariátrica Prohibida para tu caso:</p>
      </div>

      <button
        onClick={() => { window.scrollTo({ top: 0 }); setShowCommitment(true); }}
        className="mt-8 w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-5 rounded-xl shadow-xl transition-all text-xl animate-bounce"
      >
        CONTINUAR
      </button>
    </div>
  );
}
