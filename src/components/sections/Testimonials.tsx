import * as React from "react";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { TestimonialItem } from "@/types";

interface TestimonialsProps {
  /**
   * Sesuai PRD Section 12:
   * Jangan membuat testimoni palsu. Jika data testimoni asli belum tersedia,
   * sembunyikan section ini dari halaman produksi.
   */
  items?: TestimonialItem[];
  isEnabled?: boolean;
}

export function Testimonials({
  items = [],
  isEnabled = false,
}: TestimonialsProps) {
  // Hanya tampilkan jika diaktifkan secara eksplisit dan memiliki data asli
  if (!isEnabled || items.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-brand-bg">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
            Testimoni Peserta
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
            Cerita Mereka yang Mulai Mengenali Bakatnya
          </h2>
          <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
            Pengalaman nyata dari mereka yang telah mengeksplorasi potensi diri
            melalui pemetaan bakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="p-8 rounded-3xl bg-white border-slate-100 shadow-subtle flex flex-col justify-between"
            >
              <CardContent className="p-0 space-y-6">
                <Quote className="w-8 h-8 text-brand-blue/30" />
                <p className="text-text-primary text-sm sm:text-base italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  {item.photoUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={item.photoUrl}
                      alt={item.name}
                      className="w-11 h-11 rounded-full object-cover border border-slate-200"
                    />
                  ) : (
                    <div className="w-11 h-11 rounded-full bg-blue-50 text-brand-blue font-bold flex items-center justify-center text-sm">
                      {item.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-heading font-bold text-sm text-navy-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-text-secondary">{item.category}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
