import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function VSL2({ skipDelay }: { skipDelay?: boolean }) {
  const [showPitch, setShowPitch] = useState(skipDelay || false);
  const [carouselIdx, setCarouselIdx] = useState(0);

  const carouselImages = [
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultadoo.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado1.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado2.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado%20pv.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultado%20pv%203.png",
    "https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/resultad1.png",
    "https://media.inlead.cloud/uploads/46846/2026-03-13/lg-cLG5N-transf-claudia-dgxfsyso.webp",
    "https://media.inlead.cloud/uploads/46846/2026-03-13/lg-ju9uP-transf-sandra-cuvcthls.webp"
  ];

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCarouselIdx(i => (i + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(carouselTimer);
  }, [carouselImages.length]);

  useEffect(() => {
    if (skipDelay) {
      setShowPitch(true);
      return;
    }
    // 5 minutes delay = 300000ms
    const timer = setTimeout(() => {
      setShowPitch(true);
    }, 300000); 

    return () => clearTimeout(timer);
  }, [skipDelay]);

  const buyLink = import.meta.env.VITE_LINK_COMPRA || "{{LINK_COMPRA}}";

  const renderContent = () => (
    <div className="bg-white min-h-screen pt-8 pb-32">
      <div className="max-w-2xl mx-auto px-4 space-y-12">
        
        {/* Video Section */}
        <div className="space-y-6 text-center">
          <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-1 rounded-full text-sm mb-2 shadow-sm border border-green-200">
            ¡Tu Protocolo de la Gelatina fue generado con éxito!
          </div>
          <h1 className="text-3xl font-black text-gray-800 leading-tight uppercase">
            Elimina De 14 a 20 kg en solo <span className="text-pink-600">21 dias</span>..
          </h1>
          <p className="text-gray-600 font-medium bg-gray-50 p-3 rounded-lg border">
            Mira el Video Abajo de 1 Minuto para Liberar tu Acceso a tu Protocolo Personalizado 👇
          </p>
          
          <div className="w-full mt-8 rounded-xl overflow-hidden shadow-2xl border-4 border-pink-500 relative bg-black">
            <div dangerouslySetInnerHTML={{ __html: `
              <div id="ifr_69fb3fb067762a5a1133fbe5_wrapper" style="margin: 0 auto; width: 100%; max-width: 400px;"> 
                <div style="position: relative; padding: 178.21782178217822% 0 0 0;" id="ifr_69fb3fb067762a5a1133fbe5_aspect"> 
                  <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69fb3fb067762a5a1133fbe5" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/ceaefeeb-feef-4b52-8911-9ec9de0d5b6b/players/69fb3fb067762a5a1133fbe5/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
                </div> 
              </div>
            `}} />
          </div>
          <p className="text-center text-gray-400 text-sm flex items-center justify-center gap-2">
            <span className="text-xl">🔊</span> Asegúrate de que el sonido esté encendido.
          </p>
        </div>

        {/* Hidden dev debug button */}
        {process.env.NODE_ENV === 'development' && !showPitch && (
           <button onClick={() => setShowPitch(true)} className="fixed bottom-2 right-2 text-xs text-black opacity-20 hover:opacity-100 bg-white px-2 py-1 border">Skip delay (Dev)</button>
        )}

        {showPitch && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} className="space-y-16 animate-in slide-in-from-bottom-16 duration-700">
            {/* CTA 1 */}
            <div className="text-center">
              <a href={buyLink} className="w-full block bg-green-500 hover:bg-green-600 text-white font-black text-2xl py-6 rounded-xl shadow-xl transition-all transform hover:scale-105 uppercase">
                ¡QUIERO MI PROTOCOLO DE LA GELATINA PERSONALIZADO!
              </a>
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/capa%20de%20tudo%20mockuo%20recebiveis.png" className="w-full mt-8 rounded-xl object-contain" alt="Mockup Produto" />
            </div>

            <div className="space-y-6 text-center text-gray-800 px-4">
              <h2 className="text-2xl font-black italic">"En 21 días, puedes mirarte al espejo. Y vas a agradecer haber empezado hoy."</h2>
              <p className="text-lg">De acuerdo con tus respuestas, estos podrían ser tus resultados...</p>
              
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-100">
                <p className="font-bold text-red-800">Tu metabolismo está funcionando solo al 19% de su capacidad, haciéndote sentir cansada y sin energía.</p>
              </div>

              <div className="flex justify-center">
                <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/como%20funciona%20gelatina.png" className="w-full max-w-sm rounded-xl drop-shadow-md" alt="Como funciona a gelatina" />
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border-2 border-green-100">
                <p className="font-bold text-green-800">Con el Truco de la Gelatina, tus hormonas quema grasas funcionan 24h, quemando grasa automáticamente.</p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8 bg-gray-50 p-6 rounded-3xl border">
              <h2 className="text-2xl font-black text-center text-gray-800">Lo que sucederá contígo:</h2>
              <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[19px] before:w-[2px] before:bg-pink-300">
                <div className="relative pl-12 flex flex-col gap-1">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink-500 border-4 border-white flex items-center justify-center text-white font-bold text-xs">Día 7</div>
                  <h3 className="font-bold text-lg text-pink-600">Primera Semana</h3>
                  <p className="text-gray-700">Te despiertas y sientes que tu pantalón vaquero empieza a quedarte flojo en la cintura. Tu apetito ya ha disminuido significativamente.</p>
                </div>
                <div className="relative pl-12 flex flex-col gap-1">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink-500 border-4 border-white flex items-center justify-center text-white font-bold text-xs">Día 14</div>
                  <h3 className="font-bold text-lg text-pink-600">Segunda Semana</h3>
                  <p className="text-gray-700">Tu esposo te abraza por detrás y te susurra: “Wow, estás diferente… ¿qué hiciste?”</p>
                </div>
                <div className="relative pl-12 flex flex-col gap-1">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink-500 border-4 border-white flex items-center justify-center text-white font-bold text-xs">Día 21</div>
                  <h3 className="font-bold text-lg text-pink-600">Tercera Semana</h3>
                  <p className="text-gray-700">Tus amigas se quedan en silencio cuando llegas: “¡Chica, ¿te hiciste lipo? Estás IRRECONOCIBLE!”</p>
                </div>
                <div className="relative pl-12 flex flex-col gap-1">
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-pink-500 border-4 border-white flex items-center justify-center text-white font-bold text-xs">Día 30</div>
                  <h3 className="font-bold text-lg text-pink-600">Cuarta Semana</h3>
                  <p className="text-gray-700">Publicas esa foto en bikini que nunca te habías atrevido a subir y recibes una avalancha de “me gusta”. ❤️</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-black text-gray-800">Resultados de Algunas Alumnas...</h2>
              <p className="text-pink-600 font-medium">¡Mira lo que está sucediendo!</p>
              
              <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-md border-4 border-white bg-gray-50 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={carouselIdx}
                    src={carouselImages[carouselIdx]}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 w-full h-full object-contain bg-white"
                    alt="Resultado"
                  />
                </AnimatePresence>
                
                {/* Carousel controls/indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                  {carouselImages.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`w-2 h-2 rounded-full transition-all ${idx === carouselIdx ? 'bg-pink-500 w-4' : 'bg-gray-300'}`}
                    />
                  ))}
                </div>
              </div>

              <a href={buyLink} className="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-black text-2xl py-6 rounded-xl shadow-xl transition-all uppercase">
                ¡EMPEZAR AHORA!
              </a>
            </div>

            {/* What you get */}
            <div className="bg-gray-800 text-white p-8 rounded-3xl space-y-6">
              <h2 className="text-2xl font-black text-pink-400 text-center mb-8">Hoy vas a recibir:</h2>
              <ul className="space-y-4">
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Protocolo de la Gelatina Personalizado:</strong> Basado en investigaciones de Oxford – la forma más eficaz y segura de activar tus hormonas quemagrasas sin perder músculo ni pasar hambre.</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Truco de 5 minutos</strong> que evita el efecto rebote para siempre</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Método</strong> para comer 3x menos y perder 650 calorías extra al día</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Método “Exterminador de Dulces”</strong> para liberarte de los deseos incontrolables de comer dulces y comida chatarra.</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Hoja de Seguimiento</strong> - Descubre exactamente cuánto estás avanzando día tras día.</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span>Las primeras 20 mujeres recibirán el <strong>número de teléfono personal</strong> de Ana Rodríguez.</span></li>
                <li className="flex gap-3"><span className="text-green-400">✅</span> <span><strong>Acceso vitalicio</strong> a la app</span></li>
              </ul>
            </div>

            {/* Bonuses */}
            <div className="bg-pink-50 p-6 rounded-3xl border-2 border-pink-200">
              <div className="text-center mb-8">
                <span className="text-5xl">🎁</span>
                <h2 className="text-2xl font-black text-pink-800 mt-4 leading-tight">¡Garantizando hoy, todavía recibes 5 bonos exclusivos de regalo!</h2>
              </div>
              
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/bonus1.webp" className="w-full max-w-xs mx-auto rounded-lg object-contain" alt="Bono" />
                  <h3 className="font-black text-xl text-gray-800 text-center">Bono 1: Secretos de la Tribu Tsimane</h3>
                  <p className="text-center text-pink-600 font-bold line-through">De $27,00 a GRATIS</p>
                  <p className="text-gray-600 text-sm">El secreto usado por la tribu Tsimane de Bolivia, considerada una de las más saludables del mundo, para controlar tu glucosa, la hipertensión y reducir los niveles de colesterol malo en tu sangre.</p>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/bonus2.webp" className="w-full max-w-xs mx-auto rounded-lg object-contain" alt="Bono" />
                  <h3 className="font-black text-xl text-gray-800 text-center">Bono 2: 5 Tés Nocturnos</h3>
                  <p className="text-center text-pink-600 font-bold line-through">De $17,00 a GRATIS</p>
                  <p className="text-gray-600 text-sm">Los 5 tés nocturnos, casi milagrosos, que fueron aprobados por los mayores científicos de la actualidad para combatir la ansiedad, el estrés y la depresión.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/bonus%203.webp" className="w-full max-w-xs mx-auto rounded-lg object-contain" alt="Bono" />
                  <h3 className="font-black text-xl text-gray-800 text-center">Bono 3: Método Cohete Metabólico</h3>
                  <p className="text-center text-pink-600 font-bold line-through">De $37,00 a GRATIS</p>
                  <p className="text-gray-600 text-sm">Usado por atletas de alto nivel para multiplicar tu energía y vitalidad hasta en 500%, acelerar tu metabolismo aún más y llenarte de ánimo para realizar las principales actividades de tu día.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/bonus%204.webp" className="w-full max-w-xs mx-auto rounded-lg object-contain" alt="Bono" />
                  <h3 className="font-black text-xl text-gray-800 text-center">Bono 4: Guía de 100 ejercicios caseros</h3>
                  <p className="text-center text-pink-600 font-bold line-through">De $27,00 a GRATIS</p>
                  <p className="text-gray-600 text-sm">Una guía completa de 100 ejercicios para que hagas en tu casa para poder acelerar aún más tu proceso de pérdida de grasa con solo 20 minutos al día.</p>
                </div>

                <div className="bg-yellow-100 p-6 rounded-2xl shadow-sm space-y-4 border-2 border-yellow-300">
                  <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/bonus%20secreto.webp" className="w-full max-w-xs mx-auto rounded-lg object-contain mix-blend-multiply" alt="Bono" />
                  <h3 className="font-black text-xl text-gray-800 text-center">Bono 5: Regalo Sorpresa</h3>
                  <p className="text-center text-pink-600 font-bold line-through">De $47,00 a GRATIS</p>
                  <p className="text-gray-800 font-bold text-sm">No es un libro. No es un curso. No es absolutamente nada de lo que estás pensando. Las mujeres que se unieron al Protocolo de la Gelatina dicen que este regalo sorpresa por sí solo vale tanto como todo los bonos.</p>
                </div>
              </div>

              <div className="mt-8 text-center space-y-4 border-t-2 border-pink-200 pt-8">
                <p className="text-lg font-bold text-gray-800">¡Todos estos bonos suman más de <span className="line-through text-red-500">$197</span>!</p>
                <p className="text-gray-700">Pero hoy para las 10 próximas mujeres que finalicen la inscripción recibirán totalmente GRATIS junto con el Protocolo de la Gelatina Personalizado.</p>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-green-500 text-white p-8 rounded-3xl shadow-xl text-center space-y-6">
              <h2 className="text-3xl font-black uppercase">Protocolo de la Gelatina Personalizado + 5 Bonos</h2>
              
              <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/20">
                <p className="font-bold text-yellow-300 uppercase tracking-widest text-sm mb-2">GARANTÍA DE 60 DÍAS</p>
                <p className="line-through opacity-70 text-lg">$29.90</p>
                <div className="flex items-end justify-center gap-2 my-2">
                  <span className="text-4xl font-black">$9.90</span>
                  <span className="text-lg mb-1 opacity-90">pago único</span>
                </div>
                <div className="bg-yellow-400 text-yellow-900 font-bold inline-block px-3 py-1 rounded-full text-sm">67% OFF</div>
              </div>

              <a href={buyLink} className="inline-block w-full bg-white text-green-600 font-black text-2xl py-6 rounded-xl shadow-xl hover:bg-gray-100 transition-all uppercase">
                ¡QUIERO EL APP CON MI PROTOCOLO DE LA GELATINA!
              </a>

              <p className="text-sm font-medium opacity-90 italic">Imagina si dentro de 3 semanas te miras al espejo y no te reconoces... Solo porque decidiste comenzar HOY.</p>
            </div>

            {/* Social Proof */}
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <p className="font-bold mb-2">Carolina Gómez</p>
                <p className="text-gray-600 text-sm">"¡Muy bueno! Lo recomiendo, mi apetito bajó MUCHO y ya perdí 5 kg en los últimos 11 días. ¡Nunca imaginé que sería tan rápido!"</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <p className="font-bold mb-2">Laura Martínez</p>
                <p className="text-gray-600 text-sm">"¡Lo recomiendo muchísimo! Llevo usándolo 2 semanas y tengo muchas menos ganas de comer dulces, bajé de peso y me desinflamé bastante. ¡Mi esposo ya notó la diferencia! 👍"</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border">
                <p className="font-bold mb-2">Andrea Ramírez</p>
                <p className="text-gray-600 text-sm">"¡Hola! Lo compré hoy porque una amiga me lo recomendó... Estoy impresionada con los resultados que ella tuvo. ¡Ya estoy ansiosa por empezar! 🥰"</p>
              </div>

              <a href={buyLink} className="inline-block w-full bg-pink-600 hover:bg-pink-700 text-white font-black text-xl py-6 rounded-xl text-center shadow-xl transition-all uppercase mt-6">
                ¡QUIERO MI RECETA!
              </a>
            </div>

            {/* Guarantee */}
            <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-3xl text-center space-y-6">
              <img src="https://xyzgvsuttwrvbyyxdppq.supabase.co/storage/v1/object/public/imagens/truque%20gelatina/selo%20garantia.webp" className="w-32 mx-auto drop-shadow-md" alt="Garantia" />
              <p className="text-lg font-bold text-gray-800">Tienes 60 días completos para poner en práctica el Protocolo de la Gelatina.</p>
              <p className="text-gray-600">Si, por cualquier motivo, no percibes resultado o no te sientes satisfecha, solo envía un email o WhatsApp y devolvemos el 100% de tu dinero.</p>
              <div className="bg-white p-4 rounded-xl space-y-2 text-left">
                <p className="flex items-center gap-2 font-bold text-gray-800"><span className="text-xl">💰</span> Sin trampas, sin burocracia, sin letras pequeñas.</p>
                <p className="flex items-center gap-2 font-bold text-gray-800"><span className="text-xl">🎯</span> Es así de simple: o ves tu cuerpo comenzar a cambiar, o no pagas absolutamente nada.</p>
              </div>
            </div>

            {/* Two Options */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-center text-gray-800">Ahora Tienes 2 Opciones...</h2>
              
              <div className="bg-red-50 p-6 rounded-2xl border border-red-200 space-y-2">
                <p className="text-red-900 font-bold flex items-start gap-2">
                  <span className="text-red-500 shrink-0">❌ 1.</span> 
                  <span>Continuar luchando contra la balanza, probando dietas locas, gastando dinero en productos caros, frustrándote con cada ropa que no te entra y sintiendo que nada funciona para ti.</span>
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-2xl border border-green-200 space-y-2 shadow-md">
                <p className="text-green-900 font-bold flex items-start gap-2 text-lg">
                  <span className="text-green-600 shrink-0">✔️ 2.</span> 
                  <span>Comenzar hoy con tu Protocolo de la Gelatina, usando una receta casera, natural y barata, que ya ayudó a cientos de mujeres a eliminar grasa 24 horas al día.</span>
                </p>
                <a href={buyLink} className="inline-block w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-4 rounded-xl text-center shadow-xl transition-all uppercase mt-6 transform hover:scale-105">
                  ¡QUIERO MI PROTOCOLO!
                </a>
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-black text-center text-gray-800 mb-8">❓ Dudas Frecuentes</h2>
              {[
                "¿La receta con gelatina es segura?",
                "¿En cuánto tiempo voy a conseguir resultados?",
                "¿Cuánto tiempo por día necesito?",
                "¿Funciona para cualquier tipo de cuerpo?",
                "¿Cómo funciona la garantía de 60 días?",
                "¿Cómo hago para acceder al protocolo después de la compra?",
                "¿Y si tengo dudas durante el curso?"
              ].map((q, i) => (
                <div key={i} className="bg-white p-4 rounded-xl border font-bold text-gray-700 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                  <span className="flex gap-2">♦️ {q}</span>
                  <span className="text-gray-400">+</span>
                </div>
              ))}
            </div>

          </motion.div>
        )}

      </div>
    </div>
  );
  
  return renderContent();
}
