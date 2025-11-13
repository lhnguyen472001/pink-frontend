// app/about-us/page.tsx
import Image from 'next/image';
import { generateSEO, JsonLd, generatePersonSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';



// Leadership team data
const LEADERSHIP = [
  {
    name: 'Pinky Bui',
    role: 'Principal Accountant & Founder',
    email: 'hb@pinktax.com.au',
    credentials: [
      'Master of Professional Accounting (Griffith University)',
      'Award for Academic Excellence',
      'Member, Institute of Public Accountants (MIPA AFA)',
      'Registered Tax Agent',
      'Licensed Real Estate Licensee',
      '15+ years financial accounting experience'
    ],
    approach: 'I founded Pink Accounting because I saw too many business owners drowning in financial stress, not because they weren\'t capable, but because they didn\'t have the right support. My strength lies in bookkeeping, cashflow management, and building robust internal financial systems. I believe every business deserves accessible, dedicated financial expertise—not just during tax season, but every day of the year.',
    color: 'primary' as const,
    initial: 'P'
  },
  {
    name: 'Jessica You',
    role: 'Senior Tax Accountant',
    email: 'jessica@pinktax.com.au',
    credentials: [
      'Member, Institute of Public Accountants (MIPA AFA)',
      'Registered Tax Agent'
    ],
    approach: 'Jessica brings deep taxation expertise to our practice, ensuring clients are always compliant whilst taking advantage of every legitimate tax optimisation opportunity.',
    color: 'pink' as const,
    initial: 'J'
  },
  {
    name: 'Miftas Sriyan',
    role: 'Financial Accountant',
    email: 'miftas@pinktax.com.au',
    credentials: [
      'Associate CPA',
      'ACCA Qualified',
      '18+ years commercial accounting experience'
    ],
    approach: 'Miftas brings extensive commercial accounting expertise to our practice, excelling in financial reporting, identifying accounting discrepancies, and solving complex accounting problems. His analytical approach and depth of experience make him invaluable for clients with intricate financial structures or challenging accounting issues.',
    color: 'primary' as const,
    initial: 'M'
  }
];

const EXTENDED_TEAM = [
  {
    name: 'Regs',
    role: 'Senior Bookkeeper',
    email: 'regs@pinktax.com.au',
    description: 'Leading our bookkeeping operations with precision and consistency',
    initial: 'R'
  },
  {
    name: 'Nazel Rose',
    role: 'Intermediate Bookkeeper',
    email: 'nazel@pinktax.com.au',
    description: 'Supporting day-to-day bookkeeping and reconciliation tasks',
    initial: 'N'
  },
  {
    name: 'Daisy Nguyen',
    role: 'Bookkeeper',
    email: 'daisy@pinktax.com.au',
    description: 'Specialising in transaction processing and account management',
    initial: 'D'
  },
  {
    name: 'Bonnie Gloriane',
    role: 'Senior Admin',
    email: 'bonnie@pinktax.com.au',
    description: 'Managing client communications and operational coordination',
    initial: 'B'
  }
];

const VALUES = [
  {
    title: 'Quality Over Everything',
    description: 'We don\'t cut corners. Every piece of work reflects our commitment to excellence.',
    icon: '⭐'
  },
  {
    title: 'Accessibility',
    description: 'You shouldn\'t have to wait weeks to talk to your accountant. We\'re here when you need us.',
    icon: '🤝'
  },
  {
    title: 'Dedication',
    description: 'Your success is our success. We\'re invested in your growth journey, not just processing transactions.',
    icon: '💪'
  },
  {
    title: 'Transparency',
    description: 'Clear communication, honest advice, and no surprise fees. You always know where you stand.',
    icon: '💎'
  },
  {
    title: 'Continuous Improvement',
    description: 'We\'re always learning, adapting, and finding better ways to serve our clients.',
    icon: '📈'
  }
];

const MISSION_PILLARS = [
  {
    title: 'Establishing a Culture of Proactive Compliance',
    description: 'We guide enterprises to comprehend the imperative of stringent tax and regulatory adherence. Our mandate is to transform reactive compliance behavior into a proactive discipline, resulting in the elimination of compliance risk and ensuring zero penalty exposure.',
    icon: '🛡️',
    color: 'primary' as const
  },
  {
    title: 'Delivering Real-Time Profitability Visibility',
    description: 'We provide executive-level reporting on P&L and critical cash flow drivers within the current fiscal period, not merely in arrears. This enables owners to make agile, data-driven decisions that protect and optimize margin performance and enhance financial performance.',
    icon: '📊',
    color: 'pink' as const
  },
  {
    title: 'Implementing Scalable Financial Infrastructure',
    description: 'We deploy and integrate advanced cloud-based accounting ecosystems to guarantee the structural consistency necessary for multi-site expansion and brand equity building. This systematic approach achieves maximum owner relief from operational burden.',
    icon: '⚙️',
    color: 'primary' as const
  }
];

// Generate structured data for team members
const teamSchemas = LEADERSHIP.map(member => generatePersonSchema(member));

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
]);

export default function AboutUsPage() {
  return (
    <>
      {/* Structured Data */}
      <JsonLd data={breadcrumbSchema} />
      {teamSchemas.map((schema, index) => (
        <JsonLd key={index} data={schema} />
      ))}

      {/* Hero Section */}
      <Section variant="hero" size="lg">
        <div className="text-center">
          <h1 className={cn(designTokens.typography.h1, 'text-gray-900 mb-6')}>
            Meet Your Financial Partners
          </h1>
          <p className={cn(designTokens.typography.lead, 'text-gray-800 max-w-3xl mx-auto')}>
            A dedicated team of accounting professionals committed to your business success
          </p>
        </div>
      </Section>

      {/* Vision & Mission */}
      <Section>
        <div className={cn(designTokens.grid.cols2, designTokens.spacing.gap.lg, 'mb-16')}>
          <Card className={cn(
            componentPresets.card.colored('pink'),
            designTokens.shadows.lg
          )}>
            <CardContent className={designTokens.spacing.card.paddingLg}>
              <div className="text-5xl mb-4" role="img" aria-label="Target">🎯</div>
              <h2 className={cn(designTokens.typography.h3, 'text-gray-900 mb-4')}>
                Our Vision
              </h2>
              <p className={cn(designTokens.typography.body, 'text-gray-700')}>
                To be the indispensable strategic partner empowering ambitious enterprise owners to achieve sustainable scaling, superior operational efficiency, and absolute financial certainty within the complex Australian regulatory landscape.
              </p>
            </CardContent>
          </Card>

          <Card className={cn(
            componentPresets.card.colored('primary'),
            designTokens.shadows.lg
          )}>
            <CardContent className={designTokens.spacing.card.paddingLg}>
              <div className="text-5xl mb-4" role="img" aria-label="Rocket">🚀</div>
              <h2 className={cn(designTokens.typography.h3, 'text-gray-900 mb-4')}>
                Our Mission
              </h2>
              <p className={cn(designTokens.typography.body, 'text-gray-700')}>
                Pink is dedicated to elevating entrepreneurship by transitioning accounting from a passive operational overhead into a strategic capital investment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Pillars */}
        <div className="space-y-6">
          <h3 className={cn(designTokens.typography.h3, 'text-center mb-8')}>
            Three Core Pillars of Value
          </h3>

          {MISSION_PILLARS.map((pillar, index) => (
            <Card
              key={index}
              className={cn(
                'overflow-hidden',
                designTokens.shadows.lg,
                designTokens.transitions.base,
                'hover:shadow-2xl'
              )}
            >
              <CardContent className="p-0">
                <div className={cn(
                  'grid md:grid-cols-[auto_1fr]',
                  index === 1 && 'md:grid-flow-col-dense'
                )}>
                  <div
                    className={cn(
                      'p-8 flex items-center justify-center md:w-48',
                      componentPresets.card.colored(pillar.color),
                      index === 1 && 'md:col-start-2'
                    )}
                  >
                    <div className="text-6xl" role="img" aria-label={pillar.title}>
                      {pillar.icon}
                    </div>
                  </div>

                  <div className={cn(
                    'p-8 bg-white',
                    index === 1 && 'md:col-start-1'
                  )}>
                    <h4 className={cn(designTokens.typography.h4, 'text-gray-900 mb-3')}>
                      {pillar.title}
                    </h4>
                    <p className={cn(designTokens.typography.body, 'text-gray-600')}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Leadership Team */}
      <Section variant="neutral">
        <SectionHeader title="Leadership Team" />

        <div className="space-y-8">
          {LEADERSHIP.map((member, index) => (
            <Card
              key={index}
              className={cn(
                'overflow-hidden',
                designTokens.shadows.lg,
                designTokens.transitions.base,
                'hover:shadow-2xl'
              )}
            >
              <CardContent className="p-0">
                <div className={cn(
                  'grid md:grid-cols-[300px_1fr]',
                  index % 2 === 1 && 'md:grid-flow-col-dense'
                )}>
                  {/* Profile Side */}
                  <div
                    className={cn(
                      'p-8 flex flex-col items-center justify-center text-center',
                      componentPresets.card.colored(member.color),
                      index % 2 === 1 && 'md:col-start-2'
                    )}
                  >
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-lg">
                      {member.initial}
                    </div>
                    <h3 className={cn(designTokens.typography.h3, 'text-gray-900 mb-2')}>
                      {member.name}
                    </h3>
                    <p className={cn(designTokens.typography.body, 'text-gray-700 font-semibold mb-3')}>
                      {member.role}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className={cn(
                        designTokens.typography.bodySmall,
                        'text-gray-600 hover:text-primary-400',
                        designTokens.transitions.base
                      )}
                    >
                      {member.email}
                    </a>
                  </div>

                  {/* Credentials Side */}
                  <div className={cn(
                    'p-8 bg-white',
                    index % 2 === 1 && 'md:col-start-1'
                  )}>
                    <h4 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-sm">
                      Credentials:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {member.credentials.map((credential, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg
                            className="w-5 h-5 text-primary-400 mt-0.5 shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {credential}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4 border-t border-gray-200">
                      <blockquote className={cn(designTokens.typography.body, 'text-gray-700 italic')}>
                        &ldquo;{member.approach}&rdquo;
                      </blockquote>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Extended Team */}
      <Section>
        <SectionHeader title="Our Extended Team" />

        <div className={cn(designTokens.grid.cols2, designTokens.spacing.gap.md)}>
          {EXTENDED_TEAM.map((member, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.interactive,
                'border-2 border-gray-100'
              )}
            >
              <CardContent className={designTokens.spacing.card.padding}>
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center text-gray-700 text-2xl font-bold shrink-0 shadow-md">
                    {member.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(designTokens.typography.h4, 'text-gray-900 mb-1 truncate')}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary-400 mb-2">
                      {member.role}
                    </p>
                    <a
                      href={`mailto:${member.email}`}
                      className={cn(
                        designTokens.typography.caption,
                        'text-gray-500 hover:text-primary-400',
                        designTokens.transitions.base,
                        'mb-3 block'
                      )}
                    >
                      {member.email}
                    </a>
                    <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section variant="secondary">
        <SectionHeader title="Our Values" />

        <div className={cn(designTokens.grid.cols3, designTokens.spacing.gap.md)}>
          {VALUES.map((value, index) => (
            <Card
              key={index}
              className={cn(
                'bg-white',
                designTokens.shadows.lg,
                designTokens.transitions.base,
                'hover:shadow-2xl hover:-translate-y-1'
              )}
            >
              <CardContent className={cn(
                designTokens.spacing.card.padding,
                'text-center'
              )}>
                <div className="text-5xl mb-4" role="img" aria-label={value.title}>
                  {value.icon}
                </div>
                <h3 className={cn(designTokens.typography.h5, 'text-gray-900 mb-3')}>
                  {value.title}
                </h3>
                <p className={cn(designTokens.typography.bodySmall, 'text-gray-600')}>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="hero" size="md">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={cn(designTokens.typography.h2, 'text-gray-900 mb-6')}>
            Ready to Partner with Us?
          </h2>
          <p className={cn(designTokens.typography.lead, 'text-gray-800 mb-8')}>
            Let's have a conversation about how we can support your business growth and financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className={componentPresets.button.primary}>
              Schedule a Meeting
            </Button>
            <Button className={componentPresets.button.secondary}>
              Email Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}