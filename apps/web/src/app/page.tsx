'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { generateSEO, JsonLd, organizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';

import section1 from '@public/home/section1.jpg';
import icon1 from '@public/home/time.svg';
import image1 from "@public/home/image1.png"
import image2 from "@public/home/image2.png"
import icon2 from '@public/home/kn.svg';
import icon3 from '@public/home/mess.svg';
import icon4 from '@public/home/global.svg';
import imgDefault from '@public/home/test.jpg';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { Check, CheckCircle, Clock, TrendingUp, Users, X } from 'lucide-react';

// Dynamic imports for performance
const ServicesCarousel = dynamic(() => import('@/components/ServicesCarousel'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100 rounded-lg" />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'));


 const differentiators = [
    {
      stat: '98%',
      label: 'Client Retention Since 2020',
      description: 'Our clients stay because we deliver exceptional quality, accessibility, and genuine dedication to their success.'
    },
    {
      stat: '15+',
      label: 'Years of Financial Expertise',
      description: 'Led by Pinky Bui, a qualified accountant with a Master of Professional Accounting.'
    },
    {
      stat: '24/7',
      label: 'Accessible When You Need Us',
      description: 'Available during business hours, Saturdays by appointment, and accessible online after hours.'
    }
  ];

const benefits = [
  {
    icon: Clock,
    title: 'Reclaim Your Time',
    description: 'Outsource bookkeeping chaos to our experts, focus on scaling while we handle the details.'
  },
  {
    icon: TrendingUp,
    title: 'Master Cashflow',
    description: 'Real-time forecasts and optimisation ensure steady profitability, avoiding common pitfalls that sink 80% of growing firms.'
  },
  {
    icon: Users,
    title: 'Build Scalable Systems',
    description: 'Custom infrastructure for $500K-$3M+ growth, from Xero setups to KPI dashboards.'
  },
  {
    icon: CheckCircle,
    title: 'Tax-Optimised Compliance',
    description: 'Stay compliant whilst minimising tax liability. Our registered tax agents ensure you\'re taking advantage of every legitimate opportunity.'
  }
];

const WHO_WE_SERVE = [
  {
    title: 'Professional Services',
    description: 'Consultants, advisers, agencies, and service providers who need their financial operations to run seamlessly whilst they focus on client delivery.',
  },
  {
    title: 'Trade & Construction',
    description: 'Builders, contractors, and trades businesses managing multiple projects, cashflow cycles, and growing teams.',
  },
  {
    title: 'Healthcare & Wellness',
    description: 'Medical practices, allied health, and wellness businesses requiring meticulous compliance and strategic growth support.',
  },
  {
    title: 'Technology & Creative Services',
    description: 'Tech startups, digital agencies, and creative businesses scaling rapidly and needing financial systems that keep pace.',
  },
  {
    title: 'Business Services',
    description: 'Professional service businesses including recruitment, training, property management, and other B2B service providers.',
  },
];

const TESTIMONIALS = [
  {
    avatar: "https://images.pexels.com/photos/13736439/pexels-photo-13736439.jpeg",
    quote: 'Pink Accounting transformed our financial chaos into clarity. Within six months, we improved our cashflow by 40% and finally understood our numbers. Pinky and her team are worth every dollar.',
    author: 'Amy M.',
    position: 'Cafe Business Owner, Brisbane',
  },
  {
    avatar: "https://images.pexels.com/photos/6888761/pexels-photo-6888761.jpeg ",
    quote: 'As we scaled from $800K to $2.1M, Pink Accounting scaled with us. They didn\'t just keep up, they anticipated our needs and proactively solved problems before they became issues.',
    author: 'Phillip P.',
    position: 'Business Operator, Northside Brisbane',
  },
  {
    avatar: "https://images.pexels.com/photos/11899617/pexels-photo-11899617.jpeg",
    quote: 'The responsiveness is incredible. I can email at 9 PM and know I\'ll get a thoughtful reply the next morning. It\'s like having an in-house financial team without the overhead.',
    author: 'Andy T.',
    position: 'Professional Services, Brisbane',
  },
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
]);

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
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
                <Button className={cn(componentPresets.button.primary, 'bg-[#ed1651]')}>
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


      <Section className='w-full bg-white!'>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-pink-600 mb-2">{item.stat}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{item.label}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="flex justify-center gap-2 mt-8">
          {STATS.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                'transition-all duration-300 rounded-full',
                index === current
                  ? 'bg-gray-800 w-8 h-2'
                  : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
      </Section>

      {/* Value Propositions */}
      <Section variant="neutral">
        <SectionHeader
          title="Why Growing Businesses Choose Pink Accounting"
          description="Strategic financial management that scales with your business"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Carousel */}
      <Section>
        <SectionHeader
          title="Our Service Packages"
          description="Comprehensive solutions tailored to your business stage"
        />
        <ServicesCarousel />

        {/* <div className="flex flex-col items-center gap-6 mt-12">
          <p className={cn(designTokens.typography.body, 'text-gray-600 text-center max-w-3xl')}>
            All packages available as monthly investments. Contact us to discuss unbundled services tailored to your specific needs.
          </p>
          <Button className={componentPresets.button.primary}>
            Schedule a Consultation to Discuss Your Needs
          </Button>
        </div> */}
        <div className="bg-white rounded-xl mt-10 shadow-lg border-2 border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 min-w-[300px]">
                    Features
                  </th>
                  {packageDetails.map((pkg, index) => (
                    <th key={index} className="px-6 py-4 text-center min-w-[140px]">
                      <div className="text-lg font-bold text-gray-900">{pkg.name}</div>
                      <div className="text-xs text-gray-600 mt-1">{pkg.description}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allFeatures.map((feature, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-700">{feature}</td>
                    {packageDetails.map((pkg, pkgIndex) => (
                      <td key={pkgIndex} className="px-6 py-4 text-center">
                        {pkg.features[feature as keyof typeof pkg.features] ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-[#ed1651]" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="w-5 h-5 text-gray-300" />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            'bg-linear-to-br from-secondary-50 to-secondary-100',
            'border-none',
            designTokens.shadows.lg,
            designTokens.spacing.card.paddingLg
          )}>
            <CardContent className="p-0 text-center">
              <div className="w-32 h-32 mx-auto bg-linear-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl" role="img" aria-label="Pink flower">🌸</span>
              </div>
              <div className="text-6xl font-bold text-[#ed1651] mb-2">2020</div>
              <p className={cn(designTokens.typography.body, 'text-gray-700 font-medium')}>
                Founded during COVID-19
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-6">
              <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-3')}>
                Born from Challenge
              </h3>
              <p className={cn(designTokens.typography.body, 'text-gray-600')}>
                Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
              </p>
            </div>

            <div className="border-l-4 border-black pl-6">
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
          'bg-white border-2 border-[#ed1651]',
          designTokens.shadows.xl,
          designTokens.spacing.card.paddingLg
        )}>
          <CardContent className="p-0 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ed1651] rounded-full mb-6">
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

const packageDetails = [
  {
    name: 'Essentials',
    description: 'For businesses seeking compliance-focused support',
    perfectFor: 'Businesses with in-house bookkeeping who need tax compliance only',
    features: {
      'Quarterly BAS preparation and lodgement': true,
      'Annual tax return preparation': true,
      'Basic tax planning advice': true,
      'Email support during business hours': true,
      'Annual compliance calendar': true,
      'Monthly bookkeeping and reconciliation': false,
      'Cashflow monitoring and reporting': false,
      'Quarterly financial health check-ins': false,
      'Phone support': false,
      'Fortnightly cashflow management': false,
      'Monthly management reporting': false,
      'Strategic tax planning sessions': false,
      'Payroll optimisation': false,
      'Priority support': false,
      'Weekly cashflow oversight': false,
      'Monthly strategic consultancy': false,
      'Custom dashboards': false,
      'Direct Principal access': false,
      'After-hours support': false
    }
  },
  {
    name: 'Foundation',
    description: 'For businesses $500K-$1M turnover',
    perfectFor: 'Growing businesses ready to outsource bookkeeping and gain financial clarity',
    features: {
      'Quarterly BAS preparation and lodgement': true,
      'Annual tax return preparation': true,
      'Basic tax planning advice': true,
      'Email support during business hours': true,
      'Annual compliance calendar': true,
      'Monthly bookkeeping and reconciliation': true,
      'Cashflow monitoring and reporting': true,
      'Quarterly financial health check-ins': true,
      'Phone support': true,
      'Fortnightly cashflow management': false,
      'Monthly management reporting': false,
      'Strategic tax planning sessions': false,
      'Payroll optimisation': false,
      'Priority support': false,
      'Weekly cashflow oversight': false,
      'Monthly strategic consultancy': false,
      'Custom dashboards': false,
      'Direct Principal access': false,
      'After-hours support': false
    }
  },
  {
    name: 'Growth',
    description: 'For businesses $1M-$2M turnover',
    perfectFor: 'Established businesses scaling operations and needing proactive financial partnership',
    features: {
      'Quarterly BAS preparation and lodgement': true,
      'Annual tax return preparation': true,
      'Basic tax planning advice': true,
      'Email support during business hours': true,
      'Annual compliance calendar': true,
      'Monthly bookkeeping and reconciliation': true,
      'Cashflow monitoring and reporting': true,
      'Quarterly financial health check-ins': true,
      'Phone support': true,
      'Fortnightly cashflow management': true,
      'Monthly management reporting': true,
      'Strategic tax planning sessions': true,
      'Payroll optimisation': true,
      'Priority support': true,
      'Weekly cashflow oversight': false,
      'Monthly strategic consultancy': false,
      'Custom dashboards': false,
      'Direct Principal access': false,
      'After-hours support': false
    }
  },
  {
    name: 'Scale',
    description: 'For businesses $2M-$3M+ turnover',
    perfectFor: 'Ambitious businesses requiring comprehensive financial partnership and strategic guidance',
    features: {
      'Quarterly BAS preparation and lodgement': true,
      'Annual tax return preparation': true,
      'Basic tax planning advice': true,
      'Email support during business hours': true,
      'Annual compliance calendar': true,
      'Monthly bookkeeping and reconciliation': true,
      'Cashflow monitoring and reporting': true,
      'Quarterly financial health check-ins': true,
      'Phone support': true,
      'Fortnightly cashflow management': true,
      'Monthly management reporting': true,
      'Strategic tax planning sessions': true,
      'Payroll optimisation': true,
      'Priority support': true,
      'Weekly cashflow oversight': true,
      'Monthly strategic consultancy': true,
      'Custom dashboards': true,
      'Direct Principal access': true,
      'After-hours support': true
    }
  }
];

const allFeatures = [
  'Quarterly BAS preparation and lodgement',
  'Annual tax return preparation',
  'Basic tax planning advice',
  'Email support during business hours',
  'Annual compliance calendar',
  'Monthly bookkeeping and reconciliation',
  'Cashflow monitoring and reporting',
  'Quarterly financial health check-ins',
  'Phone support',
  'Fortnightly cashflow management',
  'Monthly management reporting',
  'Strategic tax planning sessions',
  'Payroll optimisation',
  'Priority support',
  'Weekly cashflow oversight',
  'Monthly strategic consultancy',
  'Custom dashboards',
  'Direct Principal access',
  'After-hours support'
];