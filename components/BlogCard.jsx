import Image from 'next/image'
import React from 'react'

export default function BlogCard({ image, title, content, permision, date, category}) {
  return (
    <div className='flex justify-center gap-[20px] flex-col lg:gap-[100px] lg:flex-row my-[85px]'>
        <Image src={image} width={400} height={200} alt='blog' />
        <div>
            <div className='flex gap-7'>
                <div className='flex gap-2 text-[16px] text-[#9F9F9F]'> <Image src={'/permision.svg'} width={20} height={20} alt='permision' /> {permision}</div>
                <div className='flex gap-2 text-[16px] text-[#9F9F9F]'> <Image src={'/calender.svg'} width={20} height={20} alt='date' /> {date}</div>
                <div className='flex gap-2 text-[16px] text-[#9F9F9F]'> <Image src={'/category.svg'} width={24} height={24} alt='category' /> {category}</div>
            </div>
            <h3 className='text-[25px] sm:text-[30px] font-semibold capitalize my-[15px]'>{title}</h3>
            <p className='max-w-[800px] text-[16px] text-[#9F9F9F]'>{content}</p>
        </div>
    </div>
  )
}
