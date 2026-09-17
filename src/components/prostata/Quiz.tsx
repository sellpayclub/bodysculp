import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Quiz({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(s => s + 1);
  };

  const totalSteps = 23;
  const progress = Math.round((step / (totalSteps - 1)) * 100);

  const Title = ({ children, key }: { children: React.ReactNode, key?: string }) => (
    <h2 className="text-2xl font-black text-gray-900 leading-tight mb-4 tracking-tight">{children}</h2>
  );

  const OptionBtn = ({ children, onClick, key }: { children: React.ReactNode; onClick?: () => void; key?: string }) => (
    <button
      onClick={onClick}
      className="w-full bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 p-5 rounded-2xl font-semibold text-gray-700 transition-all text-left flex items-center justify-between shadow-sm active:scale-[0.98]"
    >
      <span className="flex items-center gap-3 text-lg leading-tight">{children}</span>
      <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const ContinueBtn = ({ onClick, disabled }: { onClick: () => void; disabled?: boolean }) => (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full font-black text-white py-5 rounded-2xl transition hover:translate-y-[2px] active:scale-[0.98] active:translate-y-[6px] active:shadow-none uppercase tracking-wide text-lg mt-6 block ${disabled ? 'bg-gray-400 cursor-not-allowed hidden' : 'bg-blue-600 hover:bg-blue-700 shadow-[0_6px_0_0_#1d4ed8] hover:shadow-[0_4px_0_0_#1d4ed8]'}`}
    >
      Continuar &raquo;
    </button>
  );

  // Note: We use static steps to simplify state.
  return (
    <div className="max-w-lg mx-auto w-full min-h-screen bg-gray-50 flex flex-col relative">
      <div className="bg-white px-4 py-4 shadow-sm sticky top-0 z-20 flex flex-col gap-4 border-b border-gray-200">
        <div className="flex justify-center w-full pb-1">
          <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/md-WhBTM-logo-protocolo-desinflamacao-da-prostata.webp" className="h-14 sm:h-16 object-contain" alt="Logo" />
        </div>
        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden shadow-inner">
          <div className="bg-blue-600 h-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="p-5 pt-8 pb-24 flex-1">
        <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="st0" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 leading-tight mb-2">Quantos destes sintomas você está sentindo?</h2>
            <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-a8rWQ-sente-sintomas-mais-de-2-meses-em-prostata.webp" className="w-full rounded-xl shadow-md mb-4" alt="Sintomas" />
            <div className="space-y-3 pt-2">
              <OptionBtn onClick={nextStep}><span>Sinto mais de 1 😓</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>Sinto 2 ou mais 😬</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="st1" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Qual é a sua idade?</Title>
            <p className="text-gray-600 mb-6 text-sm">Com o avanço da idade, a próstata tende a crescer, um processo natural que leva à Hiperplasia Prostática Benigna (HPB). Assim como a menopausa marca a queda da fertilidade feminina, o aumento da próstata pode comprometer a função urinária e sexual masculina, mesmo em homens que nunca tiveram problemas de saúde antes.</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Até 40 anos', img: 'https://media.inlead.cloud/uploads/23849/2025-10-23/md-c9Rjw-homem-ate-40-anos.webp' },
                { label: '41 anos a 50 anos', img: 'https://media.inlead.cloud/uploads/23849/2025-10-23/md-wTDY1-homem-de-41-a-50-anos.webp' },
                { label: '51 anos a 60 anos', img: 'https://media.inlead.cloud/uploads/23849/2025-10-23/md-o81Od-homem-de-51-a-60-anos.webp' },
                { label: 'Mais de 61 anos', img: 'https://media.inlead.cloud/uploads/23849/2025-10-23/md-QuVCf-homem-com-mais-de-60-anos.webp' }
              ].map(opt => (
                <button
                  key={opt.label}
                  onClick={nextStep}
                  className="bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 p-4 rounded-2xl font-bold text-gray-700 transition shadow-sm flex flex-col items-center gap-3 active:scale-[0.98] w-full"
                >
                  <img src={opt.img} alt={opt.label} className="w-full h-auto rounded-xl object-contain aspect-square border border-gray-100" />
                  <span className="text-[15px] text-center leading-tight">{opt.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="st2" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você já foi diagnosticado com HPB (Hiperplasia Prostática Benigna)?</Title>
            <p className="text-gray-600 mb-6 text-sm">Por favor, responda com atenção — essa informação é essencial para a nossa análise.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}><span>🙏 Sim, ja fui diagnosticado.</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>⌛ Não, mas estou desconfiado.</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="st3" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Há quanto tempo você recebeu o diagnóstico de HPB?</Title>
            <p className="text-gray-600 mb-6 text-sm">Essa informação é essencial para uma análise mais precisa da sua condição.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}>✅ Menos de 6 meses</OptionBtn>
              <OptionBtn onClick={nextStep}>✅ Entre 6 meses e 1 ano</OptionBtn>
              <OptionBtn onClick={nextStep}>✅ Entre 1 e 3 anos</OptionBtn>
              <OptionBtn onClick={nextStep}>✅ Mais de 3 anos</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="st4" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você tem alguma dessas condições?</Title>
            <p className="text-gray-600 mb-6 text-sm">Elas podem influenciar diretamente o crescimento da sua próstata. Selecione uma ou mais:</p>
            {/* Allowing simple continued flow for checkboxes */}
            <div className="space-y-3 mb-6">
              {[
                'Tenho obesidade ou sobrepeso',
                'Tenho diabetes tipo 2',
                'Tenho distúrbios hormonais',
                'Tenho pressão alta (hipertensão)',
              ].map(opt => (
                <label key={opt} className="flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500">
                  <input type="checkbox" className="w-6 h-6 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0" />
                  <span className="font-semibold text-gray-700 text-lg leading-tight">{opt}</span>
                </label>
              ))}
              <OptionBtn onClick={nextStep}>🙌 Não tenho nenhuma dessas condições</OptionBtn>
            </div>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="st5" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você já Desparasitou de alguma maneira?</Title>
            <p className="text-gray-600 mb-6 text-sm">Utilizando remédios ou formas naturais.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}><span>😐 Não, eu nunca desparasitei.</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😁 Sim, eu já desparasitei.</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="st6" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <p className="font-bold text-red-800 text-lg">CUIDADO!</p>
              <p className="text-red-700 mt-2">Se você nunca fez uma Desparasitação Natural, cuidado: os vermes podem se multiplicar no seu corpo e alcançar órgãos vitais como próstata, cérebro, coração e pulmões. Não ignore esse risco, é essencial desparasitar pelo menos uma vez ao ano!</p>
            </div>
            <p className="font-bold text-gray-800 mb-2 border-b pb-2">Veja essa Notícia do G1 👇</p>
            <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-6NKlc-homem-de-42-anos-descobre-parasita.webp" className="w-full rounded-xl shadow-md mb-6" alt="Noticia G1" />
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="st7" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você tem ciência que a falta de cuidados com esse assunto pode piorar sua próstata e deixar sequelas que podem ser irreversíveis?</Title>
            <p className="text-gray-600 mb-6 text-sm">Por favor, seja sincero.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}><span>😔 Sim, eu sei da gravidade que é ter parasitas habitando o meu intestino</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😰 Não sabia da gravidade, mas quero cuidar.</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 8 && (
          <motion.div key="st8" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você concorda comigo que na maioria das vezes o aumento da próstata não é nossa culpa?</Title>
            <p className="text-gray-600 mb-6 text-sm">Somos taxados de machistas, ignorantes e desleixados, mas isso se deve ao nosso organismo estar inflamado por conta de parasitas intestinais. Por favor, seja sincero, quero ajudar!</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}>Eu concordo sim!</OptionBtn>
              <OptionBtn onClick={nextStep}>Concordo em partes.</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 9 && (
          <motion.div key="st9" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você comeu algum desses alimentos nos últimos 3 meses?</Title>
            <p className="text-gray-600 mb-6 text-sm">Responda com atenção estamos avaliando cada resposta.</p>
            <div className="space-y-3 mb-6">
              {['Queijo', 'Álcool', 'Batata Frita', 'Refrigerante', 'Salsicha'].map(opt => (
                 <label key={opt} className="flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 shadow-sm transition-all flex-1">
                   <input type="checkbox" className="w-6 h-6 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0" />
                   <span className="font-semibold text-gray-700 text-lg leading-tight">{opt}</span>
                 </label>
              ))}
            </div>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 10 && (
          <motion.div key="st10" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Dentro dos sintomas listados abaixo, quais mais te incomodam?</Title>
            <p className="text-gray-600 mb-6 text-sm">Selecione um ou mais.</p>
            <div className="space-y-3 mb-6">
              {[
                'JATO FRACO DE URINA',
                'VONTADE FREQUENTE DE URINAR',
                'DIFICULDADE PARA COMEÇAR A URINAR',
                'SENSAÇÃO DE BEXIGA CHEIA APÓS URINAR',
                'URGÊNCIA PARA URINAR',
                'GOTEJAMENTO NO FINAL DO XIXI',
                'EJACULAÇÃO PRECOCE'
              ].map(opt => (
                 <label key={opt} className="flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500">
                   <input type="checkbox" className="w-6 h-6 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0" />
                   <span className="font-bold text-gray-800 text-base leading-tight mt-0.5">{opt}</span>
                 </label>
              ))}
            </div>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 11 && (
          <motion.div key="st11" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Há quanto tempo você convive com esses sintomas?</Title>
            <p className="text-gray-600 mb-6 text-sm">Essa informação é essencial para entendermos melhor a sua situação atual.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}>
                <div className="space-y-1">
                  <div className="font-bold">Menos de 6 meses</div>
                  <div className="text-xs font-normal text-gray-500">Está começando agora, mas já tá me deixando preocupado.</div>
                </div>
              </OptionBtn>
              <OptionBtn onClick={nextStep}>
                <div className="space-y-1">
                  <div className="font-bold">Entre 6 meses e 1 ano</div>
                  <div className="text-xs font-normal text-gray-500">Já faz um tempo... e percebo que tá piorando aos poucos.</div>
                </div>
              </OptionBtn>
              <OptionBtn onClick={nextStep}>
                <div className="space-y-1">
                  <div className="font-bold">Entre 1 e 3 anos</div>
                  <div className="text-xs font-normal text-gray-500">Convivo com isso há anos e sinceramente, cansei de aceitar como "normal".</div>
                </div>
              </OptionBtn>
              <OptionBtn onClick={nextStep}>
                <div className="space-y-1">
                  <div className="font-bold">Mais de 3 anos</div>
                  <div className="text-xs font-normal text-gray-500">Já faz tanto tempo que convivo com isso... sinceramente, nem lembro mais como era viver sem esses sintomas.</div>
                </div>
              </OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 12 && (
          <motion.div key="st12" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Os sintomas que você selecionou tem atrapalhado a sua vida?</Title>
            <div className="space-y-3 mt-6">
              <OptionBtn onClick={nextStep}>✅ Sim, demais!</OptionBtn>
              <OptionBtn onClick={nextStep}>😅 Sim, está tão normal na minha vida que eu já até acostumei.</OptionBtn>
              <OptionBtn onClick={nextStep}>🧐 Se você não tivesse falado, eu nem saberia que poderia ser parasitose.</OptionBtn>
              <OptionBtn onClick={nextStep}>😌 Não me atrapalha não.</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 13 && (
          <motion.div key="st13" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você sabe qual é o volume atual da sua próstata?</Title>
            <p className="text-gray-600 mb-6 text-sm">Responder à pergunta abaixo pode ajudar a identificar sinais precoces de crescimento anormal.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}><span>😀 Menos de 30 cm³ (volume normal)</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>🤨 Entre 30 e 40 cm³ (volume levemente aumentado)</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😮 Entre 40 e 60 cm³ (volume moderadamente aumentado)</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😥 Acima de 60 cm³ (volume bastante aumentado)</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>🥵 Não sei / Nunca fiz exame de volume prostático</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 14 && (
          <motion.div key="st14" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-6">
            <div className="bg-yellow-50 border-2 border-yellow-400 p-5 rounded-2xl">
              <h3 className="font-black text-xl text-yellow-800 flex items-center gap-2 mb-2">⚠️ Os Resultados Não Mentem:</h3>
              <p className="font-bold text-yellow-900">Seus Sintomas estão indicando Algo Muito Perigoso – Ouça Com Atenção!</p>
              <p className="text-yellow-800 text-sm mt-2">Escute essa rápida explicação 👇<br/>Caso o áudio não inicie, basta clicar nele!</p>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow border-2 border-blue-100 mt-2">
               <div className="flex items-center gap-4 mb-4">
                 <img src="https://media.atomicatpages.net/u/vAo8jNbX4JSDmVh7tfSDFPK8uts1/Pictures/nhbbPb0481930.png" className="w-14 h-14 rounded-full object-cover shadow-sm border-2 border-blue-50" alt="Ana Lima" />
                 <div>
                   <p className="font-bold text-gray-900 text-lg leading-tight">Ana Lima</p>
                   <p className="text-sm text-blue-600 font-semibold">Especialista</p>
                 </div>
               </div>
               <audio controls autoPlay controlsList="nodownload" className="w-full rounded-full bg-gray-50">
                 <source src="https://media.inlead.cloud/uploads/23849/2025-06-07/06qf1-audio-1-mari-prostata-primeiro.mp3" type="audio/mpeg" />
               </audio>
            </div>

            <div className="pt-6 border-t border-gray-200">
               <h3 className="font-black text-xl text-blue-800 mb-4 text-center">🔔 Veja este caso</h3>
               <p className="text-center text-sm font-bold bg-blue-100 text-blue-800 py-2 rounded-lg mb-4">1 semana após iniciar a desparasitação</p>
               <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-qwUmR-1-semana-apos-iniciar-a-desparasitacao.webp" className="w-full rounded-2xl shadow-md border mb-4" alt="Resultado" />
               
               <div className="bg-gray-50 p-4 rounded-xl italic text-gray-700 text-sm border">
                 <p className="font-bold text-gray-900 not-italic mb-2 border-b pb-2">Roberto Limeira <span className="font-normal text-gray-500 text-xs ml-2">— Porto Alegre, RS</span></p>
                 "Eu vivia indo ao banheiro, principalmente à noite. A bexiga nunca esvaziava direito e o jato era fraco. Achei que era normal da idade, mas descobri que meu corpo estava inflamado por parasitas. Fiz a desparasitação e, em menos de 2 semanas, tudo mudou. Urino normalmente, durmo a noite toda e até meu desempenho voltou. Me sinto outro homem."
               </div>
            </div>

            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 15 && (
          <motion.div key="st15" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você teria interesse em receber um protocolo personalizado para Desparasitação em 14 dias?</Title>
            <div className="space-y-3 mt-6">
              <OptionBtn onClick={nextStep}>✅ Sim, Eu quero demais!</OptionBtn>
              <OptionBtn onClick={nextStep}>😃 Tenho interesse, mas quero tirar dúvidas.</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 16 && (
          <motion.div key="st16" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você está utilizando algum desses medicamentos atualmente?</Title>
            <p className="text-gray-600 mb-6 text-sm">Responda com atenção, selecione um ou mais;</p>
            <div className="space-y-3 mb-6">
              {[
                'Finasterida',
                'Cloridrato de Tansulosina',
                'Dutasterida',
                'Combinações de Dutasterida + Tansulosina',
                'Mesilato de Doxazosina',
                'Tadalafila'
              ].map(opt => (
                 <label key={opt} className="flex items-start gap-4 p-5 border-2 border-gray-200 rounded-2xl bg-white cursor-pointer hover:border-blue-500 hover:bg-blue-50 shadow-sm transition-all focus-within:ring-2 focus-within:ring-blue-500">
                   <input type="checkbox" className="w-6 h-6 mt-0.5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 flex-shrink-0" />
                   <span className="font-semibold text-gray-700 text-lg leading-tight">{opt}</span>
                 </label>
              ))}
              <OptionBtn onClick={nextStep}>Não uso nada no momento</OptionBtn>
            </div>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 17 && (
          <motion.div key="st17" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Com que frequência você realiza monitoramento do tamanho da sua Próstata?</Title>
            <p className="text-gray-600 mb-6 text-sm">Responda com atenção, por favor.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}><span>⚠ A CADA 6 MESES</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>✅ A CADA 12 MESES</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😥 A CADA 2 ANOS</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>🩸 FIZ 1 ÚNICA VEZ</span></OptionBtn>
              <OptionBtn onClick={nextStep}><span>😐 AINDA NÃO FAÇO</span></OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 18 && (
          <motion.div key="st18" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Você concorda comigo que a nossa saúde é o nosso bem mais importante?</Title>
            <p className="text-gray-600 mb-6 text-sm">Sem ela não somos nada.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}>✅ Concordo!</OptionBtn>
              <OptionBtn onClick={nextStep}>😕 Não concordo.</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 19 && (
          <motion.div key="st19" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Como está o seu desempenho sexual atualmente?</Title>
            <p className="text-gray-600 mb-6 text-sm">Por favor, responda com sinceridade — essa informação é importante para a nossa análise.</p>
            <div className="space-y-3">
              <OptionBtn onClick={nextStep}>Minha vida sexual está como sempre foi, sem queixas.</OptionBtn>
              <OptionBtn onClick={nextStep}>Sinto que não tenho o mesmo desempenho de antes, mas ainda consigo manter relações.</OptionBtn>
              <OptionBtn onClick={nextStep}>Consigo iniciar, mas perco a firmeza com facilidade.</OptionBtn>
              <OptionBtn onClick={nextStep}>Quase sempre tenho dificuldade para ter ou manter ereção.</OptionBtn>
              <OptionBtn onClick={nextStep}>Por escolha ou outros fatores, não estou mantendo relações atualmente.</OptionBtn>
            </div>
          </motion.div>
        )}

        {step === 20 && (
          <motion.div key="st20" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-6">
            <Title>Você se compromete em seguir nosso Protocolo de 14 Dias em Casa?</Title>
            <p className="text-gray-600 font-bold">Vou te ajudar em tudo o que precisar.</p>
            
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x py-2 px-1">
              <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-G62r1-conversa-com-rafael.webp" className="h-[400px] w-auto rounded-xl shadow-md snap-center border" alt="Conversa" />
              <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-9TQQS-conversa-com-anderson.webp" className="h-[400px] w-auto rounded-xl shadow-md snap-center border" alt="Conversa" />
              <img src="https://media.inlead.cloud/uploads/23849/2025-10-23/lg-GrNUN-conversa-com-marcos.webp" className="h-[400px] w-auto rounded-xl shadow-md snap-center border" alt="Conversa" />
            </div>

            <div className="space-y-3 mt-6">
              <button 
                onClick={nextStep} 
                className="w-full bg-blue-600 text-white font-black p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition transform hover:scale-[1.02] shadow-[0_4px_0_0_rgba(29,78,216,1)] active:shadow-none active:translate-y-1 text-lg"
              >
                😍 Sim eu me Comprometo!
              </button>
              <button 
                onClick={nextStep} 
                className="w-full bg-slate-500 text-white font-bold p-4 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-600 transition shadow-[0_4px_0_0_rgba(71,85,105,1)] active:shadow-none active:translate-y-1"
              >
                😀 Eu vou Tentar!
              </button>
            </div>
          </motion.div>
        )}

        {step === 21 && (
          <motion.div key="st21" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-4">
            <Title>Imagine que você superou a HPB e voltou a viver sem limitações. O que seria a melhor parte dessa conquista para você?</Title>
            <p className="text-gray-600 mb-6 text-sm">Por favor, responda com atenção: Pode selecionar mais de uma opção.</p>
            <div className="space-y-3 mb-6">
              {[
                'Dormir a noite inteira sem precisar levantar para urinar',
                'Urinar com força, sem dor, sem pinga-pinga',
                'Recuperar minha vida sexual com firmeza e confiança',
                'Me sentir no controle da minha saúde e da minha vida',
                'Poder sair de casa, viajar e trabalhar sem depender do banheiro'
              ].map(opt => (
                 <label key={opt} className="flex gap-3 p-4 border-2 border-gray-200 rounded-xl bg-white cursor-pointer hover:bg-gray-50 items-start">
                   <input type="checkbox" className="w-5 h-5 mt-1 text-blue-600 rounded flex-shrink-0" />
                   <span className="font-medium text-gray-700 leading-tight">{opt}</span>
                 </label>
              ))}
            </div>
            <ContinueBtn onClick={nextStep} />
          </motion.div>
        )}

        {step === 22 && (
          <motion.div key="st22" initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-50}} className="space-y-6">
            <div className="bg-blue-50 border-2 border-blue-200 p-5 rounded-2xl text-center">
              <h3 className="font-black text-xl text-blue-900 mb-2">Escute o áudio abaixo: 👇</h3>
              <p className="text-blue-800 text-sm">Caso o AUDIO não inicie, basta clicar nele!</p>
            </div>
            
            <div className="bg-white p-5 rounded-2xl shadow border-2 border-blue-100 mt-2">
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

            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-gray-900 bg-black aspect-[9/16] relative max-w-sm mx-auto">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/OyyqCS0UFDw?autoplay=1&controls=0&rel=0&modestbranding=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>

            <ContinueBtn onClick={onComplete} />
          </motion.div>
        )}

        </AnimatePresence>
      </div>
    </div>
  );
}
