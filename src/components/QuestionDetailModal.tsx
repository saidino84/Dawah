import React, { useState } from 'react';
import { DeedatItem, UserNote } from '../types';
import {
  X,
  Play,
  Volume2,
  Bookmark,
  BookmarkCheck,
  ExternalLink,
  BookOpen,
  Tv,
  Share2,
  Check,
  Edit3,
  Trash2,
  Save,
  Clock,
  Sparkles
} from 'lucide-react';

interface QuestionDetailModalProps {
  item: DeedatItem | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  isPlayingThisItem: boolean;
  onToggleFavorite: (id: string) => void;
  onPlayAudio: (item: DeedatItem) => void;
  userNote?: UserNote;
  onSaveNote: (itemId: string, content: string) => void;
  onDeleteNote: (itemId: string) => void;
}

export const QuestionDetailModal: React.FC<QuestionDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  isFavorite,
  isPlayingThisItem,
  onToggleFavorite,
  onPlayAudio,
  userNote,
  onSaveNote,
  onDeleteNote,
}) => {
  const [showVideoEmbed, setShowVideoEmbed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [noteText, setNoteText] = useState(userNote?.content || '');

  if (!isOpen || !item) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(
      `*Deedat Archive - ${item.title}*\n\nPergunta: ${item.question}\n\nResposta de Sheikh Ahmed Deedat: ${item.keyQuote}\n\nVídeo: ${item.youtubeUrl}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveNoteAction = () => {
    if (noteText.trim()) {
      onSaveNote(item.id, noteText);
      setIsEditingNote(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-question-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
    >
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-stone-900/95 border-b border-stone-800 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs text-stone-400 truncate">
            <span className="font-semibold text-amber-500 uppercase tracking-wider text-[11px]">
              {item.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{item.debateTitle || item.askedBy}</span>
            {item.year && (
              <>
                <span aria-hidden="true">·</span>
                <span>{item.year}</span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Audio Listen Button */}
            <button
              onClick={() => onPlayAudio(item)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isPlayingThisItem
                  ? 'bg-amber-500 text-stone-950 font-bold'
                  : 'bg-stone-800 text-amber-300 hover:bg-stone-700'
              }`}
            >
              {isPlayingThisItem ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-bounce" />
                  <span>Ouvindo</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Ouvir em Áudio</span>
                </>
              )}
            </button>

            {/* Favorite toggle */}
            <button
              onClick={() => onToggleFavorite(item.id)}
              className="p-2 text-stone-400 hover:text-amber-400 rounded-lg hover:bg-stone-800 transition-colors"
              title={isFavorite ? 'Salvo nos favoritos' : 'Salvar nos favoritos'}
            >
              {isFavorite ? (
                <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </button>

            {/* Copy / Share */}
            <button
              onClick={handleCopyLink}
              className="p-2 text-stone-400 hover:text-stone-200 rounded-lg hover:bg-stone-800 transition-colors"
              title="Copiar citação e link"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-stone-100 rounded-lg hover:bg-stone-800 transition-colors"
              title="Fechar janela"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-stone-200">
          {/* Question Section */}
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-500/90 font-mono mb-1">
              Pergunta formulada por: {item.askedBy}
            </div>
            <h2 id="modal-question-title" className="font-serif text-xl sm:text-2xl font-bold text-stone-100 leading-snug">
              {item.question}
            </h2>
          </div>

          {/* Key Quote Pullquote */}
          <div className="p-4 rounded-xl bg-amber-950/20 border-l-4 border-amber-500">
            <p className="font-reading text-base sm:text-lg italic text-amber-100/95 leading-relaxed">
              "{item.keyQuote}"
            </p>
            <div className="mt-2 text-xs font-mono text-amber-400/80">
              — Sheikh Ahmed Deedat
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="p-4 rounded-xl bg-stone-950 border border-stone-800">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-rose-500" />
                <span className="text-xs font-semibold text-stone-300">
                  Registro em Vídeo no YouTube ({item.debateTitle || 'Debate Oficial'})
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowVideoEmbed(!showVideoEmbed)}
                  className="text-xs font-medium text-amber-400 hover:text-amber-300 underline underline-offset-4"
                >
                  {showVideoEmbed ? 'Ocultar Player Integrado' : 'Reproduzir Vídeo Integrado'}
                </button>

                <a
                  href={item.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-stone-400 hover:text-rose-400"
                >
                  <span>Abrir no YouTube</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {showVideoEmbed && item.youtubeId && (
              <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-stone-800 mt-3">
                <iframe
                  src={`https://www.youtube.com/embed/${item.youtubeId}?start=${item.timestampSeconds || 0}&autoplay=1`}
                  title={item.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}
          </div>

          {/* Speaker's Detailed Answer Breakdown */}
          <section className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 border-b border-stone-800 pb-2 flex items-center justify-between">
              <span>
                Explicação Teológica & Argumentação de {item.speaker || 'Sheikh Ahmed Deedat'}
              </span>
              <span className="text-[11px] text-stone-500 font-mono font-normal">
                {item.fullAnswer.length} Parágrafos Completos
              </span>
            </h3>
            <div className="space-y-3.5 text-sm sm:text-base leading-relaxed text-stone-300 font-normal">
              {item.fullAnswer.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          {/* Biblical Verses Comparative Analysis */}
          {item.biblicalVerses && item.biblicalVerses.length > 0 && (
            <section className="space-y-4 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-400 border-b border-stone-800 pb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Versículos Bíblicos Citados e Análise Textual</span>
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {item.biblicalVerses.map((bv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-amber-300">
                        {bv.book} {bv.chapterVerse}
                      </span>
                      <span className="text-stone-500">Escritura Bíblica</span>
                    </div>

                    <blockquote className="border-l-2 border-stone-700 pl-3 italic text-stone-300 text-sm">
                      "{bv.bibleText}"
                    </blockquote>

                    <div className="pt-2 text-xs sm:text-sm text-stone-400">
                      <strong className="text-amber-200">Contra-argumento de Deedat: </strong>
                      {bv.deedatAnalysis}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Quranic References */}
          {item.quranicVerses && item.quranicVerses.length > 0 && (
            <section className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 border-b border-stone-800 pb-2">
                Referências do Alcorão Sagrado
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {item.quranicVerses.map((qv, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-emerald-950/15 border border-emerald-900/30 space-y-2"
                  >
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      Surata {qv.surah}, Versículo {qv.ayah}
                    </div>
                    <p className="text-sm italic text-emerald-100/90">
                      "{qv.translation}"
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Hadith Teachings & Prophetic Traditions */}
          {item.hadiths && item.hadiths.length > 0 && (
            <section className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 border-b border-stone-800 pb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-cyan-400" />
                <span>Hadiths Autênticos (Tradições Proféticas & Ensinamentos)</span>
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {item.hadiths.map((hd, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-800/40 space-y-2.5"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-cyan-300">
                      <span className="font-bold">
                        {hd.collection} — Hadith #{hd.hadithNumber}
                      </span>
                      {hd.narrator && (
                        <span className="text-stone-400 text-[11px]">
                          Narrado por: {hd.narrator}
                        </span>
                      )}
                    </div>

                    <blockquote className="border-l-2 border-cyan-500/60 pl-3 italic text-stone-200 text-sm">
                      "{hd.text}"
                    </blockquote>

                    <div className="pt-1 text-xs sm:text-sm text-stone-300">
                      <strong className="text-cyan-300">Lição e Aplicação na Dawah: </strong>
                      {hd.explanation}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* User Study Notes Box */}
          <section className="pt-4 border-t border-stone-800">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-400">
                <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                <span>Minhas Anotações Pessoais de Estudo</span>
              </div>

              {userNote && !isEditingNote && (
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      setNoteText(userNote.content);
                      setIsEditingNote(true);
                    }}
                    className="text-xs text-amber-400 hover:text-amber-300"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => onDeleteNote(item.id)}
                    className="text-xs text-rose-400 hover:text-rose-300"
                  >
                    Excluir
                  </button>
                </div>
              )}
            </div>

            {isEditingNote || !userNote ? (
              <div className="space-y-2">
                <textarea
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Escreva seus apontamentos, referências ou reflexões sobre este debate de Ahmed Deedat..."
                  rows={3}
                  className="w-full p-3 rounded-lg bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-200 focus:outline-hidden focus:border-amber-600 resize-y"
                />
                <div className="flex justify-end gap-2">
                  {userNote && (
                    <button
                      onClick={() => setIsEditingNote(false)}
                      className="px-3 py-1.5 text-xs text-stone-400 hover:text-stone-200"
                    >
                      Cancelar
                    </button>
                  )}
                  <button
                    onClick={handleSaveNoteAction}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 transition-colors"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Salvar Anotação</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-3.5 rounded-lg bg-stone-950 border border-stone-800 text-xs sm:text-sm text-stone-300">
                <p className="whitespace-pre-wrap">{userNote.content}</p>
                <div className="mt-2 text-[10px] text-stone-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>Última alteração: {userNote.updatedAt}</span>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
