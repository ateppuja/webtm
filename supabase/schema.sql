-- KenaliBakat Registrations Table Schema
-- Gunakan skrip ini di SQL Editor dashboard Supabase Anda.

CREATE TABLE IF NOT EXISTS public.registrations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    whatsapp VARCHAR(30) NOT NULL,
    category VARCHAR(50) NOT NULL,
    message TEXT,
    privacy_consent BOOLEAN NOT NULL DEFAULT true,
    status VARCHAR(30) DEFAULT 'pending',
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexing untuk pencarian cepat
CREATE INDEX IF NOT EXISTS idx_registrations_email ON public.registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON public.registrations(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.registrations ENABLE ROW LEVEL SECURITY;

-- Kebijakan RLS:
-- 1. Izinkan insert dari service role atau anon (sesuai kebutuhan API route)
CREATE POLICY "Allow insert from server" 
    ON public.registrations 
    FOR INSERT 
    WITH CHECK (true);

-- 2. Cegah pembacaan data registrasi oleh publik (hanya service role admin yang bisa baca)
CREATE POLICY "Allow select for service role only" 
    ON public.registrations 
    FOR SELECT 
    USING (auth.role() = 'service_role');
