import React, { useState } from 'react';
import {
  Sparkles,
  Link as LinkIcon,
  Tv,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Volume2,
  Users,
  FileText,
  BookOpen,
  ArrowRight,
  HelpCircle,
  ListOrdered
} from 'lucide-react';
import { DeedatItem, HistoricalDebate } from '../types';

interface DebateLinkAnalyzerProps {
  onAddDebate: (debate: HistoricalDebate) => void;
  onAddQuestion: (item: DeedatItem) => void;
  onOpenDetails: (item: DeedatItem) => void;
  onPlayAudio: (item: DeedatItem) => void;
  onNavigateToQuestions?: () => void;
}

export const DebateLinkAnalyzer: React.FC<DebateLinkAnalyzerProps> = ({
  onAddDebate,
  onAddQuestion,
  onOpenDetails,
  onPlayAudio,
  onNavigateToQuestions,
}) => {
  const [videoUrl, setVideoUrl] = useState('');
  const [speakerHint, setSpeakerHint] = useState('Dr. Zakir Naik');
  const [opponentHint, setOpponentHint] = useState('');
  const [extraContext, setExtraContext] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [analyzedDebate, setAnalyzedDebate] = useState<HistoricalDebate | null>(null);
  const [extractedQuestions, setExtractedQuestions] = useState<DeedatItem[]>([]);
  const [analysisSource, setAnalysisSource] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleQuickPreset = (url: string, speaker: string, opponent: string, context: string) => {
    setVideoUrl(url);
    setSpeakerHint(speaker);
    setOpponentHint(opponent);
    setExtraContext(context);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl.trim()) {
      alert('Por favor, cole o link do vídeo de debate ou informe o tema.');
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);
    setSavedSuccess(false);

    try {
      const response = await fetch('/api/analyze-debate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoUrl: videoUrl.trim()
        })
      });

      if (!response.ok) {
        throw new Error(`Erro no servidor (${response.status})`);
      }

      const data = await response.json();

      if (data.debate && data.extractedQuestions) {
        setAnalyzedDebate(data.debate);
        setExtractedQuestions(data.extractedQuestions);
        setAnalysisSource(data.source || 'gemini-ai');

        // Automatically register in App data & LocalStorage
        onAddDebate(data.debate);
        data.extractedQuestions.forEach((q: DeedatItem) => {
          onAddQuestion(q);
        });
        setSavedSuccess(true);
      } else {
        throw new Error('Formato de resposta inesperado.');
      }
    } catch (err: any) {
      console.error('Falha ao analisar debate:', err);
      setErrorMessage(
        'Não foi possível conectar ao analisador online. Verifique sua conexão ou tente novamente.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyQuestionText = (item: DeedatItem) => {
    const text = `TÍTULO: ${item.title}\nORADOR: ${item.speaker}\nOPONENTE: ${item.opponent || item.askedBy}\n\nPERGUNTA DO DEBATE:\n${item.question}\n\nRESPOSTA ISLÂMICA:\n${item.fullAnswer.join('\n\n')}\n\nCITAÇÃO CHAVE:\n"${item.keyQuote}"`;
    navigator.clipboard.writeText(text);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Informative Header */}
      <div className="p-5 sm:p-6 rounded-2xl bg-amber-950/30 border border-amber-800/50 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Inteligência Artificial de Análise de Debates Teológicos</span>
        </div>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
          Analisador Automático de Vídeos de Debates (Islã vs Cristãos)
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
          Cole o link de qualquer vídeo de debate entre muçulmanos e cristãos apologistas (do YouTube, palestras ou transmissões).
          O sistema <strong>identifica as teses cruciais debatidas</strong>, desmembra os momentos de tensão teológica e organiza tudo em <strong>Perguntas e Respostas completas</strong> com versículos bíblicos, alcorânicos e refutações detalhadas sem resumos mutilados.
        </p>

        {/* Quick Link Buttons from user requested videos */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-mono text-stone-400">Debates Populares para Testar:</span>
          <button
            type="button"
            onClick={() => handleQuickPreset(
              'https://youtu.be/uOkjFRtTQNo',
              'Teologia Islâmica & Dawah de Rua',
              'Nate Sala (Wise Disciple) & Sam Shamoun',
              'They Used the Gospel Until Jesus Became God: Discussão sobre Marcos 2, perdão dos pecados e quando Jesus passou a ser considerado Deus'
            )}
            className="px-2.5 py-1 text-xs rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/60 transition-colors font-semibold"
          >
            ⭐ Link do Pedido (uOkjFRtTQNo - Nate Sala)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(
              'https://youtu.be/LmM9wYO-JuM',
              'Dawah x Dialogues (Itachi)',
              'Apologistas Cristãos',
              'Debate sobre quem morreu na cruz, o dilema da morte de Deus vs homem, e 1 Timóteo 6:16'
            )}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 transition-colors"
          >
            Dawah x Dialogues (LmM9wYO-JuM)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(
              'https://youtu.be/fIsN-sfEu0Y',
              'Dr. Zakir Naik',
              'Padres e Teólogos Cristãos',
              'Confissões de teólogos e padres de que Jesus nunca disse "Eu sou Deus", e o Concílio de Niceia'
            )}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 transition-colors"
          >
            Confissões dos Padres (fIsN-sfEu0Y)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(
              'https://youtu.be/F0k9U4qLzX8',
              'Sheikh Ahmed Deedat',
              'Dr. Anis Shorrosh',
              'Jesus é Deus? Debate no Royal Albert Hall sobre a divindade e a cruz'
            )}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 transition-colors"
          >
            Deedat vs Shorrosh (Royal Albert Hall)
          </button>
          <button
            type="button"
            onClick={() => handleQuickPreset(
              'https://youtu.be/SPAAbxjN0mg',
              'Ahmed Deedat & Zakir Naik',
              'Buscadores e Pastores',
              'Ensinamentos que levaram à conversão ao Islã e abandono do politeísmo trinitário'
            )}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-900 hover:bg-stone-800 text-amber-300 border border-stone-700 transition-colors"
          >
            Conversões ao Islã (SPAAbxjN0mg)
          </button>
        </div>
      </div>

      {/* Single Input Form: Just paste link and extract everything automatically */}
      <form onSubmit={handleAnalyze} className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-2xl space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-stone-100 flex items-center justify-between">
            <span className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-amber-400" />
              <span>Cole o Link do Vídeo do YouTube</span>
            </span>
            <span className="text-[11px] text-amber-400 font-mono font-normal">
              Detecção 100% Automática de Oradores e Oponentes
            </span>
          </label>
          <div className="relative">
            <input
              type="text"
              required
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Ex: https://youtu.be/uOkjFRtTQNo ou https://www.youtube.com/watch?v=LmM9wYO-JuM"
              className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-stone-950 border border-stone-700/80 hover:border-stone-600 text-stone-100 text-sm sm:text-base focus:outline-hidden focus:border-amber-500 font-mono transition-colors shadow-inner"
            />
            {videoUrl && (
              <button
                type="button"
                onClick={() => setVideoUrl('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-200 text-xs px-2 py-1"
                title="Limpar campo"
              >
                Limpar
              </button>
            )}
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Basta colar o link acima. O sistema analisa o vídeo, identifica automaticamente o apologeta muçulmano, o oponente cristão e extrai as <strong>defesas do Islã</strong> e as <strong>críticas respondidas dos apologistas</strong> em formato completo de perguntas e respostas.
          </p>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-2xl transition-all flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
        >
          <Sparkles className="w-5 h-5 text-stone-950 animate-bounce" />
          <span>{isLoading ? 'Analisando Vídeo & Extraindo Defesas do Islã...' : 'Extrair Dados do Debate'}</span>
        </button>
      </form>

      {/* Error Alert */}
      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Analysis Success Banner */}
      {savedSuccess && analyzedDebate && (
        <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-200 text-xs sm:text-sm flex items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Debate Analisado e Gravado no Arquivo!</strong> O debate "<em>{analyzedDebate.title}</em>" e suas <strong>{extractedQuestions.length} Perguntas e Respostas Cruciais</strong> foram incorporados ao catálogo.
            </span>
          </div>
          {onNavigateToQuestions && (
            <button
              onClick={onNavigateToQuestions}
              className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-stone-950 font-bold text-xs shrink-0 transition-colors"
            >
              Ver no Catálogo
            </button>
          )}
        </div>
      )}

      {/* RESULT CARDS: Identified Debate + Extracted Crucial Questions */}
      {analyzedDebate && (
        <div className="space-y-6 animate-fadeIn">
          {/* Debate Card */}
          <div className="p-6 rounded-2xl bg-stone-900 border border-amber-600/50 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Tv className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  Debate Teológico Identificado
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-950 text-amber-300 border border-amber-800/60 font-mono">
                  {analysisSource === 'gemini-ai' ? 'IA Gemini' : 'Motor Teológico'}
                </span>
              </div>
              <div className="text-xs text-stone-400 font-mono">
                {analyzedDebate.date} · {analyzedDebate.location}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-stone-100">
                {analyzedDebate.title}
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {analyzedDebate.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-stone-950 border border-emerald-900/40 space-y-1.5">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                  Tese Central de Dawah ({speakerHint}):
                </div>
                <p className="text-xs text-stone-200 leading-relaxed">
                  {analyzedDebate.deedatCentralThesis}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5">
                <div className="text-xs font-bold text-stone-400 uppercase tracking-wide">
                  Tese Central do Oponente ({analyzedDebate.opponent}):
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {analyzedDebate.opponentCentralThesis}
                </p>
              </div>
            </div>

            {/* Core Topics Badges */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-[11px] text-stone-500 font-mono">Tópicos:</span>
              {analyzedDebate.coreTopics.map((topic, i) => (
                <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-md bg-stone-800 text-stone-300 border border-stone-700/60 font-medium">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Extracted Questions and Structured Answers */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <h4 className="font-serif text-lg font-bold text-stone-100">
                  Ideias Cruciais Desmembradas em Perguntas & Respostas ({extractedQuestions.length})
                </h4>
              </div>
              <span className="text-xs text-stone-400 font-mono">
                Sem resumos mutilados
              </span>
            </div>

            <div className="space-y-4">
              {extractedQuestions.map((qItem, idx) => (
                <div
                  key={qItem.id || idx}
                  className="p-6 rounded-2xl bg-stone-900 border border-stone-800 hover:border-stone-700 shadow-xl space-y-4 transition-all"
                >
                  <div className="flex items-center justify-between border-b border-stone-800 pb-3 flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-bold text-xs flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="font-bold text-stone-100 text-sm sm:text-base">
                        {qItem.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCopyQuestionText(qItem)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs transition-colors"
                        title="Copiar texto completo"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copiedId === qItem.id ? 'Copiado!' : 'Copiar'}</span>
                      </button>
                      <button
                        onClick={() => onPlayAudio(qItem)}
                        className="flex items-center gap-1 px-3 py-1 rounded-md bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-colors"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Ouvir</span>
                      </button>
                      <button
                        onClick={() => onOpenDetails(qItem)}
                        className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Ficha Completa</span>
                      </button>
                    </div>
                  </div>

                  {/* Question Box */}
                  <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                      Pergunta Crucial Identificada no Debate:
                    </div>
                    <p className="text-xs sm:text-sm text-stone-200 font-medium leading-relaxed italic">
                      "{qItem.question}"
                    </p>
                    <div className="text-[11px] text-stone-500 pt-1">
                      Formulada por: <strong>{qItem.askedBy || analyzedDebate.opponent}</strong>
                    </div>
                  </div>

                  {/* Answer Breakdown */}
                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                      Resposta Islâmica e Argumentação de {qItem.speaker || speakerHint}:
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm text-stone-300 leading-relaxed font-reading">
                      {qItem.fullAnswer.map((para, pIdx) => (
                        <p key={pIdx}>
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Key Quote */}
                  {qItem.keyQuote && (
                    <div className="border-l-2 border-amber-500 pl-3 py-1 italic text-xs text-amber-200/90">
                      "{qItem.keyQuote}"
                    </div>
                  )}

                  {/* Verses Preview */}
                  {qItem.biblicalVerses && qItem.biblicalVerses.length > 0 && (
                    <div className="pt-2 border-t border-stone-800/60 space-y-2">
                      <div className="text-[11px] font-mono text-stone-400 flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                        <span>Versículos Bíblicos Citados e Analisados:</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {qItem.biblicalVerses.map((bv, bIdx) => (
                          <div key={bIdx} className="p-2.5 rounded-lg bg-stone-950 border border-stone-800 text-xs space-y-1">
                            <span className="font-bold text-amber-300">{bv.book} {bv.chapterVerse}</span>
                            <p className="text-stone-300 italic line-clamp-2">"{bv.bibleText}"</p>
                            <p className="text-stone-400 text-[11px]">{bv.deedatAnalysis}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
