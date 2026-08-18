import React, { useEffect } from 'react';
import { X, PhoneCall, AlertTriangle, ShieldCheck, ExternalLink, Globe } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/emergencyContacts';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const argentinaContacts = EMERGENCY_CONTACTS.filter(c => c.country === 'Argentina');
  const otherContacts = EMERGENCY_CONTACTS.filter(c => c.country !== 'Argentina');

  const getBadgeColor = (type: string) => {
    switch (type) {
      case 'suicide_prevention':
        return 'bg-rose-600 text-white';
      case 'mental_health':
        return 'bg-teal-700 text-white';
      case 'substances':
        return 'bg-blue-600 text-white';
      case 'youth':
        return 'bg-purple-600 text-white';
      case 'emergency':
        return 'bg-amber-600 text-white';
      default:
        return 'bg-slate-700 text-white';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800 my-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Cerrar modal de emergencias"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-7 h-7 animate-pulse" />
          </div>
          <div>
            <h2 id="emergency-modal-title" className="text-xl sm:text-2xl font-bold text-slate-900">
              Líneas de Asistencia y Crisis 24/7
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Si vos o alguien que conocés está pasando por un momento de crisis, angustia severa o riesgo personal, comunicate de inmediato con estos servicios gratuitos y confidenciales.
            </p>
          </div>
        </div>

        {/* Argentina Contacts Highlight */}
        <div className="mb-6 bg-slate-50 border border-slate-200/80 rounded-xl p-4 sm:p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Argentina — Líneas Gratuitas Nacionales
            </h3>
            <span className="text-xs font-medium bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">
              Disponibilidad 24hs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {argentinaContacts.map((contact) => (
              <a
                key={contact.id}
                href={`tel:${contact.number.replace(/\D/g, '')}`}
                className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all group cursor-pointer"
              >
                <div className="pr-2">
                  <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    {contact.name}
                  </div>
                  <div className="text-xs text-slate-500 leading-tight mt-0.5">{contact.description}</div>
                </div>
                <span className={`px-2.5 py-1 text-xs font-extrabold rounded-md shrink-0 flex items-center gap-1 shadow-2xs ${getBadgeColor(contact.type)}`}>
                  <PhoneCall className="w-3 h-3" /> {contact.number}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* International & Other Contacts */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-slate-500" />
            España, Internacional y Directorios Globales
          </h3>
          <div className="space-y-2 text-xs">
            {otherContacts.map((contact) => (
              <div key={contact.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-slate-50 border border-slate-200">
                <div>
                  <span className="font-bold text-slate-900">{contact.country} — {contact.name}:</span>
                  <span className="text-slate-600 block sm:inline sm:ml-1">{contact.description}</span>
                </div>
                {contact.number.startsWith('http') ? (
                  <a 
                    href={contact.number} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="font-bold text-teal-800 hover:text-teal-950 hover:underline flex items-center gap-1 self-start sm:self-auto shrink-0"
                  >
                    <span>Acceder al sitio</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <a 
                    href={`tel:${contact.number.replace(/\D/g, '')}`} 
                    className="font-bold text-rose-700 hover:underline flex items-center gap-1 self-start sm:self-auto shrink-0"
                  >
                    <PhoneCall className="w-3 h-3" /> Llamar {contact.number}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps for immediate self-regulation */}
        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/60 mb-6 text-xs text-slate-700 space-y-1">
          <div className="flex items-center gap-2 font-bold text-teal-900 mb-1.5">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            Primeros auxilios emocionales mientras buscás ayuda:
          </div>
          <p>• <strong>1.</strong> Buscá un lugar seguro y sentate con los pies firmes en el piso.</p>
          <p>• <strong>2.</strong> Inhalá suavemente por la nariz contando hasta 4 y exhalá lentamente en 4.</p>
          <p>• <strong>3.</strong> Nombrá 3 cosas que puedas ver, 2 que puedas tocar y 1 que puedas escuchar (anclaje sensorial).</p>
          <p>• <strong>4.</strong> Hablá con alguien de confianza o marcá el 135 / 0800-999-0091 sin dudar.</p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-900 text-white transition-colors cursor-pointer"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
