import React, { useState, useMemo } from 'react';
import { 
  HeartHandshake, 
  BookOpen, 
  Sparkles, 
  MessageSquareHeart, 
  PhoneCall, 
  ArrowRight, 
  Globe2, 
  Search, 
  Mail, 
  Activity,
  Layers
} from 'lucide-react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { DocumentCard } from './components/DocumentCard';
import { DocumentView } from './components/DocumentView';
import { CommunityBoard } from './components/CommunityBoard';
import { ContactSection } from './components/ContactSection';
import { EmergencyModal } from './components/EmergencyModal';
import { BrainAssistantBot } from './components/BrainAssistantBot';
import { DOCUMENTS_DATA } from './data/documentsData';
import { DocumentSection } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'documents' | 'community' | 'contact'>('home');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('Todos');

  // Find selected document if any
  const selectedDoc = useMemo(() => {
    if (!selectedDocId) return null;
    return DOCUMENTS_DATA.find(d => d.id === selectedDocId) || null;
  }, [selectedDocId]);

  // Filtered documents for search & category
  const filteredDocs = useMemo(() => {
    return DOCUMENTS_DATA.filter(doc => {
      const matchesCategory = selectedCategoryFilter === 'Todos' || doc.category === selectedCategoryFilter;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const inTitle = doc.title.toLowerCase().includes(q);
      const inSubtitle = doc.subtitle.toLowerCase().includes(q);
      const inSummary = doc.shortSummary.toLowerCase().includes(q);
      const inTags = doc.tags.some(t => t.toLowerCase().includes(q));
      const inNumber = doc.number ? doc.number === q : false;

      return matchesCategory && (inTitle || inSubtitle || inSummary || inTags || inNumber);
    });
  }, [searchQuery, selectedCategoryFilter]);

  const handleOpenDoc = (id: string) => {
    setSelectedDocId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToDocs = () => {
    setSelectedDocId(null);
  };

  const categories = ['Todos', 'Historia Global', 'Historia Argentina', 'Epidemiología', 'Trastornos Clínicos'];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedDocId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={(q) => {
          setSearchQuery(q);
          if (q.trim().length > 0 && selectedDocId) {
            setSelectedDocId(null);
          }
        }}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {/* If a document is explicitly opened */}
        {selectedDoc ? (
          <DocumentView
            doc={selectedDoc}
            onBack={handleBackToDocs}
            onOpenEmergency={() => setIsEmergencyOpen(true)}
            allDocs={DOCUMENTS_DATA}
            onSelectDoc={handleOpenDoc}
          />
        ) : (
          <>
            {/* VIEW: COMMUNITY BOARD */}
            {activeTab === 'community' && (
              <CommunityBoard onOpenEmergency={() => setIsEmergencyOpen(true)} />
            )}

            {/* VIEW: CONTACT SECTION */}
            {activeTab === 'contact' && (
              <ContactSection onOpenEmergency={() => setIsEmergencyOpen(true)} />
            )}

            {/* VIEW: DOCUMENTS BROWSER (ALL 13 DOCS) */}
            {activeTab === 'documents' && (
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-200">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
                    <BookOpen className="w-4 h-4 text-teal-600" />
                    Biblioteca Completa
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Documentos, Historia y Guías Clínicas
                  </h1>
                  <p className="text-sm sm:text-base text-slate-600 mt-2">
                    Accedé al contenido completo de cada uno de los 13 documentos de salud mental expuestos, con tablas diagnósticas, avances terapéuticos y bibliografía científica.
                  </p>
                </div>

                {/* Filter and Search Bar */}
                <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-2xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategoryFilter(cat)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                          selectedCategoryFilter === cat
                            ? 'bg-teal-800 text-white shadow-2xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>

                  {/* Search Input */}
                  <div className="relative w-full md:w-72">
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Buscar por síntoma o nombre..."
                      className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-teal-600 rounded-xl outline-none transition-all"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  </div>
                </div>

                {/* Grid of Document Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredDocs.map((doc) => (
                    <DocumentCard
                      key={doc.id}
                      doc={doc}
                      onSelect={handleOpenDoc}
                    />
                  ))}
                </div>

                {filteredDocs.length === 0 && (
                  <div className="text-center py-16 bg-white rounded-3xl border border-slate-200">
                    <p className="text-sm font-medium text-slate-600">
                      No se encontraron documentos para "{searchQuery}".
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategoryFilter('Todos');
                      }}
                      className="mt-3 px-4 py-2 text-xs font-bold text-teal-800 bg-teal-50 rounded-xl hover:bg-teal-100 transition-colors"
                    >
                      Limpiar filtros
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* VIEW: HOME PAGE (PRESENTACIÓN GENERAL & RESUMEN DE CADA DOCUMENTO) */}
            {activeTab === 'home' && (
              <div className="space-y-16 pb-16 animate-in fade-in duration-200">
                {/* Hero Presentation Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-teal-900 via-slate-900 to-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
                  <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto space-y-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-bold uppercase tracking-wider">
                        <Sparkles className="w-4 h-4 text-teal-400" />
                        Plataforma Integral de Salud Mental • Argentina & Global
                      </div>

                      <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                        Información, Rigor y Empatía para la <span className="text-teal-400">Salud Mental</span>
                      </h1>

                      <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                        Una plataforma completa dedicada a la divulgación científica, la historia de las disciplinas "psi" en Argentina y el mundo, guías detalladas sobre las 10 patologías más comunes y un espacio anónimo de testimonios comunitarios.
                      </p>

                      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                        <button
                          onClick={() => setActiveTab('documents')}
                          className="px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg hover:shadow-teal-500/25 flex items-center gap-2 cursor-pointer"
                        >
                          <BookOpen className="w-4 h-4" />
                          Explorar los 13 Documentos
                        </button>
                        <button
                          onClick={() => setActiveTab('community')}
                          className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <MessageSquareHeart className="w-4 h-4 text-rose-400" />
                          Board de Testimonios
                        </button>
                        <button
                          onClick={() => setActiveTab('contact')}
                          className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm transition-all flex items-center gap-2 cursor-pointer"
                        >
                          <Mail className="w-4 h-4 text-teal-300" />
                          Contacto & Consultas
                        </button>
                      </div>
                    </div>

                    {/* Key Global Metrics Bar */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-10 border-t border-slate-800">
                      <div className="bg-slate-800/60 backdrop-blur-xs p-4 rounded-2xl border border-slate-700/60 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-teal-400">1.200M</div>
                        <div className="text-xs font-semibold text-slate-300 mt-1">Personas con trastorno mental</div>
                        <div className="text-[11px] text-slate-400">1 de cada 7 a 8 en el mundo (OMS)</div>
                      </div>

                      <div className="bg-slate-800/60 backdrop-blur-xs p-4 rounded-2xl border border-slate-700/60 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-emerald-400">171M</div>
                        <div className="text-xs font-semibold text-slate-300 mt-1">Años Ajustados por Discapacidad</div>
                        <div className="text-[11px] text-slate-400">5ª causa de carga global (GBD 2021)</div>
                      </div>

                      <div className="bg-slate-800/60 backdrop-blur-xs p-4 rounded-2xl border border-slate-700/60 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-amber-400">10 Guías</div>
                        <div className="text-xs font-semibold text-slate-300 mt-1">Patologías más prevalentes</div>
                        <div className="text-[11px] text-slate-400">Criterios DSM-5-TR y CIE-11</div>
                      </div>

                      <div className="bg-slate-800/60 backdrop-blur-xs p-4 rounded-2xl border border-slate-700/60 text-center">
                        <div className="text-2xl sm:text-3xl font-black text-rose-400">Línea 135</div>
                        <div className="text-xs font-semibold text-slate-300 mt-1">Asistencia Gratuita 24hs</div>
                        <div className="text-[11px] text-slate-400">0800-999-0091 en Argentina</div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Overview and Architecture of the Project */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
                    <div className="max-w-3xl mb-8">
                      <div className="inline-flex items-center gap-1.5 text-teal-800 text-xs font-bold uppercase tracking-wider mb-2">
                        <Layers className="w-4 h-4 text-teal-600" />
                        Estructura y Módulos del Proyecto
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Una Visión Integral de la Salud Mental
                      </h2>
                      <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                        Este espacio fue diseñado para democratizar el acceso a información rigurosa y libre de estigmas, estructurado en cuatro grandes ejes de acción:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                      <div 
                        onClick={() => setActiveTab('documents')}
                        className="p-5 rounded-2xl bg-teal-50/50 border border-teal-200/80 hover:bg-teal-50 transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-teal-700 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <Globe2 className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-teal-800">
                          1. Historia & Evolución
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          De la reclusión asilar al modelo de derechos QualityRights (OMS) y el desarrollo de las disciplinas psi en Argentina (Cabred, Dagfal, Masotta).
                        </p>
                        <span className="text-xs font-bold text-teal-800 flex items-center gap-1">
                          Ver documentos <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div 
                        onClick={() => setActiveTab('documents')}
                        className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 hover:bg-emerald-50 transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <Activity className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-emerald-800">
                          2. Las 10 Patologías
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Guías detalladas con criterios clínicos, base neurobiológica, farmacología y terapias de primera línea basadas en evidencia científica.
                        </p>
                        <span className="text-xs font-bold text-emerald-800 flex items-center gap-1">
                          Explorar guías <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div 
                        onClick={() => setActiveTab('community')}
                        className="p-5 rounded-2xl bg-rose-50/50 border border-rose-200/80 hover:bg-rose-50 transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <MessageSquareHeart className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-rose-800">
                          3. Board de Experiencias
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Espacio anónimo y seguro donde personas y familias comparten sus vivencias y caminos de recuperación, libre de debates agresivos.
                        </p>
                        <span className="text-xs font-bold text-rose-800 flex items-center gap-1">
                          Leer testimonios <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      <div 
                        onClick={() => setActiveTab('contact')}
                        className="p-5 rounded-2xl bg-slate-100 border border-slate-200 hover:bg-slate-150 transition-all cursor-pointer group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-slate-800 text-white flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                          <Mail className="w-5 h-5" />
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mb-1 group-hover:text-slate-950">
                          4. Contacto & Red de Asistencia
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed mb-3">
                          Canal directo institucional con el equipo, líneas telefónicas gratuitas de crisis y formulario de consultas y sugerencias.
                        </p>
                        <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                          Contacto <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Contexto e Historia (Global & Argentina) + Epidemiología */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                        Fundamentos Históricos & Estadísticos
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Contexto, Historia y Epidemiología Global
                      </h2>
                    </div>
                    <span className="text-xs text-slate-500 font-medium">
                      3 documentos centrales
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {DOCUMENTS_DATA.filter(d => d.category !== 'Trastornos Clínicos').map(doc => (
                      <DocumentCard
                        key={doc.id}
                        doc={doc}
                        onSelect={handleOpenDoc}
                      />
                    ))}
                  </div>
                </section>

                {/* Section: The 10 Most Common Mental Health Disorders */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                        Guías Clínicas Completas
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                        Las 10 Enfermedades y Trastornos Más Comunes
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1">
                        Cada documento incluye criterios diagnósticos, neurobiología, farmacología, psicoterapias validadas y recursos de psicoeducación.
                      </p>
                    </div>

                    <button
                      onClick={() => setActiveTab('documents')}
                      className="text-xs font-bold text-teal-800 hover:text-teal-950 flex items-center gap-1 self-start md:self-auto"
                    >
                      Ver todos los documentos <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {DOCUMENTS_DATA.filter(d => d.category === 'Trastornos Clínicos').map(doc => (
                      <DocumentCard
                        key={doc.id}
                        doc={doc}
                        onSelect={handleOpenDoc}
                      />
                    ))}
                  </div>
                </section>

                {/* Section: Community Stories Spotlight */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-gradient-to-br from-rose-50/70 via-white to-teal-50/50 rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider mb-2">
                          <MessageSquareHeart className="w-4 h-4 text-rose-600" />
                          Espacio de Testimonios Anónimos
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                          Historias Reales de Superación y Convivencia
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                          Leé relatos de personas en tratamiento y familiares cuidadores que nos recuerdan que la recuperación es un camino posible.
                        </p>
                      </div>

                      <button
                        onClick={() => setActiveTab('community')}
                        className="px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm transition-all shadow-xs cursor-pointer"
                      >
                        Ver Board Completo & Compartir Relato
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                          Trastorno de Pánico & TCC
                        </span>
                        <p className="italic text-slate-700 mt-3 mb-3 leading-relaxed">
                          "Aprender a respirar y entender que el miedo no era peligro me devolvió la tranquilidad para salir a la calle..."
                        </p>
                        <span className="text-[11px] font-bold text-slate-500">— Anónimo (Córdoba, Arg)</span>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                          Depresión Atípica
                        </span>
                        <p className="italic text-slate-700 mt-3 mb-3 leading-relaxed">
                          "Pensaba que tener depresión era llorar todo el día. Conocer que la depresión atípica existía me salvó de la culpa..."
                        </p>
                        <span className="text-[11px] font-bold text-slate-500">— Valeria M. (Buenos Aires)</span>
                      </div>

                      <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
                        <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                          TDAH en la Adultez
                        </span>
                        <p className="italic text-slate-700 mt-3 mb-3 leading-relaxed">
                          "A los 31 años entendí que no era vago ni desordenado: era TDAH. La psicoeducación cambió mi vida laboral..."
                        </p>
                        <span className="text-[11px] font-bold text-slate-500">— Martín (Rosario)</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section: Official Channels & Institutional Contact */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30 text-xs font-bold uppercase tracking-wider">
                          <Mail className="w-3.5 h-3.5" />
                          Contacto Institucional & Consultas
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                          Comunicación Directa y Aportes Académicos
                        </h2>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          Ponete en contacto con nuestro equipo para consultas sobre el contenido pedagógico, propuestas de colaboración o sugerencias para nuevas guías de salud mental.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 pt-2">
                          <button
                            onClick={() => setActiveTab('contact')}
                            className="px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                          >
                            <Mail className="w-4 h-4" />
                            Ir al Formulario de Contacto
                          </button>
                          <a
                            href="mailto:websaludmental01@gmail.com"
                            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-2"
                          >
                            websaludmental01@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3 text-xs">
                        <h3 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                          Canales Oficiales del Proyecto:
                        </h3>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Email Oficial:</span>
                          <span className="font-bold text-teal-400">websaludmental01@gmail.com</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Atención en Crisis (Arg):</span>
                          <span className="font-bold text-rose-400">Línea 135 / 0800-999-0091</span>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-between">
                          <span className="text-slate-400">Rigor y Estándares:</span>
                          <span className="font-bold text-slate-300">DSM-5-TR • CIE-11 • OMS QualityRights</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </>
        )}
      </main>

      {/* Emergency Assistance Modal */}
      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      {/* Floating Brain AI Assistant Bot */}
      <BrainAssistantBot
        onSelectDocument={handleOpenDoc}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
      />

      {/* Footer */}
      <Footer
        onSelectDocument={handleOpenDoc}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        setActiveTab={(tab) => {
          setActiveTab(tab);
          setSelectedDocId(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
