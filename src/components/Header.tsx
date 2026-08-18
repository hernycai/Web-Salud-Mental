import React, { useState } from 'react';
import { 
  HeartHandshake, 
  PhoneCall, 
  BookOpen, 
  MessageSquareHeart, 
  Mail, 
  Search, 
  Menu, 
  X, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface HeaderProps {
  activeTab: 'home' | 'documents' | 'community' | 'contact';
  setActiveTab: (tab: 'home' | 'documents' | 'community' | 'contact') => void;
  onOpenEmergency: () => void;
  onSelectDocument?: (id: string) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenEmergency,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-800 shadow-2xs">
      {/* Top Notification Bar for Crisis Assistance */}
      <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-slate-900 text-white text-xs py-1.5 px-4 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-teal-500/20 text-teal-300 border border-teal-500/30 tracking-wide uppercase">
              Atención 24hs
            </span>
            <span className="text-slate-200">¿Estás pasando por un momento difícil o necesitás orientación?</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-2 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 animate-pulse text-amber-400" />
              Línea 135 (Argentina) / 0800-999-0091 • Asistencia Gratuita
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-800 group-hover:bg-teal-900 text-white flex items-center justify-center shadow-2xs transition-colors">
              <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-base sm:text-lg text-slate-900 tracking-tight leading-tight group-hover:text-teal-900 transition-colors">
                  Salud Mental
                </span>
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-md bg-teal-50 text-teal-800 border border-teal-200/80">
                  Argentina & Global
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Portal de divulgación científica y guías clínicas
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center p-1 bg-slate-100/90 rounded-xl border border-slate-200/80 gap-1">
            <button
              id="nav-home-btn"
              onClick={() => setActiveTab('home')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              Inicio
            </button>
            <button
              id="nav-docs-btn"
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'documents'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <BookOpen className="w-4 h-4 text-teal-700" />
              <span>13 Guías Clínicas</span>
            </button>
            <button
              id="nav-community-btn"
              onClick={() => setActiveTab('community')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'community'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <MessageSquareHeart className="w-4 h-4 text-rose-500" />
              <span>Testimonios</span>
            </button>
            <button
              id="nav-contact-btn"
              onClick={() => setActiveTab('contact')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'contact'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
              }`}
            >
              <Mail className="w-4 h-4 text-slate-600" />
              <span>Contacto</span>
            </button>
          </nav>

          {/* Action Tools & Crisis Hotline Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Quick Search Bar */}
            <div className="relative hidden md:block w-40 lg:w-48 xl:w-56">
              <input
                id="header-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar guías..."
                className="w-full pl-8 pr-3 py-2 text-xs bg-slate-50 hover:bg-slate-100 focus:bg-white border border-slate-200 focus:border-teal-600 rounded-xl outline-none transition-all placeholder:text-slate-400"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 top-2 text-slate-400 hover:text-slate-600 text-xs cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Emergency Hotline Button */}
            <button
              id="emergency-header-btn"
              onClick={onOpenEmergency}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-200 transition-colors shadow-2xs cursor-pointer"
              title="Líneas de ayuda y números de emergencia 24hs"
            >
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span className="hidden sm:inline">Líneas de Crisis</span>
              <span className="sm:hidden">135 Crisis</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="mb-3">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar patologías, historia o temas..."
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-100 border border-slate-200 rounded-xl outline-none focus:bg-white focus:border-teal-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
          </div>

          <button
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
              activeTab === 'home' ? 'bg-teal-50 text-teal-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-teal-600" />
            Inicio & Resumen
          </button>

          <button
            onClick={() => {
              setActiveTab('documents');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
              activeTab === 'documents' ? 'bg-teal-50 text-teal-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4 text-teal-600" />
            13 Guías Clínicas & Temas
          </button>

          <button
            onClick={() => {
              setActiveTab('community');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
              activeTab === 'community' ? 'bg-teal-50 text-teal-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <MessageSquareHeart className="w-4 h-4 text-rose-500" />
            Board de Testimonios
          </button>

          <button
            onClick={() => {
              setActiveTab('contact');
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
              activeTab === 'contact' ? 'bg-teal-50 text-teal-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
            }`}
          >
            <Mail className="w-4 h-4 text-slate-500" />
            Contacto Institucional
          </button>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                onOpenEmergency();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3.5 rounded-xl bg-rose-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xs cursor-pointer hover:bg-rose-700 transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              Líneas de Crisis Inmediata (135)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
