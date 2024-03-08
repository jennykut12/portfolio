import Image from 'next/image'
import React from 'react'
import Wave from '../../../public/wave.svg'
import {IoLogoWhatsapp} from 'react-icons/io';
import {AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillTwitterCircle} from 'react-icons/ai';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className="hero bgdiv min-h-[40vh] mt-40 w-full">
  <div className="hero-content mt-40 flex items-baseline">
  <div className='flex justify-center items-center gap-3 lg:gap-60'>
             <div className=''>
                 <p className='text-sm lg:text-xl font-medium'>jennykut.dj@gmail.com</p>
             </div>
             <div className='flex'>
             <a href='https://github.com/jennykut12'>
                     <AiFillGithub className=' text-3xl lg:text-6xl text-white hover:text-lightgreen'/>
                     </a>
                     <a href='https://www.linkedin.com/in/jennifer-david-120249179'>
                     <AiFillLinkedin className=' text-3xl lg:text-6xl text-white hover:text-lightgreen'/>
                     </a>
                     <a href='https://wa.me/2348133250770'>
                     <IoLogoWhatsapp className=' text-3xl lg:text-6xl text-white hover:text-lightgreen'/>
                     </a>
                     <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
                     <AiFillTwitterCircle className=' text-3xl lg:text-6xl text-white hover:text-lightgreen'/>
                     </a>
                     <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
                    <AiFillInstagram className=' text-3xl lg:text-6xl text-white hover:text-lightgreen'/>
                     </a>
             </div>
             <div className=' '>
                <p className=' text-sm lg:text-xl font-medium'>Website Developed by <br/> Jennifer David-Alozie</p>
             </div>
         </div>
  </div>
</div>
    // <div className=' min-h-[50vh]  w-full relative'>
    //     <Image width={500} height={500} src={Wave} alt='' className='min-h-[50vh] m-auto w-full'/>
    //     <div className='absolute'>
    //         <span className=''>
    //             <p>jennykut.dj@gmail.com</p>
    //         </span>
    //         <div className='flex'>
    //         <a href='https://github.com/jennykut12'>
    //                 <AiFillGithub className=' text-6xl text-white'/>
    //                 </a>
    //                 <a href='https://www.linkedin.com/in/jennifer-david-120249179'>
    //                 <AiFillLinkedin className=' text-6xl text-white'/>
    //                 </a>
    //                 <a href='https://wa.me/2348133250770'>
    //                 <IoLogoWhatsapp className=' text-6xl text-white'/>
    //                 </a>
    //                 <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
    //                 <AiFillTwitterCircle className=' text-6xl text-white'/>
    //                 </a>
    //                 <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
    //                 <AiFillInstagram className=' text-6xl text-white'/>
    //                 </a>
    //         </div>
    //         <span className=''>Website Developed by <br/> Jennifer David</span>
    //     </div>
    // </div>
  )
}

export default Footer