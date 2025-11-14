import React from 'react'
import Link from 'next/link'
import { cn, designTokens } from '@/lib/design-tokens'
import Image from 'next/image'
import logo from '@public/home/3.png'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='bg-linear-to-br from-gray-50 to-gray-100 border-t border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12'>
                    {/* Brand Section */}
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <Link href={"/"} className="flex mb-3 sm:mb-4 items-center">
                            <Image
                                src={logo}
                                alt='Pink Accounting Logo'
                                width={80}
                                height={80}
                                className='w-16 sm:w-20 aspect-auto'
                            />
                            
                        </Link>
                        <p className='text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 leading-relaxed'>
                            Your trusted Brisbane-based accounting partner helping South-East Queensland businesses thrive and scale with confidence.
                        </p>
                        <div className='flex flex-wrap gap-1.5 sm:gap-2'>
                            <span className='px-2 sm:px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-[10px] sm:text-xs font-semibold'>
                                MIPA
                            </span>
                            <span className='px-2 sm:px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-[10px] sm:text-xs font-semibold'>
                                98% Retention
                            </span>
                            <span className='px-2 sm:px-3 py-1 bg-pink-100 text-[#ed1651] rounded-full text-[10px] sm:text-xs font-semibold'>
                                15+ Years
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className='text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4'>
                            Quick Links
                        </h3>
                        <ul className='space-y-2 sm:space-y-3'>
                            {[
                                { href: '/', label: 'Home' },
                                { href: '/about-us', label: 'About Us' },
                                { href: '/service', label: 'Services' },
                                { href: '/contact', label: 'Contact' },
                            ].map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className='text-xs sm:text-sm text-gray-600 hover:text-[#ed1651] transition-colors inline-block'
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className='text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4'>
                            Our Services
                        </h3>
                        <ul className='space-y-2 sm:space-y-3'>
                            {[
                                'Bookkeeping & Financial Management',
                                'Tax Compliance & Optimisation',
                                'Cashflow Management',
                                'Business Advisory',
                                'System Optimisation',
                            ].map((service) => (
                                <li key={service}>
                                    <Link
                                        href='/service'
                                        className='text-xs sm:text-sm text-gray-600 hover:text-cyan-600 transition-colors inline-block'
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info & CTA */}
                    <div className='sm:col-span-2 lg:col-span-1'>
                        <h3 className='text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4'>
                            Get In Touch
                        </h3>
                        <div className='space-y-2 sm:space-y-3 mb-4 sm:mb-6'>
                            {/* Phone */}
                            <div className='flex items-start gap-2'>
                                <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#ed1651] shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                </svg>
                                <a
                                    href='tel:0735446386'
                                    className='text-xs sm:text-sm text-gray-600 hover:text-[#ed1651] transition-colors'
                                >
                                    07 3544 6386
                                </a>
                            </div>

                            {/* Email */}
                            <div className='flex items-start gap-2'>
                                <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#ed1651] shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                                <a
                                    href='mailto:admin@pinktax.com.au'
                                    className='text-xs sm:text-sm text-gray-600 hover:text-[#ed1651] transition-colors break-all'
                                >
                                    admin@pinktax.com.au
                                </a>
                            </div>

                            {/* Address */}
                            <div className='flex items-start gap-2'>
                                <svg className='w-4 h-4 sm:w-5 sm:h-5 text-[#ed1651] shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                </svg>
                                <address className='text-xs sm:text-sm text-gray-600 leading-relaxed not-italic'>
                                    1/263 Toombul Rd<br />
                                    Northgate QLD 4013
                                </address>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link
                            href='/contact'
                            className='inline-block w-full bg-linear-to-r from-[#ed1651] to-[#ed1651] text-white text-center py-2.5 sm:py-3 px-3 sm:px-4 rounded-lg font-semibold text-xs sm:text-sm hover:from-[#ed1651] hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                        >
                            Book Strategy Session
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-300 pt-6 sm:pt-8'>
                    <div className='flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 mb-3 sm:mb-4'>
                        <p className='text-gray-600 text-xs sm:text-sm text-center sm:text-left'>
                            © 2025 Pink Accounting & Tax Solutions. All rights reserved.
                        </p>
                        <div className='flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6'>
                            <Link
                                href='/privacy'
                                className='text-gray-600 hover:text-[#ed1651] transition-colors text-xs sm:text-sm'
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href='/terms'
                                className='text-gray-600 hover:text-[#ed1651] transition-colors text-xs sm:text-sm'
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href='/disclaimer'
                                className='text-gray-600 hover:text-[#ed1651] transition-colors text-xs sm:text-sm'
                            >
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                    <p className='text-gray-500 text-[10px] sm:text-xs text-center leading-relaxed'>
                        Proudly supporting businesses from Northgate to Brendale, Sunshine Coast, and Gold Coast
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer