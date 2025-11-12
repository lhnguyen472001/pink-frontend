'use client'
import React from 'react'
import logo from '@public/home/3.png'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
    const pathName = usePathname()
    const listTab = [{ title: "Home", value: "/" }, { title: "Service", value: "/service" }, { title: "About Us", value: "/about-us" }, { title: "Contact", value: "/contact" }]
    return (
        <div className='w-full z-50 bg-white sticky top-0'>

            <div className='h-14   justify-between flex items-center gap-3 max-w-5xl mx-auto w-full px-4'>
                <Link href={"/"}>
                    <Image src={logo} alt='logo' width={500} height={500} className='w-12 aspect-auto' />
                </Link>
                <div className='flex items-center justify-between gap-3'>
                    {listTab.map((val, index) => (
                        <Link href={val.value} key={index} className={`${pathName == val.value ? "font-bold" : "font-normal"}`}>{val.title}</Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header