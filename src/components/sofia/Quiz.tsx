import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAnswers } from './SofiaFunnel';

interface Props {
  onComplete: (answers: UserAnswers) => void;
}

const questions = [
  {
    id: 'q1',
    title: '¿Alguna vez lograste hacer que una mujer tuviera un orgasmo?',
    gif: 'https://porngipfy.com/wp-content/uploads/2015/12/squirting-from-gif-it-to-me-now.gif',
    options: [
      { id: '1', label: 'Sí!', emoji: '🔥' },
      { id: '2', label: 'No sé decir', emoji: '🤔' },
      { id: '3', label: 'Ya sí, pero quiero consejos', emoji: '😑' },
      { id: '4', label: 'Nunca', emoji: '😞' },
    ]
  },
  {
    id: 'q2',
    title: '¿Cuál es tu mayor duda sobre sexo?',
    options: [
      { id: '1', label: 'Cómo hacer que una mujer llegue al orgasmo', emoji: '💧' },
      { id: '2', label: 'No sé decir', emoji: '🫦' },
      { id: '3', label: 'Cómo darle más picante a la relación', emoji: '🩷' },
      { id: '4', label: 'Consejos para salir de la rutina', emoji: '📚' },
    ]
  },
  {
    id: 'q3',
    title: '¿Con mujeres de qué edad sueles relacionarte?',
    options: [
      { id: '1', label: '18 - 30', img: 'https://media.inlead.cloud/uploads/37232/2026-02-26/md-Wt0BK-md-s42cg-leonardo-kino-xl-ultrarealistic-portrait-of-a-young-woman-aged-2.jpg' },
      { id: '2', label: '31 - 45', img: 'https://media.inlead.cloud/uploads/37232/2026-02-26/md-0vKSw-md-hqfmn-leonardo-kino-xl-ultrarealistic-portrait-of-a-woman-aged-3145-2.jpg' },
      { id: '3', label: '46 - 60', img: 'https://media.inlead.cloud/uploads/37232/2026-02-26/md-sV3Xp-md-vutsr-leonardo-kino-xl-ultrarealistic-portrait-of-a-woman-aged-4660-1.jpg' },
      { id: '4', label: '+60', img: 'https://media.inlead.cloud/uploads/37232/2026-02-26/md-n6qlr-md-3phdl-leonardo-kino-xl-ultrarealistic-portrait-of-a-stunning-and-ele-3.jpg' },
    ]
  },
  {
    id: 'q4',
    title: '¿Cómo es tu desempeño en la cama?',
    options: [
      { id: '1', label: 'Sé que la hago llegar al orgasmo y querer más', emoji: '🔥' },
      { id: '2', label: 'Quiero aprender a dejar a cualquier mujer adicta a mí', emoji: '👀' },
      { id: '3', label: 'Tengo miedo de fallar o que ella finja que llegó al orgasmo', emoji: '😨' },
      { id: '4', label: 'Ya sé lo básico, pero quiero ser el mejor sexo de su vida', emoji: '😜' },
    ]
  },
  {
    id: 'q5',
    title: '¿Cuánto tiempo normalmente dedicas a las preliminares?',
    gif: 'https://egl.phncdn.com/gif/38246111.gif?validfrom=1762923600&validto=4891363200&hash=9DwtdBkDTGSHFxLBEvX4WeDYcLQ%3D',
    options: [
      { id: '1', label: 'Menos de 5 minutos', emoji: '🤩' },
      { id: '2', label: 'Unos 10, 15 minutos', emoji: '😜' },
      { id: '3', label: 'Suelo ir directo a la acción', emoji: '🤪' },
      { id: '4', label: 'Hasta que ella pida más e implore por la penetración', emoji: '👿' },
    ]
  },
  {
    id: 'q6',
    title: '¿Sabes exactamente cómo estimular el clítoris? Ritmo, presión y variación',
    options: [
      { id: '1', label: 'Tengo una idea más o menos', emoji: '😎' },
      { id: '2', label: 'Ya practiqué, pero no estoy seguro de si lo hago bien', emoji: '😋' },
      { id: '3', label: 'Lo conozco mejor que mi propia mano', emoji: '🤩' },
      { id: '4', label: 'Nunca le atino al clítoris', emoji: '🤓' },
    ]
  },
  {
    id: 'q7',
    title: '¿Ella ya te imploró que repitieras algo que le hiciste en la cama?',
    options: [
      { id: '1', label: 'Nunca', emoji: '😯' },
      { id: '2', label: 'Ya me elogió, pero no imploró', emoji: '🤔' },
      { id: '3', label: 'Ya escuché "por favor, haz eso de nuevo" con los ojos cerrados de placer', emoji: '😎' },
      { id: '4', label: 'No, pero quiero saber cómo!', emoji: '🤩' },
    ]
  },
  {
    id: 'q8',
    title: 'Cuando terminas, ¿cómo reacciona ella?',
    gif: 'https://egl.phncdn.com/gif/44344091.gif?validfrom=1762923600&validto=4891363200&hash=19cSrXo%2FVDbnMQ1oSIAHDgrXLZY%3D',
    options: [
      { id: '1', label: 'Se da vuelta y se queda dormida rápido', emoji: '😧' },
      { id: '2', label: 'Va directo a la ducha, como si nada hubiera pasado', emoji: '😞' },
      { id: '3', label: 'Sonríe, pero se nota que no fue gran cosa', emoji: '😄' },
      { id: '4', label: 'Se queda sin aliento, pegada a mí, como si quisiera otra ronda', emoji: '😎' },
    ]
  }
];

export default function Quiz({ onComplete }: Props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSelect = (questionId: string, answerLabel: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerLabel }));
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
        window.scrollTo(0, 0);
      }, 300);
    } else {
      setIsAnalyzing(true);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    if (isAnalyzing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => onComplete(answers), 500);
            return 100;
          }
          return prev + 15;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [isAnalyzing, answers, onComplete]);

  if (isAnalyzing) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Analizando tu perfil...</h2>
        <div className="w-full max-w-sm bg-zinc-800 rounded-full h-4 mb-4 border border-zinc-700 overflow-hidden">
          <motion.div 
            className="bg-red-600 h-4 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <p className="text-zinc-400 font-medium">{Math.min(progress, 100)}% Completado</p>
      </div>
    );
  }

  const q = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col p-5">
      <div className="w-full max-w-md mx-auto mb-6">
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <div 
            className="bg-red-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md mx-auto flex-1 flex flex-col"
        >
          <div className="bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-[2rem] shadow-xl flex-1 flex flex-col">
            <h2 className="text-2xl sm:text-3xl font-black text-white text-center mb-6 leading-tight">
              {q.title}
            </h2>

            {q.gif && (
              <div className="mb-6 rounded-2xl overflow-hidden border border-zinc-800 shadow-md">
                <img src={q.gif} alt="Question ref" className="w-full h-auto object-cover opacity-80" />
              </div>
            )}

            <div className={`grid gap-3 w-full ${q.options.some(o => o.img) ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {q.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(q.id, opt.label)}
                  className={`
                    w-full flex ${opt.img ? 'flex-col overflow-hidden text-center' : 'items-center text-left'} 
                    gap-4 p-4 rounded-2xl border transition-all duration-200 active:scale-[0.98]
                    ${answers[q.id] === opt.label 
                      ? 'bg-red-950 border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.2)]' 
                      : 'bg-zinc-800 border-zinc-700 hover:bg-zinc-700'
                    }
                  `}
                >
                  {opt.img && (
                    <img src={opt.img} alt={opt.label} className="w-full h-32 object-cover rounded-xl mb-2 grayscale-[0.3]" />
                  )}
                  {opt.emoji && <span className="text-3xl shrink-0">{opt.emoji}</span>}
                  <span className="font-semibold text-white sm:text-lg flex-1">
                    {opt.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
