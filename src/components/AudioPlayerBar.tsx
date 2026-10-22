import React, { useState } from 'react';
import { DeedatItem } from '../types';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  X,
  Maximize2,
  Headphones,
  RotateCcw,
  Sparkles
} from 'lucide-react';

interface AudioPlayerBarProps {
  activeItem: DeedatItem | null;
  isPlaying: boolean;
  isPaused: boolean;
  rate: number;
  progress: number;
  currentParagraph: number;
  totalParagraphs: number;
  onResume: () => void;
  onPause: () => void;
  onStop: () => void;
  onRewind: () => void;
  onForward: () => void;
  onNext: () => void;
  onPrevious: () => void;
  onChangeRate: (rate: number) => void;
  onOpenDetails: (item: DeedatItem) => void;
}

const SPEED_OPTIONS = [0.8, 1.0, 1.25, 1.5, 2.0];

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  activeItem,
  isPlaying,
  isPaused,
  rate,
  progress,
  currentParagraph,
  totalParagraphs,
  onResume,
  onPause,
  onStop,
  onRewind,
  onForward,
  onNext,
  onPrevious,
  onChangeRate,
  onOpenDetails,
}) => {
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);

  if (!activeItem) return null;

  return (
    <aside aria-label="Reprodutor de áudio contínuo" className="fixed bottom-0 left-0 right-0 z-50 bg-stone-900/95 border-t border-stone-800 shadow-2xl backdrop-blur-md text-stone-100">
      {/* Visual progress bar at top edge */}
      <div className="w-full bg-stone-800 h-1 cursor-pointer">
        <div
          className="bg-amber-500 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Left: Metadata info with clean unboxed text */}
        <div className="flex items-center gap-3 w-full sm:w-auto min-w-0">
          <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-400 shrink-0">
            <Headphones className="w-5 h-5 animate-pulse" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-[11px] text-stone-400">
              <span className="font-semibold text-amber-400 uppercase tracking-wider">
                Áudio em Segundo Plano
              </span>
              <span aria-hidden="true">·</span>
              <span>{activeItem.askedBy}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono tabular-nums">
                {currentParagraph + 1}/{totalParagraphs} trechos
              </span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-stone-200 truncate mt-0.5 max-w-md lg:max-w-lg">
              {activeItem.title}
            </p>
          </div>
        </div>

        {/* Center: Playback controls */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={onPrevious}
            className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
            title="Pergunta anterior"
          >
            <SkipBack className="w-4 h-4" />
          </button>

          <button
            onClick={onRewind}
            className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
            title="Voltar trecho anterior"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {isPlaying ? (
            <button
              onClick={onPause}
              className="p-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold transition-transform active:scale-95 shadow-md"
              title="Pausar áudio"
            >
              <Pause className="w-5 h-5 fill-current" />
            </button>
          ) : (
            <button
              onClick={onResume}
              className="p-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold transition-transform active:scale-95 shadow-md"
              title="Continuar reprodução"
            >
              <Play className="w-5 h-5 fill-current ml-0.5" />
            </button>
          )}

          <button
            onClick={onForward}
            className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
            title="Avançar próximo trecho"
          >
            <RotateCcw className="w-4 h-4 scale-x-[-1]" />
          </button>

          <button
            onClick={onNext}
            className="p-1.5 text-stone-400 hover:text-stone-100 transition-colors"
            title="Próxima pergunta"
          >
            <SkipForward className="w-4 h-4" />
          </button>
        </div>

        {/* Right: Rate selector, full reader and close */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Speed menu */}
          <div className="relative">
            <button
              onClick={() => setShowSpeedMenu(!showSpeedMenu)}
              className="px-2 py-1 text-xs font-mono font-medium rounded-md bg-stone-800 text-stone-300 hover:text-stone-100 border border-stone-700 transition-colors"
              title="Velocidade de reprodução"
            >
              {rate}x
            </button>

            {showSpeedMenu && (
              <div className="absolute bottom-full right-0 mb-2 py-1 w-24 bg-stone-900 border border-stone-700 rounded-lg shadow-xl z-50">
                {SPEED_OPTIONS.map((speed) => (
                  <button
                    key={speed}
                    onClick={() => {
                      onChangeRate(speed);
                      setShowSpeedMenu(false);
                    }}
                    className={`w-full px-3 py-1 text-left text-xs font-mono transition-colors ${
                      rate === speed
                        ? 'bg-amber-950 text-amber-300 font-bold'
                        : 'text-stone-300 hover:bg-stone-800'
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Open full reader */}
          <button
            onClick={() => onOpenDetails(activeItem)}
            className="p-1.5 text-stone-400 hover:text-amber-300 transition-colors"
            title="Abrir texto completo e versículos"
          >
            <Maximize2 className="w-4 h-4" />
          </button>

          {/* Close audio player */}
          <button
            onClick={onStop}
            className="p-1.5 text-stone-400 hover:text-rose-400 transition-colors"
            title="Fechar reprodutor"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
