import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { UserData } from '../types';

export default function VSL1({ userData, onContinue, skipDelay }: { userData: UserData; onContinue: () => void; skipDelay?: boolean }) {
  const [showButton, setShowButton] = useState(skipDelay || false);

  useEffect(() => {
    if (skipDelay) {
      setShowButton(true);
      return;
    }
    // 5 minutes = 300000ms
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 300000); 

    return () => clearTimeout(timer);
  }, [skipDelay]);

  return (
    <div className="bg-black min-h-screen text-white pt-8 pb-24">
      <div className="max-w-2xl mx-auto px-4 space-y-6">
        <h1 className="text-2xl sm:text-3xl font-black text-center text-white leading-tight uppercase px-2 mt-8">
          <span className="bg-pink-600 text-white px-2 py-1 object-contain inline-block transform -skew-x-6">MIRA ESTE VIDEO RÁPIDO</span><br/>
          Y DESCUBRE LA "GELATINA BARIÁTRICA" QUE ESTÁ HACIENDO QUE MUJERES PIERDAN HASTA <span className="text-pink-500">20 KILOS EN 21 DÍAS</span>
        </h1>
        
        <div className="w-full mt-8 rounded-xl overflow-hidden shadow-2xl border-4 border-gray-800">
          <div dangerouslySetInnerHTML={{ __html: `
            <div id="ifr_69fb3e6504596318d291bd5c_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> 
              <div style="position: relative; padding: 178.21782178217822% 0 0 0;" id="ifr_69fb3e6504596318d291bd5c_aspect"> 
                <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69fb3e6504596318d291bd5c" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69fb3e6504596318d291bd5c/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
              </div> 
            </div>
          `}} />
        </div>

        {/* Small volume hint */}
        <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
          <span className="text-xl">🔊</span> Asegúrate de que el sonido esté encendido.
        </p>

        {showButton && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="pt-8"
          >
            <button
              onClick={() => { window.scrollTo({top:0}); onContinue(); }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-6 rounded-xl shadow-xl transition-all transform hover:scale-105 uppercase"
            >
              Continuar
            </button>
          </motion.div>
        )}
        
        {/* Hidden dev debug button just to skip the 5 min delay during testing */}
        {process.env.NODE_ENV === 'development' && !showButton && (
           <button onClick={() => setShowButton(true)} className="fixed bottom-2 right-2 text-xs text-gray-700 opacity-20 hover:opacity-100">Skip delay (Dev)</button>
        )}
      </div>
    </div>
  );
}
