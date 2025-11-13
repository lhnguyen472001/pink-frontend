'use client'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { generateSEO, JsonLd, organizationSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';

import section1 from '@public/home/section1.jpg';
import imgCeo from '@public/ceo.jpg';
import SectionHeader from '@/components/SectionHeader';
import type { Metadata } from 'next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import { Check, CheckCircle, Clock, TrendingUp, Users, X } from 'lucide-react';
import Link from 'next/link';

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

      {/* Hero Section - Optimized spacing */}
      <Section variant="secondary" size="lg" container="none" className='relative'>
        <div className={designTokens.spacing.containerNarrow}>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-16 items-center">
            <div className="relative aspect-square lg:aspect-auto flex flex-col gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1 rounded-lg lg:rounded-none overflow-hidden">


              <div className="relative z-10 p-4 sm:p-6 md:p-8 lg:p-0 flex flex-col justify-center h-full gap-4 sm:gap-6 lg:gap-8">
                <h1 className={cn(
                  designTokens.typography.h1,
                  'text-white lg:text-gray-900',
                  'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                )}>
                  Brisbane-based accounting firm helping local businesses thrive
                </h1>

                <p className={cn(
                  designTokens.typography.body,
                  'text-white/90 lg:text-gray-700',
                  'text-sm sm:text-base md:text-lg'
                )}>
                  Your Local Growth Partner for South-East Queensland businesses ready to grow beyond $500K
                </p>

                <Link href={"/contact"} className="flex w-fit flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button className={cn(
                    componentPresets.button.primary,
                    'bg-[#ed1651] cursor-pointer shadow-lg',
                    'text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4'
                  )}>
                    <span className="flex flex-col items-start">
                      <span>Book Your Strategy Session</span>
                      <span className="font-normal text-xs sm:text-sm">Download Financial Health Checklist</span>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:block order-1 lg:order-2">
              <Image
                src={section1}
                alt="Brisbane accounting team helping local businesses"
                className="w-full aspect-square object-cover rounded-lg lg:rounded-none lg:rounded-l-2xl shadow-xl"
                width={600}
                height={600}
                priority
                placeholder="blur"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 md:hidden">
          <Image
            src={section1}
            alt="Brisbane accounting team helping local businesses"
            className="w-full h-full object-cover"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0vw"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70" />
        </div>
      </Section>

      {/* Stats Section - Optimized spacing */}
      <Section className='w-full bg-white!'>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="text-center px-2 sm:px-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-2">
                  {item.stat}
                </div>
                <div className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section - Optimized grid and spacing */}
      <Section variant="neutral">
        <SectionHeader
          title="Why Growing Businesses Choose Pink Accounting"
          description="Strategic financial management that scales with your business"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-pink-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Services Carousel - Optimized table for mobile */}
      <Section>
        <SectionHeader
          title="Our Service Packages"
          description="Comprehensive solutions tailored to your business stage"
        />
        <ServicesCarousel />

        <div className="bg-white rounded-lg sm:rounded-xl mt-8 sm:mt-10 shadow-lg border-2 border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b-2 border-gray-200">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-semibold text-gray-900 min-w-[200px] sm:min-w-[250px] md:min-w-[300px] sticky left-0 bg-slate-50 z-10">
                    Features
                  </th>
                  {packageDetails.map((pkg, index) => (
                    <th key={index} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]">
                      <div className="text-sm sm:text-base md:text-lg font-bold text-gray-900">
                        {pkg.name}
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-600 mt-1">
                        {pkg.description}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {allFeatures.map((feature, index) => (
                  <tr key={index} className="hover:bg-slate-50 transition-colors">
                    <td className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-xs sm:text-sm text-gray-700 sticky left-0 bg-white z-10">
                      {feature}
                    </td>
                    {packageDetails.map((pkg, pkgIndex) => (
                      <td key={pkgIndex} className="px-3 sm:px-4 md:px-6 py-3 sm:py-4 text-center">
                        {pkg.features[feature as keyof typeof pkg.features] ? (
                          <div className="flex justify-center">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ed1651]" />
                          </div>
                        ) : (
                          <div className="flex justify-center">
                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
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

      {/* Who We Serve - Optimized cards */}
      <Section variant="neutral">
        <SectionHeader title="Who We Serve Best" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {WHO_WE_SERVE.map((item, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.interactive,
                'p-4 sm:p-5 md:p-6'
              )}
            >
              <CardContent className="p-0">
                <h3 className={cn(
                  designTokens.typography.h4,
                  'text-gray-900 mb-3 sm:mb-4',
                  'text-lg sm:text-xl'
                )}>
                  {item.title}
                </h3>
                <p className={cn(
                  designTokens.typography.bodySmall,
                  'text-gray-600',
                  'text-sm sm:text-base leading-relaxed'
                )}>
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

      {/* Our Story - Optimized layout */}
      <Section>
        <SectionHeader
          title="Our Story"
          description="How Pink Accounting started during COVID-19"
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-8 sm:mb-10 md:mb-12">
          <Card className={cn(
            'bg-linear-to-br from-secondary-50 to-secondary-100',
            'border-none',
            designTokens.shadows.lg,
            'p-6 sm:p-8 md:p-10'
          )}>
            <CardContent className="p-0 text-center">
              <div className="w-30 h-30 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 shadow-lg">
                <Image
                  src={imgCeo}
                  alt="Pink Accounting founding story"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ed1651] mb-2">
                2020
              </div>
              <p className={cn(
                designTokens.typography.body,
                'text-gray-700 font-medium',
                'text-sm sm:text-base'
              )}>
                Founded during COVID-19
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-black pl-4 sm:pl-6">
              <h3 className={cn(
                designTokens.typography.h3,
                'text-gray-900 mb-2 sm:mb-3',
                'text-xl sm:text-2xl md:text-3xl'
              )}>
                Born from Challenge
              </h3>
              <p className={cn(
                designTokens.typography.body,
                'text-gray-600',
                'text-sm sm:text-base leading-relaxed'
              )}>
                Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
              </p>
            </div>

            <div className="border-l-4 border-black pl-4 sm:pl-6">
              <h3 className={cn(
                designTokens.typography.h3,
                'text-gray-900 mb-2 sm:mb-3',
                'text-xl sm:text-2xl md:text-3xl'
              )}>
                Evolved with Purpose
              </h3>
              <p className={cn(
                designTokens.typography.body,
                'text-gray-600',
                'text-sm sm:text-base leading-relaxed'
              )}>
                What started as supporting businesses through crisis has evolved into a specialised practice helping growth-focused service-based companies scale with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <Card className={cn(
          'bg-white border-2 border-[#ed1651]',
          designTokens.shadows.xl,
          'p-6 sm:p-8 md:p-10 lg:p-12'
        )}>
          <CardContent className="p-0 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#ed1651] rounded-full mb-4 sm:mb-6">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className={cn(
              designTokens.typography.h2,
              'text-gray-900 mb-3 sm:mb-4',
              'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
            )}>
              Our Promise
            </h3>
            <p className={cn(
              designTokens.typography.lead,
              'text-gray-600 max-w-3xl mx-auto',
              'text-sm sm:text-base md:text-lg leading-relaxed px-4'
            )}>
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