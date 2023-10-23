"use client"

import Image from 'next/image'
import React from 'react'

export default function ProductCard({ image, name, price, description, state }) {
  return (
    <div className='max-w-[285px] rounded'>
        <div className='relative max-w-[285px]'>
            <Image src={image} alt='product' width={285} height={300} className='h-[300px] rounded-t' />
            { state && <div className='absolute top-5 right-5 p-3 rounded-full bg-[#FFF3E3] font-medium'>
                {state}
            </div>}
        </div>
        <div className='py-[15px] px-[16px] text-left bg-[#F4F5F7] rounded-b'>
            <h3 className='text-[24px] text-[#3A3A3A]'>{name}</h3>
            <p className='text-[#898989] text-[16px] font-medium my-[8px]'>{description}</p>
            <span className='text-[#3A3A3A] text-[20px] font-semibold'>$ {price}</span>
        </div>
    </div>
  )
}
