import Link from 'next/link'
import React from 'react'

export default function Button({ text, bg, color, path}) {
  return (
    <Link href={`./${path}`} className={`${text} ${bg} ${color} w-fit flex rounded-md py-[15px] sm:py-[25px] px-[45px] sm:px-[70px] text-[16px] font-bold uppercase`}>
        {text}
    </Link>
  )
}
