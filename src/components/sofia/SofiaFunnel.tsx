import { useState } from 'react';
import Intro from './Intro';
import Quiz from './Quiz';
import VSL from './VSL';

export type UserAnswers = Record<string, any>;

export default function SofiaFunnel() {
  const [step, setStep] = useState<'intro' | 'quiz' | 'vsl'>('intro');
  const [answers, setAnswers] = useState<UserAnswers>({});

  const handleStart = () => {
    setStep('quiz');
    window.scrollTo(0, 0);
  };

  const handleQuizComplete = (quizAnswers: UserAnswers) => {
    setAnswers(quizAnswers);
    setStep('vsl');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-red-500/30">
      {step === 'intro' && <Intro onStart={handleStart} />}
      {step === 'quiz' && <Quiz onComplete={handleQuizComplete} />}
      {step === 'vsl' && <VSL answers={answers} />}
    </div>
  );
}
