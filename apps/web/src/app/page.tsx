// app/page.tsx
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { generateSEO, JsonLd, organizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';

import section1 from '@public/home/section1.jpg';
import icon1 from '@public/home/time.svg';
import image1 from "@public/home/image1.jpg"
import image2 from "@public/home/image2.jpg"
import icon2 from '@public/home/kn.svg';
import icon3 from '@public/home/mess.svg';
import icon4 from '@public/home/global.svg';
import imgDefault from '@public/home/test.jpg';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';

// Dynamic imports for performance
const ServicesCarousel = dynamic(() => import('@/components/ServicesCarousel'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));

export const metadata: Metadata = generateSEO({
  title: 'Comprehensive Accounting & Financial Advisory Services | Pink Accounting',
  description: 'Pink Accounting provides comprehensive accounting, bookkeeping, cash flow management, and strategic advisory solutions for SMEs. Contact us now to build a robust financial system.',
  url: '/',
});

const STATS = [
  {
    title: '98% Retention Since 2020',
    description: 'Clients rave about our dedication (see their stories below).',
    icon: icon1,
    alt: 'Client retention icon'
  },
  {
    title: '15+ Years Expertise',
    description: 'Led by Pinky Bui (Master of Professional Accounting, MIPA), blending local SEQ knowledge with global standards.',
    icon: icon2,
    alt: 'Expertise icon'
  },
  {
    title: 'Always Accessible',
    description: 'Business hours, Saturday appointments, online after-hours—no more waiting for answers.',
    icon: icon3,
    alt: 'Accessibility icon'
  },
  {
    title: 'Hybrid Team Power',
    description: 'Australian professionals + offshore specialists for premium, cost-effective service.',
    icon: icon4,
    alt: 'Team power icon'
  },
];

const VALUE_PROPOSITIONS = [
  {
    color: 'primary' as const,
    img: imgDefault,
    title: 'Reclaim Your Time',
    description: 'Outsource bookkeeping chaos to our experts, focus on scaling while we handle the details.',
    alt: 'Time management illustration'
  },
  {
    color: 'secondary' as const,
    img: imgDefault,
    title: 'Master Cashflow',
    description: 'Real-time forecasts and optimisation ensure steady profitability, avoiding common pitfalls that sink 80% of growing firms.',
    alt: 'Cashflow management illustration'
  },
  {
    color: 'primary' as const,
    img: imgDefault,
    title: 'Build Scalable Systems',
    description: 'Custom infrastructure for $500K-$3M+ growth, from Xero setups to KPI dashboards.',
    alt: 'Scalable systems illustration'
  },
  {
    color: 'secondary' as const,
    img: imgDefault,
    title: 'Tax-Optimised Compliance',
    description: 'Stay compliant whilst minimising tax liability. Our registered tax agents ensure you\'re taking advantage of every legitimate opportunity to reduce your tax burden.',
    alt: 'Tax compliance illustration'
  },
];

const WHO_WE_SERVE = [
  {
    title: 'Professional Services (Consultants, Agencies)',
    description: 'We moved to the Growth package, and the numbers speak for themselves. Thanks to the monthly management reports, our gross profit per client is up 15% in six months.',
  },
  {
    title: 'Trade & Construction (Builders, Trades)',
    description: 'Managing cash flow across multiple sites was killing our growth. Pink\'s Scale package, especially the weekly cashflow oversight, helped us tighten our accounts payable cycle from 45 days to just 30 days.',
  },
  {
    title: 'Healthcare & Wellness (Medical Practices, Allied Health)',
    description: 'As a growing dental practice, we needed flawless compliance and a clear path for expansion. The Foundation package ensures we are 100% tax compliant.',
  },
  {
    title: 'Technology & Creative Services (Tech Startups, Digital Agencies)',
    description: 'Scaling from $500K to $1M turnover meant our systems needed an overhaul. Pink not only restructured our Chart of Accounts but also perfectly integrated our Xero setup.',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Pink Accounting transformed our financial chaos into clarity. Within six months, we improved our cashflow by 40% and finally understood our numbers. Pinky and her team are worth every dollar.',
    author: 'Amy M.',
    position: 'Cafe Business Owner, Brisbane',
  },
  {
    quote: 'As we scaled from $800K to $2.1M, Pink Accounting scaled with us. They didn\'t just keep up, they anticipated our needs and proactively solved problems before they became issues.',
    author: 'Phillip P.',
    position: 'Business Operator, Northside Brisbane',
  },
  {
    quote: 'The responsiveness is incredible. I can email at 9 PM and know I\'ll get a thoughtful reply the next morning. It\'s like having an in-house financial team without the overhead.',
    author: 'Andy T.',
    position: 'Professional Services, Brisbane',
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
]);

export default function Home() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={breadcrumbSchema} />

      <Section variant="secondary" size="lg" container="none">
        <div className={designTokens.spacing.containerNarrow}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
              <h1 className={cn(designTokens.typography.h1, 'text-gray-900')}>
                Brisbane-based accounting firm helping local businesses thrive
              </h1>

              <p className={cn(designTokens.typography.body, 'text-gray-700')}>
                Your Local Growth Partner for South-East Queensland businesses ready to grow beyond $500K
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className={componentPresets.button.primary}>
                  <span className="flex flex-col items-start">
                    <span>Book Your Strategy Session</span>
                    <span className="font-normal text-sm">Download Financial Health Checklist</span>
                  </span>
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <Image
                src={section1}
                alt="Brisbane accounting team helping local businesses"
                className="w-full aspect-square object-cover rounded-lg lg:rounded-none lg:rounded-l-2xl shadow-xl"
                width={600}
                height={600}
                priority
                placeholder="blur"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>
<div>
  
</div>
      {/* Stats Section */}
      <Section>
        <div className={cn(
          designTokens.grid.cols4,
          designTokens.spacing.gap.md
        )}>
          {STATS.map((stat, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.base,
                'flex flex-col items-center text-center',
                designTokens.spacing.card.paddingSm,
                designTokens.transitions.base,
                'hover:-translate-y-1'
              )}
            >
              <CardContent className="p-0 flex flex-col gap-3 items-center">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={stat.icon}
                    alt={stat.alt}
                    width={64}
                    height={64}
                    loading="lazy"
                  />
                </div>
                <h3 className={cn(designTokens.typography.h5, 'text-gray-900')}>
                  {stat.title}
                </h3>
                <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Value Propositions */}
      <Section variant="neutral">
        <SectionHeader
          title="Why Growing Businesses Choose Pink Accounting"
          description="Strategic financial management that scales with your business"
        />

        <div className="space-y-8 md:space-y-12">
          {VALUE_PROPOSITIONS.map((item, index) => (
            <Card
              key={index}
              className={cn(
                'overflow-hidden p-0 border-none',
                designTokens.shadows.md
              )}
            >
              <CardContent className="p-0">
                <div className={cn(
                  'grid md:grid-cols-2 gap-0 items-center',
                  index % 2 === 1 && 'md:flex-row-reverse'
                )}>
                  <div className={cn(
                    'relative h-64 md:h-full',
                    index % 2 === 1 && 'md:order-2'
                  )}>
                    <Image
                      src={item.img}
                      alt={item.alt}
                      fill
                      className="object-cover aspect-video w-full"
                      loading="lazy"
                    // sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  <div className={cn(
                    componentPresets.card.colored(item.color),
                    'p-8 md:p-10 lg:p-12',
                    'flex flex-col gap-4',
                    index % 2 === 1 && 'md:order-1'
                  )}>
                    <h3 className={cn(designTokens.typography.h3, 'text-gray-900')}>
                      {item.title}
                    </h3>
                    <p className={cn(designTokens.typography.body, 'text-gray-700')}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services Carousel */}
      <Section>
        <SectionHeader
          title="Our Service Packages"
          description="Comprehensive solutions tailored to your business stage"
        />
        <ServicesCarousel />

        <div className="flex flex-col items-center gap-6 mt-12">
          <p className={cn(designTokens.typography.body, 'text-gray-600 text-center max-w-3xl')}>
            All packages available as monthly investments. Contact us to discuss unbundled services tailored to your specific needs.
          </p>
          <Button className={componentPresets.button.primary}>
            Schedule a Consultation to Discuss Your Needs
          </Button>
        </div>
      </Section>

      {/* Who We Serve */}
      <Section variant="neutral">
        <SectionHeader title="Who We Serve Best" />

        <div className={cn(designTokens.grid.cols2, designTokens.spacing.gap.md)}>
          {WHO_WE_SERVE.map((item, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.interactive,
                designTokens.spacing.card.padding
              )}
            >
              <CardContent className="p-0">
                <h3 className={cn(designTokens.typography.h4, 'text-gray-900 mb-4')}>
                  {item.title}
                </h3>
                <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="primary">
        <SectionHeader title="Client Success Stories" />
        <TestimonialsSection testimonials={TESTIMONIALS} />
      </Section>

      {/* Our Story */}
      <Section>
        <SectionHeader
          title="Our Story"
          description="How Pink Accounting started during COVID-19"
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
          <Card className={cn(
            'bg-gradient-to-br from-secondary-50 to-secondary-100',
            'border-none',
            designTokens.shadows.lg,
            designTokens.spacing.card.paddingLg
          )}>
            <CardContent className="p-0 text-center">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl" role="img" aria-label="Pink flower">🌸</span>
              </div>
              <div className="text-6xl font-bold text-cyan-600 mb-2">2020</div>
              <p className={cn(designTokens.typography.body, 'text-gray-700 font-medium')}>
                Founded during COVID-19
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="border-l-4 border-cyan-500 pl-6">
              <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-3')}>
                Born from Challenge
              </h3>
              <p className={cn(designTokens.typography.body, 'text-gray-600')}>
                Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
              </p>
            </div>

            <div className="border-l-4 border-teal-500 pl-6">
              <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-3')}>
                Evolved with Purpose
              </h3>
              <p className={cn(designTokens.typography.body, 'text-gray-600')}>
                What started as supporting businesses through crisis has evolved into a specialised practice helping growth-focused service-based companies scale with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className={cn(
          'bg-white border-2 border-cyan-500',
          designTokens.shadows.xl,
          designTokens.spacing.card.paddingLg
        )}>
          <CardContent className="p-0 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={cn(designTokens.typography.h2, 'text-gray-900 mb-4')}>
              Our Promise
            </h3>
            <p className={cn(designTokens.typography.lead, 'text-gray-600 max-w-3xl mx-auto')}>
              Quality work, accessible service, and dedicated partnership at every stage of your growth journey.
            </p>
          </CardContent>
        </Card>
      </Section>
    </>
  );
}