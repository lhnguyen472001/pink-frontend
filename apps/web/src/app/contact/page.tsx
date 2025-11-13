'use client'
import { generateSEO, JsonLd, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';
import Link from 'next/link';
import { useState } from 'react';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';




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
export interface ContactFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  industry: string;
  turnover: string;
  primaryNeed: string;
  currentSituation: string;
  message: string;
  contactMethod: string;
  preferredTime?: string;
}
export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    turnover: '',
    primaryNeed: '',
    currentSituation: '',
    message: '',
    contactMethod: 'email',
    preferredTime: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        businessName: '',
        email: '',
        phone: '',
        industry: '',
        turnover: '',
        primaryNeed: '',
        currentSituation: '',
        message: '',
        contactMethod: 'email',
        preferredTime: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
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
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:0735446386" className="text-gray-600 hover:text-pink-600 transition-colors">
                      07 3544 6386
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a href="mailto:admin@pinktax.com.au" className="text-gray-600 hover:text-pink-600 transition-colors">
                      admin@pinktax.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Current Office</h3>
                    <p className="text-gray-600">
                      1/263 Toombul Rd<br />
                      Northgate QLD 4013
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-gray-900 mb-2">New Office (Opening Soon)</h3>
                      <p className="text-gray-600">
                        Shop 15A, 18-22 Kremzow Rd<br />
                        Brendale QLD 4500
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday to Friday: 9:00 AM – 4:30 PM</p>
                      <p>Saturday: By Appointment Only</p>
                      <p>Sunday: Closed</p>
                      <p className="text-sm text-pink-600 mt-2">
                        After-hours online accessibility available
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-4">Our Team</h3>
                <div className="space-y-3">
                  {teamContacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.role}</p>
                      </div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-sm text-pink-600 hover:text-pink-700 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Book Your Strategy Session
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to explore how Pink Accounting can support your growth? Schedule a complimentary 30-minute strategy session to discuss your business needs.
              </p>

              {submitted ? (
                <div className="bg-green-50 border-2 border-green-500 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your inquiry and will be in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="businessName"
                        required
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Industry *
                    </label>
                    <select
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select an industry</option>
                      <option value="professional">Professional Services</option>
                      <option value="trade">Trade & Construction</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="technology">Technology & Creative</option>
                      <option value="business">Business Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Annual Turnover *
                      </label>
                      <select
                        name="turnover"
                        required
                        value={formData.turnover}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      >
                        <option value="">Select turnover</option>
                        <option value="under500k">Under $500K</option>
                        <option value="500k-1m">$500K-$1M</option>
                        <option value="1m-2m">$1M-$2M</option>
                        <option value="2m-3m">$2M-$3M</option>
                        <option value="3m+">$3M+</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Primary Need *
                      </label>
                      <select
                        name="primaryNeed"
                        required
                        value={formData.primaryNeed}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      >
                        <option value="">Select primary need</option>
                        <option value="bookkeeping">Full Bookkeeping</option>
                        <option value="tax">Tax Compliance Only</option>
                        <option value="cashflow">Cashflow Management</option>
                        <option value="advisory">Strategic Advisory</option>
                        <option value="systems">System Setup</option>
                        <option value="unsure">Unsure - Need Guidance</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Situation *
                    </label>
                    <select
                      name="currentSituation"
                      required
                      value={formData.currentSituation}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                    >
                      <option value="">Select current situation</option>
                      <option value="no-accountant">No Accountant</option>
                      <option value="switching">Switching Accountants</option>
                      <option value="additional">Need Additional Services</option>
                      <option value="new-business">Starting New Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none resize-none"
                      placeholder="Tell us more about your business and needs..."
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Contact Method *
                      </label>
                      <select
                        name="contactMethod"
                        required
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Time (Optional)
                      </label>
                      <input
                        type="text"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        placeholder="e.g., Weekday mornings"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

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
const teamContacts = [
  { name: 'Pinky Bui', role: 'Principal Accountant', email: 'hb@pinktax.com.au' },
  { name: 'Jessica You', role: 'Senior Tax Accountant', email: 'jessica@pinktax.com.au' },
  { name: 'Miftas Sriyan', role: 'Financial Accountant', email: 'miftas@pinktax.com.au' },
  { name: 'Bonnie Gloriane', role: 'Senior Admin', email: 'bonnie@pinktax.com.au' }
];