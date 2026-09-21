"use client";

import * as React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqsData } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = React.useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            FAQ
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Temukan jawaban atas pertanyaan umum seputar konsep, asesmen, dan manfaat
            pendekatan Talents Mapping.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-content-${faq.id}`;
            const headerId = `faq-header-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={cn(
                  "rounded-2xl border transition-all duration-200 bg-white overflow-hidden shadow-subtle",
                  isOpen ? "border-brand-blue/40 ring-1 ring-brand-blue/20" : "border-slate-200/80"
                )}
              >
                <button
                  type="button"
                  id={headerId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue select-none cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className={cn(
                        "w-5 h-5 flex-shrink-0 transition-colors",
                        isOpen ? "text-brand-blue" : "text-slate-400"
                      )}
                    />
                    <span className="font-heading font-bold text-base sm:text-lg text-navy-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-slate-500 transition-transform duration-300 flex-shrink-0",
                      isOpen && "rotate-180 text-brand-blue"
                    )}
                  />
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={headerId}
                    className="px-6 pb-6 pt-1 border-t border-slate-100 text-text-secondary text-sm sm:text-base leading-relaxed animate-in fade-in-50 duration-200"
                  >
                    <p className="pt-2">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
