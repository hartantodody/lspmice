export interface NavigationItem {
  label: string;
  href: string;
  exact?: boolean;
  matchPrefixes?: string[];
}

export interface HeroSlide {
  image: string;
  alt: string;
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  caption: string;
}

export interface HomeActionLink {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "accent";
}

export interface HomeSectionContent {
  eyebrow: string;
  title: string;
  accent?: string;
  description: string;
}

export interface HomePanelContent {
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
}

export interface HomeNewsContent extends HomeSectionContent {
  featuredEyebrow: string;
  featuredNote: string;
  archiveTitle: string;
  ctaLabel: string;
}

export interface HomeContactInfoCard {
  label: string;
  value: string;
}

export interface HomeHeroContent {
  actions: HomeActionLink[];
  contactLabel: string;
  hoursLabel: string;
  scrollLabel: string;
}

export interface HomeContactContent {
  eyebrow: string;
  title: string;
  description: string;
  actions: HomeActionLink[];
  infoCards: HomeContactInfoCard[];
}

export interface HomePageContent {
  hero: HomeHeroContent;
  about: HomeSectionContent;
  aboutPanel: HomePanelContent;
  certification: HomeSectionContent & { ctaLabel: string };
  news: HomeNewsContent;
  contact: HomeContactContent;
}

export interface SpotlightItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface HomePriorityCard {
  title: string;
  description: string;
  href: string;
  label: string;
  meta: string;
}

export interface HomeQuickLink {
  title: string;
  href: string;
}

export interface HomeAccordionItem {
  question: string;
  answer: string;
}

export interface HomeAboutContent {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  accordionItems: HomeAccordionItem[];
}

export interface NewsPost {
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  publishedAt: string;
  displayDate: string;
  category: string;
  image: string;
}

export interface PartnerBadge {
  name: string;
  supportingText?: string;
}

export interface PartnerGroup {
  title: string;
  items: PartnerBadge[];
}

export interface CertificationScheme {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  targetParticipants: string[];
  competencyScope: string[];
  requirements: string[];
  requiredDocuments: string[];
  assessmentProcess: string[];
  duration: string;
  category: string;
  isFeatured?: boolean;
}

export type CertificateHolderStatus =
  | "Active"
  | "Expired"
  | "Pending Verification";

export interface CertificateHolder {
  name: string;
  registrationNumber: string;
  scheme: string;
  certificateDate: string;
  validUntil: string;
  year: number;
  status: CertificateHolderStatus;
}

export interface AboutPageContent {
  overviewTitle: string;
  overviewParagraphs: string[];
  vision: string;
  missions: string[];
  functions: string[];
  workFoundations: string[];
  structurePlaceholder: string;
  legalNotes: string[];
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export interface GalleryAlbum {
  title: string;
  slug: string;
  year: number;
  eventDate: string;
  location: string;
  coverImage: string;
  caption: string;
  images: GalleryImage[];
}

export interface ContactInfo {
  officeName: string;
  address: string;
  phone: string;
  whatsapp: string;
  contactPerson: string;
  email: string;
  officeHours: string;
  mapPlaceholder: string;
}

export interface ContactActionCard {
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}
