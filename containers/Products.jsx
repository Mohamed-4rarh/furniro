import { getProducts } from '@/Fetchers'
import Button from '@/components/Button'
import ProductCard from '@/components/ProductCard'
import Link from 'next/link'
import React from 'react'

export default async function Products() {
    const products = await getProducts()
    return (
        <section className='py-[100px]'>
            <div className='max-w-[1440px] m-auto text-center'>
                <h3 className='font-bold sm:text-[40px] text-[24px] capitalize text-[#3A3A3A]'>our latest products</h3>
                <div className='flex gap-5 flex-wrap justify-center my-[50px]'>
                    {
                        products?.slice(0, 8).map((product) => (
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
                <Button text={'Show More'} color={'text-[#B88E2F] m-auto'} bg={'bg-[#fff] border border-[#b88e2f]'} path={'/shop'} />
            </div>
        </section>
    )
}
