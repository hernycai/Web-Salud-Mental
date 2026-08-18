import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Clock, 
  Share2, 
  Check, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  Info,
  PhoneCall,
  Printer
} from 'lucide-react';
import { DocumentSection } from '../types';

interface DocumentViewProps {
  doc: DocumentSection;
  onBack: () => void;
  onOpenEmergency: () => void;
  allDocs: DocumentSection[];
  onSelectDoc: (id: string) => void;
}

export const DocumentView: React.FC<DocumentViewProps> = ({
  doc,
  onBack,
  onOpenEmergency,
  allDocs,
  onSelectDoc,
}) => {
  const [copiedLink, setCopiedLink] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // Scroll to top on document change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Stop any ongoing speech
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [doc.id]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('La síntesis de voz no está soportada en tu navegador actual.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      const textToRead = `${doc.title}. ${doc.subtitle}. Resumen Ejecutivo: ${doc.content.executiveSummary}.`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = 'es-ES';
      utterance.rate = 1.0;
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in duration-200">
      {/* Top Breadcrumb & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-950 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-2xs"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a todos los documentos
        </button>

        <div className="flex items-center gap-2">
          {/* Audio TTS Reader */}
          <button
            onClick={toggleSpeech}
            className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
              isSpeaking
                ? 'bg-rose-50 text-rose-700 border-rose-300 animate-pulse'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
            }`}
            title="Escuchar resumen en voz alta"
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span>{isSpeaking ? 'Detener Voz' : 'Escuchar Resumen'}</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
            title="Copiar enlace permanente"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
            <span>{copiedLink ? 'Copiado' : 'Compartir'}</span>
          </button>

          {/* Print */}
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium rounded-lg bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors"
            title="Imprimir documento"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Imprimir</span>
          </button>
        </div>
      </div>

      {/* Main Document Header */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          {doc.number && (
            <span className="px-3 py-1 rounded-full bg-teal-800 text-white font-bold text-xs">
              Trastorno #{doc.number}
            </span>
          )}
          <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200">
            {doc.category}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-semibold text-xs border border-amber-200">
            <Clock className="w-3.5 h-3.5" /> Lectura estimada: {doc.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3">
          {doc.title}
        </h1>
        <p className="text-base sm:text-lg font-medium text-slate-600 mb-6">
          {doc.subtitle}
        </p>

        {/* Key Stats Bar */}
        {doc.keyStats && doc.keyStats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            {doc.keyStats.map((stat, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5">
                <div className="text-base sm:text-lg font-black text-teal-800">
                  {stat.value}
                </div>
                <div className="text-xs font-bold text-slate-800">
                  {stat.label}
                </div>
                {stat.detail && (
                  <div className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                    {stat.detail}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* FULL DOCUMENT CONTENT */}
      <div className="space-y-8">
        {/* Executive Summary Callout */}
        <div className="bg-gradient-to-br from-teal-50 to-emerald-50/50 border border-teal-200 rounded-2xl p-6 sm:p-7 shadow-xs">
          <div className="flex items-center gap-2 text-teal-900 font-bold text-base mb-2">
            <Sparkles className="w-5 h-5 text-teal-600" />
            Resumen Ejecutivo
          </div>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            {doc.content.executiveSummary}
          </p>
        </div>

        {/* Document Structured Sections */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-10">
          {doc.content.sections.map((section, sIdx) => (
            <section key={section.id || sIdx} className="space-y-4 pt-4 first:pt-0 border-t first:border-t-0 border-slate-150">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-baseline gap-2">
                <span>{section.heading}</span>
              </h2>

              {section.subheading && (
                <h3 className="text-base font-semibold text-teal-800">
                  {section.subheading}
                </h3>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {para}
                </p>
              ))}

              {/* List items */}
              {section.listItems && section.listItems.length > 0 && (
                <ul className="space-y-2 my-3 pl-2">
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2 text-sm sm:text-base text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Tables */}
              {section.table && (
                <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
                  {section.table.caption && (
                    <div className="bg-slate-100/90 px-4 py-2.5 text-xs font-bold text-slate-700 border-b border-slate-200">
                      {section.table.caption}
                    </div>
                  )}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          {section.table.headers.map((hdr, hIdx) => (
                            <th key={hIdx} className="px-4 py-3">
                              {hdr}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200/70 text-slate-700">
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50/70 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-semibold text-slate-900' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Callout */}
              {section.callout && (
                <div className={`p-4 rounded-xl border my-4 flex items-start gap-3 ${
                  section.callout.type === 'quote' 
                    ? 'bg-amber-50/70 border-amber-200 text-amber-900' 
                    : 'bg-teal-50/70 border-teal-200 text-teal-900'
                }`}>
                  {section.callout.type === 'quote' ? (
                    <Quote className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  ) : (
                    <Info className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                  )}
                  <div>
                    {section.callout.title && (
                      <div className="font-bold text-xs uppercase tracking-wider mb-1">
                        {section.callout.title}
                      </div>
                    )}
                    <p className="text-sm italic leading-relaxed">
                      "{section.callout.text}"
                    </p>
                    {section.callout.author && (
                      <p className="text-xs font-semibold mt-1.5 opacity-80">
                        — {section.callout.author}
                      </p>
                    )}
                  </div>
                </div>
              )}
            </section>
          ))}

          {/* Conclusions */}
          {doc.content.conclusions && doc.content.conclusions.length > 0 && (
            <div className="pt-6 border-t border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                Conclusiones Clínicas y Comunitarias
              </h3>
              <div className="space-y-2">
                {doc.content.conclusions.map((c, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200 text-slate-800 text-sm leading-relaxed">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Footer for next/previous document */}
      <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-teal-800 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la Biblioteca de Documentos
        </button>

        <button
          onClick={onOpenEmergency}
          className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 border border-rose-200 transition-colors cursor-pointer"
        >
          <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
          ¿Necesitás hablar ahora? Línea 135 (Arg)
        </button>
      </div>
    </div>
  );
};
