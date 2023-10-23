"use client"
import { getCategories } from '@/Fetchers'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function FilterProducts() {
    const [options, setOptions] = useState()
    useEffect(() => {
        async function getOptions() {
            const options = await getCategories()
            setOptions(options)
        }
        getOptions()
    }, [])

    function handleCategory (e) {
       
    }
    console.log(options)
    return (
        <div className='bg-[#F9F1E7] py-[38px]'>
            <div className='max-w-[1440px] m-auto px-[10px] text-center'>
                <label htmlFor="category">Select Category: </label>
                <select id="category" onChange={handleCategory}>
                    {
                        options?.map((option) => (
                            <option key={option.id} className='text-[#000]' value={option.category_name}>{option.category_name}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    )
}
