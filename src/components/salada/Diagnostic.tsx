import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onComplete: () => void;
}

const images = [
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/6.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/7.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/9.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/14.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/10.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/11/11.webp",
  "https://controle.nutriliacastro.com/wp-content/uploads/2025/10/Design-sem-nome-9-1.png"
];

export default function Diagnostic({ onComplete }: Props) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // 8 seconds total, 100 steps -> 80ms per step
    const interval = setInterval(() => {
      setLoadingProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    // change image every ~1.2 seconds roughly to cycle through them
    const imgInterval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length);
    }, 1200);
    return () => clearInterval(imgInterval);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto w-full min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="text-center w-full space-y-8">
        
        <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-8 border-white shadow-xl bg-emerald-50">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImageIndex}
              src={images[currentImageIndex]} 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Salada" 
            />
          </AnimatePresence>
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
            style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(16, 185, 129, 0.1) 80%, rgba(16, 185, 129, 0.4) 100%)' }}
          />
        </div>

        <h2 className="text-2xl font-black text-gray-800 px-4 leading-tight uppercase">
          Estamos montando sua seleção ideal de salada baseada nas suas respostas... <span className="text-3xl inline-block mt-2">🥗</span>
        </h2>
        
        <p className="text-6xl font-black text-emerald-600 drop-shadow-sm">{loadingProgress}%</p>
        
        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden shadow-inner relative max-w-xs mx-auto">
          <div 
            className="bg-emerald-500 h-full transition-all duration-100 ease-out relative overflow-hidden"
            style={{ width: `${loadingProgress}%` }}
          >
            <motion.div 
              animate={{ x: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
