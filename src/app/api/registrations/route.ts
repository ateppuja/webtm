import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validations";
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Server-side validation via Zod
    const validationResult = registrationSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Data yang dimasukkan tidak valid.",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { fullName, email, whatsapp, category, message, privacyConsent } =
      validationResult.data;

    // 2. Check if Supabase is configured
    if (!isSupabaseConfigured()) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message:
            "Layanan database pendaftaran belum dikonfigurasi (Supabase credentials belum diisi). Silakan hubungi admin secara langsung melalui WhatsApp.",
        },
        { status: 503 }
      );
    }

    const supabase = getSupabaseClient();
    if (!supabase) {
      return NextResponse.json(
        {
          success: false,
          configured: false,
          message:
            "Koneksi database gagal diinisialisasi. Silakan coba lagi atau hubungi kami lewat WhatsApp.",
        },
        { status: 500 }
      );
    }

    // 3. Save to database
    const { data, error } = await supabase
      .from("registrations")
      .insert([
        {
          full_name: fullName,
          email,
          whatsapp,
          category,
          message: message || null,
          privacy_consent: privacyConsent,
          status: "pending",
        },
      ])
      .select("id, created_at")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        {
          success: false,
          message:
            "Gagal menyimpan data pendaftaran ke sistem. Silakan coba lagi atau hubungi via WhatsApp.",
          error: error.message,
        },
        { status: 500 }
      );
    }

    // 4. Return confirmed success
    return NextResponse.json(
      {
        success: true,
        message:
          "Terima kasih! Permintaan informasi Anda telah diterima. Tim kami akan menghubungi Anda melalui kontak yang diberikan.",
        data: {
          id: data.id,
          createdAt: data.created_at,
        },
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("API error:", err);
    return NextResponse.json(
      {
        success: false,
        message:
          "Terjadi kesalahan internal pada server. Silakan coba beberapa saat lagi.",
      },
      { status: 500 }
    );
  }
}
