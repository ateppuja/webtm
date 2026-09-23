import * as React from "react";
import Link from "next/link";
import { Sparkles, Mail, Phone, ExternalLink } from "lucide-react";
import { footerNavItems, legalNavItems } from "@/data/navigation";

export function Footer() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285795093442";
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@kenalibakat.id";

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800 pt-16 pb-12">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-800">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#hero" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-brand-blue flex items-center justify-center text-white shadow-subtle">
                <Sparkles className="w-5 h-5 text-accent-yellow" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-white">
                Kenali<span className="text-brand-blue">Bakat</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed max-w-md">
              Platform edukasi untuk membantu individu mengenali kecenderungan bakat dan
              mengeksplorasi potensi diri melalui pendekatan Talents Mapping.
            </p>
            <p className="text-xs text-slate-400">
              *Talents Mapping adalah pendekatan pemetaan bakat untuk bahan refleksi dan pengembangan diri.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="hover:text-accent-yellow transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="font-heading font-semibold text-white text-base mb-4">
              Kontak & Bantuan
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-accent-yellow transition-colors break-all"
                >
                  {contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent-yellow transition-colors inline-flex items-center gap-1"
                >
                  WhatsApp Admin (0857-9509-3442)
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
            </ul>

            <h4 className="font-heading font-semibold text-white text-base mt-6 mb-3">
              Informasi Hukum
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {legalNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-accent-yellow transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 KenaliBakat. All rights reserved.</p>
          <p>
            Didesain untuk eksplorasi potensi diri &bull; Bahasa Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
