// app/service/page.tsx
import { generateSEO, JsonLd, generateBreadcrumbSchema, generateServiceSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';



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
        icon: "💼"
    },
    {
        title: "Trade & Construction",
        examples: ["Building contractors", "Electrical services", "Plumbing", "HVAC", "Landscaping", "Project management"],
        icon: "🔨"
    },
    {
        title: "Healthcare & Wellness",
        examples: ["Medical practices", "Dental clinics", "Allied health", "Aged care", "Fitness", "Beauty services"],
        icon: "🏥"
    },
    {
        title: "Technology & Creative",
        examples: ["Software development", "IT services", "Web design", "Digital agencies", "Content creation", "Media production"],
        icon: "💻"
    },
    {
        title: "Business Services",
        examples: ["HR & recruitment", "Training providers", "Property management", "Cleaning services", "Business coaching"],
        icon: "🎯"
    }
];

const SPECIALTIES = [
    {
        title: "Time-Based Revenue Models",
        description: "Managing billable hours, project profitability, and capacity planning requires specialised financial insight."
    },
    {
        title: "Project Cashflow Cycles",
        description: "From deposits to progress payments to final invoicing—we help you manage the feast-or-famine cycle."
    },
    {
        title: "Labour Cost Management",
        description: "Your people are your biggest asset and expense. We help optimise team utilisation and profitability per employee."
    },
    {
        title: "Scalability Challenges",
        description: "Growing service revenue without proportionally increasing headcount requires careful financial planning and systems."
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
    return (
        <>
            {/* Structured Data */}
            <JsonLd data={breadcrumbSchema} />
            {serviceSchemas.map((schema, index) => (
                <JsonLd key={index} data={schema} />
            ))}

            {/* Hero Section */}
            <Section variant="hero" size="lg">
                <div className="text-center">
                    <h1 className={cn(designTokens.typography.h1, 'text-gray-900 mb-6')}>
                        Comprehensive Financial Solutions for Growing Businesses
                    </h1>
                    <p className={cn(designTokens.typography.lead, 'text-gray-700 max-w-3xl mx-auto mb-8')}>
                        "After implementing our cashflow system, one of our café clients reduced debt by 30% in 6 months"
                    </p>
                    <Button className={componentPresets.button.primary}>
                        Schedule Your Free Consultation
                    </Button>
                </div>
            </Section>

            {/* Services Grid */}
            <Section>
                <SectionHeader title="Our Services" />

                <div className="space-y-10">
                    {SERVICES.map((service, index) => (
                        <Card
                            key={service.id}
                            className={cn(
                                'overflow-hidden border-none py-0',
                                designTokens.shadows.lg,
                                designTokens.transitions.base,
                                'hover:shadow-2xl'
                            )}
                        >
                            <CardContent className="p-0">
                                <div className={cn(
                                    'grid md:grid-cols-2 gap-0 items-center',
                                    index % 2 === 1 && 'md:grid-flow-col-dense'
                                )}>
                                    {/* Info Side */}
                                    <div className={cn(
                                        componentPresets.card.colored(service.color),
                                        'p-8 md:p-10 lg:p-12 flex flex-col justify-center',
                                        index % 2 === 1 && 'md:order-2'
                                    )}>
                                        <div className="text-6xl mb-4">{service.icon}</div>
                                        <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-2')}>
                                            {service.title}
                                        </h3>
                                        <p className={cn(designTokens.typography.h6, 'text-gray-700 mb-4')}>
                                            {service.subtitle}
                                        </p>
                                        <p className={cn(designTokens.typography.body, 'text-gray-600 mb-6')}>
                                            {service.description}
                                        </p>
                                        <div className="mt-4">
                                            <p className={cn(designTokens.typography.caption, 'text-gray-700 font-semibold mb-1')}>
                                                Investment:
                                            </p>
                                            <p className={cn(designTokens.typography.h4, 'text-primary-600 font-bold')}>
                                                {service.investment}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Features Side */}
                                    <div className={cn(
                                        'p-8 md:p-10 lg:p-12 bg-white flex flex-col justify-center',
                                        index % 2 === 1 && 'md:order-1'
                                    )}>
                                        <h4 className="font-semibold text-gray-700 mb-4 uppercase tracking-wide text-sm">
                                            What's Included:
                                        </h4>
                                        <div className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <svg
                                                        className="w-5 h-5 text-primary-500 mt-0.5 shrink-0"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                    <span className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                                                        {feature}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="font-semibold text-gray-700 text-sm mb-2">The Result:</p>
                                            <p className={cn(designTokens.typography.body, 'text-gray-600 italic')}>
                                                {service.result}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Why Service-Based Businesses */}
            <Section variant="neutral">
                <SectionHeader
                    title="Why Specialise in Service-Based Businesses?"
                    subtitle="We Speak Your Language"
                />

                <div className={cn(designTokens.grid.cols2, designTokens.spacing.gap.md, 'mb-12')}>
                    {SPECIALTIES.map((specialty, index) => (
                        <Card
                            key={index}
                            className={cn(
                                componentPresets.card.interactive
                            )}
                        >
                            <CardContent className={designTokens.spacing.card.padding}>
                                <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-3')}>
                                    {specialty.title}
                                </h3>
                                <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                                    {specialty.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <Card className={cn(componentPresets.card.base)}>
                    <CardContent className={designTokens.spacing.card.paddingLg}>
                        <p className={cn(designTokens.typography.body, 'text-gray-700 text-center leading-relaxed')}>
                            Service-based businesses face unique financial challenges that retail or product-based businesses don't encounter.
                            From managing billable hours and project profitability to navigating work-in-progress and labour cost optimisation,
                            we understand the intricacies of your business model and provide tailored solutions that drive growth.
                        </p>
                    </CardContent>
                </Card>
            </Section>

            {/* Industries */}
            <Section>
                <SectionHeader title="Industries We Excel In" />

                <div className={cn(designTokens.grid.cols3, designTokens.spacing.gap.md)}>
                    {INDUSTRIES.map((industry, index) => (
                        <Card
                            key={index}
                            className={cn(
                                componentPresets.card.interactive
                            )}
                        >
                            <CardContent className={designTokens.spacing.card.padding}>
                                <div className="text-4xl mb-4">{industry.icon}</div>
                                <h3 className={cn(designTokens.typography.h4, 'text-gray-900 mb-4')}>
                                    {industry.title}
                                </h3>
                                <ul className="space-y-2">
                                    {industry.examples.map((example, idx) => (
                                        <li key={idx} className={cn(designTokens.typography.bodySmall, 'text-gray-600 flex items-start gap-2')}>
                                            <span className="text-primary-500 mt-1">•</span>
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* CTA Section */}
            <Section variant="hero" size="md">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className={cn(designTokens.typography.h2, 'text-gray-900 mb-6')}>
                        Ready to Transform Your Financial Operations?
                    </h2>
                    <p className={cn(designTokens.typography.lead, 'text-gray-700 mb-8')}>
                        Let's discuss which services are right for your business and create a customised solution that fits your needs and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className={componentPresets.button.primary}>
                            Book Your Strategy Session
                        </Button>
                        <Button className={componentPresets.button.outline}>
                            Download Service Guide
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}