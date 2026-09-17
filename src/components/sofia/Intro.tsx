import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface Props {
  onStart: () => void;
}

export default function Intro({ onStart }: Props) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-5 text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-zinc-900 border border-zinc-800 p-6 sm:p-8 rounded-[2rem] shadow-2xl flex flex-col items-center gap-6"
      >
        <div className="bg-red-950/50 text-red-500 font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-widest border border-red-900/50">
          Atención Hombres
        </div>

        <h1 className="text-3xl sm:text-4xl font-black text-white leading-tight uppercase tracking-tight">
          Se buscan hombres <span className="text-red-500">buenos en la cama</span>
        </h1>
        
        <p className="text-zinc-400 font-medium text-lg leading-relaxed">
          ¿De verdad sabes lo que hacer en la cama con una mujer o solo crees que lo haces bien? 🤓
        </p>

        <img 
          src="https://media.inlead.cloud/uploads/37232/2026-02-26/lg-jLjl2-measaatbaaaaaamhwe-djdvnnfjqwi7p2.jpg" 
          alt="Sexy" 
          className="w-full rounded-2xl shadow-xl border border-zinc-800 opacity-90 sepia-[.2]" 
        />

        <button 
          onClick={onStart}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-2xl shadow-[0_0_20px_rgba(220,38,38,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 uppercase tracking-wide mt-2"
        >
          ¡VAMOS A DESCUBRIRLO!
          <ChevronRight size={24} />
        </button>
      </motion.div>
      <div className="w-full max-w-md mx-auto text-center px-4 mt-8 space-y-4">
        <p className="text-[10px] sm:text-xs text-zinc-600 font-medium leading-relaxed">
          Este producto no está destinado a diagnosticar, tratar, curar o prevenir ninguna enfermedad. Los resultados pueden variar de persona a persona. Este sitio no está afiliado a Facebook, Google, YouTube ni a ninguna de sus entidades. Una vez que abandone Facebook, Google o YouTube, la responsabilidad no es de ellos, sino de nuestro sitio web.
        </p>
        <p className="text-[10px] sm:text-xs text-zinc-600 font-medium leading-relaxed">
          Gp Negocios Digitais LTDA - CNPJ: 40.170.238/0001-80 <br />
          Rua Jose Maria Barbosa 31, Jardim Portal da Colina, Sorocaba SP, 18047-380
        </p>
      </div>
    </div>
  );
}
