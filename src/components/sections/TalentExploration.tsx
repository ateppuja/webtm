"use client";

import * as React from "react";
import { Brain, MessagesSquare, Lightbulb, ListChecks, CheckCircle2, Sparkles, AlertCircle } from "lucide-react";
import { talentsData } from "@/data/talents";
import { cn } from "@/lib/utils";

export function TalentExploration() {
  const [selectedTalentId, setSelectedTalentId] = React.useState(talentsData[0].id);

  const selectedTalent =
    talentsData.find((t) => t.id === selectedTalentId) || talentsData[0];

  const getIcon = (name: string, className?: string) => {
    switch (name) {
      case "Brain":
        return <Brain className={className} />;
      case "MessagesSquare":
        return <MessagesSquare className={className} />;
      case "Lightbulb":
        return <Lightbulb className={className} />;
      case "ListChecks":
        return <ListChecks className={className} />;
      default:
        return <Sparkles className={className} />;
    }
  };

  return (
    <section id="talents" className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            Eksplorasi Ragam Bakat
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Setiap Orang Memiliki Kombinasi Bakat yang Berbeda
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Jelajahi beberapa contoh kecenderungan aktivitas untuk mulai memahami
            bagaimana bakat dapat terlihat dalam kehidupan sehari-hari.
          </p>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          {talentsData.map((talent) => {
            const isSelected = talent.id === selectedTalentId;
            return (
              <button
                key={talent.id}
                type="button"
                onClick={() => setSelectedTalentId(talent.id)}
                className={cn(
                  "flex flex-col text-left p-6 rounded-3xl border transition-all duration-300 relative focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 min-h-[160px]",
                  isSelected
                    ? "bg-navy-900 text-white border-navy-900 shadow-elevated -translate-y-1 scale-[1.02]"
                    : "bg-white text-navy-900 border-slate-200 hover:border-brand-blue/50 hover:shadow-subtle hover:-translate-y-0.5"
                )}
                aria-pressed={isSelected}
              >
                {/* Active Indicator Pin */}
                {isSelected && (
                  <span className="absolute top-4 right-4 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-yellow opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-yellow" />
                  </span>
                )}

                <div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-colors",
                    isSelected
                      ? "bg-white/10 text-accent-yellow"
                      : `${talent.bgLight} text-brand-blue`
                  )}
                >
                  {getIcon(talent.iconName, "w-6 h-6")}
                </div>

                <h3
                  className={cn(
                    "font-heading font-bold text-lg mb-1.5",
                    isSelected ? "text-white" : "text-navy-900"
                  )}
                >
                  {talent.title}
                </h3>

                <p
                  className={cn(
                    "text-xs line-clamp-2",
                    isSelected ? "text-slate-300" : "text-text-secondary"
                  )}
                >
                  {talent.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Talent Detail Pane */}
        <div className="rounded-3xl bg-brand-bg border border-slate-200/80 p-6 sm:p-10 shadow-card transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Detail Icon & Title */}
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue bg-white border border-blue-100 rounded-full px-3 py-1">
                <span>Kategori Terpilih</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-navy-900 text-accent-yellow flex items-center justify-center flex-shrink-0 shadow-subtle">
                  {getIcon(selectedTalent.iconName, "w-8 h-8")}
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-navy-900">
                    {selectedTalent.title}
                  </h3>
                  <span className="text-xs text-text-secondary">
                    Kecenderungan Aktivitas Alami
                  </span>
                </div>
              </div>
              <p className="text-text-secondary text-base leading-relaxed">
                {selectedTalent.description}
              </p>
            </div>

            {/* Right: Example Activities */}
            <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 shadow-subtle space-y-4">
              <h4 className="font-heading font-bold text-navy-900 text-base flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent-yellow" />
                Contoh Aktivitas yang Sering Dinikmati:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedTalent.activities.map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-text-primary text-sm font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/70 text-text-secondary text-xs leading-relaxed max-w-4xl mx-auto">
          <AlertCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <p>
            <strong>Catatan Edukatif:</strong> Kategori di atas merupakan ilustrasi edukatif untuk membantu memahami kecenderungan aktivitas, bukan klasifikasi resmi atau hasil asesmen Talents Mapping.
          </p>
        </div>
      </div>
    </section>
  );
}
