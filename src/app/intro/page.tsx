import Image from 'next/image';
import React from 'react'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import {IoLogoWhatsapp} from 'react-icons/io';
import orangeImg from '../../../public/magicpatternblob.png'
import orangeImg1 from '../../../public/magicpatternblob1.png'
import profilimg from '../../../public/jenniferimgbg.png'



type Props = {}

const Intro = (props: Props) => {
  return (
    <div className='flex mt-10 '>
      <div className='flex flex-col items-center lg:items-start text-center lg:text-start gap-5 lg:w-1/2'>
        <p className='text-4xl lg:text-6xl font-bold '>Hey!!! I Am</p>
        <p className=' text-4xl lg:text-6xl font-bold text-orange '>Jennifer David-Alozie</p>
        <p className=' text-xl font-semibold '>I am an enthusiastic and creative technologist with over 2 years of experience in a wide range of software, tools, and programming languages.</p>
        <div className=' mt-8'>
        <button className="btn button rounded-2xl lg:text-lg font-bold bg-orange border-orange text-white px-12 lg:px-20">Hire Me</button>
        </div>
        <div className='flex gap-5 mt-16'>
          <a href='https://github.com/jennykut12'>
          <AiFillGithub className=' text-6xl text-orange hover:text-white'/>
          </a>
          <a href='https://www.linkedin.com/in/jennifer-david-120249179'>
          <AiFillLinkedin className=' text-6xl text-orange hover:text-white'/>
          </a>
          <a href='https://github.com/jennykut12'>
          <AiFillTwitterCircle className=' text-6xl text-orange hover:text-white'/>
          </a>
          <a href='https://twitter.com/dj_jennykut?t=M7CmaGotnFCalpK7c9HGXQ&s=09'>
          <IoLogoWhatsapp className=' text-6xl text-orange hover:text-white'/>
          </a>
        </div>
      </div>
      <div className=' hidden lg:block -mt-20 relative lg:w-1/2'>
          <Image width={700} height={700} alt='img' src={orangeImg}
            className=' w-[50vw] h-[50vw] absolute'
          />
          <Image width={700} height={700} alt='img' src={orangeImg1}
            className=' w-[50vw] h-[50vw] absolute  ml-8 lg:-mt-7'
          />
          <Image width={500} height={500} alt='img' src={profilimg}
            className=' w-[30vw] h-[30vw] absolute mt-16 ml-16 lg:mt-36 lg:ml-[9vw] rounded-b-full'
          />
      </div>
    </div>
  )
}

export default Intro