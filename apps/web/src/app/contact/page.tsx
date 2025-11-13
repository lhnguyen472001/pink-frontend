// app/contact/page.tsx
import { generateSEO, JsonLd, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';



const TEAM_MEMBERS = [
  { name: "Pinky Bui", role: "Principal Accountant", email: "hb@pinktax.com.au" },
  { name: "Jessica You", role: "Senior Tax Accountant", email: "jessica@pinktax.com.au" },
  { name: "Miftas Sriyan", role: "Financial Accountant", email: "miftas@pinktax.com.au" },
  { name: "Bonnie Gloriane", role: "Senior Admin", email: "bonnie@pinktax.com.au" },
  { name: "Regs", role: "Senior Bookkeeper", email: "regs@pinktax.com.au" },
  { name: "Nazel Rose", role: "Intermediate Bookkeeper", email: "nazel@pinktax.com.au" },
  { name: "Daisy Nguyen", role: "Bookkeeper", email: "daisy@pinktax.com.au" }
];

const FAQS = [
  {
    question: "Do you only work with service-based businesses?",
    answer: "Whilst we specialise in service-based businesses across SEQ, we're open to working with any growth-focused business that values quality financial partnership. Our expertise in service business models means we can hit the ground running with these clients."
  },
  {
    question: "Why monthly pricing instead of annual?",
    answer: "We believe monthly pricing makes budgeting easier and demonstrates our commitment to ongoing value. You're investing in a monthly partnership, not paying for a year upfront. All packages can be paid monthly."
  },
  {
    question: "What if I only need tax compliance, not bookkeeping?",
    answer: "Perfect, that's exactly what our Essentials Package is designed for. From $417 + GST per month, you get BAS and tax return preparation without paying for bookkeeping you don't need."
  },
  {
    question: "Can I unbundle services?",
    answer: "Absolutely. Whilst our packages offer the best value, we understand every business has unique needs. Contact us to discuss standalone services including bookkeeping only ($750+ per month), cashflow management ($500+ per month), or tax compliance only ($417+ per month)."
  },
  {
    question: "Do you work with businesses under $500K turnover?",
    answer: "Our sweet spot is businesses between $500K and $3M in annual turnover. However, if you're growing rapidly or have complex needs, we'd still love to talk. Our Essentials Package is suitable for smaller businesses needing compliance-only support."
  },
  {
    question: "What if I already have an accountant?",
    answer: "Many of our clients switched from accountants who were difficult to reach or only appeared at tax time. We'd be happy to discuss what's not working and how we do things differently."
  },
  {
    question: "Can you help me transition from my current accountant?",
    answer: "Absolutely. We'll manage the entire transition process, including liaising with your previous accountant and ensuring nothing falls through the cracks."
  },
  {
    question: "What accounting software do you support?",
    answer: "We work primarily with Xero. If you use different software, contact us to discuss compatibility."
  },
  {
    question: "Do you service clients outside Brisbane?",
    answer: "Yes! Whilst we're based in Brisbane, we work with service-based businesses throughout South-East Queensland and can support clients Australia-wide through our online capabilities."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. We use bank-level encryption, secure file sharing, and follow strict data protection protocols in compliance with Australian privacy legislation."
  },
  {
    question: "What's the cancellation policy?",
    answer: "We operate on 30 days' notice for all ongoing packages. We want clients who want to be here, our 98% retention rate tells us we're doing something right."
  }
];

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Contact', url: '/contact' },
]);

const faqSchema = generateFAQSchema(FAQS);

export default function ContactPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero Section */}
      <Section variant="hero" size="lg">
        <div className="text-center">
          <h1 className={cn(designTokens.typography.h1, 'text-gray-900 mb-6')}>
            Let's Discuss Your Financial Future
          </h1>
          <p className={cn(designTokens.typography.lead, 'text-gray-700 max-w-3xl mx-auto')}>
            We're here to help South East Queensland service-based businesses scale with confidence
          </p>
        </div>
      </Section>

      {/* Contact Info & Form Section */}
      <Section>
        <div className={cn(designTokens.grid.cols2, designTokens.spacing.gap.xl)}>
          {/* Left Side - Contact Information */}
          <div className="space-y-6">
            {/* Office Locations */}
            <div>
              <h2 className={cn(designTokens.typography.h3, 'text-gray-900 mb-6')}>
                Our Offices
              </h2>

              <Card className={cn(
                componentPresets.card.colored('primary'),
                'mb-4'
              )}>
                <CardContent className={designTokens.spacing.card.padding}>
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl">🏢</div>
                    <div className="flex-1">
                      <div className="inline-block bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                        OPENING SOON
                      </div>
                      <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-2')}>
                        New Office Location
                      </h3>
                      <p className={cn(designTokens.typography.bodySmall, 'text-gray-700')}>
                        Shop 15A, 18-22 Kremzow Rd<br />
                        Brendale QLD 4500
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={cn(componentPresets.card.base)}>
                <CardContent className={designTokens.spacing.card.padding}>
                  <div className="flex gap-4 items-start">
                    <div className="text-4xl">📍</div>
                    <div className="flex-1">
                      <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-2')}>
                        Current Office
                      </h3>
                      <p className={cn(designTokens.typography.bodySmall, 'text-gray-700')}>
                        1/263 Toombul Rd<br />
                        Northgate QLD 4013
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <Card className={cn(componentPresets.card.base)}>
              <CardContent className={designTokens.spacing.card.padding}>
                <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-4')}>
                  Get In Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <p className={cn(designTokens.typography.caption, 'text-gray-600')}>
                        Phone
                      </p>
                      <a
                        href="tel:0735446386"
                        className={cn(
                          designTokens.typography.body,
                          'font-semibold text-gray-900 hover:text-primary-500',
                          designTokens.transitions.base
                        )}
                      >
                        07 3544 6386
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <p className={cn(designTokens.typography.caption, 'text-gray-600')}>
                        Email
                      </p>
                      <a
                        href="mailto:admin@pinktax.com.au"
                        className={cn(
                          designTokens.typography.body,
                          'font-semibold text-gray-900 hover:text-primary-500',
                          designTokens.transitions.base
                        )}
                      >
                        admin@pinktax.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className={cn(componentPresets.card.base)}>
              <CardContent className={designTokens.spacing.card.padding}>
                <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-4 flex items-center gap-2')}>
                  <span className="text-2xl">🕐</span>
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                      Monday to Friday:
                    </span>
                    <span className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-900')}>
                      9:00 AM – 4:30 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                      Saturday:
                    </span>
                    <span className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-900')}>
                      By Appointment Only
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                      Sunday:
                    </span>
                    <span className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-900')}>
                      Closed
                    </span>
                  </div>
                  <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className={cn(designTokens.typography.caption, 'text-gray-600')}>
                      <strong>After-Hours Access:</strong> Online accessibility available for urgent matters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Directory */}
            <Card className={cn(componentPresets.card.colored('primary'))}>
              <CardContent className={designTokens.spacing.card.padding}>
                <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-4')}>
                  Our Team
                </h3>
                <div className="space-y-3">
                  {TEAM_MEMBERS.map((member, index) => (
                    <div key={index}>
                      <span className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-900')}>
                        {member.name}
                      </span>
                      <span className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                        {' '}– {member.role}
                      </span>
                      <br />
                      <a
                        href={`mailto:${member.email}`}
                        className={cn(
                          designTokens.typography.caption,
                          'text-primary-600 hover:text-primary-700 hover:underline',
                          designTokens.transitions.base
                        )}
                      >
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <div className="sticky top-4">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section variant="neutral">
        <SectionHeader title="Frequently Asked Questions" />

        <div className="max-w-4xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.interactive,
                'group cursor-pointer'
              )}
            >
              <CardContent className={designTokens.spacing.card.padding}>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-3')}>
                      {faq.question}
                    </h3>
                    <p className={cn(designTokens.typography.body, 'text-gray-600')}>
                      {faq.answer}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-primary-500 flex-shrink-0 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="hero" size="md">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className={cn(designTokens.typography.h2, 'text-gray-900 mb-6')}>
            Still Have Questions?
          </h3>
          <p className={cn(designTokens.typography.lead, 'text-gray-700 mb-8')}>
            We're here to help. Give us a call or send an email, and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="tel:0735446386"
              className={cn(componentPresets.button.primary, 'flex bg-[#d8d8d8] !text-black items-center')}
            >
              📞 Call 07 3544 6386
            </Link>
            <Link
              href="mailto:admin@pinktax.com.au"
              className={cn(componentPresets.button.secondary, 'flex items-center')}
            >
              ✉️ Email Us
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}