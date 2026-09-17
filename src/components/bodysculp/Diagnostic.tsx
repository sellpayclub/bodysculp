import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAnswers } from './BodySculpFunnel';

interface Props {
  answers: UserAnswers;
  onComplete: () => void;
}

const statusMessages = [
  "Analisando seu tipo de corpo...",
  "Verificando níveis hormonais declarados...",
  "Calculando metabolismo previsto...",
  "Buscando histórico de sucesso para seu perfil...",
  "Preparando plano de escultura corporal..."
];

export default function Diagnostic({ onComplete, answers }: Props) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const personalizedStatusMessages = [
    `Olá, ${answers.name || 'amiga'}! Analisando seu tipo de corpo...`,
    `Verificando impacto da ${answers.estrogen || 'situação'} nos hormônios...`,
    "Calculando metabolismo previsto...",
    `Buscando histórico de sucesso para gordura do tipo ${answers.bellyType || 'visceral'}...`,
    "Preparando plano de escultura corporal..."
  ];

  useEffect(() => {
    // 6 seconds total -> 60ms per step
    const interval = setInterval(() => {
      setLoadingProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return p + 1;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const msgInterval = setInterval(() => {
      setStatusIndex(prev => Math.min(prev + 1, personalizedStatusMessages.length - 1));
    }, 1200);
    return () => clearInterval(msgInterval);
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto w-full min-h-screen flex flex-col items-center justify-center bg-pink-50">
      <div className="text-center w-full space-y-10">
        
        <div className="relative w-48 h-48 mx-auto">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            className="absolute inset-0 w-full h-full rounded-full border-[12px] border-pink-100"
            style={{ borderTopColor: '#ec4899', borderRightColor: '#ec4899' }}
          />
          <div className="absolute inset-0 flex items-center justify-center flex-col shadow-inner rounded-full bg-white bg-opacity-50 backdrop-blur-sm m-4">
            <span className="text-4xl font-black text-pink-600 drop-shadow-sm">{loadingProgress}%</span>
          </div>
        </div>

        <div className="h-16">
          <AnimatePresence mode="wait">
            <motion.p
              key={statusIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-gray-700 font-bold text-lg"
            >
              {personalizedStatusMessages[statusIndex]}
            </motion.p>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
