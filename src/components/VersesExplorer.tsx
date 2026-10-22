import React, { useState, useMemo } from 'react';
import { BIBLICAL_VERSE_INDEX } from '../data/deedatData';
import { BiblicalReference } from '../types';
import { Search, BookOpen, Volume2, Copy, Check } from 'lucide-react';

interface VersesExplorerProps {
  onSearchTopic: (query: string) => void;
}

export const VersesExplorer: React.FC<VersesExplorerProps> = ({ onSearchTopic }) => {
  const [verseSearch, setVerseSearch] = useState('');
  const [copiedVerse, setCopiedVerse] = useState<string | null>(null);

  const filteredVerses = useMemo(() => {
    if (!verseSearch.trim()) return BIBLICAL_VERSE_INDEX;
    const q = verseSearch.toLowerCase();
    return BIBLICAL_VERSE_INDEX.filter(
      (v) =>
        v.book.toLowerCase().includes(q) ||
        v.chapterVerse.toLowerCase().includes(q) ||
        v.bibleText.toLowerCase().includes(q) ||
        v.deedatAnalysis.toLowerCase().includes(q)
    );
  }, [verseSearch]);

  const handleCopy = (verse: BiblicalReference) => {
    const text = `${verse.book} ${verse.chapterVerse}\n"${verse.bibleText}"\n\nAnálise de Ahmed Deedat:\n${verse.deedatAnalysis}`;
    navigator.clipboard.writeText(text);
    setCopiedVerse(verse.chapterVerse);
    setTimeout(() => setCopiedVerse(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header Deck */}
      <div className="border-b border-stone-800 pb-5">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100 mb-2">
          Índice de Versículos Bíblicos Analisados por Deedat
        </h2>
        <p className="text-sm text-stone-400 max-w-3xl leading-relaxed">
          Exame textual comparativo das principais passagens do Antigo e Novo Testamento citadas por Sheikh Ahmed Deedat em seus livros, debates públicos e pregações ao redor do mundo.
        </p>

        {/* Search input for verses */}
        <div className="mt-4 relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
          <input
            type="text"
            value={verseSearch}
            onChange={(e) => setVerseSearch(e.target.value)}
            placeholder="Pesquisar por livro (ex: Mateus, João, Isaías) ou versículo..."
            className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-stone-900 border border-stone-800 rounded-lg text-stone-100 placeholder-stone-500 focus:outline-hidden focus:border-amber-600 transition-colors"
          />
        </div>
      </div>

      {/* Verses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredVerses.map((verse, index) => (
          <article
            key={index}
            className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 hover:border-stone-700 transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              {/* Header: Book and actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-amber-500" />
                  <h3 className="font-mono font-bold text-sm sm:text-base text-amber-200">
                    {verse.book} {verse.chapterVerse}
                  </h3>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleCopy(verse)}
                    className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
                    title="Copiar texto e análise"
                  >
                    {copiedVerse === verse.chapterVerse ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Bible Text Blockquote */}
              <blockquote className="border-l-2 border-stone-700 pl-3 italic text-stone-300 text-xs sm:text-sm leading-relaxed">
                "{verse.bibleText}"
              </blockquote>

              {/* Deedat Analysis */}
              <div className="pt-2 text-xs sm:text-sm text-stone-300 leading-relaxed bg-stone-950/60 p-3.5 rounded-lg border border-stone-800/80">
                <span className="font-semibold text-amber-400 block mb-1">
                  Exegese e Argumentação de Ahmed Deedat:
                </span>
                <p>{verse.deedatAnalysis}</p>
              </div>
            </div>

            {/* Footer action to find related questions */}
            <div className="mt-4 pt-3 border-t border-stone-800/60 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 font-mono">
                Texto Massorético / KJV
              </span>
              <button
                onClick={() => onSearchTopic(verse.chapterVerse)}
                className="text-xs text-amber-400 hover:text-amber-300 font-medium"
              >
                Buscar Perguntas com Este Versículo →
              </button>
            </div>
          </article>
        ))}
      </div>

      {filteredVerses.length === 0 && (
        <div className="text-center py-12 text-stone-400 text-sm">
          Nenhum versículo encontrado para "{verseSearch}". Tente pesquisar por livros como "Deuteronômio", "João", "Mateus" ou "Isaías".
        </div>
      )}
    </div>
  );
};
