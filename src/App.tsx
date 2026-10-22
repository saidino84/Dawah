import React, { useState, useMemo, useEffect } from 'react';
import { DEEDAT_ITEMS, HISTORICAL_DEBATES, BIBLICAL_VERSE_INDEX } from './data/deedatData';
import { DeedatItem, HistoricalDebate, Category, AppTab } from './types';
import { Navbar } from './components/Navbar';
import { QuestionCard } from './components/QuestionCard';
import { QuestionDetailModal } from './components/QuestionDetailModal';
import { DebatesView } from './components/DebatesView';
import { VersesExplorer } from './components/VersesExplorer';
import { FavoritesView } from './components/FavoritesView';
import { AddEntryView } from './components/AddEntryView';
import { ConversionsView } from './components/ConversionsView';
import { LinkLearningLab } from './components/LinkLearningLab';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { OfflineManagerModal } from './components/OfflineManagerModal';
import { InstallModal } from './components/InstallModal';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useAudioPlayer } from './hooks/useAudioPlayer';
import { useFavorites } from './hooks/useFavorites';
import heroImage from './assets/images/deedat_debates_archive_hero_1790601977101.jpg';
import {
  Search,
  Filter,
  X,
  Volume2,
  Headphones,
  BookOpen,
  WifiOff,
  Sparkles,
  Download,
  HelpCircle,
  Tv,
  Check,
  RotateCcw,
  PlusCircle
} from 'lucide-react';

const CATEGORIES: { id: string; label: string }[] = [
  { id: 'all', label: 'Todos os Temas' },
  { id: 'crucificacao', label: 'Crucificação & Jonas' },
  { id: 'divindade', label: 'Divindade & Trindade' },
  { id: 'biblia-autenticidade', label: 'Autenticidade & Erros Bíblicos' },
  { id: 'pratica-islamica', label: 'Práticas Islâmicas & Oração' },
  { id: 'pecado-original', label: 'Pecado Original (Refutação)' },
  { id: 'filosofia-teologia', label: 'Filosofia, Mente & Duas Vontades' },
  { id: 'erros-cientificos-biblia', label: 'Ciência: Alcorão vs Bíblia' },
  { id: 'dawah-rua', label: 'Dawah de Rua nos EUA & Londres' },
  { id: 'profecias', label: 'Profecias de Maomé' },
  { id: 'cristo-isla', label: 'Jesus no Islã' },
  { id: 'polemicas', label: 'Respostas a Críticos' },
  { id: 'debates-gerais', label: 'Método & Dawah de Rua' },
];

const OPPONENTS = [
  'Todos os Debatedores',
  'Dr. Anis Shorrosh',
  'Jimmy Swaggart',
  'Pastor Stanley Sjöberg',
  'Josh McDowell',
  'Pastor Eric Bock',
  '20 Cristãos (Speakers Corner)',
  'Dr. William Campbell',
  'David Wood',
  'Sam Shamoun',
  'Prof. Lawrence Krauss',
  'Dr. James White',
  'Pastor Wakefield',
  'Missionários Cristãos (Durban)',
  'Pregadores de Rua (Hyde Park)',
  'Missionários nos EUA',
];

const QUICK_SUGGESTIONS = [
  'Por que não comemos porco',
  'Circuncisão mandamento eterno',
  '20 Cristãos quem governou o universo',
  'Mulheres oram separadas',
  'Por que usar chapeuzinho (kufi)',
  'Pecado Original Ezequiel 18:20',
  'Gênesis 1 plantas antes do sol',
  'Duas vontades Getsêmani',
  'Quem é o pai de Jesus Mateus vs Lucas',
  '1 João 5:7 Coma Joanina',
  'Zakir Naik',
  'Mohammed Hijab',
  'Sheikh Uthman Farooq',
  'Deuteronômio 18:18',
  'João 10:30',
  'David Wood',
  'Sam Shamoun',
];

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedOpponent, setSelectedOpponent] = useState('Todos os Debatedores');
  const [onlyWithVerses, setOnlyWithVerses] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<DeedatItem | null>(null);
  const [isOfflineManagerOpen, setIsOfflineManagerOpen] = useState(false);
  const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);

  // Custom added items persisted in localStorage
  const [customItems, setCustomItems] = useState<DeedatItem[]>(() => {
    try {
      const saved = localStorage.getItem('deedat_custom_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Custom added debates persisted in localStorage
  const [customDebates, setCustomDebates] = useState<HistoricalDebate[]>(() => {
    try {
      const saved = localStorage.getItem('deedat_custom_debates');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Combined items and debates
  const allItems = useMemo(() => {
    return [...customItems, ...DEEDAT_ITEMS];
  }, [customItems]);

  const allDebates = useMemo(() => {
    return [...customDebates, ...HISTORICAL_DEBATES];
  }, [customDebates]);

  const handleAddQuestion = (newItem: DeedatItem) => {
    const updated = [newItem, ...customItems];
    setCustomItems(updated);
    try {
      localStorage.setItem('deedat_custom_items', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  };

  const handleAddDebate = (newDebate: HistoricalDebate) => {
    const updated = [newDebate, ...customDebates];
    setCustomDebates(updated);
    try {
      localStorage.setItem('deedat_custom_debates', JSON.stringify(updated));
    } catch (err) {
      console.error('Failed to save to localStorage', err);
    }
  };

  const isOnline = useOnlineStatus();
  const {
    favoriteIds,
    toggleFavorite,
    isFavorite,
    notes,
    saveNote,
    deleteNote,
    favoritesCount
  } = useFavorites();

  const {
    activeItem: playingItem,
    isPlaying,
    isPaused,
    rate,
    progress,
    currentParagraph,
    totalParagraphs,
    playItem,
    pause,
    resume,
    stop,
    rewindParagraph,
    forwardParagraph,
    playNext,
    playPrevious,
    changeRate,
  } = useAudioPlayer(allItems);

  // Filtered questions based on search query, category, opponent, and verses filter
  const filteredQuestions = useMemo(() => {
    return allItems.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Opponent match
      if (selectedOpponent !== 'Todos os Debatedores') {
        const matchesOpponent =
          item.opponent?.toLowerCase().includes(selectedOpponent.toLowerCase()) ||
          item.askedBy?.toLowerCase().includes(selectedOpponent.toLowerCase());
        if (!matchesOpponent) return false;
      }

      // Verses only filter
      if (onlyWithVerses && (!item.biblicalVerses || item.biblicalVerses.length === 0)) {
        return false;
      }

      // Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = item.title.toLowerCase().includes(q);
        const inQuestion = item.question.toLowerCase().includes(q);
        const inSummary = item.summary.toLowerCase().includes(q);
        const inQuote = item.keyQuote.toLowerCase().includes(q);
        const inSpeaker = item.speaker?.toLowerCase().includes(q) || false;
        const inDebater = item.askedBy.toLowerCase().includes(q);
        const inOpponent = item.opponent?.toLowerCase().includes(q);
        const inAnswers = item.fullAnswer.some((p) => p.toLowerCase().includes(q));
        const inVerses = item.biblicalVerses.some(
          (bv) =>
            bv.book.toLowerCase().includes(q) ||
            bv.chapterVerse.toLowerCase().includes(q) ||
            bv.bibleText.toLowerCase().includes(q) ||
            bv.deedatAnalysis.toLowerCase().includes(q)
        );
        const inQuran = item.quranicVerses.some(
          (qv) =>
            qv.surah.toLowerCase().includes(q) ||
            qv.translation.toLowerCase().includes(q)
        );
        const inHadiths = item.hadiths?.some(
          (h) =>
            h.collection.toLowerCase().includes(q) ||
            h.hadithNumber.toLowerCase().includes(q) ||
            h.text.toLowerCase().includes(q) ||
            h.explanation.toLowerCase().includes(q)
        ) || false;

        // Also check if any word of multi-word query is present
        const queryWords = q.split(/\s+/).filter(w => w.length > 2);
        const matchesAllWords = queryWords.length > 1 && queryWords.every(word => 
          item.title.toLowerCase().includes(word) ||
          item.question.toLowerCase().includes(word) ||
          item.summary.toLowerCase().includes(word) ||
          (item.speaker && item.speaker.toLowerCase().includes(word)) ||
          item.askedBy.toLowerCase().includes(word) ||
          item.fullAnswer.some(p => p.toLowerCase().includes(word)) ||
          item.biblicalVerses.some(bv => bv.book.toLowerCase().includes(word) || bv.chapterVerse.toLowerCase().includes(word) || bv.bibleText.toLowerCase().includes(word))
        );

        if (
          !inTitle &&
          !inQuestion &&
          !inSummary &&
          !inQuote &&
          !inSpeaker &&
          !inDebater &&
          !inOpponent &&
          !inAnswers &&
          !inVerses &&
          !inQuran &&
          !inHadiths &&
          !matchesAllWords
        ) {
          return false;
        }
      }

      return true;
    });
  }, [allItems, searchQuery, selectedCategory, selectedOpponent, onlyWithVerses]);

  // Favorite items mapped
  const favoriteItems = useMemo(() => {
    return allItems.filter((item) => favoriteIds.includes(item.id));
  }, [allItems, favoriteIds]);

  const handleSelectDebateQuestions = (opponentName: string) => {
    setSelectedOpponent(opponentName);
    setActiveTab('questions');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleSearchTopicFromVerses = (query: string) => {
    setSearchQuery(query);
    setActiveTab('questions');
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedOpponent('Todos os Debatedores');
    setOnlyWithVerses(false);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-800 selection:text-white pb-28">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favoritesCount}
        questionsCount={allItems.length}
        debatesCount={allDebates.length}
        versesCount={BIBLICAL_VERSE_INDEX.length}
        isOnline={isOnline}
        onOpenOfflineManager={() => setIsOfflineManagerOpen(true)}
        onOpenInstallModal={() => setIsInstallModalOpen(true)}
      />

      {/* Offline Toast Banner when connection is lost */}
      {!isOnline && (
        <div className="bg-amber-950/90 border-b border-amber-800/80 px-4 py-2 text-center text-xs text-amber-200 flex items-center justify-center gap-2">
          <WifiOff className="w-3.5 h-3.5 animate-pulse" />
          <span>
            <strong>Modo Offline Ativo:</strong> Você está acessando todas as perguntas, análises bíblicas e áudio do arquivo local sem consumir internet.
          </span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-8">
        {/* Hero Archival Banner (rendered primarily in questions tab) */}
        {activeTab === 'questions' && (
          <div className="relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 shadow-2xl">
            {/* Visual focal image with measured contrast scrim */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
              <img
                src={heroImage}
                alt="Arquivo de debates de Sheikh Ahmed Deedat sobre temas bíblicos e teologia comparada"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/30" />
            </div>

            {/* Overlaid Editorial Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10">
              <div className="max-w-3xl space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-400">
                  <span>Enciclopédia de Dawah & Teologia Comparada</span>
                  <span aria-hidden="true">·</span>
                  <span>Ahmed Deedat & Apologetas Contemporâneos</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-4xl md:text-5xl font-extrabold text-stone-100 leading-tight">
                  Debates, Ensinamentos & Respostas da Dawah
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-stone-300 leading-relaxed max-w-2xl font-reading">
                  Acervo completo e irrestrito: Ahmed Deedat, Dr. Zakir Naik, Mohammed Hijab, Ali Dawah, Sheikh Uthman Farooq, Hamza Tzortzis e debates do Speakers Corner. Sem resumos mutilados, com transcrições, versículos e Hadiths autênticos.
                </p>

                {/* Action buttons: direct HTML download and install guide */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('add-entry')}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm shadow-xl transition-all active:scale-95 cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Adicionar Nova Pergunta / Debate</span>
                  </button>
                  <a
                    href="/deedat-archive.html"
                    download="deedat-archive.html"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900/90 hover:bg-stone-800 text-stone-200 font-medium text-xs sm:text-sm border border-stone-700/80 transition-colors"
                  >
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Baixar Arquivo .HTML</span>
                  </a>
                  <button
                    onClick={() => setIsInstallModalOpen(true)}
                    className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-stone-900/60 hover:bg-stone-800 text-stone-300 font-medium text-xs sm:text-sm border border-stone-800 transition-colors"
                  >
                    <span>Instalar APK</span>
                  </button>
                </div>

                {/* Quantitative statistics proof */}
                <div className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-400 font-mono">
                  <span>
                    <strong className="text-amber-300 font-bold tabular-nums">30+</strong> Lições, Debates & Ensinamentos
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong className="text-amber-300 font-bold tabular-nums">15</strong> Debates Históricos & Modernos
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>
                    <strong className="text-amber-300 font-bold tabular-nums">Speakers Corner, EUA & África</strong>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-emerald-400">
                    Modo 100% Offline
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 1: Perguntas & Respostas (Main Search & Catalog) */}
        {activeTab === 'questions' && (
          <section className="space-y-6">
            {/* Search Engine Control Bar */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Search Input */}
                <div className="relative flex-1">
                  <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Pesquisar por versículo (ex: Mateus 12:40, Deut 18:18), tema, palavra-chave ou debatedor..."
                    className="w-full pl-11 pr-10 py-3 text-sm bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-hidden focus:border-amber-600 transition-colors"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Opponents Filter Dropdown */}
                <div className="sm:w-64">
                  <select
                    value={selectedOpponent}
                    onChange={(e) => setSelectedOpponent(e.target.value)}
                    className="w-full py-3 px-3.5 text-xs sm:text-sm bg-stone-950 border border-stone-800 rounded-xl text-stone-200 focus:outline-hidden focus:border-amber-600 transition-colors cursor-pointer"
                  >
                    {OPPONENTS.map((opp) => (
                      <option key={opp} value={opp} className="bg-stone-900 text-stone-200">
                        {opp}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Quick Keywords Chips */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                <span className="text-stone-500 mr-1 font-mono text-[11px]">Busca rápida:</span>
                {QUICK_SUGGESTIONS.map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => {
                      setSearchQuery(kw);
                      setSelectedCategory('all');
                      setSelectedOpponent('Todos os Debatedores');
                      setActiveTab('questions');
                    }}
                    className={`px-2.5 py-1 rounded-md transition-colors text-[11px] cursor-pointer ${
                      searchQuery.toLowerCase() === kw.toLowerCase()
                        ? 'bg-amber-500 text-stone-950 font-bold'
                        : 'bg-stone-800/80 hover:bg-stone-700 text-stone-300 hover:text-amber-200'
                    }`}
                  >
                    {kw}
                  </button>
                ))}
              </div>

              {/* Category Segmented Filter Tabs (functional interactive controls) */}
              <div className="pt-2 border-t border-stone-800/60 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-amber-600 text-stone-950 font-bold'
                          : 'bg-stone-800/60 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Filter toggle: only with biblical verses */}
                <label className="flex items-center gap-2 text-xs text-stone-400 cursor-pointer hover:text-stone-200 select-none">
                  <input
                    type="checkbox"
                    checked={onlyWithVerses}
                    onChange={(e) => setOnlyWithVerses(e.target.checked)}
                    className="rounded-sm border-stone-700 text-amber-600 focus:ring-0 bg-stone-950"
                  />
                  <span>Apenas com versículos bíblicos citados</span>
                </label>
              </div>
            </div>

            {/* Results Header Count & Reset */}
            <div className="flex items-center justify-between text-xs text-stone-400 px-1">
              <span>
                Mostrando <strong className="text-amber-400 font-mono tabular-nums">{filteredQuestions.length}</strong> correspondência(s)
                {searchQuery && ` para "${searchQuery}"`}
              </span>

              {(searchQuery || selectedCategory !== 'all' || selectedOpponent !== 'Todos os Debatedores' || onlyWithVerses) && (
                <button
                  onClick={handleClearFilters}
                  className="flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Limpar filtros</span>
                </button>
              )}
            </div>

            {/* Questions Cards Grid */}
            {filteredQuestions.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredQuestions.map((item) => (
                  <QuestionCard
                    key={item.id}
                    item={item}
                    isFavorite={isFavorite(item.id)}
                    isPlayingThisItem={playingItem?.id === item.id && isPlaying}
                    onToggleFavorite={toggleFavorite}
                    onPlayAudio={playItem}
                    onOpenDetails={(it) => setSelectedItemForModal(it)}
                    hasNote={!!notes[item.id]}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 bg-stone-900/40 border border-stone-800/80 rounded-2xl max-w-lg mx-auto space-y-4">
                <HelpCircle className="w-12 h-12 text-stone-500 mx-auto" />
                <div>
                  <h3 className="text-base font-semibold text-stone-200">
                    Nenhuma pergunta encontrada
                  </h3>
                  <p className="text-xs text-stone-400 mt-1 max-w-sm mx-auto">
                    Não encontramos resultados para os termos pesquisados. Tente usar palavras-chave como "Jonas", "Shorrosh", "Deuteronômio" ou limpar os filtros.
                  </p>
                </div>
                <button
                  onClick={handleClearFilters}
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                >
                  Ver Todas as Perguntas
                </button>
              </div>
            )}
          </section>
        )}

        {/* Tab 2: Debates Históricos */}
        {activeTab === 'debates' && (
          <DebatesView
            debates={allDebates}
            onSelectDebateQuestions={handleSelectDebateQuestions}
          />
        )}

        {/* Tab 3: Versículos Bíblicos */}
        {activeTab === 'verses' && (
          <VersesExplorer onSearchTopic={handleSearchTopicFromVerses} />
        )}

        {/* Tab: Guia de Conversões & Ensinamentos Universais */}
        {activeTab === 'conversoes-ensinamentos' && (
          <ConversionsView
            allItems={allItems}
            onOpenDetails={(it) => setSelectedItemForModal(it)}
            onPlayAudio={playItem}
          />
        )}

        {/* Tab: Analisador de Link de Vídeo / Livro / Página */}
        {activeTab === 'estudo-video-livro' && (
          <LinkLearningLab
            onAddGeneratedLesson={handleAddQuestion}
            onOpenDetails={(it) => setSelectedItemForModal(it)}
            onPlayAudio={playItem}
          />
        )}

        {/* Tab 4: Favoritos & Caderno de Notas */}
        {activeTab === 'favorites' && (
          <FavoritesView
            favoriteItems={favoriteItems}
            notes={notes}
            activePlayingId={playingItem?.id || null}
            onToggleFavorite={toggleFavorite}
            onPlayAudio={playItem}
            onOpenDetails={(it) => setSelectedItemForModal(it)}
            onExploreQuestions={() => setActiveTab('questions')}
          />
        )}

        {/* Tab 5: Adicionar Nova Pergunta, Resposta, Entrevista ou Debate */}
        {activeTab === 'add-entry' && (
          <AddEntryView
            onAddQuestion={handleAddQuestion}
            onAddDebate={handleAddDebate}
            onViewQuestions={() => setActiveTab('questions')}
            existingOpponents={OPPONENTS}
            onOpenDetails={(it) => setSelectedItemForModal(it)}
            onPlayAudio={playItem}
          />
        )}
      </main>

      {/* Persistent Audio Player Bar */}
      <AudioPlayerBar
        activeItem={playingItem}
        isPlaying={isPlaying}
        isPaused={isPaused}
        rate={rate}
        progress={progress}
        currentParagraph={currentParagraph}
        totalParagraphs={totalParagraphs}
        onResume={resume}
        onPause={pause}
        onStop={stop}
        onRewind={rewindParagraph}
        onForward={forwardParagraph}
        onNext={playNext}
        onPrevious={playPrevious}
        onChangeRate={changeRate}
        onOpenDetails={(it) => setSelectedItemForModal(it)}
      />

      {/* Modal for Deep Study & Reader */}
      <QuestionDetailModal
        item={selectedItemForModal}
        isOpen={!!selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        isFavorite={selectedItemForModal ? isFavorite(selectedItemForModal.id) : false}
        isPlayingThisItem={
          selectedItemForModal ? playingItem?.id === selectedItemForModal.id && isPlaying : false
        }
        onToggleFavorite={toggleFavorite}
        onPlayAudio={playItem}
        userNote={selectedItemForModal ? notes[selectedItemForModal.id] : undefined}
        onSaveNote={saveNote}
        onDeleteNote={deleteNote}
      />

      {/* Offline Storage Manager Modal */}
      <OfflineManagerModal
        isOpen={isOfflineManagerOpen}
        onClose={() => setIsOfflineManagerOpen(false)}
        isOnline={isOnline}
        totalItemsCount={DEEDAT_ITEMS.length}
        favoritesCount={favoritesCount}
      />

      {/* App Installation Guidance Modal */}
      <InstallModal
        isOpen={isInstallModalOpen}
        onClose={() => setIsInstallModalOpen(false)}
        appUrl={window.location.origin}
      />
    </div>
  );
}
