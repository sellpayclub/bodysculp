import { useState } from 'react';
import Intro from './Intro';
import Quiz from './Quiz';
import Diagnostic from './Diagnostic';
import VSL from './VSL';

export type ScreenState = 'INTRO' | 'QUIZ' | 'DIAGNOSTIC' | 'VSL';

export type UserAnswers = {
  name: string;
  age: string;
  concerns: string[];
  bellyType: string;
  estrogen: string;
};

export default function BodySculpFunnel() {
  const [screen, setScreen] = useState<ScreenState>('INTRO');
  const [answers, setAnswers] = useState<UserAnswers>({
    name: '',
    age: '',
    concerns: [],
    bellyType: '',
    estrogen: '',
  });

  const renderScreen = () => {
    switch (screen) {
      case 'INTRO':
        return <Intro onStart={() => setScreen('QUIZ')} />;
      case 'QUIZ':
        return <Quiz 
          answers={answers} 
          setAnswers={setAnswers} 
          onComplete={() => setScreen('DIAGNOSTIC')} 
        />;
      case 'DIAGNOSTIC':
        return <Diagnostic answers={answers} onComplete={() => setScreen('VSL')} />;
      case 'VSL':
        return <VSL answers={answers} />;
      default:
        return <div>Invalid state</div>;
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-900 font-sans selection:bg-pink-200">
      {renderScreen()}
    </div>
  );
}
