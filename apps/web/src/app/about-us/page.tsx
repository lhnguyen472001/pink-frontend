// app/about-us/page.tsx
import Image from 'next/image';
import { generateSEO, JsonLd, generatePersonSchema, generateBreadcrumbSchema } from '@/lib/seo';
import { Section } from '@/components/Section';
import { SectionHeader } from '@/components/SectionHeader';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn, designTokens, componentPresets } from '@/lib/design-tokens';
import imgCeo from '@public/ceo.jpg';
import {
  Target,
  Rocket,
  Shield,
  BarChart3,
  Settings,
  Star,
  Handshake,
  Zap,
  Gem,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

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
    img: imgCeo
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
    img: imgCeo
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
    img: imgCeo
  }
];

const EXTENDED_TEAM = [
  {
    name: 'Regs',
    role: 'Senior Bookkeeper',
    email: 'regs@pinktax.com.au',
    description: 'Leading our bookkeeping operations with precision and consistency',
    img: imgCeo
  },
  {
    name: 'Nazel Rose',
    role: 'Intermediate Bookkeeper',
    email: 'nazel@pinktax.com.au',
    description: 'Supporting day-to-day bookkeeping and reconciliation tasks',
    img: imgCeo
  },
  {
    name: 'Daisy Nguyen',
    role: 'Bookkeeper',
    email: 'daisy@pinktax.com.au',
    description: 'Specialising in transaction processing and account management',
    img: imgCeo
  },
  {
    name: 'Bonnie Gloriane',
    role: 'Senior Admin',
    email: 'bonnie@pinktax.com.au',
    description: 'Managing client communications and operational coordination',
    img: imgCeo
  }
];

const VALUES = [
  {
    title: 'Quality Over Everything',
    description: 'We don\'t cut corners. Every piece of work reflects our commitment to excellence.',
    icon: Star
  },
  {
    title: 'Accessibility',
    description: 'You shouldn\'t have to wait weeks to talk to your accountant. We\'re here when you need us.',
    icon: Handshake
  },
  {
    title: 'Dedication',
    description: 'Your success is our success. We\'re invested in your growth journey, not just processing transactions.',
    icon: Zap
  },
  {
    title: 'Transparency',
    description: 'Clear communication, honest advice, and no surprise fees. You always know where you stand.',
    icon: Gem
  },
  {
    title: 'Continuous Improvement',
    description: 'We\'re always learning, adapting, and finding better ways to serve our clients.',
    icon: TrendingUp
  }
];

const MISSION_PILLARS = [
  {
    title: 'Establishing a Culture of Proactive Compliance',
    description: 'We guide enterprises to comprehend the imperative of stringent tax and regulatory adherence. Our mandate is to transform reactive compliance behavior into a proactive discipline, resulting in the elimination of compliance risk and ensuring zero penalty exposure.',
    icon: Shield,
    color: 'primary' as const
  },
  {
    title: 'Delivering Real-Time Profitability Visibility',
    description: 'We provide executive-level reporting on P&L and critical cash flow drivers within the current fiscal period, not merely in arrears. This enables owners to make agile, data-driven decisions that protect and optimize margin performance and enhance financial performance.',
    icon: BarChart3,
    color: 'pink' as const
  },
  {
    title: 'Implementing Scalable Financial Infrastructure',
    description: 'We deploy and integrate advanced cloud-based accounting ecosystems to guarantee the structural consistency necessary for multi-site expansion and brand equity building. This systematic approach achieves maximum owner relief from operational burden.',
    icon: Settings,
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

      {/* Hero Section - Optimized */}
      <Section variant="hero" size="lg">
        <div className="text-center px-4">
          <h1 className={cn(
            designTokens.typography.h1,
            'text-gray-900 mb-4 sm:mb-6',
            'text-2xl sm:text-3xl md:text-4xl lg:text-5xl'
          )}>
            Meet Your Financial Partners
          </h1>
          <p className={cn(
            designTokens.typography.lead,
            'text-gray-800 max-w-3xl mx-auto',
            'text-sm sm:text-base md:text-lg'
          )}>
            A dedicated team of accounting professionals committed to your business success
          </p>
        </div>
      </Section>

      {/* Vision & Mission - Optimized */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
          <Card className={cn(
            componentPresets.card.colored('pink'),
            designTokens.shadows.lg
          )}>
            <CardContent className="p-6 sm:p-8 md:p-10">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" style={{ color: '#ed1651' }} strokeWidth={1.5} />
              <h2 className={cn(
                designTokens.typography.h3,
                'text-gray-900 mb-3 sm:mb-4',
                'text-xl sm:text-2xl md:text-3xl'
              )}>
                Our Vision
              </h2>
              <p className={cn(
                designTokens.typography.body,
                'text-gray-700',
                'text-sm sm:text-base leading-relaxed'
              )}>
                To be the indispensable strategic partner empowering ambitious enterprise owners to achieve sustainable scaling, superior operational efficiency, and absolute financial certainty within the complex Australian regulatory landscape.
              </p>
            </CardContent>
          </Card>

          <Card className={cn(
            componentPresets.card.colored('primary'),
            designTokens.shadows.lg
          )}>
            <CardContent className="p-6 sm:p-8 md:p-10">
              <Rocket className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" style={{ color: '#ed1651' }} strokeWidth={1.5} />
              <h2 className={cn(
                designTokens.typography.h3,
                'text-gray-900 mb-3 sm:mb-4',
                'text-xl sm:text-2xl md:text-3xl'
              )}>
                Our Mission
              </h2>
              <p className={cn(
                designTokens.typography.body,
                'text-gray-700',
                'text-sm sm:text-base leading-relaxed'
              )}>
                Pink is dedicated to elevating entrepreneurship by transitioning accounting from a passive operational overhead into a strategic capital investment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Pillars - Optimized */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className={cn(
            designTokens.typography.h3,
            'text-center mb-6 sm:mb-8',
            'text-xl sm:text-2xl md:text-3xl px-4'
          )}>
            Three Core Pillars of Value
          </h3>

          {MISSION_PILLARS.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
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
                        'p-6 sm:p-8 flex items-center justify-center md:w-40 lg:w-48',
                        componentPresets.card.colored(pillar.color),
                        index === 1 && 'md:col-start-2'
                      )}
                    >
                      <IconComponent className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" style={{ color: '#ed1651' }} strokeWidth={1.5} />
                    </div>

                    <div className={cn(
                      'p-6 sm:p-8 bg-white',
                      index === 1 && 'md:col-start-1'
                    )}>
                      <h4 className={cn(
                        designTokens.typography.h4,
                        'text-gray-900 mb-2 sm:mb-3',
                        'text-base sm:text-lg md:text-xl'
                      )}>
                        {pillar.title}
                      </h4>
                      <p className={cn(
                        designTokens.typography.body,
                        'text-gray-600',
                        'text-sm sm:text-base leading-relaxed'
                      )}>
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Leadership Team - Optimized */}
      <Section variant="neutral">
        <SectionHeader title="Leadership Team" />

        <div className="space-y-6 sm:space-y-8">
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
                  'grid md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]',
                  index % 2 === 1 && 'md:grid-flow-col-dense'
                )}>
                  {/* Profile Side */}
                  <div
                    className={cn(
                      'p-6 sm:p-8 flex flex-col items-center justify-center text-center',
                      componentPresets.card.colored(member.color),
                      index % 2 === 1 && 'md:col-start-2'
                    )}
                  >
                    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 shadow-lg">
                      <Image
                        src={member.img}
                        alt="Pink Accounting founding story"
                        width={128}
                        height={128}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className={cn(
                      designTokens.typography.h3,
                      'text-gray-900 mb-1 sm:mb-2',
                      'text-xl sm:text-2xl'
                    )}>
                      {member.name}
                    </h3>
                    <p className={cn(
                      designTokens.typography.body,
                      'text-gray-700 font-semibold mb-2 sm:mb-3',
                      'text-sm sm:text-base'
                    )}>
                      {member.role}
                    </p>
                    <Link
                      href={`mailto:${member.email}`}
                      className={cn(
                        designTokens.typography.bodySmall,
                        'text-gray-600 hover:text-primary-400',
                        designTokens.transitions.base,
                        'text-xs sm:text-sm break-all'
                      )}
                    >
                      {member.email}
                    </Link>
                  </div>

                  {/* Credentials Side */}
                  <div className={cn(
                    'p-6 sm:p-8 bg-white',
                    index % 2 === 1 && 'md:col-start-1'
                  )}>
                    <h4 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-xs sm:text-sm">
                      Credentials:
                    </h4>
                    <ul className="space-y-2 mb-4 sm:mb-6">
                      {member.credentials.map((credential, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 shrink-0"
                            style={{ color: '#ed1651' }}
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
                      <blockquote className={cn(
                        designTokens.typography.body,
                        'text-gray-700 italic',
                        'text-sm sm:text-base leading-relaxed'
                      )}>
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

      {/* Extended Team - Optimized */}
      <Section>
        <SectionHeader title="Our Extended Team" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {EXTENDED_TEAM.map((member, index) => (
            <Card
              key={index}
              className={cn(
                componentPresets.card.interactive,
                'border-2 border-gray-100'
              )}
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="w-12 h-12 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 shadow-lg">
                    <Image
                      src={member.img}
                      alt="Pink Accounting founding story"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={cn(
                      designTokens.typography.h4,
                      'text-gray-900 mb-1 truncate',
                      'text-base sm:text-lg'
                    )}>
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold mb-2" style={{ color: '#ed1651' }}>
                      {member.role}
                    </p>
                    <Link
                      href={`mailto:${member.email}`}
                      className={cn(
                        designTokens.typography.caption,
                        'text-gray-500 hover:text-primary-400',
                        designTokens.transitions.base,
                        'mb-2 sm:mb-3 block text-xs break-all'
                      )}
                    >
                      {member.email}
                    </Link>
                    <p className={cn(
                      designTokens.typography.bodySmall,
                      'text-gray-600',
                      'text-xs sm:text-sm leading-relaxed'
                    )}>
                      {member.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Values - Optimized */}
      <Section variant="secondary">
        <SectionHeader title="Our Values" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {VALUES.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card
                key={index}
                className={cn(
                  'bg-white',
                  designTokens.shadows.lg,
                  designTokens.transitions.base,
                  'hover:shadow-2xl hover:-translate-y-1'
                )}
              >
                <CardContent className="p-5 sm:p-6 md:p-8 text-center">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 mx-auto" style={{ color: '#ed1651' }} strokeWidth={1.5} />
                  <h3 className={cn(
                    designTokens.typography.h5,
                    'text-gray-900 mb-2 sm:mb-3',
                    'text-base sm:text-lg'
                  )}>
                    {value.title}
                  </h3>
                  <p className={cn(
                    designTokens.typography.bodySmall,
                    'text-gray-600',
                    'text-sm sm:text-base leading-relaxed'
                  )}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Pink Accounting Difference - Optimized */}
      <Section variant="hero" size="md">
        <div className="bg-white p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-sm max-w-5xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            The Pink Accounting Difference
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="border-l-4 border-[#ed1651] pl-3 sm:pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Hybrid Team Power
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Australian professionals + offshore specialists for premium, cost-effective service.
              </p>
            </div>
            <div className="border-l-4 border-[#ed1651] pl-3 sm:pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Service Business Specialists
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                We understand the unique challenges of time-based revenue and project cashflow cycles.
              </p>
            </div>
            <div className="border-l-4 border-[#ed1651] pl-3 sm:pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                SEQ Focused
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Local expertise with deep understanding of the Queensland business landscape.
              </p>
            </div>
            <div className="border-l-4 border-[#ed1651] pl-3 sm:pl-4">
              <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                Always Accessible
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Business hours, Saturday appointments, online after-hours—no more waiting for answers.
              </p>
            </div>
          </div>
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
            Ready to Partner with Us?
          </h2>
          <p className={cn(
            designTokens.typography.lead,
            'text-gray-800 mb-6 sm:mb-8',
            'text-sm sm:text-base md:text-lg'
          )}>
            Let's have a conversation about how we can support your business growth and financial success.
          </p>
          <Link href="/contact">
            <Button className={cn(
              componentPresets.button.primary,
              'bg-[#ed1651] cursor-pointer shadow-lg',
              'text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4'
            )}>
              Get in Touch
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}