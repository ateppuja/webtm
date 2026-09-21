# KenaliBakat - Landing Page Talents Mapping

Landing page modern, profesional, responsif, dan interaktif untuk memperkenalkan konsep mengenali bakat diri melalui pendekatan **Talents Mapping**.

Tagline: *"Kenali Bakatmu, Temukan Potensi Terbaikmu."*

---

## 🚀 Teknologi yang Digunakan

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Form Management**: [React Hook Form](https://react-hook-form.com/)
- **Schema Validation**: [Zod](https://zod.dev/)
- **Database (Optional/Ready)**: [Supabase](https://supabase.com/) PostgreSQL
- **Font**: Plus Jakarta Sans (Headings) & Inter (Body) via `next/font/google`

---

## 🎨 Sistem Desain

- **Primary Navy**: `#142C4E` (`navy-900`) - Heading & elemen utama
- **Primary Blue**: `#4779C5` (`brand-blue`) - Ikon & elemen interaktif
- **Accent Yellow**: `#F5B942` (`accent-yellow`) - Tombol aksi (CTA) penting
- **Background**: `#F5F8FC` (`brand-bg`) - Latar belakang bersih & modern
- **White**: `#FFFFFF` - Kartu konten
- **Text Primary**: `#243247`
- **Text Secondary**: `#64748B`

---

## 📋 Struktur Halaman & Fitur

1. **Header / Sticky Navigation**: Logo brand, menu dengan *scroll spy*, tombol CTA pendaftaran, dan menu *hamburger* responsif mobile.
2. **Hero Section**: Headline persuasif, dual CTA, visual peta bakat interaktif dengan satelit indikator.
3. **Mengapa Mengenali Bakat (`#why-talent`)**: 3 kartu nilai (Memahami Diri, Arah Pengembangan, Kekuatan Diri) dengan efek hover.
4. **Apa Itu Talents Mapping (`#about`)**: Penjelasan konsep 2 kolom, 3 poin pilar pengembangan, dan batasan objektif instrumen.
5. **Eksplorasi Ragam Bakat (`#talents`)**: 4 kartu interaktif (Berpikir Analitis, Berkomunikasi, Menciptakan Ide, Mengorganisasi) yang dapat diklik untuk menampilkan detail aktivitas dan catatan disclaimer edukatif.
6. **Manfaat Mengenali Bakat (`#benefits`)**: Grid 4 manfaat utama (Pemahaman Diri, Eksplorasi Pendidikan, Pengembangan Karier, Pengembangan Keterampilan).
7. **Proses Asesmen (`#assessment`)**: Alur 4 langkah (timeline horizontal pada desktop dan vertikal pada mobile) beserta CTA.
8. **Testimoni (`#testimonials`)**: Komponen modular siap pakai yang disembunyikan secara default hingga data testimoni asli tersedia (sesuai kepatuhan PRD).
9. **FAQ (`#faq`)**: Akordion interaktif ramah aksesibilitas (keyboard & pembaca layar) dengan 6 pertanyaan & jawaban dari PRD.
10. **CTA & Formulir Pendaftaran (`#register`)**:
    - Validasi client-side & server-side dengan Zod.
    - Status loading, pencegahan *double-submit*, dan penanganan status Supabase yang transparan.
    - Akses langsung WhatsApp jika database belum terhubung.
11. **Floating WhatsApp Button**: Tombol mengambang di pojok kanan bawah dengan pesan template yang telah di-*encode*.
12. **Halaman Hukum**:
    - `/privacy-policy`: Kebijakan privasi sesuai UU Perlindungan Data Pribadi (UU PDP).
    - `/terms-and-conditions`: Syarat dan ketentuan layanan edukasi.
13. **SEO & Metadata**:
    - Metadata OpenGraph, Twitter card, canonical-ready.
    - `sitemap.ts` dan `robots.ts` bawaan.

---

## ⚙️ Persiapan & Instalasi

### 1. Kloning / Akses Direktori Proyek
```bash
cd "d:/Web TM"
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Salin file `.env.example` menjadi `.env.local`:
```bash
cp .env.example .env.local
```

Sesuaikan nilai variabel berikut:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
NEXT_PUBLIC_CONTACT_EMAIL=info@kenalibakat.id

# Supabase (Opsional - jika ingin menyimpan pendaftaran ke database langsung)
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

---

## 🗄️ Konfigurasi Database Supabase (Opsional)

Jika Anda ingin menyimpan data pendaftaran ke Supabase PostgreSQL:

1. Buat project baru di [Supabase Dashboard](https://supabase.com).
2. Buka menu **SQL Editor**.
3. Jalankan skrip yang ada di `supabase/schema.sql`.
4. Salin URL dan Service Role Key dari **Project Settings > API**.
5. Tempelkan nilai tersebut ke file `.env.local`.
6. Restart server Next.js (`npm run dev`).

---

## 🔍 Pemeriksaan Kode & Build Produksi

Untuk memeriksa tipe TypeScript:
```bash
npm run typecheck
```

Untuk melakukan build produksi:
```bash
npm run build
```

Untuk menjalankan build produksi:
```bash
npm run start
```

---

## 📄 Lisensi
Hak Cipta © 2026 KenaliBakat. Seluruh hak cipta dilindungi undang-undang.
