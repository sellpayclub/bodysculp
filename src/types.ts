export type UserData = {
  age: string;
  bodyType: string;
  fatAreas: string[];
  name: string;
  situations: string[];
  impediments: string[];
  objectives: string[];
  weight: number;
  weightUnit: 'kg' | 'lb';
  height: number;
  heightUnit: 'cm' | 'in';
  desiredWeight: number;
  routine: string[];
  sleep: string;
};

export type ScreenState = 
  | 'QUIZ'
  | 'LOADING_DIAGNOSTIC'
  | 'DIAGNOSTIC'
  | 'COMMITMENT'
  | 'LOADING_PROTOCOL'
  | 'VSL_1'
  | 'MINI_QUIZ'
  | 'VSL_2';
