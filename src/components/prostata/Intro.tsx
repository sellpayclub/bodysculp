import { motion } from 'motion/react';

export default function Intro({ onStart }: { onStart: () => void }) {
  return (
    <div className="max-w-lg mx-auto w-full p-4 min-h-screen flex flex-col justify-center items-center">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full space-y-6 text-center pb-8 pt-8">
        <p className="bg-red-600 text-white font-black px-4 py-1 inline-block rounded-md text-sm uppercase tracking-wider mb-2">URGENTE</p>
        <h1 className="text-2xl font-black text-gray-900 leading-tight">
          TRUQUE NATURAL CASEIRO DE 14 DIAS ESTÁ DESINCHANDO A PRÓSTATA E ELIMINANDO A HPB NATURALMENTE!
        </h1>
        <p className="text-gray-700 font-medium">
          Homens estão voltando a urinar com força, dormindo a noite inteira sem levantar e recuperando o desempenho na cama. Tudo graças a uma simples receita natural que elimina o parasita escondido por trás do aumento da próstata.
        </p>
        
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 bg-white">
          <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-dC0Db-prostata-normal-x-prostata-aumentada.webp" alt="Prostata normal x aumentada" className="w-full h-auto object-contain" />
        </div>

        <button 
          onClick={() => { window.scrollTo(0,0); onStart(); }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xl py-5 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98] uppercase mt-4"
        >
          QUERO APRENDER TAMBÉM !
        </button>
      </motion.div>
      <div className="w-full max-w-lg mx-auto text-center px-4 pb-4 mt-8 space-y-4">
        <p className="text-[10px] sm:text-xs text-gray-400 font-medium leading-relaxed">
          Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar de pessoa para pessoa. Este site não é afiliado ao Facebook, Google, YouTube ou a qualquer de suas entidades. Depois que você sair do Facebook, Google ou YouTube, a responsabilidade não é deles e sim do nosso site.
        </p>
        <p className="text-[10px] sm:text-xs text-gray-400 font-medium leading-relaxed">
          Gp Negocios Digitais LTDA - CNPJ: 40.170.238/0001-80 <br />
          Rua Jose Maria Barbosa 31, Jardim Portal da Colina, Sorocaba SP, 18047-380
        </p>
      </div>
    </div>
  );
}
