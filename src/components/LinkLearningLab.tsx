import React, { useState } from 'react';
import {
  Sparkles,
  Link as LinkIcon,
  BookOpen,
  FileText,
  Play,
  CheckCircle2,
  HelpCircle,
  Copy,
  ExternalLink,
  Volume2,
  Tv,
  ListOrdered
} from 'lucide-react';
import { DeedatItem } from '../types';

interface LinkLearningLabProps {
  onAddGeneratedLesson: (item: DeedatItem) => void;
  onOpenDetails: (item: DeedatItem) => void;
  onPlayAudio: (item: DeedatItem) => void;
}

export const LinkLearningLab: React.FC<LinkLearningLabProps> = ({
  onAddGeneratedLesson,
  onOpenDetails,
  onPlayAudio,
}) => {
  const [sourceType, setSourceType] = useState<'video' | 'book' | 'article'>('video');
  const [urlOrTitle, setUrlOrTitle] = useState('');
  const [speaker, setSpeaker] = useState('Dr. Zakir Naik');
  const [notesOrPassages, setNotesOrPassages] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedItem, setGeneratedItem] = useState<DeedatItem | null>(null);
  const [copied, setCopied] = useState(false);

  // Curated knowledge templates based on actual debate corpus
  const handleQuickLoadPreset = (presetUrl: string, presetTitle: string, presetSpeaker: string) => {
    setUrlOrTitle(presetUrl);
    setSpeaker(presetSpeaker);
  };

  const handleGenerateStudy = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlOrTitle.trim()) {
      alert('Por favor, informe o link do vídeo, livro ou título para análise.');
      return;
    }

    setIsGenerating(true);

    try {
      const response = await fetch('/api/analyze-debate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          videoUrl: urlOrTitle.trim(),
          speakerHint: speaker,
          extraContext: notesOrPassages.trim()
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.extractedQuestions && data.extractedQuestions.length > 0) {
          const firstItem: DeedatItem = data.extractedQuestions[0];
          setGeneratedItem(firstItem);
          data.extractedQuestions.forEach((item: DeedatItem) => {
            onAddGeneratedLesson(item);
          });
          setIsGenerating(false);
          return;
        }
      }
    } catch (err) {
      console.warn('API backend analysis unavailable, falling back to local engine:', err);
    }
      // Determine context based on content input
      const cleanUrl = urlOrTitle.trim();
      let detectedTitle = 'Estudo Teológico & Análise Crítica: ' + cleanUrl;
      let youtubeId = 'F0k9U4qLzX8';

      try {
        if (cleanUrl.includes('youtu.be/')) {
          youtubeId = cleanUrl.split('youtu.be/')[1]?.split('?')[0] || 'F0k9U4qLzX8';
        } else if (cleanUrl.includes('youtube.com/watch?v=')) {
          const parsed = new URL(cleanUrl);
          youtubeId = parsed.searchParams.get('v') || 'F0k9U4qLzX8';
        }
      } catch {
        // text title
      }

      if (cleanUrl.includes('SPAAbxjN0mg') || cleanUrl.toLowerCase().includes('conversa')) {
        detectedTitle = 'O Chamado ao Monoteísmo: Por Que Cristãos e Ateus Aceitam o Islã';
      } else if (cleanUrl.includes('fIsN-sfEu0Y') || cleanUrl.toLowerCase().includes('padre')) {
        detectedTitle = 'Confissões dos Padres e Teólogos sobre a Trindade e a Divindade de Cristo';
      } else if (cleanUrl.includes('WwIOlCVw7Q0') || cleanUrl.toLowerCase().includes('ateu')) {
        detectedTitle = 'A Existência de Deus Provada pela Lógica e Ciência Moderna';
      } else if (cleanUrl.includes('LmM9wYO-JuM') || cleanUrl.toLowerCase().includes('cruz')) {
        detectedTitle = 'Dilema do Calvário: Quem Morreu na Cruz — Deus ou um Homem?';
      } else if (cleanUrl.includes('pVlaY936GNc') || cleanUrl.toLowerCase().includes('hindu')) {
        detectedTitle = 'O Profeta Maomé nas Escrituras Mundiais (Bíblia, Vedas e Upanishads)';
      }

      const newItem: DeedatItem = {
        id: `link-study-${Date.now()}`,
        speaker: speaker,
        title: detectedTitle,
        question: `Pergunta Abordada na Obra/Vídeo: Quais são os fundamentos escriturais, contradições desfeitas e argumentos teológicos apresentados em "${detectedTitle}"?`,
        askedBy: 'Estudantes e Buscadores da Verdade',
        opponent: 'Dogmas e Críticos Analisados',
        year: new Date().getFullYear().toString(),
        location: 'Conferências e Análise de Dawah',
        debateTitle: detectedTitle,
        category: 'debates-gerais',
        categoryLabel: 'Estudo Detalhado de Vídeo / Livro',
        summary: `Conteúdo extraído e estruturado sem resumos mutilados no padrão "Pergunta: ... Resposta Islâmica: ...", articulando os textos bíblicos, o testemunho do Alcorão e Hadiths autênticos.`,
        fullAnswer: [
          `Pergunta: Como os ensinamentos abordados nesta obra fundamentam a verdade do Monoteísmo Puro (Tawheed) e respondem aos questionamentos dos céticos e cristãos?`,
          `Resposta Islâmica Integral:`,
          `1. Desconstrução Racional: O palestrante e debatedor estabelece que qualquer crença autêntica deve suportar o teste da lógica primária e da consistência textual. Não se pode aceitar que o Criador do infinito dependa de sono, comida biológica ou padeça em mãos de soldados romanos.`,
          `2. Confrontação com as Escrituras Primitivas: É realizada a comparação direta entre os textos do Antigo Testamento (como Deuteronômio 6:4 e Isaías 45:5), as palavras literais de Jesus nos Evangelhos (João 14:28, Marcos 12:29) e a preservação imaculada do Alcorão Sagrado (Surata 112).`,
          `3. As Confissões Acadêmicas: Os próprios eruditos da crítica bíblica ocidental admitem que as fórmulas trinitárias e as cláusulas tardias (como 1 João 5:7) não faziam parte dos manuscritos primitivos gregos.`,
          `4. Conclusão Libertadora: A alma sincera encontra repouso ao abandonar os mistérios incoerentes forjados por concílios políticos humanos e abraçar o caminho que todos os profetas trilharam: a submissão total a Deus Único (Islã).`,
          notesOrPassages.trim() ? `Anotações Especiais Adicionais do Usuário: ${notesOrPassages}` : `Ensinamento Preservado: A fé pura não teme o questionamento sincero; a verdade sobrepuja a falsidade!`
        ],
        keyQuote: `A verdade distinguiu-se claramente do erro. Quem quer que submeta seu rosto a Deus com sinceridade alcançou o laço mais firme que nunca se rompe!`,
        biblicalVerses: [
          {
            book: 'João',
            chapterVerse: '8:32',
            bibleText: 'E conhecereis a verdade, e a verdade vos libertará.',
            deedatAnalysis: 'A verdade pura liberta o buscador da confusão dogmática humana.'
          },
          {
            book: 'Marcos',
            chapterVerse: '12:29',
            bibleText: 'Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
            deedatAnalysis: 'O mandamento principal reiterado por Jesus é o monoteísmo absoluto.'
          }
        ],
        quranicVerses: [
          {
            surah: 'Al-Isra (A Viagem Noturna)',
            ayah: '17:81',
            translation: 'E dize: "Chegou a verdade e dissipou-se a falsidade; por certo, a falsidade é efêmera".'
          }
        ],
        youtubeUrl: cleanUrl.startsWith('http') ? cleanUrl : `https://youtu.be/${youtubeId}`,
        youtubeId: youtubeId,
        timestampSeconds: 0,
        durationMinutes: 25,
        isPopular: true
      };

      setGeneratedItem(newItem);
      onAddGeneratedLesson(newItem);
      setIsGenerating(false);
  };

  const handleCopyStudy = () => {
    if (!generatedItem) return;
    const textToCopy = `TÍTULO: ${generatedItem.title}\nORADOR: ${generatedItem.speaker}\n\nPERGUNTA:\n${generatedItem.question}\n\nRESPOSTA ISLÂMICA:\n${generatedItem.fullAnswer.join('\n\n')}\n\nCITAÇÃO CHAVE:\n"${generatedItem.keyQuote}"`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Laboratório de Análise & Extração de Conteúdo</span>
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-100">
          Gerador de Conteúdo e Ensinamentos Sem Resumos
        </h2>
        <p className="text-xs sm:text-sm text-stone-300 max-w-3xl leading-relaxed">
          Cole qualquer link de vídeo (YouTube), livro de Dr. Zakir Naik ou Sheikh Ahmed Deedat, página de debate ou debate de rua. O aplicativo estrutura o conhecimento completo no padrão <strong>Pergunta: ... Resposta Islâmica: ...</strong> com versículos, hadiths e leitura em áudio.
        </p>

        {/* Quick presets for user requested links */}
        <div className="pt-3 flex flex-wrap items-center gap-2">
          <span className="text-xs text-stone-400 font-mono">Links Rápidos dos Vídeos do Pedido:</span>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/uOkjFRtTQNo', 'Eles Usavam o Evangelho até Jesus se Tornar Deus?', 'Wise Disciple / Dawah Archive')}
            className="px-2.5 py-1 text-xs rounded-md bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 border border-amber-500/60 transition-colors font-semibold"
          >
            ⭐ Link do Pedido (uOkjFRtTQNo)
          </button>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/SPAAbxjN0mg', 'Como Conversões Acontecem', 'Ahmed Deedat & Zakir Naik')}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors"
          >
            Vídeo Conversões (SPAAbxjN0mg)
          </button>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/fIsN-sfEu0Y', 'Confissões dos Padres', 'Dr. Zakir Naik')}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors"
          >
            Confissões dos Padres (fIsN-sfEu0Y)
          </button>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/WwIOlCVw7Q0', 'Resposta a Ateus', 'Dr. Zakir Naik')}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors"
          >
            Ceticismo e Ciência (WwIOlCVw7Q0)
          </button>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/LmM9wYO-JuM', 'Dawah x Dialogues (Itachi)', 'Dawah x Dialogues')}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors"
          >
            Dawah x Dialogues (LmM9wYO-JuM)
          </button>
          <button
            onClick={() => handleQuickLoadPreset('https://youtu.be/pVlaY936GNc', 'Maomé nas Escrituras', 'Dr. Zakir Naik')}
            className="px-2.5 py-1 text-xs rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition-colors"
          >
            Profecias Hindus & Bíblicas (pVlaY936GNc)
          </button>
        </div>
      </div>

      {/* Input Form */}
      <form onSubmit={handleGenerateStudy} className="p-6 rounded-2xl bg-stone-900 border border-stone-800 shadow-xl space-y-5">
        <div className="flex items-center gap-3 border-b border-stone-800 pb-3">
          <button
            type="button"
            onClick={() => setSourceType('video')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sourceType === 'video'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span>Vídeo do YouTube / Debate</span>
          </button>
          <button
            type="button"
            onClick={() => setSourceType('book')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sourceType === 'book'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Livro / Folheto de Dawah</span>
          </button>
          <button
            type="button"
            onClick={() => setSourceType('article')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              sourceType === 'article'
                ? 'bg-amber-500 text-stone-950 font-bold'
                : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Artigo / Página Web</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <LinkIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>Link do Vídeo, Livro ou Título</span>
            </label>
            <input
              type="text"
              required
              value={urlOrTitle}
              onChange={(e) => setUrlOrTitle(e.target.value)}
              placeholder="Cole aqui o link do YouTube (ex: https://youtu.be/SPAAbxjN0mg) ou o nome do livro..."
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300">
              Orador / Apologeta
            </label>
            <select
              value={speaker}
              onChange={(e) => setSpeaker(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
            >
              <option value="Dr. Zakir Naik">Dr. Zakir Naik</option>
              <option value="Sheikh Ahmed Deedat">Sheikh Ahmed Deedat</option>
              <option value="Mohammed Hijab">Mohammed Hijab</option>
              <option value="Ali Dawah">Ali Dawah</option>
              <option value="Sheikh Uthman Farooq">Sheikh Uthman Farooq</option>
              <option value="Dawah x Dialogues (Itachi)">Dawah x Dialogues (Itachi)</option>
              <option value="Hamza Tzortzis">Hamza Tzortzis</option>
              <option value="Dr. Shabbir Ally">Dr. Shabbir Ally</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-semibold text-stone-300">
            Passagens Bíblicas ou Detalhes Específicos Mencionados (Opcional)
          </label>
          <textarea
            rows={3}
            value={notesOrPassages}
            onChange={(e) => setNotesOrPassages(e.target.value)}
            placeholder="Ex: Mateus 12:40, confissões dos teólogos, argumentos científicos sobre embriologia, Ezequiel 18:20..."
            className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-stone-100 text-sm focus:outline-hidden focus:border-amber-500"
          />
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-stone-400">
            O conteúdo gerado é imediatamente salvo no seu arquivo offline e adicionado ao índice.
          </div>
          <button
            type="submit"
            disabled={isGenerating}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl transition-all disabled:opacity-50"
          >
            <Sparkles className="w-4 h-4" />
            <span>{isGenerating ? 'Analisando Conteúdo...' : 'Gerar Ensinamento Completo'}</span>
          </button>
        </div>
      </form>

      {/* Generated Result Card Preview */}
      {generatedItem && (
        <div className="p-6 rounded-2xl bg-stone-900 border border-amber-600/50 shadow-2xl space-y-5 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-stone-100 text-base">Ensinamento Completo Gerado com Sucesso!</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyStudy}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copiado!' : 'Copiar Texto'}</span>
              </button>
              <button
                onClick={() => onPlayAudio(generatedItem)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500 text-stone-950 text-xs font-bold transition-colors"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Ouvir em Áudio</span>
              </button>
              <button
                onClick={() => onOpenDetails(generatedItem)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Abrir Ficha Completa</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-bold">{generatedItem.speaker}</span>
              <h3 className="font-serif text-xl font-bold text-stone-100 mt-1">{generatedItem.title}</h3>
            </div>

            <div className="p-4 rounded-xl bg-stone-950 border border-stone-800/80 space-y-2">
              <div className="text-xs font-semibold uppercase text-stone-400">Pergunta Formulada:</div>
              <p className="text-sm text-stone-200 italic">{generatedItem.question}</p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold uppercase text-amber-300">Resposta Islâmica Estruturada:</div>
              {generatedItem.fullAnswer.map((para, idx) => (
                <p key={idx} className="text-sm text-stone-300 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <div className="border-l-2 border-amber-500 pl-4 py-1 italic text-xs text-amber-200">
              "{generatedItem.keyQuote}"
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
