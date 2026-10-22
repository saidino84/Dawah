import { useState, useEffect, useRef, useCallback } from 'react';
import { DeedatItem } from '../types';

export function useAudioPlayer(items: DeedatItem[]) {
  const [activeItem, setActiveItem] = useState<DeedatItem | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState(1.0);
  const [progress, setProgress] = useState(0); // 0 to 100
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const [totalParagraphs, setTotalParagraphs] = useState(0);
  const [speechSupported, setSpeechSupported] = useState(true);

  // Background audio keeper (silent continuous audio context to prevent mobile browser suspension)
  const audioContextRef = useRef<AudioContext | null>(null);
  const silentNodeRef = useRef<AudioNode | null>(null);
  const speechUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const progressTimerRef = useRef<number | null>(null);
  const paragraphIndexRef = useRef(0);

  // Check speech synthesis support
  useEffect(() => {
    if (typeof window !== 'undefined' && !('speechSynthesis' in window)) {
      setSpeechSupported(false);
    }
  }, []);

  // Set up MediaSession API for OS lockscreen & background controls
  useEffect(() => {
    if (typeof window !== 'undefined' && 'mediaSession' in navigator && activeItem) {
      navigator.mediaSession.metadata = new MediaMetadata({
        title: activeItem.title,
        artist: 'Sheikh Ahmed Deedat',
        album: activeItem.debateTitle || 'Deedat Audio Archive',
        artwork: [
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      });

      navigator.mediaSession.setActionHandler('play', () => {
        resume();
      });
      navigator.mediaSession.setActionHandler('pause', () => {
        pause();
      });
      navigator.mediaSession.setActionHandler('seekbackward', () => {
        rewindParagraph();
      });
      navigator.mediaSession.setActionHandler('seekforward', () => {
        forwardParagraph();
      });
      navigator.mediaSession.setActionHandler('nexttrack', () => {
        playNext();
      });
      navigator.mediaSession.setActionHandler('previoustrack', () => {
        playPrevious();
      });
    }
  }, [activeItem]);

  // Unlock background audio capability on mobile
  const startBackgroundAudioKeeper = useCallback(() => {
    try {
      if (!audioContextRef.current) {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (AudioCtx) {
          audioContextRef.current = new AudioCtx();
        }
      }
      if (audioContextRef.current && audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      // Create oscillator with 0 gain (silent) so the mobile browser treats the tab as playing audio in background
      if (audioContextRef.current && !silentNodeRef.current) {
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();
        gain.gain.setValueAtTime(0.0001, audioContextRef.current.currentTime);
        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);
        osc.start();
        silentNodeRef.current = osc;
      }
    } catch {
      // Audio context may require explicit user interaction
    }
  }, []);

  const prepareScript = (item: DeedatItem): string[] => {
    const parts: string[] = [];
    parts.push(`Pergunta: ${item.question}`);
    parts.push(`Tema: ${item.categoryLabel}. Debatedor: ${item.askedBy}.`);
    parts.push(`Resumo da resposta de Sheikh Ahmed Deedat: ${item.summary}`);
    parts.push(`Frase de destaque: "${item.keyQuote}"`);
    item.fullAnswer.forEach((p) => {
      if (p.trim()) parts.push(p);
    });
    if (item.biblicalVerses && item.biblicalVerses.length > 0) {
      parts.push(`Versículos bíblicos citados.`);
      item.biblicalVerses.forEach((bv) => {
        parts.push(`Livro de ${bv.book}, capítulo ${bv.chapterVerse}. Texto bíblico: ${bv.bibleText}. Análise de Deedat: ${bv.deedatAnalysis}`);
      });
    }
    if (item.quranicVerses && item.quranicVerses.length > 0) {
      parts.push(`Citação Alcorânica.`);
      item.quranicVerses.forEach((qv) => {
        parts.push(`Surata ${qv.surah}, versículo ${qv.ayah}. Tradução: ${qv.translation}`);
      });
    }
    return parts;
  };

  const speakParagraph = useCallback((paragraphs: string[], index: number, item: DeedatItem) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    if (index >= paragraphs.length) {
      // Finished all paragraphs
      setProgress(100);
      setIsPlaying(false);
      setIsPaused(false);
      // Automatically advance to next item after 2 seconds
      const currentIndex = items.findIndex((it) => it.id === item.id);
      if (currentIndex !== -1 && currentIndex < items.length - 1) {
        setTimeout(() => {
          playItem(items[currentIndex + 1]);
        }, 2000);
      }
      return;
    }

    paragraphIndexRef.current = index;
    setCurrentParagraph(index);
    setProgress(Math.round((index / paragraphs.length) * 100));

    const textToSpeak = paragraphs[index];
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = rate;
    utterance.pitch = 1.0;

    // Pick Portuguese voice if available
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find((v) => v.lang.startsWith('pt')) || voices.find((v) => v.lang.startsWith('en'));
    if (ptVoice) {
      utterance.voice = ptVoice;
    }

    utterance.onend = () => {
      if (paragraphIndexRef.current === index) {
        speakParagraph(paragraphs, index + 1, item);
      }
    };

    utterance.onerror = (e) => {
      if (e.error !== 'canceled' && e.error !== 'interrupted') {
        console.warn('SpeechSynthesis error:', e);
        speakParagraph(paragraphs, index + 1, item);
      }
    };

    speechUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [rate, items]);

  const playItem = useCallback((item: DeedatItem) => {
    if (typeof window === 'undefined') return;

    startBackgroundAudioKeeper();
    window.speechSynthesis.cancel();

    const script = prepareScript(item);
    setActiveItem(item);
    setTotalParagraphs(script.length);
    setCurrentParagraph(0);
    setProgress(0);
    setIsPlaying(true);
    setIsPaused(false);

    speakParagraph(script, 0, item);
  }, [startBackgroundAudioKeeper, speakParagraph]);

  const pause = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      setIsPaused(true);
      setIsPlaying(false);
    }
  };

  const resume = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
        setIsPlaying(true);
      } else if (activeItem) {
        const script = prepareScript(activeItem);
        speakParagraph(script, currentParagraph, activeItem);
        setIsPlaying(true);
        setIsPaused(false);
      }
    }
  };

  const stop = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
      setIsPaused(false);
      setProgress(0);
      setCurrentParagraph(0);
    }
  };

  const rewindParagraph = () => {
    if (!activeItem) return;
    const script = prepareScript(activeItem);
    const newIdx = Math.max(0, currentParagraph - 1);
    speakParagraph(script, newIdx, activeItem);
  };

  const forwardParagraph = () => {
    if (!activeItem) return;
    const script = prepareScript(activeItem);
    const newIdx = Math.min(script.length - 1, currentParagraph + 1);
    speakParagraph(script, newIdx, activeItem);
  };

  const playNext = () => {
    if (!activeItem) return;
    const currentIndex = items.findIndex((it) => it.id === activeItem.id);
    if (currentIndex !== -1 && currentIndex < items.length - 1) {
      playItem(items[currentIndex + 1]);
    } else if (items.length > 0) {
      playItem(items[0]);
    }
  };

  const playPrevious = () => {
    if (!activeItem) return;
    const currentIndex = items.findIndex((it) => it.id === activeItem.id);
    if (currentIndex > 0) {
      playItem(items[currentIndex - 1]);
    }
  };

  const changeRate = (newRate: number) => {
    setRate(newRate);
    if (isPlaying && activeItem) {
      const script = prepareScript(activeItem);
      speakParagraph(script, currentParagraph, activeItem);
    }
  };

  return {
    activeItem,
    isPlaying,
    isPaused,
    rate,
    progress,
    currentParagraph,
    totalParagraphs,
    speechSupported,
    playItem,
    pause,
    resume,
    stop,
    rewindParagraph,
    forwardParagraph,
    playNext,
    playPrevious,
    changeRate
  };
}
