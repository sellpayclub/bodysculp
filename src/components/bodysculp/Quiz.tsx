import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserAnswers } from './BodySculpFunnel';

interface Props {
  answers: UserAnswers;
  setAnswers: React.Dispatch<React.SetStateAction<UserAnswers>>;
  onComplete: () => void;
}

export default function Quiz({ answers, setAnswers, onComplete }: Props) {
  const [step, setStep] = useState(0);
  const totalSteps = 6; 
  // steps: 0(Name), 1(Age), 2(Concern), 3(Belly Type), 4(Intermezzo), 5(Estrogen)
  
  const progress = Math.round((step / totalSteps) * 100);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step < totalSteps - 1) {
      setStep(s => s + 1);
    } else {
      onComplete();
    }
  };

  const selectAnswer = (key: keyof UserAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    nextStep();
  };

  const toggleConcern = (value: string) => {
    setAnswers(prev => {
      const exists = prev.concerns.includes(value);
      return {
        ...prev,
        concerns: exists ? prev.concerns.filter(c => c !== value) : [...prev.concerns, value]
      };
    });
  };

  const Title = ({ children, emoji }: { children: React.ReactNode, emoji?: string }) => (
    <h2 className="text-2xl font-black text-gray-900 leading-tight mb-8 text-center px-2">
      {children} {emoji && <span className="inline-block animate-bounce">{emoji}</span>}
    </h2>
  );

  const SingleChoiceBtn = ({ onClick, children, key }: { onClick: () => void, children: React.ReactNode, key?: string }) => (
    <button
      onClick={onClick}
      className="w-full bg-white border-2 border-pink-100 hover:border-pink-400 hover:bg-pink-50/50 p-5 rounded-2xl font-bold text-gray-700 transition-all text-left flex items-center justify-between shadow-sm active:scale-[0.98] group mb-3"
    >
      <span className="text-[17px] leading-tight pr-4">{children}</span>
      <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-pink-500 shrink-0" />
    </button>
  );

  const MultiChoiceBtn = ({ checked, onClick, children, key }: { checked: boolean, onClick: () => void, children: React.ReactNode, key?: string }) => (
    <button
      onClick={onClick}
      className={`w-full border-2 p-5 rounded-2xl font-bold transition-all text-left flex items-center justify-between shadow-sm mb-3 ${checked ? 'bg-pink-50 border-pink-500 text-pink-900' : 'bg-white border-pink-100 hover:border-pink-300 text-gray-700'}`}
    >
      <span className="text-[17px] leading-tight pr-4">{children}</span>
      <div className={`w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${checked ? 'border-pink-500 bg-pink-500' : 'border-gray-300'}`}>
        {checked && <span className="text-white text-sm">✓</span>}
      </div>
    </button>
  );

  const visualBellyOptions = [
    { id: 'bolsa', label: 'Bolsa na parte inferior da barriga', img: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/41c3f3d0-4129-41b7-8e46-03e65430b4d8/large-icon.webp' },
    { id: 'redonda', label: 'Barriga redonda', img: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fc4add58-4e96-45f0-85b3-470027d68d25/large-icon.webp' },
    { id: 'culotes', label: 'Gorduras na barriga/culotes', img: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/6d2fcb95-7a32-45ac-b7e7-06c124975bac/large-icon.webp' },
    { id: 'solta', label: 'Reduzir barriga flácida e solta', img: 'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fb19a16d-f2de-4902-bb91-4401f456cf0f/large-icon.webp' },
  ];

  const flaccidImages = [
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/87740ec6-00a6-489b-8af1-ff2eba98720c/mobile.avif',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/mobile.webp',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/d26094c3-7b13-456f-9c2f-1f62764ad757/original.jpeg',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/fe3049c6-4adf-4b85-a244-fe5ee8b59fbb/mobile.webp',
  ];

  const standardImages = [
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/69fb5c70-a14c-49df-8c15-984eadf6eaec/mobile.webp',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/e4c5208b-e897-431e-bef4-3bf1f9033b6a/mobile.webp',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/a7b225b5-1e91-44b2-8a24-b7f6fbd81e84/mobile.webp',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/8d70e132-a218-4714-a47d-5142d56f28a8/mobile.webp',
    'https://assets.prd.heyflow.com/flows/HdD9HJWAhxnD3fynDZsH/www/assets/2c824481-1cff-4f0d-bc8b-9ba50dc83fb7/mobile.webp',
  ];

  const intermezzoImages = answers.bellyType === 'Reduzir barriga flácida e solta' 
    ? [...flaccidImages, ...standardImages] 
    : standardImages;

  return (
    <div className="max-w-md mx-auto w-full min-h-screen bg-pink-50 flex flex-col relative text-gray-900 font-sans">
      <div className="bg-white px-6 py-4 shadow-sm sticky top-0 z-20 flex flex-col gap-4 border-b border-pink-100">
        <div className="flex justify-between items-center text-sm font-black text-gray-400 uppercase tracking-widest">
          <span>Início</span>
          <span className="text-pink-500">Etapa {Math.min(step + 1, totalSteps)}/{totalSteps}</span>
          <span>Fim</span>
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden shadow-inner relative">
          <div className="bg-pink-500 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="p-6 pt-10 pb-24 flex-1">
        <AnimatePresence mode="wait">
          
          {step === 0 && (
            <motion.div key="st0" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}>
              <Title emoji="👋">Qual é o seu nome?</Title>
              <div className="space-y-4">
                 <input 
                   type="text" 
                   placeholder="Seu nome"
                   className="w-full bg-white border-2 border-pink-100 p-5 rounded-2xl font-bold text-gray-700 outline-none focus:border-pink-500 shadow-sm"
                   value={answers.name}
                   onChange={e => setAnswers(prev => ({ ...prev, name: e.target.value }))}
                   onKeyDown={e => {
                     if (e.key === 'Enter' && answers.name.trim().length > 0) nextStep();
                   }}
                 />
                 <button 
                  disabled={answers.name.trim().length === 0}
                  onClick={nextStep}
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-pink-500 hover:bg-pink-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#be185d] transition-all uppercase"
                 >
                   Continuar
                 </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="st1" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}>
              <Title emoji="🤔">Quantos anos você tem?</Title>
              {[
                'Menos de 30 anos',
                '30-39',
                '40-49',
                '50-59',
                'Mais de 60'
              ].map(opt => (
                <SingleChoiceBtn key={opt} onClick={() => selectAnswer('age', opt)}>
                  {opt}
                </SingleChoiceBtn>
              ))}
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="st2" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}>
              <Title emoji="🤷‍♀️">Qual é a sua principal preocupação quando você se olha no espelho?</Title>
              <p className="text-center text-pink-600 font-bold mb-6 -mt-6">Pode selecionar mais de uma opção</p>
              {[
                'Celulite (pele com aspecto de casca de laranja e irregular)',
                'Pele flácida e caída que não firma mais',
                'Gordura abdominal persistente que não responde à dieta',
                'Braços flácidos ou "tremendo" ao acenar ou levantar',
                'Estrias (novas ou antigas, visíveis na pele)'
              ].map(opt => (
                <MultiChoiceBtn 
                  key={opt} 
                  checked={answers.concerns.includes(opt)}
                  onClick={() => toggleConcern(opt)}
                >
                  {opt}
                </MultiChoiceBtn>
              ))}
              <div className="pt-4">
                <button 
                  onClick={nextStep}
                  disabled={answers.concerns.length === 0}
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed bg-pink-500 hover:bg-pink-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#be185d] active:scale-[0.98] transition-all uppercase tracking-widest"
                >
                  Continuar
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="st3" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}>
              <Title>Qual tipo de gordura abdominal é mais parecido com o sua?</Title>
              <p className="text-center text-gray-500 font-semibold text-sm mb-6 -mt-4">Por favor, selecione uma opção:</p>
              
              <div className="grid grid-cols-2 gap-4">
                {visualBellyOptions.map(opt => (
                  <button 
                    key={opt.id}
                    onClick={() => selectAnswer('bellyType', opt.label)}
                    className="bg-white border-2 border-pink-100 hover:border-pink-400 p-4 rounded-3xl flex flex-col items-center justify-between text-center gap-4 transition-all active:scale-[0.98] shadow-sm"
                  >
                    <img src={opt.img} alt={opt.label} className="w-full h-auto object-contain rounded-2xl" />
                    <span className="font-black text-gray-800 text-base leading-tight">{opt.label}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div key="intermezzo" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0, x:-20}} transition={{ duration: 0.4 }} className="text-center">
              <h2 className="text-3xl font-black text-pink-600 mb-4 uppercase tracking-tight">Você está no lugar certo! 💪</h2>
              <p className="text-lg font-bold text-gray-700 mb-8 leading-relaxed">
                Mais de <span className="bg-pink-100 px-2 py-1 rounded-md text-pink-700">30.000 mulheres</span> já combateram com sucesso a gordura abdominal persistente, esculpindo uma cintura mais fina e definida com BodySculp ™!
              </p>

              <div className="relative w-full overflow-hidden rounded-3xl shadow-lg border-4 border-white mb-8" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                 <div className="flex gap-4 w-max animate-marquee-left">
                   {[...intermezzoImages, ...intermezzoImages].map((img, i) => (
                     <div key={i} className="w-48 sm:w-64 shrink-0">
                       <img src={img} className="w-full h-auto object-contain rounded-2xl" />
                     </div>
                   ))}
                 </div>
              </div>
              <button 
                onClick={nextStep}
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#be185d] hover:shadow-[0_4px_0_0_#be185d] hover:translate-y-[2px] active:scale-[0.98] active:translate-y-[6px] active:shadow-none transition-all uppercase tracking-widest"
              >
                Continuar
              </button>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div key="st5" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} transition={{ duration: 0.3 }}>
              <Title>Você está atualmente em um estado de alto nível de estrogênio?</Title>
              
              <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 mb-6 text-blue-900">
                <p className="font-bold text-sm uppercase tracking-widest mb-2 opacity-80">Por que perguntamos?</p>
                <p className="font-medium text-[15px] leading-snug">Quando os níveis de estrogênio diminuem, o corpo tende a armazenar mais gordura.</p>
              </div>

              {[
                { o: 'Não', i: '🙅‍♀️' },
                { o: 'Gravidez', i: '🤰' },
                { o: 'Sobre a pílula anticoncepcional', i: '💊' },
                { o: 'Sobre a TRH (Terapia Hormonal na Menopausa)', i: '🌸' }
              ].map(opt => (
                <SingleChoiceBtn key={opt.o} onClick={() => selectAnswer('estrogen', opt.o)}>
                  <span className="text-xl inline-block w-8">{opt.i}</span> {opt.o}
                </SingleChoiceBtn>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
