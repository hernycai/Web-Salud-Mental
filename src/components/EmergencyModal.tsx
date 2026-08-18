import React from 'react';
import { X, PhoneCall, AlertTriangle, ShieldCheck, HeartHandshake, ExternalLink } from 'lucide-react';
import { EMERGENCY_CONTACTS } from '../data/emergencyContacts';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-slate-800"
        role="dialog"
        aria-modal="true"
        aria-labelledby="emergency-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
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
            <span className="text-[11px] font-medium bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full">
              Disponibilidad 24hs
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="tel:135"
              className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                  Centro Asistencia al Suicida
                </div>
                <div className="text-[11px] text-slate-500">CABA y Gran Bs. As. o (011) 5275-1135</div>
              </div>
              <span className="px-2.5 py-1 text-sm font-extrabold rounded-md bg-rose-600 text-white flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" /> 135
              </span>
            </a>

            <a
              href="tel:08009990091"
              className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                  Línea Nacional Salud Mental
                </div>
                <div className="text-[11px] text-slate-500">Ministerio de Salud de la Nación</div>
              </div>
              <span className="px-2 py-1 text-xs font-bold rounded-md bg-teal-600 text-white flex items-center gap-1">
                <PhoneCall className="w-3 h-3" /> 0800-999-0091
              </span>
            </a>

            <a
              href="tel:141"
              className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                  SEDRONAR (Adicciones)
                </div>
                <div className="text-[11px] text-slate-500">Contención y orientación</div>
              </div>
              <span className="px-2.5 py-1 text-sm font-bold rounded-md bg-blue-600 text-white flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" /> 141
              </span>
            </a>

            <a
              href="tel:107"
              className="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200 hover:border-teal-500 hover:shadow-xs transition-all group"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                  SAME Urgencias Médicas
                </div>
                <div className="text-[11px] text-slate-500">Emergencias en domicilio o vía pública</div>
              </div>
              <span className="px-2.5 py-1 text-sm font-bold rounded-md bg-amber-600 text-white flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5" /> 107
              </span>
            </a>
          </div>
        </div>

        {/* International & Other Contacts */}
        <div className="mb-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            España y Directorios Internacionales
          </h3>
          <div className="space-y-2 text-xs">
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <span className="font-bold text-slate-800">España — Línea 024:</span> Atención a la conducta suicida (Ministerio de Sanidad)
              </div>
              <a href="tel:024" className="font-bold text-rose-600 hover:underline flex items-center gap-1">
                Llamar 024
              </a>
            </div>
            <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200">
              <div>
                <span className="font-bold text-slate-800">Befrienders Worldwide:</span> Red internacional de apoyo emocional en más de 30 países
              </div>
              <a 
                href="https://www.befrienders.org" 
                target="_blank" 
                rel="noreferrer" 
                className="font-semibold text-teal-700 hover:underline flex items-center gap-1"
              >
                befrienders.org <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Steps for immediate self-regulation */}
        <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/60 mb-6 text-xs text-slate-700">
          <div className="flex items-center gap-2 font-bold text-teal-900 mb-1">
            <ShieldCheck className="w-4 h-4 text-teal-700" />
            Primeros auxilios emocionales mientras buscás ayuda:
          </div>
          <p>1. Buscá un lugar seguro y sentate con los pies firmes en el piso.</p>
          <p>2. Inhalá suavemente por la nariz contando hasta 4 y exhalá lentamente en 4.</p>
          <p>3. Nombrá 3 cosas que puedas ver, 2 que puedas tocar y 1 que puedas escuchar (anclaje sensorial).</p>
          <p>4. Hablá con alguien de confianza o marcá el 135 sin dudar.</p>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-100">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm font-semibold rounded-lg bg-slate-800 hover:bg-slate-900 text-white transition-colors"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
