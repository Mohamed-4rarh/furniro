import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CategoryCard({ image, name, id }) {
  return (
    <Link href={`/shop/categories?${id}`} className='text-center'>
        <Image src={image} alt='category' width={300} height={400} className='rounded' />
        <h3 className='font-semibold text-[14px] sm:text-[18px] md:text-[21px] mt-2'>{name}</h3>
    </Link>
  )
}
