"use client"
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    industry: '',
    turnover: '',
    primaryNeed: '',
    currentSituation: '',
    message: '',
    contactMethod: 'Email',
    appointmentTime: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState<any>(null);

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (name:any, value:any) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const teamMembers = [
    { name: "Pinky Bui", role: "Principal Accountant", email: "hb@pinktax.com.au" },
    { name: "Jessica You", role: "Senior Tax Accountant", email: "jessica@pinktax.com.au" },
    { name: "Miftas Sriyan", role: "Financial Accountant", email: "miftas@pinktax.com.au" },
    { name: "Bonnie Gloriane", role: "Senior Admin", email: "bonnie@pinktax.com.au" },
    { name: "Regs", role: "Senior Bookkeeper", email: "regs@pinktax.com.au" },
    { name: "Nazel Rose", role: "Intermediate Bookkeeper", email: "nazel@pinktax.com.au" },
    { name: "Daisy Nguyen", role: "Bookkeeper", email: "daisy@pinktax.com.au" }
  ];

  const faqs = [
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#ffa9b1] to-[#ffccd0] py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Discuss Your Financial Future
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            We're here to help South East Queensland service-based businesses scale with confidence
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Information */}
          <div className="space-y-8">
            {/* Office Locations */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
              
              <Card className="bg-[#def1f1] border-none mb-4">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <div className="text-3xl">🏢</div>
                    <div>
                      <div className="inline-block bg-[#ffa9b1] text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                        OPENING SOON
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2">New Office Location</h3>
                      <p className="text-sm text-gray-700">
                        Shop 15A, 18-22 Kremzow Rd<br />
                        Brendale QLD 4500
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-2 border-gray-200">
                <CardContent className="p-6">
                  <div className="flex gap-3 items-start">
                    <div className="text-3xl">📍</div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Current Office</h3>
                      <p className="text-sm text-gray-700">
                        1/263 Toombul Rd<br />
                        Northgate QLD 4013
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Details */}
            <Card className="bg-[#fbe7e7] border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Get In Touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="text-sm text-gray-600">Phone</p>
                      <a href="tel:0735446386" className="font-semibold text-gray-900 hover:text-[#ffa9b1]">
                        07 3544 6386
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <a href="mailto:admin@pinktax.com.au" className="font-semibold text-gray-900 hover:text-[#ffa9b1]">
                        admin@pinktax.com.au
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="bg-white border-2 border-gray-200">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">🕐</span>
                  Office Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday to Friday:</span>
                    <span className="font-semibold text-gray-900">9:00 AM – 4:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="font-semibold text-gray-900">By Appointment Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="font-semibold text-gray-900">Closed</span>
                  </div>
                  <div className="pt-3 mt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-600">
                      <strong>After-Hours Access:</strong> Online accessibility available for urgent matters
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Directory */}
            <Card className="bg-[#def1f1] border-none">
              <CardContent className="p-6">
                <h3 className="font-bold text-gray-900 mb-4 text-lg">Our Team</h3>
                <div className="space-y-2">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="text-sm">
                      <span className="font-semibold text-gray-900">{member.name}</span>
                      <span className="text-gray-600"> – {member.role}</span>
                      <br />
                      <a href={`mailto:${member.email}`} className="text-[#ffa9b1] hover:underline text-xs">
                        {member.email}
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <Card className="sticky top-4">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Book Your Strategy Session
                </h2>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Ready to explore how Pink Accounting can support your growth? Schedule a complimentary 30-minute strategy session.
                </p>

                {/* What to Expect */}
                <div className="bg-[#fbe7e7] rounded-lg p-4 mb-6">
                  <p className="font-semibold text-gray-900 text-sm mb-2">What to Expect:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ Understanding of your current situation and challenges</li>
                    <li>✓ Overview of your growth goals</li>
                    <li>✓ Discussion of how our services align with your needs</li>
                    <li>✓ Transparent pricing tailored to your business</li>
                    <li>✓ No-pressure environment to make an informed decision</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleChange('businessName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Industry *
                    </label>
                    <select
                      value={formData.industry}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                    >
                      <option value="">Select your industry</option>
                      <option value="professional">Professional Services</option>
                      <option value="trade">Trade & Construction</option>
                      <option value="healthcare">Healthcare & Wellness</option>
                      <option value="technology">Technology & Creative</option>
                      <option value="business">Business Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Annual Turnover *
                    </label>
                    <select
                      value={formData.turnover}
                      onChange={(e) => handleChange('turnover', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                    >
                      <option value="">Select turnover range</option>
                      <option value="under500k">Under $500K</option>
                      <option value="500k-1m">$500K-$1M</option>
                      <option value="1m-2m">$1M-$2M</option>
                      <option value="2m-3m">$2M-$3M</option>
                      <option value="3m+">$3M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Primary Need *
                    </label>
                    <select
                      value={formData.primaryNeed}
                      onChange={(e) => handleChange('primaryNeed', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                    >
                      <option value="">Select your primary need</option>
                      <option value="bookkeeping">Full Bookkeeping</option>
                      <option value="tax">Tax Compliance Only</option>
                      <option value="cashflow">Cashflow Management</option>
                      <option value="advisory">Strategic Advisory</option>
                      <option value="system">System Setup</option>
                      <option value="unsure">Unsure - Need Guidance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Current Situation *
                    </label>
                    <select
                      value={formData.currentSituation}
                      onChange={(e) => handleChange('currentSituation', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                    >
                      <option value="">Select your situation</option>
                      <option value="no-accountant">No Accountant</option>
                      <option value="switching">Switching Accountants</option>
                      <option value="additional">Need Additional Services</option>
                      <option value="new-business">Starting New Business</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      placeholder="Tell us more about your business and what you're looking for..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Contact Method *
                      </label>
                      <select
                        value={formData.contactMethod}
                        onChange={(e) => handleChange('contactMethod', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      >
                        <option value="Email">Email</option>
                        <option value="Phone">Phone</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Preferred Time (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.appointmentTime}
                        onChange={(e) => handleChange('appointmentTime', e.target.value)}
                        placeholder="e.g., Mon 10am"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffa9b1] text-sm"
                      />
                    </div>
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-[#ffa9b1] hover:bg-[#ff8a95] text-white font-semibold h-12 text-base"
                  >
                    Schedule My Strategy Session
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card 
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
              >
                <CardContent className="p-0">
                  <div className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-bold text-gray-900 text-lg flex-1">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-[#ffa9b1] flex-shrink-0 transition-transform ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    {expandedFAQ === index && (
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#ffa9b1] to-[#ffccd0] py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-800 mb-6">
            We're here to help. Give us a call or send an email, and we'll get back to you promptly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-[#ffa9b1] font-semibold h-12 px-6">
              📞 Call 07 3544 6386
            </Button>
            <Button className="bg-[#def1f1] hover:bg-[#c5e5e5] text-gray-900 font-semibold h-12 px-6">
              ✉️ Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}