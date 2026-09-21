export type ParticipantCategory =
  | "Pelajar / Mahasiswa"
  | "Profesional"
  | "Orang Tua"
  | "Pendidik"
  | "Lainnya";

export interface RegistrationFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  category: ParticipantCategory;
  message?: string;
  privacyConsent: boolean;
}

export interface TalentCardItem {
  id: string;
  title: string;
  iconName: "Brain" | "MessagesSquare" | "Lightbulb" | "ListChecks";
  description: string;
  activities: string[];
  color: string;
  bgLight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  category: string;
  quote: string;
  photoUrl?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isCta?: boolean;
}
