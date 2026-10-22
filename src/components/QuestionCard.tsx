import React from 'react';
import { DeedatItem } from '../types';
import {
  Play,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  BookOpen,
  Volume2,
  ChevronRight,
  Tv
} from 'lucide-react';

interface QuestionCardProps {
  item: DeedatItem;
  isFavorite: boolean;
  isPlayingThisItem: boolean;
  onToggleFavorite: (id: string) => void;
  onPlayAudio: (item: DeedatItem) => void;
  onOpenDetails: (item: DeedatItem) => void;
  hasNote?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  item,
  isFavorite,
  isPlayingThisItem,
  onToggleFavorite,
  onPlayAudio,
  onOpenDetails,
  hasNote,
}) => {
  return (
    <article className="group bg-stone-900/60 border border-stone-800/80 rounded-xl p-5 hover:border-stone-700 hover:bg-stone-900 transition-all flex flex-col justify-between">
      <div>
        {/* Unboxed metadata with typographic separators (anti-slop rule) */}
        <div className="flex items-center justify-between gap-2 text-xs text-stone-400 mb-2.5">
          <div className="flex items-center gap-2 truncate">
            {item.speaker && (
              <>
                <span className="font-semibold text-amber-300 bg-amber-950/60 border border-amber-800/60 px-1.5 py-0.5 rounded-xs text-[10px] uppercase tracking-wider">
                  {item.speaker.replace('Sheikh ', '').replace('Dr. ', '')}
                </span>
                <span aria-hidden="true">·</span>
              </>
            )}
            <span className="font-semibold text-stone-300 uppercase tracking-wider text-[11px]">
              {item.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{item.askedBy}</span>
            {item.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{item.year}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {hasNote && (
              <span className="text-[11px] text-amber-400 bg-amber-950/40 px-1.5 py-0.5 rounded-sm border border-amber-900/50">
                Anotação
              </span>
            )}
            <button
              onClick={() => onToggleFavorite(item.id)}
              className="p-1 text-stone-400 hover:text-amber-400 transition-colors"
              title={isFavorite ? 'Remover dos favoritos' : 'Salvar nos favoritos'}
            >
              {isFavorite ? (
                <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Primary Title / Question */}
        <h3
          onClick={() => onOpenDetails(item)}
          className="font-serif font-semibold text-base sm:text-lg text-stone-100 hover:text-amber-200 transition-colors cursor-pointer leading-snug line-clamp-2 mb-2"
        >
          {item.question}
        </h3>

        {/* Key Quote / Epigraph */}
        <div className="border-l-2 border-amber-600/60 pl-3 my-3 py-0.5">
          <p className="text-xs sm:text-sm italic text-stone-300 line-clamp-2">
            "{item.keyQuote}"
          </p>
        </div>

        {/* Summary */}
        <p className="text-xs text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {item.summary}
        </p>

        {/* Biblical & Quranic references preview */}
        {((item.biblicalVerses && item.biblicalVerses.length > 0) || (item.hadiths && item.hadiths.length > 0)) && (
          <div className="flex flex-wrap items-center gap-1.5 mb-4 text-[11px] text-stone-400">
            {item.biblicalVerses && item.biblicalVerses.length > 0 && (
              <>
                <span className="text-stone-500 font-mono text-[10px]">Bíblia:</span>
                {item.biblicalVerses.slice(0, 2).map((bv, idx) => (
                  <span
                    key={idx}
                    className="font-mono text-stone-300 bg-stone-800/80 px-1.5 py-0.5 rounded-xs"
                  >
                    {bv.book} {bv.chapterVerse}
                  </span>
                ))}
              </>
            )}
            {item.hadiths && item.hadiths.length > 0 && (
              <span className="font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-800/40 px-1.5 py-0.5 rounded-xs">
                {item.hadiths.length} {item.hadiths.length === 1 ? 'Hadith' : 'Hadiths'}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Card Footer: Action bar */}
      <div className="pt-3 border-t border-stone-800/60 flex items-center justify-between gap-2 mt-auto">
        <div className="flex items-center gap-2">
          {/* Audio Play Button */}
          <button
            onClick={() => onPlayAudio(item)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              isPlayingThisItem
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
            }`}
            title="Ouvir resposta completa em áudio contínuo"
          >
            {isPlayingThisItem ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                <span>Ouvindo</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Ouvir ({item.durationMinutes}m)</span>
              </>
            )}
          </button>

          {/* YouTube Video Link */}
          {item.youtubeUrl && (
            <a
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1.5 text-xs text-stone-400 hover:text-rose-400 hover:bg-rose-950/30 rounded-lg border border-transparent hover:border-rose-900/50 transition-colors"
              title="Assistir debate completo no YouTube"
            >
              <Tv className="w-3.5 h-3.5 text-rose-500" />
              <span className="hidden sm:inline">Vídeo</span>
              <ExternalLink className="w-3 h-3 text-stone-500" />
            </a>
          )}
        </div>

        {/* Read Full Answer Button */}
        <button
          onClick={() => onOpenDetails(item)}
          className="flex items-center gap-1 text-xs font-medium text-stone-400 hover:text-amber-300 transition-colors"
        >
          <span>Examinar</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
