import { z } from "zod";

export const participantCategories = [
  "Pelajar / Mahasiswa",
  "Profesional",
  "Orang Tua",
  "Pendidik",
  "Lainnya",
] as const;

export const registrationSchema = z.object({
  fullName: z
    .string()
    .min(2, "Nama lengkap harus diisi minimal 2 karakter")
    .max(100, "Nama lengkap maksimal 100 karakter"),
  email: z
    .string()
    .min(1, "Alamat email wajib diisi")
    .email("Format alamat email tidak valid"),
  whatsapp: z
    .string()
    .min(1, "Nomor WhatsApp wajib diisi")
    .regex(
      /^(\+62|62|0)8[1-9][0-9]{6,11}$/,
      "Nomor WhatsApp tidak valid (contoh: 08123456789 atau +628123456789)"
    ),
  category: z.enum(participantCategories, {
    errorMap: () => ({ message: "Pilih salah satu kategori peserta" }),
  }),
  message: z.string().max(500, "Pesan maksimal 500 karakter").optional().or(z.literal("")),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "Anda harus menyetujui kebijakan privasi untuk melanjutkan",
  }),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;
