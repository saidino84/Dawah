export type Category = 
  | 'crucificacao'
  | 'divindade'
  | 'biblia-autenticidade'
  | 'profecias'
  | 'trindade'
  | 'cristo-isla'
  | 'polemicas'
  | 'debates-gerais'
  | 'pratica-islamica'
  | 'pecado-original'
  | 'filosofia-teologia'
  | 'erros-cientificos-biblia'
  | 'dawah-rua';

export interface BiblicalReference {
  book: string;
  chapterVerse: string;
  bibleText: string;
  deedatAnalysis: string;
}

export interface QuranReference {
  surah: string;
  ayah: string;
  arabicText?: string;
  translation: string;
}

export interface HadithReference {
  collection: string; // e.g. "Sahih al-Bukhari", "Sahih Muslim", "Sunan Abi Dawud"
  hadithNumber: string;
  narrator?: string;
  text: string;
  explanation: string;
}

export interface DeedatItem {
  id: string;
  title: string;
  speaker?: string; // e.g. "Sheikh Ahmed Deedat", "Dr. Zakir Naik", "Mohammed Hijab", "Ali Dawah", "Hamza Tzortzis", "Mansur", "Uthman Farooq", "Shabbir Ally"
  question: string;
  askedBy: string; // e.g. "Dr. Anis Shorrosh", "Pastor da plateia", "Jimmy Swaggart", "David Wood", "Sam Shamoun"
  opponent?: string;
  year?: string;
  location?: string;
  debateTitle?: string;
  category: Category;
  categoryLabel: string;
  summary: string;
  fullAnswer: string[];
  keyQuote: string;
  biblicalVerses: BiblicalReference[];
  quranicVerses: QuranReference[];
  hadiths?: HadithReference[];
  youtubeUrl: string;
  youtubeId: string; // for embedding
  timestampSeconds?: number;
  durationMinutes: number;
  isPopular?: boolean;
}

export interface HistoricalDebate {
  id: string;
  title: string;
  opponent: string;
  opponentTitle: string;
  date: string;
  location: string;
  venue: string;
  attendeesCount: string;
  youtubeUrl: string;
  youtubeId: string;
  description: string;
  coreTopics: string[];
  deedatCentralThesis: string;
  opponentCentralThesis: string;
  highlightQuestionsCount: number;
}

export interface UserNote {
  itemId: string;
  content: string;
  updatedAt: string;
}

export interface FilterState {
  searchQuery: string;
  category: string;
  opponent: string;
  hasVersesOnly: boolean;
  bookmarkedOnly: boolean;
}

export type AppTab = 
  | 'questions' 
  | 'debates' 
  | 'verses' 
  | 'conversoes-ensinamentos'
  | 'estudo-video-livro'
  | 'favorites' 
  | 'add-entry';

