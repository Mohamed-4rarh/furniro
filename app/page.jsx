import Categories from '@/containers/Categories'
import Explore from '@/containers/Explore'
import Hero from '@/containers/Hero'
import Products from '@/containers/Products'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Products />
      <Explore />
    </>
  )
}
