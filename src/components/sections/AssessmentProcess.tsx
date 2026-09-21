"use client";

import * as React from "react";
import { ArrowRight, ClipboardList, PenTool, BarChart3, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AssessmentProcess() {
  const steps = [
    {
      step: "01",
      title: "Daftar Asesmen",
      description:
        "Isi formulir atau hubungi penyedia layanan untuk mendapatkan informasi mengenai jadwal, biaya, dan ketentuan asesmen.",
      icon: ClipboardList,
    },
    {
      step: "02",
      title: "Ikuti Asesmen",
      description:
        "Ikuti proses pemetaan bakat menggunakan instrumen dan prosedur yang ditentukan oleh penyedia layanan.",
      icon: PenTool,
    },
    {
      step: "03",
      title: "Pahami Hasil",
      description:
        "Pelajari hasil pemetaan bakat beserta penjelasan mengenai kecenderungan bakat yang teridentifikasi.",
      icon: BarChart3,
    },
    {
      step: "04",
      title: "Kembangkan Potensi",
      description:
        "Gunakan hasil asesmen sebagai bahan refleksi untuk menentukan langkah pengembangan diri.",
      icon: Rocket,
    },
  ];

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="assessment" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            Alur Langkah
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Bagaimana Cara Mengenali Bakatmu?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Empat langkah sederhana untuk memulai eksplorasi potensi dan kekuatan diri
            secara terstruktur.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="relative mb-14">
          {/* Horizontal Line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -translate-y-8 -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center p-6 sm:p-7 rounded-3xl bg-brand-bg border border-slate-200/70 hover:border-brand-blue/40 transition-all duration-300 hover:shadow-subtle group"
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white border-2 border-slate-200 text-navy-900 flex items-center justify-center shadow-subtle group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900 transition-all duration-300">
                      <Icon className="w-7 h-7 text-brand-blue group-hover:text-accent-yellow transition-colors" />
                    </div>
                    <span className="absolute -top-2 -right-2 bg-accent-yellow text-navy-900 font-extrabold text-xs px-2 py-0.5 rounded-full shadow-sm">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-navy-900 mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={scrollToRegister}
            className="group inline-flex items-center gap-2 shadow-card"
          >
            <span>Daftar Asesmen Sekarang</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
}
