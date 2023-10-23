import Button from '@/components/Button'
import { redirect } from 'next/navigation'
import React from 'react'

export default function Hero() {
  return (
    <main className='py-[120px] hero__section'>
      <div className='max-w-[1440px] m-auto flex justify-end'>
        <div className='max-w-[642px] bg-[#FFF3E3] px-[40px] pb-[40px] pt-[60px] rounded'>
          <span className='capitalize tracking-[2px] font-bold text-[16px]'>new arrival</span>
          <h1 className='capitalize text-[#B88E2F] font-bold leading-[40px] sm:leading-[60px] text-[40px] sm:text-[52px]'>discover our <br /> new collection</h1>
          <p className='text-[18px] font-medium mt-4 mb-[60px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <Button text={'buy now'} bg={'bg-[#B88E2F]'} color={'text-[#fff]'} path={'/shop'} />
        </div>
      </div>
    </main>
  )
}
