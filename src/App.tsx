import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GelatinaFunnel from './components/GelatinaFunnel';
import ProstataFunnel from './components/prostata/ProstataFunnel';
import SaladaFunnel from './components/salada/SaladaFunnel';
import BodySculpFunnel from './components/bodysculp/BodySculpFunnel';
import SofiaFunnel from './components/sofia/SofiaFunnel';

export default function App() {
  useEffect(() => {
    let script = document.querySelector('script[src="https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js"]') as HTMLScriptElement;
    if (!script) {
      script = document.createElement("script");
      script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GelatinaFunnel />} />
        <Route path="/protocoloprostotal" element={<ProstataFunnel />} />
        <Route path="/salada" element={<SaladaFunnel />} />
        <Route path="/bodysculp" element={<BodySculpFunnel />} />
        <Route path="/sofia" element={<SofiaFunnel />} />
      </Routes>
    </BrowserRouter>
  );
}
