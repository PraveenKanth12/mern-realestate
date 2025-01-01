import React from 'react'
import { Link } from 'react-router-dom'
import "remixicon/fonts/remixicon.css"

const Header = () => {
  return (
    <header className=' bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-7xl mx-auto  p-5'>
        <Link to="/">
        <h3 className='flex flex-wrap'>
         <span className='text-slate-400 text-xl font-medium'>Praveen's</span><span className='text-slate-800 text-xl font-medium'>Realstate</span> 
        </h3>
        </Link>
        <form className='bg-slate-100 flex items-center rounded-lg p-3'>
          <input className='bg-transparent focus:outline-none w-24 sm:w-64' type='text' placeholder='Search your sites'/><i className="ri-search-line"></i>
        </form>
        <ul className='flex gap-10'>
          <Link to="/">
        <li className='hidden sm:inline hover:underline text-slate-700'>Home</li>
        </Link>
        <Link to="/about">
        <li className='hidden sm:inline hover:underline text-slate-700'>About</li>
        </Link>
        <Link to="/sign-in">
        <li className='hover:underline text-slate-700'>Sign-in</li>
        </Link>
      </ul>
      </div>

      
    </header>
  )
}

export default Header
