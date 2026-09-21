"use client";

import * as React from "react";
import { CheckCircle, ArrowRight, BookOpen, Target, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutTalentsMapping() {
  const scrollToAssessment = () => {
    const el = document.getElementById("assessment");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const keyPoints = [
    {
      title: "Mengenali kecenderungan bakat",
      description:
        "Memahami pola alami dalam cara berpikir, merasa, dan berperilaku yang konsisten dalam keseharian.",
    },
    {
      title: "Memahami pola kekuatan personal",
      description:
        "Mengidentifikasi aktivitas yang mendatangkan produktivitas, kepuasan, dan energi positif bagi diri Anda.",
    },
    {
      title: "Mengeksplorasi langkah pengembangan diri",
      description:
        "Menyusun rencana pertumbuhan yang berlandaskan pada keunikan alami, bukan sekadar meniru orang lain.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-brand-bg relative">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Column Left: Visual / Illustration */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="rounded-3xl bg-white p-8 shadow-card border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-0" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-navy-900 text-white flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-accent-yellow" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold text-brand-blue uppercase tracking-wider">
                    Konsep Pendekatan
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-navy-900">
                    Bukan Sekadar Tes, Tapi Pemetaan Potensi
                  </h3>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed">
                  Talents Mapping berfokus pada apa yang benar-benar menjadi kekuatan alami Anda,
                  membantu Anda mengarahkan energi pada aktivitas yang memberikan hasil terbaik.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-brand-blue flex items-center justify-center font-bold text-xs">
                      01
                    </div>
                    <span className="text-xs font-semibold text-navy-900">
                      Refleksi Perilaku Alami
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs">
                      02
                    </div>
                    <span className="text-xs font-semibold text-navy-900">
                      Pemetaan Tipologi Kekuatan
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                      03
                    </div>
                    <span className="text-xs font-semibold text-navy-900">
                      Rencana Aksi Personal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Copy & Key Points */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1 w-fit">
              Tentang Pendekatan
            </span>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
              Mengenal Talents Mapping
            </h2>

            <div className="space-y-4 text-text-secondary text-base sm:text-lg leading-relaxed">
              <p>
                Talents Mapping merupakan pendekatan pemetaan bakat yang membantu individu mengenali
                pola kecenderungan bakat dan memahami potensi kekuatan dirinya.
              </p>
              <p className="text-sm sm:text-base text-slate-600">
                Melalui proses asesmen dan interpretasi, peserta dapat memperoleh gambaran mengenai
                kecenderungan bakat yang dapat digunakan sebagai bahan refleksi dan pengembangan diri.
              </p>
            </div>

            {/* 3 Key Points */}
            <div className="space-y-4 pt-2">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-navy-900">
                      {point.title}
                    </h4>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Note & CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button
                variant="navy"
                size="md"
                onClick={scrollToAssessment}
                className="group flex items-center gap-2"
              >
                <span>Pelajari Proses Asesmen</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <span className="text-xs text-text-secondary italic">
                *Bukan untuk menentukan masa depan secara mutlak, melainkan sarana refleksi objektif.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
