import React, { useState, useEffect, useRef } from 'react';
import { 
  Brain, 
  Sparkles, 
  Send, 
  X, 
  Search, 
  Globe, 
  BookOpen, 
  ExternalLink, 
  RefreshCw, 
  PhoneCall, 
  MessageSquare, 
  ChevronRight,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  Maximize2,
  Minimize2,
  Lightbulb
} from 'lucide-react';
import { DOCUMENTS_DATA } from '../data/documentsData';
import { DocumentSection } from '../types';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: Date;
  matchedDoc?: {
    id: string;
    title: string;
    category: string;
    number?: string;
    relevantExcerpt?: string;
    keyStats?: { label: string; value: string }[];
  };
  offerWebSearch?: boolean;
  searchQuery?: string;
  isEmergencyAlert?: boolean;
}

interface BrainAssistantBotProps {
  onSelectDocument: (docId: string) => void;
  onOpenEmergency: () => void;
}

const QUICK_PROMPTS = [
  '¿Cómo ayudar en un ataque de pánico?',
  '¿Qué es la depresión atípica y sus síntomas?',
  '¿Qué es el nuevo fármaco COBENFY para la esquizofrenia?',
  '¿Por qué en Argentina hay tantos psicólogos?',
  '¿Qué son "Las Cinco Fatales" en discapacidad intelectual?',
  '¿Cuál es la diferencia entre Bipolar I y Bipolar II?',
  '¿Qué tratamientos existen para los TCA (anorexia y bulimia)?',
  '¿Qué es la tarjeta sanitaria AA para personas con autismo?',
  '¿Qué es la Terapia Metacognitiva para el TEPT?',
  '¿Cuáles son las pautas de crianza positiva en TDAH?'
];

export const BrainAssistantBot: React.FC<BrainAssistantBotProps> = ({
  onSelectDocument,
  onOpenEmergency,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: '¡Hola! Soy tu **Cerebro Asistente** 🧠. Puedo responder tus dudas sobre salud mental, patologías clínicas, tratamientos y la historia psi basándome en los 13 documentos de investigación del portal.\n\n¿De qué tema te gustaría saber más?',
      timestamp: new Date(),
    }
  ]);
  const [hasUnread, setHasUnread] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto scroll to bottom of messages
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 200);
    }
  }, [isOpen]);

  // Normalization helper
  const normalizeText = (str: string) => {
    return str
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^\w\s]/gi, ' ')
      .trim();
  };

  // Search Knowledge Engine
  const searchKnowledgeBase = (query: string): { 
    found: boolean; 
    answer: string; 
    doc?: DocumentSection; 
    excerpt?: string;
    isEmergency?: boolean;
  } => {
    const rawQ = query.trim();
    const qNorm = normalizeText(query);

    // 1. Emergency & Crisis Detection
    const emergencyKeywords = [
      'suicidio', 'matarme', 'morirme', 'quitarme la vida', 'no doy mas', 'desesperado',
      'autolesion', 'cortarme', 'emergencia', 'crisis grave', 'urgencia medica', 'morir'
    ];
    const isEmergency = emergencyKeywords.some(kw => qNorm.includes(normalizeText(kw)));

    if (isEmergency) {
      return {
        found: true,
        isEmergency: true,
        answer: '⚠️ **Atención Inmediata:** Si estás sintiendo un dolor emocional abrumador, teniendo pensamientos de hacerte daño o atravesando una crisis severa, por favor comunicate de inmediato con los servicios de urgencia gratuitos y confidenciales.',
      };
    }

    // 2. Keyword & Concept dictionary mapping for rich domain queries
    const topicMap: { [key: string]: { docId: string; keywords: string[] } } = {
      ansiedad: {
        docId: 'ansiedad',
        keywords: ['ansiedad', 'panico', 'ataque de panico', 'miedo', 'fobia', 'fobias', 'isrs', 'respiracion', '4 4 4', 'intestino cerebro', 'psicobioticos', 'agorafobia', 'tag', 'preocupacion']
      },
      depresion: {
        docId: 'depresion',
        keywords: ['depresion', 'depresivo', 'depre', 'atipica', 'esketamina', 'paralisis plumbea', 'tristeza', 'anhedonia', 'psilobicina', 'brexanolona', 'rechazo interpersonal', 'hipersomnia']
      },
      tept: {
        docId: 'tept',
        keywords: ['tept', 'trauma', 'postraumatico', 'c tept', 'flashback', 'metacognitiva', 'tmc', 'exposicion prolongada', 'amigdala', 'pesadillas', 'hipervigilancia', 'mindfulness desapegado']
      },
      tdah: {
        docId: 'tdah',
        keywords: ['tdah', 'deficit de atencion', 'hiperactividad', 'inatencion', 'dopamina', 'fichas', 'crianza', 'estudio mta', 'funciones ejecutivas', 'ninos', 'hiperfoco']
      },
      disocial: {
        docId: 'conducta-disocial',
        keywords: ['disocial', 'antisocial', 'conducta', 'moffitt', 'prosociales limitadas', 'cie 11', 'nice', 'rebeldia', 'agresion', 'falta de empatia', 'remordimiento']
      },
      bipolar: {
        docId: 'trastorno-bipolar',
        keywords: ['bipolar', 'bipolaridad', 'mania', 'hipomania', 'litio', 'ank3', 'viraje', 'ciclotimia', 'tecleo', 'smartphone', 'dmdd', 'cambio de humor']
      },
      esquizofrenia: {
        docId: 'esquizofrenia-psicosis',
        keywords: ['esquizofrenia', 'psicosis', 'cobenfy', 'gen c4', 'poda sinaptica', 'voces', 'delirio', 'delirante', 'alucinacion', '3 c', 'columbo', 'xanomelina']
      },
      tea: {
        docId: 'tea-autismo',
        keywords: ['autismo', 'tea', 'tarjeta aa', 'pictogramas', 'ami tea', 'pami', 'sensorial', 'sobrecarga', 'odontologia adaptada', 'accesibilidad cognitiva']
      },
      tca: {
        docId: 'tca-conducta-alimentaria',
        keywords: ['tca', 'anorexia', 'bulimia', 'atracon', 'alimentaria', 'comida', 'diabulimia', 'ortorexia', 'mantra', 'cbt e', 'arfid', 'peso', 'balanza']
      },
      discapacidad: {
        docId: 'discapacidad-intelectual-adicciones',
        keywords: ['discapacidad intelectual', 'adiccion', 'adicciones', 'sustancias', 'drogas', 'fatal five', 'cinco fatales', 'take it personal', 'enmascaramiento', 'overshadowing', 'patologia dual']
      },
      historia_argentina: {
        docId: 'historia-argentina-psi',
        keywords: ['argentina', 'psicologos argentina', 'buenos aires', 'cabred', 'open door', 'lujan', 'masotta', 'lacan', 'carrera de psicologia', '1957', 'rosario', 'ley 26657', 'psicoanalisis']
      },
      historia_global: {
        docId: 'historia-global-calidad-derechos',
        keywords: ['historia', 'cadenas', 'pinel', 'balkhi', 'qualityrights', 'oms', 'clorpromazina', 'asilos', 'bicetre', 'derechos humanos', 'manicomio']
      },
      epidemiologia: {
        docId: 'epidemiologia-global',
        keywords: ['epidemiologia', 'cifras', 'estadisticas', 'gbd', '1 de cada 8', 'presupuesto', '1 billon', 'dalys', 'discapacidad mundial', 'inversion']
      }
    };

    // Calculate match score for all documents
    let bestDoc: DocumentSection | null = null;
    let highestScore = 0;
    let relevantExcerpt = '';

    const queryTokens = qNorm.split(/\s+/).filter(t => t.length > 2);

    for (const doc of DOCUMENTS_DATA) {
      let score = 0;
      const docTitleNorm = normalizeText(doc.title);
      const docSubtitleNorm = normalizeText(doc.subtitle);
      const docSummaryNorm = normalizeText(doc.shortSummary);
      const docExecNorm = normalizeText(doc.content.executiveSummary);

      // Check topic map keywords
      for (const [topicKey, topicData] of Object.entries(topicMap)) {
        if (topicData.docId === doc.id) {
          for (const kw of topicData.keywords) {
            const kwNorm = normalizeText(kw);
            if (qNorm.includes(kwNorm)) {
              score += kwNorm.includes(' ') ? 12 : 7;
            }
          }
        }
      }

      // Check tokens in title / subtitle / tags
      queryTokens.forEach(token => {
        if (docTitleNorm.includes(token)) score += 5;
        if (docSubtitleNorm.includes(token)) score += 3;
        if (doc.tags.some(t => normalizeText(t).includes(token))) score += 4;
        if (docSummaryNorm.includes(token)) score += 2;
        if (docExecNorm.includes(token)) score += 1.5;
      });

      // Check inside sections for specific paragraphs
      for (const section of doc.content.sections) {
        const hNorm = normalizeText(section.heading);
        const subNorm = normalizeText(section.subheading || '');
        if (queryTokens.some(t => hNorm.includes(t))) score += 4;
        if (queryTokens.some(t => subNorm.includes(t))) score += 3;

        for (const para of section.paragraphs) {
          const paraNorm = normalizeText(para);
          let matchCount = 0;
          queryTokens.forEach(token => {
            if (paraNorm.includes(token)) matchCount++;
          });
          if (matchCount >= 2) {
            score += matchCount * 2;
            if (!relevantExcerpt) {
              relevantExcerpt = para;
            }
          }
        }

        if (section.listItems) {
          for (const item of section.listItems) {
            const itemNorm = normalizeText(item);
            let matchCount = 0;
            queryTokens.forEach(token => {
              if (itemNorm.includes(token)) matchCount++;
            });
            if (matchCount >= 2) {
              score += matchCount * 2.5;
              if (!relevantExcerpt) {
                relevantExcerpt = item;
              }
            }
          }
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestDoc = doc;
      }
    }

    // Threshold check (must have substantial relevance)
    if (bestDoc && highestScore >= 5) {
      // Build a comprehensive, elegant answer from the document
      let synthesizedAnswer = '';

      if (qNorm.includes('panico') || qNorm.includes('ataque') || qNorm.includes('auxiliar')) {
        synthesizedAnswer = `En el documento **"${bestDoc.title}"** se detalla el protocolo para asistir una crisis de pánico:\n\n• **Respiración 4-4-4:** Inhalar en 4 segundos, retener 4 y exhalar suavemente en 4.\n• **Ambiente:** Trasladar a la persona a un sitio calmo, ventilado y con menor estimulación sensorial.\n• **Validación:** No decir "tranquilízate" ni minimizar. Decir: *"Sé que da miedo, pero tu cuerpo está seguro y va a pasar en unos minutos"*.\n• **Tratamiento estándar:** TCC (Terapia Cognitivo-Conductual) y farmacoterapia adecuada (ISRS).`;
      } else if (qNorm.includes('atipica') || (qNorm.includes('depresion') && qNorm.includes('sintomas'))) {
        synthesizedAnswer = `Según la guía **"${bestDoc.title}"**, la **Depresión Atípica** se caracteriza por:\n\n• **Reactividad del ánimo:** Capacidad de sentir alivio momentáneo ante estímulos positivos.\n• **Parálisis plúmbea:** Sensación de pesadez extrema en extremidades (como plomo).\n• **Hipersomnia y aumento de apetito:** Dormir más de 10h al día y comer carbohidratos en exceso.\n• **Hipersensibilidad al rechazo:** Intensa vulnerabilidad en vínculos personales.\n• **Novedad médica:** Fármacos de acción rápida como la esketamina para casos resistentes.`;
      } else if (qNorm.includes('cobenfy') || qNorm.includes('esquizofrenia') || qNorm.includes('gen c4') || qNorm.includes('psicosis')) {
        synthesizedAnswer = `En el documento **"${bestDoc.title}"** se destacan avances clave:\n\n• **COBENFY™ (Xanomelina + Trospio):** Primer fármaco en más de 60 años que actúa sobre receptores muscarínicos M1/M4 sin bloquear la dopamina D2, reduciendo efectos adversos motores.\n• **Gen C4 y Poda Sináptica:** Investigadores de Harvard descubrieron que la sobreexpresión de C4 elimina conexiones neuronales sanas en la adolescencia.\n• **TCCp (Modelo 3 C):** Catch It (Captarlo), Check It (Comprobarlo) y Change It (Cambiarlo) para resignificar voces y pensamientos.`;
      } else if (qNorm.includes('argentina') || qNorm.includes('psicologos') || qNorm.includes('cabred') || qNorm.includes('masotta')) {
        synthesizedAnswer = `En el documento **"${bestDoc.title}"** se explica por qué Argentina tiene una de las mayores densidades de psicólogos del mundo:\n\n• **Pioneros del siglo XX:** Domingo Cabred creó colonias de "puertas abiertas" en Luján y Córdoba.\n• **Creación de la carrera (1957):** En Rosario y Buenos Aires se consolidó la formación universitaria autónoma.\n• **Auge Psicoanalítico:** Figuras como Oscar Masotta popularizaron a Jacques Lacan en los cafés y la cultura porteña.\n• **Marco Legal:** Ley Nacional de Salud Mental 26.657 hacia un modelo de derechos humanos.`;
      } else if (qNorm.includes('fatal five') || qNorm.includes('cinco fatales') || qNorm.includes('discapacidad')) {
        synthesizedAnswer = `En la guía **"${bestDoc.title}"** se explican **"The Fatal Five"** (causas médicas prevenibles frecuentemente enmascaradas por sesgo profesional en discapacidad intelectual):\n\n1. **Aspiración pulmonar** (disfagia).\n2. **Estreñimiento crónico e íleo paralítico** (riesgo de sepsis).\n3. **Deshidratación severa**.\n4. **Convulsiones no controladas**.\n5. **Sepsis** asociada a infecciones no comunicadas verbalmente.\n\n• Se recomienda el programa adaptado *Take It Personal!+* para la prevención de adicciones.`;
      } else if (qNorm.includes('bipolar') || qNorm.includes('litio') || qNorm.includes('mania')) {
        synthesizedAnswer = `De acuerdo con la guía **"${bestDoc.title}"**:\n\n• **Bipolar I vs Bipolar II:** Bipolar I requiere al menos un episodio maníaco completo (mínimo 7 días); Bipolar II presenta hipomanía (mínimo 4 días) y depresión mayor.\n• **Genética y Heredabilidad:** Entre 60% y 85% (gen ANK3 y BDNF).\n• **Litio:** Estándar de oro con comprobado efecto antisuicida y neuroprotector.\n• **Fenotipado Digital:** Sensores pasivos de sueño y dinámica de tecleo permiten predecir virajes con 3 a 7 días de anticipación.`;
      } else {
        synthesizedAnswer = `Encontré información relevante en el documento **"${bestDoc.title}"** (${bestDoc.category}):\n\n${bestDoc.shortSummary}\n\n**Punto Clave:** ${bestDoc.content.executiveSummary.slice(0, 240)}...`;
      }

      return {
        found: true,
        doc: bestDoc,
        excerpt: relevantExcerpt || bestDoc.shortSummary,
        answer: synthesizedAnswer,
      };
    }

    // 3. Fallback when not found in internal documents
    return {
      found: false,
      answer: `No encontré información directa sobre **"${rawQ}"** dentro de las 13 guías clínicas e históricas de nuestro portal de salud mental.\n\n¿Deseás que busquemos este tema en **Internet (Google)** para obtener resultados actualizados de fuentes externas?`,
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const q = (textToSend || inputQuery).trim();
    if (!q) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate natural thinking delay
    setTimeout(() => {
      const result = searchKnowledgeBase(q);

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: result.answer,
        timestamp: new Date(),
        matchedDoc: result.doc ? {
          id: result.doc.id,
          title: result.doc.title,
          category: result.doc.category,
          number: result.doc.number,
          relevantExcerpt: result.excerpt,
          keyStats: result.doc.keyStats?.slice(0, 2),
        } : undefined,
        offerWebSearch: !result.found && !result.isEmergency,
        searchQuery: q,
        isEmergencyAlert: result.isEmergency,
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      if (!isOpen) {
        setHasUnread(true);
      }
    }, 600);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: '¡Historial reiniciado! Estoy listo para tus preguntas sobre las 13 guías clínicas y la historia de la salud mental.',
        timestamp: new Date(),
      }
    ]);
  };

  const handleOpenGoogleSearch = (query: string) => {
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query + ' salud mental')}`;
    window.open(searchUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Floating Brain Icon Trigger Button */}
      <div 
        id="brain-assistant-trigger"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-3"
      >
        {/* Teaser pill / tooltip on closed state */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden md:flex items-center gap-2 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold px-3.5 py-2 rounded-full shadow-lg border border-teal-200/80 cursor-pointer hover:bg-teal-50 transition-all hover:scale-105 group"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600 animate-spin" />
            <span>¿Dudas sobre salud mental? <strong>Preguntale al Cerebro</strong></span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar asistente' : 'Abrir Cerebro Asistente de Salud Mental'}
          className={`relative group flex items-center justify-center rounded-2xl shadow-xl transition-all duration-300 cursor-pointer ${
            isOpen 
              ? 'w-13 h-13 bg-slate-900 text-white hover:bg-slate-800 ring-4 ring-slate-900/20' 
              : 'w-14 h-14 bg-gradient-to-tr from-teal-700 via-teal-600 to-emerald-500 text-white hover:from-teal-800 hover:to-emerald-600 ring-4 ring-teal-500/25 hover:ring-teal-500/40 hover:scale-105'
          }`}
        >
          {/* Animated Glow Rings when idle */}
          {!isOpen && (
            <span className="absolute -inset-1 rounded-2xl bg-teal-400 opacity-30 group-hover:opacity-50 blur-sm animate-pulse" />
          )}

          <div className="relative z-10 flex items-center justify-center">
            {isOpen ? (
              <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
            ) : (
              <div className="relative">
                <Brain className="w-7 h-7 text-white drop-shadow-sm animate-pulse" />
                {hasUnread && (
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white ring-2 ring-rose-300" />
                )}
              </div>
            )}
          </div>
        </button>
      </div>

      {/* Assistant Modal / Sliding Chat Window */}
      {isOpen && (
        <div 
          id="brain-assistant-modal"
          className={`fixed z-50 transition-all duration-300 ease-out flex flex-col bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden ${
            isExpanded
              ? 'inset-4 md:inset-10 max-w-4xl max-h-[85vh] mx-auto'
              : 'bottom-22 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-[440px] h-[580px] max-h-[calc(100vh-7rem)]'
          }`}
        >
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 px-5 py-4 text-white flex items-center justify-between border-b border-teal-800/60 shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-400 p-0.5 shadow-md flex items-center justify-center text-slate-900">
                <div className="w-full h-full bg-teal-950 rounded-[14px] flex items-center justify-center">
                  <Brain className="w-5 h-5 text-teal-300" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-teal-950" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                    <span>Cerebro Asistente</span>
                    <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md bg-teal-800/80 text-teal-200 border border-teal-700/50">
                    Docs IA
                  </span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Explorá las 13 guías clínicas e históricas
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearChat}
                title="Reiniciar chat"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                title={isExpanded ? 'Reducir tamaño' : 'Expandir ventana'}
                className="hidden sm:inline-flex p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>

              <button
                onClick={() => setIsOpen(false)}
                title="Cerrar asistente"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/70 text-slate-800 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] sm:max-w-[82%] rounded-2xl p-4 shadow-2xs leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-teal-700 text-white rounded-br-xs font-medium'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-xs'
                  }`}
                >
                  {/* Bot header inside message */}
                  {msg.sender === 'bot' && (
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-teal-800 mb-1.5 pb-1 border-b border-slate-100">
                      <Brain className="w-3.5 h-3.5 text-teal-600" />
                      <span>Respuesta Asistida</span>
                    </div>
                  )}

                  <div className="whitespace-pre-line leading-relaxed">
                    {msg.text}
                  </div>

                  {/* EMERGENCY ALERT CARD */}
                  {msg.isEmergencyAlert && (
                    <div className="mt-3 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-900 space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-xs">
                        <ShieldAlert className="w-4 h-4 text-rose-600" />
                        Línea de Crisis y Asistencia al Suicida (Argentina)
                      </div>
                      <p className="text-[11px] text-slate-700">
                        Atención anónima, pública y gratuita las 24 horas.
                      </p>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          onOpenEmergency();
                        }}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 bg-rose-600 hover:bg-rose-700 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer"
                      >
                        <PhoneCall className="w-3.5 h-3.5" />
                        Ver Teléfonos de Urgencia (Línea 135)
                      </button>
                    </div>
                  )}

                  {/* MATCHED DOCUMENT ACTION CARD */}
                  {msg.matchedDoc && (
                    <div className="mt-3.5 p-3 rounded-xl bg-teal-50/80 border border-teal-200 text-slate-800 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                          <span className="text-[11px] font-bold uppercase tracking-wider text-teal-900">
                            Documento Fuente:
                          </span>
                        </div>
                        {msg.matchedDoc.number && (
                          <span className="px-2 py-0.5 text-[10px] font-extrabold bg-teal-700 text-white rounded-md">
                            Guía #{msg.matchedDoc.number}
                          </span>
                        )}
                      </div>

                      <div className="font-bold text-xs text-slate-900">
                        {msg.matchedDoc.title}
                      </div>

                      <button
                        onClick={() => {
                          onSelectDocument(msg.matchedDoc!.id);
                          setIsOpen(false);
                        }}
                        className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-teal-800 hover:bg-teal-900 text-white rounded-lg font-bold text-xs shadow-2xs transition-all cursor-pointer group"
                      >
                        <span>Abrir Documento Completo</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </div>
                  )}

                  {/* WEB SEARCH OFFER CARD */}
                  {msg.offerWebSearch && msg.searchQuery && (
                    <div className="mt-3 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-slate-800 space-y-2.5">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                        <Globe className="w-4 h-4 text-amber-600" />
                        Búsqueda en Internet
                      </div>
                      <p className="text-[11px] text-slate-600">
                        Podés consultar información externa en Google sobre tu consulta:
                      </p>
                      <button
                        onClick={() => handleOpenGoogleSearch(msg.searchQuery!)}
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 bg-white hover:bg-amber-100 text-amber-900 font-bold text-xs border border-amber-300 rounded-lg shadow-2xs transition-all cursor-pointer"
                      >
                        <Search className="w-3.5 h-3.5 text-amber-700" />
                        <span>Buscar "{msg.searchQuery}" en Google</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </button>
                    </div>
                  )}
                </div>

                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 bg-white border border-slate-200 p-3 rounded-2xl rounded-bl-xs w-28 text-slate-400 shadow-2xs">
                <Brain className="w-4 h-4 text-teal-600 animate-spin" />
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-teal-500 rounded-full animate-bounce" />
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Chips */}
          <div className="bg-slate-100/90 border-t border-slate-200 px-4 py-2.5 overflow-x-auto whitespace-nowrap scrollbar-none flex items-center gap-1.5 text-xs">
            <span className="text-[10px] uppercase font-bold text-slate-400 shrink-0 flex items-center gap-1">
              <Lightbulb className="w-3 h-3 text-amber-500" />
              Sugerencias:
            </span>
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white hover:bg-teal-50 text-slate-700 hover:text-teal-900 border border-slate-200 hover:border-teal-300 text-[11px] font-medium shrink-0 transition-colors cursor-pointer"
              >
                <span>{prompt}</span>
                <ChevronRight className="w-2.5 h-2.5 text-slate-400" />
              </button>
            ))}
          </div>

          {/* Input & Form Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 sm:p-4 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Escribí tu pregunta sobre salud mental..."
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            />

            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="w-10 h-10 rounded-xl bg-teal-800 hover:bg-teal-900 disabled:bg-slate-200 text-white disabled:text-slate-400 flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed shrink-0 shadow-2xs"
              title="Enviar pregunta"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
