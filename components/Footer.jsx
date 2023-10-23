import Image from 'next/image'
import React from 'react'
import Banner from './Banner'

export default function Footer() {
  return (
    <footer className='pt-[50px] px-[20px] border-t'>
        <div className='max-w-[1440px] m-auto flex flex-wrap justify-between mb-[30px]'>
            <div>
                <div className='flex gap-[5px] font-bold text-[24px]'>
                    <Image src={'/logo.svg'} width={50} height={28} alt='Furniro' />
                    furniro.
                </div>
                <p className='text-[#9F9F9F] text-[16px] pt-[50px]'>
                400 University Drive Suite 200 Coral <br />
                Gables, <br />
                FL 33134 USA <br />
                </p>
            </div>
            <div className='flex flex-col gap-[40px] mt-[20px] lg:mt-0 mx-[30px]'>
                <h3 className='font-semibold mb-2 capitalize'>links</h3>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>home</span>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>shop</span>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>about</span>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>contact</span>
            </div>

            <div className='flex flex-col gap-[40px] mt-[20px] lg:mt-0 mx-[30px]'>
                <h3 className='font-semibold mb-2 capitalize'>help</h3>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>Payment Options</span>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>Returns</span>
                <span className='capitalize text-[#9f9f9f] cursor-pointer hover:underline'>Privacy Policies</span>
            </div>
            
            <div className='flex flex-col gap-[40px] mt-[20px] lg:mt-0 mx-[30px]'>
                <h3 className='font-semibold mb-2 capitalize'>Newsletter</h3>
                <div>
                    <input type="email" placeholder='Enter Your Email' className='border-b-2 mr-1' />
                    <button className='uppercase border-b-2 font-semibold text-[16px]'>Subscribe</button>
                </div>
            </div>            
        </div>
        <div>
            <p className='max-w-[1440px] m-auto text-[16px] py-[30px] border-t'>2023 furino. All rights reverved</p>
        </div>
    </footer>
  )
}
