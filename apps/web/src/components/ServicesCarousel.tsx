// components/home/ServicesCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import designTokens, { cn } from '@/lib/design-tokens';

interface Service {
  id: number;
  package: string;
  idealFor: string;
  monthlyInvestment: string;
  keyFeatures: string[];
  mostPopular?: boolean;
}

const SERVICES: Service[] = [
  {
    id: 1,
    package: 'Essentials',
    idealFor: 'Compliance-only needs',
    monthlyInvestment: 'From $417 ($5,000 annually)',
    keyFeatures: [
      'Quarterly BAS & lodgement',
      'Annual tax returns',
      'Basic tax advice',
      'Email support',
      'Compliance calendar'
    ]
  },
  {
    id: 2,
    package: 'Foundation',
    idealFor: '$500K-$1M turnover',
    monthlyInvestment: 'From $1,000 ($12,000 annually)',
    keyFeatures: [
      'Everything in Essentials',
      'Monthly bookkeeping',
      'Cashflow reports',
      'Quarterly check-ins',
      'Phone support'
    ]
  },
  {
    id: 3,
    package: 'Growth',
    idealFor: '$1M-$2M turnover',
    monthlyInvestment: 'From $1,250 ($15,000 annually)',
    keyFeatures: [
      'Everything in Foundation',
      'Fortnightly cashflow',
      'Monthly insights reports',
      'Bi-annual tax planning',
      'Payroll optimization',
      'Priority support'
    ],
    mostPopular: true
  },
  {
    id: 4,
    package: 'Scale',
    idealFor: '$2M-$3M+ turnover',
    monthlyInvestment: 'From $1,667 ($20,000 annually)',
    keyFeatures: [
      'Everything in Growth',
      'Weekly oversight',
      'Monthly consultancy',
      'Custom dashboards',
      'Direct Principal access',
      'After-hours support'
    ]
  }
];

export default function ServicesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(2);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      opts={{
        align: 'center',
        loop: true,
        containScroll: 'trimSnaps',
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-4 pt-10 pb-12">
        {SERVICES.map((service, index) => (
          <CarouselItem
            key={service.id}
            className="pl-4 basis-[80%] sm:basis-[60%] md:basis-[50%] lg:basis-[40%]"
          >
            <Card
              className={cn(
                'bg-white h-full border-2',
                designTokens.transitions.slow,
                index === current
                  ? 'scale-100 opacity-100 shadow-2xl border-[#ed1651]'
                  : 'scale-90 opacity-60 shadow-md '
              )}
            >
              <CardContent className={cn(
                designTokens.spacing.card.padding,
                'h-full flex flex-col'
              )}>
                {/* Badge for Most Popular */}
                {service.mostPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className={cn(
                      'inline-block',
                      'bg-linear-to-r from-[#ed1651] to-[#f96e93]',
                      'text-white text-lg font-bold px-3 py-1',
                      'rounded-full uppercase tracking-wide'
                    )}>
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Package Info */}
                <div className="mb-6">
                  <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-2')}>
                    {service.package}
                  </h3>
                  <p className={cn(designTokens.typography.bodySmall, 'text-gray-500')}>
                    {service.idealFor}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-6 pb-6 ">
                  <p className="text-3xl font-bold text-black">
                    {service.monthlyInvestment.split(' ')[0]} {service.monthlyInvestment.split(' ')[1]}
                  </p>
                  <p className={cn(designTokens.typography.caption, 'text-gray-500 mt-1')}>
                    {service.monthlyInvestment.match(/\(.*\)/)?.[0]}
                  </p>
                </div>

                {/* Key Features */}
                {/* <div className="flex-1">
                  <p className=" font-semibold text-gray-700 uppercase tracking-wide mb-4">
                    Key Features
                  </p>
                  <div className="space-y-3">
                    {service.keyFeatures.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-[#ed1651] mt-0.5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <p className={cn(designTokens.typography.bodySmall, 'text-gray-600 text-sm')}>
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* <div className="hidden md:block">
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </div> */}

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-2 ">
        {SERVICES.map((_, index) => (
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
      </div>
    </Carousel>
  );
}