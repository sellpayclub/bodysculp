import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export default function Diagnostic({ onComplete }: { onComplete: () => void }) {
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0);
    const startTime = Date.now();
    const duration = 6000;
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
    
    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (loadingProgress < 100) {
    return (
      <div className="p-6 max-w-lg mx-auto w-full min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center w-full space-y-8">
          
          <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-8 border-white shadow-xl flex items-center justify-center bg-blue-50">
            <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-dC0Db-prostata-normal-x-prostata-aumentada.webp" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" alt="Scanner" />
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
              style={{ background: 'conic-gradient(from 0deg, transparent 0%, rgba(37, 99, 235, 0.1) 80%, rgba(37, 99, 235, 0.9) 100%)' }}
            />
            {/* Scanner line */}
            <motion.div 
              animate={{ y: ['-100%', '100%'] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1 bg-blue-500 shadow-[0_0_15px_rgba(37,99,235,1)] z-10" 
            />
          </div>

          <h2 className="text-2xl font-bold text-gray-800 px-4 leading-tight">Estou analisando as suas respostas e gerando o seu protocolo personalizado.</h2>
          <p className="text-5xl font-black text-blue-600">{loadingProgress}%</p>
          <p className="text-gray-500 font-medium bg-blue-50 py-1.5 px-4 rounded-full inline-block animate-pulse">
            {loadingProgress > 60 ? 'Montando protocolo personalizado...' : 'Verificando sintomas na base de dados...'}
          </p>
          
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden shadow-inner relative max-w-xs mx-auto">
            <div 
              className="bg-blue-600 h-full transition-all duration-100 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 max-w-lg mx-auto w-full min-h-screen pt-8 pb-24 bg-gray-50">
      <div className="space-y-8">
        
        <div className="bg-green-50 text-green-700 font-bold p-3 rounded-xl border border-green-200 text-center flex items-center justify-center gap-2 mb-4">
          <span className="text-xl">✅</span> Análise Concluída com Sucesso!
        </div>

        <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-xaCYg-87mah-remedios.webp" alt="Remedios" className="w-full rounded-2xl shadow-xl border-4 border-white object-cover" />
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-black text-gray-900 border-l-4 border-blue-600 pl-3 mb-6">Abaixo está a análise da sua situação atual, baseada nas suas respostas.👇</h2>
          
          <div className="overflow-hidden divide-y divide-gray-100 bg-gray-50/50 rounded-xl border border-gray-100">
            {[
              { label: 'Chances de possuir bactérias inflamatórias', val: '95%', color: 'text-red-600' },
              { label: 'Chances de possuir Infecção úrinária Frequente nos próximos meses', val: '80%', color: 'text-red-500' },
              { label: 'Chances de possuir pedras na bexiga', val: '88%', color: 'text-red-600' },
              { label: 'Chances de contrair cancer de prostata', val: '95%', color: 'text-red-600' },
              { label: 'Chances de voltar a ir ao banheiro normalmente sem a desparasitação', val: '5%', color: 'text-red-500' },
              { label: 'Chances de diminuir a próstata em 80% com a desparasitação', val: '100%', color: 'text-green-600' },
              { label: 'Chances de eliminar parasita em 2 dias', val: '95%', color: 'text-green-600' },
              { label: 'Chances de eliminar parasitas por completo', val: '100%', color: 'text-green-600' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors">
                <span className="text-[13px] font-semibold text-gray-700 pr-4 leading-tight">{item.label}</span>
                <span className={`font-black text-lg ${item.color} bg-gray-50 px-2 py-1 rounded border border-gray-100`}>{item.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 space-y-4">
          <h3 className="font-black text-gray-800 text-lg border-b pb-3">Possível agente parasitário de acordo com os seus sintomas:</h3>
          <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-CtK3w-hywsc-e99378d8-98c9-4094-9718-f70202ad.webp" alt="Parasita" className="w-full rounded-xl shadow-md border border-gray-100 bg-white" />
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-300 p-6 rounded-2xl space-y-3 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-200 rounded-full blur-2xl opacity-50 -mr-10 -mt-10" />
          <h3 className="font-black text-xl text-yellow-900 flex items-center gap-2 relative z-10">⚠️ Atenção !</h3>
          <p className="text-yellow-800 font-medium relative z-10 text-sm leading-relaxed">No nosso Protocolo, você pode ficar tranquilo! Nenhum verme ou parasita sairá vivo de forma incômoda. Eles são eliminados já mortos e desmanchados, quase imperceptíveis. ☺️</p>
          <p className="text-yellow-800 font-medium relative z-10 text-sm leading-relaxed">A Desparasitação ocorrerá primeiramente através de um chá de tomate com um ingrediente secreto facilmente encontrado nos mercados e pouco utilizado.</p>
        </div>

        <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-14tBB-tr5iv-tomate-1504283166629-v2-1920x1276.webp" alt="Tomate" className="w-full rounded-2xl shadow-xl border-4 border-white object-cover" />

        <button 
          onClick={() => { window.scrollTo(0,0); onComplete(); }}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#16a34a] hover:shadow-[0_4px_0_0_#16a34a] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all mt-8 uppercase tracking-wide"
        >
          Gerar Protocolo de Tratamento! ✅
        </button>

      </div>
    </div>
  );
}
