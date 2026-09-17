import { UserData } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import confetti from 'canvas-confetti';

interface QuizProps {
  userData: UserData;
  updateData: (data: Partial<UserData>) => void;
  onComplete: () => void;
  onDevSkip?: () => void;
}

export default function Quiz({ userData, updateData, onComplete, onDevSkip }: QuizProps) {
  const [step, setStep] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const handleTitleClick = () => {
    setClickCount(c => {
      if (c + 1 >= 3) {
        if (onDevSkip) onDevSkip();
        return 0;
      }
      return c + 1;
    });
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (step === 14) {
      onComplete();
    } else {
      setStep(s => s + 1);
    }
  };

  const OptionBtn = ({ children, onClick, selected = false, multiple = false }: any) => (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 rounded-xl border-2 transition-all flex items-center justify-between",
        selected 
          ? "border-pink-500 bg-pink-50 text-pink-700 font-medium" 
          : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50/50"
      )}
    >
      <span className="flex items-center gap-3">{children}</span>
      {multiple && (
        <div className={cn("w-6 h-6 rounded border-2 flex items-center justify-center transition-colors", selected ? "bg-pink-500 border-pink-500" : "border-gray-300")}>
          {selected && <Check className="w-4 h-4 text-white" />}
        </div>
      )}
    </button>
  );

  const Title = ({ children }: any) => (
    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">{children}</h2>
  );

  const ContinueBtn = ({ onClick, disabled = false }: any) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className="mt-8 w-full bg-pink-600 hover:bg-pink-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-lg"
    >
      Continúar <ChevronRight className="w-5 h-5" />
    </button>
  );

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-8">
              <h1 onClick={handleTitleClick} className="text-3xl font-black text-pink-600 uppercase tracking-tight leading-tight cursor-pointer select-none">Pierde 5 Kilos en 7 Días<br/><span className="text-gray-800">Con La Gelatina Bariátrica Prohibida</span></h1>
              <p className="mt-4 text-lg font-medium text-gray-600">¡Solo 7 segundos cada mañana en ayunas!</p>
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/foto%20pv1.png" className="w-full mt-6 rounded-2xl shadow-md object-contain h-auto" alt="Gelatina Bariátrica" />
              <div className="inline-flex items-center gap-2 mt-6 bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold text-sm">
                <Check className="w-4 h-4" /> TEST DE 60 SEGUNDOS
              </div>
            </div>
            <Title>Selecciona tu edad para comenzar:</Title>
            {[
              { label: '28 - 39 años', emoji: '🌸', val: '28-39' },
              { label: '40 - 54 años', emoji: '🌺', val: '40-54' },
              { label: '55 - 64 años', emoji: '💐', val: '55-64' },
              { label: '65+ años', emoji: '🌷', val: '65+' },
            ].map(opt => (
              <OptionBtn
                key={opt.val}
                onClick={() => { updateData({ age: opt.val }); nextStep(); }}
                selected={userData.age === opt.val}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
          </motion.div>
        );
      case 1:
        const bodyTypes = [
          { label: 'Mediana', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-PVAd8-corpo-4.webp' },
          { label: 'Plus Size', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-A7eVQ-corpo-2.webp' },
          { label: 'Con sobrepeso', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-6ilTD-corpo-1.webp' },
          { label: 'Cuerpo grande', img: 'https://media.inlead.cloud/uploads/46846/2026-03-13/md-9Hr2J-corpo-3.webp' }
        ];
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <Title>¿Cómo describes tu cuerpo?</Title>
            <div className="grid grid-cols-2 gap-4">
              {bodyTypes.map(opt => (
                <button
                  key={opt.label}
                  onClick={() => { updateData({ bodyType: opt.label }); nextStep(); }}
                  className={cn(
                    "w-full p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-4",
                    userData.bodyType === opt.label 
                      ? "border-pink-500 bg-pink-50 text-pink-700 font-medium shadow-md" 
                      : "border-gray-200 bg-white hover:border-pink-300 hover:bg-pink-50/50"
                  )}
                >
                  <img src={opt.img} alt={opt.label} className="w-full object-contain rounded-lg h-auto max-h-48" />
                  <span className="font-bold text-center">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-6">
              <Title>¿En qué áreas quieres perder grasa?</Title>
              <p className="text-gray-500">Toca las áreas deseadas.</p>
            </div>
            {[
              { label: 'Papada', emoji: '🫠' },
              { label: 'Brazos', emoji: '💪' },
              { label: 'Barriga', emoji: '🎯' },
              { label: 'Cintura', emoji: '👙' },
              { label: 'Glúteos', emoji: '🍑' },
              { label: 'Muslos', emoji: '🦵' },
              { label: 'Cuerpo Entero', emoji: '✨' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                multiple
                onClick={() => {
                  const isSelected = userData.fatAreas.includes(opt.label);
                  if (isSelected) {
                    updateData({ fatAreas: userData.fatAreas.filter(a => a !== opt.label) });
                  } else {
                    updateData({ fatAreas: [...userData.fatAreas, opt.label] });
                  }
                }}
                selected={userData.fatAreas.includes(opt.label)}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
            <ContinueBtn onClick={nextStep} disabled={userData.fatAreas.length === 0} />
          </motion.div>
        );
      case 3:
        return (
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center space-y-6 py-8">
            <div className="text-6xl mb-4">⭐</div>
            <h2 className="text-3xl font-black text-gray-800">¡Sí, hasta las famosas la están usando!</h2>
            <p className="text-xl text-gray-600">La Gelatina Bariátrica Prohibida es tendencia entre celebridades e influenciadoras latinas.</p>
            
            <div className="space-y-4">
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/news1.png" className="w-full rounded-xl shadow-md border" alt="Noticia 1" />
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/news2.png" className="w-full rounded-xl shadow-md border" alt="Noticia 2" />
            </div>

            <ContinueBtn onClick={nextStep} />
          </motion.div>
        );
      case 4:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-6">
            <div className="text-center mb-6">
              <Title>¿Cuál es tu nombre?</Title>
              <p className="text-gray-500">Para preparar tu plan personalizado, necesitamos tu nombre. No te preocupes, tus datos están protegidos 👍</p>
            </div>
            <input 
              type="text" 
              value={userData.name}
              onChange={(e) => updateData({ name: e.target.value })}
              className="w-full text-center text-2xl p-4 border-b-2 border-pink-400 focus:outline-none focus:border-pink-600 bg-transparent font-medium"
              placeholder="Tu nombre aquí..."
            />
            <ContinueBtn onClick={nextStep} disabled={!userData.name.trim()} />
          </motion.div>
        );
      case 5:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <Title>¿{userData.name.split(' ')[0]}, cuál de estas situaciones reconoces más en tu día a día?</Title>
            {[
              { label: 'Como poco y sigo engordando', emoji: '🥗' },
              { label: 'Me siento cansada y sin energía', emoji: '😴' },
              { label: 'Evito situaciones sociales por mi cuerpo', emoji: '🍸' },
              { label: 'Lo intenté todo y nada funcionó', emoji: '😫' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                multiple
                onClick={() => {
                  const isSelected = userData.situations.includes(opt.label);
                  if (isSelected) {
                    updateData({ situations: userData.situations.filter(a => a !== opt.label) });
                  } else {
                    updateData({ situations: [...userData.situations, opt.label] });
                  }
                }}
                selected={userData.situations.includes(opt.label)}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
            <ContinueBtn onClick={nextStep} disabled={userData.situations.length === 0} />
          </motion.div>
        );
      case 6:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-6">
              <Title>¿Qué te impide bajar de peso?</Title>
              <p className="text-gray-500">Selecciona todas las barreras que enfrentas.</p>
            </div>
            {[
              { label: 'Falta de tiempo', emoji: '⏰' },
              { label: 'Falta de autocontrol', emoji: '🍫' },
              { label: 'Problemas financieros', emoji: '💰' },
              { label: 'Falta de constancia', emoji: '📉' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                multiple
                onClick={() => {
                  const isSelected = userData.impediments.includes(opt.label);
                  if (isSelected) {
                    updateData({ impediments: userData.impediments.filter(a => a !== opt.label) });
                  } else {
                    updateData({ impediments: [...userData.impediments, opt.label] });
                  }
                }}
                selected={userData.impediments.includes(opt.label)}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
            <ContinueBtn onClick={nextStep} disabled={userData.impediments.length === 0} />
          </motion.div>
        );
      case 7:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-6">
              <Title>¿Qué quieres lograr?</Title>
              <p className="text-gray-500">Selecciona tus mayores objetivos.</p>
            </div>
            {[
              { label: 'Tener más energía', emoji: '⚡' },
              { label: 'Usar ropa que amo', emoji: '👗' },
              { label: 'Mejorar mi autoestima', emoji: '💰' },
              { label: 'Tener mejor salud', emoji: '💪' },
              { label: 'Sentirme más liviana', emoji: '🦋' },
              { label: 'Recibir cumplidos', emoji: '🌟' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                multiple
                onClick={() => {
                  const isSelected = userData.objectives.includes(opt.label);
                  if (isSelected) {
                    updateData({ objectives: userData.objectives.filter(a => a !== opt.label) });
                  } else {
                    updateData({ objectives: [...userData.objectives, opt.label] });
                  }
                }}
                selected={userData.objectives.includes(opt.label)}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
            <ContinueBtn onClick={nextStep} disabled={userData.objectives.length === 0} />
          </motion.div>
        );
      case 8:
        return (
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="text-center space-y-6 py-8">
            <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/logo%20gelatina.png" className="w-32 h-32 mx-auto object-contain drop-shadow-md rounded-2xl" alt="Gelatina Bariátrica" />
            <h2 className="text-2xl font-black text-gray-800 leading-tight">¡La Gelatina Bariátrica Prohibida que ya ayudó a más de 89.000 mujeres a perder hasta 5 kilos en 7 días!</h2>
            
            <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/como%20funciona%20gelatina.png" className="w-full rounded-xl shadow-md border my-4" alt="Como funciona la gelatina" />

            <div className="bg-pink-100 p-4 rounded-xl text-left inline-block space-y-2 w-full">
               <p className="font-semibold text-pink-800 flex items-center gap-2"><Check className="w-5 h-5"/> Sin inyecciones</p>
               <p className="font-semibold text-pink-800 flex items-center gap-2"><Check className="w-5 h-5"/> Sin cirugía</p>
               <p className="font-semibold text-pink-800 flex items-center gap-2"><Check className="w-5 h-5"/> ¡Sin efectos secundarios!</p>
            </div>
            <p className="text-lg font-bold text-gray-700 mt-4">Es 10 veces más poderosa que el Mounjaro y el Ozempic juntos. Y la preparas en 7 segundos en tu cocina.</p>
            <p className="text-gray-600">Los 3 ingredientes de la Gelatina Bariátrica siguen actuando mientras duermes, activando tus hormonas quemadoras de grasa: el GLP-1 y el GIP.</p>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        );
      case 9:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-8 text-center pt-8">
            <Title>¿Cuál es tu peso actual?</Title>
            <p className="text-gray-500 mb-4">Sé sincera para un resultado preciso.</p>
            
            <p className="font-bold text-pink-600 bg-pink-50 border border-pink-200 py-3 px-4 rounded-xl mx-auto max-w-xs shadow-sm">
              👉 Arrastra el punto rosa hacia los lados para ajustar tu peso
            </p>

            <div className="flex justify-center mb-6 mt-6">
              <div className="bg-gray-200 p-1 rounded-full flex gap-1">
                <button 
                  onClick={() => updateData({ weightUnit: 'kg' })}
                  className={cn("px-6 py-2 rounded-full font-bold transition-all", userData.weightUnit === 'kg' ? "bg-pink-500 text-white shadow" : "text-gray-500")}
                >KG</button>
                <button 
                  onClick={() => updateData({ weightUnit: 'lb' })}
                  className={cn("px-6 py-2 rounded-full font-bold transition-all", userData.weightUnit === 'lb' ? "bg-pink-500 text-white shadow" : "text-gray-500")}
                >LB</button>
              </div>
            </div>

            <div className="relative pt-12 pb-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-pink-100 text-pink-700 font-bold px-8 py-4 rounded-2xl text-4xl shadow-sm min-w-[160px] border-2 border-pink-200">
                {userData.weight} <span className="text-lg">{userData.weightUnit}</span>
              </div>
              <input 
                type="range" 
                min={userData.weightUnit === 'kg' ? "40" : "88"} 
                max={userData.weightUnit === 'kg' ? "180" : "396"} 
                value={userData.weight}
                onChange={(e) => updateData({ weight: parseInt(e.target.value) })}
                className="w-full h-4 mt-8 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-pink-500 hover:accent-pink-600"
              />
            </div>

            <ContinueBtn onClick={nextStep} />
          </motion.div>
        );
      case 10:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-8 text-center pt-8">
            <Title>¿Cuál es tu altura?</Title>
            <p className="text-gray-500 mb-4">Lo necesitamos para calcular tu IMC.</p>
            
            <p className="font-bold text-blue-600 bg-blue-50 border border-blue-200 py-3 px-4 rounded-xl mx-auto max-w-xs shadow-sm">
              👉 Arrastra el punto azul hacia los lados para ajustar tu altura
            </p>

            <div className="flex justify-center mb-6 mt-6">
              <div className="bg-gray-200 p-1 rounded-full flex gap-1">
                <button className="px-6 py-2 rounded-full font-bold transition-all bg-pink-500 text-white shadow">CM</button>
              </div>
            </div>

            <div className="relative pt-12 pb-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-blue-100 text-blue-700 font-bold px-8 py-4 rounded-2xl text-4xl shadow-sm min-w-[160px] border-2 border-blue-200">
                {userData.height} <span className="text-lg">cm</span>
              </div>
              <input 
                type="range" 
                min="140" 
                max="210" 
                value={userData.height}
                onChange={(e) => updateData({ height: parseInt(e.target.value) })}
                className="w-full h-4 mt-8 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
            </div>

            <ContinueBtn onClick={nextStep} />
          </motion.div>
        );
      case 11:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-8 text-center pt-8">
            <Title>¿Cuál es tu peso deseado?</Title>
            <p className="text-gray-500 mb-4">¿Cuál es el peso que sueñas alcanzar?</p>

            <p className="font-bold text-green-600 bg-green-50 border border-green-200 py-3 px-4 rounded-xl mx-auto max-w-xs shadow-sm">
              👉 Arrastra el punto verde hacia los lados para ajustar tu peso
            </p>
            
            <div className="relative pt-12 pb-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-green-100 text-green-700 font-bold px-8 py-4 rounded-2xl text-4xl shadow-sm min-w-[160px] border-2 border-green-200">
                {userData.desiredWeight} <span className="text-lg">{userData.weightUnit}</span>
              </div>
              <input 
                type="range" 
                min={userData.weightUnit === 'kg' ? "40" : "88"} 
                max={userData.weightUnit === 'kg' ? "150" : "330"} 
                value={userData.desiredWeight}
                onChange={(e) => updateData({ desiredWeight: parseInt(e.target.value) })}
                className="w-full h-4 mt-8 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
            </div>

            <ContinueBtn onClick={nextStep} />
          </motion.div>
        );
      case 12:
        return (
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="space-y-6 py-4">
            <div className="text-center">
              <h2 className="text-2xl font-black text-pink-600 mb-2">{userData.name || 'Amiga'}, Tu meta es más fácil de alcanzar de lo que imaginas.</h2>
              <p className="text-gray-600">Mira este ejemplo real:</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <img src="https://media.inlead.cloud/uploads/46846/2026-02-12/lg-OxkbL-lg-tfopc-1235c8a1-96df-4546-b7f7-3414f5321048.jpg" className="w-full rounded-xl object-contain max-h-64 shadow-md bg-gray-50" alt="Caso de sucesso" />
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold text-2xl">M</div>
                <div>
                  <h3 className="font-bold text-lg">María González</h3>
                  <p className="text-sm text-gray-500">Ama de casa - 39 años</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"A los 39 años ya no creía que podría bajar de peso. Tomé esta gelatina cada mañana en ayunas durante 3 semanas. Perdí 16 kilos y mi ropa me quedaba 2 tallas más grande. Nunca imaginé que fuera tan fácil."</p>
              <button 
                onClick={() => { confetti(); nextStep(); }} 
                className="w-full bg-pink-600 hover:bg-pink-700 text-white font-black py-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
              >
                ¡YO TAMBIÉN QUIERO ESTA TRANSFORMACIÓN!
              </button>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <img src="https://media.inlead.cloud/uploads/46846/2026-02-12/lg-VLZBT-lg-aww8s-c9f40695-e283-4b21-831f-e7bf7cf7631e.jpg" className="w-full rounded-xl object-contain max-h-64 shadow-md bg-gray-50" alt="Caso de sucesso" />
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-2xl">C</div>
                <div>
                  <h3 className="font-bold text-lg">Carolina Reyes</h3>
                  <p className="text-sm text-gray-500">Maestra — 47 años</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"Probé dietas, gimnasio y hasta pastillas para adelgazar. Nada funcionaba. En 21 días tomando la gelatina en ayunas perdí 9 kilos y la barriga que cargaba hace 10 años simplemente desapareció."</p>
              <button 
                onClick={() => { confetti(); nextStep(); }} 
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-black py-4 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
              >
                ¡YO TAMBIÉN QUIERO ESTA TRANSFORMACIÓN!
              </button>
            </div>
            
            <button onClick={nextStep} className="w-full text-center text-gray-400 font-medium py-4">Omitir</button>
          </motion.div>
        );
      case 13:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-6">
              <Title>¿Cómo es tu rutina diaria?</Title>
              <p className="text-gray-500">Selecciona todas las que apliquen.</p>
            </div>
            {[
              { label: 'Trabajo fuera de casa', emoji: '🏢' },
              { label: 'Trabajo desde casa', emoji: '🏠' },
              { label: 'Cuido del hogar/familia', emoji: '👨‍👩‍👧' },
              { label: 'Estudio', emoji: '📚' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                multiple
                onClick={() => {
                  const isSelected = userData.routine.includes(opt.label);
                  if (isSelected) {
                    updateData({ routine: userData.routine.filter(a => a !== opt.label) });
                  } else {
                    updateData({ routine: [...userData.routine, opt.label] });
                  }
                }}
                selected={userData.routine.includes(opt.label)}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
            <ContinueBtn onClick={nextStep} disabled={userData.routine.length === 0} />
          </motion.div>
        );
      case 14:
        return (
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} exit={{opacity:0, y:-20}} className="space-y-4">
            <div className="text-center mb-6">
              <Title>¿Cuántas horas duermes por noche?</Title>
              <p className="text-gray-500">El sueño es esencial para bajar de peso.</p>
            </div>
            {[
              { label: 'Menos de 5 horas', emoji: '😴' },
              { label: '5 a 7 horas', emoji: '🛏️' },
              { label: '7 a 9 horas', emoji: '😊' },
              { label: 'Más de 9 horas', emoji: '💤' },
            ].map(opt => (
              <OptionBtn
                key={opt.label}
                onClick={() => { updateData({ sleep: opt.label }); nextStep(); }}
                selected={userData.sleep === opt.label}
              >
                <span className="text-2xl">{opt.emoji}</span> {opt.label}
              </OptionBtn>
            ))}
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 pb-24 max-w-lg mx-auto w-full min-h-screen">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 h-2 rounded-full mb-8 overflow-hidden">
        <div 
          className="bg-pink-500 h-full transition-all duration-300 ease-out"
          style={{ width: `${Math.max(5, (step / 14) * 100)}%` }}
        />
      </div>
      
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
