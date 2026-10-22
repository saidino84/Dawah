import React, { useState } from 'react';
import { DeedatItem, UserNote } from '../types';
import { QuestionCard } from './QuestionCard';
import { Bookmark, BookmarkCheck, FileText, Copy, Check, Headphones, Trash2 } from 'lucide-react';

interface FavoritesViewProps {
  favoriteItems: DeedatItem[];
  notes: Record<string, UserNote>;
  activePlayingId: string | null;
  onToggleFavorite: (id: string) => void;
  onPlayAudio: (item: DeedatItem) => void;
  onOpenDetails: (item: DeedatItem) => void;
  onExploreQuestions: () => void;
}

export const FavoritesView: React.FC<FavoritesViewProps> = ({
  favoriteItems,
  notes,
  activePlayingId,
  onToggleFavorite,
  onPlayAudio,
  onOpenDetails,
  onExploreQuestions,
}) => {
  const [copiedSummary, setCopiedSummary] = useState(false);

  const notesList = Object.values(notes);

  const handleCopyStudyDossier = () => {
    let text = `*DOSSIÊ DE ESTUDO - DEEDAT ARCHIVE*\n\n`;
    text += `Total de conteúdos salvos: ${favoriteItems.length}\n`;
    text += `=========================================\n\n`;

    favoriteItems.forEach((item, index) => {
      text += `${index + 1}. ${item.title}\n`;
      text += `Pergunta: ${item.question}\n`;
      text += `Debatedor/Origem: ${item.askedBy} (${item.year || ''})\n`;
      text += `Citação Chave: "${item.keyQuote}"\n`;
      text += `Vídeo: ${item.youtubeUrl}\n`;
      if (notes[item.id]) {
        text += `Minha Anotação: ${notes[item.id].content}\n`;
      }
      text += `\n-----------------------------------------\n\n`;
    });

    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Deck */}
      <div className="border-b border-stone-800 pb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mb-2">
            Meus Conteúdos Favoritos e Anotações
          </h2>
          <p className="text-sm text-stone-400 max-w-2xl leading-relaxed">
            Seu acervo particular salvo para consulta posterior, estudo e audição diária em segundo plano sem necessidade de internet.
          </p>
        </div>

        {favoriteItems.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopyStudyDossier}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-stone-800 text-stone-200 hover:bg-stone-700 transition-colors border border-stone-700"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-stone-400" />
                  <span>Copiar Dossiê Completo</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Main Grid */}
      {favoriteItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favoriteItems.map((item) => (
            <QuestionCard
              key={item.id}
              item={item}
              isFavorite={true}
              isPlayingThisItem={activePlayingId === item.id}
              onToggleFavorite={onToggleFavorite}
              onPlayAudio={onPlayAudio}
              onOpenDetails={onOpenDetails}
              hasNote={!!notes[item.id]}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 px-4 bg-stone-900/40 border border-stone-800/80 rounded-2xl max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-stone-500">
            <Bookmark className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-stone-200">
              Nenhuma lição salva nos favoritos
            </h3>
            <p className="text-xs text-stone-400 mt-1">
              Explore o acervo de perguntas e debates e toque no ícone de marcador para salvar conteúdos para estudo posterior.
            </p>
          </div>
          <button
            onClick={onExploreQuestions}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors"
          >
            Explorar Perguntas e Respostas
          </button>
        </div>
      )}

      {/* Notes summary list if user has custom notes */}
      {notesList.length > 0 && (
        <div className="pt-8 border-t border-stone-800 space-y-4">
          <h3 className="text-base font-semibold text-stone-200 flex items-center gap-2">
            <FileText className="w-4 h-4 text-amber-500" />
            <span>Caderno de Anotações Pessoais ({notesList.length})</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {notesList.map((note) => {
              const relatedItem = favoriteItems.find((it) => it.id === note.itemId);
              return (
                <div
                  key={note.itemId}
                  className="p-4 rounded-xl bg-stone-900 border border-stone-800 space-y-2"
                >
                  <div className="flex items-center justify-between text-xs text-stone-400">
                    <span className="font-semibold text-amber-400 truncate max-w-[240px]">
                      {relatedItem?.title || 'Anotação de Estudo'}
                    </span>
                    <span className="font-mono text-[11px] text-stone-500">
                      {note.updatedAt}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed whitespace-pre-wrap">
                    {note.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
