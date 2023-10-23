import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='py-[100px] px-[50px] bg-[#FAF3EA]'>
        <div className='max-w-[1440px] m-auto flex flex-wrap gap-2 justify-between items-center'>
            <div className='flex gap-[10px] items-center'>
                <Image src={'/trophy.svg'} width={60} height={60} alt='trophy'  />
                <div>
                    <h3 className='text-[#242424] text-[25px] font-semibold capitalize'>High Quality</h3>
                    <p className='text-[#898989] text-[20px] font-medium'>crafted from top materials</p>
                </div>
            </div>
            <div className='flex gap-[10px] items-center'>
                <Image src={'/right.svg'} width={60} height={60} alt='achivement'  />
                <div>
                    <h3 className='text-[#242424] text-[25px] font-semibold capitalize'>Warranty Protection</h3>
                    <p className='text-[#898989] text-[20px] font-medium'>Over 2 years</p>
                </div>
            </div>
            <div className='flex gap-[10px] items-center'>
                <Image src={'/shipping.svg'} width={60} height={60} alt='shipping'  />
                <div>
                    <h3 className='text-[#242424] text-[25px] font-semibold capitalize'>Free Shipping</h3>
                    <p className='text-[#898989] text-[20px] font-medium'>Order over 150 $</p>
                </div>
            </div>
            <div className='flex gap-[10px] items-center'>
                <Image src={'/support.svg'} width={60} height={60} alt='support'  />
                <div>
                    <h3 className='text-[#242424] text-[25px] font-semibold capitalize'>24 / 7 Support</h3>
                    <p className='text-[#898989] text-[20px] font-medium'>Dedicated support</p>
                </div>
            </div>
        </div>
        
    </div>
  )
}
