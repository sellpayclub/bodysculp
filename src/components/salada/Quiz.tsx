import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  onComplete: () => void;
}

export default function Quiz({ onComplete }: Props) {
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const totalSteps = 5;
  const progress = Math.round((step / totalSteps) * 100);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSelectedOptions([]); // Clear multi-choices for next step
    if (step < totalSteps - 1) {
      setStep(s => s + 1);
    } else {
      onComplete();
    }
  };

  const toggleOption = (opt: string) => {
    setSelectedOptions(prev => 
      prev.includes(opt) ? prev.filter(o => o !== opt) : [...prev, opt]
    );
  };

  const Title = ({ children, subtitle, key }: { children: React.ReactNode, subtitle?: string, key?: string }) => (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-black text-gray-900 leading-tight mb-2">{children}</h2>
      {subtitle && <p className="text-gray-500 font-semibold text-sm">{subtitle}</p>}
    </div>
  );

  const SingleChoiceBtn = ({ children, key }: { children: React.ReactNode, key?: string }) => (
    <button
      onClick={nextStep}
      className="w-full bg-white border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 p-5 rounded-3xl font-bold text-gray-700 transition-all text-left flex items-center justify-between shadow-sm active:scale-[0.98] group"
    >
      <span className="text-lg leading-tight flex items-center gap-4">{children}</span>
      <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-emerald-500 flex items-center justify-center shrink-0">
        <div className="w-3 h-3 rounded-full bg-transparent group-hover:bg-emerald-500 transition-colors" />
      </div>
    </button>
  );

  const MultiChoiceBtn = ({ opt, children, key }: { opt: string, children: React.ReactNode, key?: string }) => {
    const isSelected = selectedOptions.includes(opt);
    return (
      <button
        onClick={() => toggleOption(opt)}
        className={`w-full border-2 p-5 rounded-3xl font-bold transition-all text-left flex items-center justify-between shadow-sm active:scale-[0.98] ${
          isSelected 
            ? 'bg-emerald-50 border-emerald-500 text-emerald-800' 
            : 'bg-white border-gray-200 text-gray-700 hover:border-emerald-300'
        }`}
      >
        <span className="text-lg leading-tight flex items-center gap-4">{children}</span>
        <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-colors ${
          isSelected ? 'border-emerald-500 bg-emerald-500' : 'border-gray-300 bg-white'
        }`}>
          {isSelected && (
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
      </button>
    );
  };

  const ContinueBtn = () => (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      onClick={nextStep}
      disabled={selectedOptions.length === 0}
      className={`w-full mt-6 py-5 rounded-2xl font-black text-xl tracking-wide uppercase transition-all ${
        selectedOptions.length > 0 
          ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-[0_6px_0_0_#059669] hover:translate-y-[2px] active:scale-[0.98] active:translate-y-[6px] active:shadow-none' 
          : 'bg-gray-200 text-gray-400 cursor-not-allowed border-none shadow-none'
      }`}
    >
      Continuar &raquo;
    </motion.button>
  );

  return (
    <div className="max-w-md mx-auto w-full min-h-screen bg-slate-50 flex flex-col relative text-gray-900 font-sans">
      <div className="bg-white px-6 py-4 shadow-sm sticky top-0 z-20 flex flex-col gap-4 border-b border-gray-200">
        <div className="flex justify-between items-center text-sm font-black text-gray-400 uppercase tracking-widest">
          <span>Início</span>
          <span className="text-emerald-500">Etapa {step + 1}/{totalSteps}</span>
          <span>Fim</span>
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden shadow-inner relative">
          <div className="bg-emerald-500 h-full transition-all duration-500 ease-out absolute left-0 top-0 bottom-0" style={{ width: `${progress}%` }}>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-white/20" style={{ backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent)', backgroundSize: '1rem 1rem' }} />
          </div>
        </div>
      </div>

      <div className="p-6 pt-10 pb-24 flex-1">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div key="st0" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}  className="space-y-4">
              <Title subtitle="Você pode escolher mais de uma opção.">Hoje você quer saladas mais para:</Title>
              {[
                { o: 'Emagrecer sem sofrer', i: '✨' },
                { o: 'Praticidade no dia a dia', i: '🏃‍♀️' },
                { o: 'Comer saudável sem enjoar', i: '🥗' },
                { o: 'Preparar refeições da semana', i: '📅' },
                { o: 'Ajudar na alimentação da família', i: '👨‍👩‍👧‍👦' },
                { o: 'Vender saladas no pote', i: '💰' },
                { o: 'Ter refeições leves e rápidas', i: '⚡' }
              ].map(opt => (
                <MultiChoiceBtn key={opt.o} opt={opt.o}>
                  <span className="text-2xl">{opt.i}</span> {opt.o}
                </MultiChoiceBtn>
              ))}
              <ContinueBtn />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="st1" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }} className="space-y-4">
              <Title subtitle="Escolha a opção que mais combina com você.">Como é sua rotina?</Title>
              {[
                { o: 'Corrida o dia inteiro', i: '🌪️' },
                { o: 'Trabalho + casa', i: '🏢' },
                { o: 'Academia / foco fitness', i: '💪' },
                { o: 'Cuido da família', i: '🏠' },
                { o: 'Quero praticidade máxima', i: '🚀' },
                { o: 'Preciso economizar tempo', i: '⏱️' }
              ].map(opt => (
                <SingleChoiceBtn key={opt.o}>
                   <span className="text-2xl">{opt.i}</span> {opt.o}
                </SingleChoiceBtn>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="st2" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }} className="space-y-4">
              <Title subtitle="Pode escolher mais de uma opção.">Você prefere receitas mais:</Title>
              {[
                { o: 'Refrescantes', i: '🧊' },
                { o: 'Cremosas', i: '🥣' },
                { o: 'Fitness / proteicas', i: '🥚' },
                { o: 'Agridoce', i: '🍯' },
                { o: 'Leves', i: '🍃' },
                { o: 'Bem temperadas', i: '🌶️' },
                { o: 'Diferentes / gourmet', i: '🍽️' }
              ].map(opt => (
                <MultiChoiceBtn key={opt.o} opt={opt.o}>
                   <span className="text-2xl">{opt.i}</span> {opt.o}
                </MultiChoiceBtn>
              ))}
              <ContinueBtn />
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="st3" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }} className="space-y-4">
              <Title subtitle="Pode escolher mais de uma opção.">O que faria MAIS diferença pra você?</Title>
              {[
                { o: 'Abrir a geladeira e já ter tudo pronto', i: '❄️' },
                { o: 'Parar de desperdiçar verduras', i: '🗑️' },
                { o: 'Comer saudável com prazer', i: '😋' },
                { o: 'Emagrecer com mais facilidade', i: '👗' },
                { o: 'Variar as refeições', i: '🌈' },
                { o: 'Economizar tempo na semana', i: '⏳' }
              ].map(opt => (
                <MultiChoiceBtn key={opt.o} opt={opt.o}>
                  <span className="text-2xl">{opt.i}</span> {opt.o}
                </MultiChoiceBtn>
              ))}
              <ContinueBtn />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="st4" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }} className="space-y-4">
              <Title>Quantos dias da semana você gostaria de deixar refeições prontas?</Title>
              {[
                { o: '3 dias', i: '3️⃣' },
                { o: '5 dias', i: '5️⃣' },
                { o: 'A semana toda', i: '7️⃣' },
                { o: 'Quanto mais prático melhor', i: '🤣' }
              ].map(opt => (
                <SingleChoiceBtn key={opt.o}>
                   <span className="text-2xl">{opt.i}</span> {opt.o}
                </SingleChoiceBtn>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
