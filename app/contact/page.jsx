"use client"
import Button from '@/components/Button'
import CustomHero from '@/components/CustomHero'
import Image from 'next/image'
import React from 'react'

export default function page() {
  function handleForm(e) {
    e.preventDefault()
  }
  return (
    <section>
      <CustomHero text={'Contact'} />
      <div className='max-w-[1440px] m-auto px-[30px]'>
        <div className='text-center mt-[100px] mb-[120px]'>
          <h3 className='text-[36px] font-semibold capitalize'>Get In Touch With Us</h3>
          <p className='text-[16px] max-w-[640px] text-[#9f9f9f] mt-[10px] m-auto'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='flex flex-col lg:flex-row-reverse justify-center gap-[100px]'>
          <div className='flex mb-0 flex-1 lg:mb-[100px] max-w-[640px] w-full m-auto lg:m-0'>
            <form onSubmit={handleForm} className='flex flex-col w-full'>
              <label className='text-[16px] font-medium capitalize' htmlFor="name">Name</label>
              <input 
                className='py-[20px] px-[25px] mb-[35px] mt-[22px] rounded border text-[16px] font-normal outline-0' type="text" id="name" placeholder='enter your name' />

              <label className='text-[16px] font-medium capitalize' htmlFor="email">Email</label>
              <input 
                className='py-[20px] px-[25px] mb-[35px] mt-[22px] rounded border text-[16px] font-normal outline-0' type="email" id="email" placeholder='enter your name' />

              <label className='text-[16px] font-medium capitalize' htmlFor="subject">Subject</label>
              <input 
                className='py-[20px] px-[25px] mb-[35px] mt-[22px] rounded border text-[16px] font-normal outline-0' type="text" id="subject" placeholder='this is optional' />

              <label className='text-[16px] font-medium capitalize' htmlFor="message">message</label>
              <textarea 
                className='py-[20px] px-[25px] mb-[35px] mt-[22px] rounded border text-[16px] font-normal outline-0 resize-none h-[180px]' type="text" id="message" placeholder='Hi! i’d like to ask about' />
              <button className='py-[14px] capitalize bg-[#B88E2F] text-[#fff] text-[16px] rounded'>submit</button>
            </form>
          </div>
          <div className='flex flex-row flex-wrap lg:flex-col items-center lg:items-start justify-between lg:justify-start lg:mt-[10px] mb-[50px]'>
            <div className='flex gap-[30px] items-start'>
              <Image src={'/location.svg'} alt='location' width={22} height={27} />
              <div>
                <h3 className='text-[24px] font-medium capitalize'>Address</h3>
                <p className='text-[16px] text-[#9f9f9f]'>236 5th SE Avenue,<br /> New York NY10000,<br /> United States</p>
              </div>
            </div>
            <div className='flex gap-[30px] items-start my-[40px]'>
              <Image src={'/phone.svg'} alt='phone' width={30} height={30} />
              <div>
                <h3 className='text-[24px] font-medium capitalize'>Phone</h3>
                <p className='text-[16px] text-[#9f9f9f]'>Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className='flex gap-[30px] items-start'>
              <Image src={'/clock.svg'} alt='clock' width={23} height={23} />
              <div>
                <h3 className='text-[24px] font-medium capitalize'>Working Time</h3>
                <p className='text-[16px] text-[#9f9f9f]'>Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
