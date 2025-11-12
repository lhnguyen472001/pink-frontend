"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AboutUsPage() {
  const leadership = [
    {
      name: "Pinky Bui",
      role: "Principal Accountant & Founder",
      email: "hb@pinktax.com.au",
      credentials: [
        "Master of Professional Accounting (Griffith University)",
        "Award for Academic Excellence",
        "Member, Institute of Public Accountants (MIPA AFA)",
        "Registered Tax Agent",
        "Licensed Real Estate Licensee",
        "15+ years financial accounting experience"
      ],
      approach: "I founded Pink Accounting because I saw too many business owners drowning in financial stress, not because they weren't capable, but because they didn't have the right support. My strength lies in bookkeeping, cashflow management, and building robust internal financial systems. I believe every business deserves accessible, dedicated financial expertise—not just during tax season, but every day of the year.",
      color: "#fbe7e7",
      initial: "P"
    },
    {
      name: "Jessica You",
      role: "Senior Tax Accountant",
      email: "jessica@pinktax.com.au",
      credentials: [
        "Member, Institute of Public Accountants (MIPA AFA)",
        "Registered Tax Agent"
      ],
      approach: "Jessica brings deep taxation expertise to our practice, ensuring clients are always compliant whilst taking advantage of every legitimate tax optimisation opportunity.",
      color: "#def1f1",
      initial: "J"
    },
    {
      name: "Miftas Sriyan",
      role: "Financial Accountant",
      email: "miftas@pinktax.com.au",
      credentials: [
        "Associate CPA",
        "ACCA Qualified",
        "18+ years commercial accounting experience"
      ],
      approach: "Miftas brings extensive commercial accounting expertise to our practice, excelling in financial reporting, identifying accounting discrepancies, and solving complex accounting problems. His analytical approach and depth of experience make him invaluable for clients with intricate financial structures or challenging accounting issues.",
      color: "#fbe7e7",
      initial: "M"
    }
  ];

  const extendedTeam = [
    {
      name: "Regs",
      role: "Senior Bookkeeper",
      email: "regs@pinktax.com.au",
      description: "Leading our bookkeeping operations with precision and consistency",
      initial: "R"
    },
    {
      name: "Nazel Rose",
      role: "Intermediate Bookkeeper",
      email: "nazel@pinktax.com.au",
      description: "Supporting day-to-day bookkeeping and reconciliation tasks",
      initial: "N"
    },
    {
      name: "Daisy Nguyen",
      role: "Bookkeeper",
      email: "daisy@pinktax.com.au",
      description: "Specialising in transaction processing and account management",
      initial: "D"
    },
    {
      name: "Bonnie Gloriane",
      role: "Senior Admin",
      email: "bonnie@pinktax.com.au",
      description: "Managing client communications and operational coordination",
      initial: "B"
    }
  ];

  const values = [
    {
      title: "Quality Over Everything",
      description: "We don't cut corners. Every piece of work reflects our commitment to excellence.",
      icon: "⭐"
    },
    {
      title: "Accessibility",
      description: "You shouldn't have to wait weeks to talk to your accountant. We're here when you need us.",
      icon: "🤝"
    },
    {
      title: "Dedication",
      description: "Your success is our success. We're invested in your growth journey, not just processing transactions.",
      icon: "💪"
    },
    {
      title: "Transparency",
      description: "Clear communication, honest advice, and no surprise fees. You always know where you stand.",
      icon: "💎"
    },
    {
      title: "Continuous Improvement",
      description: "We're always learning, adapting, and finding better ways to serve our clients.",
      icon: "📈"
    }
  ];

  const missionPillars = [
    {
      title: "Establishing a Culture of Proactive Compliance",
      description: "We guide enterprises to comprehend the imperative of stringent tax and regulatory adherence. Our mandate is to transform reactive compliance behavior into a proactive discipline, resulting in the elimination of compliance risk and ensuring zero penalty exposure.",
      icon: "🛡️",
      color: "#fbe7e7"
    },
    {
      title: "Delivering Real-Time Profitability Visibility",
      description: "We provide executive-level reporting on P&L and critical cash flow drivers within the current fiscal period, not merely in arrears. This enables owners to make agile, data-driven decisions that protect and optimize margin performance and enhance financial performance.",
      icon: "📊",
      color: "#def1f1"
    },
    {
      title: "Implementing Scalable Financial Infrastructure",
      description: "We deploy and integrate advanced cloud-based accounting ecosystems to guarantee the structural consistency necessary for multi-site expansion and brand equity building. This systematic approach achieves maximum owner relief from operational burden.",
      icon: "⚙️",
      color: "#fbe7e7"
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-linear-to-br from-[#ffa9b1] to-[#ffccd0] py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your Financial Partners
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            A dedicated team of accounting professionals committed to your business success
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-[#def1f1] border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-5xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To be the indispensable strategic partner empowering ambitious enterprise owners to achieve sustainable scaling, superior operational efficiency, and absolute financial certainty within the complex Australian regulatory landscape.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#fbe7e7] border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-5xl mb-4">🚀</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                Pink is dedicated to elevating entrepreneurship by transitioning accounting from a passive operational overhead into a strategic capital investment.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center mb-8">Three Core Pillars of Value</h3>
          {missionPillars.map((pillar, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
              <CardContent className="p-0">
                <div className={`grid md:grid-cols-[auto_1fr] ${index === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div 
                    className="p-8 flex items-center justify-center md:w-48"
                    style={{ backgroundColor: pillar.color }}
                  >
                    <div className="text-6xl">{pillar.icon}</div>
                  </div>
                  <div className={`p-8 bg-white ${index === 1 ? '[direction:ltr]' : ''}`}>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {pillar.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Leadership Team</h2>
          <div className="space-y-8">
            {leadership.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-[300px_1fr] ${index % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                    {/* Profile Side */}
                    <div 
                      className="p-8 flex flex-col items-center justify-center text-center"
                      style={{ backgroundColor: member.color }}
                    >
                      <div className="w-32 h-32 rounded-full bg-linear-to-br from-[#ffa9b1] to-[#ff8a95] flex items-center justify-center text-white text-5xl font-bold mb-4 shadow-lg">
                        {member.initial}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      <p className="text-lg text-gray-700 font-semibold mb-3">
                        {member.role}
                      </p>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-sm text-gray-600 hover:text-[#ffa9b1] transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>

                    <div className={`p-8 bg-white ${index % 2 === 1 ? '[direction:ltr]' : ''}`}>
                      <h4 className="font-semibold text-gray-700 mb-3 uppercase tracking-wide text-sm">
                        Credentials:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {member.credentials.map((credential, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <svg
                              className="w-5 h-5 text-[#ffa9b1] mt-0.5 shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
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
                        <p className="text-gray-700 leading-relaxed italic">
                          "{member.approach}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Extended Team</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {extendedTeam.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-gray-100">
              <CardContent className="p-6">
                <div className="flex gap-4 items-start">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-[#def1f1] to-[#b8e4e4] flex items-center justify-center text-gray-700 text-2xl font-bold shrink-0 shadow-md">
                    {member.initial}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-[#ffa9b1] mb-2">
                      {member.role}
                    </p>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-xs text-gray-500 hover:text-[#ffa9b1] transition-colors mb-3 block"
                    >
                      {member.email}
                    </a>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-[#def1f1] py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className={`bg-white hover:shadow-xl transition-all hover:-translate-y-1 ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-[#ffa9b1] to-[#ffccd0] py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-800 mb-8">
            Let's have a conversation about how we can support your business growth and financial success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white hover:bg-gray-100 text-[#ffa9b1] text-base h-14 font-semibold px-8">
              Schedule a Meeting
            </Button>
            <Button className="bg-[#def1f1] hover:bg-[#c5e5e5] text-gray-900 text-base h-14 font-semibold px-8">
              Email Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}