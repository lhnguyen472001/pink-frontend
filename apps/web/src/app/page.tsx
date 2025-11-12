"use client"
import Image from "next/image";
import section1 from '@public/home/section1.jpg'
import { Button } from "@/components/ui/button";
import icon1 from "@public/home/time.svg"
import icon2 from "@public/home/kn.svg"
import icon3 from "@public/home/mess.svg"
import imgDefault from "@public/home/test.jpg"
import icon4 from "@public/home/global.svg"
import { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState<number>(0)

  useEffect(() => {
    if (!api) return;

    api.scrollTo(2);
    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  const listSection2 = [{ title: "98% Retention Since 2020", des: "Clients rave about our dedication (see their stories below).", icon: icon1 },
  { title: "15+ Years Expertise", des: "Led by Pinky Bui (Master of Professional Accounting, MIPA), blending local SEQ knowledge with global standards.", icon: icon2 },
  { title: "Always Accessible", des: "Business hours, Saturday appointments, online after-hours, no more waiting for answers.", icon: icon3 },
  { title: "Hybrid Team Power", des: "Australian professionals + offshore specialists for premium, cost-effective service.", icon: icon4 },
  ]
  const listSection4 = [{ title: "98% Client Retention Since 2020", des: "Clients rave about our dedication (see their stories below).", img: imgDefault },
  { title: "15 Years of Financial Expertise", des: "Led by Pinky Bui (Master of Professional Accounting, MIPA), blending local SEQ knowledge with global standards.", img: imgDefault },
  { title: "Accessible When You Need Us", des: "Business hours, Saturday appointments, online after-hours, no more waiting for answers.", img: imgDefault },
  { title: "Blended Team Excellence", des: "Australian professionals + offshore specialists for premium, cost-effective service.", img: imgDefault },
  ]
  const listSection3 = [{ color: "#fbe7e7", img: imgDefault, title: "Reclaim Your Time", des: "Outsource bookkeeping chaos to our experts, focus on scaling while we handle the details." },
  { color: "#def1f1", img: imgDefault, title: "Master Cashflow", des: "Real-time forecasts and optimisation ensure steady profitability, avoiding common pitfalls that sink 80% of growing firms." },
  { color: "#fbe7e7", img: imgDefault, title: "Build Scalable Systems", des: "Custom infrastructure for $500K-$3M+ growth, from Xero setups to KPI dashboards." },
  { color: "#def1f1", img: imgDefault, title: "Tax-Optimised Compliance", des: "Stay compliant whilst minimising tax liability. Our registered tax agents ensure you're taking advantage of every legitimate opportunity to reduce your tax burden." }
  ]
  return (
    <div className="flex flex-col gap-20">
      <section className=" bg-[#def1f1]">
        <div className="grid lg:px-4 grid-cols-2 gap-16 max-w-5xl w-full mx-auto">
          <div className=" flex-col justify-center flex gap-8 max-lg:pl-12 ">
            <p className="text-3xl font-bold">Brisbane-based accounting firm helping local businesses thrive.</p>
            <p className="text-sm"> Your Local Growth Partner for South-East Queensland businesses ready to grow beyond $500K
            </p>
            <Button className="bg-[#ffa9b1] w-fit hover:bg-[#ffc4ca] text-base  h-14  font-semibold cursor-pointer text-black"><p className="justify-center flex flex-col">Book Your Strategy Session
              <span className="font-normal text-sm">Download Financial Health Checklist</span>
            </p>
            </Button>
          </div>
          <Image src={section1} alt="section1" className="w-full aspect-square object-cover" width={500} height={500} />
        </div>
      </section>
      <section className="max-w-5xl grid px-4 grid-cols-4 gap-4 mx-auto w-full">
        {listSection2.map((val, index) => (
          <div key={index} className="flex flex-col gap-3 justify-between items-center py-4 px-5 rounded-md bg-[#eaeaea]">
            <Image src={val.icon} alt="icon" className="size-16" width={100} height={100} />
            <p className="font-bold text-lg">{val.title}</p>
            <p className="grow">{val.des}</p>
          </div>
        ))}
      </section>
      <section className="max-w-5xl px-4 mx-auto w-full flex flex-col gap-10">
        <p className="text-2xl font-bold text-center">Why Growing Businesses Choose Pink Accounting</p>
        {listSection3.map((val, idx) => (
          <div key={idx} className={`${idx % 2 == 0 ? "" : "[direction:rtl]"} items-center relative grid grid-cols-2`}>
            <div className={`absolute inset-0 w-3/4 rounded-md bg-[${val.color}] ${idx % 2 == 0 ? "ml-auto" : "mr-auto"}`}></div>
            <div className="py-6 relative">
              <Image src={val.img} className="rounded-lg aspect-video w-full" width={480} height={270} alt="img" />
            </div>
            <div className={`p-9 relative ${idx % 2 == 0 ? "" : "text-left"} gap-3 flex flex-col`}>
              <p className="text-lg font-bold">{val.title}</p>
              <p>{val.des}</p>
            </div>
          </div>
        ))}
      </section>
      <section>
        <p className="text-2xl font-bold text-center">Our Service Packages
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
            containScroll: "trimSnaps",
          }}
          className="w-full px-4 max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4 pt-10 pb-12">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id} className="pl-4 basis-[85%] md:basis-[70%] lg:basis-[50%]">
                <Card
                  className={`bg-white h-full transition-all duration-500 ${index === current
                    ? 'scale-100 opacity-100 shadow-2xl'
                    : 'scale-90 opacity-40 shadow-md'
                    }`}
                >
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex gap-6 flex-1">
                      {/* Left Side - Package Info */}
                      <div className="flex-1 flex flex-col">
                        {/* Badge for Most Popular */}
                        {testimonial.mostPopular && (
                          <div className="mb-4">
                            <span className="inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                              Most Popular
                            </span>
                          </div>
                        )}

                        {/* Package Name */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {testimonial.package}
                          </h3>
                          <p className="text-sm text-gray-500">{testimonial.idealFor}</p>
                        </div>

                        {/* Pricing */}
                        <div className="pb-6">
                          <p className="text-3xl font-bold text-cyan-600">
                            {testimonial.monthlyInvestment.split(' ')[0]} {testimonial.monthlyInvestment.split(' ')[1]}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {testimonial.monthlyInvestment.match(/\(.*\)/)?.[0]}
                          </p>
                        </div>
                      </div>

                      {/* Right Side - Key Features */}
                      <div className="flex-1 flex flex-col">
                        <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                          Key Features
                        </p>
                        <div className="space-y-3">
                          {testimonial.keyFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <svg
                                className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0"
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
                              <p className="text-sm text-gray-600 leading-relaxed">
                                {feature}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:block">
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </div>
        </Carousel>

        {/* <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`transition-all duration-300 rounded-full ${index === current
                ? 'bg-gray-800 w-8 h-2'
                : 'bg-gray-300 w-2 h-2'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div> */}
        <div className="px-4 flex gap-5 flex-col justify-center items-center">
          <p className="text-center">
            All packages available as monthly investments. Contact us to discuss unbundled services tailored to your specific needs.

          </p>
          <Button className="bg-[#ffa9b1] w-fit hover:bg-[#ffc4ca] text-base  h-14  font-semibold cursor-pointer text-black">Schedule a Consultation to Discuss Your Needs</Button>
        </div>
      </section>
      <hr />
      <section className="max-w-5xl w-full mx-auto px-4">
        <p className="text-2xl font-bold text-center">Who We Serve Best</p>
        <div className="grid grid-cols-6 gap-6 max-w-6xl mx-auto p-8">
          {testimonials1.map((testimonial, index) => (
            <div
              key={index}
              className={`col-span-2 bg-white rounded-lg shadow-lg p-6 border border-gray-200 ${index === 3 ? 'col-start-2' : ''
                }`}
            >
              <h3 className="text-lg font-bold text-gray-800 mb-4">
                {testimonial.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {testimonial.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#fef3e1] py-7">
        <div className=" max-w-5xl w-full mx-auto px-4">
          <p className="text-2xl font-bold ">Client Success Stories</p>
          <div className="grid grid-cols-3 pt-7 gap-4">
            {testimonials2.map((val, idx) => (
              <div
                key={idx}
                className="bg-white flex flex-col gap-3 rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-start ">
                  <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed  grow">
                  &ldquo;{val.quote}&ldquo;
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-teal-400 flex items-center justify-center text-white font-semibold text-sm">
                    {val.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{val.author}</p>
                    <p className="text-xs text-gray-500">{val.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-5xl mx-auto px-4 py-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Pink Accounting started during COVID-19
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto bg-linear-to-br from-cyan-400 to-teal-400 rounded-full flex items-center justify-center mb-6">
                    <span className="text-6xl">🌸</span>
                  </div>
                  <div className="text-6xl font-bold text-cyan-600 mb-2">2020</div>
                  <p className="text-gray-600 font-medium">Founded during COVID-19</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-cyan-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Born from Challenge
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded in 2020 during the challenging COVID-19 period, Pink Accounting & Tax Solutions was born from a mission to help South-East Queensland business owners navigate uncertainty and emerge stronger.
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Evolved with Purpose
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  What started as supporting businesses through crisis has evolved into a specialised practice helping growth-focused service-based companies scale with confidence. We now focus on partnering with businesses ready to invest in strategic financial management.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-cyan-50 to-teal-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="size-20 rounded-full bg-linear-to-br from-cyan-400 to-teal-400 shrink-0 flex items-center justify-center">
                <span className="text-5xl">👩‍💼</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Led by Pinky Bui
                </h3>
                <p className="text-cyan-600 font-semibold mb-3">
                  Qualified Accountant | Official Member of the Institute of Public Accountants
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our practice combines technical excellence with real-world business acumen, ensuring you receive both expert advice and practical solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 border-cyan-500">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-800 mb-4">
                Our Promise
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Quality work, accessible service, and dedicated partnership at every stage of your growth journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
const testimonials = [
  {
    id: 1,
    package: 'Essentials',
    idealFor: 'Compliance-only needs',
    monthlyInvestment: 'From $417 ($5,000 annually)',
    keyFeatures: [
      'Quarterly BAS & lodgement',
      'Annual tax returns',
      'Basic tax advice',
      'Email support',
      'Compliance calendar'
    ]
  },
  {
    id: 2,
    package: 'Foundation',
    idealFor: '$500K-$1M turnover',
    monthlyInvestment: 'From $1,000 ($12,000 annually)',
    keyFeatures: [
      'Everything in Essentials',
      'Monthly bookkeeping',
      'Cashflow reports',
      'Quarterly check-ins',
      'Phone support'
    ]
  },
  {
    id: 3,
    package: 'Growth',
    idealFor: '$1M-$2M turnover',
    monthlyInvestment: 'From $1,250 ($15,000 annually)',
    keyFeatures: [
      'Everything in Foundation',
      'Fortnightly cashflow',
      'Monthly insights reports',
      'Bi-annual tax planning',
      'Payroll optimization',
      'Priority support'
    ],
    mostPopular: true
  },
  {
    id: 4,
    package: 'Scale',
    idealFor: '$2M-$3M+ turnover',
    monthlyInvestment: 'From $1,667 ($20,000 annually)',
    keyFeatures: [
      'Everything in Growth',
      'Weekly oversight',
      'Monthly consultancy',
      'Custom dashboards',
      'Direct Principal access',
      'After-hours support'
    ]
  }
];
const testimonials1 = [
  {
    title: "Professional Services (Consultants, Agencies)",
    description: "We moved to the Growth package, and the numbers speak for themselves. Thanks to the monthly management reports, our gross profit per client is up 15% in six months. More importantly, outsourcing our financial chaos means our team recovered over 10 billable hours every week, allowing us to fully focus on client delivery."
  },
  {
    title: "Trade & Construction (Builders, Trades)",
    description: "Managing cash flow across multiple sites was killing our growth. Pink's Scale package, especially the weekly cashflow oversight, helped us tighten our accounts payable cycle from 45 days to just 30 days. Direct access to the Principal for major decisions gives us the confidence to take on larger projects."
  },
  {
    title: "Healthcare & Wellness (Medical Practices, Allied Health)",
    description: "As a growing dental practice, we needed flawless compliance and a clear path for expansion. The Foundation package ensures we are 100% tax compliant and, coupled with the quarterly financial health check-ins, it gave us the clarity to plan for our second location. We estimate a 20% reduction in our internal admin costs just from their efficient process setup."
  },
  {
    title: "Technology & Creative Services (Tech Startups, Digital Agencies)",
    description: "Scaling from $500K to $1M turnover meant our systems needed an overhaul. Pink not only restructured our Chart of Accounts but also perfectly integrated our Xero setup. Now, we have real-time financial data, which is crucial for making fast decisions and preparing for our next round of investor funding."
  },
  {
    title: "Business Services (Recruitment, Property Management, B2B)",
    description: "We chose Pink because they understand the service business model. The Growth package's bi-annual strategic tax planning moved us from reactive to proactive tax management. Their advice helped us reduce our overall tax burden by 5% in the last financial year, all completely legitimately."
  }
];
const testimonials2 = [
  {
    quote: "Pink Accounting transformed our financial chaos into clarity. Within six months, we improved our cashflow by 40% and finally understood our numbers. Pinky and her team are worth every dollar.",
    author: "Amy M.",
    position: "Cafe Business Owner, Brisbane"
  },
  {
    quote: "As we scaled from $800K to $2.1M, Pink Accounting scaled with us. They didn't just keep up, they anticipated our needs and proactively solved problems before they became issues.",
    author: "Phillip P.",
    position: "Business Operator, Northside Brisbane"
  },
  {
    quote: "The responsiveness is incredible. I can email at 9 PM and know I'll get a thoughtful reply the next morning. It's like having an in-house financial team without the overhead.",
    author: "Andy T.",
    position: "Professional Services, Brisbane"
  }
];
