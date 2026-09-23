"use client";

import * as React from "react";
import Image from "next/image";
import {
  FileText,
  Brain,
  Network,
  Maximize2,
  X,
  CheckCircle2,
  ArrowRight,
  Info,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SampleReportItem {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  icon: React.ElementType;
  description: string;
  keyInsights: {
    title: string;
    points: string[];
  };
  colorGuide?: {
    color: string;
    label: string;
    meaning: string;
  }[];
}

const sampleReports: SampleReportItem[] = [
  {
    id: "urutan-bakat",
    tabLabel: "1. Urutan Bakat",
    title: "Urutan Bakat (Ranking 34 Tema)",
    subtitle:
      "Memetakan secara presisi peringkat dominasi 34 tema bakat alami Anda dari nomor 1 hingga 34.",
    imageSrc: "/images/sample-results/urutan-bakat.png",
    icon: FileText,
    description:
      "Laporan Urutan Bakat menyusun seluruh 34 tema bakat secara berurutan. Pendekatan ini membantu Anda mengetahui kekuatan utama yang perlu difokuskan tanpa harus terjebak memaksakan bakat yang bukan kekuatan alami Anda.",
    keyInsights: {
      title: "Struktur Urutan Bakat:",
      points: [
        "Nomor 1 - 7 (Top Talents / Bakat Kuat): Bakat dominan yang berjalan alami, spontan, dan memberikan energi terbesar dalam produktivitas.",
        "Nomor 8 - 14 (Supporting Talents / Bakat Pendukung): Bakat yang dapat diasah untuk memperkuat efektivitas peran dan profesi.",
        "Nomor 28 - 34 (Lesser Talents / Bakat Lemah): Keterbatasan alami yang disiasati dengan delegasi, kolaborasi, atau sistem, bukan dengan dipaksakan.",
      ],
    },
  },
  {
    id: "peta-bakat",
    tabLabel: "2. Peta Bakat (4 Domain)",
    title: "Peta Bakat (Mindmap 4 Domain Utama)",
    subtitle:
      "Visualisasi persebaran 34 bakat ke dalam 4 domain aktivitas: Thinking, Influencing, Relating, dan Striving.",
    imageSrc: "/images/sample-results/peta-bakat.png",
    icon: Brain,
    description:
      "Peta Bakat memetakan pola kepribadian produktif ke dalam 4 kuadran kerja. Setiap tema bakat dilengkapi penanda warna khusus untuk membaca kecenderungan alami dalam berpikir, berinteraksi, dan bertindak.",
    keyInsights: {
      title: "4 Domain Talents Mapping:",
      points: [
        "Thinking (Berpikir): Kecenderungan memproses informasi, analisa data, strategi, dan visi masa depan (Right Brain & Left Brain).",
        "Influencing (Mempengaruhi): Dorongan untuk memimpin, mempersuasi orang lain, dan menggerakkan perubahan.",
        "Relating (Menjalin Relasi): Kemampuan membangun keharmonisan, memahami orang lain, dan memelihara hubungan kerja tim.",
        "Striving (Dorongan Kerja): Energi eksekusi, daya juang, kedisiplinan, dan tanggung jawab dalam menuntaskan tugas.",
      ],
    },
    colorGuide: [
      {
        color: "bg-red-500",
        label: "Merah",
        meaning: "Bakat Kuat (Sangat dominan, alami, & sering muncul)",
      },
      {
        color: "bg-amber-400",
        label: "Kuning",
        meaning: "Bakat Pendukung (Bisa diandalkan saat dibutuhkan)",
      },
      {
        color: "bg-slate-200 border border-slate-400",
        label: "Putih",
        meaning: "Bakat Netral / Rata-rata",
      },
      {
        color: "bg-slate-800",
        label: "Hitam / Abu",
        meaning: "Bakat Lemah (Kurang alami, perlu disiasati)",
      },
    ],
  },
  {
    id: "strength-cluster-map",
    tabLabel: "3. Strength Cluster Map",
    title: "Strength Cluster Map (Peta Klaster Kekuatan)",
    subtitle:
      "Menghubungkan bakat alami dengan tipologi peran kerja dan aktivitas produktif di dunia nyata.",
    imageSrc: "/images/sample-results/strength-cluster-map.png",
    icon: Network,
    description:
      "Strength Cluster Map (SCM) memetakan ragam peran fungsional kerja (seperti Advising, Strategizing, Analyzing, Marketing, Project Managing, dll) ke dalam klaster tipologi kekuatan untuk rekomendasi karier dan jurusan yang aplikatif.",
    keyInsights: {
      title: "Klaster Tipologi Kekuatan:",
      points: [
        "H (Head) & S (Servicing): Kepemimpinan strategis vs pelayanan & dukungan tulus.",
        "Gi (Generating Ideas) & Te (Technical): Inovasi kreatif vs keahlian spesialis teknis mendalam.",
        "E (Enterprising) & R (Reasoning): Kewirausahaan & komersial vs analisis rasional & riset.",
        "T (Treking) & N (Networking): Kerja lapangan & eksplorasi vs diplomasi & perluasan jejaring relasi.",
      ],
    },
  },
];

export function SampleAssessmentResults() {
  const [activeTabId, setActiveTabId] = React.useState<string>("urutan-bakat");
  const [lightboxImage, setLightboxImage] = React.useState<{
    src: string;
    title: string;
  } | null>(null);

  const activeReport =
    sampleReports.find((r) => r.id === activeTabId) || sampleReports[0];

  const scrollToRegister = () => {
    const el = document.getElementById("register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close lightbox on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="sample-results" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            <Sparkles className="w-4 h-4 text-accent-yellow" />
            <span>Contoh Hasil Laporan</span>
          </div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Seperti Apa Hasil Asesmen Talents Mapping yang Akan Kamu Dapatkan?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Berikut adalah gambaran laporan komprehensif yang memetakan potensi
            kekuatan, urutan 34 bakat alami, hingga klaster tipologi peran kerja
            Anda.
          </p>
        </div>

        {/* Tab Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sampleReports.map((report) => {
            const isActive = report.id === activeTabId;
            const Icon = report.icon;
            return (
              <button
                key={report.id}
                type="button"
                onClick={() => setActiveTabId(report.id)}
                className={cn(
                  "flex items-center gap-2.5 px-5 py-3 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 border select-none cursor-pointer min-h-[44px]",
                  isActive
                    ? "bg-navy-900 text-white border-navy-900 shadow-elevated scale-[1.02]"
                    : "bg-brand-bg text-text-primary border-slate-200 hover:border-brand-blue/40 hover:bg-slate-100"
                )}
                aria-pressed={isActive}
              >
                <Icon
                  className={cn(
                    "w-4 h-4",
                    isActive ? "text-accent-yellow" : "text-brand-blue"
                  )}
                />
                <span>{report.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-brand-bg border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left: Interactive Image with Zoom feature */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div
                onClick={() =>
                  setLightboxImage({
                    src: activeReport.imageSrc,
                    title: activeReport.title,
                  })
                }
                className="relative w-full max-w-[480px] bg-white rounded-2xl p-3 border border-slate-200 shadow-subtle group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-elevated hover:border-brand-blue/50"
              >
                <div className="relative aspect-[4/4.2] w-full bg-slate-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <Image
                    src={activeReport.imageSrc}
                    alt={activeReport.title}
                    fill
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 480px"
                    priority
                  />
                  {/* Zoom Overlay Banner */}
                  <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-semibold text-sm backdrop-blur-[2px]">
                    <Maximize2 className="w-5 h-5 text-accent-yellow" />
                    <span>Klik untuk Memperbesar</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between px-2 text-xs text-text-secondary">
                  <span className="font-medium text-navy-900">
                    Format Resmi Dokumen Laporan
                  </span>
                  <span className="inline-flex items-center gap-1 text-brand-blue hover:underline">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Perbesar Tampilan
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Explanatory Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-white border border-blue-100 rounded-full px-3 py-1">
                  Interpretasi Hasil
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-navy-900 mt-2">
                  {activeReport.title}
                </h3>
                <p className="text-text-secondary text-sm sm:text-base mt-2 leading-relaxed">
                  {activeReport.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-2xl border border-slate-100 shadow-subtle">
                {activeReport.description}
              </p>

              {/* Color Guide (for Peta Bakat) */}
              {activeReport.colorGuide && (
                <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-subtle space-y-3">
                  <h4 className="font-heading font-bold text-sm text-navy-900 flex items-center gap-2">
                    <Info className="w-4 h-4 text-brand-blue" />
                    Arti Kode Warna Pada Laporan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeReport.colorGuide.map((guide, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-text-primary p-2 rounded-lg bg-slate-50"
                      >
                        <span
                          className={`w-3.5 h-3.5 rounded-full flex-shrink-0 ${guide.color}`}
                        />
                        <div>
                          <strong className="text-navy-900">{guide.label}</strong>:{" "}
                          <span className="text-text-secondary">
                            {guide.meaning}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Insights List */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-navy-900">
                  {activeReport.keyInsights.title}
                </h4>
                <div className="space-y-2">
                  {activeReport.keyInsights.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-text-secondary"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Action */}
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={scrollToRegister}
                  className="group flex items-center gap-2 shadow-card"
                >
                  <span>Dapatkan Peta Bakatmu Sekarang</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 flex items-start gap-3 p-4 rounded-2xl bg-blue-50/60 border border-blue-100 text-text-secondary text-xs leading-relaxed max-w-4xl mx-auto">
          <Info className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
          <p>
            <strong>Catatan:</strong> Gambar di atas merupakan contoh ilustrasi
            hasil laporan asesmen Talents Mapping. Laporan resmi setiap individu
            akan menampilkan pola kekuatan unik sesuai kepribadian produktif
            masing-masing peserta setelah melalui tahapan pemetaan.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-heading font-bold text-lg text-navy-900">
                {lightboxImage.title}
              </h3>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-navy-900 hover:bg-slate-100 transition-colors"
                aria-label="Tutup pratinjau"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] my-3">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1000px"
              />
            </div>

            {/* Modal Footer */}
            <div className="pt-2 flex justify-between items-center text-xs text-text-secondary">
              <span>Gunakan tombol Esc atau klik di luar untuk menutup.</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setLightboxImage(null)}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
