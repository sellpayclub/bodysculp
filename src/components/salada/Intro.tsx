import { motion } from 'motion/react';

interface Props {
  onStart: () => void;
}

export default function Intro({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-6 rounded-3xl shadow-xl border border-emerald-100"
      >
        <div className="flex justify-center mb-6">
          <div className="bg-emerald-600 text-white font-black text-2xl px-6 py-2 rounded-xl shadow-md rotate-[-2deg] tracking-widest uppercase">
            Salada <span className="text-emerald-200">no Pote</span>
          </div>
        </div>

        <h1 className="text-2xl font-black text-gray-800 mb-6 leading-tight uppercase relative z-10">
          Vamos descobrir qual tipo de <span className="text-emerald-600">salada no pote</span> combina mais com sua rotina? 🥗
        </h1>
        
        <img 
          src="https://controle.nutriliacastro.com/wp-content/uploads/2025/11/14.webp" 
          alt="Salada no pote" 
          className="w-full h-auto max-h-[300px] rounded-2xl mb-6 shadow-md object-cover"
        />
        
        <p className="text-gray-600 font-bold mb-6 text-lg px-2">
          Responda rapidinho e descubra quais receitas vão facilitar sua vida e receba no final 60 receitas de salada!
        </p>
        
        <div className="flex items-center justify-center gap-2 text-emerald-700 font-black mb-8 bg-emerald-50 py-3 rounded-xl border border-emerald-100 uppercase tracking-tight text-sm">
          <span className="text-xl">⏰</span> Leva menos de 1 minuto.
        </div>

        <button 
          onClick={() => {
            window.scrollTo(0,0);
            onStart();
          }}
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#059669] hover:shadow-[0_4px_0_0_#059669] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all uppercase tracking-wide"
        >
          Iniciar Agora &raquo;
        </button>
      </motion.div>
      <div className="w-full max-w-md mx-auto text-center px-4 mt-8 space-y-4">
        <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed">
          Este produto ou conteúdo não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa. Este site não é afiliado ao Facebook, Google, YouTube ou a qualquer de suas entidades. Depois que você sair do Facebook, Google ou YouTube, a responsabilidade não é deles e sim do nosso site.
        </p>
        <p className="text-[10px] sm:text-xs text-slate-400 font-medium leading-relaxed">
          Gp Negocios Digitais LTDA - CNPJ: 40.170.238/0001-80 <br />
          Rua Jose Maria Barbosa 31, Jardim Portal da Colina, Sorocaba SP, 18047-380
        </p>
      </div>
    </div>
  );
}
