"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
  HelpCircle,
} from "lucide-react";
import {
  registrationSchema,
  RegistrationFormValues,
  participantCategories,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Registration() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<{
    type: "success" | "error" | "unconfigured" | null;
    message: string;
  }>({ type: null, message: "" });

  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285795093442";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      whatsapp: "",
      category: undefined,
      message: "",
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.status === 201 && result.success) {
        setSubmitStatus({
          type: "success",
          message:
            result.message ||
            "Terima kasih! Permintaan informasi Anda telah diterima. Tim kami akan menghubungi Anda melalui kontak yang diberikan.",
        });
        reset();
      } else if (response.status === 503) {
        // Supabase belum dikonfigurasi
        setSubmitStatus({
          type: "unconfigured",
          message:
            result.message ||
            "Layanan database pendaftaran belum aktif. Silakan hubungi kami langsung via WhatsApp untuk respon cepat.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message ||
            "Maaf, permintaan Anda belum berhasil dikirim. Silakan coba kembali atau hubungi kami melalui WhatsApp.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message:
          "Maaf, terjadi kesalahan koneksi saat mengirim formulir. Silakan periksa jaringan Anda atau hubungi kami melalui WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-container mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 border border-blue-100 rounded-full px-4 py-1">
              Pendaftaran & Informasi
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-navy-900 leading-tight">
              Siap Mengenali Bakat dan Mengembangkan Potensi Dirimu?
            </h2>
            <p className="text-text-secondary text-base sm:text-lg leading-relaxed">
              Mulai perjalanan mengenali diri dengan mendapatkan informasi mengenai
              layanan asesmen Talents Mapping.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-brand-bg border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-card">
            {submitStatus.type === "success" ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy-900">
                  Permintaan Terkirim!
                </h3>
                <p className="text-text-secondary text-base max-w-md mx-auto leading-relaxed">
                  {submitStatus.message}
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    onClick={() => setSubmitStatus({ type: null, message: "" })}
                  >
                    Kirim Permintaan Lain
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Status Notice if unconfigured or error */}
                {submitStatus.type === "unconfigured" && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Pemberitahuan Sistem:</p>
                        <p className="text-amber-800 leading-relaxed">
                          {submitStatus.message}
                        </p>
                      </div>
                    </div>
                    <div className="pt-1">
                      <a
                        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                          "Halo, saya ingin menanyakan informasi pendaftaran asesmen Talents Mapping."
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-sm transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Hubungi via WhatsApp Langsung</span>
                      </a>
                    </div>
                  </div>
                )}

                {submitStatus.type === "error" && (
                  <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p>{submitStatus.message}</p>
                  </div>
                )}

                {/* 1. Nama Lengkap */}
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-semibold text-navy-900"
                  >
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Contoh: Budi Pratama"
                    error={Boolean(errors.fullName)}
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-600 font-medium">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Grid: Email & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* 2. Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-navy-900"
                    >
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      error={Boolean(errors.email)}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* 3. Nomor WhatsApp */}
                  <div className="space-y-2">
                    <label
                      htmlFor="whatsapp"
                      className="block text-sm font-semibold text-navy-900"
                    >
                      Nomor WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="whatsapp"
                      type="tel"
                      placeholder="08123456789"
                      error={Boolean(errors.whatsapp)}
                      {...register("whatsapp")}
                    />
                    {errors.whatsapp && (
                      <p className="text-xs text-red-600 font-medium">
                        {errors.whatsapp.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* 4. Kategori Peserta */}
                <div className="space-y-2">
                  <label
                    htmlFor="category"
                    className="block text-sm font-semibold text-navy-900"
                  >
                    Kategori Peserta <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      className={`flex h-12 w-full rounded-xl border bg-white px-4 py-2.5 text-base text-text-primary transition-colors focus-visible:border-brand-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/20 disabled:cursor-not-allowed disabled:opacity-50 appearance-none ${
                        errors.category ? "border-red-500" : "border-slate-200"
                      }`}
                      defaultValue=""
                      {...register("category")}
                    >
                      <option value="" disabled>
                        -- Pilih Kategori Peserta --
                      </option>
                      {participantCategories.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      ▼
                    </div>
                  </div>
                  {errors.category && (
                    <p className="text-xs text-red-600 font-medium">
                      {errors.category.message}
                    </p>
                  )}
                </div>

                {/* 5. Pesan atau Pertanyaan */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-navy-900"
                  >
                    Pesan atau Pertanyaan{" "}
                    <span className="text-xs font-normal text-slate-500">
                      (Opsional)
                    </span>
                  </label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tuliskan pertanyaan Anda mengenai asesmen, jadwal, atau kebutuhan instansi..."
                    error={Boolean(errors.message)}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 font-medium">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* 6. Persetujuan Privasi */}
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <input
                      id="privacyConsent"
                      type="checkbox"
                      className="h-5 w-5 mt-0.5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue flex-shrink-0 cursor-pointer"
                      {...register("privacyConsent")}
                    />
                    <label
                      htmlFor="privacyConsent"
                      className="text-xs sm:text-sm text-text-secondary leading-relaxed select-none cursor-pointer"
                    >
                      Saya setuju data kontak saya digunakan untuk menindaklanjuti
                      permintaan informasi asesmen sesuai kebijakan privasi.
                    </label>
                  </div>
                  {errors.privacyConsent && (
                    <p className="text-xs text-red-600 font-medium">
                      {errors.privacyConsent.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 text-base font-bold shadow-card"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sedang Mengirim...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Permintaan Informasi</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
