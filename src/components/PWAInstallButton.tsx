import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, X } from 'lucide-react';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-200 bg-amber-950/80 border border-amber-700/60 rounded-md hover:bg-amber-900/60 hover:text-amber-100 transition-colors whitespace-nowrap"
        title="Instalar aplicativo para acesso rápido e offline"
      >
        <Download className="w-3.5 h-3.5" />
        <span>Instalar App</span>
      </button>
    );
  }

  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-stone-300 bg-stone-900 border border-stone-700 rounded-md hover:bg-stone-800 transition-colors whitespace-nowrap"
        >
          <Smartphone className="w-3.5 h-3.5 text-amber-400" />
          <span>App no iOS</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
            <div className="w-full max-w-sm rounded-xl bg-stone-900 border border-stone-800 p-6 shadow-2xl text-stone-200">
              <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                <h3 className="text-base font-semibold text-stone-100">Instalar no iPhone / iPad</h3>
                <button
                  onClick={() => setShowIOSGuide(false)}
                  className="p-1 text-stone-400 hover:text-stone-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-4 space-y-3 text-xs leading-relaxed text-stone-300">
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-stone-800 text-amber-400 font-mono text-[10px]">1</span>
                  <span>Toque no botão <strong>Compartilhar</strong> (ícone de quadrado com seta) na barra inferior do Safari.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-stone-800 text-amber-400 font-mono text-[10px]">2</span>
                  <span>Role para baixo e selecione <strong>Adicionar à Tela de Início</strong>.</span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-stone-800 text-amber-400 font-mono text-[10px]">3</span>
                  <span>O aplicativo funcionará offline com acesso instantâneo aos debates e áudio.</span>
                </p>
              </div>
              <button
                onClick={() => setShowIOSGuide(false)}
                className="mt-6 w-full py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  return null;
};
