import Image from 'next/image'
import React from 'react'

const Cards = ({emoji, heading, details}) => {
  return (
    <div className=' gap-4 hover:bg-orange card border-2 border-orange rounded-2xl text-white w-[70vw] lg:w-[20vw] pb-7 min-h-[40vh] lg:absolute flex flex-col items-center text-center'>
        <Image src={emoji} className=''/>
        <p className='font-semibold text-lg'>{heading}</p>
        <p className=' text-sm'>{details}</p>
        <button className="btn button rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 ">Learn More</button>
    </div>
  )
}

export default Cards