import React, { useState } from 'react';
import { Mail, Send, ShieldCheck, HeartHandshake, CheckCircle2, PhoneCall, Globe2 } from 'lucide-react';

interface ContactSectionProps {
  onOpenEmergency: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenEmergency }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Consulta General');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:websaludmental01@gmail.com?subject=${encodeURIComponent(`[Portal Salud Mental] ${subject} - ${name}`)}&body=${encodeURIComponent(`Nombre: ${name}\nEmail de contacto: ${email}\nTipo de consulta: ${subject}\n\nMensaje:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in duration-200">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
          <Mail className="w-4 h-4 text-teal-600" />
          Medios de Comunicación
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Contacto & Colaboraciones
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2">
          ¿Tenés dudas sobre las guías clínicas, querés sugerir nuevo material educativo o colaborar con nuestro equipo? Ponete en contacto directo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Official Contact Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Correo Electrónico Oficial</h3>
            <p className="text-xs text-slate-500 mt-1 mb-3">
              Para consultas institucionales, sugerencias temáticas y aportes profesionales:
            </p>
            <a
              href="mailto:websaludmental01@gmail.com"
              className="text-sm font-bold text-teal-800 hover:text-teal-950 hover:underline block break-all"
            >
              websaludmental01@gmail.com
            </a>
          </div>

          {/* Institutional Info Card */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Divulgación y Rigor</h3>
            <p className="text-xs text-slate-500 mt-1">
              Portal dedicado a la información accesible y basada en evidencia científica sobre salud mental en Argentina y a nivel global.
            </p>
          </div>

          {/* Crisis Reminder */}
          <div className="bg-rose-50 rounded-2xl p-5 border border-rose-200 text-xs text-slate-700">
            <div className="flex items-center gap-2 font-bold text-rose-900 mb-1">
              <PhoneCall className="w-4 h-4 text-rose-600" />
              ¿Urgencia o Situación de Crisis?
            </div>
            <p className="text-slate-600 mb-3">
              Este buzón no atiende emergencias en tiempo real. Si necesitás ayuda médica inmediata:
            </p>
            <button
              onClick={onOpenEmergency}
              className="w-full py-2 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl transition-colors"
            >
              Llamar a Líneas de Crisis (135 Arg)
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-1">
            Envianos un Mensaje Directo
          </h2>
          <p className="text-xs text-slate-500 mb-6">
            Completá el formulario para preparar el correo directo hacia <strong>websaludmental01@gmail.com</strong>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-slate-800 mb-1">Tu Nombre:</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Laura Gómez"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                />
              </div>
              <div>
                <label className="block font-bold text-slate-800 mb-1">Tu Correo Electrónico:</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Motivo del Mensaje:</label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none bg-white"
              >
                <option value="Sugerencia de Tema o Guía">Sugerir un tema o nueva guía clínica</option>
                <option value="Consulta sobre Documento / Información">Consulta sobre el contenido de las guías</option>
                <option value="Colaboración Académica o Institucional">Colaboración profesional / institucional</option>
                <option value="Comentarios sobre el Board Comunitario">Dudas sobre el Board de Testimonios</option>
                <option value="Otro motivo">Otro motivo</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-800 mb-1">Mensaje:</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribí detalladamente tu consulta, sugerencia o propuesta..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 outline-none resize-none"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-500">
                Al hacer clic, se abrirá tu aplicación de correo.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold transition-all cursor-pointer shadow-xs"
              >
                <Send className="w-4 h-4" />
                Enviar Mensaje
              </button>
            </div>

            {sent && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ¡Mensaje preparado! Se abrió tu cliente de correo para enviar a websaludmental01@gmail.com.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
