import React from 'react'

type Props = {
    heading: string
}

const WorkCard = (props: Props) => {
  return (
    <div className=' gap-4 hover:bg-orange card border-2 border-orange rounded-full text-white w-32 h-32 flex flex-col justify-center items-center '>
        <p className='font-semibold text-6xl'>{props.heading}</p>
    </div>
  )
}

export default WorkCard