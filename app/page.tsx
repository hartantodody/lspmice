import type { CSSProperties } from 'react'

import { CTAButton } from '@/app/_components/cta-button'
import { HeroSlideshow } from '@/app/_components/hero-slideshow'
import { HomeNewsShowcase } from '@/app/_components/home-news-showcase'
import { ParticleCanvas } from '@/app/_components/particle-canvas'
import { RevealSection } from '@/app/_components/reveal-section'
import { CertificationSchemeCard } from '@/app/_components/scheme-card'
import { ScrollMergePanels } from '@/app/_components/scroll-merge-panels'
import { SectionHeader } from '@/app/_components/section-heading'
import { SiteShell } from '@/app/_components/site-shell'
import { SpotlightFeatureCard } from '@/app/_components/spotlight-feature-card'
import { MapPin, EnvelopeSimple, Phone, Clock } from '@phosphor-icons/react/dist/ssr'

import { cn } from '@/app/_lib/cn'
import { contactInfo, registrationWhatsappHref } from '@/src/data/contact'
import { featuredCertificationSchemes } from '@/src/data/certification-schemes'
import { newsPosts } from '@/src/data/news'
import {
  homeHeroSlides,
  homeHighlights,
  homePageContent
} from '@/src/data/site'

export default function Home() {
  const featuredNews = newsPosts.slice(0, 3)
  const newsPreview = newsPosts.slice(0, 3)

  return (
    <SiteShell overlayHeader>
      <main className='overflow-x-clip bg-[var(--background)] text-[var(--text-primary)]'>
        <div className='relative'>
          <div className='sticky top-0 h-[100svh]'>
            <HeroSlideshow
              slides={homeHeroSlides}
              hero={homePageContent.hero}
              contact={{
                address: contactInfo.address,
                phone: contactInfo.phone,
                officeHours: contactInfo.officeHours
              }}
            />
          </div>

          <div className='relative z-20 bg-transparent'>
            <RevealSection
              id='tentang'
              variant='mask'
              className='relative isolate overflow-hidden' //px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28
            >
              <ScrollMergePanels
                className='relative z-10 mx-auto min-h-[100svh] max-w-[1320px] lg:grid-cols-[1.02fr_0.98fr]'
                leftClassName="relative isolate px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:pl-8 lg:pr-10 lg:pb-24 lg:pt-28 lg:before:absolute lg:before:inset-y-0 lg:before:right-0 lg:before:w-[100vw] lg:before:rounded-tr-[36px] lg:before:bg-[linear-gradient(180deg,#F8FAFC_0%,#E6F0F5_100%)] lg:before:content-['']"
                rightClassName="relative isolate px-4 pb-16 pt-20 text-white sm:px-6 sm:pb-20 sm:pt-24 lg:pl-10 lg:pr-8 lg:pb-24 lg:pt-28 lg:before:absolute lg:before:inset-y-0 lg:before:left-0 lg:before:w-[100vw] lg:before:rounded-tl-[36px] lg:before:bg-[linear-gradient(180deg,#00253A_0%,#003B5C_100%)] lg:before:content-['']"
                left={
                  <div className='relative z-10 mx-auto max-w-[38rem] rounded-[30px] bg-[linear-gradient(180deg,#F8FAFC_0%,#E6F0F5_100%)] px-7 py-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:px-10 sm:py-11 lg:ml-0 lg:mr-auto lg:max-w-[42rem] lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none'>
                    <div className='space-y-9'>
                      <SectionHeader
                        eyebrow={homePageContent.about.eyebrow}
                        title={homePageContent.about.title}
                        accent={homePageContent.about.accent}
                        description={homePageContent.about.description}
                      />

                      <div className='grid gap-4 sm:gap-5'>
                        {homeHighlights.map((card, index) => (
                          <SpotlightFeatureCard
                            key={card.title}
                            title={card.title}
                            description={card.description}
                            delay={`${index * 100 + 220}ms`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                }
                right={
                  <div className='relative z-10 mx-auto max-w-[38rem] rounded-[30px] bg-[linear-gradient(180deg,#00253A_0%,#003B5C_100%)] px-8 py-10 shadow-[0_24px_72px_rgba(0,37,58,0.22)] sm:px-10 sm:py-11 lg:ml-auto lg:mr-0 lg:max-w-[42rem] lg:rounded-none lg:bg-transparent lg:px-0 lg:py-0 lg:shadow-none'>
                    <div className='space-y-9'>
                      <p
                        data-reveal
                        style={{ '--reveal-delay': '260ms' } as CSSProperties}
                        className='text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent-soft)]'
                      >
                        {homePageContent.aboutPanel.eyebrow}
                      </p>
                      <h3
                        data-reveal
                        style={{ '--reveal-delay': '340ms' } as CSSProperties}
                        className='mt-4 max-w-[16ch] text-3xl font-semibold tracking-[-0.04em] text-white'
                      >
                        {homePageContent.aboutPanel.title}
                      </h3>
                      <p
                        data-reveal
                        style={{ '--reveal-delay': '420ms' } as CSSProperties}
                        className='mt-5 max-w-2xl text-sm leading-8 text-white/70'
                      >
                        {homePageContent.aboutPanel.description}
                      </p>

                      <div className='space-y-5'>
                        {homePageContent.aboutPanel.points.map(
                          (point, index) => (
                            <div
                              key={point}
                              data-reveal
                              style={
                                {
                                  '--reveal-delay': `${index * 90 + 500}ms`
                                } as CSSProperties
                              }
                              className='flex gap-4 rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.08)] px-7 py-6 backdrop-blur-sm sm:px-8'
                            >
                              <span className='mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)] text-xs font-bold text-white'>
                                {index + 1}
                              </span>
                              <p className='text-sm leading-7 text-white/72'>
                                {point}
                              </p>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                }
              />
            </RevealSection>

            <RevealSection
              id='skema'
              variant='right'
              className='relative overflow-hidden bg-[#00152A] px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28'
            >
              {/* Antigravity Cursor Particles Background */}
              <ParticleCanvas className="opacity-90" />

              <div className='relative z-10 mx-auto max-w-[1320px]'>
                <SectionHeader
                  eyebrow={homePageContent.certification.eyebrow}
                  title={homePageContent.certification.title}
                  accent={homePageContent.certification.accent}
                  description={homePageContent.certification.description}
                  className='[&_p:first-child]:text-[var(--brand-accent-soft)] [&_h2]:text-white [&_p:last-child]:text-white/60 [&_p.text-balance]:text-blue-200'
                />

                <div className='mt-10 grid gap-5 lg:grid-cols-2 xl:grid-cols-3'>
                  {featuredCertificationSchemes.map((scheme, index) => (
                    <CertificationSchemeCard
                      key={scheme.slug}
                      scheme={scheme}
                      variant='featured'
                      theme='dark'
                      delay={`${index * 80 + 160}ms`}
                    />
                  ))}
                </div>

                <div className='mt-8'>
                  <CTAButton href='/skema-sertifikasi' className='!border-white/20 !bg-white/10 !text-white hover:!bg-white/20 backdrop-blur-sm'>
                    {homePageContent.certification.ctaLabel}
                  </CTAButton>
                </div>
              </div>
            </RevealSection>

            <RevealSection
              id='berita'
              variant='mask'
              className='bg-[linear-gradient(180deg,#f8fafc_0%,#e6f0f5_100%)] px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28'
            >
              <div className='mx-auto max-w-[1320px]'>
                <SectionHeader
                  eyebrow={homePageContent.news.eyebrow}
                  title={homePageContent.news.title}
                  accent={homePageContent.news.accent}
                  description={homePageContent.news.description}
                />

                <HomeNewsShowcase
                  featuredPosts={featuredNews}
                  archivePosts={newsPreview}
                  ctaLabel={homePageContent.news.ctaLabel}
                />
              </div>
            </RevealSection>

            <RevealSection
              id='kontak'
              variant='left'
              className='bg-[#f8fafc] px-4 pb-14 pt-20 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28'
            >
              <div className='relative overflow-hidden mx-auto max-w-[1320px] scroll-mt-28 rounded-[34px] border border-white/50 bg-[linear-gradient(135deg,#00253A_0%,#003B5C_58%,#005A8C_100%)] p-6 text-white shadow-[0_28px_100px_rgba(0,37,58,0.28)] sm:scroll-mt-32 sm:p-8 lg:p-10'>
                <div className='pointer-events-none absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:24px_24px] animate-pan-diagonal'></div>
                <div className='relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end'>
                  <div>
                    <p
                      data-reveal
                      style={{ '--reveal-delay': '0ms' } as CSSProperties}
                      className='text-[11px] font-semibold uppercase tracking-[0.34em] text-[var(--brand-accent-soft)]'
                    >
                      {homePageContent.contact.eyebrow}
                    </p>
                    <h2
                      data-reveal
                      style={{ '--reveal-delay': '90ms' } as CSSProperties}
                      className='mt-4 max-w-3xl text-balance text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl'
                    >
                      {homePageContent.contact.title}
                    </h2>
                    <p
                      data-reveal
                      style={{ '--reveal-delay': '180ms' } as CSSProperties}
                      className='mt-5 max-w-2xl text-sm leading-8 text-white/68'
                    >
                      {homePageContent.contact.description}
                    </p>

                    <div
                      data-reveal
                      style={{ '--reveal-delay': '270ms' } as CSSProperties}
                      className='mt-7 flex flex-col gap-3 sm:flex-row'
                    >
                      <CTAButton
                        href={homePageContent.contact.actions[0].href}
                        variant='secondary'
                        className='border-white bg-white text-[var(--brand-primary-dark)] hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent-dark)]'
                      >
                        {homePageContent.contact.actions[0].label}
                      </CTAButton>
                      <CTAButton
                        href={
                          homePageContent.contact.actions[1].href ===
                          '#register-intent'
                            ? registrationWhatsappHref
                            : homePageContent.contact.actions[1].href
                        }
                        variant='primary'
                        className='!border-[var(--brand-accent)] !bg-[var(--brand-accent)] !text-white hover:!border-[var(--brand-accent-dark)] hover:!bg-[var(--brand-accent-dark)]'
                      >
                        {homePageContent.contact.actions[1].label}
                      </CTAButton>
                    </div>
                  </div>

                  <div className='grid gap-4'>
                    {homePageContent.contact.infoCards.map(
                      ({ label, value }, index) => {
                        let href = undefined;
                        if (label === 'Alamat') {
                          href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
                        } else if (label === 'Office') {
                          href = `tel:${value.replace(/\D/g, '')}`;
                        } else if (label === 'Contact Person') {
                          href = `https://wa.me/${value.replace(/\D/g, '').replace(/^0/, '62')}`;
                        } else if (label === 'Email') {
                          href = `mailto:${value}`;
                        }

                        const CardWrapper = href ? 'a' : 'div';

                        return (
                          <CardWrapper
                            key={label}
                            href={href}
                            target={href && href.startsWith('http') ? '_blank' : undefined}
                            rel={href && href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            data-reveal
                            style={
                              {
                                '--reveal-delay': `${index * 90 + 140}ms`
                              } as CSSProperties
                            }
                            className={cn(
                              'group rounded-[24px] border border-white/12 bg-[rgba(255,255,255,0.06)] p-5 backdrop-blur-md',
                              href && 'transition-colors hover:bg-[rgba(255,255,255,0.12)] hover:border-white/20'
                            )}
                          >
                            <div className='flex items-start gap-4'>
                              <div className={cn(
                                'inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--brand-accent)]/20 p-2.5 text-[var(--brand-accent-soft)]',
                                href && 'transition-colors group-hover:bg-[var(--brand-accent)] group-hover:text-white'
                              )}>
                                {label === 'Alamat' && <MapPin size={24} weight="duotone" />}
                                {label === 'Email' && <EnvelopeSimple size={24} weight="duotone" />}
                                {(label === 'Office' || label === 'Contact Person') && <Phone size={24} weight="duotone" />}
                                {label === 'Office Hours' && <Clock size={24} weight="duotone" />}
                              </div>
                              <div>
                                <p className='text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--brand-accent-soft)]'>
                                  {label}
                                </p>
                                <p className='mt-1.5 font-medium leading-7 text-white/94'>{value}</p>
                              </div>
                            </div>
                          </CardWrapper>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </main>
    </SiteShell>
  )
}
