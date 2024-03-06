import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="navbar py-10 px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content text-xl mt-3 z-[1] p-2 bg-orange shadow-lg rounded-box w-52">
        <li className='hover:bg-white hover:text-orange rounded-md'><a>Home</a></li>
        <li className='hover:bg-white hover:text-orange rounded-md'><a>About</a> </li>
        <li className='hover:bg-white hover:text-orange rounded-md'><a>Experience</a> </li>
        <li className='hover:bg-white hover:text-orange rounded-md'><a>Services</a> </li>
        <li className='hover:bg-white hover:text-orange rounded-md'><a>Testimonials</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl lg:text-2xl">Jennifer David-Alozie</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-lg">
        <li className='hover:bg-orange rounded-md'><a>Home</a></li>
        <li className='hover:bg-orange rounded-md'><a>About</a> </li>
        <li className='hover:bg-orange rounded-md'><a>Experience</a> </li>
        <li className='hover:bg-orange rounded-md'><a>Services</a> </li>
        <li className='hover:bg-orange rounded-md'><a>Testimonials</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn button rounded-2xl  bg-orange border-orange text-white shadow-[2px 2px 14px 14px rgba(50, 115, 85, 0.62)]">Contact</a>
  </div>
</div>
  )
}

export default Navbar