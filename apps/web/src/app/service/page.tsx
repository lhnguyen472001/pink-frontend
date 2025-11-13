'use client'
import { generateSEO, JsonLd, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';
import {
    BookOpen, Briefcase, Lightbulb, Settings, Shield, TrendingUp, Hammer, Heart, Laptop, Target
} from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import serviceImg from "@public/service.jpg"
import Image from 'next/image';
const SERVICES = [
    {
        id: 1,
        title: "Bookkeeping & Financial Management",
        subtitle: "Free Up Your Time, Gain Financial Clarity",
        description: "Our expert team takes care of your day-to-day financial operations, ensuring accurate, timely records whilst you focus on growth.",
        features: [
            "Daily transaction processing and categorisation",
            "Bank and credit card reconciliation",
            "Accounts payable and receivable management",
            "Payroll processing and superannuation compliance",
            "Monthly financial statement preparation",
            "Inter-account transfers and journal entries"
        ],
        investment: "From $750 + GST per month",
        result: "Clean, accurate books that give you real-time visibility into your financial position—without the headache.",
        color: "primary" as const,
        icon: "📊"
    },
    {
        id: 2,
        title: "Cashflow Management",
        subtitle: "Know Where Your Money Is, Always",
        description: "Our proactive cashflow management ensures you're never caught off guard.",
        features: [
            "Weekly or fortnightly cashflow monitoring",
            "13-week rolling cashflow forecasts",
            "Strategic timing of payables and receivables",
            "Early warning system for potential shortfalls",
            "Scenario planning for major decisions",
            "Working capital optimisation"
        ],
        investment: "From $500 + GST per month",
        result: "Confidence in your financial runway and the ability to make strategic decisions based on data, not guesswork.",
        color: "pink" as const,
        icon: "💰"
    },
    {
        id: 3,
        title: "Tax Compliance & Optimisation",
        subtitle: "Stay Compliant, Minimise Tax",
        description: "Our registered tax agents ensure you meet all obligations whilst taking advantage of every legitimate tax-saving opportunity.",
        features: [
            "Quarterly BAS preparation and lodgement",
            "Annual income tax return preparation",
            "Tax planning and strategy sessions",
            "Fringe Benefits Tax (FBT) compliance",
            "Payroll tax management",
            "GST advice and optimisation"
        ],
        investment: "From $417 + GST per month",
        result: "Peace of mind that you're compliant, optimised, and protected.",
        color: "pink" as const,
        icon: "📋"
    },
    {
        id: 4,
        title: "Business Consultancy & Problem Solving",
        subtitle: "Strategic Guidance When You Need It",
        description: "Our consultancy services help you solve problems, seize opportunities, and navigate complex decisions.",
        features: [
            "Business structure optimisation",
            "Growth strategy and financial modelling",
            "Profit margin analysis and improvement",
            "Pricing strategy review",
            "Break-even analysis for new ventures",
            "Partnership and exit planning"
        ],
        investment: "$250 + GST per hour",
        result: "Confident decision-making backed by financial expertise and business acumen.",
        color: "pink" as const,
        icon: "💡"
    },
    {
        id: 5,
        title: "System Optimisation",
        subtitle: "Build the Infrastructure for Scale",
        description: "We help you implement systems and processes that support sustainable growth.",
        features: [
            "Accounting software selection and setup (Xero, MYOB, QuickBooks)",
            "Financial workflow automation",
            "Integration between business systems",
            "Internal controls and fraud prevention",
            "Chart of accounts restructuring",
            "Reporting dashboard implementation"
        ],
        investment: "From $1,500 + GST",
        result: "Efficient, scalable financial operations that grow with your business.",
        color: "primary" as const,
        icon: "⚙️"
    },
    {
        id: 6,
        title: "Internal Financial Department Management",
        subtitle: "Your Outsourced Finance Team",
        description: "Get the expertise of a full finance department without the overhead.",
        features: [
            "Complete bookkeeping and reconciliation",
            "Financial reporting and analysis",
            "Budgeting and forecasting",
            "Cashflow management",
            "Management reporting with insights",
            "Board-ready financial presentations"
        ],
        investment: "From $1,667 + GST per month",
        result: "Enterprise-level financial management at a fraction of the cost of hiring internally.",
        color: "pink" as const,
        icon: "👥"
    }
];

const INDUSTRIES = [
    {
        title: "Professional Services",
        examples: ["Legal practices", "Accounting firms", "Consulting", "Engineering", "Marketing agencies", "Real estate"],
        icon: Briefcase
    },
    {
        title: "Trade & Construction",
        examples: ["Building contractors", "Electrical services", "Plumbing", "HVAC", "Landscaping", "Project management"],
        icon: Hammer
    },
    {
        title: "Healthcare & Wellness",
        examples: ["Medical practices", "Dental clinics", "Allied health", "Aged care", "Fitness", "Beauty services"],
        icon: Heart
    },
    {
        title: "Technology & Creative",
        examples: ["Software development", "IT services", "Web design", "Digital agencies", "Content creation", "Media production"],
        icon: Laptop
    },
    {
        title: "Business Services",
        examples: ["HR & recruitment", "Training providers", "Property management", "Cleaning services", "Business coaching"],
        icon: Target
    }
];

const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/service' },
]);

// Generate schemas for each service
const serviceSchemas = SERVICES.map(service =>
    generateServiceSchema({
        name: service.title,
        description: service.description,
        price: service.investment,
        features: service.features
    })
);

export default function ServicesPage() {
    const [api, setApi] = useState<any>()
    const [current, setCurrent] = useState(0)
    const autoplayPlugin = useRef(
        Autoplay({
            delay: 3000,
            stopOnInteraction: true
        })
    )
    useEffect(() => {
        if (!api) return

        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <>
            {/* Structured Data */}
            <JsonLd data={breadcrumbSchema} />
            {serviceSchemas.map((schema, index) => (
                <JsonLd key={index} data={schema} />
            ))}

            {/* Hero Section - Optimized */}
            <Section variant="hero" size="lg" className="relative">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={serviceImg}
                        alt="Financial services background"
                        fill
                        className="object-cover"
                        priority
                        quality={85}
                    />
                    {/* Overlay with blur effect */}
                    <div className="absolute inset-0 bg-white/10" />
                </div>
                <div className="text-center relative z-10 px-4">
                    <h1 className={cn(
                        designTokens.typography.h1,
                        'text-gray-900 mb-4 sm:mb-6',
                        'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
                    )}>
                        Comprehensive Financial Solutions for Growing Businesses
                    </h1>
                    <p className={cn(
                        designTokens.typography.lead,
                        'text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8',
                        'text-sm sm:text-base md:text-lg'
                    )}>
                        "After implementing our cashflow system, one of our café clients reduced debt by 30% in 6 months"
                    </p>
                    <Link href="/contact">
                        <Button className={cn(
                            componentPresets.button.primary,
                            'text-sm sm:text-base px-6 sm:px-8 cursor-pointer bg-[#ed1651] py-3 sm:py-4'
                        )}>
                            Schedule Your Free Consultation
                        </Button>
                    </Link>
                </div>
            </Section>

            {/* Services Grid - Optimized */}
            <section className="py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12 sm:space-y-14 md:space-y-16">
                        {services.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center"
                                >
                                    <div className='flex h-full flex-col justify-between'>
                                        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-pink-100 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                                                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600" />
                                            </div>
                                            <div>
                                                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                                                    {service.title}
                                                </h2>
                                                <p className="text-pink-600 font-semibold mt-1 text-sm sm:text-base">
                                                    {service.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                                            {service.description}
                                        </p>
                                        <div className="bg-slate-50 p-4 sm:p-6 rounded-lg sm:rounded-xl">
                                            <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-2">Investment:</p>
                                            <p className="text-sm sm:text-base text-gray-700">{service.investment}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white border-2 border-gray-200 rounded-lg sm:rounded-xl p-5 sm:p-6 md:p-8">
                                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                                            What We Handle:
                                        </h3>
                                        <ul className="space-y-3 sm:space-y-4">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 sm:gap-3">
                                                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                                        <svg
                                                            className="w-3 h-3 sm:w-4 sm:h-4 text-pink-600"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Specialise Section - Optimized */}
            <section className="py-12 sm:py-16 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center px-4">
                            Why Specialise in Service-Based Businesses?
                        </h2>
                        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 text-center px-4">
                            We speak your language and understand your unique challenges
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                            {[
                                {
                                    title: 'Time-Based Revenue Models',
                                    description: 'Managing billable hours, project profitability, and capacity planning requires specialised financial insight.'
                                },
                                {
                                    title: 'Project Cashflow Cycles',
                                    description: 'From deposits to progress payments to final invoicing—we help you manage the feast-or-famine cycle.'
                                },
                                {
                                    title: 'Labour Cost Management',
                                    description: 'Your people are your biggest asset and expense. We help optimise team utilisation and profitability per employee.'
                                },
                                {
                                    title: 'Professional Indemnity & Compliance',
                                    description: 'Service businesses face unique regulatory and insurance requirements. We ensure you\'re properly protected.'
                                },
                                {
                                    title: 'Scalability Challenges',
                                    description: 'Growing service revenue without proportionally increasing headcount requires careful financial planning and systems.'
                                },
                                {
                                    title: 'WIP Management',
                                    description: 'Work-in-progress can tie up significant capital. We help you manage and optimise this critical metric.'
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl shadow-sm">
                                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries - Optimized */}
            <Section>
                <SectionHeader title="Industries We Excel In" />

                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    setApi={setApi}
                    className="w-full"
                    plugins={[autoplayPlugin.current]}
                >
                    <CarouselContent className="-ml-2 sm:-ml-3 md:-ml-4 py-6 sm:py-8">
                        {INDUSTRIES.map((industry, index) => {
                            const IconComponent = industry.icon

                            return (
                                <CarouselItem key={index} className="pl-2 sm:pl-3 md:pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                                    <div className="h-full">
                                        <Card className={cn(componentPresets.card.interactive, "h-full")}>
                                            <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col h-full">
                                                <IconComponent
                                                    className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4"
                                                    style={{ color: '#ed1651' }}
                                                    strokeWidth={1.5}
                                                />
                                                <h3 className={cn(
                                                    designTokens.typography.h4,
                                                    'text-gray-900 mb-3 sm:mb-4',
                                                    'text-base sm:text-lg md:text-xl'
                                                )}>
                                                    {industry.title}
                                                </h3>
                                                <ul className="space-y-1.5 sm:space-y-2 flex-grow">
                                                    {industry.examples.map((example, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-sm sm:text-base text-gray-600 flex items-start gap-2"
                                                        >
                                                            <span className="mt-1 text-pink-600">•</span>
                                                            <span>{example}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>
                </Carousel>

                {/* Indicators - Optimized */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
                    {INDUSTRIES.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={cn(
                                "h-1.5 sm:h-2 rounded-full transition-all",
                                current === index
                                    ? "w-6 sm:w-8 bg-[#ed1651]"
                                    : "w-1.5 sm:w-2 bg-gray-300 hover:bg-gray-400"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </Section>

            {/* CTA Section - Single CTA with Link */}
            <Section variant="hero" size="md">
                <div className="text-center max-w-3xl mx-auto px-4">
                    <h2 className={cn(
                        designTokens.typography.h2,
                        'text-gray-900 mb-4 sm:mb-6',
                        'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
                    )}>
                        Ready to Transform Your Financial Operations?
                    </h2>
                    <p className={cn(
                        designTokens.typography.lead,
                        'text-gray-700 mb-6 sm:mb-8',
                        'text-sm sm:text-base md:text-lg'
                    )}>
                        Let's discuss which services are right for your business and create a customised solution that fits your needs and budget.
                    </p>
                    <Link href="/contact">
                        <Button className={cn(
                            componentPresets.button.primary,
                            'text-sm sm:text-base px-6 sm:px-8 bg-[#ed1651] cursor-pointer py-3 sm:py-4'
                        )}>
                            Book Your Strategy Session
                        </Button>
                    </Link>
                </div>
            </Section>
        </>
    );
}

const services = [
    {
        icon: BookOpen,
        title: 'Bookkeeping & Financial Management',
        subtitle: 'Free Up Your Time, Gain Financial Clarity',
        description: 'Running a business is demanding enough without spending hours on bookkeeping. Our expert team takes care of your day-to-day financial operations, ensuring accurate, timely records whilst you focus on growth.',
        features: [
            'Daily transaction processing and categorisation',
            'Bank and credit card reconciliation',
            'Accounts payable and receivable management',
            'Payroll processing and superannuation compliance',
            'Monthly financial statement preparation',
            'Inter-account transfers and journal entries'
        ],
        investment: 'From $750 + GST per month (standalone)',
        result: 'Clean, accurate books that give you real-time visibility into your financial position—without the headache.'
    },
    {
        icon: TrendingUp,
        title: 'Cashflow Management',
        subtitle: 'Know Where Your Money Is, Always',
        description: 'Cashflow problems kill more businesses than lack of profit. Our proactive cashflow management ensures you\'re never caught off guard.',
        features: [
            'Weekly or fortnightly cashflow monitoring',
            '13-week rolling cashflow forecasts',
            'Strategic timing of payables and receivables',
            'Early warning system for potential shortfalls',
            'Scenario planning for major decisions',
            'Working capital optimisation'
        ],
        investment: 'From $500 + GST per month (standalone) or included in Growth/Scale packages',
        result: 'Confidence in your financial runway and the ability to make strategic decisions based on data, not guesswork.'
    },
    {
        icon: Shield,
        title: 'Tax Compliance & Optimisation',
        subtitle: 'Stay Compliant, Minimise Tax',
        description: 'Navigate the complex Australian tax system with confidence. Our registered tax agents ensure you meet all obligations whilst taking advantage of every legitimate tax-saving opportunity.',
        features: [
            'Quarterly BAS preparation and lodgement',
            'Annual income tax return preparation',
            'Tax planning and strategy sessions',
            'Fringe Benefits Tax (FBT) compliance',
            'Payroll tax management',
            'GST advice and optimisation',
            'Tax audit support and representation'
        ],
        investment: 'From $417 + GST per month (Essentials Package) or included in all comprehensive packages',
        result: 'Peace of mind that you\'re compliant, optimised, and protected.'
    },
    {
        icon: Lightbulb,
        title: 'Business Consultancy & Problem Solving',
        subtitle: 'Strategic Guidance When You Need It',
        description: 'Sometimes you need more than a bookkeeper—you need a strategic partner who understands business. Our consultancy services help you solve problems, seize opportunities, and navigate complex decisions.',
        features: [
            'Business structure optimisation',
            'Growth strategy and financial modelling',
            'Profit margin analysis and improvement',
            'Pricing strategy review',
            'Break-even analysis for new ventures',
            'Buy/sell business advisory',
            'Partnership and exit planning'
        ],
        investment: 'Included in Scale Package or available as hourly consultancy at $250 + GST per hour',
        result: 'Confident decision-making backed by financial expertise and business acumen.'
    },
    {
        icon: Settings,
        title: 'System Optimisation',
        subtitle: 'Build the Infrastructure for Scale',
        description: 'As your business grows, manual processes break down. We help you implement systems and processes that support sustainable growth.',
        features: [
            'Accounting software selection and setup (Xero, MYOB, QuickBooks)',
            'Financial workflow automation',
            'Integration between business systems',
            'Internal controls and fraud prevention',
            'Chart of accounts restructuring',
            'Reporting dashboard implementation',
            'Process documentation and training'
        ],
        investment: 'Project-based pricing from $1,500 + GST or included in Growth/Scale packages',
        result: 'Efficient, scalable financial operations that grow with your business.'
    },
    {
        icon: Briefcase,
        title: 'Internal Financial Department Management',
        subtitle: 'Your Outsourced Finance Team',
        description: 'Get the expertise of a full finance department without the overhead. We function as your outsourced financial team, managing everything from daily bookkeeping to strategic financial management.',
        features: [
            'Complete bookkeeping and reconciliation',
            'Financial reporting and analysis',
            'Budgeting and forecasting',
            'Cashflow management',
            'Management reporting with insights',
            'Board-ready financial presentations',
            'Strategic financial advisory'
        ],
        investment: 'Scale Package from $1,667 + GST per month',
        result: 'Enterprise-level financial management at a fraction of the cost of hiring internally.'
    }
];