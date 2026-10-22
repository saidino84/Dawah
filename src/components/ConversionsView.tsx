import React, { useState } from 'react';
import {
  Compass,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  BookOpen,
  Volume2,
  ExternalLink,
  Users,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { DeedatItem } from '../types';

interface ConversionsViewProps {
  onOpenDetails: (item: DeedatItem) => void;
  onPlayAudio: (item: DeedatItem) => void;
  allItems: DeedatItem[];
}

export const ConversionsView: React.FC<ConversionsViewProps> = ({
  onOpenDetails,
  onPlayAudio,
  allItems,
}) => {
  const [selectedTargetAudience, setSelectedTargetAudience] = useState<'all' | 'christians' | 'atheists' | 'seekers'>('all');

  const corePillars = [
    {
      title: 'Para Ateus & Céticos: A Causa Primeira e o Ajuste Fino',
      audience: 'atheists',
      summary: 'Como a lógica pura, o princípio da não-contradição e a ciência do século XXI refutam que o cosmos tenha surgido do nada absoluto sem Criador Consciente.',
      keyVerses: ['Surata 52:35-36', 'Surata 51:47', 'Surata 21:30'],
      question: 'O universo surgiu por acaso ou exige um Criador Onipotente?',
      answerSummary: 'O nada não tem potencialidade nem gravidade. As leis da física e as constantes universais exigem uma Causa Primeira Não-Causada, Necessária e Onisciente (Al-Khaliq).'
    },
    {
      title: 'Para Cristãos: O Retorno aos Mandamentos de Jesus de Nazaré',
      audience: 'christians',
      summary: 'Jesus nunca afirmou ser Deus; ele orou prostrado, ensinou que o Pai é o único Deus verdadeiro e foi um profeta e mensageiro honrado.',
      keyVerses: ['Marcos 12:29', 'João 17:3', 'João 14:28', 'Mateus 26:39'],
      question: 'Ao abraçar o Islã, eu perco a minha fé em Jesus Cristo?',
      answerSummary: 'Não! Nenhum muçulmano é muçulmano se não amar e honrar Jesus (Isa Al-Masih) como um dos maiores profetas de Deus. Você deixa os acréscimos pagãos romanos e passa a seguir Jesus de verdade.'
    },
    {
      title: 'Para Buscadores Sinceros: A Paz Interior do Monoteísmo Puro (Tawheed)',
      audience: 'seekers',
      summary: 'A libertação das superstições, intermediários sacerdotais e imagens esculpidas. Uma conexão direta, íntima e diária com o Criador dos Mundos.',
      keyVerses: ['Surata 112 (Al-Ikhlas)', 'Surata 2:256', 'Surata 39:53'],
      question: 'O que o ser humano precisa fazer para obter a salvação eterna?',
      answerSummary: 'Reconhecer que só há Um Deus Único e Verdadeiro, adorá-Lo sem sócios, fazer o bem aos semelhantes e seguir os passos de Seus profetas.'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Presentation Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Guia Para a Verdade & Ensinamentos Universais</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-stone-100">
          Ensinamentos Universais: Para Ateus, Cristãos & Buscadores
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
          Reunimos aqui os argumentos essenciais que convenceram milhares de intelectuais, padres, pastores, acadêmicos ateus e fiéis comuns a reconhecerem a verdade do Islã e abandonarem o politeísmo e o ceticismo.
        </p>

        {/* Filter by audience */}
        <div className="pt-2 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setSelectedTargetAudience('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTargetAudience === 'all'
                ? 'bg-emerald-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            Todos os Públicos
          </button>
          <button
            onClick={() => setSelectedTargetAudience('christians')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTargetAudience === 'christians'
                ? 'bg-emerald-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            Para Cristãos
          </button>
          <button
            onClick={() => setSelectedTargetAudience('atheists')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTargetAudience === 'atheists'
                ? 'bg-emerald-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            Para Ateus & Céticos
          </button>
          <button
            onClick={() => setSelectedTargetAudience('seekers')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedTargetAudience === 'seekers'
                ? 'bg-emerald-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            Para Buscadores da Verdade
          </button>
        </div>
      </div>

      {/* Core Arguments Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {corePillars
          .filter((p) => selectedTargetAudience === 'all' || p.audience === selectedTargetAudience)
          .map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-stone-900 border border-stone-800 hover:border-emerald-600/50 shadow-xl flex flex-col justify-between transition-all"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded-sm border border-emerald-800/40">
                  {pillar.audience === 'christians' ? 'Cristianismo' : pillar.audience === 'atheists' ? 'Ateísmo & Razão' : 'Monoteísmo Universal'}
                </span>
                <h3 className="font-serif text-lg font-bold text-stone-100 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {pillar.summary}
                </p>

                <div className="p-3 rounded-xl bg-stone-950 border border-stone-800/80 space-y-1.5">
                  <div className="text-[11px] font-semibold text-amber-300">Pergunta Fundamental:</div>
                  <div className="text-xs text-stone-200 italic">{pillar.question}</div>
                  <div className="text-[11px] font-semibold text-emerald-400 pt-1">Resposta Islâmica:</div>
                  <div className="text-xs text-stone-300 leading-relaxed">{pillar.answerSummary}</div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {pillar.keyVerses.map((v, i) => (
                    <span key={i} className="text-[10px] font-mono text-stone-400 bg-stone-800/80 px-2 py-0.5 rounded-xs">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Shahada Declaration of Faith Section */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-stone-900 border border-emerald-800/50 shadow-2xl space-y-4 text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
          O Testemunho da Verdade (Shahada)
        </span>
        <h3 className="font-serif text-xl sm:text-2xl font-bold text-emerald-100">
          Como Dar o Passo da Conversão ao Islã
        </h3>
        <p className="text-xs sm:text-sm text-stone-300 max-w-2xl mx-auto leading-relaxed">
          Para se tornar muçulmano, basta proclamar com sincera convicção na mente e no coração perante Deus:
        </p>

        <div className="py-4 px-6 rounded-xl bg-stone-950/80 border border-emerald-700/60 max-w-xl mx-auto space-y-2">
          <div className="text-base sm:text-lg font-serif text-emerald-300 font-bold tracking-wide">
            أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ ٱللَّٰهِ
          </div>
          <div className="text-xs sm:text-sm text-stone-200 italic font-mono">
            "Ash-hadu an la ilaha illa Allah, wa ash-hadu anna Muhammadan rasulu Allah"
          </div>
          <div className="text-xs text-stone-400">
            "Testemunho que não há divindade além do Único Deus, e testemunho que Maomé é Seu servo e Mensageiro."
          </div>
        </div>

        <p className="text-xs text-stone-400 max-w-xl mx-auto">
          Ao pronunciar este testemunho com sinceridade, todos os seus pecados do passado são perdoados por Deus e você renasce espiritualmente limpo!
        </p>
      </div>
    </div>
  );
};
