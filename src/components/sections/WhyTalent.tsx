import * as React from "react";
import { UserCheck, Compass, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function WhyTalent() {
  const cards = [
    {
      title: "Memahami Diri Sendiri",
      description:
        "Kenali kecenderungan berpikir, beraktivitas, dan berinteraksi yang menjadi bagian dari keunikan dirimu.",
      icon: UserCheck,
      color: "text-brand-blue",
      bgColor: "bg-blue-50",
    },
    {
      title: "Mengeksplorasi Arah Pengembangan",
      description:
        "Gunakan pemahaman tentang bakat sebagai salah satu pertimbangan dalam pendidikan, pekerjaan, dan pengembangan keterampilan.",
      icon: Compass,
      color: "text-navy-900",
      bgColor: "bg-slate-100",
    },
    {
      title: "Mengembangkan Kekuatan Personal",
      description:
        "Temukan aktivitas dan kebiasaan yang dapat membantu mengembangkan potensi serta keterampilanmu.",
      icon: TrendingUp,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section id="why-talent" className="py-20 md:py-28 bg-white">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            Mengapa Mengenali Bakat
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Pernah Merasa Belum Menemukan Potensi Terbaik dalam Dirimu?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Banyak orang belum memahami kecenderungan bakat yang dimilikinya.
            Mengenali bakat dapat menjadi langkah awal untuk memahami diri,
            mengeksplorasi pilihan, dan merencanakan pengembangan potensi.
          </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <Card
                key={index}
                hoverable
                className="flex flex-col justify-between p-8 rounded-3xl border-slate-100 shadow-subtle group"
              >
                <CardContent className="p-0 space-y-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.bgColor} ${card.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-navy-900 group-hover:text-brand-blue transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                    {card.description}
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
