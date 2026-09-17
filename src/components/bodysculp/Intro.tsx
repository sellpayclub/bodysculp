import { motion } from 'motion/react';

interface Props {
  onStart: () => void;
}

export default function Intro({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl mt-12"
      >
        <div className="flex justify-center mb-6">
          <img 
            src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/bodysculpi%20logo.png" 
            alt="BodySculp Logo" 
            className="h-12 object-contain"
          />
        </div>

        <div className="mb-6 rounded-2xl overflow-hidden shadow-md">
          <img 
            src="https://ekfkrwueqwpqakpsrsjt.supabase.co/storage/v1/object/public/bodysculpi/mockup1%20bodysculp2.png" 
            alt="BodySculp Banner" 
            className="w-full h-auto object-cover"
          />
        </div>

        <h1 className="text-2xl font-black text-pink-500 mb-4 leading-tight">
          Sua barriga te incomoda quando você se olha no espelho?
        </h1>
        
        <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 text-left">
          O BodySculp foi criado para quem convive com a flacidez abdominal e quer uma solução prática — sem clínica, sem cirurgia, no conforto da sua casa.
        </p>

        <ul className="text-left space-y-3 mb-8">
          <li className="flex items-center gap-2 text-pink-900 font-bold text-sm bg-pink-100/50 p-3 rounded-xl border border-pink-100">
            <span className="text-pink-500 bg-white shadow-sm rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✔</span>
            Para flacidez abdominal em qualquer fase
          </li>
          <li className="flex items-center gap-2 text-pink-900 font-bold text-sm bg-pink-100/50 p-3 rounded-xl border border-pink-100">
            <span className="text-pink-500 bg-white shadow-sm rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✔</span>
             Sem precisar sair de casa
          </li>
          <li className="flex items-center gap-2 text-pink-900 font-bold text-sm bg-pink-100/50 p-3 rounded-xl border border-pink-100">
            <span className="text-pink-500 bg-white shadow-sm rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✔</span>
            Fácil de usar no dia a dia
          </li>
          <li className="flex items-center gap-2 text-pink-900 font-bold text-sm bg-pink-100/50 p-3 rounded-xl border border-pink-100">
            <span className="text-pink-500 bg-white shadow-sm rounded-full w-6 h-6 flex items-center justify-center text-xs shrink-0">✔</span>
            Veja se é indicado para você:
          </li>
        </ul>

        <button 
          onClick={() => {
            window.scrollTo(0,0);
            onStart();
          }}
          className="w-full bg-pink-500 hover:bg-pink-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#be185d] hover:shadow-[0_4px_0_0_#be185d] hover:translate-y-[2px] active:scale-[0.98] active:translate-y-[6px] active:shadow-none transition-all tracking-wide"
        >
          INICIAR TESTE →
        </button>
      </motion.div>
      <div className="w-full max-w-md mx-auto text-center px-4 mt-8 space-y-4">
        <p className="text-[10px] sm:text-xs text-pink-400/80 font-medium leading-relaxed">
          Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa. Este site não é afiliado ao Facebook, Google, YouTube ou a qualquer de suas entidades. Depois que você sair do Facebook, Google ou YouTube, a responsabilidade não é deles e sim do nosso site.
        </p>
        <p className="text-[10px] sm:text-xs text-pink-400/80 font-medium leading-relaxed">
          Gp Negocios Digitais LTDA - CNPJ: 40.170.238/0001-80 <br />
          Rua Jose Maria Barbosa 31, Jardim Portal da Colina, Sorocaba SP, 18047-380
        </p>
      </div>
    </div>
  );
}
