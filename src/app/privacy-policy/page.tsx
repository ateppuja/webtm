import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Kebijakan Privasi | KenaliBakat",
  description:
    "Kebijakan Privasi KenaliBakat menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi data pribadi Anda saat menggunakan layanan kami.",
};

export default function PrivacyPolicyPage() {
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
              <ShieldCheck className="w-4 h-4" />
              <span>Perlindungan Data Pribadi</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy-900">
              Kebijakan Privasi
            </h1>
            <p className="text-sm text-text-secondary">
              Terakhir diperbarui: September 2026
            </p>
          </div>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              1. Pendahuluan
            </h2>
            <p className="text-text-secondary leading-relaxed">
              KenaliBakat berkomitmen penuh untuk melindungi privasi dan keamanan data
              pribadi pengunjung serta peserta kami. Kebijakan Privasi ini disusun
              sesuai dengan peraturan perundang-undangan perlindungan data pribadi yang
              berlaku di Republik Indonesia (termasuk Undang-Undang No. 27 Tahun 2022
              tentang Pelindungan Data Pribadi).
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              2. Data Pribadi yang Kami Kumpulkan
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Ketika Anda mengisi formulir permintaan informasi atau pendaftaran di situs kami,
              kami dapat mengumpulkan data berikut:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary pl-2">
              <li>
                <strong className="text-navy-900">Nama Lengkap</strong>: untuk identifikasi komunikasi.
              </li>
              <li>
                <strong className="text-navy-900">Alamat Email</strong>: untuk pengiriman informasi dan korespondensi.
              </li>
              <li>
                <strong className="text-navy-900">Nomor WhatsApp</strong>: untuk konfirmasi jadwal dan konsultasi administratif.
              </li>
              <li>
                <strong className="text-navy-900">Kategori Peserta</strong>: untuk menyesuaikan konteks informasi asesmen.
              </li>
              <li>
                <strong className="text-navy-900">Pesan / Pertanyaan Tambahan</strong>: keterangan yang Anda berikan secara sukarela.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              3. Tujuan Penggunaan Data
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Data pribadi yang Anda berikan hanya akan digunakan untuk:
            </p>
            <ul className="list-disc list-inside space-y-2 text-text-secondary pl-2">
              <li>Menghubungi Anda terkait permintaan informasi dan jadwal asesmen Talents Mapping.</li>
              <li>Memberikan penjelasan teknis mengenai proses pemetaan bakat.</li>
              <li>Pelayanan konsultasi administratif dan penjadwalan.</li>
            </ul>
            <p className="text-text-secondary leading-relaxed">
              Kami <strong>tidak akan menjual, menyewakan, atau memindahtangankan</strong> data pribadi Anda kepada pihak ketiga untuk kepentingan komersial tanpa persetujuan eksplisit dari Anda.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              4. Keamanan dan Retensi Data
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Kami menerapkan standar teknis dan organisasi yang wajar untuk mencegah
              kehilangan, penyalahgunaan, atau akses tidak sah terhadap data pribadi Anda.
              Data disimpan selama diperlukan untuk memenuhi tujuan pengumpulan atau
              sesuai batas waktu yang diwajibkan oleh ketentuan hukum.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              5. Hak Pemilik Data
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Anda berhak untuk meminta akses, perbaikan, pembatasan pemrosesan, atau
              penghapusan data pribadi Anda yang tersimpan di sistem kami. Untuk mengajukan
              permohonan terkait data Anda, silakan hubungi kami melalui saluran kontak resmi yang tersedia.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-heading font-bold text-xl text-navy-900">
              6. Hubungi Kami
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Apabila Anda memiliki pertanyaan mengenai Kebijakan Privasi ini, silakan hubungi tim kami di:
            </p>
            <p className="text-navy-900 font-medium">
              Email: info@kenalibakat.id <br />
              Website: kenalibakat.id
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
