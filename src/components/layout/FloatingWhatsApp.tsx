"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890";
  const defaultMessage =
    "Halo, saya tertarik untuk mengetahui informasi lebih lanjut mengenai asesmen Talents Mapping. Mohon informasi mengenai proses pendaftaran, jadwal, dan biaya.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <aside
      aria-label="Kontak WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 rounded-full shadow-elevated hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 min-h-[44px]"
        aria-label="Hubungi Kami melalui WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white text-white flex-shrink-0" />
        <span className="font-semibold text-sm hidden sm:inline-block tracking-wide">
          Hubungi Kami
        </span>
      </a>
    </aside>
  );
}
