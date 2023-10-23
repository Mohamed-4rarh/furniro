import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'

export default function Explore() {
  return (
    <section className='py-[65px] bg-[#FCF8F3]'>
      <div className='max-w-[1440px] m-auto flex flex-wrap px-5 justify-center gap-[100px]'>
        <div>
          <h1 className='text-[40px] text-[#3A3A3A] font-bold capitalize leading-[48px]'>50+ Beautiful rooms <br /> inspiration</h1>
          <p className='max-w-[368px] mt-[10px] mb-[30px] text-[#616161]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <Button path={'/shop'} text={'Explore More!'} bg={'bg-[#B88E2F]'} color={'text-[#fff]'} />
        </div>
        <div>
          <div className='flex flex-row gap-5 overflow-x-scroll max-w-[420px] rounded'>
            <Image src={'/image 4.jpg'} width={400} height={580} alt='image' />
            <Image src={'/image 3.jpg'} width={400} height={580} alt='image' />
            <Image src={'/image 2.jpg'} width={400} height={580} alt='image' />
            <Image src={'/image 1.jpg'} width={400} height={580} alt='image' />
          </div>
        </div>
      </div>
    </section>
  )
}
