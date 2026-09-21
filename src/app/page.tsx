import { Hero } from "@/components/sections/Hero";
import { WhyTalent } from "@/components/sections/WhyTalent";
import { AboutTalentsMapping } from "@/components/sections/AboutTalentsMapping";
import { TalentExploration } from "@/components/sections/TalentExploration";
import { Benefits } from "@/components/sections/Benefits";
import { AssessmentProcess } from "@/components/sections/AssessmentProcess";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Registration } from "@/components/sections/Registration";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Mengapa Penting Mengenali Bakat */}
      <WhyTalent />

      {/* 3. Apa Itu Talents Mapping */}
      <AboutTalentsMapping />

      {/* 4. Eksplorasi Ragam Bakat */}
      <TalentExploration />

      {/* 5. Manfaat Mengenali Bakat */}
      <Benefits />

      {/* 6. Proses Asesmen */}
      <AssessmentProcess />

      {/* 7. Testimoni (Sesuai PRD: disembunyikan sampai data testimoni asli tersedia) */}
      <Testimonials isEnabled={false} />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Pendaftaran & Informasi */}
      <Registration />
    </>
  );
}
