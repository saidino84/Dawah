import React, { useState, useEffect } from 'react';
import { X, Wifi, WifiOff, HardDrive, CheckCircle2, RefreshCw, Smartphone } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface OfflineManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  isOnline: boolean;
  totalItemsCount: number;
  favoritesCount: number;
}

export const OfflineManagerModal: React.FC<OfflineManagerModalProps> = ({
  isOpen,
  onClose,
  isOnline,
  totalItemsCount,
  favoritesCount,
}) => {
  const [cachedStatus, setCachedStatus] = useState<string>('Verificado');

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-offline-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
    >
      <div className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 text-stone-200 space-y-5">
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-amber-500" />
            <h3 id="modal-offline-title" className="text-base font-bold text-stone-100">
              Modo Offline & Gerenciador de Armazenamento
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Network status badge */}
        <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {isOnline ? (
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-800/40 text-emerald-400">
                <Wifi className="w-5 h-5" />
              </div>
            ) : (
              <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-400">
                <WifiOff className="w-5 h-5" />
              </div>
            )}
            <div>
              <div className="text-xs font-semibold text-stone-300">
                {isOnline ? 'Conexão Ativa com a Internet' : 'Você está em Modo Offline'}
              </div>
              <div className="text-[11px] text-stone-500">
                {isOnline
                  ? 'Todas as lições, textos e áudios estão pré-carregados localmente.'
                  : 'Acesso total aos textos, análises bíblicas e áudio local garantido.'}
              </div>
            </div>
          </div>
        </div>

        {/* Storage stats */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
            <span className="text-stone-500">Perguntas & Respostas</span>
            <div className="text-lg font-mono font-bold text-amber-400">
              {totalItemsCount} disponíveis
            </div>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> 100% no cache local
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1">
            <span className="text-stone-500">Conteúdos Salvos</span>
            <div className="text-lg font-mono font-bold text-amber-400">
              {favoritesCount} lições
            </div>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Salvos no dispositivo
            </span>
          </div>
        </div>

        {/* Capabilities explanation */}
        <div className="space-y-2 text-xs text-stone-300 leading-relaxed bg-stone-950/40 p-4 rounded-xl border border-stone-800/60">
          <h4 className="font-semibold text-stone-200">Como funciona o modo offline:</h4>
          <ul className="list-disc pl-4 space-y-1.5 text-stone-400">
            <li>
              <strong className="text-stone-300">Leitura Completa:</strong> Todos os textos de perguntas, réplicas e exegese bíblica ficam armazenados na memória interna do seu navegador.
            </li>
            <li>
              <strong className="text-stone-300">Áudio Local em Segundo Plano:</strong> A síntese de voz usa o motor nativo do seu próprio sistema operacional (celular ou computador), funcionando mesmo sem rede ou dados móveis.
            </li>
            <li>
              <strong className="text-stone-300">Vídeos do YouTube:</strong> Para reprodução direta do streaming de vídeo do YouTube, a conexão de internet é necessária.
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-2">
          <PWAInstallButton />
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
