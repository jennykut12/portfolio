import Image from 'next/image'
import React from 'react'

const Cards = ({emoji, heading, details}) => {
  return (
    <div className='card border-2 border-orange rounded-2xl text-white w-[20vw] h-[40vh] absolute flex flex-col items-center text-center'>
        <Image src={emoji} className=''/>
        <p>{heading}</p>
        <p>{details}</p>
        <button className="btn button rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 lg:px-20">Learn More</button>
    </div>
  )
}

export default Cards