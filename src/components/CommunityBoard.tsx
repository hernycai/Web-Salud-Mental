import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  MessageSquareHeart, 
  PlusCircle, 
  ShieldCheck, 
  Tag, 
  Sparkles, 
  Filter, 
  Send, 
  X, 
  CheckCircle2,
  Lock,
  HeartHandshake
} from 'lucide-react';
import { CommentStory } from '../types';
import { INITIAL_COMMENTS } from '../data/initialComments';

interface CommunityBoardProps {
  onOpenEmergency: () => void;
}

export const CommunityBoard: React.FC<CommunityBoardProps> = ({ onOpenEmergency }) => {
  const [stories, setStories] = useState<CommentStory[]>(() => {
    const saved = localStorage.getItem('salud_mental_stories');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_COMMENTS;
      }
    }
    return INITIAL_COMMENTS;
  });

  const [filterCategory, setFilterCategory] = useState<string>('Todos');
  const [showModal, setShowModal] = useState(false);
  const [userLikes, setUserLikes] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('salud_mental_user_likes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return {};
      }
    }
    return {};
  });

  // New Story Form State
  const [authorAlias, setAuthorAlias] = useState('');
  const [conditionCategory, setConditionCategory] = useState('Trastornos de Ansiedad');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [acceptedGuidelines, setAcceptedGuidelines] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    localStorage.setItem('salud_mental_stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    localStorage.setItem('salud_mental_user_likes', JSON.stringify(userLikes));
  }, [userLikes]);

  const categories = [
    'Todos',
    'Trastornos de Ansiedad',
    'Depresión',
    'TDAH',
    'Estrés Postraumático (TEPT)',
    'Esquizofrenia y Psicosis',
    'Trastorno Bipolar',
    'Autismo (TEA)',
    'Trastornos de la Conducta Alimentaria',
    'Discapacidad y Adicciones',
    'Familiares y Cuidadores',
  ];

  const filteredStories = filterCategory === 'Todos'
    ? stories
    : stories.filter(s => s.conditionCategory === filterCategory);

  const handleLike = (storyId: string) => {
    const alreadyLiked = userLikes[storyId];
    setUserLikes(prev => ({ ...prev, [storyId]: !alreadyLiked }));
    setStories(prev => prev.map(s => {
      if (s.id === storyId) {
        return { ...s, likes: alreadyLiked ? s.likes - 1 : s.likes + 1 };
      }
      return s;
    }));
  };

  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !story.trim() || !acceptedGuidelines) return;

    const newTags = tagsInput
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    const newStory: CommentStory = {
      id: `story-${Date.now()}`,
      authorAlias: authorAlias.trim() || 'Anónimo',
      conditionCategory,
      title: title.trim(),
      story: story.trim(),
      timestamp: 'Recién publicado',
      likes: 1,
      tags: newTags.length > 0 ? newTags : ['Experiencia Personal', 'Comunidad'],
      isVerifiedSafe: true,
    };

    setStories([newStory, ...stories]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setShowModal(false);
      // Reset form
      setAuthorAlias('');
      setTitle('');
      setStory('');
      setTagsInput('');
      setAcceptedGuidelines(false);
    }, 1200);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-in fade-in duration-200">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-3">
          <MessageSquareHeart className="w-4 h-4 text-rose-500" />
          Espacio de Relatos & Testimonios
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Board de Experiencias Comunitarias
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
          Un espacio seguro y anónimo para compartir historias de superación, convivencia con condiciones de salud mental y apoyo a familiares, sin debates ni juicios.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            id="open-share-story-modal-btn"
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-all shadow-xs cursor-pointer hover:scale-[1.02]"
          >
            <PlusCircle className="w-4 h-4" />
            Compartir mi Testimonio (Anónimo)
          </button>

          <button
            onClick={onOpenEmergency}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 font-semibold text-xs border border-rose-200 transition-colors"
          >
            <HeartHandshake className="w-4 h-4 text-rose-600" />
            Líneas de Crisis 24/7
          </button>
        </div>
      </div>

      {/* Ethical Protocol Notice */}
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 text-xs text-slate-600 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900 block mb-0.5">
            Pilar Ético y de Seguridad del Espacio:
          </span>
          Este módulo está diseñado exclusivamente para la libre expresión de vivencias personales respetuosas. Promovemos el uso de lenguaje no estigmatizante (por ej. "persona con trastorno") y filtramos cualquier contenido que incite a conductas de riesgo o autolesiones.
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-teal-700" />
          Filtrar por Condición o Rol:
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                filterCategory === cat
                  ? 'bg-teal-800 text-white shadow-2xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Stories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredStories.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-teal-50 text-teal-800 border border-teal-200">
                  {item.conditionCategory}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {item.timestamp}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                "{item.story}"
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {item.tags.map((tag, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1 text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                    <Tag className="w-2.5 h-2.5 text-slate-400" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                <Lock className="w-3 h-3 text-slate-400" />
                <span>Por: <strong className="text-slate-800">{item.authorAlias}</strong></span>
              </div>

              <button
                onClick={() => handleLike(item.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer ${
                  userLikes[item.id]
                    ? 'bg-rose-50 text-rose-700 border border-rose-200'
                    : 'bg-slate-50 text-slate-600 hover:bg-rose-50 hover:text-rose-600'
                }`}
                title="Apoyar este testimonio"
              >
                <Heart className={`w-3.5 h-3.5 ${userLikes[item.id] ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span>{item.likes} {item.likes === 1 ? 'apoyo' : 'apoyos'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-2xl border border-slate-200">
          <p className="text-sm font-medium text-slate-600">
            No se encontraron testimonios para esta categoría todavía.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="mt-3 text-xs font-bold text-teal-800 hover:underline"
          >
            ¡Sé el primero en compartir tu experiencia!
          </button>
        </div>
      )}

      {/* MODAL: SUBMIT STORY */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Compartí tu Historia de Forma Anónima
                </h2>
                <p className="text-xs text-slate-500">
                  Tu experiencia puede inspirar y brindar alivio a quienes pasan por lo mismo.
                </p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto animate-bounce" />
                <h3 className="text-lg font-bold text-slate-900">¡Gracias por tu testimonio!</h3>
                <p className="text-xs text-slate-600">
                  Tu historia ha sido agregada exitosamente al board comunitario.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateStory} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Pseudónimo / Firma Anónima:
                  </label>
                  <input
                    type="text"
                    value={authorAlias}
                    onChange={(e) => setAuthorAlias(e.target.value)}
                    placeholder="Ej: Anónimo (Rosario), Persona en recuperación, Mamá cuidadora..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                    maxLength={50}
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Tema o Condición Relacionada:
                  </label>
                  <select
                    value={conditionCategory}
                    onChange={(e) => setConditionCategory(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 outline-none bg-white"
                  >
                    {categories.filter(c => c !== 'Todos').map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Título de tu Experiencia:
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Ej: Lo que aprendí al superar mis crisis de pánico..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Tu Historia o Mensaje de Apoyo:
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                    placeholder="Contá cómo fue tu proceso, qué te ayudó, qué herramientas te resultaron útiles o un mensaje de aliento para otros..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 outline-none resize-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-800 mb-1">
                    Etiquetas / Palabras clave (separadas por coma):
                  </label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="Ej: Superación, TCC, Acompañamiento, Familia"
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-teal-600 outline-none"
                  />
                </div>

                {/* Safety & Guidelines Check */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      checked={acceptedGuidelines}
                      onChange={(e) => setAcceptedGuidelines(e.target.checked)}
                      className="mt-0.5 rounded text-teal-700 focus:ring-teal-500"
                    />
                    <span className="text-[11px] text-slate-600 leading-tight">
                      Acepto las pautas éticas del espacio: me comprometo a expresarme con respeto, no difundir métodos de autolesión ni lenguaje estigmatizante, entendiendo que este espacio no reemplaza una consulta médica.
                    </span>
                  </label>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-xl transition-colors font-medium text-xs sm:text-sm"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={!acceptedGuidelines}
                    className="inline-flex items-center gap-1.5 px-5 py-2 bg-teal-800 hover:bg-teal-900 disabled:opacity-50 text-white rounded-xl font-semibold text-xs sm:text-sm transition-all"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Publicar Testimonio
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
