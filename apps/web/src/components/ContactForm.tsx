// components/ContactForm.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';

export default function ContactForm() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const inputClassName = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm transition-all";
  const labelClassName = "block text-sm font-semibold text-gray-900 mb-2";

  return (
    <Card className={cn(componentPresets.card.base)}>
      <CardContent className={designTokens.spacing.card.paddingLg}>
        <h2 className={cn(designTokens.typography.h3, 'text-gray-900 mb-4')}>
          Book Your Strategy Session
        </h2>
        <p className={cn(designTokens.typography.bodySmall, 'text-gray-600 mb-6 leading-relaxed')}>
          Ready to explore how Pink Accounting can support your growth? Schedule a complimentary 30-minute strategy session.
        </p>

        {/* What to Expect */}
        <div className="bg-primary-50 rounded-lg p-6 mb-8">
          <p className={cn(designTokens.typography.bodySmall, 'font-semibold text-gray-900 mb-3')}>
            What to Expect:
          </p>
          <ul className={cn(designTokens.typography.caption, 'text-gray-700 space-y-2')}>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Understanding of your current situation and challenges
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Overview of your growth goals
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Discussion of how our services align with your needs
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Transparent pricing tailored to your business
            </li>
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No-pressure environment to make an informed decision
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClassName}>
                Full Name *
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                className={inputClassName}
                required
              />
            </div>
            <div>
              <label className={labelClassName}>
                Business Name *
              </label>
              <input
                type="text"
                value={formData.businessName}
                onChange={(e) => handleChange('businessName', e.target.value)}
                className={inputClassName}
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClassName}>
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className={inputClassName}
                required
              />
            </div>
            <div>
              <label className={labelClassName}>
                Phone *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className={inputClassName}
                required
              />
            </div>
          </div>

          <div>
            <label className={labelClassName}>
              Industry *
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleChange('industry', e.target.value)}
              className={inputClassName}
              required
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
            <label className={labelClassName}>
              Annual Turnover *
            </label>
            <select
              value={formData.turnover}
              onChange={(e) => handleChange('turnover', e.target.value)}
              className={inputClassName}
              required
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
            <label className={labelClassName}>
              Primary Need *
            </label>
            <select
              value={formData.primaryNeed}
              onChange={(e) => handleChange('primaryNeed', e.target.value)}
              className={inputClassName}
              required
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
            <label className={labelClassName}>
              Current Situation *
            </label>
            <select
              value={formData.currentSituation}
              onChange={(e) => handleChange('currentSituation', e.target.value)}
              className={inputClassName}
              required
            >
              <option value="">Select your situation</option>
              <option value="no-accountant">No Accountant</option>
              <option value="switching">Switching Accountants</option>
              <option value="additional">Need Additional Services</option>
              <option value="new-business">Starting New Business</option>
            </select>
          </div>

          <div>
            <label className={labelClassName}>
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={4}
              className={inputClassName}
              placeholder="Tell us more about your business and what you're looking for..."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className={labelClassName}>
                Preferred Contact Method *
              </label>
              <select
                value={formData.contactMethod}
                onChange={(e) => handleChange('contactMethod', e.target.value)}
                className={inputClassName}
                required
              >
                <option value="Email">Email</option>
                <option value="Phone">Phone</option>
              </select>
            </div>
            <div>
              <label className={labelClassName}>
                Preferred Time (Optional)
              </label>
              <input
                type="text"
                value={formData.appointmentTime}
                onChange={(e) => handleChange('appointmentTime', e.target.value)}
                placeholder="e.g., Mon 10am"
                className={inputClassName}
              />
            </div>
          </div>

          <Button 
            type="submit"
            className={cn(componentPresets.button.primary, "w-full")}
          >
            Schedule My Strategy Session
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}