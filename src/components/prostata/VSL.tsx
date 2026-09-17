import { useState, useEffect } from 'react';

export default function VSL() {
  const [showPitch, setShowPitch] = useState(false);

  useEffect(() => {
    // delay for pitch. 
    // Usually this matches the video/audio length. Setting a smaller delay for testing if needed, or 5 min.
    // Let's set 5 minutes (300000ms) but we can use skipDelay logic if we had it.
    const timer = setTimeout(() => {
      setShowPitch(true);
    }, 300000); 

    return () => clearTimeout(timer);
  }, []);

  const buyLink = import.meta.env.VITE_LINK_COMPRA || "{{LINK_COMPRA}}";

  return (
    <div className="bg-gray-50 min-h-screen pt-6 pb-24 text-gray-900 font-sans">
      <div className="max-w-lg mx-auto px-4 space-y-8">
        
        <div className="bg-green-50 text-green-700 font-black p-4 rounded-2xl border-2 border-green-200 text-center flex items-center justify-center gap-3 mb-6 shadow-sm">
          <span className="text-2xl animate-bounce">🤩</span> 
          <span className="text-lg tracking-tight uppercase">Protocolo Gerado com SUCESSO!</span>
        </div>

        <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/lg-0C0tE-o-seu-protocolo-exclusivo-esta-pronto.webp" alt="Protocolo Pronto" className="w-full rounded-2xl shadow-xl border-4 border-white mb-6 object-cover" />

        <h1 className="text-2xl sm:text-3xl font-black text-center text-gray-900 leading-tight tracking-tight">
          Desinche a próstata em <span className="text-green-600">14 dias</span> com esta bebida caseira feita com apenas 2 ingredientes naturais!
        </h1>
        
        <p className="text-gray-700 font-medium text-center text-lg leading-relaxed">
          A preparação revelada por especialistas em saúde masculina, com as principais ervas anti-inflamatórias e cuidados que ajudam a reduzir o volume da próstata e melhorar a função urinária e sexual — sem remédios, sem cirurgia, e com resultados visíveis mesmo após os 40 anos…
        </p>

        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="space-y-3 text-center">
            <span className="bg-red-100 text-red-700 font-black px-3 py-1.5 rounded-lg text-sm uppercase tracking-wide block">Antes</span>
            <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/md-mrjBS-antes.webp" className="w-full rounded-2xl border-4 border-red-100 shadow-md object-cover aspect-square" alt="Antes" />
          </div>
          <div className="space-y-3 text-center">
             <span className="bg-green-100 text-green-700 font-black px-3 py-1.5 rounded-lg text-sm uppercase tracking-wide block">Depois</span>
             <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/md-5HcEO-depois.webp" className="w-full rounded-2xl border-4 border-green-100 shadow-md object-cover aspect-square" alt="Depois" />
          </div>
        </div>

        <div className="space-y-4 pt-4 text-[15px] bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
          <p><strong className="text-red-600 font-black">Este é você sendo afetado pelos parasitas:</strong> cada dia mais difícil para urinar e perdendo, aos poucos, seu desempenho sexual.</p>
          <p><strong className="text-green-600 font-black">Esse é você livre da HPB:</strong> próstata controlada, noites bem dormidas, sem pinga-pinga e com o desempenho sexual de quando tinha 25 anos.</p>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 p-6 rounded-2xl mt-8 shadow-inner">
          <h3 className="font-black text-blue-900 text-center mb-6 text-lg leading-tight">Escute o Áudio. Irei te explicar como funciona o Protocolo desinflamação da Próstata. 👇</h3>
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
             <div className="flex items-center gap-4 mb-4">
               <img src="https://media.atomicatpages.net/u/vAo8jNbX4JSDmVh7tfSDFPK8uts1/Pictures/nhbbPb0481930.png" className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-blue-50" alt="Ana Lima" />
               <div>
                 <p className="font-bold text-gray-900 text-lg leading-tight">Ana Lima</p>
                 <p className="text-sm text-blue-600 font-semibold">Especialista</p>
               </div>
             </div>
             <audio controls autoPlay controlsList="nodownload" className="w-full rounded-full bg-gray-50">
               <source src="https://media.inlead.cloud/uploads/23849/2025-06-07/ra5dc-audio-2-mari-protostata.mp3" type="audio/mpeg" />
             </audio>
          </div>
        </div>

        <div className="bg-yellow-50 border-x-4 border-yellow-400 p-6 rounded-r-2xl space-y-4 shadow-sm">
          <h3 className="font-black text-xl text-yellow-900 flex items-center gap-2"><span className="text-2xl">⚠️</span> Atenção</h3>
          <p className="font-semibold text-yellow-800">Este protocolo foi cuidadosamente desenvolvido para homens que sofrem com a próstata aumentada e fariam de tudo para recuperar o controle da urina, dormir melhor e se sentir confiantes novamente.</p>
          <ul className="space-y-3 font-medium text-yellow-800 pt-2">
            <li className="flex gap-3"><span className="text-green-600 shrink-0 mt-0.5">✅</span> <span>Então, se você convive com sintomas como jato fraco, vontade frequente de urinar ou sensação de bexiga cheia...</span></li>
            <li className="flex gap-3"><span className="text-green-600 shrink-0 mt-0.5">✅</span> <span>Se já não dorme mais uma noite inteira por causa das idas ao banheiro...</span></li>
            <li className="flex gap-3"><span className="text-green-600 shrink-0 mt-0.5">✅</span> <span>Ou se sente que seu desempenho sexual não é mais o mesmo — e os médicos dizem que “é normal para a sua idade”...</span></li>
          </ul>
          <p className="text-[15px] font-black text-yellow-900 pt-4 bg-yellow-100 p-4 rounded-xl">E você não aguenta mais viver limitado, com medo de depender de fraldas, sondas ou cirurgia… Então o protocolo natural de 14 dias foi feito pra você.</p>
        </div>

        <div className="flex justify-center py-6 w-full">
          <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/md-WhBTM-logo-protocolo-desinflamacao-da-prostata.webp" alt="Logo" className="w-full max-w-[280px] sm:max-w-[320px] h-auto object-contain drop-shadow-sm px-4" />
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-xl border-4 border-gray-100">
          <ul className="space-y-4 text-gray-700 text-[15px] mb-8 font-medium">
             {[
               { name: "Preparação para desparasitação", price: "R$37,90" },
               { name: "Desparasitação completa", price: "R$57,00" },
               { name: "Acompanhamento Individual", price: "R$97,00" },
               { name: "Guia alimentar contra parasitas", price: "R$27,00" },
               { name: "Tira duvidas com a equipe", price: "R$29,90" },
               { name: "Manutenção anual do protocolo", price: "R$49,99" },
               { name: "Receita para desinflamação em 14 Dias", price: "R$97,00" },
             ].map(item => (
               <li key={item.name} className="flex justify-between items-center border-b border-gray-100 pb-3">
                 <span className="flex items-center gap-2"><span className="text-green-500 font-bold shrink-0">✅</span> <span>{item.name}</span></span> 
                 <span className="line-through text-gray-400 shrink-0 ml-2">{item.price}</span>
               </li>
             ))}
            
            <li className="flex items-center justify-between pt-4 mt-2">
               <span className="text-lg font-black text-gray-400">Valor total:</span> 
               <span className="line-through text-lg font-bold text-gray-400">R$395,00</span>
            </li>
          </ul>

          <div className="text-center space-y-1 mb-8 bg-green-50 py-4 rounded-2xl border border-green-100">
            <p className="text-green-800 font-black uppercase tracking-widest text-sm">Por apenas</p>
            <p className="text-6xl font-black text-green-600 drop-shadow-sm">R$ 37,90</p>
          </div>

          <a href={showPitch ? buyLink : '#'} className="block w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#16a34a] hover:shadow-[0_4px_0_0_#16a34a] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all text-center uppercase tracking-wide">
            Acessar meu Protocolo Agora! ✅
          </a>

          <div className="flex gap-4 mt-8 text-xs text-gray-600 justify-center bg-gray-50 py-4 rounded-xl">
             <div className="flex flex-col items-center gap-1.5 text-center flex-1">
               <span className="text-green-500 text-2xl drop-shadow-sm">✅</span>
               <strong className="text-sm">Pagamento Único</strong>
               <span>Sem mensalidades.</span>
             </div>
             <div className="flex flex-col items-center gap-1.5 text-center flex-1">
               <span className="text-green-500 text-2xl drop-shadow-sm">✅</span>
               <strong className="text-sm">Acesso Imediato</strong>
               <span>Após o pagamento.</span>
             </div>
          </div>
        </div>

        <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/lg-RYvNF-teste-seguro-180-dias-garantia.webp" className="w-full mt-8 rounded-2xl shadow-md border-4 border-white" alt="Garantia" />

        <div className="pt-12">
           <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-900 bg-black aspect-[16/9] relative mb-10 w-full mx-auto">
             <iframe 
               width="100%" 
               height="100%" 
               src="https://www.youtube.com/embed/xXA8mJer56k?autoplay=0&controls=0&rel=0&modestbranding=1" 
               title="Depoimento player" 
               frameBorder="0" 
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen
               className="absolute inset-0"
             ></iframe>
           </div>

           <h2 className="text-2xl font-black text-center text-blue-900 mb-8 leading-tight px-4">Nas primeiras semanas seguindo nosso protocolo, você vai…</h2>
           
           <ul className="space-y-4 mb-10">
             <li className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner font-black text-xl">1</div>
               <p className="text-gray-800 font-bold leading-tight">Sentir a urina fluir com mais facilidade e menos esforço.</p>
             </li>
             <li className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner font-black text-xl">2</div>
               <p className="text-gray-800 font-bold leading-tight">Dormir melhor, sem precisar levantar várias vezes durante a noite.</p>
             </li>
             <li className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-300 transition-colors">
               <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-inner font-black text-xl">3</div>
               <p className="text-gray-800 font-bold leading-tight">Perceber o retorno gradual da libido e da firmeza nas relações.</p>
             </li>
           </ul>

           <div className="bg-gradient-to-b from-green-500 to-green-600 p-8 rounded-3xl shadow-2xl text-white text-center mb-10 border-4 border-green-400">
             <p className="font-black text-2xl tracking-widest uppercase mb-1 drop-shadow">TESTE 180 DIAS</p>
             <p className="text-sm font-bold opacity-90 mb-6 tracking-widest uppercase">sem compromisso</p>
             <div className="bg-black/20 p-6 rounded-2xl mb-6">
                <p className="font-medium opacity-90 mb-1 uppercase tracking-widest text-sm">por apenas 5x de</p>
                <p className="text-6xl font-black drop-shadow-lg">R$ 8,27</p>
             </div>
             <a href={showPitch ? buyLink : '#'} className="inline-block w-full bg-white text-green-700 font-black text-xl py-5 rounded-2xl shadow-lg transition-transform transform hover:scale-[1.02] active:scale-[0.98] uppercase tracking-wide">
               Acessar meu Protocolo Agora! ✅
             </a>
           </div>

           <div className="space-y-6">
             <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-gray-100">
               <div className="flex gap-4 items-center mb-4">
                 <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Fernando" className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-gray-100" />
                 <div>
                   <p className="font-black text-gray-900 text-lg font-black">Fernando Martins</p>
                   <p className="text-sm text-gray-500 font-medium">Blumenau, SC</p>
                 </div>
               </div>
               <p className="text-gray-700 text-[15px] italic leading-relaxed">"Minha próstata estava com 42 cm e eu nem sabia que isso era considerado grande. Ia ao banheiro toda hora, o jato era fraco e eu acordava 3 vezes por noite. Após seguir o protocolo, refiz o exame e meu volume caiu para 28 cm³. Hoje urino com força, durmo direto e até minha energia voltou."</p>
             </div>

             <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-gray-100">
               <div className="flex gap-4 items-center mb-4">
                 <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Diego" className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-gray-100" />
                 <div>
                   <p className="font-black text-gray-900 text-lg font-black">Diego Ramalho</p>
                   <p className="text-sm text-gray-500 font-medium">São Paulo, RJ</p>
                 </div>
               </div>
               <p className="text-gray-700 text-[15px] italic leading-relaxed">"Minha próstata media 38 cm³ e os sintomas eram horríveis: jato fraco, vontade constante de urinar e sensação de bexiga cheia. Hoje meu exame mostra 26 cm³. Durmo a noite inteira sem levantar e até minha autoestima melhorou."</p>
             </div>

             <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-gray-100">
               <div className="flex gap-4 items-center mb-4">
                 <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Fernanda" className="w-16 h-16 rounded-full object-cover shadow-sm border-2 border-gray-100" />
                 <div>
                   <p className="font-black text-gray-900 text-lg font-black">Fernanda Silva</p>
                   <p className="text-sm text-gray-500 font-medium">Natal, RN</p>
                 </div>
               </div>
               <p className="text-gray-700 text-[15px] italic leading-relaxed">"Meu marido passou anos sofrendo calado. Ele levantava várias vezes à noite, ficava irritado, cansado, e evitava até os momentos a dois. Eu via o quanto aquilo mexia com a autoestima dele, mas ele nunca falava muito sobre. Quando ele começou o protocolo, confesso que fiquei com o pé atrás... mas em poucos dias vi meu marido voltar a sorrir, dormir melhor e recuperar a confiança. Hoje ele mesmo diz que se sente mais homem, mais leve e com energia de novo. E eu? Me sinto casada com o homem de antes — ou até melhor."</p>
             </div>
           </div>

           <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-8 rounded-3xl shadow-2xl mt-10 space-y-6 relative overflow-hidden border-4 border-blue-800">
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500 blur-3xl opacity-30 rounded-full" />
             <h3 className="text-2xl font-black relative z-10 leading-tight">Você também vai receber, de forma gratuita, o “Guia Inabalável da Virilidade Masculina”</h3>
             <ul className="space-y-4 text-[15px] opacity-90 relative z-10">
               <li className="flex gap-3"><span className="text-blue-400 mt-1 shrink-0">✦</span> <span>Os principais inimigos ocultos na sua rotina que estão roubando sua libido e sua potência sexual sem que você perceba.</span></li>
               <li className="flex gap-3"><span className="text-blue-400 mt-1 shrink-0">✦</span> <span>Hábitos simples e naturais que ajudam a restaurar o desejo e a firmeza nas relações.</span></li>
               <li className="flex gap-3"><span className="text-blue-400 mt-1 shrink-0">✦</span> <span>Como identificar sinais silenciosos de desequilíbrio hormonal, mesmo sem exames ou consultas frequentes.</span></li>
               <li className="flex gap-3"><span className="text-blue-400 mt-1 shrink-0">✦</span> <span>Estratégias naturais para aumentar a testosterona, reduzir o estresse e recuperar sua confiança como homem.</span></li>
             </ul>
             <a href={showPitch ? buyLink : '#'} className="block mt-6 relative z-10 w-full bg-green-500 hover:bg-green-600 text-white font-black py-5 rounded-2xl shadow-[0_6px_0_0_#16a34a] hover:shadow-[0_4px_0_0_#16a34a] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all text-center uppercase tracking-wide">Acessar meu Protocolo Agora! ✅</a>
           </div>

           <div className="bg-white p-8 rounded-3xl shadow-xl border-2 border-gray-100 mt-10 text-center space-y-6">
             <p className="font-black text-gray-900 text-lg leading-tight uppercase tracking-tight">Você também vai receber um presente surpresa, totalmente gratuito, ao entrar hoje para o grupo de homens que decidiram cuidar da próstata ainda neste ano!</p>
             <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/lg-ADJ0F-presente-especial.webp" className="w-full rounded-2xl shadow-inner border border-gray-50 object-cover" alt="Presente" />
             <a href={showPitch ? buyLink : '#'} className="block w-full bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#16a34a] hover:shadow-[0_4px_0_0_#16a34a] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all text-center uppercase tracking-wide">
               Acessar meu Protocolo Agora! ✅
             </a>
           </div>

           <img src="https://media.inlead.cloud/uploads/23849/2025-10-24/lg-ZSHq9-seu-risco-e-zero.webp" className="w-full mt-10 rounded-2xl shadow-md border-4 border-white" alt="Risco Zero" />

           <div className="bg-gray-100 p-8 rounded-3xl mt-10 space-y-6 text-center border-2 border-gray-200">
             <h3 className="font-black text-2xl text-gray-900 leading-tight">Quantas vezes você já ouviu que é normal conviver com isso depois dos 40?</h3>
             <div className="h-1 w-16 bg-blue-500 mx-auto rounded-full" />
             <p className="text-gray-800 font-bold text-lg">A verdade é que o seu corpo ainda responde — ele só precisa do estímulo certo no momento certo.</p>
             <p className="text-gray-600 font-medium leading-relaxed">🌿 Este protocolo natural já ajudou centenas de homens a reduzirem o volume da próstata, voltarem a urinar com força e recuperarem sua confiança na vida sexual.</p>
             <p className="font-black text-blue-700 text-xl py-2 bg-blue-50 rounded-xl">✨ Não aceite que a idade defina sua qualidade de vida.</p>
             <p className="text-gray-800 font-bold">Clique no botão abaixo e comece hoje a retomar o controle da sua saúde masculina.</p>
             
             <a href={showPitch ? buyLink : '#'} className="block w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-black text-xl py-5 rounded-2xl shadow-[0_6px_0_0_#16a34a] hover:shadow-[0_4px_0_0_#16a34a] hover:translate-y-[2px] active:scale-[0.98] active:shadow-none active:translate-y-[6px] transition-all text-center uppercase tracking-wide">
               Acessar meu Protocolo Agora! ✅
             </a>
           </div>

           <div className="mt-16 space-y-6">
             <h2 className="text-3xl font-black text-center text-gray-900 mb-8 uppercase tracking-widest">Dúvidas Frequentes</h2>
             
             {[
               { q: "E se eu não tiver resultados com o protocolo?", a: "Se dentro de até 180 dias você achar que não é para você, basta solicitar o reembolso e devolveremos 100% do seu dinheiro." },
               { q: "O que exatamente eu vou receber ao comprar?", a: "Você receberá acesso imediato à plataforma com a receita da desparasitação, chás complementares, bônus adicionais e guia alimentar." },
               { q: "Este produto é um remédio ou tratamento médico?", a: "Não. É um protocolo de ingredientes 100% naturais encontrados no mercado, que atuam no combate aos parasitas e inflamações." },
               { q: "Em quanto tempo posso esperar resultados?", a: "Os resultados variam, mas a grande maioria dos homens relata melhoras significativas no fluxo urinário e na disposição nos primeiros 14 dias." },
               { q: "O protocolo funciona para qualquer pessoa?", a: "Sim, ele foi desenvolvido para ser seguro e eficaz para homens a partir dos 40 anos, de forma totalmente natural e sem contra-indicações diretas." }
             ].map((faq, i) => (
               <div key={i} className="bg-white border-2 border-gray-100 rounded-2xl p-6 shadow-sm hover:border-blue-200 transition-colors">
                 <h4 className="font-black text-gray-900 text-lg flex gap-3 items-start"><span className="text-blue-500">?</span> <span>{faq.q}</span></h4>
                 <p className="text-[15px] font-medium text-gray-600 mt-3 pl-6">{faq.a}</p>
               </div>
             ))}
           </div>

        </div>
      </div>
    </div>
  );
}
