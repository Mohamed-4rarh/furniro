"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

export default function Navbar() {
    const [toggled, setToggled] = useState(false)
  return (
    <header className='py-[20px] shadow-sm sticky top-0 z-10 right-0 px-3 sm:px-[20px] bg-[#fff]'>

        {/* screen above 768px */}
        <div className="max-w-[1440px] m-auto">
            <nav className='justify-between items-center hidden md:flex'>
                <div className='font-bold text-[25px] capitalize gap-[5px] flex'>
                    <Image src={'/logo.svg'} width={50} height={32} alt='Furniro' />
                    furniro
                </div>
                <ul className='flex gap-[30px]'>
                    <li className='text-[16px] font-semibold capitalize'> <Link href={'/'}  >Home</Link> </li>
                    <li className='text-[16px] font-semibold capitalize'> <Link href={'/shop'}  >Shop</Link> </li>
                    <li className='text-[16px] font-semibold capitalize'> <Link href={'/about'}  >About</Link> </li>
                    <li className='text-[16px] font-semibold capitalize'> <Link href={'/contact'}  >Contact</Link> </li>
                </ul>
                <div className='flex gap-[30px]'>
                    <Link href={'/'}> <Image src={'/usericon.svg'} width={28} height={28} alt='User Account Setting'/> </Link>
                    <Link href={'/'}> <Image src={'/searchicon.svg'} width={28} height={28} alt='Search'/> </Link>
                    <Link href={'/'}> <Image src={'/favicon.svg'} width={28} height={28} alt='Favourites'/> </Link>
                    <Link href={'/'}> <Image src={'/shopicon.svg'} width={28} height={28} alt='Cart'/> </Link>
                </div>
            </nav>

            {/* screen under than 768px */}
            <nav className='justify-between items-center flex md:hidden'>
                <div className='font-bold text-[22px] capitalize gap-[5px] flex'>
                    <Image src={'/logo.svg'} width={40} height={20} alt='Furniro' />
                    furniro
                </div>
                
                <div className='flex gap-[15px] relative'>
                    <Link href={'/'}> <Image src={'/usericon.svg'} width={24} height={24} alt='User Account Setting'/> </Link>
                    <Link href={'/'}> <Image src={'/searchicon.svg'} width={24} height={24} alt='Search'/> </Link>
                    <Link href={'/'}> <Image src={'/favicon.svg'} width={24} height={24} alt='Favourites'/> </Link>
                    <Link href={'/'}> <Image src={'/shopicon.svg'} width={24} height={24} alt='Cart'/> </Link>
                    <button onClick={() => setToggled(prev => prev = !prev)}>
                        {
                            toggled ? 
                                <Image src={'/x.svg'} width={24} height={24} alt='close' /> :   
                                <Image src={'/bars.svg'} width={24} height={24} alt='open' /> 
                        }
                    </button>
                    <ul className={`${toggled ? 'flex' : 'hidden'} shadow-sm bg-[#fffcff] border rounded flex-col gap-[30px] absolute top-[50px] right-0 w-[200px] p-[50px]`}>
                        <li className='text-[16px] font-semibold capitalize'> <Link href={'/'}  >Home</Link> </li>
                        <li className='text-[16px] font-semibold capitalize'> <Link href={'/shop'}  >Shop</Link> </li>
                        <li className='text-[16px] font-semibold capitalize'> <Link href={'/about'}  >About</Link> </li>
                        <li className='text-[16px] font-semibold capitalize'> <Link href={'/contact'}  >Contact</Link> </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
  )
}
