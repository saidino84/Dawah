import React from 'react';
import { PWAInstallButton } from './PWAInstallButton';
import { Wifi, WifiOff, Download, PlusCircle, Compass, Link as LinkIcon } from 'lucide-react';
import { AppTab } from '../types';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  favoritesCount: number;
  questionsCount: number;
  debatesCount: number;
  versesCount: number;
  isOnline: boolean;
  onOpenOfflineManager: () => void;
  onOpenInstallModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  favoritesCount,
  questionsCount,
  debatesCount,
  versesCount,
  isOnline,
  onOpenOfflineManager,
  onOpenInstallModal,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-950/95 backdrop-blur-md border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          onClick={() => setActiveTab('questions')}
          className="text-left group cursor-pointer focus-visible:outline-hidden"
        >
          <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-amber-100 group-hover:text-amber-200 transition-colors">
            DEEDAT ARCHIVE
          </span>
        </button>

        {/* Zone 2: Clean text navigation links with total counters */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium">
          <button
            onClick={() => setActiveTab('questions')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'questions'
                ? 'border-amber-500 text-amber-200 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>Perguntas & Respostas</span>
            <span className="text-[11px] font-mono px-1.5 py-0.2 bg-stone-800 text-stone-300 rounded-sm">
              {questionsCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('debates')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'debates'
                ? 'border-amber-500 text-amber-200 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>Debates Históricos</span>
            <span className="text-[11px] font-mono px-1.5 py-0.2 bg-stone-800 text-stone-300 rounded-sm">
              {debatesCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('verses')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'verses'
                ? 'border-amber-500 text-amber-200 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>Versículos Bíblicos</span>
            <span className="text-[11px] font-mono px-1.5 py-0.2 bg-stone-800 text-stone-300 rounded-sm">
              {versesCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('conversoes-ensinamentos')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'conversoes-ensinamentos'
                ? 'border-emerald-500 text-emerald-200 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Guia de Conversão</span>
          </button>

          <button
            onClick={() => setActiveTab('estudo-video-livro')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'estudo-video-livro'
                ? 'border-amber-500 text-amber-300 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>Analisador de Vídeo/Livro</span>
          </button>

          <button
            onClick={() => setActiveTab('favorites')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'favorites'
                ? 'border-amber-500 text-amber-200 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <span>Favoritos</span>
            <span className="text-[11px] font-mono px-1.5 py-0.2 bg-stone-800 text-amber-300 rounded-sm">
              {favoritesCount}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('add-entry')}
            className={`transition-colors pb-1 border-b-2 flex items-center gap-1.5 ${
              activeTab === 'add-entry'
                ? 'border-amber-500 text-amber-300 font-semibold'
                : 'border-transparent text-stone-400 hover:text-stone-200'
            }`}
          >
            <PlusCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Adicionar</span>
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenOfflineManager}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 text-xs rounded-md border transition-colors ${
              isOnline
                ? 'text-stone-400 border-stone-800 hover:border-stone-700 hover:text-stone-300'
                : 'text-amber-300 border-amber-600/50 bg-amber-950/40'
            }`}
            title="Status de Conexão e Armazenamento Offline"
          >
            {isOnline ? (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span className="hidden sm:inline">Online</span>
              </>
            ) : (
              <>
                <WifiOff className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Modo Offline</span>
              </>
            )}
          </button>

          <a
            href="/deedat-archive-single-file.html"
            download="deedat-archive.html"
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-stone-200 bg-stone-900 border border-stone-700/80 rounded-md hover:bg-stone-800 hover:text-amber-300 transition-colors whitespace-nowrap shadow-xs"
            title="Baixar aplicativo em 1 arquivo HTML único para celular ou PC"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Baixar .HTML</span>
          </a>

          <button
            onClick={onOpenInstallModal}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-200 bg-amber-950/80 border border-amber-700/60 rounded-md hover:bg-amber-900/60 hover:text-amber-100 transition-colors whitespace-nowrap shadow-xs"
            title="Instalar aplicativo ou obter arquivo APK"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Instalar App</span>
          </button>
        </div>
      </div>

      {/* Mobile navigation tab strip with totals */}
      <div className="md:hidden flex items-center justify-around border-t border-stone-900 bg-stone-950 px-2 py-2 overflow-x-auto gap-1">
        <button
          onClick={() => setActiveTab('questions')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'questions' ? 'text-amber-200 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Perguntas</span>
          <span className="text-[10px] font-mono text-stone-500">({questionsCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('debates')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'debates' ? 'text-amber-200 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Debates</span>
          <span className="text-[10px] font-mono text-stone-500">({debatesCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('verses')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'verses' ? 'text-amber-200 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Versículos</span>
          <span className="text-[10px] font-mono text-stone-500">({versesCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('conversoes-ensinamentos')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'conversoes-ensinamentos' ? 'text-emerald-300 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Conversões</span>
        </button>
        <button
          onClick={() => setActiveTab('estudo-video-livro')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'estudo-video-livro' ? 'text-amber-300 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Analisar Link</span>
        </button>
        <button
          onClick={() => setActiveTab('favorites')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'favorites' ? 'text-amber-200 font-semibold' : 'text-stone-400'
          }`}
        >
          <span>Favoritos</span>
          <span className="text-[10px] font-mono text-amber-400">({favoritesCount})</span>
        </button>
        <button
          onClick={() => setActiveTab('add-entry')}
          className={`px-2 py-1 text-xs whitespace-nowrap flex items-center gap-1 ${
            activeTab === 'add-entry' ? 'text-amber-200 font-semibold' : 'text-stone-400'
          }`}
        >
          <PlusCircle className="w-3 h-3 text-amber-400" />
          <span>Novo</span>
        </button>
        <a
          href="/deedat-archive.html"
          download="deedat-archive.html"
          className="px-2 py-1 text-[11px] whitespace-nowrap text-amber-400 font-semibold flex items-center gap-1 bg-amber-950/60 rounded-md border border-amber-800/40"
        >
          <Download className="w-3 h-3" />
          <span>.HTML</span>
        </a>
      </div>
    </header>
  );
};

