import React, { useState } from 'react';
import { HISTORICAL_DEBATES } from '../data/deedatData';
import { HistoricalDebate, DeedatItem } from '../types';
import {
  Tv,
  Calendar,
  MapPin,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Play
} from 'lucide-react';

interface DebatesViewProps {
  onSelectDebateQuestions: (opponentName: string) => void;
  debates?: HistoricalDebate[];
}

export const DebatesView: React.FC<DebatesViewProps> = ({ onSelectDebateQuestions, debates }) => {
  const allDebates = debates || HISTORICAL_DEBATES;
  const [selectedDebate, setSelectedDebate] = useState<string | null>('debate-shorrosh-1');
  const [activeEmbedId, setActiveEmbedId] = useState<string | null>(null);

  const toggleDebate = (id: string) => {
    setSelectedDebate((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-6">
      {/* Header Deck */}
      <div className="border-b border-stone-800 pb-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mb-2">
          Debates Históricos de Sheikh Ahmed Deedat
        </h2>
        <p className="text-sm text-stone-400 max-w-3xl leading-relaxed">
          Os confrontos oratórios e teológicos mais memoráveis registrados em vídeo e áudio entre Ahmed Deedat e proeminentes debatedores, teólogos e líderes religiosos cristãos no mundo inteiro.
        </p>
      </div>

      {/* Debates List */}
      <div className="space-y-4">
        {allDebates.map((debate) => {
          const isExpanded = selectedDebate === debate.id;
          const isPlayingVideo = activeEmbedId === debate.id;

          return (
            <div
              key={debate.id}
              className={`rounded-xl border transition-all ${
                isExpanded
                  ? 'bg-stone-900 border-amber-600/50 shadow-xl'
                  : 'bg-stone-900/60 border-stone-800 hover:border-stone-700'
              }`}
            >
              {/* Debate Header Card */}
              <div
                onClick={() => toggleDebate(debate.id)}
                className="p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs text-stone-400">
                    <span className="font-semibold text-amber-500 uppercase tracking-wider text-[11px]">
                      Confronto Teológico
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-stone-300">Contra {debate.opponent}</span>
                    <span aria-hidden="true">·</span>
                    <span>{debate.date}</span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-100 group-hover:text-amber-200">
                    {debate.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-stone-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-stone-500" />
                      {debate.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-stone-500" />
                      {debate.attendeesCount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                  <a
                    href={debate.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-300 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-800/40 rounded-lg transition-colors"
                  >
                    <Tv className="w-3.5 h-3.5 text-rose-400" />
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>

                  <button className="p-1.5 text-stone-400 hover:text-stone-200">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Expanded Debate Content */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-stone-800/80 space-y-5">
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {debate.description}
                  </p>

                  {/* Opponent & Theses comparison */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-1.5">
                      <div className="text-xs font-bold font-mono uppercase text-amber-400">
                        Tese Central de Ahmed Deedat
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {debate.deedatCentralThesis}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                      <div className="text-xs font-bold font-mono uppercase text-stone-400">
                        Posição de {debate.opponent} ({debate.opponentTitle})
                      </div>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {debate.opponentCentralThesis}
                      </p>
                    </div>
                  </div>

                  {/* Core Topics and Question Filter Button */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-stone-400">
                      <span className="font-mono text-stone-500 mr-1">Tópicos:</span>
                      {debate.coreTopics.map((topic, idx) => (
                        <span
                          key={idx}
                          className="bg-stone-800 text-stone-300 px-2 py-0.5 rounded-sm text-[11px]"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectDebateQuestions(debate.opponent)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-amber-300 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors self-start sm:self-auto"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Ver Perguntas Deste Debate</span>
                    </button>
                  </div>

                  {/* Integrated YouTube Player */}
                  <div className="pt-2">
                    {isPlayingVideo ? (
                      <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-stone-800 shadow-2xl">
                        <iframe
                          src={`https://www.youtube.com/embed/${debate.youtubeId}?autoplay=1`}
                          title={debate.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full"
                        />
                      </div>
                    ) : (
                      <button
                        onClick={() => setActiveEmbedId(debate.id)}
                        className="w-full py-3 rounded-xl bg-stone-950 border border-stone-800 hover:border-amber-600/50 flex items-center justify-center gap-2 text-xs font-semibold text-stone-300 hover:text-amber-300 transition-all"
                      >
                        <Play className="w-4 h-4 fill-amber-500 text-amber-500" />
                        <span>Carregar Player de Vídeo deste Debate no App</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
