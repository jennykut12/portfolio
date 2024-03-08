import React from 'react'
import WorkCard from './components/work-card'

type Props = {}

const Works = (props: Props) => {
  return (
    <div id='work' className='flex flex-col lg:flex-row py-20 items-center min-h-[60vh] gap-12 lg:gap-40'>
        <div className=' flex flex-col gap-3 lg:gap-7 cursor-pointer'>
            <WorkCard heading={'4+'}/>
            <div className=' text-center'>
                <p className=' text-2xl font-medium'>Years</p>
                <p className=' text-2xl font-medium text-orange'>Experience</p>
            </div>
        </div>
        <div className=' flex flex-col gap-7 cursor-pointer'>
            <WorkCard heading={'9+'}/>
            <div className=' text-center'>
                <p className=' text-2xl font-medium'>Completed</p>
                <p className=' text-2xl font-medium text-orange'>Projects</p>
            </div>
        </div>
        <div className=' flex flex-col gap-7 cursor-pointer'>
            <WorkCard heading={'3+'}/>
            <div className=' text-center'>
                <p className=' text-2xl font-medium'>Companies</p>
                <p className=' text-2xl font-medium text-orange'>Work</p>
            </div>
        </div>
    </div>
  )
}

export default Works