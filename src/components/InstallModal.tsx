import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import {
  X,
  Download,
  Smartphone,
  Monitor,
  Share2,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  PackageCheck
} from 'lucide-react';

interface InstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  appUrl: string;
}

export const InstallModal: React.FC<InstallModalProps> = ({ isOpen, onClose, appUrl }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [copied, setCopied] = useState(false);
  const [activePlatformTab, setActivePlatformTab] = useState<'singlefile' | 'android' | 'ios' | 'pc' | 'apk'>('singlefile');

  if (!isOpen) return null;

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(appUrl || window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="install-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xs overflow-y-auto"
    >
      <div className="w-full max-w-xl bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl p-6 text-stone-200 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-800/40 text-amber-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 id="install-modal-title" className="text-base sm:text-lg font-bold text-stone-100">
                Como Ter o App Instalado no Celular e PC
              </h2>
              <p className="text-xs text-stone-400">
                Instale diretamente como aplicativo nativo (PWA / APK) com acesso offline
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 1-Click PWA Trigger if browser supports native prompt */}
        {isInstallable && (
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-stone-900 border border-amber-600/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Instalação Direta Pronta para Este Dispositivo
              </div>
              <div className="text-xs text-stone-300 mt-0.5">
                Clique no botão ao lado para baixar e fixar o ícone na sua tela inicial agora.
              </div>
            </div>
            <button
              onClick={async () => {
                const res = await install();
                if (res) onClose();
              }}
              className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              <span>Instalar Agora</span>
            </button>
          </div>
        )}

        {/* Platform Selection Tabs */}
        <div className="flex items-center gap-2 border-b border-stone-800 pb-2 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActivePlatformTab('android')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activePlatformTab === 'android'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 bg-stone-800/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Android (APK / PWA)</span>
          </button>
          <button
            onClick={() => setActivePlatformTab('singlefile')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activePlatformTab === 'singlefile'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 bg-stone-800/60'
            }`}
          >
            <Download className="w-3.5 h-3.5" />
            <span>Arquivo HTML Único (.html)</span>
          </button>
          <button
            onClick={() => setActivePlatformTab('ios')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activePlatformTab === 'ios'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 bg-stone-800/60'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>iPhone / iPad</span>
          </button>
          <button
            onClick={() => setActivePlatformTab('pc')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activePlatformTab === 'pc'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 bg-stone-800/60'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" />
            <span>Computador (PC / Mac)</span>
          </button>
          <button
            onClick={() => setActivePlatformTab('apk')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activePlatformTab === 'apk'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-stone-200 bg-stone-800/60'
            }`}
          >
            <PackageCheck className="w-3.5 h-3.5" />
            <span>Gerar APK (.apk)</span>
          </button>
        </div>

        {/* Tab 0: Arquivo HTML Único Standalone */}
        {activePlatformTab === 'singlefile' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-300">
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 space-y-3">
              <div className="flex items-center gap-2 text-amber-300 font-bold">
                <Sparkles className="w-4 h-4" />
                <span>Aplicativo Completo em 1 Arquivo HTML Único</span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Este arquivo contém <strong>100% dos debates, perguntas, versículos bíblicos, análises, áudio em segundo plano e design</strong> embutidos em um só arquivo <code>.html</code>. Você pode salvá-lo no celular ou enviá-lo pelo WhatsApp/Email e ele abre instantaneamente sem precisar de servidor ou login!
              </p>
              <div className="pt-1 flex flex-wrap gap-2">
                <a
                  href="/deedat-archive-single-file.html"
                  download="deedat-archive.html"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-stone-950 font-bold text-xs shadow-lg transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Arquivo HTML Único (deedat-archive.html)</span>
                </a>
                <a
                  href="/deedat-archive-single-file.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium text-xs border border-stone-700 transition-colors"
                >
                  <span>Abrir Versão HTML Direta</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="space-y-2 p-3.5 rounded-xl bg-stone-950 border border-stone-800 text-xs">
              <span className="font-semibold text-stone-200">Como usar o arquivo no celular:</span>
              <ol className="list-decimal pl-4 space-y-1 text-stone-400">
                <li>Baixe o arquivo <code>deedat-archive.html</code> no seu celular ou computador.</li>
                <li>Toque nele na sua pasta "Downloads" ou abra com o Chrome/navegador do celular.</li>
                <li>O app funciona completo, mesmo em Modo Avião sem internet!</li>
              </ol>
            </div>
          </div>
        )}

        {/* Tab 1: Android */}
        {activePlatformTab === 'android' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-300">
            <p className="leading-relaxed">
              No Android (Google Chrome, Edge, Samsung Internet ou Brave), o aplicativo se instala como um <strong>WebAPK nativo</strong>, com ícone próprio, tela cheia e sem barras de navegador:
            </p>
            <div className="space-y-3 p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">1</span>
                <div>
                  <strong>Abra o link no Google Chrome</strong> no seu celular.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">2</span>
                <div>
                  Toque no menu de <strong>três pontinhos (⋮)</strong> no canto superior direito do Chrome.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">3</span>
                <div>
                  Toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">4</span>
                <div>
                  O ícone do <strong>Deedat Archive</strong> surgirá na gaveta de aplicativos do seu celular como qualquer outro app instalado da Play Store, funcionando 100% offline e com áudio em segundo plano!
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: iPhone / iPad */}
        {activePlatformTab === 'ios' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-300">
            <p className="leading-relaxed">
              No iOS da Apple, a instalação é feita pelo navegador <strong>Safari</strong>:
            </p>
            <div className="space-y-3 p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">1</span>
                <div>
                  Abra este link no navegador <strong>Safari</strong> do iPhone.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">2</span>
                <div>
                  Toque no botão central <strong>Compartilhar</strong> (quadrado com a seta apontando para cima).
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">3</span>
                <div>
                  Role as opções para baixo e selecione <strong>"Adicionar à Tela de Início"</strong>.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">4</span>
                <div>
                  Toque em <strong>Adicionar</strong>. O app abrirá em tela cheia idêntico a um aplicativo da App Store.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Computador (PC / Mac) */}
        {activePlatformTab === 'pc' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-300">
            <p className="leading-relaxed">
              No Windows, Mac ou Linux (Chrome, Edge ou Brave), você pode instalar como um programa de desktop leve:
            </p>
            <div className="space-y-3 p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">1</span>
                <div>
                  Olhe para o lado direito da <strong>barra de endereço (URL)</strong> do seu navegador.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">2</span>
                <div>
                  Clique no ícone de <strong>computador com uma seta para baixo</strong> ou <strong>"+" (Instalar Deedat Archive)</strong>.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">3</span>
                <div>
                  Pronto! Um atalho será criado na Área de Trabalho e no menu Iniciar, abrindo em uma janela dedicada sem abas.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Como empacotar em arquivo APK físico */}
        {activePlatformTab === 'apk' && (
          <div className="space-y-4 text-xs sm:text-sm text-stone-300">
            <p className="leading-relaxed">
              Se você deseja enviar um <strong>arquivo instalável .APK</strong> para alguém via WhatsApp, Telegram ou pendrive, como o app já é um <strong>PWA 100% em conformidade com o Google</strong>:
            </p>
            <div className="space-y-3 p-4 rounded-xl bg-stone-950 border border-stone-800">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">1</span>
                <div>
                  Acesse a ferramenta oficial da Google e Microsoft: <strong>PWABuilder.com</strong> (gratuita).
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">2</span>
                <div>
                  Cole a URL do aplicativo (copie abaixo) e clique em <strong>"Package for Android"</strong>.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-stone-800 text-amber-400 font-mono flex items-center justify-center text-xs shrink-0 font-bold">3</span>
                <div>
                  Ele gerará instantaneamente o arquivo <strong>.apk</strong> assinado para baixar e distribuir, pronto para instalar em qualquer Android ou publicar na Play Store.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* URL sharing box */}
        <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="min-w-0 w-full">
            <span className="text-[11px] text-stone-500 font-mono uppercase tracking-wider block">
              Link direto do seu aplicativo:
            </span>
            <span className="text-xs text-amber-300 font-mono truncate block mt-0.5">
              {appUrl || window.location.href}
            </span>
          </div>
          <button
            onClick={handleCopyUrl}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium transition-colors shrink-0 self-stretch sm:self-auto justify-center"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400 font-bold">Link Copiado!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-stone-400" />
                <span>Copiar Link</span>
              </>
            )}
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-2 border-t border-stone-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
          >
            Fechar Instruções
          </button>
        </div>
      </div>
    </div>
  );
};
