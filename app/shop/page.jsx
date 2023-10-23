import { getProducts } from '@/Fetchers'
import Banner from '@/components/Banner'
import CustomHero from '@/components/CustomHero'
import FilterProducts from '@/components/FilterProducts'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React from 'react'

export default async function page() {
  const products = await getProducts()
  return (
    <section>
      <main>
        <CustomHero text={'shop'} />
        <div>
          <FilterProducts />
        </div>
      </main>
      <div className='max-w-[1440px] m-auto'>
        <div className='flex gap-5 flex-wrap justify-center my-[100px]'>
          {
            products?.map((product) => (
              <Link href={`/shop/${product._id}`} key={product._id}>
                <ProductCard 
                  image={product.image} 
                  name={product.name} 
                  price={product.price}
                  description={product.description} 
                  state={product.state}
                />
              </Link>
            ))
          }
        </div>
        
      </div>
      <Banner />
    </section>
  )
}
