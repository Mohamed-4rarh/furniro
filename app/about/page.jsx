import { getBlos } from '@/Fetchers'
import Banner from '@/components/Banner'
import BlogCard from '@/components/BlogCard'
import CustomHero from '@/components/CustomHero'
import React from 'react'

export default async function page() {
  const blogs = await getBlos() 
  console.log(blogs)
  return (
    <section>
      <main>
        <CustomHero text={'blogs'} />
      </main>
      <div className='max-w-[1440px] m-auto'>
        {
          blogs?.map((blog) => (
            <BlogCard key={blog._id} 
              image={blog.image} 
              title={blog.title} 
              content={blog.content}
              permision={blog.permision}
              date={blog.date}
              category={blog.category}
            />
          ))
        }
      </div>
      <Banner />
    </section>
  )
}
