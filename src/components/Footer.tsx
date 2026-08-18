import React from 'react';
import { 
  HeartHandshake, 
  Mail, 
  PhoneCall, 
  ShieldAlert, 
  BookOpen, 
  ExternalLink,
  Lock,
  Heart
} from 'lucide-react';
import { DOCUMENTS_DATA } from '../data/documentsData';

interface FooterProps {
  onSelectDocument: (id: string) => void;
  onOpenEmergency: () => void;
  setActiveTab: (tab: 'home' | 'documents' | 'community' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectDocument,
  onOpenEmergency,
  setActiveTab,
}) => {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Crisis Callout */}
      <div className="bg-gradient-to-r from-rose-950/60 via-slate-900 to-rose-950/60 border-b border-rose-900/40 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                ¿Necesitás orientación inmediata o estás atravesando una crisis?
              </div>
              <div className="text-xs text-slate-400">
                Atención anónima, pública y gratuita las 24 horas en Argentina: Centro de Asistencia al Suicida y Salud Mental Responde.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenEmergency}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 animate-bounce" />
            Ver Teléfonos de Urgencia (Línea 135)
          </button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-teal-600 text-white flex items-center justify-center shadow-xs">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                Portal de Salud Mental
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Plataforma integral enfocada en la divulgación rigurosa de la salud mental a nivel internacional y argentino. Fusionamos investigación clínica basada en evidencia con un espacio comunitario de testimonios anónimos y canales de contacto directo.
            </p>

            {/* Direct Official Channels */}
            <div className="space-y-2 pt-2 text-xs">
              <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                Canal Oficial de Comunicación:
              </div>
              <a
                href="mailto:websaludmental01@gmail.com"
                className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>websaludmental01@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Secciones
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Inicio & Resumen
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('documents')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Biblioteca de 13 Documentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('community')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Board de Experiencias
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contacto & Propuestas
                </button>
              </li>
            </ul>
          </div>

          {/* 10 Clinical Disorders Quick Links (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              10 Guías de Patologías Clínicas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-400">
              {DOCUMENTS_DATA.filter(d => d.category === 'Trastornos Clínicos').map(d => (
                <button
                  key={d.id}
                  onClick={() => onSelectDocument(d.id)}
                  className="text-left hover:text-teal-300 truncate transition-colors cursor-pointer"
                >
                  #{d.number}. {d.title.split(':')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Historical & Epidemiological Context (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Contexto & Datos
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => onSelectDocument('historia-global-calidad-derechos')}
                  className="text-left hover:text-teal-300 transition-colors cursor-pointer"
                >
                  Historia Global & Derechos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDocument('historia-argentina-psi')}
                  className="text-left hover:text-teal-300 transition-colors cursor-pointer"
                >
                  Historia Psi en Argentina
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectDocument('epidemiologia-global')}
                  className="text-left hover:text-teal-300 transition-colors cursor-pointer"
                >
                  Epidemiología Global GBD
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mandatory Ethical & Legal Medical Disclaimer */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-2">
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800/80">
            <p className="font-bold text-slate-300 mb-1">
              ⚠️ Aviso Legal y Descargo de Responsabilidad Médica:
            </p>
            <p>
              El contenido publicado en este sitio web tiene un propósito estrictamente educativo, pedagógico y de divulgación comunitaria. Bajo ninguna circunstancia sustituye el diagnóstico, evaluación, prescripción o tratamiento de un profesional de la salud mental matriculado (psicólogo o psiquiatra). Ante cualquier síntoma o situación de malestar emocional, se recomienda consultar a su centro de salud o comunicarse a las líneas de asistencia de urgencia indicadas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 text-slate-500">
            <div>
              © {new Date().getFullYear()} Portal de Salud Mental Argentina & Global. Diseñado bajo estándares de accesibilidad universal (WCAG) y rigor científico.
            </div>
            <div className="flex items-center gap-2">
              <span>Contacto:</span>
              <a href="mailto:websaludmental01@gmail.com" className="text-teal-400 hover:underline">
                websaludmental01@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
