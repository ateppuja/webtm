import * as React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Syarat & Ketentuan | KenaliBakat",
  description:
    "Syarat dan Ketentuan penggunaan layanan edukasi dan informasi pemetaan bakat KenaliBakat.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-28 pb-20 bg-brand-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-blue hover:text-navy-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

        {/* Article Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-slate-100 space-y-8 text-text-primary">
          <div className="space-y-3 border-b border-slate-100 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-3 py-1">
              <FileText className="w-4 h-4" />
              <span>Ketentuan Layanan</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900">
              Syarat dan Ketentuan
            </h1>
            <p className="text-sm text-text-secondary">
              Terakhir diperbarui: September 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              1. Penerimaan Ketentuan
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Dengan mengakses situs web KenaliBakat dan mengisi formulir yang tersedia,
              Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk
              terikat oleh Syarat dan Ketentuan ini.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              2. Ruang Lingkup Layanan & Edukasi
            </h2>
            <p className="text-text-secondary leading-relaxed">
              KenaliBakat menyajikan materi edukasi seputar pendekatan Talents Mapping
              untuk membantu pemahaman pola bakat dan potensi kekuatan personal.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Pemetaan bakat merupakan instrumen refleksi dan pengembangan diri. Hasil
              asesmen bukan merupakan jaminan keberhasilan karier, bukan penentu masa
              depan mutlak, dan bukan merupakan diagnosis psikologis atau medis.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              3. Data dan Informasi yang Diberikan
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Pengguna bertanggung jawab untuk memberikan data yang akurat, benar, dan
              dapat dihubungi saat mengajukan permintaan informasi atau pendaftaran.
              KenaliBakat tidak bertanggung jawab atas kegagalan komunikasi yang
              disebabkan oleh kesalahan penginputan data kontak oleh pengguna.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              4. Hak Kekayaan Intelektual
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Seluruh materi teks, desain antarmuka, grafik, logo, dan susunan konten
              pada situs ini dilindungi oleh hak cipta dan hukum kekayaan intelektual yang
              berlaku. Penggunaan materi tanpa izin tertulis dilarang keras.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              5. Batasan Tanggung Jawab
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Keputusan yang diambil oleh individu atau institusi berdasarkan hasil
              pemetaan bakat sepenuhnya merupakan tanggung jawab masing-masing pihak.
              Pengguna disarankan untuk melengkapi pertimbangan dengan faktor lain
              seperti minat, pengalaman, keterampilan, dan bimbingan profesional.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              6. Hukum yang Mengatur
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum
              Negara Kesatuan Republik Indonesia.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
