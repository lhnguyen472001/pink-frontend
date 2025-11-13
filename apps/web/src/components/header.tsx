'use client'
import React, { useState } from 'react'
import logo from '@public/home/3.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'

type Props = {}

const Header = (props: Props) => {
    const pathName = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const listTab = [
        { title: "Home", value: "/" },
        { title: "Service", value: "/service" },
        { title: "About Us", value: "/about-us" },
        { title: "Contact", value: "/contact" }
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <div className='w-full z-50 bg-white sticky top-0 shadow-sm'>
            <div className='h-20 justify-between flex items-center gap-3 max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8'>
                <Link href={"/"} className="flex justify-between items-center">
                    <Image src={logo} alt='logo' width={500} height={500} className='w-20 aspect-auto' />
                    <div className="ml-3">
                        <h1 className="text-lg font-bold text-gray-900 leading-tight">Pink Accounting</h1>
                        <p className="text-xs text-gray-600">& Tax Solutions</p>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center justify-between space-x-8'>
                    {listTab.map((val, index) => (
                        <Link
                            href={val.value}
                            key={index}
                            className={`${pathName == val.value ? "font-bold text-[#ed1651]" : "font-normal"} hover:text-[#ed1651] transition-colors`}
                        >
                            {val.title}
                        </Link>
                    ))}
                    <Link
                        href="tel:0735446386"
                        className="flex items-center gap-2 bg-[#ed1651] text-white px-4 py-2 rounded-lg hover:bg-[#ed3969] transition-colors text-sm font-medium"
                    >
                        <Phone className="w-4 h-4" />
                        07 3544 6386
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className='md:hidden p-2 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors'
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        <X className="w-6 h-6 text-gray-900" />
                    ) : (
                        <Menu className="w-6 h-6 text-gray-900" />
                    )}
                </button>
            </div>

            {/* Mobile Menu Dropdown - Absolute Position */}
            {isMenuOpen && (
                <div className='md:hidden absolute top-20 left-0 right-0 bg-white border-t border-gray-200 shadow-lg'>
                    <div className='flex flex-col px-4 py-4 space-y-4'>
                        {listTab.map((val, index) => (
                            <Link
                                href={val.value}
                                key={index}
                                className={`${pathName == val.value ? "font-bold text-[#ed1651] bg-pink-50" : "font-normal hover:bg-gray-50"} px-3 py-2 rounded-lg transition-colors `}
                                onClick={closeMenu}
                            >
                                {val.title}
                            </Link>
                        ))}
                        <Link
                            href="tel:0735446386"
                            className="flex items-center justify-center gap-2 bg-[#ed1651] text-white px-4 py-3 rounded-lg hover:bg-[#ed3969] transition-colors text-sm font-medium"
                            onClick={closeMenu}
                        >
                            <Phone className="w-4 h-4" />
                            07 3544 6386
                        </Link>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Header