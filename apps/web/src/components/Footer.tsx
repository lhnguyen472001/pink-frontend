import React from 'react'
import Link from 'next/link'
import { cn, designTokens } from '@/lib/design-tokens'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className='bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
                {/* Main Footer Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12'>
                    {/* About Column */}
                    <div className='lg:col-span-1'>
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg'>
                                <span className='text-white font-bold text-xl'>P</span>
                            </div>
                            <h3 className={cn(designTokens.typography.h5, 'text-gray-900')}>
                                Pink Accounting
                            </h3>
                        </div>
                        <p className={cn(designTokens.typography.bodySmall, 'text-gray-600 mb-4 leading-relaxed')}>
                            Your trusted Brisbane-based accounting partner helping South-East Queensland businesses thrive and scale with confidence.
                        </p>
                        <div className='flex flex-wrap gap-2 mb-4'>
                            <span className='px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-xs font-semibold'>
                                MIPA
                            </span>
                            <span className='px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-semibold'>
                                98% Retention
                            </span>
                            <span className='px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs font-semibold'>
                                15+ Years
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className={cn(designTokens.typography.h6, 'text-gray-900 mb-4')}>
                            Quick Links
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='/' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href='/about-us' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href='/service' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                    Services
                                </Link>
                            </li>
                            
                            <li>
                                <Link href='/contact' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className={cn(designTokens.typography.h6, 'text-gray-900 mb-4')}>
                            Our Services
                        </h4>
                        <ul className='space-y-3'>
                            <li>
                                <Link href='#' className='text-gray-600 hover:text-cyan-600 transition-colors text-sm'>
                                    Bookkeeping & Financial Management
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 hover:text-cyan-600 transition-colors text-sm'>
                                    Tax Compliance & Optimisation
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 hover:text-cyan-600 transition-colors text-sm'>
                                    Cashflow Management
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 hover:text-cyan-600 transition-colors text-sm'>
                                    Business Advisory
                                </Link>
                            </li>
                            <li>
                                <Link href='#' className='text-gray-600 hover:text-cyan-600 transition-colors text-sm'>
                                    System Optimisation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info & CTA */}
                    <div>
                        <h4 className={cn(designTokens.typography.h6, 'text-gray-900 mb-4')}>
                            Get In Touch
                        </h4>
                        <div className='space-y-3 mb-6'>
                            <div className='flex items-start gap-2'>
                                <svg className='w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                                </svg>
                                <a href='tel:0735446386' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                    07 3544 6386
                                </a>
                            </div>
                            <div className='flex items-start gap-2'>
                                <svg className='w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                                </svg>
                                <a href='mailto:admin@pinktax.com.au' className='text-gray-600 hover:text-pink-600 transition-colors text-sm break-all'>
                                    admin@pinktax.com.au
                                </a>
                            </div>
                            <div className='flex items-start gap-2'>
                                <svg className='w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                                </svg>
                                <span className='text-gray-600 text-sm leading-relaxed'>
                                    1/263 Toombul Rd<br />
                                    Northgate QLD 4013
                                </span>
                            </div>
                        </div>
                        
                        {/* CTA Button */}
                        <Link 
                            href='/contact' 
                            className='inline-block w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white text-center py-3 px-4 rounded-lg font-semibold text-sm hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5'
                        >
                            Book Strategy Session
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className='border-t border-gray-300 pt-8'>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-4 mb-4'>
                        <p className='text-gray-600 text-sm'>
                            © 2025 Pink Accounting & Tax Solutions. All rights reserved.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4 md:gap-6'>
                            <Link href='/privacy' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                Privacy Policy
                            </Link>
                            <Link href='/terms' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                Terms of Service
                            </Link>
                            <Link href='/disclaimer' className='text-gray-600 hover:text-pink-600 transition-colors text-sm'>
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                    <p className='text-gray-500 text-xs text-center leading-relaxed'>
                        Proudly supporting businesses from Northgate to Brendale, Sunshine Coast, and Gold Coast
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer