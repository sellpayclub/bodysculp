import { useState } from 'react';
import Intro from './Intro';
import Quiz from './Quiz';
import Diagnostic from './Diagnostic';
import VSL from './VSL';

export type ScreenState = 'INTRO' | 'QUIZ' | 'DIAGNOSTIC' | 'VSL';

export default function SaladaFunnel() {
  const [screen, setScreen] = useState<ScreenState>('INTRO');

  const renderScreen = () => {
    switch (screen) {
      case 'INTRO':
        return <Intro onStart={() => setScreen('QUIZ')} />;
      case 'QUIZ':
        return <Quiz onComplete={() => setScreen('DIAGNOSTIC')} />;
      case 'DIAGNOSTIC':
        return <Diagnostic onComplete={() => setScreen('VSL')} />;
      case 'VSL':
        return <VSL />;
      default:
        return <div>Invalid state</div>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans selection:bg-emerald-200">
      {renderScreen()}
    </div>
  );
}
