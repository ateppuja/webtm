"use client";

import * as React from "react";
import { ArrowRight, Compass, Sparkles, CheckCircle2, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-brand-bg via-white to-brand-bg"
    >
      {/* Decorative background blurs */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 right-10 w-72 h-72 bg-accent-yellow/15 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/60 rounded-full px-4 py-1.5 w-fit">
              <Sparkles className="w-4 h-4 text-brand-blue" />
              <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                Eksplorasi Potensi Diri
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[54px] text-navy-900 leading-[1.15] tracking-tight">
              Kenali Bakatmu, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-navy-900 to-navy-700">
                Temukan Potensi Terbaikmu.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-text-secondary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Setiap orang memiliki kombinasi bakat yang unik. Mulai perjalanan
              mengenali kekuatan diri melalui pendekatan Talents Mapping dan
              temukan cara mengembangkan potensi terbaikmu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollTo("register")}
                className="group flex items-center justify-center gap-2 shadow-card"
              >
                <span>Kenali Bakat Saya</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo("about")}
                className="flex items-center justify-center"
              >
                Pelajari Lebih Lanjut
              </Button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-text-secondary font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Pendekatan Ilmiah & Aplikatif</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Pemetaan Pola Kekuatan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Refleksi Pengembangan Diri</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual & Floating Cards */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Visual Card */}
            <div className="relative w-full max-w-[460px] aspect-[4/4.5] rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-brand-blue p-7 text-white shadow-2xl flex flex-col justify-between overflow-hidden">
              {/* Subtle background circles */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-accent-yellow/20 rounded-full blur-xl" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-brand-blue/30 rounded-full blur-xl" />

              {/* Header inside card */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <Compass className="w-5 h-5 text-accent-yellow" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
                    Peta Bakat Pribadi
                  </span>
                </div>
                <span className="text-xs bg-accent-yellow text-navy-900 font-bold px-2.5 py-1 rounded-full">
                  Unik & Personal
                </span>
              </div>

              {/* Interactive Radar/Visual Graphic Representation */}
              <div className="relative z-10 my-auto py-6 flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-dashed border-white/30 flex items-center justify-center animate-[spin_40s_linear_infinite]">
                    <div className="w-20 h-20 rounded-full bg-accent-yellow/10 border border-accent-yellow/40 flex items-center justify-center">
                      <Zap className="w-8 h-8 text-accent-yellow" />
                    </div>
                  </div>

                  {/* Satellite indicators */}
                  <div className="absolute top-2 left-8 bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Analitis
                  </div>
                  <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Komunikasi
                  </div>
                  <div className="absolute top-6 right-4 bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Inovasi
                  </div>
                  <div className="absolute bottom-6 right-8 bg-white/90 backdrop-blur-sm text-navy-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    Organisasi
                  </div>
                </div>
              </div>

              {/* Bottom stats inside card */}
              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-white/15 text-left">
                <div>
                  <div className="text-xs text-slate-300">Fokus Pendekatan</div>
                  <div className="text-sm font-bold text-white">Kekuatan Diri</div>
                </div>
                <div>
                  <div className="text-xs text-slate-300">Hasil Pemetaan</div>
                  <div className="text-sm font-bold text-accent-yellow">Pola Alami</div>
                </div>
              </div>
            </div>

            {/* Floating badge 1: Top Right */}
            <div className="absolute -top-4 -right-2 sm:-right-4 bg-white p-3.5 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3 hidden sm:flex animate-[bounce_5s_ease-in-out_infinite]">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-navy-900">Kenali Potensi</div>
                <div className="text-[11px] text-text-secondary">Fokus pada kekuatan</div>
              </div>
            </div>

            {/* Floating badge 2: Bottom Left */}
            <div className="absolute -bottom-5 -left-2 sm:-left-4 bg-white p-3.5 rounded-2xl shadow-elevated border border-slate-100 flex items-center gap-3 hidden sm:flex">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-blue">
                <Compass className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-navy-900">Arah Langkah</div>
                <div className="text-[11px] text-text-secondary">Karier & pendidikan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
