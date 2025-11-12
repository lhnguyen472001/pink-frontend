"use client"
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {

    const services = [
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
            color: "#fbe7e7",
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
            color: "#def1f1",
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
            color: "#fbe7e7",
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
            color: "#def1f1",
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
            color: "#fbe7e7",
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
            color: "#def1f1",
            icon: "👥"
        }
    ];

    const industries = [
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

    const specialties = [
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

    return (
        <div className="flex flex-col">
            <section className="bg-linear-to-br from-[#ffa9b1] to-[#ffccd0] py-20">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Comprehensive Financial Solutions for Growing Businesses
                    </h1>
                    <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-8">
                        "After implementing our cashflow system, one of our café clients reduced debt by 30% in 6 months"
                    </p>
                    <Button className="bg-white hover:bg-gray-100 text-[#ffa9b1] text-base h-14 font-semibold px-8">
                        Schedule Your Free Consultation
                    </Button>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
                <div className="space-y-10">
                    {services.map((service, index) => (
                        <Card
                            key={service.id}
                            className="overflow-hidden hover:shadow-xl transition-shadow py-0 duration-300"
                        >
                            <CardContent className="p-0">
                                <div className={`grid md:grid-cols-2 ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                                    <div
                                        className="p-8 flex flex-col justify-center"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        <div className="text-6xl mb-4">{service.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-lg text-gray-700 mb-4">
                                            {service.subtitle}
                                        </p>
                                        <p className="text-gray-600 mb-4">
                                            {service.description}
                                        </p>
                                        <div className="mt-4">
                                            <p className="text-sm font-semibold text-gray-700 mb-1">Investment:</p>
                                            <p className="text-xl font-bold text-[#ffa9b1]">{service.investment}</p>
                                        </div>
                                    </div>

                                    <div className={`p-8 bg-white flex flex-col justify-center ${index % 2 === 1 ? '[direction:ltr]' : ''}`}>
                                        <h4 className="font-semibold text-gray-700 mb-4 uppercase tracking-wide text-sm">
                                            What's Included:
                                        </h4>
                                        <div className="space-y-3 mb-6">
                                            {service.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <svg
                                                        className="w-5 h-5 text-[#ffa9b1] mt-0.5 flex-shrink-0"
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
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="pt-4 border-t border-gray-200">
                                            <p className="font-semibold text-gray-700 text-sm mb-2">The Result:</p>
                                            <p className="text-gray-600 italic">{service.result}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-[#def1f1] py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Why Specialise in Service-Based Businesses?
                        </h2>
                        <p className="text-xl text-gray-700">We Speak Your Language</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                        {specialties.map((specialty, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-lg font-bold text-gray-900 mb-3">
                                    {specialty.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {specialty.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white rounded-xl p-8 shadow-lg">
                        <p className="text-center text-gray-700 leading-relaxed">
                            Service-based businesses face unique financial challenges that retail or product-based businesses don&apos;t encounter.
                            From managing billable hours and project profitability to navigating work-in-progress and labour cost optimisation,
                            we understand the intricacies of your business model and provide tailored solutions that drive growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-center mb-12">Industries We Excel In</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                        <Card
                            key={index}
                            className="hover:shadow-xl transition-shadow duration-300 border-2 border-gray-100"
                        >
                            <CardContent className="p-6">
                                <div className="text-4xl mb-4">{industry.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">
                                    {industry.title}
                                </h3>
                                <ul className="space-y-2">
                                    {industry.examples.map((example, idx) => (
                                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                            <span className="text-[#ffa9b1] mt-1">•</span>
                                            <span>{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="bg-linear-to-br from-[#ffa9b1] to-[#ffccd0] py-16">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Ready to Transform Your Financial Operations?
                    </h2>
                    <p className="text-lg text-gray-800 mb-8">
                        Let&apos;s discuss which services are right for your business and create a customised solution that fits your needs and budget.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-white hover:bg-gray-100 text-[#ffa9b1] text-base h-14 font-semibold px-8">
                            Book Your Strategy Session
                        </Button>
                        <Button className="bg-[#def1f1] hover:bg-[#c5e5e5] text-gray-900 text-base h-14 font-semibold px-8">
                            Download Service Guide
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}