import { getCategories } from '@/Fetchers'
import CategoryCard from '@/components/Category'
import React from 'react'

export default async function Categories() {
     const categories = await getCategories()
  return (
    <section className='py-[50px] px-3'>
        <div className='max-w-[1440px] m-auto'>
            <div className='text-center mb-[50px]'>
                <h3 className='capitalize font-bold text-[24px] sm:text-[32px]'>browse the range</h3>
                <p className='capitalize text-[16px] sm:text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className='flex gap-5 justify-center'>
                {
                    categories?.map((category) => (
                        <CategoryCard key={category._id} id={category._id} name={category.category_name} image={category.image} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
