import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search } from 'lucide-react';

export default function LoadingProtocol({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [testimonyIndex, setTestimonyIndex] = useState(0);

  const testimonials = [
    { name: "Ana Torres", text: "El protocolo fue como un renacimiento para mí. Me siento más joven, más ligera y feliz con mi cuerpo." },
    { name: "Maria Gutiérrez", text: "Este protocolo con gelatina lo cambió todo para mí. En pocas semanas ya vi cómo mi abdomen desinflaba y la ropa volvió a quedarme." },
    { name: "Ana Torres", text: "El protocolo fue como un renacimiento para mí. Me siento más joven, más ligera y feliz con mi cuerpo." },
    { name: "Maria Gutiérrez", text: "Este protocolo con gelatina lo cambió todo para mí. En pocas semanas ya vi cómo mi abdomen desinflaba y la ropa volvió a quedarme." }
  ];

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress(p => {
          if (p >= 100) return 100;
          return p + Math.floor(Math.random() * 8) + 2;
        });
      }, 400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(onComplete, 1000);
    }
  }, [progress, onComplete]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonyIndex(i => (i + 1) % testimonials.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-6 max-w-lg mx-auto w-full min-h-screen flex flex-col justify-center items-center space-y-8 bg-gray-50">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-black text-gray-800">Creando tu Protocolo De la Gelatina Personalizado...</h2>
        <p className="text-5xl font-black text-pink-600 animate-pulse">{progress}%</p>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-xl flex items-center gap-3 w-full shadow-sm">
        <Search className="w-6 h-6 animate-spin-slow" />
        <p className="font-medium text-sm">Estamos mapeando tu perfil de acuerdo con todas tus respuestas...</p>
      </div>

      <div className="w-full relative h-[160px] overflow-hidden mt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={testimonyIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 w-full"
          >
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2">{testimonials[testimonyIndex].name}</h3>
              <p className="text-gray-600 italic text-sm">"{testimonials[testimonyIndex].text}"</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
