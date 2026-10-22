import React, { useState } from 'react';
import { DeedatItem, Category, BiblicalReference, QuranReference, HadithReference, HistoricalDebate } from '../types';
import {
  PlusCircle,
  BookOpen,
  HelpCircle,
  Tv,
  CheckCircle2,
  Trash2,
  Sparkles,
  Layers,
  Quote,
  Flame,
  ArrowRight,
  Info,
  Link as LinkIcon
} from 'lucide-react';
import { DebateLinkAnalyzer } from './DebateLinkAnalyzer';

interface AddEntryViewProps {
  onAddQuestion: (newItem: DeedatItem) => void;
  onAddDebate: (newDebate: HistoricalDebate) => void;
  onViewQuestions: () => void;
  existingOpponents: string[];
  onOpenDetails?: (item: DeedatItem) => void;
  onPlayAudio?: (item: DeedatItem) => void;
}

export const AddEntryView: React.FC<AddEntryViewProps> = ({
  onAddQuestion,
  onAddDebate,
  onViewQuestions,
  existingOpponents,
  onOpenDetails = () => {},
  onPlayAudio = () => {},
}) => {
  const [entryType, setEntryType] = useState<'video-link' | 'debate' | 'question'>('video-link');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Form state for Question / Answer / Interview
  const [title, setTitle] = useState('');
  const [question, setQuestion] = useState('');
  const [askedBy, setAskedBy] = useState('');
  const [opponent, setOpponent] = useState('');
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [location, setLocation] = useState('');
  const [debateTitle, setDebateTitle] = useState('');
  const [category, setCategory] = useState<Category>('debates-gerais');
  const [categoryLabel, setCategoryLabel] = useState('Debates Gerais & Dawah');
  const [summary, setSummary] = useState('');
  const [keyQuote, setKeyQuote] = useState('');
  const [fullAnswerText, setFullAnswerText] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [durationMinutes, setDurationMinutes] = useState(15);

  // Verses state
  const [biblicalVerses, setBiblicalVerses] = useState<BiblicalReference[]>([
    { book: '', chapterVerse: '', bibleText: '', deedatAnalysis: '' }
  ]);
  const [quranicVerses, setQuranicVerses] = useState<QuranReference[]>([
    { surah: '', ayah: '', translation: '' }
  ]);
  const [hadiths, setHadiths] = useState<HadithReference[]>([
    { collection: 'Sahih al-Bukhari', hadithNumber: '', narrator: '', text: '', explanation: '' }
  ]);

  // Form state for Historical Debate / Interview
  const [dTitle, setDTitle] = useState('');
  const [dOpponent, setDOpponent] = useState('');
  const [dOpponentTitle, setDOpponentTitle] = useState('');
  const [dDate, setDDate] = useState('');
  const [dLocation, setDLocation] = useState('');
  const [dVenue, setDVenue] = useState('');
  const [dAttendees, setDAttendees] = useState('');
  const [dYoutubeUrl, setDYoutubeUrl] = useState('');
  const [dDescription, setDDescription] = useState('');
  const [dCoreTopics, setDCoreTopics] = useState('');
  const [dDeedatThesis, setDDeedatThesis] = useState('');
  const [dOpponentThesis, setDOpponentThesis] = useState('');

  const extractYoutubeId = (url: string): string => {
    try {
      const parsed = new URL(url);
      if (parsed.hostname.includes('youtube.com')) {
        return parsed.searchParams.get('v') || 'F0k9U4qLzX8';
      }
      if (parsed.hostname.includes('youtu.be')) {
        return parsed.pathname.replace('/', '') || 'F0k9U4qLzX8';
      }
    } catch {
      // not a full url
    }
    return 'F0k9U4qLzX8';
  };

  const handleCategoryChange = (cat: Category) => {
    setCategory(cat);
    const labels: Record<Category, string> = {
      'crucificacao': 'Crucificação e Ressurreição',
      'divindade': 'Divindade de Jesus e Trindade',
      'biblia-autenticidade': 'Autenticidade Bíblica & Textual',
      'profecias': 'Profecias Bíblicas de Maomé',
      'trindade': 'Trindade vs Monoteísmo Estrito',
      'cristo-isla': 'Jesus Cristo na Visão Islâmica',
      'polemicas': 'Respostas a Críticos & Polêmicas',
      'debates-gerais': 'Debates Gerais & Dawah de Rua',
      'pratica-islamica': 'Práticas Islâmicas & Adoração Bíblica',
      'pecado-original': 'Refutação do Pecado Original',
      'filosofia-teologia': 'Filosofia, Lógica & Teologia',
      'erros-cientificos-biblia': 'Ciência: Alcorão vs Bíblia',
      'dawah-rua': 'Dawah de Rua nos EUA & Londres',
    };
    setCategoryLabel(labels[cat] || 'Debates Gerais & Dawah');
  };

  const handleAddBiblicalVerse = () => {
    setBiblicalVerses([...biblicalVerses, { book: '', chapterVerse: '', bibleText: '', deedatAnalysis: '' }]);
  };

  const handleRemoveBiblicalVerse = (index: number) => {
    setBiblicalVerses(biblicalVerses.filter((_, i) => i !== index));
  };

  const handleUpdateBiblicalVerse = (index: number, field: keyof BiblicalReference, val: string) => {
    const updated = [...biblicalVerses];
    updated[index] = { ...updated[index], [field]: val };
    setBiblicalVerses(updated);
  };

  const handleAddQuranVerse = () => {
    setQuranicVerses([...quranicVerses, { surah: '', ayah: '', translation: '' }]);
  };

  const handleRemoveQuranVerse = (index: number) => {
    setQuranicVerses(quranicVerses.filter((_, i) => i !== index));
  };

  const handleUpdateQuranVerse = (index: number, field: keyof QuranReference, val: string) => {
    const updated = [...quranicVerses];
    updated[index] = { ...updated[index], [field]: val };
    setQuranicVerses(updated);
  };

  const handleAddHadith = () => {
    setHadiths([...hadiths, { collection: 'Sahih al-Bukhari', hadithNumber: '', narrator: '', text: '', explanation: '' }]);
  };

  const handleRemoveHadith = (index: number) => {
    setHadiths(hadiths.filter((_, i) => i !== index));
  };

  const handleUpdateHadith = (index: number, field: keyof HadithReference, val: string) => {
    const updated = [...hadiths];
    updated[index] = { ...updated[index], [field]: val };
    setHadiths(updated);
  };

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !question.trim()) {
      alert('Por favor, preencha o título e a pergunta/entrevista.');
      return;
    }

    // Split answer paragraphs
    const paragraphs = fullAnswerText
      .split('\n\n')
      .map((p) => p.trim())
      .filter((p) => p.length > 0);

    if (paragraphs.length === 0) {
      paragraphs.push(summary || question);
    }

    // Clean verses and hadiths
    const cleanBVerses = biblicalVerses.filter((v) => v.book.trim() && v.chapterVerse.trim());
    const cleanQVerses = quranicVerses.filter((v) => v.surah.trim() && v.ayah.trim());
    const cleanHadiths = hadiths.filter((h) => h.text.trim().length > 0);

    const newItem: DeedatItem = {
      id: `custom-q-${Date.now()}`,
      title: title.trim(),
      question: question.trim(),
      askedBy: askedBy.trim() || 'Debatedor / Entrevistador',
      opponent: opponent.trim() || askedBy.trim() || 'Geral',
      year: year.trim() || new Date().getFullYear().toString(),
      location: location.trim() || 'Internacional',
      debateTitle: debateTitle.trim() || title.trim(),
      category,
      categoryLabel,
      summary: summary.trim() || paragraphs[0] || '',
      keyQuote: keyQuote.trim() || title.trim(),
      fullAnswer: paragraphs,
      biblicalVerses: cleanBVerses,
      quranicVerses: cleanQVerses,
      hadiths: cleanHadiths.length > 0 ? cleanHadiths : undefined,
      youtubeUrl: youtubeUrl.trim() || 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
      youtubeId: extractYoutubeId(youtubeUrl),
      durationMinutes: Number(durationMinutes) || 12,
      isPopular: false,
    };

    onAddQuestion(newItem);
    setSuccessMessage(`Pergunta e Resposta "${newItem.title}" adicionada com sucesso ao arquivo!`);
    
    // Reset form
    setTitle('');
    setQuestion('');
    setAskedBy('');
    setOpponent('');
    setLocation('');
    setDebateTitle('');
    setSummary('');
    setKeyQuote('');
    setFullAnswerText('');
    setYoutubeUrl('');
    setBiblicalVerses([{ book: '', chapterVerse: '', bibleText: '', deedatAnalysis: '' }]);
    setQuranicVerses([{ surah: '', ayah: '', translation: '' }]);
    setHadiths([{ collection: 'Sahih al-Bukhari', hadithNumber: '', narrator: '', text: '', explanation: '' }]);

    setTimeout(() => setSuccessMessage(null), 6000);
  };

  const handleSubmitDebate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dTitle.trim() || !dOpponent.trim()) {
      alert('Por favor, preencha o título do debate e o nome do debatedor/entrevistado.');
      return;
    }

    const topics = dCoreTopics
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const newDebate: HistoricalDebate = {
      id: `custom-debate-${Date.now()}`,
      title: dTitle.trim(),
      opponent: dOpponent.trim(),
      opponentTitle: dOpponentTitle.trim() || 'Debatedor / Convidado',
      date: dDate.trim() || `${new Date().getFullYear()}`,
      location: dLocation.trim() || 'Internacional',
      venue: dVenue.trim() || 'Online / Auditório',
      attendeesCount: dAttendees.trim() || 'Audiência Global de Dawah',
      youtubeUrl: dYoutubeUrl.trim() || 'https://www.youtube.com/watch?v=F0k9U4qLzX8',
      youtubeId: extractYoutubeId(dYoutubeUrl),
      description: dDescription.trim(),
      coreTopics: topics.length > 0 ? topics : ['Dawah', 'Monoteísmo', 'Diálogo Religioso'],
      deedatCentralThesis: dDeedatThesis.trim() || 'Apresentação do monoteísmo puro (Tawheed) e refutação baseada nas escrituras.',
      opponentCentralThesis: dOpponentThesis.trim() || 'Defesa da perspectiva e dogmas tradicionais.',
      highlightQuestionsCount: 1,
    };

    onAddDebate(newDebate);
    setSuccessMessage(`Debate/Entrevista "${newDebate.title}" adicionado com sucesso ao arquivo!`);

    // Reset form
    setDTitle('');
    setDOpponent('');
    setDOpponentTitle('');
    setDDate('');
    setDLocation('');
    setDVenue('');
    setDAttendees('');
    setDYoutubeUrl('');
    setDDescription('');
    setDCoreTopics('');
    setDDeedatThesis('');
    setDOpponentThesis('');

    setTimeout(() => setSuccessMessage(null), 6000);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Editorial Header */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
                Adicionar Novo Ensinamento, Pergunta ou Debate
              </h1>
              <p className="text-xs sm:text-sm text-stone-400 mt-0.5">
                Cadastre novas entrevistas, debates de rua, perguntas e respostas com versículos bíblicos e alcorânicos.
              </p>
            </div>
          </div>

          <button
            onClick={onViewQuestions}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-colors shrink-0"
          >
            <span>Ver Arquivo Completo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mt-4 p-4 rounded-xl bg-emerald-950/70 border border-emerald-600/50 flex items-center gap-3 text-emerald-200 text-sm animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="flex-1 font-medium">{successMessage}</div>
            <button
              onClick={onViewQuestions}
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs rounded-md shadow-xs transition-colors shrink-0"
            >
              Explorar Agora
            </button>
          </div>
        )}

        {/* Tab switch: Colar Link do Vídeo (IA) vs Pergunta & Resposta vs Debate Manual */}
        <div className="mt-6 flex flex-wrap items-center gap-2 p-1.5 rounded-xl bg-stone-950 border border-stone-800 max-w-2xl">
          <button
            onClick={() => setEntryType('video-link')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              entryType === 'video-link'
                ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-950" />
            <span>Colar Link de Vídeo (IA)</span>
          </button>
          <button
            onClick={() => setEntryType('debate')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              entryType === 'debate'
                ? 'bg-amber-600 text-stone-950 shadow-md font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Tv className="w-4 h-4" />
            <span>Debate Manual</span>
          </button>
          <button
            onClick={() => setEntryType('question')}
            className={`flex-1 py-2 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
              entryType === 'question'
                ? 'bg-amber-600 text-stone-950 shadow-md font-bold'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Pergunta Manual</span>
          </button>
        </div>
      </div>

      {/* SUBTAB 1: ANALISADOR INTELIGENTE POR LINK DE VÍDEO (REQUISITO PRINCIPAL) */}
      {entryType === 'video-link' && (
        <DebateLinkAnalyzer
          onAddDebate={onAddDebate}
          onAddQuestion={onAddQuestion}
          onOpenDetails={onOpenDetails}
          onPlayAudio={onPlayAudio}
          onNavigateToQuestions={onViewQuestions}
        />
      )}

      {/* FORM 1: PERGUNTA & RESPOSTA */}
      {entryType === 'question' && (
        <form onSubmit={handleSubmitQuestion} className="space-y-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-800 text-amber-400 text-sm font-bold">
              <Sparkles className="w-4 h-4" />
              <span>Informações Principais da Pergunta & Ensinamento</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Título da Pergunta / Lição <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Por que a oração no Getsêmani refuta a divindade de Jesus?"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  A Pergunta Exata Feita pelo Crítico / Plateia <span className="text-amber-400">*</span>
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Ex: Como Ahmed Deedat responde à alegação de que Jesus orou ao Pai apenas como exemplo de humildade humana?"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Quem Fez a Pergunta / Debatedor Oponente
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dr. Anis Shorrosh, Pastor da plateia, 20 Cristãos..."
                  value={askedBy}
                  onChange={(e) => {
                    setAskedBy(e.target.value);
                    if (!opponent) setOpponent(e.target.value);
                  }}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Oponente / Pregador Vinculado
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dr. William Campbell, Jimmy Swaggart, David Wood..."
                  value={opponent}
                  onChange={(e) => setOpponent(e.target.value)}
                  list="opponents-list"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
                <datalist id="opponents-list">
                  {existingOpponents.map((op) => (
                    <option key={op} value={op} />
                  ))}
                </datalist>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Categoria Teológica
                </label>
                <select
                  value={category}
                  onChange={(e) => handleCategoryChange(e.target.value as Category)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                >
                  <option value="crucificacao">Crucificação e Ressurreição</option>
                  <option value="divindade">Divindade de Jesus e Trindade</option>
                  <option value="biblia-autenticidade">Autenticidade Bíblica & Erros Textuais</option>
                  <option value="pratica-islamica">Práticas Islâmicas & Costumes Bíblicos</option>
                  <option value="pecado-original">Refutação do Pecado Original</option>
                  <option value="filosofia-teologia">Filosofia, Lógica & Teologia</option>
                  <option value="erros-cientificos-biblia">Ciência: Alcorão vs Bíblia</option>
                  <option value="dawah-rua">Dawah de Rua nos EUA & Londres</option>
                  <option value="profecias">Profecias Bíblicas de Maomé</option>
                  <option value="trindade">Trindade vs Monoteísmo Estrito</option>
                  <option value="cristo-isla">Jesus Cristo na Visão Islâmica</option>
                  <option value="polemicas">Respostas a Críticos & Polêmicas</option>
                  <option value="debates-gerais">Debates Gerais & Dawah de Rua</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Ano do Debate / Gravação
                </label>
                <input
                  type="text"
                  placeholder="Ex: 1985, 2021, etc."
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Local / Cidade / Evento
                </label>
                <input
                  type="text"
                  placeholder="Ex: Royal Albert Hall Londres, Hyde Park, Chicago..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Link do Vídeo / YouTube (Opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300">
                Frase de Efeito / Citação Chave (Key Quote)
              </label>
              <div className="relative">
                <Quote className="w-4 h-4 absolute left-3 top-3 text-amber-500" />
                <input
                  type="text"
                  placeholder="Ex: Deus pode morrer? Se não pode, então Deus não morreu na cruz!"
                  value={keyQuote}
                  onChange={(e) => setKeyQuote(e.target.value)}
                  className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500 italic"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300">
                Resumo Conciso da Resposta
              </label>
              <textarea
                rows={2}
                placeholder="Breve resumo da resposta teológica apresentada em 2 ou 3 frases..."
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300">
                Resposta Completa Detalhada (Separe os parágrafos com linha em branco)
              </label>
              <textarea
                rows={6}
                placeholder="Escreva a resposta e argumentação completa aqui. Cada parágrafo será lido pelo narrador de áudio em segundo plano..."
                value={fullAnswerText}
                onChange={(e) => setFullAnswerText(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500 font-reading leading-relaxed"
              />
            </div>
          </div>

          {/* Versículos Bíblicos Dissecados */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2 text-amber-400 text-sm font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Passagens Bíblicas Dissecadas</span>
              </div>
              <button
                type="button"
                onClick={handleAddBiblicalVerse}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/50 text-xs font-semibold transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Adicionar Versículo</span>
              </button>
            </div>

            {biblicalVerses.map((verse, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-3 relative group"
              >
                {biblicalVerses.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveBiblicalVerse(idx)}
                    className="absolute top-3 right-3 text-stone-500 hover:text-red-400 transition-colors p-1"
                    title="Remover versículo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Livro Bíblico
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: João, Mateus, 1 Timóteo..."
                      value={verse.book}
                      onChange={(e) => handleUpdateBiblicalVerse(idx, 'book', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Capítulo e Versículo
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 14:28 ou 12:38-40"
                      value={verse.chapterVerse}
                      onChange={(e) => handleUpdateBiblicalVerse(idx, 'chapterVerse', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                    Texto Bíblico Traduzido
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: O Pai é maior do que eu..."
                    value={verse.bibleText}
                    onChange={(e) => handleUpdateBiblicalVerse(idx, 'bibleText', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-amber-500 italic"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                    Análise Crítica & Argumento de Dawah
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Como pode Jesus ser co-igual e consubstancial se ele declara expressamente que o Pai é maior do que ele?"
                    value={verse.deedatAnalysis}
                    onChange={(e) => handleUpdateBiblicalVerse(idx, 'deedatAnalysis', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-amber-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Versículos Alcorânicos Relacionados */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Versículos Alcorânicos de Referência</span>
              </div>
              <button
                type="button"
                onClick={handleAddQuranVerse}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-800/50 text-xs font-semibold transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Adicionar Surata</span>
              </button>
            </div>

            {quranicVerses.map((qVerse, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-3 relative"
              >
                {quranicVerses.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveQuranVerse(idx)}
                    className="absolute top-3 right-3 text-stone-500 hover:text-red-400 transition-colors p-1"
                    title="Remover surata"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Nome da Surata
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: An-Nisa (Mulheres), Al-Ikhlas..."
                      value={qVerse.surah}
                      onChange={(e) => handleUpdateQuranVerse(idx, 'surah', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Número do Ayah / Versículo
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 4:157 ou 112:1-4"
                      value={qVerse.ayah}
                      onChange={(e) => handleUpdateQuranVerse(idx, 'ayah', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-emerald-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                    Tradução do Significado
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: E não o mataram, nem o crucificaram, mas foi-lhes feito parecer assim..."
                    value={qVerse.translation}
                    onChange={(e) => handleUpdateQuranVerse(idx, 'translation', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-emerald-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Hadiths e Tradições Proféticas */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold">
                <BookOpen className="w-4 h-4" />
                <span>Hadiths Autênticos & Tradições Proféticas (Sunnah)</span>
              </div>
              <button
                type="button"
                onClick={handleAddHadith}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/50 text-xs font-semibold transition-colors"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span>Adicionar Hadith</span>
              </button>
            </div>

            {hadiths.map((hd, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-3 relative"
              >
                {hadiths.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveHadith(idx)}
                    className="absolute top-3 right-3 text-stone-500 hover:text-red-400 transition-colors p-1"
                    title="Remover hadith"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Coleção Canônica
                    </label>
                    <select
                      value={hd.collection}
                      onChange={(e) => handleUpdateHadith(idx, 'collection', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-cyan-500"
                    >
                      <option value="Sahih al-Bukhari">Sahih al-Bukhari</option>
                      <option value="Sahih Muslim">Sahih Muslim</option>
                      <option value="Sunan Abi Dawud">Sunan Abi Dawud</option>
                      <option value="Sunan al-Tirmidhi">Sunan al-Tirmidhi</option>
                      <option value="Sunan an-Nasa'i">Sunan an-Nasa'i</option>
                      <option value="Sunan Ibn Majah">Sunan Ibn Majah</option>
                      <option value="Muwatta Malik">Muwatta Malik</option>
                      <option value="Musnad Ahmad">Musnad Ahmad</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Número do Hadith
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: 5804 ou 1358"
                      value={hd.hadithNumber}
                      onChange={(e) => handleUpdateHadith(idx, 'hadithNumber', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                      Narrador (Sahabi)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Abu Hurairah, Ibn Abbas..."
                      value={hd.narrator || ''}
                      onChange={(e) => handleUpdateHadith(idx, 'narrator', e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-stone-400 uppercase tracking-wider block mb-1">
                    Texto do Hadith (Palavras do Profeta / Companheiros)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: O Mensageiro de Deus costumava cobrir sua nobre cabeça com barrete ou turbante..."
                    value={hd.text}
                    onChange={(e) => handleUpdateHadith(idx, 'text', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-cyan-500 italic"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                    Explicação e Aplicação no Diálogo Teológico
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ex: Demonstra a continuidade das práticas proféticas bíblicas e a conduta de modéstia..."
                    value={hd.explanation}
                    onChange={(e) => handleUpdateHadith(idx, 'explanation', e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-800 text-stone-100 text-xs focus:outline-hidden focus:border-cyan-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onViewQuestions}
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-sm transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Salvar Pergunta no Arquivo</span>
            </button>
          </div>
        </form>
      )}

      {/* FORM 2: DEBATE HISTÓRICO OU ENTREVISTA */}
      {entryType === 'debate' && (
        <form onSubmit={handleSubmitDebate} className="space-y-6">
          <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-800 text-amber-400 text-sm font-bold">
              <Tv className="w-4 h-4" />
              <span>Dados do Debate / Entrevista Histórica</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Título do Debate <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: A Bíblia é a Palavra de Deus? ou Jesus é Deus?"
                  value={dTitle}
                  onChange={(e) => setDTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Nome do Oponente / Entrevistador <span className="text-amber-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Dr. William Lane Craig, Jimmy Swaggart, 20 Cristãos..."
                  value={dOpponent}
                  onChange={(e) => setDOpponent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Título / Cargo do Oponente
                </label>
                <input
                  type="text"
                  placeholder="Ex: Teólogo Cristão, Filósofo Analítico, Pastor..."
                  value={dOpponentTitle}
                  onChange={(e) => setDOpponentTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Data / Ano
                </label>
                <input
                  type="text"
                  placeholder="Ex: Novembro de 1986, 2021, etc."
                  value={dDate}
                  onChange={(e) => setDDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Local / Auditório
                </label>
                <input
                  type="text"
                  placeholder="Ex: Royal Albert Hall, Londres / Baton Rouge, EUA"
                  value={dLocation}
                  onChange={(e) => setDLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Público Estimado / Audiência
                </label>
                <input
                  type="text"
                  placeholder="Ex: Mais de 5.000 pessoas no auditório e milhões na TV"
                  value={dAttendees}
                  onChange={(e) => setDAttendees(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Link do Vídeo no YouTube (Opcional)
                </label>
                <input
                  type="url"
                  placeholder="https://www.youtube.com/watch?v=..."
                  value={dYoutubeUrl}
                  onChange={(e) => setDYoutubeUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Tópicos Centrais (Separados por vírgula)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Divindade de Cristo, João 10:30, Preservação da Bíblia, Tawheed"
                  value={dCoreTopics}
                  onChange={(e) => setDCoreTopics(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Descrição e Contexto do Debate
                </label>
                <textarea
                  rows={3}
                  placeholder="Descreva o contexto do auditório, repercussão histórica e importância do confronto teológico..."
                  value={dDescription}
                  onChange={(e) => setDDescription(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500 leading-relaxed"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-amber-400">
                  Tese Central de Deedat / Apologeta de Dawah
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: Jesus nunca afirmou ser o Deus Todo-Poderoso em nenhuma passagem inequívoca da Bíblia..."
                  value={dDeedatThesis}
                  onChange={(e) => setDDeedatThesis(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              <div className="md:col-span-2 space-y-1.5">
                <label className="text-xs font-semibold text-stone-300">
                  Tese Central do Oponente
                </label>
                <textarea
                  rows={2}
                  placeholder="Ex: A Bíblia é a inerrante palavra de Deus e a salvação opera-se exclusivamente pelo sacrifício da cruz..."
                  value={dOpponentThesis}
                  onChange={(e) => setDOpponentThesis(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onViewQuestions}
              className="px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold text-sm transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl transition-all flex items-center gap-2"
            >
              <PlusCircle className="w-5 h-5" />
              <span>Cadastrar Debate no Arquivo</span>
            </button>
          </div>
        </form>
      )}

      {/* Info card on persistence */}
      <div className="p-4 rounded-xl bg-stone-900/60 border border-stone-800 text-xs text-stone-400 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-stone-300 block mb-0.5">Armazenamento Local & Offline Seguro</span>
          Todos os novos debates, perguntas e versículos cadastrados são gravados instantaneamente no armazenamento do seu navegador (LocalStorage) e ficam disponíveis em Modo Offline, podendo ser ouvidos pelo reprodutor de áudio e pesquisados pela barra de busca.
        </div>
      </div>
    </div>
  );
};
