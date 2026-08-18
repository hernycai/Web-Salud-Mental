import React from 'react';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { DocumentSection } from '../types';

interface DocumentCardProps {
  doc: DocumentSection;
  onSelect: (docId: string) => void;
}

export const DocumentCard: React.FC<DocumentCardProps> = ({
  doc,
  onSelect,
}) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Historia Global':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Historia Argentina':
        return 'bg-sky-50 text-sky-800 border-sky-200';
      case 'Epidemiología':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      default:
        return 'bg-teal-50 text-teal-800 border-teal-200';
    }
  };

  return (
    <div 
      id={`doc-card-${doc.id}`}
      className="flex flex-col justify-between bg-white rounded-2xl border border-slate-200/90 hover:border-teal-400/80 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden group"
    >
      <div className="p-5 sm:p-6 flex-1 flex flex-col">
        {/* Top Badges & Meta */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {doc.number && (
              <span className="w-6 h-6 rounded-full bg-teal-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                {doc.number}
              </span>
            )}
            <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md border ${getCategoryColor(doc.category)}`}>
              {doc.category}
            </span>
          </div>

          <div className="flex items-center gap-1 text-[11px] font-medium text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            {doc.readTime}
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 
          onClick={() => onSelect(doc.id)}
          className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors cursor-pointer line-clamp-2"
        >
          {doc.title}
        </h3>
        <p className="text-xs font-medium text-slate-500 mt-1 line-clamp-1 mb-3">
          {doc.subtitle}
        </p>

        {/* Short Summary */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
          {doc.shortSummary}
        </p>

        {/* Key Highlights / Stats Chips */}
        {doc.keyStats && doc.keyStats.length > 0 && (
          <div className="grid grid-cols-2 gap-2 my-auto pt-2 pb-3 border-t border-slate-100">
            {doc.keyStats.slice(0, 2).map((stat, idx) => (
              <div key={idx} className="bg-slate-50 rounded-lg p-2 border border-slate-150">
                <div className="text-xs font-bold text-slate-900 leading-tight truncate">
                  {stat.value}
                </div>
                <div className="text-[10px] text-slate-500 font-medium truncate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {doc.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="inline-flex items-center gap-1 text-[10px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
              <Tag className="w-2.5 h-2.5 text-slate-400" />
              {tag}
            </span>
          ))}
          {doc.tags.length > 3 && (
            <span className="text-[10px] text-slate-400 self-center">
              +{doc.tags.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-end">
        <button
          onClick={() => onSelect(doc.id)}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold text-teal-800 hover:text-white bg-teal-50 hover:bg-teal-700 border border-teal-200 hover:border-teal-700 py-2 px-4 rounded-xl transition-all cursor-pointer shadow-2xs group-hover:translate-x-0.5"
        >
          <span>Leer Guía Completa</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
