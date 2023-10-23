import Image from 'next/image'
import React from 'react'

export default function CustomHero({text}) {
  return (
    <main className='custom__hero'>
        <div className='max-w-[1440px] m-auto text-center'>
            <Image src={'/customhero.jpg'} width={77} height={77} alt='image' className=' mix-blend-multiply flex m-auto' />
            <h3 className='text-[48px] font-medium capitalize'>{text}</h3>
        </div>
    </main>
  )
}
