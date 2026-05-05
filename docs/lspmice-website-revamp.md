# LSPMICE Website Revamp Documentation

## 1. Project Overview

### Goal of the Revamp

The LSPMICE website revamp is intended to transform the current website into a modern institutional platform that better represents PT LSP MICE as a formal, professional, authoritative, and trusted certification body in the MICE sector.

The new website should:

- present LSP MICE with a stronger premium institutional identity
- reorganize existing information into a simpler and more maintainable structure
- support content publishing and content updates without relying on overly fragmented page structures
- help visitors quickly understand certification schemes, procedures, and public verification information
- improve usability on mobile devices, accessibility, and search visibility
- reduce content clutter and remove low-quality legacy elements from the old website

### Primary Target Audience

- calon peserta sertifikasi
- tenaga kerja industri MICE
- institusi pendidikan
- perusahaan/industri pariwisata dan event
- asesor
- TUK
- stakeholder pemerintah/BNSP-related audience
- publik yang ingin verifikasi sertifikat

### Expected Website Personality

The website should feel:

- formal and institutional
- professional and credible
- authoritative and trustworthy
- modern, premium, and polished
- structured, calm, and clear
- informative without feeling bureaucratic or outdated

The site should not feel:

- playful
- startup-like
- trendy for the sake of trendiness
- overly decorative
- like a generic WordPress brochure site

## 2. Current Website Audit Summary

### Audit Context

This summary is based on a review of the live website at `https://lspmice.org/` on May 1, 2026.

### Current Structure Observed

The current site contains useful institutional and certification content, including:

- profile/about pages
- certification scheme pages
- certification procedure pages
- certificate holder data pages by year
- TUK data
- assessor data
- news/blog content
- gallery archives
- contact information

### Main Audit Findings

- The current WordPress structure is too fragmented. Important institutional content is split across many small pages such as `Sekilas`, `Visi Misi`, `Struktur Organisasi`, `Tugas dan Fungsi`, `Landasan Kerja`, `Kode Etik Asesor`, `Daftar Nama Asesor`, and `Daftar TUK`.
- Multiple old subpages should be consolidated into fewer stronger pages with clearer hierarchy.
- The navigation appears repetitive and cluttered, with duplicated menu rendering and too many second-level pages exposed at once.
- Some scheme pages appear too thin and should be rewritten as structured detail pages with consistent fields rather than treated as isolated legacy posts.
- Certification requirements and scheme information are separated in a way that can confuse users. The new site should distinguish between general certification guidance and per-scheme requirements more clearly.
- Certificate holder data is currently split into year-based archive pages. This should become one searchable, filterable public verification page.
- TUK and assessor information currently appears as raw tables with inconsistent presentation. This should become a cleaner combined institutional data page.
- News content uses inconsistent categorization, including generic categories like `Uncategorized`.
- Gallery content is organized as year-based album archives, which is workable, but the presentation should be modernized.
- Some visible copy on the current site contains typos, inconsistent capitalization, and formatting issues.
- Operational details appear to require verification before reuse, including office hours and contact wording.

### Content Risk and Cleanup Findings

- Suspicious/spam outbound links were observed on the current website and must not be migrated into the new website.
- Examples of contamination seen during the audit included casino-related, dating-related, and essay-writing outbound links appearing on public pages.
- All migrated content should be manually reviewed and cleaned before publication.
- Rich text copied from the old site should be treated as untrusted content until reviewed.

### Migration Direction

- Keep the useful institutional and certification content.
- Reorganize the content into a cleaner sitemap.
- Consolidate repetitive or thin pages.
- Remove spammy, suspicious, broken, outdated, and low-value links.
- Review all text for grammar, consistency, and factual accuracy before launch.

## 3. Brand & Design System

### Brand Personality

- institutional
- premium
- confident
- polished
- disciplined
- credible
- refined

### Initial Color Token Direction

```css
:root {
  --brand-primary: #262463;
  --brand-primary-dark: #111036;
  --brand-primary-soft: #ECECFA;

  --brand-secondary: #A8A7AD;
  --brand-secondary-dark: #6F6E76;
  --brand-secondary-soft: #F1F1F4;

  --brand-accent: #E9C144;
  --brand-accent-dark: #B88E16;
  --brand-accent-soft: #FFF4CC;

  --background: #F8F8FA;
  --surface: #FFFFFF;
  --surface-muted: #F1F3F7;

  --text-primary: #141525;
  --text-secondary: #5F6272;
  --text-muted: #8B8E9B;

  --border: #DADDE7;
}
```

### Color Usage Direction

- Primary brand color: deep indigo/navy for header, hero, major headings, primary buttons, and institutional emphasis.
- Secondary neutral: silver-gray for borders, muted panels, secondary text, and quiet backgrounds.
- Accent color: restrained gold/yellow for highlights, trust indicators, hover emphasis, section dividers, and selected badges.
- Backgrounds should remain clean, light, and controlled outside the dark hero.
- Avoid earthy brown, olive, or sepia-heavy dominant palettes.

### Typography Direction

Recommended final direction:

- Major headings: `Cormorant Garamond`
- Body, navigation, buttons, forms, labels: `Plus Jakarta Sans`

Fallback direction if needed:

- Headings: `Plus Jakarta Sans`
- Body: `Inter`

Typography principles:

- headings should feel elegant and editorial without losing clarity
- body text should remain highly readable and contemporary
- UI text should feel precise, stable, and professional
- avoid overly condensed or decorative display styles

### Spacing Direction

- Use a disciplined spacing system based on `4px` or `8px` increments.
- Vertical rhythm should feel generous, especially on desktop.
- Key sections on the home page should breathe and feel premium rather than compressed.
- Cards and content blocks should use clear internal padding and consistent gutter logic.

### Border Radius Direction

- Use subtle to moderate radius.
- Prefer `10px` to `18px` ranges for cards, inputs, and panels.
- Avoid overly rounded startup-style pills everywhere.
- Buttons may be slightly more rounded than cards, but still restrained.

### Shadow Direction

- Use soft, low-noise shadows.
- Emphasize depth through layered surfaces, subtle borders, and contrast before relying on heavy blur.
- Dark surfaces may use faint inner borders or glow-like highlights instead of large shadows.

### Button Styles

Primary button:

- deep indigo background
- white text
- subtle shadow or inner highlight
- gold hover accent or refined tonal lift

Secondary button:

- white or muted surface
- indigo text
- silver border

Tertiary/ghost button:

- transparent or soft indigo tint
- indigo text
- visible hover/focus states

Button behavior:

- labels should be concise and action-oriented
- all buttons must have clear focus styles
- buttons should remain readable on dark and light surfaces

### Card Styles

- white or muted light surface by default
- silver border with soft shadow
- structured spacing
- heading and body hierarchy should feel formal and orderly
- featured cards may use a subtle indigo header band, left accent line, or soft gold highlight

### Navbar Styles

- sticky or stable top navigation is recommended
- use clean institutional alignment rather than crowded mega-menu behavior
- keep top-level navigation limited to the core sitemap
- highlight `Daftar Online` as a clear CTA
- navbar should feel premium, quiet, and dependable

### Footer Styles

- use a darker brand treatment than the main page background
- include organization summary, address, contact channels, important links, and legal/credibility references
- footer should feel complete and authoritative, not like an afterthought

### Dark Hero Style

Hero direction:

- deep indigo/navy base
- subtle silver borders or frames
- restrained gold highlight accents
- elegant, high-contrast heading typography
- strong sense of authority and trust

Suggested hero visual themes:

- professional MICE event atmosphere
- convention or exhibition venue
- formal business conference
- abstract premium architecture
- dark corporate institutional ambience

Avoid:

- art gallery mood
- hotel branding tropes
- unrelated luxury fashion signals
- overly glossy or overly busy effects

### Accessibility Notes for Contrast

- ensure contrast ratios meet WCAG expectations for text and controls
- gold accent should not be used as body text on light backgrounds without sufficient contrast
- dark hero text should remain highly legible over imagery or overlays
- focus rings must stand out on both light and dark surfaces

## 4. Information Architecture / Sitemap

### Final Sitemap

1. Home
2. Profil LSP MICE
3. Skema Sertifikasi
4. Sertifikasi
5. Data Pemegang Sertifikat
6. TUK & Asesor
7. Berita & Pengumuman
8. Galeri
9. Kontak
10. Daftar Online

### Route Structure

The following route plan is aligned with the requested Next.js app-router structure:

- `/`
- `/profil`
- `/skema-sertifikasi`
- `/skema-sertifikasi/[slug]`
- `/sertifikasi`
- `/data-sertifikat`
- `/tuk-asesor`
- `/berita`
- `/berita/[slug]`
- `/galeri`
- `/galeri/[slug]`
- `/kontak`
- `/daftar-online`

### Page Definitions

#### `/`

- Page purpose: landing page that establishes trust, explains the institution, and drives users toward certification actions.
- Main user goal: understand what LSP MICE is and find the next step quickly.
- Key CTA: `Daftar Sertifikasi`, `Lihat Skema Sertifikasi`, `Hubungi Kami`.
- Content sections: hero, intro MICE, why certification matters, LSP MICE summary, legalitas/trust indicators, featured schemes, certification process summary, statistics, latest news, gallery preview, contact CTA.
- Components needed: `SiteHeader`, `HeroSection`, `SectionHeader`, `CTAButton`, `CertificationSchemeCard`, `ProcessStepCard`, `StatisticCard`, `NewsCard`, `GalleryAlbumCard`, `ContactCard`, `SiteFooter`.
- Data/content source: curated summary content, featured schemes, selected statistics, latest posts, gallery album preview, official contact info.
- SEO notes: primary brand page, target keywords around `LSP MICE` and `Sertifikasi Profesi MICE`, include organization-focused metadata and share image.

#### `/profil`

- Page purpose: centralize institutional information previously scattered across multiple old pages.
- Main user goal: verify who LSP MICE is, its role, legal basis, and credibility.
- Key CTA: `Hubungi Kami`, `Daftar Online`.
- Content sections: page intro, anchor navigation, sekilas tentang LSP MICE, sejarah singkat, visi dan misi, struktur organisasi, tugas dan fungsi, landasan kerja, unsur pendukung/stakeholder, lisensi dan credibility statement.
- Components needed: `SiteHeader`, `SectionHeader`, `Breadcrumbs`, `CTAButton`, `SiteFooter`.
- Data/content source: consolidated old `Tentang Kami` content, verified institutional/legal copy, approved organizational assets.
- SEO notes: emphasize institutional identity, legal legitimacy, and `Lembaga Sertifikasi Profesi MICE`.

#### `/skema-sertifikasi`

- Page purpose: present all certification schemes in a structured, searchable way.
- Main user goal: compare schemes and find the most relevant one.
- Key CTA: `Lihat Detail Skema`, `Daftar Online`.
- Content sections: intro, search/filter, scheme card grid.
- Components needed: `SiteHeader`, `SectionHeader`, `SearchFilterBar`, `CertificationSchemeCard`, `Breadcrumbs`, `EmptyState`, `SiteFooter`.
- Data/content source: structured scheme data, curated short descriptions and participant fit.
- SEO notes: collection page for certification schemes and internal linking to each scheme detail page.

#### `/skema-sertifikasi/[slug]`

- Page purpose: show complete information for one certification scheme.
- Main user goal: understand eligibility, scope, documents, and next steps.
- Key CTA: `Daftar Online`, `Hubungi Kami`.
- Content sections: scheme hero/introduction, short description, target participants, competency scope, requirements, required documents, assessment process, related SKKNI/unit competency notes, CTA block.
- Components needed: `SiteHeader`, `SectionHeader`, `Breadcrumbs`, `CTAButton`, `Accordion` if long content is collapsed, `SiteFooter`.
- Data/content source: structured scheme record and reviewed official requirements.
- SEO notes: scheme-specific title and description, keyword-targeted slug, internal links to `/sertifikasi` and `/daftar-online`.

#### `/sertifikasi`

- Page purpose: explain the certification process, rules, and general participant guidance.
- Main user goal: understand the process and required preparation before registering.
- Key CTA: `Daftar Online`, `Hubungi Kami`.
- Content sections: manfaat sertifikasi, persyaratan umum, prosedur sertifikasi, tata tertib uji, perpanjangan dan masa berlaku, prosedur banding, FAQ, CTA.
- Components needed: `SiteHeader`, `SectionHeader`, `Accordion`, `Breadcrumbs`, `CTAButton`, `SiteFooter`.
- Data/content source: consolidated general certification content and policy copy verified by LSP MICE.
- SEO notes: target general certification intent keywords and support long-tail questions with FAQ markup where applicable.

#### `/data-sertifikat`

- Page purpose: provide a public certificate holder verification page in one unified experience.
- Main user goal: search and verify public certificate data quickly.
- Key CTA: none as primary; secondary CTA can be `Hubungi Kami` for corrections or questions.
- Content sections: intro/disclaimer, search/filter controls, data table, pagination, empty state.
- Components needed: `SiteHeader`, `SectionHeader`, `SearchFilterBar`, `DataTable`, `StatusBadge`, `EmptyState`, `LoadingState`, `Breadcrumbs`, `SiteFooter`.
- Data/content source: cleaned certificate holder dataset consolidated from year archives.
- SEO notes: consider `noindex` if privacy or duplication becomes a concern; if indexable, keep copy informative without exposing unnecessary personal data.

#### `/tuk-asesor`

- Page purpose: combine TUK and assessor information into one well-structured institutional page.
- Main user goal: find authorized TUK locations and assessor information.
- Key CTA: `Hubungi Kami`, `Daftar Online`.
- Content sections: TUK intro, TUK list, asesor intro, kode etik asesor, asesor list.
- Components needed: `SiteHeader`, `SectionHeader`, `SearchFilterBar`, `DataTable`, `StatusBadge`, `Breadcrumbs`, `SiteFooter`.
- Data/content source: cleaned TUK records, cleaned assessor records, reviewed code of ethics content.
- SEO notes: institutional support page and useful for branded trust queries.

#### `/berita`

- Page purpose: house news, announcements, activity updates, and promotional information in a clean publication format.
- Main user goal: browse recent updates and official announcements.
- Key CTA: `Baca Selengkapnya`, `Hubungi Kami`.
- Content sections: featured/latest post, category filter, post listing, pagination.
- Components needed: `SiteHeader`, `SectionHeader`, `SearchFilterBar`, `NewsCard`, `Breadcrumbs`, `EmptyState`, `SiteFooter`.
- Data/content source: cleaned news posts and normalized categories.
- SEO notes: listing page should target branded updates and topical event/certification queries.

#### `/berita/[slug]`

- Page purpose: display one news or announcement article.
- Main user goal: read a full update and navigate to related content or actions.
- Key CTA: `Daftar Online` or `Hubungi Kami` when relevant.
- Content sections: cover image, metadata, article content, related posts.
- Components needed: `SiteHeader`, `Breadcrumbs`, `SectionHeader`, `NewsCard`, `CTAButton`, `SiteFooter`.
- Data/content source: cleaned article content and verified publish metadata.
- SEO notes: article metadata, Open Graph optimized sharing, and `Article` or `NewsArticle` structured data where appropriate.

#### `/galeri`

- Page purpose: showcase documentation of activities and events through organized photo albums.
- Main user goal: browse albums by year or event.
- Key CTA: `Lihat Album`.
- Content sections: intro, filter by year, album grid/list.
- Components needed: `SiteHeader`, `SectionHeader`, `SearchFilterBar`, `GalleryAlbumCard`, `Breadcrumbs`, `EmptyState`, `SiteFooter`.
- Data/content source: cleaned album records and optimized image assets.
- SEO notes: gallery listing should support image discovery without becoming bloated.

#### `/galeri/[slug]`

- Page purpose: display one album in detail.
- Main user goal: view event documentation with context.
- Key CTA: `Hubungi Kami` or `Kembali ke Galeri`.
- Content sections: album header, event metadata, image grid, lightbox interaction, captions.
- Components needed: `SiteHeader`, `Breadcrumbs`, `SectionHeader`, `SiteFooter`.
- Data/content source: album data, image list, and captions.
- SEO notes: album title and event context in metadata plus descriptive alt text for discoverability and accessibility.

#### `/kontak`

- Page purpose: provide complete official contact and location information.
- Main user goal: contact the organization through the appropriate channel.
- Key CTA: `Kirim Pesan`, `Chat WhatsApp`, `Daftar Online`.
- Content sections: contact information, office address, phone, WhatsApp/contact person, email, office hours, map, contact form, quick CTA cards.
- Components needed: `SiteHeader`, `SectionHeader`, `ContactCard`, `CTAButton`, `Breadcrumbs`, `SiteFooter`.
- Data/content source: verified official contact data and confirmed office hours and map location.
- SEO notes: important for local trust and brand verification and should include organization and contact metadata.

#### `/daftar-online`

- Page purpose: serve as the primary conversion page for certification registration.
- Main user goal: start or continue registration.
- Key CTA: `Buka Form Pendaftaran`, `Kirim Pendaftaran`, `Hubungi Kami`.
- Content sections: intro, mode explanation, external form CTA or internal form flow, fallback contact help.
- Components needed: `SiteHeader`, `SectionHeader`, `CTAButton`, form components if internal mode is implemented, `Breadcrumbs`, `SiteFooter`.
- Data/content source: official registration workflow plus external registration link or internal form schema.
- SEO notes: action-focused page that should still contain enough explanatory content for clarity.

## 5. Page Requirements

### Home

- Hero section: dark premium hero with strong institutional headline, short supporting copy describing LSP MICE and its certification mission, a primary CTA to registration, and a secondary CTA to the scheme listing.
- Intro: Apa itu MICE?: concise educational definition for general visitors.
- Why certification matters: explain benefits for workforce quality, recognition, and competitiveness.
- About LSP MICE summary: short institutional summary with a link to the full profile page.
- Legalitas / lisensi / trust indicators: show license, institutional affiliations, or credibility references using only verified claims.
- Featured certification schemes: highlight key schemes with clear short descriptions.
- Certification process summary: present the process as steps or a simple timeline.
- Statistics cards: show a small set of meaningful metrics; use only verified numbers and mark unknown values as `TODO`.
- Latest news: display the latest few posts from `Berita & Pengumuman`.
- Gallery preview: display latest albums or selected event highlights.
- Contact CTA: direct visitors toward contact or registration.
- CTA requirements: `Daftar Sertifikasi`, `Lihat Skema Sertifikasi`, `Hubungi Kami`.

### Profil LSP MICE

- Purpose: consolidate old `Tentang Kami` content into one strong institutional page.
- Required sections: `Sekilas Tentang LSP MICE`, `Sejarah singkat`, `Visi dan Misi`, `Struktur Organisasi`, `Tugas dan Fungsi LSP`, `Landasan Kerja`, `Unsur pendukung / stakeholder`, `Lisensi and credibility statement`.
- Behavior requirements: use anchor navigation inside the page, keep the anchor list visible on desktop and usable on mobile, write content in a formal institutional tone, and verify legal and organizational claims before final publication.

### Skema Sertifikasi

- Listing page sections: `Intro`, `Search/filter`, `Scheme cards`.
- Supported certification schemes: `Certified Event Registration`, `Certified Event Liaison Officer`, `Certified Event Venue Management`, `Certified Event Marketing Communication`, `Certified Event Logistic`, `Certified Stand Building`, `Certified Destination Bidding`.
- Scheme card requirements: scheme title, short description, target audience summary, detail CTA.
- Scheme detail page must support: title, slug, short description, target participants, competency scope, requirements, required documents, assessment process, related SKKNI or unit competency notes if available, CTA to `Daftar Online`, and CTA to `Kontak`.
- Content rules: keep structure consistent across all schemes, mark missing official details as `TODO`, and do not fabricate SKKNI mapping or unit lists.

### Sertifikasi

- Required sections: `Manfaat Sertifikasi`, `Persyaratan Umum`, `Prosedur Sertifikasi`, `Tata Tertib Uji`, `Perpanjangan dan Masa Berlaku`, `Prosedur Banding`, `FAQ`, `CTA`.
- Interaction requirements: use accordion components for procedural and FAQ content, chunk long text into readable sections, and place CTA blocks after major procedural sections where helpful.
- Content requirements: clearly separate general rules from scheme-specific requirements, use formal Indonesian, and review legacy legal references before publication.

### Data Pemegang Sertifikat

- Purpose: replace old year-based certificate archive pages with one public verification experience.
- Required features: search by name, filter by year, filter by scheme, filter by status, table view, pagination, responsive mobile card view, empty state, loading state, disclaimer text.
- Suggested fields: `name`, `registrationNumber`, `scheme`, `certificateDate`, `validUntil`, `status`, `year`.
- Behavior rules: search and filters should work together, the table must support readable date formatting, mobile layout should convert rows into stacked cards, status should be visually distinct, and the page should include a disclaimer that public data is shown for verification purposes only.
- Data rules: merge old yearly data into one normalized dataset, verify duplicates and inconsistent spellings, and confirm whether expired certificates should remain searchable and how status is defined.

### TUK & Asesor

- Purpose: combine TUK and assessor information into one cleaner institutional support page.
- Required sections: `TUK intro`, `TUK list`, `Asesor intro`, `Kode Etik Asesor`, `Asesor list`.
- TUK fields: `name`, `licenseNumber`, `address`, `type`, `pic`, `validUntil`, `status`.
- Asesor fields: `name`, `certificateNumber`, `validUntil`, `status`.
- Required features: filters, responsive table/card behavior, clear status badges.
- Content rules: `Kode Etik Asesor` can be a text section or accordion block, TUK and assessor data should look institutional rather than spreadsheet-like, and validity dates plus active-status definitions must be verified before launch.

### Berita & Pengumuman

- Listing page sections: featured/latest post, category filter, post list, pagination.
- Detail page sections: hero or cover image, article metadata, article body, related posts.
- Normalized categories: `Berita`, `Pengumuman`, `Kegiatan Sertifikasi`, `Promo`.
- Post fields: `title`, `slug`, `excerpt`, `content`, `category`, `coverImage`, `publishedAt`, `author`.
- Content rules: migrate only high-quality and relevant posts, reclassify `Uncategorized` content into approved categories, remove spammy or suspicious inline links, and keep announcement content readable and scannable.

### Galeri

- Listing page sections: album listing, filter by year.
- Detail page sections: album header, event metadata, image grid, lightbox, captions.
- Album fields: `title`, `slug`, `year`, `eventDate`, `location`, `coverImage`, `images`.
- Image fields: `src`, `alt`, `caption`.
- Content rules: albums should represent real organizational activities, images must be optimized before use, and every image should have meaningful alt text rather than file-name alt text.

### Kontak

- Required sections: `Contact information`, `Office address`, `Phone`, `WhatsApp/contact person`, `Email`, `Office hours`, `Google Maps embed`, `Contact form`, `Quick CTA cards`.
- Content rules: phone number, contact person, address, and email must be verified; if a map embed is used it must be accurate and accessible; CTA cards can direct users to registration, the scheme page, or WhatsApp.

### Daftar Online

- Purpose: allow a simple initial release even if no internal registration backend exists yet.
- Supported modes: `External form mode` and `Internal form mode`.
- External form mode requirements: explain certification registration briefly, provide a clear CTA button to the official external registration form, and provide contact fallback if the external link fails or is unavailable.
- Internal form mode requirements: select scheme, participant identity, contact info, document upload, preferred schedule/TUK, confirmation.
- Implementation rule: if backend readiness is uncertain, launch with external form mode first and do not build a fake internal submission flow without confirmed handling requirements.

## 6. Component Requirements

### `SiteHeader`

- Purpose: global navigation and top-level institutional identity.
- Props/data needed: logo, navigation items, current route, CTA config.
- Responsive behavior: desktop horizontal nav; mobile drawer/menu.
- Visual style notes: premium, clean, deep indigo or light institutional variant depending on page context.

### `SiteFooter`

- Purpose: persistent footer with contact, key links, and institutional credibility.
- Props/data needed: organization summary, contact info, link groups, legal text.
- Responsive behavior: stacked columns on mobile, wider multi-column layout on desktop.
- Visual style notes: darker branded footer with clear hierarchy.

### `HeroSection`

- Purpose: high-impact opening block for home and optionally major landing pages.
- Props/data needed: title, subtitle, CTAs, background image/media, overlay settings, trust indicators.
- Responsive behavior: maintain readable text block and CTA stack on small screens.
- Visual style notes: dark indigo premium hero, elegant typography, controlled gold accents.

### `SectionHeader`

- Purpose: reusable section heading with optional eyebrow, title, description, and CTA.
- Props/data needed: eyebrow, title, description, alignment, action.
- Responsive behavior: centered or left-aligned depending on section context.
- Visual style notes: consistent heading rhythm and spacing.

### `CTAButton`

- Purpose: standardize CTA appearance and interaction.
- Props/data needed: label, href or action, variant, size, icon optional.
- Responsive behavior: full-width or stacked on small screens when needed.
- Visual style notes: primary, secondary, and ghost variants with clear focus states.

### `CertificationSchemeCard`

- Purpose: summarize one certification scheme.
- Props/data needed: title, slug, description, target participants, featured flag.
- Responsive behavior: grid card on desktop, full-width stack on mobile.
- Visual style notes: polished card with strong title hierarchy and subtle accent.

### `ProcessStepCard`

- Purpose: explain steps in the certification flow.
- Props/data needed: step number, title, description, optional icon.
- Responsive behavior: grid or vertical timeline depending on viewport.
- Visual style notes: structured and calm, not overly playful.

### `StatisticCard`

- Purpose: display a key metric or institutional fact.
- Props/data needed: label, value, helper text, icon optional.
- Responsive behavior: compact grid on desktop, two-column or single-column stack on mobile.
- Visual style notes: simple, bold value, minimal decoration.

### `NewsCard`

- Purpose: preview a news or announcement post.
- Props/data needed: title, slug, excerpt, category, cover image, published date.
- Responsive behavior: list or grid depending on layout.
- Visual style notes: editorial card with clear metadata treatment.

### `GalleryAlbumCard`

- Purpose: preview one photo album.
- Props/data needed: title, slug, year, event date, location, cover image.
- Responsive behavior: image-forward grid on desktop, stacked card on mobile.
- Visual style notes: premium media card with restrained overlay styling.

### `DataTable`

- Purpose: reusable table for certificate, TUK, and assessor data.
- Props/data needed: columns, rows, pagination, loading state, empty state, mobile rendering strategy.
- Responsive behavior: semantic table on larger screens, card-based representation on mobile.
- Visual style notes: clean rows, strong labels, status visibility, accessible table semantics.

### `SearchFilterBar`

- Purpose: unified search and filter control area.
- Props/data needed: query value, filter options, sort options optional, callbacks/state.
- Responsive behavior: stacked inputs on mobile, inline controls on desktop.
- Visual style notes: quiet form UI with disciplined spacing.

### `StatusBadge`

- Purpose: visually represent status such as active, valid, expired, or inactive.
- Props/data needed: label, tone/variant.
- Responsive behavior: inline in tables and cards.
- Visual style notes: must remain readable and not rely on color alone.

### `Accordion`

- Purpose: collapse long procedural or FAQ content.
- Props/data needed: items with title and content, default state, allow multiple optional.
- Responsive behavior: full-width block.
- Visual style notes: understated institutional styling with clear focus/expanded states.

### `ContactCard`

- Purpose: display one contact method or office detail clearly.
- Props/data needed: label, value, href optional, icon optional, helper text optional.
- Responsive behavior: stack into clean cards on mobile.
- Visual style notes: simple, trustworthy, and action-oriented.

### `Breadcrumbs`

- Purpose: improve orientation and SEO context on inner pages.
- Props/data needed: item list of label and href.
- Responsive behavior: horizontally scrollable if needed on smaller screens.
- Visual style notes: subtle, not dominant.

### `EmptyState`

- Purpose: show helpful messaging when no content or no filter results exist.
- Props/data needed: title, message, action optional.
- Responsive behavior: centered block with scalable spacing.
- Visual style notes: calm and informative, not alarming.

### `LoadingState`

- Purpose: display loading feedback for lists, tables, or async content.
- Props/data needed: variant or context identifier.
- Responsive behavior: adapt to list, grid, or table skeletons.
- Visual style notes: subtle skeleton or placeholder treatment; avoid excessive motion.

### `ResponsiveContainer`

- Purpose: enforce consistent max-width and horizontal padding across the site.
- Props/data needed: size variant optional, children.
- Responsive behavior: adjusts gutters across mobile, tablet, desktop, and large desktop.
- Visual style notes: should support premium spacious layouts.

## 7. Data Models / Content Types

The following models are intentionally practical for a Next.js project and should be enough for static data, local JSON/TS content, or a future CMS integration.

```ts
export interface CertificationScheme {
  title: string
  slug: string
  shortDescription: string
  targetParticipants: string[]
  competencyScope: string[]
  requirements: string[]
  requiredDocuments: string[]
  assessmentProcess: string[]
  skkniNotes?: string[]
  isFeatured?: boolean
}

export interface CertificateHolder {
  name: string
  registrationNumber: string
  scheme: string
  certificateDate: string
  validUntil: string
  status: "Aktif" | "Berlaku" | "Kedaluwarsa" | "Tidak Aktif"
  year: number
}

export interface TUK {
  name: string
  licenseNumber: string
  address: string
  type: string
  pic: string
  validUntil: string
  status: "Aktif" | "Tidak Aktif"
}

export interface Assessor {
  name: string
  certificateNumber: string
  validUntil: string
  status: "Aktif" | "Tidak Aktif" | "Perlu Verifikasi"
}

export interface NewsPost {
  title: string
  slug: string
  excerpt: string
  content: string
  category: "Berita" | "Pengumuman" | "Kegiatan Sertifikasi" | "Promo"
  coverImage?: string
  publishedAt: string
  author: string
}

export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export interface GalleryAlbum {
  title: string
  slug: string
  year: number
  eventDate?: string
  location?: string
  coverImage: string
  images: GalleryImage[]
}

export interface ContactInfo {
  officeName: string
  address: string
  phone: string
  whatsapp?: string
  email?: string
  officeHours?: string
  mapEmbedUrl?: string
}

export interface NavigationItem {
  label: string
  href: string
  children?: NavigationItem[]
}

export interface StatisticItem {
  label: string
  value: string
  description?: string
}

export interface FAQItem {
  question: string
  answer: string
  category?: string
}
```

Implementation notes:

- dates can start as strings if content is manually curated
- slugs should be explicit and human-readable
- richer content fields can be expanded later if a CMS is introduced
- keep models close to actual content needs and avoid speculative abstractions

## 8. Content Migration Notes

- consolidate fragmented pages into stronger destination pages instead of copying the old WordPress structure directly
- merge `Tentang Kami` subpages into `/profil`
- merge year-based certificate pages into `/data-sertifikat`
- merge TUK and assessor pages into `/tuk-asesor`
- normalize blog categories and migrate only valuable posts
- clean duplicate content and repeated wording
- remove spam/suspicious outbound links
- review all existing outbound links before reusing them
- verify phone number, office address, WhatsApp/contact person, and email
- verify legal references and SKKNI references
- standardize certification scheme details into one consistent format
- standardize date formats for all lists and detail pages
- standardize capitalization and Indonesian grammar
- optimize images before migration
- add meaningful alt text for all migrated images
- review table data for accuracy before publishing
- verify whether old year archive data includes duplicates or expired records that need a defined status
- keep a migration checklist so every piece of reused content has an owner and verification state

## 9. SEO Requirements

### General SEO Requirements

- set metadata for every main page
- define unique titles and descriptions per route
- create a clean Open Graph image direction consistent with the navy/silver/gold brand
- use clean slugs in Indonesian where appropriate
- maintain structured heading hierarchy with one clear `h1` per page
- generate `sitemap.xml`
- generate `robots.txt`
- use canonical URLs
- avoid duplicate pages with overlapping intent

### Suggested Keyword Direction

- LSP MICE
- Sertifikasi MICE
- Sertifikasi Profesi MICE
- Lembaga Sertifikasi Profesi MICE
- Sertifikasi Event
- Sertifikasi Event Registration
- Sertifikasi Event Logistic
- Sertifikasi Event Venue Management
- Sertifikasi Event Marketing Communication
- Sertifikasi Stand Building
- Sertifikasi Destination Bidding

### Metadata Direction by Page Type

Home:

- brand-focused title and description
- emphasize LSP MICE, certification, and institutional trust

Profile:

- emphasize organization identity, legal basis, and institutional credibility

Scheme listing:

- target certification scheme discovery and comparison intent

Scheme detail:

- target the exact scheme name plus LSP MICE

Certification page:

- target informational queries about certification process, requirements, and validity

Certificate data page:

- describe it as public verification data
- evaluate indexability based on privacy and policy decisions

TUK & Asesor:

- target institutional support and credibility search intent

News/detail:

- use article-specific metadata

Gallery:

- use event/album context in titles and descriptions

Contact:

- emphasize contact and location details

Registration:

- action-focused title and description

### Open Graph Image Direction

- dark indigo base
- elegant institutional typography
- restrained gold accent line or seal-like detail
- include LSP MICE name clearly
- use consistent OG treatment across major pages

### Structured Data Suggestions

- `Organization` for home, profile, and contact
- `BreadcrumbList` for inner pages
- `Article` or `NewsArticle` for news detail pages
- `FAQPage` for certification FAQ if content is presented as static question-answer pairs
- `CollectionPage` for listing pages where appropriate
- `ImageGallery` for gallery album pages if useful

### Technical SEO Notes for Next.js

- use route-level metadata via `metadata` or `generateMetadata`
- ensure static or generated `sitemap` and `robots` files are present
- keep canonical URLs consistent with the final route structure
- make sure no legacy spam URLs are linked internally

## 10. Accessibility Requirements

- maintain sufficient color contrast for text, controls, and status indicators
- ensure full keyboard navigation across menus, filters, accordions, tables, dialogs, and forms
- provide clear visible focus states
- use semantic HTML for landmarks, headings, lists, buttons, forms, and tables
- ensure tables have accessible headers and remain understandable on mobile
- every form control must have a proper label
- provide meaningful alt text for all content images
- use ARIA only when semantic HTML is insufficient
- support reduced-motion preferences for animated sections or hero transitions
- keep link text clear and descriptive
- do not rely on color alone to convey status or meaning

## 11. Responsive Requirements

### Breakpoint Direction

- mobile
- tablet
- desktop
- large desktop

### Responsive Behavior Expectations

- tables should become cards on mobile
- navbar should become a mobile drawer/menu
- hero text and CTAs should remain readable on small screens
- multi-column sections should stack cleanly on mobile
- CTAs should be stacked on mobile when horizontal space is limited
- filters should collapse into a clean stacked layout on smaller screens
- image grids should preserve clarity without causing layout shifts
- large desktop layouts should feel expansive, not stretched and empty

## 12. Performance Requirements

- optimize all images
- lazy-load below-the-fold media where appropriate
- use font optimization
- avoid unnecessary animation
- use static generation where possible
- paginate large certificate datasets
- avoid huge client-side bundles
- prefer server-rendered or static content for content-heavy pages
- keep interactive JavaScript focused on filters, accordions, menus, and other necessary UI only
- avoid shipping oversized gallery assets to mobile devices

## 13. Security & Cleanup Notes

- do not migrate suspicious/spam links from the old website
- sanitize rich text content if using a CMS or imported HTML
- validate all forms
- protect upload endpoints if internal registration is implemented
- avoid exposing sensitive certificate data beyond what is public and necessary
- check all external links before publishing
- add `rel="noopener noreferrer"` for external links
- review uploaded documents and accepted file types if internal registration is enabled
- treat legacy content as untrusted until reviewed

## 14. Implementation Notes for Codex

- start by creating the documentation and route plan before coding
- treat this document as the primary implementation reference
- build layout and design system first
- implement pages with placeholder/static data first
- keep content separated from components
- use TypeScript types
- prefer reusable components
- ensure responsive behavior from the start
- do not add random libraries unless necessary
- do not invent final legal/certification details if not available; mark them as `TODO`
- do not migrate suspicious links
- use `TODO` comments where official content needs confirmation
- follow the Next.js app-router route structure already defined in this document
- use route-level metadata and file-based SEO conventions supported by the current Next.js version
- keep shared UI in reusable components and use private non-route folders for colocation where helpful
- keep news, gallery, scheme, and certificate data in clearly separated content sources
- validate the final navigation against the approved sitemap before implementation

## 15. Acceptance Criteria

- [ ] all main pages exist
- [ ] navbar and footer are complete
- [ ] design follows the navy/silver/gold system
- [ ] hero feels premium and formal
- [ ] scheme pages are reusable
- [ ] certificate data page supports search/filter/pagination
- [ ] TUK and asesor data are readable
- [ ] news and gallery listing/detail pages exist
- [ ] contact page includes official contact sections
- [ ] mobile responsive behavior is complete
- [ ] headings, buttons, forms, and navigation are accessible
- [ ] no suspicious old links are migrated
- [ ] content `TODO`s are clearly marked where verification is still required
