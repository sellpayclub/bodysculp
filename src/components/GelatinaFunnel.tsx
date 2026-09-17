import { useState } from 'react';
import { ScreenState, UserData } from '../types';
import Quiz from './Quiz';
import Diagnostic from './Diagnostic';
import LoadingProtocol from './LoadingProtocol';
import VSL1 from './VSL1';
import MiniQuiz from './MiniQuiz';
import VSL2 from './VSL2';

const initialUserData: UserData = {
  age: '',
  bodyType: '',
  fatAreas: [],
  name: '',
  situations: [],
  impediments: [],
  objectives: [],
  weight: 70,
  weightUnit: 'kg',
  height: 160,
  heightUnit: 'cm',
  desiredWeight: 55,
  routine: [],
  sleep: ''
};

export default function GelatinaFunnel() {
  const [screen, setScreen] = useState<ScreenState>('QUIZ');
  const [userData, setUserData] = useState<UserData>(initialUserData);
  const [skipDelays, setSkipDelays] = useState(false);

  const updateData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const handleDevSkip = () => {
    setSkipDelays(true);
    setScreen('VSL_2');
  };

  const renderScreen = () => {
    switch (screen) {
      case 'QUIZ':
        return <Quiz userData={userData} updateData={updateData} onComplete={() => setScreen('DIAGNOSTIC')} onDevSkip={handleDevSkip} />;
      case 'DIAGNOSTIC':
        return <Diagnostic userData={userData} onContinue={() => setScreen('LOADING_PROTOCOL')} />;
      case 'LOADING_PROTOCOL':
        return <LoadingProtocol onComplete={() => setScreen('VSL_1')} />;
      case 'VSL_1':
        return <VSL1 userData={userData} onContinue={() => setScreen('MINI_QUIZ')} skipDelay={skipDelays} />;
      case 'MINI_QUIZ':
        return <MiniQuiz userData={userData} onComplete={() => setScreen('VSL_2')} />;
      case 'VSL_2':
        return <VSL2 skipDelay={skipDelays} />;
      default:
        return <div>Invalid state</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      {renderScreen()}
    </div>
  );
}
