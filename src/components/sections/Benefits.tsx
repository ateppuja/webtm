import * as React from "react";
import { User, GraduationCap, Briefcase, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      title: "Pemahaman Diri",
      description:
        "Memperoleh gambaran mengenai kecenderungan dan potensi personal yang membentuk cara berpikir dan bertindak.",
      icon: User,
      color: "text-brand-blue",
      bgColor: "bg-blue-50",
    },
    {
      title: "Eksplorasi Pendidikan",
      description:
        "Menggunakan pemahaman diri sebagai salah satu bahan pertimbangan dalam memilih aktivitas dan bidang pendidikan yang tepat.",
      icon: GraduationCap,
      color: "text-navy-900",
      bgColor: "bg-slate-100",
    },
    {
      title: "Pengembangan Karier",
      description:
        "Mengeksplorasi bidang pekerjaan dan aktivitas profesional yang berkaitan dengan kecenderungan bakat alami.",
      icon: Briefcase,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
    {
      title: "Pengembangan Keterampilan",
      description:
        "Mengidentifikasi aktivitas dan keterampilan yang paling relevan dan berdampak tinggi untuk terus diasah.",
      icon: Wrench,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section id="benefits" className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            Manfaat Pemetaan
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Apa yang Bisa Kamu Dapatkan dengan Mengenali Bakat?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Mengetahui bakat membuka jalan untuk pertumbuhan diri yang lebih terarah,
            efektif, dan memuaskan di berbagai fase kehidupan.
          </p>
        </div>

        {/* 4-Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                hoverable
                className="p-7 rounded-3xl border-slate-100 bg-white shadow-subtle flex flex-col justify-between"
              >
                <CardContent className="p-0 space-y-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-navy-900">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
